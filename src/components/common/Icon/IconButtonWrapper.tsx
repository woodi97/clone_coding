import React, { forwardRef, ForwardRefRenderFunction } from "react";
import IconWrapper, { IconWrapperShape } from "./IconWrapper";

type IconButtonShape = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};
};

const IconButtonWrapper: ForwardRefRenderFunction<
  HTMLDivElement,
  IconWrapperShape & IconButtonShape
> = ({ ...props }, ref) => {
  return (
    <button className="cursor-pointer">
      <IconWrapper {...props} />
    </button>
  );
};

export default forwardRef(IconButtonWrapper);
