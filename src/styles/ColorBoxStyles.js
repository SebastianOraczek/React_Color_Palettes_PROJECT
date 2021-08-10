import chroma from "chroma-js";
import sizes from "./sizes";

const styles = {
    colorBox: {
        height: props =>
            props.showingFullPalette ? "25%" : "50%",
        display: "inline-block",
        position: "relative",
        width: "20%",
        margin: "0 auto",
        marginBottom: "-4px",
        "&:hover button": {
            opacity: "1",
            transition: "0.4s",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props =>
                props.showingFullPalette ? "10%" : "20%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props =>
                props.showingFullPalette ? "5%" : "10%",
        },
    },
    copyText: {
        color: props =>
            chroma(props.background).luminance() >= 0.6 ? "rgba(0, 0, 0, 0.6)" : "white"
    },
    colorName: {
        color: props =>
            chroma(props.background).luminance() <= 0.06 ? "white" : "rgba(0, 0, 0, 0.6)"
    },
    seeMore: {
        color: props =>
            chroma(props.background).luminance() >= 0.6 ? "rgba(0, 0, 0, 0.6)" : "white",
        position: "absolute",
        right: "0px",
        bottom: "0px",
        width: "60px",
        height: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        textAlign: "center",
        lineHeight: "30px",
        cursor: "pointer",
    },
    copyButton: {
        color: props =>
            chroma(props.background).luminance() >= 0.6 ? "rgba(0, 0, 0, 0.6)" : "white",
        display: "inline-block",
        width: "100px",
        height: "30px",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        fontSize: "1rem",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        textAlign: 'center',
        outline: "none",
        lineHeight: "30px",
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
        opacity: "0"
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
    },
    copyOverlay: {
        opacity: "0",
        width: "100%",
        height: "100%",
        zIndex: "0",
        transform: "scale(0.1)",
        transition: "transform 0.4s ease-in-out",
    },
    showOverlay: {
        opacity: "1",
        zIndex: "10",
        transform: "scale(50)",
        position: "absolute",
    },
    copyMessage: {
        position: "fixed",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "3rem",
        color: "white",
        opacity: "0",
        transform: "scale(0.1)",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.3)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
        },
        "& p": {
            fontSize: "1.7rem",
            fontWeight: "100"
        }
    },
    showCopyMessage: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: 25,
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s",
    }
};

export default styles;