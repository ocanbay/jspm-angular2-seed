import "../shims.js";
import "./assets/css/semantic.min.css";
import "./assets/css/app.css";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
