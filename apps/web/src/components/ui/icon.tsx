import { useMemo } from "react";
import * as solidIcons from "@heroicons/react/16/solid";

type DIconProps = {
  name: string;
  color?: string;
  className?: string;
};

export default function UiIcon({
  name,
  color,
  className = "size-4",
}: DIconProps) {
  const DynamicIcon = useMemo(() => {
    if (!name) return null;

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const iconComponentName = `${capitalizedName}Icon`;

    const IconComponent = (
      solidIcons as Record<
        string,
        React.ComponentType<React.SVGProps<SVGSVGElement>>
      >
    )[iconComponentName];

    if (!IconComponent) {
      console.error(
        `Icon "${iconComponentName}" not found in @heroicons/react/16/solid`,
      );
      return null;
    }

    return IconComponent;
  }, [name]);

  if (!DynamicIcon) return null;

  return (
    <DynamicIcon
      className={`${className} ${color ? `text-${color}-600` : "text-neutral-subtle"}`}
    />
  );
}
