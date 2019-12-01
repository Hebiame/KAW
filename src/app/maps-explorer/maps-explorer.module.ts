import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsExplorerRoutingModule } from './maps-explorer-routing.module';
import { MapsExplorerComponent } from './maps-explorer/maps-explorer.component';
import { MapsExplorerHeaderComponent } from './maps-explorer-header/maps-explorer-header.component';
import { FiltersComponent } from './filters/filters.component';
import { MapViewComponent } from './map-view/map-view.component';
import { MapsListComponent } from './maps-list/maps-list.component';
import { StoreModule } from "@ngrx/store";
import * as fromMapsExplorer from './maps-explorer.reducer';
import { NzLayoutModule, NzSelectModule } from "ng-zorro-antd";


@NgModule({
  declarations: [
    MapsExplorerComponent,
    MapsExplorerHeaderComponent,
    FiltersComponent,
    MapViewComponent,
    MapsListComponent
  ],
  imports: [
    CommonModule,
    MapsExplorerRoutingModule,
    StoreModule.forFeature(fromMapsExplorer.mapsExplorerFeatureKey, fromMapsExplorer.reducer),
    NzSelectModule,
    NzLayoutModule
  ]
})

export class MapsExplorerModule { }
