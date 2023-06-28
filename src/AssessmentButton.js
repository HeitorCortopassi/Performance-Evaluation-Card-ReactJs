export default function AssessmentButton({ value, selected, onPress }) {
  var content;
  if (selected) {
    content = (
      <button className="aButton selectedButton" onClick={onPress}>
        {value}
      </button>
    );
  } else {
    content = (
      <button className="aButton" onClick={onPress}>
        {value}
      </button>
    );
  }

  return <>{content}</>;
}
