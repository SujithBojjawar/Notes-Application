import React from "react";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.stopPropagation(); // ⚡ important
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      const res = await api.delete(`/notes/${id}`);
      console.log("Delete response:", res);
      setNotes((prev) => prev.filter((n) => n._id !== id));
      toast.success(res.data.message || "Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete:", error.response || error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <div
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#FFA500] cursor-default"
      onClick={() => {}}
    >
      {/* Only the content is clickable via Link */}
      <Link to={`/note/${note._id}`} className="card-body cursor-pointer">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
      </Link>

      {/* Actions outside Link */}
      <div className="card-actions justify-between items-center mt-4 px-4 pb-4">
        <span className="text-sm text-base-content/60">
          {formatDate(new Date(note.createdAt))}
        </span>
        <div className="flex items-center gap-2">
          <PenSquareIcon className="size-4 cursor-pointer" />
          <button
            className="btn btn-ghost btn-xs text-error"
            onClick={(e) => handleDelete(e, note._id)}
          >
            <Trash2Icon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
