import React from 'react';

function CustomPagination(props) {
	const pageCount = props.pageCount;
	const page = props.page;
	const blockCount = 4;
	const toTenPages = 10;
	const fromFifteenPages = 15;

	const getPages = () => {
		if (pageCount <= toTenPages)
			return [...Array(pageCount + 1).keys()].slice(1);

		let toggle = true;
		const pages = [];
		for (let i = 1; i <= pageCount; i++) {
			if (firstBlock(i) || (secondBlock(i) && pageCount >= fromFifteenPages) || middleBlock(i) || (secondLastBlock(i) && pageCount >= fromFifteenPages) || lastBlock(i)) {
				toggle = true;
				pages.push(i);
			}
			else if (toggle) {
				toggle = false;
				pages.push('...');
			}
		}
		return pages;
	}

	function firstBlock(i) {
		let firstPage = i === 1;
		let secondPage = i === 2 && ((page > pageCount - blockCount) || page <= blockCount);
		let fourthPage = i === 4 && page === 1;

		if (firstPage || secondPage || fourthPage) return true;
	}

	function secondBlock(i) {
		let firstElement = i === Math.ceil(page / 2) && page / 2 >= blockCount;
		let secondElement = i === Math.ceil(page / 2) + 1 && page > pageCount - 3;

		if (firstElement || secondElement) return true;
	}

	function middleBlock(i) {
		let firstElement = i === page - 1;
		let secondElement = i === page;
		let thirdElement = i === page + 1;
		let fourthElement = i === page + 2;

		if (firstElement || secondElement || thirdElement || fourthElement) return true;
	}

	function secondLastBlock(i) {
		let numberFirstElement = (page + 2 + pageCount) / 2;
		let firstElement = i === Math.ceil(numberFirstElement) && numberFirstElement - page > blockCount && i !== pageCount - 2;
		let secondElement = i === Math.ceil(numberFirstElement) + 1 && (page === 1 || page === 2);

		if (firstElement || secondElement) return true;
	}

	function lastBlock(i) {
		let ultimate = i === pageCount;
		let penultimate = i === pageCount - 1 && (page <= 3 || i === page + 3);
		let antepenultimate = i === pageCount - 2 && page > pageCount - 2;
		let preantepenultimate = i === pageCount - 3 && page > pageCount - 3;

		if (ultimate || penultimate || antepenultimate || preantepenultimate) return true;
	}

	return (
		<div className="columns">
			<div className="column col-12">
				{pageCount ?
					<ul className="pagination">
						<li className="page-item">
							<button
								className="btn btn-link"
								onClick={() => props.setPage(page - 1)}
								disabled={page === 1}>
								Previous
              </button>
						</li>
						{
							getPages().map((i, idx) =>
								<li className="page-item" key={idx}>
									<button
										className={page === i ? "btn btn-primary" : typeof (i) === 'string' ? "btn btn-link" : "btn"}
										disabled={typeof (i) === 'string'}
										onClick={() => props.setPage(i)}>
										{i}
									</button>
								</li>
							)
						}
						<li className="page-item">
							<button
								className="btn btn-link"
								onClick={() => props.setPage(page + 1)}
								disabled={page === pageCount}>
								Next
              </button>
						</li>
					</ul> : null
				}
			</div>
		</div>
	);
}

export default CustomPagination;