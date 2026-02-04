/** chunk id: 888420, original params: t,e,r (module,exports,require) **/
var n = r(557939),
    o = r(860511),
    i = r(446474),
    a = r(257943),
    u = r(273802),
    c = r(739305),
    s = r(607167),
    f = r(61132),
    _ = r(231977),
    l = r(706938),
    p = r(324794),
    d = r(370001),
    g = r(794729),
    b = r(777718),
    y = r(590838),
    h = r(706598),
    w = r(210140),
    v = r(324988),
    m = r(598349),
    x = r(837082),
    A = r(482779),
    S = r(524152),
    T = r(458680),
    O = r(855835).f,
    E = r(187294),
    R = r(721670).forEach,
    I = r(274574),
    k = r(485155),
    j = r(4940),
    F = r(873078),
    P = r(412405),
    L = r(883972),
    M = r(486724),
    C = L.get,
    D = L.set,
    N = L.enforce,
    B = j.f,
    U = F.f,
    W = o.RangeError,
    V = s.ArrayBuffer,
    z = V.prototype,
    G = s.DataView,
    q = c.NATIVE_ARRAY_BUFFER_VIEWS,
    H = c.TYPED_ARRAY_TAG,
    Y = c.TypedArray,
    J = c.TypedArrayPrototype,
    Q = c.isTypedArray,
    $ = "BYTES_PER_ELEMENT",
    K = "Wrong length",
    X = function(t, e) {
        k(t, e, {
            configurable: !0,
            get: function() {
                return C(this)[e]
            }
        })
    },
    Z = function(t) {
        var e;
        return S(z, t) || "ArrayBuffer" === (e = v(t)) || "SharedArrayBuffer" === e
    },
    tt = function(t, e) {
        return Q(t) && !x(e) && e in t && p(+e) && e >= 0
    },
    te = function(t, e) {
        return tt(t, e = h(e)) ? _(2, t[e]) : U(t, e)
    },
    tr = function(t, e, r) {
        return tt(t, e = h(e)) && m(r) && w(r, "value") && !w(r, "get") && !w(r, "set") && !r.configurable && (!w(r, "writable") || r.writable) && (!w(r, "enumerable") || r.enumerable) ? (t[e] = r.value, t) : B(t, e, r)
    };
a ? (q || (F.f = te, j.f = tr, X(J, "buffer"), X(J, "byteOffset"), X(J, "byteLength"), X(J, "length")), n({
    target: "Object",
    stat: !0,
    forced: !q
}, {
    getOwnPropertyDescriptor: te,
    defineProperty: tr
}), t.exports = function(t, e, r) {
    var a = t.match(/\d+/)[0] / 8,
        c = t + (r ? "Clamped" : "") + "Array",
        s = "get" + t,
        _ = "set" + t,
        p = o[c],
        h = p,
        w = h && h.prototype,
        v = {},
        x = function(t, e) {
            var r = C(t);
            return r.view[s](e * a + r.byteOffset, !0)
        },
        S = function(t, e, n) {
            var o = C(t);
            o.view[_](e * a + o.byteOffset, r ? y(n) : n, !0)
        },
        k = function(t, e) {
            B(t, e, {
                get: function() {
                    return x(this, e)
                },
                set: function(t) {
                    return S(this, e, t)
                },
                enumerable: !0
            })
        };
    q ? u && (h = e(function(t, e, r, n) {
        return f(t, w), M(m(e) ? Z(e) ? void 0 !== n ? new p(e, b(r, a), n) : void 0 !== r ? new p(e, b(r, a)) : new p(e) : Q(e) ? P(h, e) : i(E, h, e) : new p(g(e)), t, h)
    }), T && T(h, Y), R(O(p), function(t) {
        t in h || l(h, t, p[t])
    }), h.prototype = w) : (h = e(function(t, e, r, n) {
        f(t, w);
        var o, u, c, s = 0,
            _ = 0;
        if (m(e))
            if (Z(e)) {
                o = e, _ = b(r, a);
                var l = e.byteLength;
                if (void 0 === n) {
                    if (l % a || (u = l - _) < 0) throw new W(K)
                } else if ((u = d(n) * a) + _ > l) throw new W(K);
                c = u / a
            } else if (Q(e)) return P(h, e);
        else return i(E, h, e);
        else o = new V(u = (c = g(e)) * a);
        for (D(t, {
                buffer: o,
                byteOffset: _,
                byteLength: u,
                length: c,
                view: new G(o)
            }); s < c;) k(t, s++)
    }), T && T(h, Y), w = h.prototype = A(J)), w.constructor !== h && l(w, "constructor", h), N(w).TypedArrayConstructor = h, H && l(w, H, c);
    var j = h !== p;
    v[c] = h, n({
        global: !0,
        constructor: !0,
        forced: j,
        sham: !q
    }, v), $ in h || l(h, $, a), $ in w || l(w, $, a), I(c)
}) : t.exports = function() {}