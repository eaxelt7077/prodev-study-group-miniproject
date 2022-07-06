import { Routes, RouterModule } from '@angular/router';
import { FormWizardComponent } from '../components/form-wizard/form-wizard.component';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'page',
    loadChildren: () => import('../../page/page.module').then(m => m.PageModule)
  },
  {
    path: 'form-wizard',
    component:  FormWizardComponent,
    data: {
      title: 'Form Wizard Stepper'
    }
  }
];
