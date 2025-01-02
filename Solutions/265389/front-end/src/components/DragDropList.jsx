import React from "react";
const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

function DragDropList() {
  const [list, setList] = React.useState(initialItems);
  const draggedItemRef = React.useRef(null);

  const onDragStart = (id) => {
    draggedItemRef.current = id;
  };

  const onDragEnd = () => {
    draggedItemRef.current = null;
  };

  const onDrop = (droppedId) => {
    const newList = [...list];
    const draggedItemIndex = draggedItemRef.current;
    const [draggedItem] = newList.splice(draggedItemIndex, 1);

    newList.splice(droppedId, 0, draggedItem);
    draggedItemRef.current = null;
    setList(newList);
  };

  return (
    <>
      <h1>DRAG AND DROP</h1>
      <ul data-testid="list">
        {list.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => onDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop(index)}
            onDragEnd={onDragEnd}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default DragDropList;
