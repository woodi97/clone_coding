import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import HorizontalLine from "../HorizontalLine";

const ModalPortal: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.getElementById("modal") as HTMLElement)
    : null;
};

const ModalBase: FC<{
  show: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}> = ({
  show,
  title = process.env.NEXT_PUBLIC_APP_TITLE,
  onClose,
  children,
}) => {
  return (
    <div
      className={classNames(
        "fixed flex justify-center items-center top-0 left-0 z-[1000] w-full h-full",
        show ? "block" : "hidden"
      )}
    >
      <div
        className="absolute top-0 left-0 z-[998] w-full h-full bg-black/50 dark:bg-gray/50"
        onClick={() => {
          onClose();
        }}
      />
      <div className="relative z-[998] w-full sm:max-w-lg sm:min-w-[20rem] rounded-md bg-white dark:bg-gray-700">
        <div className=" px-8">
          <h1 className="text-md text-center py-2 border-b-2 dark:text-white">
            {title}
          </h1>
        </div>
        <HorizontalLine />
        <div className=" px-8">
          <div className="py-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

const ModalContainer: FC<{
  children: React.ReactNode;
  title: string;
  show: boolean;
  onClose: () => void;
}> = ({ children, title, show, onClose }) => {
  return (
    <ModalPortal>
      <ModalBase title={title} show={show} onClose={onClose}>
        {children}
      </ModalBase>
    </ModalPortal>
  );
};

export default ModalContainer;
