import { memo } from "react";
import OrganismHeader from "../components/organism/OrganismHeader";

const index = () => {
    return (
        <OrganismHeader nama="Yusuf" />
    );
};

export default memo(index);