import "./Pagination.css";

interface IProps {
  clickHandler: () => void;
  rowsPerPage: number;
  totalRows: number;
}
function Pagination({ clickHandler, rowsPerPage, totalRows }: IProps) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <div className="pagination">
        <ul className="paginationList">
          <li>Previous</li>
          {pageNumbers.map((number) => {
            return <li key={number}>{number}</li>;
          })}
          <li onClick={clickHandler}>Next</li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
