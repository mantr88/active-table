import "./Pagination.css";

interface IProps {
  rowsPerPage: number;
  totalRows: number;
  paginate: (arg: number) => void;
  currentPage: number;
}
function Pagination({ rowsPerPage, totalRows, currentPage, paginate }: IProps) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const startPage = Math.max(currentPage - 2, 1);
  const endPage = Math.min(currentPage + 3, totalPages);

  for (let i = startPage; i < endPage; i++) {
    pageNumbers.push(i);
  }

  const runNextPage = () => {
    let newPage = currentPage;
    if (currentPage < totalPages) {
      newPage += 1;
    }
    paginate(newPage);
  };

  const runPervPage = () => {
    let newPage = currentPage;
    if (newPage > 1) {
      newPage -= 1;
    }
    paginate(newPage);
  };

  const chooseBtnCls = (number: number): string => {
    if (number === currentPage) {
      return "btn" + " isActive";
    }
    return "btn";
  };

  const chooseLastBtnCls = () =>
    totalPages === currentPage ? "btn isActive" : "btn";

  return (
    <div className="container">
      <div className="pagination">
        <ul className="paginationList">
          <li key="Previous" className="listItem" onClick={runPervPage}>
            <button className="btn isActive" type="button">
              Previous
            </button>
          </li>
          {pageNumbers.map((number: number) => {
            return (
              <li
                key={number}
                className="listItem"
                onClick={() => paginate(number)}
              >
                <button className={chooseBtnCls(number)} type="button">
                  {number}
                </button>
              </li>
            );
          })}
          <span>{"..."}</span>
          <li
            key={totalPages}
            className="listItem"
            onClick={() => paginate(totalPages)}
          >
            <button className={chooseLastBtnCls()} type="button">
              {totalPages}
            </button>
          </li>
          <li key="Next" className="listItem" onClick={runNextPage}>
            <button className="btn isActive" type="button">
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
