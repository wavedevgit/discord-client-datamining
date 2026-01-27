/** Chunk was on web.js **/
/** chunk id: 492834, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(557939),
    i = n(105712),
    a = n(36935),
    o = n(503628),
    s = n(230606),
    l = n(339626),
    c = n(322402),
    u = n(477585),
    d = n(693655),
    f = a && a.prototype;
if (r({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: !!a && o(function() {
            f.finally.call({
                then: function() {}
            }, function() {})
        })
    }, {
        finally: function(e) {
            var t = c(this, s("Promise")),
                n = l(e);
            return this.then(n ? function(n) {
                return u(t, e()).then(function() {
                    return n
                })
            } : e, n ? function(n) {
                return u(t, e()).then(function() {
                    throw n
                })
            } : e)
        }
    }), !i && l(a)) {
    var p = s("Promise").prototype.finally;
    f.finally !== p && d(f, "finally", p, {
        unsafe: !0
    })
}