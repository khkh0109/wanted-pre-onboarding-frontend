function TodoItemButtonGroup({ handleDeleteButton, handleModifyButton }) {
  return (
    <div className="join">
      <button
        data-testid="delete-button"
        onClick={handleDeleteButton}
        className="btn btn-sm join-item"
      >
        삭제
      </button>
      <button
        data-testid="modify-button"
        onClick={handleModifyButton}
        className="btn btn-sm join-item"
      >
        수정
      </button>
    </div>
  );
}

export default TodoItemButtonGroup;
