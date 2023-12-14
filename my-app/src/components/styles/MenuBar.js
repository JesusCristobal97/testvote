const style = { 
    list: {
        width: 280,
    },
    listBottom: {
        width: "100%"
    },
    listItemText: {
        fontSize: "16px",
        fontWeight: 600,
        paddingLeft: "20px",
        color: "#5F5F5F",
    },
    grow: {
        flexGrow: 1
    },
    seccionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    seccionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
}

export default style;