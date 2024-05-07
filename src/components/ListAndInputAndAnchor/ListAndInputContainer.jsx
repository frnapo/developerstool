import AnchorEditor from "./AnchorEditor";
import ListsEditor from "./ListsEditor";

const ListAndInputContainer = () => {
	return (
		<div id="list" className="row my-4">
			<div className="col-12 col-lg-6">
				<ListsEditor />
			</div>
			<div className="col-12 col-lg-6 my-4 my-lg-0">
				<AnchorEditor />
			</div>
		</div>
	);
};

export default ListAndInputContainer;
