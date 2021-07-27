import { DefaultButton } from "@fluentui/react";

import { useConst } from "@fluentui/react-hooks";

import { Icon } from "@fluentui/react/lib/Icon";

import { IContextualMenuProps } from "@fluentui/react/lib/ContextualMenu";

export default function ContextualMenu() {
  const menuProps = useConst<IContextualMenuProps>(() => ({
    items: [
      {
        key: "openInWord",
        text: "Open in Word",
        iconProps: { iconName: "Add" },
      },
      { key: "newItem", iconProps: { iconName: "Add" }, text: "New" },
      {
        key: "upload",
        iconProps: { iconName: "Upload", style: { color: "salmon" } },
        text: "Upload (Click for popup)",
        title: "Upload a file",
      },
      { key: "share", iconProps: { iconName: "Share" }, text: "Share" },
      { key: "print", iconProps: { iconName: "Print" }, text: "Print" },
      {
        key: "music",
        iconProps: { iconName: "MusicInCollectionFill" },
        text: "Music",
      },
    ],
  }));

  return (
    <DefaultButton text="Click for ContextualMenu" menuProps={menuProps} />
  );
}
