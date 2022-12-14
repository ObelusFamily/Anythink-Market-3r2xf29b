import React, {useState} from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const [searchText, setSearchText] = useState("")

  const handleChange = (e) => {
    const text = e.target.value
    setSearchText(text)

    if (text.length >= 3) {
      props.onSearchByTitle(text)
    }
  }

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <input type="text" id="search-box" value={searchText} onChange={handleChange} />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;