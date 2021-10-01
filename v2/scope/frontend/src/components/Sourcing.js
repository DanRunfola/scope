import React, { useState } from "react";

export default function Sourcing() {
    return (
        <>
            <div style={{ position: "relative" }}>
                <link
                    href="//netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                    rel="stylesheet"
                />

                <h2>Sourcing - Auto</h2>

                <h5 style={{ padding: "15px", float: "right" }}>
                    <a href="{% url 'auto_import' %}" class="btn btn-primary">
                        Auto Import
                    </a>
                </h5>

                <div class="table-striped table-hover table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Source ID</th>
                                <th>Source Code</th>
                                <th>URL</th>
                                <th>Added</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {% for source in sources %} */}
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>
                                    <a
                                        href="{% url 'source_view' pk=source.pk %}"
                                        class="btn btn-secondary"
                                    >
                                        View
                                    </a>
                                </td>
                            </tr>
                            {/* {% endfor %} */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: "grey",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    zIndex: "-1",
                }}
            ></div>
        </>
    );
}
