export default {
    palette: {
        height: "97vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    colors: {
        height: "90%"
    },
    goBack: {
        height: "50%",
        display: "inline-block",
        position: "relative",
        width: "20%",
        margin: "0 auto",
        marginBottom: "-4px",
        backgroundColor: "black",
        "& a": {
            display: "inline-block",
            width: "100px",
            height: "30px",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            fontSize: "1rem",
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            textAlign: "center",
            outline: "none",
            lineHeight: "30px",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
        }
    },
};