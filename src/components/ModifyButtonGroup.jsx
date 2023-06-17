function ModifyButtonGroup({ handleSubmitButton, handleCancelButton }) {
  return (
    <div className="join">
      <button
        data-testid="submit-button"
        onClick={handleSubmitButton}
        className="btn btn-sm join-item"
      >
        제출
      </button>
      <button
        data-testid="cancel-button"
        onClick={handleCancelButton}
        className="btn btn-sm join-item"
      >
        취소
      </button>
    </div>
  );
}
export default ModifyButtonGroup;
