/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <DefaultView
      style={[{ backgroundColor: "transparent" }, style]}
      {...otherProps}
    />
  );
}

export function TitleText(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <DefaultText
      style={[styles.screenTitle, { color }, style]}
      {...otherProps}
    />
  );
}

export function ScreenView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  return (
    <DefaultView style={[styles.container, style]} {...otherProps}>
      <ImageBackground
        source={require("../assets/images/screen-bg.png")}
        style={styles.containerBg}
        resizeMode="stretch"
      >
        <View>{props.children}</View>
      </ImageBackground>
    </DefaultView>
  );
}

export function HeaderView(props: ViewProps) {
  return <View style={[styles.screenHeader]} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    // @TODO: temp
    // backgroundColor: "red",
  },
  containerBg: {
    width: "100%",
    height: "100%",
  },
  screenHeader: {
    // @TODO: temp
    backgroundColor: "transparent",

    flexDirection: "row",

    width: "100%",
    height: 52,
    paddingHorizontal: 17,

    justifyContent: "space-between",
  },
  screenTitle: {
    color: "#000",
    fontSize: 40,
    fontFamily: "HelveticaNeue",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 60,
  },
});
