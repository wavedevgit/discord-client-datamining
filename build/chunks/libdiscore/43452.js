/** chunk id: 43452, original params: t,e,r (module,exports,require) **/
var n = r(410323),
    o = r(503628),
    i = r(339626),
    a = r(324988),
    u = r(230606),
    c = r(997159),
    s = function() {},
    f = u("Reflect", "construct"),
    _ = /^\s*(?:class|function)\b/,
    l = n(_.exec),
    p = !_.test(s),
    d = function(t) {
        if (!i(t)) return !1;
        try {
            return f(s, [], t), !0
        } catch (t) {
            return !1
        }
    },
    g = function(t) {
        if (!i(t)) return !1;
        switch (a(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
        }
        try {
            return p || !!l(_, c(t))
        } catch (t) {
            return !0
        }
    };
g.sham = !0, t.exports = !f || o(function() {
    var t;
    return d(d.call) || !d(Object) || !d(function() {
        t = !0
    }) || t
}) ? g : d