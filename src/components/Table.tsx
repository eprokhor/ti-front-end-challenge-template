import React, { useEffect, useState } from 'react';
import { Rows } from './Rows';
import { getProjects, getProjectVerticals, Project, ProjectVerticals } from '../api/api';

type Props = {};

const Table: React.FC<Props> = () => {
  let loadingMap = new Map<string, string[]>();
  loadingMap.set('LOADING ...', ['LOADING ...']);

  const [rows, setRows] = useState(loadingMap);

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
      });
      console.log(vToPMap);
      setRows(vToPMap);
    };

    mygetProjects().then(() => {
      myGetVerticals();
    });
  }, []);

  // Fetch Data from api.
  const getVerticalsFromAPI = async () => {
    let verticals = await getProjectVerticals();
    return verticals.data;
  };

  const getProjectsFromAPI = async () => {
    let projects = await getProjects();
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
