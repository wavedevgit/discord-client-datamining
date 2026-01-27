/** Chunk was on web.js **/
/** chunk id: 888420, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(557939),
    i = n(860511),
    a = n(446474),
    o = n(257943),
    s = n(273802),
    l = n(739305),
    c = n(607167),
    u = n(61132),
    d = n(231977),
    f = n(706938),
    p = n(324794),
    _ = n(370001),
    h = n(794729),
    m = n(777718),
    g = n(590838),
    E = n(706598),
    y = n(210140),
    b = n(324988),
    O = n(598349),
    v = n(837082),
    A = n(482779),
    I = n(524152),
    S = n(458680),
    T = n(855835).f,
    C = n(187294),
    N = n(721670).forEach,
    w = n(274574),
    R = n(485155),
    P = n(4940),
    D = n(873078),
    L = n(412405),
    x = n(883972),
    M = n(486724),
    j = x.get,
    k = x.set,
    U = x.enforce,
    G = P.f,
    F = D.f,
    V = i.RangeError,
    B = c.ArrayBuffer,
    H = B.prototype,
    Y = c.DataView,
    W = l.NATIVE_ARRAY_BUFFER_VIEWS,
    K = l.TYPED_ARRAY_TAG,
    z = l.TypedArray,
    q = l.TypedArrayPrototype,
    Z = l.isTypedArray,
    Q = "BYTES_PER_ELEMENT",
    X = "Wrong length",
    J = function(e, t) {
        R(e, t, {
            configurable: !0,
            get: function() {
                return j(this)[t]
            }
        })
    },
    $ = function(e) {
        var t;
        return I(H, e) || "ArrayBuffer" === (t = b(e)) || "SharedArrayBuffer" === t
    },
    ee = function(e, t) {
        return Z(e) && !v(t) && t in e && p(+t) && t >= 0
    },
    et = function(e, t) {
        return ee(e, t = E(t)) ? d(2, e[t]) : F(e, t)
    },
    en = function(e, t, n) {
        return ee(e, t = E(t)) && O(n) && y(n, "value") && !y(n, "get") && !y(n, "set") && !n.configurable && (!y(n, "writable") || n.writable) && (!y(n, "enumerable") || n.enumerable) ? (e[t] = n.value, e) : G(e, t, n)
    };
o ? (W || (D.f = et, P.f = en, J(q, "buffer"), J(q, "byteOffset"), J(q, "byteLength"), J(q, "length")), r({
    target: "Object",
    stat: !0,
    forced: !W
}, {
    getOwnPropertyDescriptor: et,
    defineProperty: en
}), e.exports = function(e, t, n) {
    var o = e.match(/\d+/)[0] / 8,
        l = e + (n ? "Clamped" : "") + "Array",
        c = "get" + e,
        d = "set" + e,
        p = i[l],
        E = p,
        y = E && E.prototype,
        b = {},
        v = function(e, t) {
            var n = j(e);
            return n.view[c](t * o + n.byteOffset, !0)
        },
        I = function(e, t, r) {
            var i = j(e);
            i.view[d](t * o + i.byteOffset, n ? g(r) : r, !0)
        },
        R = function(e, t) {
            G(e, t, {
                get: function() {
                    return v(this, t)
                },
                set: function(e) {
                    return I(this, t, e)
                },
                enumerable: !0
            })
        };
    W ? s && (E = t(function(e, t, n, r) {
        return u(e, y), M(function() {
            return O(t) ? $(t) ? void 0 !== r ? new p(t, m(n, o), r) : void 0 !== n ? new p(t, m(n, o)) : new p(t) : Z(t) ? L(E, t) : a(C, E, t) : new p(h(t))
        }(), e, E)
    }), S && S(E, z), N(T(p), function(e) {
        e in E || f(E, e, p[e])
    }), E.prototype = y) : (E = t(function(e, t, n, r) {
        u(e, y);
        var i, s, l, c = 0,
            d = 0;
        if (O(t))
            if ($(t)) {
                i = t, d = m(n, o);
                var f = t.byteLength;
                if (void 0 === r) {
                    if (f % o || (s = f - d) < 0) throw new V(X)
                } else if ((s = _(r) * o) + d > f) throw new V(X);
                l = s / o
            } else if (Z(t)) return L(E, t);
        else return a(C, E, t);
        else i = new B(s = (l = h(t)) * o);
        for (k(e, {
                buffer: i,
                byteOffset: d,
                byteLength: s,
                length: l,
                view: new Y(i)
            }); c < l;) R(e, c++)
    }), S && S(E, z), y = E.prototype = A(q)), y.constructor !== E && f(y, "constructor", E), U(y).TypedArrayConstructor = E, K && f(y, K, l);
    var P = E !== p;
    b[l] = E, r({
        global: !0,
        constructor: !0,
        forced: P,
        sham: !W
    }, b), Q in E || f(E, Q, o), Q in y || f(y, Q, o), w(l)
}) : e.exports = function() {}