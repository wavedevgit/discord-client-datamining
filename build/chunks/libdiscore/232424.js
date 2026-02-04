/** chunk id: 232424, original params: t,e,r (module,exports,require) **/
var n = r(860511),
    o = r(446474),
    i = r(739305),
    a = r(503199),
    u = r(777718),
    c = r(250594),
    s = r(503628),
    f = n.RangeError,
    _ = n.Int8Array,
    l = _ && _.prototype,
    p = l && l.set,
    d = i.aTypedArray,
    g = i.exportTypedArrayMethod,
    b = !s(function() {
        var t = new Uint8ClampedArray(2);
        return o(p, t, {
            length: 1,
            0: 3
        }, 1), 3 !== t[1]
    }),
    y = b && i.NATIVE_ARRAY_BUFFER_VIEWS && s(function() {
        var t = new _(2);
        return t.set(1), t.set("2", 1), 0 !== t[0] || 2 !== t[1]
    });
g("set", function(t) {
    d(this);
    var e = u(arguments.length > 1 ? arguments[1] : void 0, 1),
        r = c(t);
    if (b) return o(p, this, r, e);
    var n = this.length,
        i = a(r),
        s = 0;
    if (i + e > n) throw new f("Wrong length");
    for (; s < i;) this[e + s] = r[s++]
}, !b || y)