import React, { useEffect, useState } from 'react';
import { Rows } from './Rows';
import {
  getProjectById,
  getProjects,
  getProjectVerticals,
  Project,
  ProjectVerticals,
} from '../api/api';

type Props = {};

const Table: React.FC<Props> = ({}) => {
  const [rows, setRows] = useState(new Map<string, string[]>());

  useEffect(() => {
    let vToPMap = new Map<string, string[]>();

    let pToSymbol = new Map<string, string>();

    const mygetProjects = async () => {
      const projects: Project[] = await getProjectsFromAPI();
      projects.forEach((p) => {
        if (!pToSymbol.has(p.id)) {
          pToSymbol.set(p.id, p.symbol);
        }
      });
    };

    const myGetVerticals = async () => {
      const projectVerticals: ProjectVerticals[] = await getVerticalsFromAPI();

      projectVerticals.forEach((pv) => {
        let symbolLookedUp = pToSymbol.get(pv.project_id);

        pv.verticals.forEach((v) => {
          if (!vToPMap.has(v)) {
            if (symbolLookedUp !== undefined) {
              vToPMap.set(v, [symbolLookedUp]);
            }
          } else {
            let existingValues = vToPMap.get(v);

            if (existingValues !== undefined && symbolLookedUp !== undefined) {
              existingValues?.push(symbolLookedUp);
              vToPMap.set(v, existingValues);
            }
          }
        });
        // console.log(vToPMap);
        // setRows(null);
        // for (let entry of vToPMap.entries()) {
        //   console.log(entry);
        // }
      });
      console.log(vToPMap);
      setRows(vToPMap);
    };

    // const mygetProjectById = async (id: string) => {
    //   const project: Project = await getProjectByIdFromAPI(id);
    // };

    mygetProjects().then(() => {
      myGetVerticals();
    });
    // mygetProjectById('');
  }, []);

  // Fetch Data from api.
  const getVerticalsFromAPI = async () => {
    let verticals = await getProjectVerticals();
    // console.log(verticals.data);
    return verticals.data;
  };

  // const getProjectByIdFromAPI = async (id: string) => {
  //   let project = await getProjectById(id);
  //   console.log(project.data);
  //   return project.data;
  // };

  const getProjectsFromAPI = async () => {
    let projects = await getProjects();
    // console.log(projects.data);
    return projects.data;
  };

  return (
    <table cellPadding='10'>
      <tbody>
        <tr style={{ backgroundColor: 'gainsboro' }}>
          <td>Vertical</td>
          <td>Projects</td>
        </tr>

        <Rows rows={rows} />
      </tbody>
    </table>
  );
};

export default Table;
