import { convertDistance } from "./utils/convertdistance";
import { DistanceWrapper } from "./StyledDistance";
import { LocateIcon } from "../../../assets/icons/LocateIcon";
import { TypographyAtm } from "../../atoms/TypographyAtm";

interface DistanceMolProps {
  distance: number;
}

export const DistanceMol = ({ distance, ...props }: DistanceMolProps) => {
  const totalDistance = convertDistance(distance);
  return (
    <DistanceWrapper>
      <LocateIcon />
      <TypographyAtm variant="span" {...props}>
        {totalDistance}
      </TypographyAtm>
    </DistanceWrapper>
  );
};
