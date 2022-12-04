import React,{useState} from "react";
import PropTypes from "prop-types";
import "./share.css";

export default function Share({
  backgroundColor,
  color,
  label,
  image,
  border,
  ...props
}) {
  var getAbsPosition = function(el){
    var el2 = el;
    var curtop = 0;
    var curleft = 0;
    if (document.getElementById || document.all) {
        do  {
            curleft += el.offsetLeft-el.scrollLeft;
            curtop += el.offsetTop-el.scrollTop;
            el = el.offsetParent;
            el2 = el2.parentNode;
            while (el2 != el) {
                curleft -= el2.scrollLeft;
                curtop -= el2.scrollTop;
                el2 = el2.parentNode;
            }
        } while (el.offsetParent);

    } else if (document.layers) {
        curtop += el.y;
        curleft += el.x;
    }
    curtop += el.style.height + 5;
    return [curtop, curleft];
};
  const [popup, setPopup] = useState("")
  return (
    <>
    <h1>iug</h1>
    <div id="share-btn" style={{ backgroundColor, color, border:`1px solid ${border}` }} onClick={()=>{
      let [top,left]=(getAbsPosition(document.getElementById('share-btn')))
      setPopup( <div id="share-popup" style={{top,left}}>
      <h1>popup</h1>
    </div>)
    }}>
      <p>{label}</p>
      <div className="share-img">
        <img src={`https://www.linkpicture.com/q/${image}-share.png`} alt="" />
      </div>
    </div>
    {popup}
    </>
  );
}

Share.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  image: PropTypes.oneOf(["black", "white"]),
  border: PropTypes.string,
};

Share.defaultProps = {
  backgroundColor: "black",
  color: "white",
  label: "Share",
  image: "white",
  border: 'black'
};
