type DHoverProps = {
  isActive?: boolean;
};

export default function UiHover({ isActive }: DHoverProps) {
  return (
    <div
      className={`bg-neutral-strong size-full absolute inset-0 rounded-md transition-all ${
        isActive
          ? "scale-100"
          : "group-hover:scale-100 group-hover:opacity-100 scale-90 opacity-0"
      }`}
    />
  );
}
