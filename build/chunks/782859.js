/** chunk id: 782859 params = (module,exports,require) **/
"use strict";
var r = n(834647),
    a = n(794938);
r({
    target: "Promise",
    stat: !0
}, {
    withResolvers: function() {
        var e = a.f(this);
        return {
            promise: e.promise,
            resolve: e.resolve,
            reject: e.reject
        }
    }
})