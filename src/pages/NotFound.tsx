import { Link } from "react-router-dom";
import { icons } from "../information/statics";

function NotFound() {
    return (
        <div
            style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "4vh",
            }}
        >
            <h1 style={{ opacity: 0.7 }}>
                <div>
                    <img
                        src={icons.error}
                        alt="error icon"
                        style={{ height: "27vh", width: "27vh" }}
                    />
                </div>
                404
            </h1>
            <b style={{ opacity: 0.7 }}>OOPS!</b>
            <p style={{ marginBottom: "2vh", opacity: 0.7 }}>
                The page you're looking for doesn't exist
            </p>
            <Link to="/">Go back to home page</Link>
        </div>
    );
}

export default NotFound;
