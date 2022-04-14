import "./Magazine.css";
import issue5 from "../images/backstagetalks_cover_issue_5.png";
import issue4 from "../images/backstagetalks_cover_issue_4.png";
import issue3 from "../images/backstagetalks_cover_issue_3.png";
import issue2 from "../images/backstagetalks_cover_issue_2.png";
import issue1 from "../images/backstagetalks_cover_issue_1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Magazine() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className="Magazine">

      <div className="issue-5" id="issue5">
        <div className="cover-issue">
          <img src={issue5} alt="magazine issues 5" width="420px" />
        </div>
        <p className="issue">Issue #5</p>
        <p className="buy-here">BUY HERE</p>
        <p className="or-in">or in <span>selected stores</span>.</p>
      </div>

      <div
        data-aos="slide-up"
        data-aos-duration="400"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="issue-4"
        id="issue4"
      >
        <div className="cover-issue">
          <img src={issue4} alt="magazine issues 4" width="420px" />
        </div>
        <p className="issue">Issue #4</p>
        <p className="buy-here">BUY HERE</p>
        <p className="or-in">or in <span>selected stores</span>.</p>
      </div>

      <div
        data-aos="slide-up"
        data-aos-duration="400"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="issue-3"
        id="issue3"
      >
        <div className="cover-issue">
          <img src={issue3} alt="magazine issues 4" width="420px" />
        </div>
        <p className="issue">Issue #3</p>
        <p className="buy-here">BUY HERE</p>
        <p className="or-in">or in <span>selected stores</span>.</p>
      </div>

      <div
        data-aos="slide-up"
        data-aos-duration="400"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="issue-2"
        id="issue2"
      >
        <div className="cover-issue">
          <img src={issue2} alt="magazine issues 2" width="420px" />
        </div>
        <p className="issue">Issue #2</p>
        <p className="buy-here">BUY HERE</p>
        <p className="or-in">or in <span>selected stores</span>.</p>
      </div>

      <div
        data-aos="slide-up"
        data-aos-duration="400"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="issue-1"
        id="issue1"
      >
        <div className="cover-issue">
          <img src={issue1} alt="magazine issues 1" width="420px" />
        </div>
        <p className="issue">Issue #1</p>
        <p className="buy-here">BUY HERE</p>
        <p className="or-in">or in <span>selected stores</span>.</p>
      </div>
    </div>
  );
}

export default Magazine;
