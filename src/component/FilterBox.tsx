import { FilterItem } from "../App";

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
  if (filterItems.length === 0) return;

  return (
    <div>
      {filterItems.length > 0 &&
        filterItems.map((filter: string) => (
          <p key={filter}>
            {filter}
            <button onClick={() => deleteFilterItem(filter)}>X</button>
          </p>
        ))}
      <button onClick={clearFilterBox}>Clear</button>
    </div>
  );
};

export default FilterBox;
