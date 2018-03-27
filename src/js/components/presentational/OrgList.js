import React, { Component } from "react";
import OrgRow from "./OrgRow";

function OrgList(props) {
	let orgType = "nonScratch";
	if(props.title === "Scratch Orgs") {
		orgType = "scratch";
	}
	const orgRows = props.orgs.map(org=><OrgRow key={org.orgId} org={org} 
		setDetailOrg={props.setDetailOrg} 
		toggleLoadingImage={props.toggleLoadingImage}
		showAlertMessage={props.showAlertMessage}
		setDefaultOrg={props.setDefaultOrg}
		setDefaultDevhub={props.setDefaultDevhub}
		deleteOrg={props.deleteOrg}
		orgType={orgType}/>);
	return (
		<div>
			<h3 className="card-title">{props.title}</h3>
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Default</th>
							<th>User Name</th>
							<th>Alias</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{orgRows}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default OrgList;