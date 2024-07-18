import { useState, useEffect } from 'react'
import {
  DataTable,
  DataTableSelectionCellChangeEvent,
  DataTableSelectAllChangeEvent,
  DataTablePageEvent,
  DataTableSortEvent,
  DataTableFilterEvent,
  DataTableFilterMeta
} from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Dropdown } from 'primereact/dropdown'
import './index.scss'
// import { CustomerService } from './service/CustomerService';

interface Country {
  name: string
  code: string
}

interface Representative {
  name: string
  code: string
}

interface Customer {
  id: number
  name: string
  country: Country
  company: string
  date: string
  status: string
  verified: boolean
  activity: number
  representative: Representative
  balance: number
}

interface LazyTableState {
  first: number
  rows: number
  page: number
  sortField?: string
  sortOrder?: number
  filters: DataTableFilterMeta
}

export default function LazyLoadDemo({ data, load }: { data: any[]; load: boolean }) {
  // const [loading, setLoading] = useState<boolean>(false);
  const [totalRecords, setTotalRecords] = useState<number>(0)
  const [customers, setCustomers] = useState<Customer[] | null>(null)
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [selectedCustomers, setSelectedCustomers] = useState<Customer[] | null>(null)
  const [lazyState, setlazyState] = useState<LazyTableState>({
    first: 0,
    rows: 10,
    page: 1,
    sortField: '',
    sortOrder: undefined,
    filters: {
      status: { value: '', matchMode: 'contains' }
    }
  })

  useEffect(() => {
    // loadLazyData();
    setCustomers(data)
  }, [lazyState])

  const onPage = (event: DataTablePageEvent) => {
    setlazyState(event)
  }

  const onSort = (event: DataTableSortEvent) => {
    setlazyState(event)
  }

  const onFilter = (event: DataTableFilterEvent) => {
    event['first'] = 0
    setlazyState(event)
  }

  const onSelectionChange = (event: DataTableSelectionCellChangeEvent) => {
    const value = event.value

    setSelectedCustomers(value)
    setSelectAll(value.length === totalRecords)
  }

  // const statusFilterTemplate = (options) => {
  //   return (
  //     <Dropdown
  //       value={options.value}
  //       options={statuses}
  //       onChange={(e) => options.filterCallback(e.value, options.index)}
  //       itemTemplate={statusItemTemplate}
  //       placeholder="Select One"
  //       className="p-column-filter"
  //       showClear
  //     />
  //   )
  // }

  return (
    <div className="card">
      <DataTable
        value={data}
        lazy
        filterDisplay="row"
        dataKey="id"
        first={lazyState.first}
        rows={10}
        onSort={onSort}
        onFilter={onFilter}
        filters={lazyState.filters}
        loading={load}
        tableStyle={{ minWidth: '75rem' }}
        selection={selectedCustomers}
        onSelectionChange={onSelectionChange}
      >
        <Column field="status" header="Status" filter filterPlaceholder="please input status" />
        <Column field="version" header="Country" />
        <Column field="updatedAt" sortable header="Company" />
        <Column field="code" header="Representative" />
      </DataTable>
    </div>
  )
}
