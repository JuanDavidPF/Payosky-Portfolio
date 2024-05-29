import Isotype from "./Isotype";
import Logotype from "./Logotype";

export type PayoskyLogoTypeProps = {
  size: number;
  strokeColor: string;
  textColor: string;
};

type PayoskyLogoProps = {
  type?: "isotype" | "logotype";
  theme?: "light" | "dark";
  contrast?: "sm" | "md" | "lg";
  size?: number;
};

const PayoskyLogo: React.FC<PayoskyLogoProps> = ({
  contrast = "lg",
  theme = "dark",
  type = "isotype",
  size = 64,
}) => {
  const StrokeColor = () => {
    switch (contrast) {
      case "sm":
        return "transparent";
      case "md":
        return theme === "dark" ? "#333333" : "#EEEEEE";
      case "lg":
        return theme === "dark" ? "#191919" : "#333333";
    }
  }; //Closes StrokeColor method

  const TextColor = () => {
    switch (contrast) {
      case "sm":
      case "md":
        return theme === "dark" ? "#EEEEEE" : "#333333";
      case "lg":
        return "#EEEEEE";
    }
  }; //Closes TextColor method

  return (
    <div>
      {type == "isotype" ? (
        <Isotype size={size} strokeColor={StrokeColor()} />
      ) : (
        <Logotype
          size={size}
          strokeColor={StrokeColor()}
          textColor={TextColor()}
        />
      )}
    </div>
  );
};
//Closes Payosky Component

export default PayoskyLogo;
