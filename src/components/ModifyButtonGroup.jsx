function ModifyButtonGroup({ handleSubmitButton, handleCancelButton }) {
  return (
    <div>
      <button data-testid="submit-button" onClick={handleSubmitButton}>
        제출
      </button>
      <button data-testid="cancel-button" onClick={handleCancelButton}>
        취소
      </button>
    </div>
  );
}
export default ModifyButtonGroup;
