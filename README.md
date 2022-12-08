## Atomic Bomb Templates

Template Resources for the [Atomic Bomb](https://www.npmjs.com/package/atomic-bomb) package.

### Contributors needed
Contributors needed for adding more platform specific templates 
to `atomic-bomb`.

### Structure
```shell
.
├── react
│   ├── [NAME].js
│   ├── [NAME].stories.js
│   ├── [NAME].test.js
│   ├── _[NAME].style.scss
│   ├── _index.scss
│   └── index.js
└── react.json
```

Each template consist of a directory and a JSON file 
with the same name. Contents of that JSON file is (for now)
the location the Atomic dirs need to be deployed, for example 
the `react.json` now only holds (possible future enhancement): 

```json
{
  "search": "react",
  "platform": "react",
  "destination": "src/components"
}
```

Where: 
* `search`: item in `package.json/dependencies` to look for
* `platform`: which platform you are running (determines the `template dir`)
* `destination`: directory where to put the components (configurable)