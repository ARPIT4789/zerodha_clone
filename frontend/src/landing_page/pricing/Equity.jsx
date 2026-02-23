import { useState } from "react";

const pricingData = {
    equity: {
        columns: ["equity delivery", "Equity intraday", "F&O-Futures", "F&O-Options"],
        rows: [
            { title: "Brokerage", values: ["Zero Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "0.03% or Rs. 20/executed order whichever is lower", "Flat Rs. 20 per executed order"] },
            {
                title: "STT/CTT", values: ["0.1% on buy & sell", "0.025% on the sell side", "0.02% on the sell side",
                    "0.125 % of the intrinsic value on options that are bought and exercised & 0.1 % on sell side(on premium)"]
            },

            { title: "Transaction charges", values: ["NSE: 0.00297% & BSE: 0.00375%", "NSE: 0.00297% & BSE: 0.00375%", "NSE: 0.00173% & BSE: 0", "NSE: 0.03503% (on premium) & BSE: 0.0325% (on premium)"] },
            {title: "GST" ,values:["18% on (brokerage + SEBI charges + transaction charges)","18% on (brokerage + SEBI charges + transaction charges)","18% on (brokerage + SEBI charges + transaction charges)","18% on (brokerage + SEBI charges + transaction charges)"]}
        ]
    },

    currency: {
        columns: ["Futures", "Options"],
        rows: [
            { title: "Brokerage", values: ["₹20", "₹20"] },
            { title: "STT", values: ["None", "None"] }
        ]
    },

    commodity: {
        columns: ["Futures", "Options"],
        rows: [
            { title: "Brokerage", values: ["0.03%", "₹20"] },
            { title: "CTT", values: ["0.01%", "0.05%"] }
        ]
    }
};

export default function PricingTable() {
    const [activeTab, setActiveTab] = useState("equity");

    const table = pricingData[activeTab];

    return (
        <div className="container mt-5">

            {/* Tabs */}
            <ul className="nav nav-tabs mb-4">
                {Object.keys(pricingData).map(tab => (
                    <li className="nav-item" key={tab}>
                        <button
                            className={`nav-link ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.toUpperCase()}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Table */}
            <div className="table-responsive">
                <table className="table equal-table table-borderless align-middle">

                    <thead className="table-light border">
                        <tr>
                            <th></th>
                            {table.columns.map((col, i) => (
                                <th key={i}>{col}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="border">
                        {table.rows.map((row, i) => (
                            <tr key={i}>
                                <td className="fw-semibold">{row.title}</td>

                                {table.columns.map((_, j) => (
                                    <td key={j}>{row.values[j] || "-"}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
         <h3 className="text-center mt-4 fs-4 text-muted"><a href="">Calculate your costs upfront </a>using our brokerage calculator</h3>
        </div>
    );
}
