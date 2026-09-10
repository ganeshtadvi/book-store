
import './Filter.css'


const FilterBooks=(props)=>{


  return (
          <section className="filter-section">
            <div className="filter-container">       
              <div className="filter-group search-group">
                <label htmlFor="search">Search</label>
                <div className="search-box">
                  <input
                    type="text"
                    id="search"
                    onChange={e=>props.setSearch(e.target.value)}
                    placeholder="Search by title or author..."
                  />
                  <button type="button" onClick={props.onClick}>🔍</button>
                </div>
              </div>
      
              <div className="filter-group">
                <label htmlFor="category">Category</label>
                <select id="category"
                    defaultValue={'all'}
                    onChange={(e) => {
                      props.handleCategoryChange(e.target.value)
                    }}
                    >
                  <option value="all">All</option>
                  <option value="Programming">Programming</option>
                  <option value="Self-Help">Self-Help</option>
                  <option value="Finance" >Finance</option>
                  <option value="Autobiography">Autobiography</option>
                  <option value="Novel">Novel</option>
                </select>
              </div>
      
             
              <div className="filter-group">
                <label htmlFor="sort">Sort By</label>
                <select id="sort" defaultValue="default" onChange={(e)=>{props.handleSorting(e.target.value)}}>
                  <option value="default">default</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="popular">Most Popular</option>
                  <option value="title-az">Title (A-Z)</option>
                  <option value="title-za">Title (Z-A)</option>
                </select>
              </div>
            </div>
          </section>
        );
      };
      
      export default FilterBooks;
 