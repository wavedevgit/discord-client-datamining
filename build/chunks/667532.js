/** chunk id: 667532, original params: t,n,r (module,exports,require) **/
var e = r(557939),
    a = r(250594),
    i = r(503199),
    u = r(496538),
    o = r(762503),
    f = r(732376);
e({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: 1 !== [].unshift(0) || ! function() {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).unshift()
        } catch (t) {
            return t instanceof TypeError
        }
    }()
}, {
    unshift: function(t) {
        var n = a(this),
            r = i(n),
            e = arguments.length;
        if (e) {
            f(r + e);
            for (var c = r; c--;) {
                var s = c + e;
                c in n ? n[s] = n[c] : o(n, s)
            }
            for (var l = 0; l < e; l++) n[l] = arguments[l]
        }
        return u(n, r + e)
    }
})