Package.describe({
  summary: "phantom node Package wrapper",
  version: "1.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.addFiles(['sasi513:phantom.js'],['server']);
  api.export([
    'phantom'
  ]);
});

Npm.depends({
	phantom:"0.6.5"
})
