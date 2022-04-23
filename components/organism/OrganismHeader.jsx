import { memo } from "react";
import MoleculeLogo from "../molecules/MoleculeLogo";

const OrganismHeader = (props) => {
    const { nama } = props;

    return (
        <MoleculeLogo nama={nama} />
    );
};

export default memo(OrganismHeader);