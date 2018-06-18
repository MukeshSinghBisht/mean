import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchemaService } from '../services/schema.service';
import { SystemService } from '../services/system.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-sidebar-system',
  templateUrl: './sidebar-system.component.html',
  styleUrls: ['./sidebar-system.component.scss']
})
export class SidebarSystemComponent implements OnInit {

  data: any = {};
  showPlatform: Boolean = true;

  constructor(
    private schemaService: SchemaService,
    private dragulaService: DragulaService,
    private systemService: SystemService) {
      this.init();
      this.dragulaEvents();
      this.subscribeEvents();
  }

  dragulaEvents() {
    this.dragulaService.dragend.subscribe((value) => {
      if (value[0] === 'platform') this.showPlatform = false;
    });
  }

  init() {
    ['platform', 'equipment'].forEach(type => {
      this.schemaService.tree(type, 'name').subscribe(data => this.data[type] = data);
    });
  }

  cleanTree(system) {
    ['platform', 'equipment'].forEach(type => {
        this.data[type].forEach(category => {
          system[type].forEach(child => {
            let existChildIndex = category.children.findIndex(e => e._id === child._id);
            if (existChildIndex !== -1) category.children.splice(existChildIndex, 1);
          })
        });
    });
  }

  subscribeEvents() {
    this.systemService.events.subscribe(event => {
      switch(event.name) {
        case 'item.deleted': {
          let categoryIndex = this.data[event.data.type].findIndex(e => e.category === event.data.item.category);
          this.data[event.data.type][categoryIndex].children.push(event.data.item);
          if (event.data.type === 'platform') this.showPlatform = true;
          break;
        }
        case 'init.exists.system' : {
          this.showPlatform = false;
          this.cleanTree(event.data);
          break;
        }
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    
    // this.dragulaService.destroy('platform');
  }

}