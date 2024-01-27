import { FilterItem } from "./JobsList";

interface Props {
  filterItems: FilterItem;
  deleteFilterItem: (filter: string) => void;
  clearFilterBox: () => void;
}

const FilterBox = ({
  filterItems,
  deleteFilterItem,
  clearFilterBox,
}: Props) => {
  const filterBoxClasses =
    filterItems.length > 0
      ? "job filter-box"
      : "job filter-box filter-box--hidden";

  return (
    <div className={filterBoxClasses}>
      <div className="filter-box__items">
        {filterItems.length > 0 &&
          filterItems.map((filter: string) => (
            <div key={filter} className="filter-box__item">
              <p className="job__requirement filter-box__filter">{filter}</p>
              <button
                className="filter-box__delete job__status--cyan"
                onClick={() => deleteFilterItem(filter)}
              >
                <img src="./src/assets/icon-remove.svg" />
              </button>
            </div>
          ))}
      </div>
      <button className="filter-box__clear" onClick={clearFilterBox}>
        Clear
      </button>
    </div>
  );
};

export default FilterBox;
