import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './_app/index.js';

const app = platformBrowserDynamic().bootstrapModule(AppModule)
            app.catch(err => console.error(err));
console.log(app);
