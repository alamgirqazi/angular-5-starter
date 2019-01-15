import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import {
  Component,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChildren
} from '@angular/core';

import { AsideNavigationService } from '../../services/asideNavigation.Service';
import { DataTableDirective } from 'angular-datatables';
import { MiscHelperService } from '../../../sdk/services/custom/misc.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Subject } from 'rxjs/Subject';
import { ToasterService } from 'angular2-toaster';
import { TodosApi } from '../../../sdk/services/custom/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(
    private slimScroll: SlimLoadingBarService,
    private todosApi: TodosApi,
    private miscHelperService: MiscHelperService,
    private modalService: BsModalService,
    private toasterService: ToasterService,
    private _asideNavigationService: AsideNavigationService
  ) {
    this.toasterService = toasterService;
  }
  selectedAppStatus: any = null;
  allStatuses;
  appStatuses = [
    {
      id: 1,
      name: 'All',
      status: null,
      icon: 'icon-gray'
    },
    {
      id: 2,
      name: 'Unblocked',
      status: 'Unblocked',
      icon: 'text-success'
    },
    {
      id: 3,
      name: 'Blocked',
      status: 'Blocked',
      icon: 'text-danger'
    }
  ];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  tabList = [false, false, false];
  navOpened;
  result;

  modalRef: BsModalRef;

  changedApp;
  isFetchingData = false;
  formData;
  @ViewChildren(DataTableDirective)
  dtElement: QueryList<DataTableDirective>;

  // @TODO
  ngOnInit() {
    this.configDatatable();
    this.getAll();
    this._asideNavigationService.currentMessage.subscribe(message => {
      this.navOpened = message;
    });
  }

  getAll(flag?, closemodal?) {
    this.slimScroll.progress = 20;
    this.slimScroll.start();
    this.isFetchingData = false;
    if (!flag) {
      this.selectedAppStatus = this.appStatuses[0];

      this.allStatuses = this.appStatuses;
    }
    this.todosApi.getAllTodos().subscribe(
      async data => {
        this.result = data;
        if (flag) {
          await this.miscHelperService.destroyDataTable(
            'angulardatatable',
            this.dtElement
          );
        }

        setTimeout(() => {
          this.dtTrigger.next();
          setTimeout(() => {
            this.isFetchingData = true;
            if (closemodal) {
              this.modalRef.hide();
            }
          }, 250);
        }, 100);
        this.slimScroll.complete();
      },
      error => {
        this.slimScroll.complete();
      }
    );
  }

  configDatatable() {
    this.dtOptions = {
      paging: true,
      autoWidth: false,
      lengthChange: false,
      searching: true,
      retrieve: true,
      pageLength: 10,
      ordering: true,

      pagingType: 'simple_numbers',
      order: [[0, 'desc']]
    };
  }

  statusSelected(item) {
    this.getAll(true);
    // this.slimScroll.progress = 20;
    // this.slimScroll.start();

    // If first time selected than show Details component
    if (this.tabList.every((val, i, arr) => val === arr[0])) {
      this.tabChange(0);
    }

    this.selectedAppStatus = item;
  }

  tabChange(index) {
    if (!this.tabList[index]) {
      for (let i = 0; i < this.tabList.length; i++) {
        this.tabList[i] = false;
      }
      this.tabList[index] = true;
    }
  }
}
