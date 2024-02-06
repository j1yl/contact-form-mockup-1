import React from "react";

type Props = {
  children: React.ReactNode;
};

const Badge = (props: Props) => {
  return (
    <div className="p-2 border rounded-xl border-neutral-200 w-max h-max aspect-square">
      {props.children}
    </div>
  );
};

export default Badge;
