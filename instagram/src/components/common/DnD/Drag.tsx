import React, { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import "@atlaskit/css-reset";

// 드래그 요소 생성
const Drag = () => {
  const [datas, setDatas] = useState([{ key: "item-1", content: "item-1" }]);

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (!result || !result.destination) {
      return;
    }
    const { destination, source } = result;
    console.log(destination, source);
    if (destination.index === source.index) {
      console.log("초기 위치 index 동일한 경우");
      return;
    }
    setDatas((prev) => {
      const sourceData = datas[source.index];
      let newDatas = prev;
      newDatas.splice(source.index, 1);
      // 이동 위치로 데이터 옮기기
      newDatas.splice(destination.index, 0, sourceData);

      return newDatas;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="DropLand">
        {(provided, snapshot) => (
          <div
            className="border-[1px] border-solid border-gray-300"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {datas.map((data, index) => (
              <Draggable key={data.key} draggableId={data.key} index={index}>
                {(provided, snapshot) => (
                  <div
                    className=" m-2 p-[10px] border-[1px] border-solid border-gray-300 rounded-sm"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {data.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Drag;
