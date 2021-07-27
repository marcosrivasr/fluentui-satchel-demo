import * as React from "react";
import { Announced } from "@fluentui/react/lib/Announced";
import { TextField, ITextFieldStyles } from "@fluentui/react/lib/TextField";
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { MarqueeSelection } from "@fluentui/react/lib/MarqueeSelection";
import { mergeStyles } from "@fluentui/react/lib/Styling";
import { Text } from "@fluentui/react/lib/Text";

export interface IDetailsListBasicExampleItem {
  key: number;
  name: string;
  value: number;
}

export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: string;
}

export default function List() {
  let _selection: Selection;
  let _allItems: IDetailsListBasicExampleItem[];
  let _columns: IColumn[];

  const [items, setItems] = React.useState<IDetailsListBasicExampleItem[]>([]);
  const [selectionDetails, setSelectionDetails] = React.useState<string>("");

  _selection = new Selection({
    onSelectionChanged: () => setSelectionDetails(_getSelectionDetails()),
  });

  _columns = [
    {
      key: "column1",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column2",
      name: "Value",
      fieldName: "value",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ];

  _allItems = [];

  React.useEffect(() => {
    for (let i = 0; i < 5; i++) {
      _allItems.push({
        key: i,
        name: "Item " + i,
        value: i,
      });
    }

    setItems(_allItems);
    setSelectionDetails(_getSelectionDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function _getSelectionDetails(): string {
    const selectionCount = _selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return "No items selected";
      case 1:
        return (
          "1 item selected: " +
          (_selection.getSelection()[0] as IDetailsListBasicExampleItem).name
        );
      default:
        return `${selectionCount} items selected`;
    }
  }

  const _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
    alert(`Item invoked: ${item.name}`);
  };

  return (
    <div>
      <MarqueeSelection selection={_selection}>
        <DetailsList
          items={items}
          columns={_columns}
          setKey="set"
          layoutMode={DetailsListLayoutMode.justified}
          selection={_selection}
          selectionPreservedOnEmptyClick={true}
          ariaLabelForSelectionColumn="Toggle selection"
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          checkButtonAriaLabel="select row"
          onItemInvoked={_onItemInvoked}
        />
      </MarqueeSelection>
    </div>
  );
}
