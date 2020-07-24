import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ocasService } from '../../services/ocas.service';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-users-component',
    templateUrl: './Users.component.html'
})
export class UsersComponent implements OnInit {
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','activity','comments'];
    step: number = 1;
    totalsize = 0;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private appService: ocasService, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

        new Promise(resolve => {
            this.appService.getRequests("api/Participant").subscribe(result => {
                // Assign the data to the data source for the table to render
                this.totalsize = result.length;
                this.dataSource = new MatTableDataSource(result);
            }, error => console.error(error));
        });
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

