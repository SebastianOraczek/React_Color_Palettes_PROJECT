import sizes from "./sizes";

const styles = {
    navbar: {
        display: "flex",
        alignItems: "center",
        justifyItems: "flex-start",
        height: "6vh",
    },
    logo: {
        fontSize: "22px",
        marginRight: "50px",
        padding: "0 13px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& a": {
            textDecoration: "none",
            color: "black",
        },
        [sizes.down("xs")]: {
            display: "none"
        }
    },
    slider: {
        display: "inline-block",
        width: "340px",
        margin: "0 10px",
        [sizes.down("md")]: {
            width: "150px"
        },
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem",
    }
};

export default styles;