/** chunk id: 321073, original params: t,e,r (module,exports,require) **/
var n = r(557939),
    o = r(250594),
    i = r(503199),
    a = r(496538),
    u = r(732376);
n({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: r(503628)(function() {
        return 0x100000001 !== [].push.call({
            length: 0x100000000
        }, 1)
    }) || ! function() {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).push()
        } catch (t) {
            return t instanceof TypeError
        }
    }()
}, {
    push: function(t) {
        var e = o(this),
            r = i(e),
            n = arguments.length;
        u(r + n);
        for (var c = 0; c < n; c++) e[r] = arguments[c], r++;
        return a(e, r), r
    }
})