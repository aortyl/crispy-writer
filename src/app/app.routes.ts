import {provideRouter, RouterConfig} from '@angular/router';

import {ContinueStoryComponent}  from './continue-story/continue-story.component';
import {NewStoryComponent}  from './new-story/new-story.component';

const routes:RouterConfig = [
    {path: 'new-story', component: NewStoryComponent},
    {path: '', component: ContinueStoryComponent},
];

export const appRouterProviders = [
    provideRouter(routes)
];
