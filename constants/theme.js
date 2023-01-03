export const COLORS = {
    darkBG: "#202528",
    darkCard: "#262B2E",
    overlay: "#353C41",
    gray: "#98989F",
    primary: "#07B999",
    white: "#FFFFFF",
    light: "#F4F5F8"
  };
  
  export const SIZES = {
    base: 8,
    small: 12,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24,
  };
  
  export const FONTS = {
    regular: "PoppinsRegular",
    medium: "PoppinsMedium",
    semiBold: "PoppinsSemiBold",
    bold: "PoppinsBold",
    extraBold: "PoppinsExtraBold",
  };
  
  export const SHADOWS = {
    light: {
      shadowColor: COLORS.darkCard,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
  
      elevation: 3,
    },
    medium: {
      shadowColor: COLORS.darkCard,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
  
      elevation: 7,
    },
    dark: {
      shadowColor: COLORS.darkCard,
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
  
      elevation: 14,
    },
  };