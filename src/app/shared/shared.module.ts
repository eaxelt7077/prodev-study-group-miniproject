import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { ClickOutsideModule } from 'ng-click-outside';

import { AutocompleteModule } from './components/autocomplete/autocomplete.module';
import { PipeModule } from 'app/shared/pipes/pipe.module';

//COMPONENTS
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from "./vertical-menu/vertical-menu.component";
import { CustomizerComponent } from './customizer/customizer.component';
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';

//DIRECTIVES
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { SidebarLinkDirective } from './directives/sidebar-link.directive';
import { SidebarDropdownDirective } from './directives/sidebar-dropdown.directive';
import { SidebarAnchorToggleDirective } from './directives/sidebar-anchor-toggle.directive';
import { SidebarDirective } from './directives/sidebar.directive';
import { TopMenuDirective } from './directives/topmenu.directive';
import { TopMenuLinkDirective } from './directives/topmenu-link.directive';
import { TopMenuDropdownDirective } from './directives/topmenu-dropdown.directive';
import { TopMenuAnchorToggleDirective } from './directives/topmenu-anchor-toggle.directive';
import { ChecklistTableComponent } from './components/checklist_table/checklist-table/checklist-table.component';
import { AddableDeletableListComponent } from './components/addable-deletable-list/addable-deletable-list.component';
import { GraphComponent } from './components/graph/graph.component';
import { FormWizardComponent } from './components/form-wizard/form-wizard.component';
import { FormWizardStepperComponent } from './components/form-wizard/form-wizard-stepper/form-wizard-stepper.component';
import { ProgressStepComponent } from './components/form-wizard/form-wizard-stepper/progress-step/progress-step.component';
import { ProgressStepDirective } from './components/form-wizard/form-wizard-stepper/progress-step.directive';


@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        VerticalMenuComponent,
        HorizontalMenuComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        SidebarDirective,
        TopMenuDirective,
        NgbModule,
        TranslateModule,
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        TranslateModule,
        FormsModule,
        OverlayModule,
        ReactiveFormsModule ,
        PerfectScrollbarModule,
        ClickOutsideModule,
        AutocompleteModule,
        PipeModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        VerticalMenuComponent,
        HorizontalMenuComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        SidebarLinkDirective,
        SidebarDropdownDirective,
        SidebarAnchorToggleDirective,
        SidebarDirective,
        TopMenuLinkDirective,
        TopMenuDropdownDirective,
        TopMenuAnchorToggleDirective,
        TopMenuDirective,
        ChecklistTableComponent,
        AddableDeletableListComponent,
        GraphComponent,
        FormWizardStepperComponent,
        ProgressStepComponent,
        ProgressStepDirective,
        FormWizardComponent,
    ]
})
export class SharedModule { }
