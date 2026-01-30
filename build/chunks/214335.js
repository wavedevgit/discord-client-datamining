/** chunk id: 214335, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => s
}), a(896048);
var l = a(299855),
    r = a.n(l),
    n = a(723702);
let i = {
    [n.PlatformTypes.WINDOWS]: {
        nvidia: "<=537.58.0 || >=546.31"
    }
};

function s(e) {
    let t = i[(0, n.getPlatform)()];
    if (null == t) return !1;
    for (let a of Object.keys(e)) {
        let l = e[a],
            n = t[a];
        if (null == l || null == n || null != l.error) continue;
        let i = function(e) {
            var t, a;
            return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (a = e.minor) ? a : 0, ".0")
        }(l);
        if (!r().satisfies(i, n)) return !0
    }
    return !1
}