import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


export interface AgGridTableProps {
  columnDefs: any[];
  rowData: any[];
  className?: string;
  pagination:boolean;
}

const Table: React.FC<AgGridTableProps> = ({
  columnDefs,
  rowData,
  className,
  pagination,
  
}) => {
  console.log(columnDefs, 'columns defs')
  console.log(rowData, 'row data')

  

  return (


   <div className={`ag-theme-alpine w-full h-[300px] ${className ?? ""}`}>
     <AgGridReact
      
        
      columnDefs={columnDefs}
      rowData={rowData}
      
      pagination={pagination}
      paginationPageSize={10}
      animateRows={true}
      rowHeight={60}
      headerHeight={50}
      defaultColDef={{
        
        sortable: false,
        filter: false,
        resizable: true,
        
        flex: 1,
        cellStyle: {
          display: "flex",        
          alignItems: "center",
          paddingLeft: "12px",
          paddingRight: "12px",
          
        },
        
      }}
      gridOptions={{
        suppressCellFocus: true,
        rowClassRules: {
          "ag-row-hover": "false",
        },
      }}
    />

   </div>
     
    
  );
};

export default Table; 