/** chunk id: 65162, original params: t,e,r (module,exports,require) **/
var n = r(710821),
    o = r(739305),
    i = r(464046),
    a = r(120394),
    u = r(900923),
    c = o.aTypedArray,
    s = o.getTypedArrayConstructor;
(0, o.exportTypedArrayMethod)("with", {
    with: function(t, e) {
        var r = c(this),
            o = a(t),
            f = i(r) ? u(e) : +e;
        return n(r, s(r), o, f)
    }
}.with, ! function() {
    try {
        new Int8Array(1).with(2, {
            valueOf: function() {
                throw 8
            }
        })
    } catch (t) {
        return 8 === t
    }
}())