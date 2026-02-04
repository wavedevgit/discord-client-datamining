/** chunk id: 801460, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(557939),
    i = n(230606),
    a = n(53132),
    o = n(503628),
    s = n(482779),
    l = n(231977),
    c = n(4940).f,
    u = n(693655),
    d = n(485155),
    f = n(210140),
    p = n(61132),
    _ = n(101968),
    h = n(515655),
    m = n(862784),
    g = n(753609),
    E = n(949186),
    y = n(883972),
    b = n(257943),
    O = n(105712),
    v = "DOMException",
    A = "DATA_CLONE_ERR",
    I = i("Error"),
    S = i(v) || function() {
        try {
            new(i("MessageChannel") || a("worker_threads").MessageChannel)().port1.postMessage(new WeakMap)
        } catch (e) {
            if (e.name === A && 25 === e.code) return e.constructor
        }
    }(),
    T = S && S.prototype,
    C = I.prototype,
    N = y.set,
    w = y.getterFor(v),
    R = "stack" in new I(v),
    P = function(e) {
        return f(g, e) && g[e].m ? g[e].c : 0
    },
    D = function() {
        p(this, L);
        var e = arguments.length,
            t = m(e < 1 ? void 0 : arguments[0]),
            n = m(e < 2 ? void 0 : arguments[1], "Error"),
            r = P(n);
        if (N(this, {
                type: v,
                name: n,
                message: t,
                code: r
            }), b || (this.name = n, this.message = t, this.code = r), R) {
            var i = new I(t);
            i.name = v, c(this, "stack", l(1, E(i.stack, 1)))
        }
    },
    L = D.prototype = s(C),
    x = function(e) {
        return {
            enumerable: !0,
            configurable: !0,
            get: e
        }
    },
    M = function(e) {
        return x(function() {
            return w(this)[e]
        })
    };
b && (d(L, "code", M("code")), d(L, "message", M("message")), d(L, "name", M("name"))), c(L, "constructor", l(1, D));
var j = o(function() {
        return !(new S instanceof I)
    }),
    k = j || o(function() {
        return C.toString !== h || "2: 1" !== String(new S(1, 2))
    }),
    U = j || o(function() {
        return 25 !== new S(1, "DataCloneError").code
    }),
    G = j || 25 !== S[A] || 25 !== T[A],
    F = O ? k || U || G : j;
r({
    global: !0,
    constructor: !0,
    forced: F
}, {
    DOMException: F ? D : S
});
var V = i(v),
    B = V.prototype;
for (var H in k && (O || S === V) && u(B, "toString", h), U && b && S === V && d(B, "code", x(function() {
        return P(_(this).name)
    })), g)
    if (f(g, H)) {
        var Y = g[H],
            W = Y.s,
            K = l(6, Y.c);
        f(V, W) || c(V, W, K), f(B, W) || c(B, W, K)
    }