import React from 'react';

function Pagination(props) {
	const range = [];
	for (let i = 1; i <= props.pageCount; i++) range.push(i);

	return (
		<div className="columns">
			<div className="column col-12">
				{props.pageCount ?
					<ul className="pagination">
						<li className="page-item disabled">
							<button
								className="btn btn-link"
								onClick={() => props.setPage(props.page - 1)}
								disabled={props.page === 1}>
								Previous
              </button>
						</li>
						{
							range.map((i, idx) =>
								<li className="page-item" key={idx}>
									<button
										className={props.page === i ? "btn btn-primary" : "btn"}
										onClick={() => props.setPage(i)}>
										{i}
									</button>
								</li>)
						}
						<li className="page-item">
							<button
								className="btn btn-link"
								onClick={() => props.setPage(props.page + 1)}
								disabled={props.page === props.pageCount}>
								Next
              </button>
						</li>
					</ul> : null
				}
			</div>
		</div>
	);
}

export default Pagination;