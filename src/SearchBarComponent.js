import React, { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import axios from "axios";
// import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SearchBarComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [showCatgory,setCatgory] = useState(false); //for toggling category button

  useEffect(()=>{
    handleSearch();
  },[]);

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:4000/categories/",
        {
          params: {
            search: searchTerm,
            category: selectedCategory,
          }
        }
      );
      setCategories(response.data);
      console.log("after categories api call",response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="left-c-button" onClick={()=>setCatgory(!showCatgory)}>
          <i className="icon">
            <BiCategory />
          </i>
          <span className="Catgtext">Categories</span>
        </div>
        <div className="input-div">
          <input
            className="inputfield"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <select
            className="SearchSelection"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option className="Catdrop" value={selectedCategory}>
            {selectedCategory}
            </option>
            <option className="Catdrop" value={selectedCategory}>
              {" "}
              Wellness{" "}
            </option>
            <option className="Catdrop" value={selectedCategory}>
              {" "}
              Home Decor{" "}
            </option>
            <option className="Catdrop" value={selectedCategory}>
              {" "}
              Miscellaneous{" "}
            </option>
          </select>
        </div>
        <div className="searchbutton" onClick={handleSearchTermChange}
>
          <span>Search</span>
          {/* <i></i> */}
        </div>
      </div>
      {showCatgory && <div className="category-container">
        {categories.map((category) => (
          <div key={category.id} className="category">
            
               <span>
                <Link to={`/${category.title}`}>
                 {category.title}
                 </Link>
                 </span>
              
            {category.subcatagories.map((subcatgory)=>{
              return(
                <div className="subcategory">
                   
                     <span>
                     <Link to={`/${subcatgory.name}`}>
                       {subcatgory.name}
                       </Link>
                       </span>
                     
                </div>
              )
            }
            )}
          </div>
        ))}
      </div>}
    </div>
  );
}

