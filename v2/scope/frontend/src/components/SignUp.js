import React, { useState } from "react";
import "./SignUp.css";
import { Typography, Button, TextField, Box } from "@mui/material";
import axios from "axios";

const baseURL = "api/users";

export default function SignUp() {
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    async function sendCredentialsToBackend() {
        if (password == password1) {
            console.log("hello");
            axios
                .post(baseURL, {
                    username: username,
                    password: password,
                })
                .then((response) => {
                    setMessage(response.status);
                });
        }
    }
    return (
        <div id="newPage">
            <div class="stripes">
                <div style={{ backgroundColor: "#D58553" }}></div>
                <div style={{ backgroundColor: "#D58553" }}></div>
                <div style={{ backgroundColor: "#D58553" }}></div>
                <div>Four</div>
                <div>Five</div>
            </div>
            <div
                style={{
                    backgroundColor: "white",
                    width: "25ch",
                    left: "50%",
                    top: "50%",
                    position: "absolute",
                    transform: "translate(-50%,-50%)",
                    paddingTop: "1rem",
                    paddingBottom: "2rem",
                    paddingLeft: ".5rem",
                    paddingRight: ".5rem",
                    borderRadius: "25px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        "& .MuiTextField-root": { width: "25ch" },
                    }}
                >
                    <Typography
                        variant="h4"
                        style={{
                            textAlign: "center",
                            position: "relative",

                            // paddingBottom: "25px",
                        }}
                    >
                        Scope
                    </Typography>
                    <TextField
                        label={"username"}
                        id="margin-normal"
                        margin="normal"
                        size="small"
                        onChange={(input) => setUsername(input.target.value)}
                    />
                    <TextField
                        label={"password"}
                        id="margin-normal"
                        margin="normal"
                        size="small"
                        onChange={(input) => setPassword(input.target.value)}
                    />
                    <TextField
                        color="success"
                        label={"retype password"}
                        id="margin-normal"
                        margin="normal"
                        size="small"
                        onChange={(input) => setPassword1(input.target.value)}
                    />
                    <Button
                        style={{
                            top: "1rem",
                            position: "relative",
                            backgroundColor: "#000",
                            color: "white",
                        }}
                        onClick={() => sendCredentialsToBackend()}
                    >
                        Sign Up {message}
                    </Button>
                </Box>
            </div>
        </div>
    );
}
