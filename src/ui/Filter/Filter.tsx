import "./Filter.css";

interface IFilterProps {
  filter: string;
  setFilter: (arg: string) => void;
}

function Filter({ filter, setFilter }: IFilterProps) {
  return (
    <div className="inputWrap">
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter..."
        />
      </div>
    </div>
  );
}

export default Filter;
