Package.describe({
  summary: 'Layout Manager for Blaze (works with FlowRouter)',
  version: '2.3.3',
  git: 'https://github.com/merisforks/blaze-layout',
  name: "merisfork:blaze-layout"
});

Package.onUse(function (api) {
  configure(api);
  api.export(['BlazeLayout'], 'client');
});

Package.onTest(function(api) {
  configure(api);
  api.use('tinytest');
  api.addFiles('tests/client/init.templates.html', 'client');
  api.addFiles('tests/client/init.templates.js', 'client');
  api.addFiles('tests/client/unit.js', 'client');
  api.addFiles('tests/client/integration.js', 'client');
});

function configure(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript');
  api.use('blaze');
  api.use('templating');
  api.use('reactive-dict');
  api.use('underscore');
  api.use('tracker');

  api.mainModule('lib/client/layout.js', 'client');
}
