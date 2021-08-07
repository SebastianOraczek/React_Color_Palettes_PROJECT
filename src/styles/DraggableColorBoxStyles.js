const styles = {
    root: {
        height: "25%",
        display: "inline-block",
        position: "relative",
        width: "20%",
        margin: "0 auto",
        marginBottom: "-4px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.2)"
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
        justifyContent: "space-between"
    },
    deleteIcon: {
        color: "rgba(0, 0, 0, 0.5)",
        transition: "all 0.2s ease-in-out"
    }
};

export default styles;