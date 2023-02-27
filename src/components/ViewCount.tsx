import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import "./ViewCount.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewCount() {
  const [viewCount, setViewCount] = useState<number>();
  
  useEffect(() => {
    const addViewCount = async () => {
      const axiosInstance = axios.create({
        baseURL: 'https://api-resume.jlawcordova.com/',
        timeout: 5000,
      });

      const response = await axiosInstance.patch("/view-count");
  
      setViewCount(Number(response.data.viewCount));
    };

    addViewCount();
  }, []);

  const compact = (i: number) => {
    return new Intl.NumberFormat(
      'en-US', {maximumSignificantDigits: 3, notation: "compact"}
    ).format(i);
  }

  return (
    <div className="container view-count-container">
      { viewCount == null ? <></> :
        <span>
          <FontAwesomeIcon icon={faChartSimple}/>
          <span className="view-count">
            {compact(viewCount)} views
          </span>
        </span>
      }
    </div>
  );
}