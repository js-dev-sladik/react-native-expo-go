import type {TextStyle} from 'react-native';

type RequiredKey<T> = Required<{
  [K in keyof T]: T[K];
}>;

type FontFamilyVariant = NonNullable<TextStyle['fontFamily']>;
type FontStyleVariant = NonNullable<TextStyle['fontStyle']>;
type FontWeightVariant = NonNullable<TextStyle['fontWeight']>;
type FontFamily = RequiredKey<Pick<TextStyle, 'fontFamily'>>;
type FontFamilyMapKey = FontFamilyVariant;
type FontFamilyMapValue = Record<
  FontStyleVariant,
  Record<FontWeightVariant, FontFamily>
>;
type FontFamilyMap = Record<FontFamilyMapKey, FontFamilyMapValue>;

const fontFamilyMap: FontFamilyMap = {
  Raleway: {
    normal: {
      100: {fontFamily: 'Raleway-Thin'},
      200: {fontFamily: 'Raleway-ExtraLight'},
      300: {fontFamily: 'Raleway-Light'},
      400: {fontFamily: 'Raleway-Regular'},
      500: {fontFamily: 'Raleway-Medium'},
      600: {fontFamily: 'Raleway-SemiBold'},
      700: {fontFamily: 'Raleway-Bold'},
      800: {fontFamily: 'Raleway-ExtraBold'},
      900: {fontFamily: 'Raleway-Black'},
      normal: {fontFamily: 'Raleway-Regular'},
      bold: {fontFamily: 'Raleway-Bold'},
    },
    italic: {
      100: {fontFamily: 'Raleway-ThinItalic'},
      200: {fontFamily: 'Raleway-ExtraLightItalic'},
      300: {fontFamily: 'Raleway-LightItalic'},
      400: {fontFamily: 'Raleway-Italic'},
      500: {fontFamily: 'Raleway-MediumItalic'},
      600: {fontFamily: 'Raleway-SemiBoldItalic'},
      700: {fontFamily: 'Raleway-BoldItalic'},
      800: {fontFamily: 'Raleway-ExtraBoldItalic'},
      900: {fontFamily: 'Raleway-BlackItalic'},
      normal: {fontFamily: 'Raleway-Italic'},
      bold: {fontFamily: 'Raleway-BoldItalic'},
    },
  },
};

export const getTextStyle = (textStyle: TextStyle) => {
  const {
    fontFamily,
    fontStyle = 'normal',
    fontWeight = 'normal',
    ...rest
  } = textStyle;

  if (!fontFamily) return textStyle;

  const font = fontFamilyMap[fontFamily][fontStyle][fontWeight];

  return {
    ...font,
    ...rest,
  };
};
