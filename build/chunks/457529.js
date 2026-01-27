/** Chunk was on web.js **/
/** chunk id: 457529, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(557939),
    i = n(230606),
    a = n(985848),
    o = n(446474),
    s = n(410323),
    l = n(503628),
    c = n(339626),
    u = n(837082),
    d = n(192819),
    f = n(965072),
    p = n(812294),
    _ = String,
    h = i("JSON", "stringify"),
    m = s(/./.exec),
    g = s("".charAt),
    E = s("".charCodeAt),
    y = s("".replace),
    b = s(1..toString),
    O = /[\uD800-\uDFFF]/g,
    v = /^[\uD800-\uDBFF]$/,
    A = /^[\uDC00-\uDFFF]$/,
    I = !p || l(function() {
        var e = i("Symbol")("stringify detection");
        return "[null]" !== h([e]) || "{}" !== h({
            a: e
        }) || "{}" !== h(Object(e))
    }),
    S = l(function() {
        return '"\\udf06\\ud834"' !== h("\uDF06\uD834") || '"\\udead"' !== h("\uDEAD")
    }),
    T = function(e, t) {
        var n = d(arguments),
            r = f(t);
        if (!(!c(r) && (void 0 === e || u(e)))) return n[1] = function(e, t) {
            if (c(r) && (t = o(r, this, _(e), t)), !u(t)) return t
        }, a(h, null, n)
    },
    C = function(e, t, n) {
        var r = g(n, t - 1),
            i = g(n, t + 1);
        return m(v, e) && !m(A, i) || m(A, e) && !m(v, r) ? "\\u" + b(E(e, 0), 16) : e
    };
h && r({
    target: "JSON",
    stat: !0,
    arity: 3,
    forced: I || S
}, {
    stringify: function(e, t, n) {
        var r = d(arguments),
            i = a(I ? T : h, null, r);
        return S && "string" == typeof i ? y(i, O, C) : i
    }
})