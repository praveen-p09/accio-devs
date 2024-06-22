import { useRef } from "react";
// import './slider.css';
import {
  useGsapTextUnvile,
  useGsapTextForward,
  useGsapHeadingRevile,
  useGsapCtaUpward
} from "../../hooks/gsap.jsx";
import './slider.css';
const giveStyling={
  "background-color":"red",
   "borderRadius":"10px",
   "text-decoration":"none"

}
const Slide = ({ image }) => {
  const headingSpanRef = useRef(null);
  const bodyRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);

  useGsapTextUnvile([headingSpanRef]);
  useGsapTextForward([bodyRef]);
  useGsapHeadingRevile([headingRef]);
  useGsapCtaUpward([ctaRef]);

  return (
    <div
      className='slide'
      style={{ backgroundImage: `url(${image.src}) ` }}
      key={image.id}
    >
      <div className='slide-content container'>
        <div className="containerInside">
        <h1 ref={headingRef} style={{"textAlign":"left"}}>
          {image.headline}
          <span ref={headingSpanRef}></span>
        </h1>
        <p className="sliderContent" ref={bodyRef}>{image.body}</p>
        </div>
        <a href={`${image.target}`} ref={ctaRef} className='slide-cta-link' style={giveStyling}>
          {image.cta}
        </a>
      </div>
    </div>
  );
};

export default Slide;
