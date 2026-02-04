/** chunk id: 739305, original params: t,e,r (module,exports,require) **/
var n, o, i, a = r(593858),
    u = r(257943),
    c = r(860511),
    s = r(339626),
    f = r(598349),
    _ = r(210140),
    l = r(324988),
    p = r(406208),
    d = r(706938),
    g = r(693655),
    b = r(485155),
    y = r(524152),
    h = r(42756),
    w = r(458680),
    v = r(380744),
    m = r(753891),
    x = r(883972),
    A = x.enforce,
    S = x.get,
    T = c.Int8Array,
    O = T && T.prototype,
    E = c.Uint8ClampedArray,
    R = E && E.prototype,
    I = T && h(T),
    k = O && h(O),
    j = Object.prototype,
    F = c.TypeError,
    P = v("toStringTag"),
    L = m("TYPED_ARRAY_TAG"),
    M = "TypedArrayConstructor",
    C = a && !!w && "Opera" !== l(c.opera),
    D = !1,
    N = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    },
    B = {
        BigInt64Array: 8,
        BigUint64Array: 8
    },
    U = function(t) {
        var e = h(t);
        if (f(e)) {
            var r = S(e);
            return r && _(r, M) ? r[M] : U(e)
        }
    },
    W = function(t) {
        if (!f(t)) return !1;
        var e = l(t);
        return _(N, e) || _(B, e)
    };
for (n in N)(i = (o = c[n]) && o.prototype) ? A(i)[M] = o : C = !1;
for (n in B)(i = (o = c[n]) && o.prototype) && (A(i)[M] = o);
if ((!C || !s(I) || I === Function.prototype) && (I = function() {
        throw new F("Incorrect invocation")
    }, C))
    for (n in N) c[n] && w(c[n], I);
if ((!C || !k || k === j) && (k = I.prototype, C))
    for (n in N) c[n] && w(c[n].prototype, k);
if (C && h(R) !== k && w(R, k), u && !_(k, P))
    for (n in D = !0, b(k, P, {
            configurable: !0,
            get: function() {
                return f(this) ? this[L] : void 0
            }
        }), N) c[n] && d(c[n], L, n);
t.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: C,
    TYPED_ARRAY_TAG: D && L,
    aTypedArray: function(t) {
        if (W(t)) return t;
        throw new F("Target is not a typed array")
    },
    aTypedArrayConstructor: function(t) {
        if (s(t) && (!w || y(I, t))) return t;
        throw new F(p(t) + " is not a typed array constructor")
    },
    exportTypedArrayMethod: function(t, e, r, n) {
        if (u) {
            if (r)
                for (var o in N) {
                    var i = c[o];
                    if (i && _(i.prototype, t)) try {
                        delete i.prototype[t]
                    } catch (r) {
                        try {
                            i.prototype[t] = e
                        } catch (t) {}
                    }
                }(!k[t] || r) && g(k, t, r ? e : C && O[t] || e, n)
        }
    },
    exportTypedArrayStaticMethod: function(t, e, r) {
        var n, o;
        if (u) {
            if (w) {
                if (r) {
                    for (n in N)
                        if ((o = c[n]) && _(o, t)) try {
                            delete o[t]
                        } catch (t) {}
                }
                if (I[t] && !r) return;
                try {
                    return g(I, t, r ? e : C && I[t] || e)
                } catch (t) {}
            }
            for (n in N)(o = c[n]) && (!o[t] || r) && g(o, t, e)
        }
    },
    getTypedArrayConstructor: U,
    isView: function(t) {
        if (!f(t)) return !1;
        var e = l(t);
        return "DataView" === e || _(N, e) || _(B, e)
    },
    isTypedArray: W,
    TypedArray: I,
    TypedArrayPrototype: k
}