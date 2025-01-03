import React from "react";

const initialItems = Array.from({ length: 5 }, (_, i) => ({
  value: `Item ${i + 1}`,
  id: Math.floor(Math.random() * 1000),
}));

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
        {list.map(({ value, id }, index) => (
          <li
            key={id}
            draggable
            onDragStart={() => onDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop(index)}
            onDragEnd={onDragEnd}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default DragDropList;
