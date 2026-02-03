/** chunk id: 607167, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(860511),
    i = n(410323),
    a = n(257943),
    o = n(593858),
    s = n(814113),
    l = n(706938),
    c = n(485155),
    u = n(673570),
    d = n(503628),
    f = n(61132),
    p = n(120394),
    _ = n(370001),
    h = n(794729),
    m = n(46430),
    g = n(204357),
    E = n(42756),
    y = n(458680),
    b = n(380296),
    O = n(192819),
    v = n(486724),
    A = n(517771),
    I = n(174168),
    S = n(883972),
    T = s.PROPER,
    C = s.CONFIGURABLE,
    N = "ArrayBuffer",
    w = "DataView",
    R = "prototype",
    P = "Wrong length",
    D = "Wrong index",
    L = S.getterFor(N),
    x = S.getterFor(w),
    M = S.set,
    j = r[N],
    k = j,
    U = k && k[R],
    G = r[w],
    F = G && G[R],
    V = Object.prototype,
    B = r.Array,
    H = r.RangeError,
    Y = i(b),
    W = i([].reverse),
    K = g.pack,
    z = g.unpack,
    q = function(e) {
        return [255 & e]
    },
    Z = function(e) {
        return [255 & e, e >> 8 & 255]
    },
    Q = function(e) {
        return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
    },
    X = function(e) {
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
    },
    J = function(e) {
        return K(m(e), 23, 4)
    },
    $ = function(e) {
        return K(e, 52, 8)
    },
    ee = function(e, t, n) {
        c(e[R], t, {
            configurable: !0,
            get: function() {
                return n(this)[t]
            }
        })
    },
    et = function(e, t, n, r) {
        var i = x(e),
            a = h(n),
            o = !!r;
        if (a + t > i.byteLength) throw new H(D);
        var s = i.bytes,
            l = a + i.byteOffset,
            c = O(s, l, l + t);
        return o ? c : W(c)
    },
    en = function(e, t, n, r, i, a) {
        var o = x(e),
            s = h(n),
            l = r(+i),
            c = !!a;
        if (s + t > o.byteLength) throw new H(D);
        for (var u = o.bytes, d = s + o.byteOffset, f = 0; f < t; f++) u[d + f] = l[c ? f : t - f - 1]
    };
if (o) {
    var er = T && j.name !== N;
    !d(function() {
        j(1)
    }) || !d(function() {
        new j(-1)
    }) || d(function() {
        return new j, new j(1.5), new j(NaN), 1 !== j.length || er && !C
    }) ? ((k = function(e) {
        return f(this, U), v(new j(h(e)), this, k)
    })[R] = U, U.constructor = k, A(k, j)) : er && C && l(j, "name", N), y && E(F) !== V && y(F, V);
    var ei = new G(new k(2)),
        ea = i(F.setInt8);
    ei.setInt8(0, 0x80000000), ei.setInt8(1, 0x80000001), (ei.getInt8(0) || !ei.getInt8(1)) && u(F, {
        setInt8: function(e, t) {
            ea(this, e, t << 24 >> 24)
        },
        setUint8: function(e, t) {
            ea(this, e, t << 24 >> 24)
        }
    }, {
        unsafe: !0
    })
} else U = (k = function(e) {
    f(this, U);
    var t = h(e);
    M(this, {
        type: N,
        bytes: Y(B(t), 0),
        byteLength: t
    }), a || (this.byteLength = t, this.detached = !1)
})[R], F = (G = function(e, t, n) {
    f(this, F), f(e, U);
    var r = L(e),
        i = r.byteLength,
        o = p(t);
    if (o < 0 || o > i) throw new H("Wrong offset");
    if (n = void 0 === n ? i - o : _(n), o + n > i) throw new H(P);
    M(this, {
        type: w,
        buffer: e,
        byteLength: n,
        byteOffset: o,
        bytes: r.bytes
    }), a || (this.buffer = e, this.byteLength = n, this.byteOffset = o)
})[R], a && (ee(k, "byteLength", L), ee(G, "buffer", x), ee(G, "byteLength", x), ee(G, "byteOffset", x)), u(F, {
    getInt8: function(e) {
        return et(this, 1, e)[0] << 24 >> 24
    },
    getUint8: function(e) {
        return et(this, 1, e)[0]
    },
    getInt16: function(e) {
        var t = et(this, 2, e, arguments.length > 1 && arguments[1]);
        return (t[1] << 8 | t[0]) << 16 >> 16
    },
    getUint16: function(e) {
        var t = et(this, 2, e, arguments.length > 1 && arguments[1]);
        return t[1] << 8 | t[0]
    },
    getInt32: function(e) {
        return X(et(this, 4, e, arguments.length > 1 && arguments[1]))
    },
    getUint32: function(e) {
        return X(et(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0
    },
    getFloat32: function(e) {
        return z(et(this, 4, e, arguments.length > 1 && arguments[1]), 23)
    },
    getFloat64: function(e) {
        return z(et(this, 8, e, arguments.length > 1 && arguments[1]), 52)
    },
    setInt8: function(e, t) {
        en(this, 1, e, q, t)
    },
    setUint8: function(e, t) {
        en(this, 1, e, q, t)
    },
    setInt16: function(e, t) {
        en(this, 2, e, Z, t, arguments.length > 2 && arguments[2])
    },
    setUint16: function(e, t) {
        en(this, 2, e, Z, t, arguments.length > 2 && arguments[2])
    },
    setInt32: function(e, t) {
        en(this, 4, e, Q, t, arguments.length > 2 && arguments[2])
    },
    setUint32: function(e, t) {
        en(this, 4, e, Q, t, arguments.length > 2 && arguments[2])
    },
    setFloat32: function(e, t) {
        en(this, 4, e, J, t, arguments.length > 2 && arguments[2])
    },
    setFloat64: function(e, t) {
        en(this, 8, e, $, t, arguments.length > 2 && arguments[2])
    }
});
I(k, N), I(G, w), e.exports = {
    ArrayBuffer: k,
    DataView: G
}