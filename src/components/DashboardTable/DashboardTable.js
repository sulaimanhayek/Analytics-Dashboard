import React from "react";
import axios from "axios";
import { Table, Loader, Dimmer } from "semantic-ui-react";
import "./DashboardTable.css";

// get this URL from your project on Canonic
const GET_PROJECTS_URL =
    "https://postgres-dashboard-7fc.can.canonic.dev/api/projects";

function DashboardTable() {
    const [loading, setLoading] = React.useState(false);
    const [projects, setProjects] = React.useState([]);

    React.useEffect(()=>{
        setLoading(true);
        axios(GET_PROJECTS_URL).then(({data})=>{
            setProjects(data.data || []);
            setLoading(false);
        });
    },[])
    return (
        <div className="dashboardTable-wrapper">
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Owner</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {projects.map((item,i)=>(
                        <Table.Row>
                            <Table.Cell width={1}>
                                <div>{item.users.name}</div>
                            </Table.Cell>
                            
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default DashboardTable;