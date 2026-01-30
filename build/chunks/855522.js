/** chunk id: 855522, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(664294),
    i = n(484838);
n(426586);
let a = new i.Ay({
    initialLocale: r.parse(document.cookie).locale,
    getMessages: e => n(121312)("./".concat(e, ".json")),
    getLanguages: () => n(296437)
});
a.addListener("locale", e => {
    document.cookie = "locale=".concat(e, ";path=/")
});
let o = a