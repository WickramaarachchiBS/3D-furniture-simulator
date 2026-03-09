import React, { useEffect } from "react";
import { Trash2, RotateCcw, Maximize2 } from "lucide-react";
import { useAppState } from "../../store/StateProvider";

export const FurnitureControls: React.FC = () => {
  const {
    selectedFurnitureId,
    furniture,
    updateFurniture,
    deleteFurniture,
    selectFurniture,
  } = useAppState();

  const selected = furniture.find((f) => f.id === selectedFurnitureId);

  const handleDelete = () => {
    if (!selected) return;
    deleteFurniture(selected.id);
    selectFurniture(null);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "Delete" || e.key === "Backspace") &&
        selectedFurnitureId !== null &&
        (e.target as HTMLElement).tagName !== "INPUT" &&
        (e.target as HTMLElement).tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        handleDelete();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFurnitureId, selected]);

  if (!selected) return null;

  const handleRotate = (delta: number) => {
    updateFurniture(selected.id, {
      rotation: { y: selected.rotation.y + delta },
    });
  };

  const handleScale = (delta: number) => {
    const next = Math.max(0.1, selected.scale.x + delta);
    updateFurniture(selected.id, { scale: { x: next, y: next, z: next } });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-200">
      <span className="text-sm font-medium text-gray-700 capitalize mr-2 border-r border-gray-200 pr-3">
        {selected.type.replace(/_/g, " ")}
      </span>

      <div
        className="flex items-center gap-1 border-r border-gray-200 pr-3"
        title="Rotate"
      >
        <button
          onClick={() => handleRotate(-Math.PI / 12)}
          className="p-1.5 rounded hover:bg-gray-100 text-gray-600"
          title="Rotate Left"
        >
          <RotateCcw size={16} />
        </button>
        <button
          onClick={() => handleRotate(Math.PI / 12)}
          className="p-1.5 rounded hover:bg-gray-100 text-gray-600 scale-x-[-1]"
          title="Rotate Right"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      <div
        className="flex items-center gap-1 border-r border-gray-200 pr-3"
        title="Scale"
      >
        <button
          onClick={() => handleScale(-0.1)}
          className="p-1.5 rounded hover:bg-gray-100 text-gray-600 font-bold text-base leading-none"
          title="Shrink"
        >
          −
        </button>
        <Maximize2 size={14} className="text-gray-400" />
        <button
          onClick={() => handleScale(0.1)}
          className="p-1.5 rounded hover:bg-gray-100 text-gray-600 font-bold text-base leading-none"
          title="Grow"
        >
          +
        </button>
      </div>

      <div className="flex items-center gap-1 border-r border-gray-200 pr-3">
        <input
          type="color"
          value={selected.color}
          onChange={(e) =>
            updateFurniture(selected.id, { color: e.target.value })
          }
          className="w-8 h-8 rounded cursor-pointer border border-gray-200"
          title="Color"
        />
      </div>

      <button
        onClick={handleDelete}
        className="p-1.5 rounded hover:bg-red-50 text-red-500"
        title="Delete (Del)"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};
