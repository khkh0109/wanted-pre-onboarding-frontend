function TodoItemButtonGroup({ handleDeleteButton, handleModifyButton }) {
  return (
    <div>
      <button data-testid="delete-button" onClick={handleDeleteButton}>
        삭제
      </button>
      <button data-testid="modify-button" onClick={handleModifyButton}>
        수정
      </button>
    </div>
  );
}

export default TodoItemButtonGroup;
