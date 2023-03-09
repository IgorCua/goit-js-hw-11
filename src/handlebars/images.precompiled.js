(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['images'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"container__item\">\r\n            <a class=\"container__link\" href="
    + alias4(((helper = (helper = lookupProperty(helpers,"largeImageURL") || (depth0 != null ? lookupProperty(depth0,"largeImageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"largeImageURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":44},"end":{"line":4,"column":61}}}) : helper)))
    + ">\r\n                <img \r\n                    src="
    + alias4(((helper = (helper = lookupProperty(helpers,"previewURL") || (depth0 != null ? lookupProperty(depth0,"previewURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previewURL","hash":{},"data":data,"loc":{"start":{"line":6,"column":24},"end":{"line":6,"column":38}}}) : helper)))
    + " \r\n                    alt="
    + alias4(((helper = (helper = lookupProperty(helpers,"tags") || (depth0 != null ? lookupProperty(depth0,"tags") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tags","hash":{},"data":data,"loc":{"start":{"line":7,"column":24},"end":{"line":7,"column":32}}}) : helper)))
    + " \r\n                    class=\"container__img\"\r\n                    data-source="
    + alias4(((helper = (helper = lookupProperty(helpers,"largeImageURL") || (depth0 != null ? lookupProperty(depth0,"largeImageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"largeImageURL","hash":{},"data":data,"loc":{"start":{"line":9,"column":32},"end":{"line":9,"column":49}}}) : helper)))
    + "\r\n                >\r\n            </a>\r\n            <ul class=\"container__descr-list\">\r\n                <li class=\"container__descr-item\">\r\n                    <p>\r\n                        <span class=\"container__descr-item--span\">Likes: </span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"likes") || (depth0 != null ? lookupProperty(depth0,"likes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"likes","hash":{},"data":data,"loc":{"start":{"line":15,"column":80},"end":{"line":15,"column":89}}}) : helper)))
    + "\r\n                    </p>\r\n                </li>\r\n                <li class=\"container__descr-item\">\r\n                    <p>\r\n                        <span class=\"container__descr-item--span\">Views: </span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"views") || (depth0 != null ? lookupProperty(depth0,"views") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"views","hash":{},"data":data,"loc":{"start":{"line":20,"column":80},"end":{"line":20,"column":89}}}) : helper)))
    + "\r\n                    </p>\r\n                </li>\r\n                <li class=\"container__descr-item\">\r\n                    <p>\r\n                        <span class=\"container__descr-item--span\">Comments: </span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"comments") || (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comments","hash":{},"data":data,"loc":{"start":{"line":25,"column":83},"end":{"line":25,"column":95}}}) : helper)))
    + "\r\n                    </p>\r\n                </li>\r\n                <li class=\"container__descr-item\">\r\n                    <p>\r\n                        <span class=\"container__descr-item--span\">Downloads: </span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"downloads") || (depth0 != null ? lookupProperty(depth0,"downloads") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"downloads","hash":{},"data":data,"loc":{"start":{"line":30,"column":84},"end":{"line":30,"column":97}}}) : helper)))
    + "\r\n                    </p>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class=\"container__img-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"arr") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":35,"column":13}}})) != null ? stack1 : "")
    + "</ul>\r\n\r\n";
},"useData":true});
})();