import { memo } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { RiBuilding3Fill } from "react-icons/ri";

const MoleculeLogo = (props) => {
    const { nama } = props;

    return (
        <Flex alignItems="center" gap="10px">
            <RiBuilding3Fill fontSize="40px" />
            <Text fontSize="xl">{nama}</Text>
        </Flex>
    );
};

export default memo(MoleculeLogo);