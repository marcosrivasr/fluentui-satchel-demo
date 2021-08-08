import { observer } from "mobx-react";
import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  SelectionMode,
  Selection,
} from "@fluentui/react/lib/DetailsList";
import { Todo } from "../types/todotypes";
import getStore from "../store/store";
import { useState } from "react";

export default observer(() => {
  const [selectionDetails, setSelectionDetails] = useState("");
  const _columns: IColumn[] = [
    {
      key: "column1",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ];
  const _onItemInvoked = (item: Todo): void => {
    alert(`Item invoked: ${item.name}`);
  };

  function _getSelectionDetails(): string {
    const selectionCount = _selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return "No items selected";
      case 1:
        return (
          "1 item selected: " + (_selection.getSelection()[0] as Todo).name
        );
      default:
        return `${selectionCount} items selected`;
    }
  }

  let _selection: Selection = new Selection({
    onSelectionChanged: () => setSelectionDetails(_getSelectionDetails()),
  });

  return (
    <div>
      <DetailsList
        items={getStore().items}
        columns={_columns}
        setKey="set"
        isHeaderVisible={false}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.justified}
        selectionPreservedOnEmptyClick={true}
        ariaLabelForSelectionColumn="Toggle selection"
        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
        checkButtonAriaLabel="select row"
        onItemInvoked={_onItemInvoked}
        selection={_selection}
      />
    </div>
  );
});
