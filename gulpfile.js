var elixir = require('laravel-elixir');

elixir.config.assetsPath = "./";
elixir.config.publicPath = "./";
elixir.config.js.folder = "src";
elixir.config.js.outputFolder = "build";

elixir(function (mix) {
    mix.browserify("main.js")
});
