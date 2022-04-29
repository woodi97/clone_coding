import { motion } from "framer-motion";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  MouseEventHandler,
} from "react";
import IconWrapper, { IconWrapperShape } from "./IconWrapper";

type IconButtonShape = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const IconButtonWrapper: ForwardRefRenderFunction<
  HTMLDivElement,
  IconWrapperShape & IconButtonShape
> = ({ onClick, ...props }, ref) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <IconWrapper {...props} />
    </motion.button>
  );
};

export default forwardRef(IconButtonWrapper);
