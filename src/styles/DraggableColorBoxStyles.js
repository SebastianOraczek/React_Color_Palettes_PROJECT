import sizes from "./sizes";

const styles = {
    root: {
        height: "25%",
        display: "inline-block",
        position: "relative",
        width: "20%",
        margin: "0 auto",
        marginBottom: "-6px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.2)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%",
        },
        [sizes.down("sm")]: {
            width: "50%",
            height: "10%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "5%"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        [sizes.down("sm")]: {
            alignItems: "center",
        },
    },
    deleteIcon: {
        color: "rgba(0, 0, 0, 0.5)",
        transition: "all 0.2s ease-in-out"
    }
};

export default styles;