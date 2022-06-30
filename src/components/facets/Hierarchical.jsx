// Renders the Hierarchical facets
import { useHierarchicalMenu } from 'react-instantsearch-hooks-web';

// This component is recursive, to allow subcategories to be displayed
// eg. Categories > Mens > Clothing > Jackets
const CustomHierarchicalMenu = (props) => {
  const { items, refine } = useHierarchicalMenu(props);
  const { title, itemsData } = props;

  return (
    <div className="filters-container-hierarchical">
      <div className="filters-container-hierarchical__title">
        <h3>{title}</h3>
      </div>
      <ul className="filters-container-hierarchical__content">
        {items.map((item) => {
          return (
            <li
              className="filters-container-hierarchical__content__list"
              key={item.value}
            >
              <button
                className={`filters-container-hierarchical__content__list__button-filter ${
                  item.isRefined ? 'refined-filter' : ''
                }`}
                type="button"
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  refine(item.value);
                }}
              >
                <p>{item.label}</p>
                <span className="filters-container-hierarchical__content__list__refinement-count">
                  {item.count}
                </span>
              </button>
              {/* If there are items within the 'data' object, then display them */}
              {item.data && (
                <div className="filters-container-hierarchical__content__list-isOpened">
                  <CustomHierarchicalMenu
                    itemsData={item.data}
                    refine={refine}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomHierarchicalMenu;
