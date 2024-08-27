import { ReactNode } from "react";
import { DistanceStyled, DistanceWrapper } from "./StyledDistance";

interface DistanceAtmProps {
  icon?: ReactNode;
  children: string;
}

export const DistanceAtm = ({ icon, children, ...props }: DistanceAtmProps) => {
  return (
    <DistanceWrapper>
      {icon && icon}
      <DistanceStyled {...props}>{children}</DistanceStyled>
    </DistanceWrapper>
  );
};
