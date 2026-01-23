/** Chunk was on web.js **/
/** chunk id: 812715, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(985848),
    i = n(446474),
    a = n(410323),
    s = n(350445),
    o = n(503628),
    l = n(101968),
    c = n(339626),
    u = n(652320),
    d = n(120394),
    f = n(370001),
    p = n(304880),
    _ = n(321727),
    h = n(929880),
    m = n(95959),
    g = n(470103),
    E = n(17755),
    y = n(380744)("replace"),
    b = Math.max,
    O = Math.min,
    v = a([].concat),
    A = a([].push),
    I = a("".indexOf),
    S = a("".slice),
    T = function(e) {
        return void 0 === e ? e : String(e)
    },
    C = function() {
        return "$0" === "a".replace(/./, "$0")
    }(),
    N = function() {
        return !!/./ [y] && "" === /./ [y]("a", "$0")
    }();
s("replace", function(e, t, n) {
    var a = N ? "$" : "$0";
    return [function(e, n) {
        var r = _(this),
            a = u(e) ? void 0 : m(e, y);
        return a ? i(a, e, r, n) : i(t, p(r), e, n)
    }, function(e, i) {
        var s = l(this),
            o = p(e);
        if ("string" == typeof i && -1 === I(i, a) && -1 === I(i, "$<")) {
            var u = n(t, s, o, i);
            if (u.done) return u.value
        }
        var _ = c(i);
        _ || (i = p(i));
        var m = s.global;
        m && (R = s.unicode, s.lastIndex = 0);
        for (var y = []; null !== (D = E(s, o)) && (A(y, D), m);) {
            ;
            "" === p(D[0]) && (s.lastIndex = h(o, f(s.lastIndex), R))
        }
        for (var C = "", N = 0, w = 0; w < y.length; w++) {
            for (var R, P, D = y[w], x = p(D[0]), L = b(O(d(D.index), o.length), 0), j = [], M = 1; M < D.length; M++) A(j, T(D[M]));
            var k = D.groups;
            if (_) {
                var U = v([x], j, L, o);
                void 0 !== k && A(U, k), P = p(r(i, void 0, U))
            } else P = g(x, o, L, j, k, i);
            L >= N && (C += S(o, N, L) + P, N = L + x.length)
        }
        return C + S(o, N)
    }]
}, !!o(function() {
    var e = /./;
    return e.exec = function() {
        var e = [];
        return e.groups = {
            a: "7"
        }, e
    }, "7" !== "".replace(e, "$<a>")
}) || !C || N)