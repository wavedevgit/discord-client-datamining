/** chunk id: 710821, original params: t,e,r (module,exports,require) **/
var n = r(503199),
    o = r(120394),
    i = RangeError;
t.exports = function(t, e, r, a) {
    var u = n(t),
        c = o(r),
        s = c < 0 ? u + c : c;
    if (s >= u || s < 0) throw new i("Incorrect index");
    for (var f = new e(u), _ = 0; _ < u; _++) f[_] = _ === s ? a : t[_];
    return f
}