import { FilterItem } from "../App";

interface Props {
  filterItems: FilterItem;
}

const FilterBox = ({ filterItems }: Props) => {
  if (filterItems.length === 0) return;

  return (
    <div>
      {filterItems.length > 0 &&
        filterItems.map((filter: string) => (
          <p>
            {filter}
            <button>X</button>
          </p>
        ))}
      <button>Clear</button>
    </div>
  );
};

export default FilterBox;
