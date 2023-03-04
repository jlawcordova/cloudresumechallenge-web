import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import "./ViewCount.css";
import usePatchViewCount from "../hooks/usePatchViewCount";

export default function ViewCount() {
  const [viewCount, loading, error] = usePatchViewCount();

  const formatCompact = (i: number) => {
    return new Intl.NumberFormat("en-US", {
      maximumSignificantDigits: 3,
      notation: "compact",
    }).format(i);
  };

  if (loading || viewCount == null) {
    return <div className="container view-count-container"></div>;
  }

  if (error) {
    return <div className="container view-count-container"></div>;
  }

  return (
    <div className="container view-count-container">
      <span>
        <FontAwesomeIcon icon={faChartSimple} />
        <span className="view-count">{formatCompact(viewCount)} views</span>
      </span>
    </div>
  );
}
