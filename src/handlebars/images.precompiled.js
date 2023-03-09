(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['images'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"photo-card\">\r\n            <a href="
    + alias4(((helper = (helper = lookupProperty(helpers,"largeImageURL") || (depth0 != null ? lookupProperty(depth0,"largeImageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"largeImageURL","hash":{},"data":data,"loc":{"start":{"line":3,"column":20},"end":{"line":3,"column":37}}}) : helper)))
    + ">\r\n                <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"webformatURL") || (depth0 != null ? lookupProperty(depth0,"webformatURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"webformatURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":25},"end":{"line":4,"column":41}}}) : helper)))
    + " alt=\"\" loading=\"lazy\" />\r\n            </a>\r\n            <div class=\"info\">\r\n                <p class=\"info-item\">\r\n                    <b>Likes</b>\r\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"likes") || (depth0 != null ? lookupProperty(depth0,"likes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"likes","hash":{},"data":data,"loc":{"start":{"line":9,"column":20},"end":{"line":9,"column":29}}}) : helper)))
    + "\r\n                </p>\r\n                <p class=\"info-item\">\r\n                    <b>Views</b>\r\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"views") || (depth0 != null ? lookupProperty(depth0,"views") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"views","hash":{},"data":data,"loc":{"start":{"line":13,"column":20},"end":{"line":13,"column":29}}}) : helper)))
    + "\r\n                </p>\r\n                <p class=\"info-item\">\r\n                    <b>Comments</b>\r\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"comments") || (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comments","hash":{},"data":data,"loc":{"start":{"line":17,"column":20},"end":{"line":17,"column":32}}}) : helper)))
    + "\r\n                </p>\r\n                <p class=\"info-item\">\r\n                    <b>Downloads</b>\r\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"downloads") || (depth0 != null ? lookupProperty(depth0,"downloads") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"downloads","hash":{},"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":21,"column":33}}}) : helper)))
    + "\r\n                </p>\r\n            </div>  \r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"arr") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":4},"end":{"line":25,"column":13}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true});
})();