


export const colors = {
    buttons: "#FFFFFF",
    turquoise: "#00CED1", //buttons
    grey: "#bdc6cf", //grey4
    grey2: '#e1e8ee', //grey5
    grey3: '#43484d', //grey1
    grey4: '#5e6977', //grey2
    grey5: '#86939e', //grey3
    CardComment: '#86939e',
    vibrantOrange: "#FFA500",
    title: "#FFFFFF",
    bartitle: "#C6C6C6",
    descriptionText: "#FFD700",
    yellowV: "#FFD700",
    blue: "#4E4CFB",
    cardBackground: "#FFFFFF",
    buttonIcons: "#FFFFFF",
    google: "#DB4437",
    redApetit: "#FF6347",
    freshGreen: "#00FF00",
    warmBrown: "#8B4513",
    black: "#000000",
};

export const parameters = {
    headerHeight: 50,
    //notificationBarHeight: 10,

    styledButton: {
        backgroundColor: colors.vibrantOrange,
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 15,
        //borderWidth: 1,
        height: 50,
        width: "90%",
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 10,
        paddingHorizontal: 20,
    },
    buttonTitle: {
        color: colors.buttons,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3,
        marginHorizontal: 20,
    },
    createButton: {
        backgroundColor: colors.turquoise,
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.vibrantOrange,
        height: 50,
        //paddingHorizontal: 20,
        marginHorizontal: 20,
        marginBottom: 20,
        //marginTop: -3,
        //width: 150,
    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 17,
        paddingVertical: 8,
        //height: 35,
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
    },

    deliveryText: {
        marginLeft: 5,
        fontSize: 17,
        fontWeight: "bold",
    },
}


export const titleText = {
    color: colors.title,
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: "auto",
};

export const subTitleText = {
    color: colors.subtitle,
    fontSize: 20,
    fontWeight: "bold",
    //marginLeft: "auto",
    marginTop: "auto",
};

export const descriptionText = {
    color: colors.vibrantOrange,
    fontSize: 16,
    fontWeight: "bold",
    //marginLeft: 20,
    //marginTop: 10,
};

export const blueSubtitleText = {
    color: colors.turquoise,
    fontSize: 20,
    fontWeight: "bold",
    //marginTop: "auto",
};

export const inputText1 = {
    borderWidth: 1,
    borderColor: colors.black,
    //marginHorizontal: 10,
    borderRadius: 15,
    marginBottom: 10,
    fontSize: 17,
    color: colors.black,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    width: "80%"
};

export const inputText2 = {
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 40,
    fontSize: 17,
    borderColor: colors.black,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
};

export const fonts = {
    ios: {
        regular: 'System',
        light: 'System',
        lightItalic: 'System',
        bold: 'System',
        boldItalic: 'System',
        black: 'System',
        blackItalic: 'System',
    },
    android: {
        regular: 'Roboto',
        italic: 'Roboto-Italic',
        thin: 'Roboto-Thin',
        thinItalic: 'Roboto-ThinItalic',
        light: 'Roboto-Light',
        lightItalic: 'Roboto-LightItalic',
        medium: 'Roboto-Medium',
        mediumItalic: 'Roboto-MediumItalic',
        bold: 'System',
        boldItalic: 'Roboto-BoldItalic',
        condensed: 'RobotoCondensed-Regular',
        condensedItalic: 'RobotoCondensed-Italic',
    }
}