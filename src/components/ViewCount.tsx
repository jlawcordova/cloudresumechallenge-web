import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import "./ViewCount.css";

export default function ViewCount() {
  const viewCount = 132;
  const fomattedViewCount = new Intl.NumberFormat(
    'en-US', {maximumSignificantDigits: 3, notation: "compact"}
  ).format(viewCount);

  return (
    <div className="container view-count-container">
      <span>
        <FontAwesomeIcon icon={faChartSimple}/>
        <span className="view-count">
          {fomattedViewCount} views
        </span>
      </span>
    </div>
  );
}