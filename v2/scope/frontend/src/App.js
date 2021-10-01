import sample from "./videos/city.mp4";
import "./App.css";
import SignUp from "./components/SignUp";
import Sourcing from "./components/Sourcing";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
const styles = {
    customizeToolbar: {
        minWidth: "200px",
        left: "50vw",
        transform: "translate(-50%)",
        width: "90%",
        overflow: "hidden",
        maxWidth: "900px",
    },
};

function App() {
    return (
        <div className="App">
            <Router>
                <Box
                    sx={{ flexGrow: 1 }}
                    style={{
                        maxWidth: "100vw",
                        display: "block",
                        zIndex: "100",
                    }}
                >
                    <AppBar
                        position="static"
                        style={{
                            backgroundColor: "transparent",
                        }}
                    >
                        <Toolbar style={styles.customizeToolbar}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            ></IconButton>

                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                <Link
                                    to="/home"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                >
                                    Scope
                                </Link>
                            </Typography>

                            <Button
                                style={{ backgroundColor: "transparent" }}
                                color="inherit"
                            >
                                About
                            </Button>
                            <Button
                                style={{ backgroundColor: "transparent" }}
                                color="inherit"
                            >
                                Data
                            </Button>
                            <Link
                                to="/sourcing"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    style={{
                                        backgroundColor: "transparent",
                                        color: "#fff",
                                    }}
                                    // color="inherit"
                                >
                                    Sourcing
                                </Button>
                            </Link>
                            <Link
                                to="/signup"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    style={{
                                        borderRadius: "35",
                                        backgroundColor: "#fff",
                                        color: "black",
                                    }}
                                    color="inherit"
                                >
                                    SignUp
                                </Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Switch>
                    <Route path="/home">
                        {/* This is where content on the main page will occur */}
                        <video
                            id="background-video"
                            style={{
                                width: "100vw",
                                height: "100vh",
                                zIndex: -1,
                            }}
                            loop
                            autoPlay
                            muted
                        >
                            <source src={sample} type="video/mp4" />
                        </video>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/sourcing">
                        <Sourcing />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
