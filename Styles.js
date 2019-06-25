import { Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width
};

export const colorStyle = {
  orange: "#ff9616",
  black: "#000",
  milky: "#F5FCFF",
  green: "#15a52d",

  activeTintColor: "#E0F7FA",
  activeBackgroundColor: "#00ACC1",
  inactiveTintColor: "#80DEEA",
  tabBarBackground: "#00BCD4",
};

export const fontStyle = {
  sm: 14,
  md: 16,
  lg: 21,
  extra: 25,
  description: {
    color: "#000",
    fontSize: 16,
  },
  title : {
    color: "#000",
    fontSize: 21,
  },
  boldText: {
    color: "#000",
    fontSize: 21,
    fontWeight: "600"
  }
};

export const containerStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center"
};

export const inputStyle = {
  borderWidth: 2,
  height: 45,
  width: 240,
  borderRadius: 5,
  marginBottom: 20
};

export const centrify = {
  justifyContent: "center",
  alignItems: "center"
};

export const imputsMargin = {
  marginBottom: 13
};

export const LoginScreenStyle = {
  logoPic: {
    width: 200,
    height: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 55
  }
};

export const accordion = {
    marginTop: 5,
    marginLeft: 5,
    fontStyle: "italic"
}

export const BlockTemplateStyle = {
  cardStyle: {
    width: "96%",
    marginLeft: "2%",
    top: 4,
    borderColor: "#f0f0",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 5,
    marginBottom: 10
  },
  cardImageStyle: {
    width: "100%",
    height: 255,
    flex: 1
  }
};

export const BasePageTemplateStyle = {
  logo: {
    width: 270
  },
  icon: {
    borderWidth: 3,
    borderRadius: 200,
    width: 230,
    height: 230
  }
}
