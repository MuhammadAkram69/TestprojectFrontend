
import { useState, useEffect } from 'react';
import axios from 'axios';
// import UseFetchData from './UseFetchData';

// function CategorySearch() {
//   const [categories, setCategories] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/products/?category='+ searchTerm);
//         console.log(response.data);
//         setCategories(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchCategories();
//   }, [searchTerm]);



//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };


//   let filteredCategories = [];

//   if (Array.isArray(categories)) {
//     filteredCategories = categories.filter((category) =>
//       category.name.includes(searchTerm)
//     );
//   }

//   return (
//     <div className='Catgorytest'>
//       <div className='proSearch'>
//         <input type="text" placeholder='Search categories...' onChange={handleInputChange} />
//       </div>
//       {filteredCategories.length > 0 && (
//         <ul className='Catlist'>
//           {filteredCategories.map((category) => (
//             <li key={category.id}>{category.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default CategorySearch;


function CategorySearch() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/products/?category=${searchTerm}`);
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  let filteredCategories = [];

  if (Array.isArray(categories)) {
    filteredCategories = categories.filter((category) =>
      category.name.includes(searchTerm)
    );
  }

  return (
    <div className='CategorySearch'>
      <div className='proSearch'>
        <input type="text" placeholder='Search categories...' onChange={handleInputChange} />
      </div>
      {filteredCategories.length > 0 && (
        <select>
          {filteredCategories.map((category) => (
            <option key={category.id} value={category.title}>{category.title}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default CategorySearch;
