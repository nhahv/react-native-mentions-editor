import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;


export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "#999",
    borderWidth: 1,
    minWidth:screenWidth - 60,
    borderRadius: 4,
    alignSelf: "stretch",
    right:0,
    marginBottom:5,
  },
  textContainer: {
    alignSelf: "stretch",
    position: "relative",
    minHeight: 40,
    maxHeight: 140
  },
  input: {
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: 10,
    minHeight: 40,
    position: "absolute",
    top: 0,
    color: "transparent",
    alignSelf: "stretch",
    width: "100%",
    fontFamily:'Roboto'
  },
  formmatedTextWrapper: {
    minHeight: 40,
    position: "absolute",
    top: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "stretch",
    width: "100%",
    fontFamily:'Roboto'
  },
  formmatedText: {
    fontSize: 16,
    fontWeight: "400"
  },
  mention: {
    fontSize: 16,
    fontWeight: "400",
    backgroundColor: "rgba(36, 77, 201, 0.05)",
    color: "#244dc9"
  },
  placeholderText: {
    color: "rgba(0, 0, 0, 0.1)",
    fontSize: 16
  }
});
