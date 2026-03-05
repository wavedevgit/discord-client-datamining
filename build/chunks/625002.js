/** chunk id: 625002 params = (module,exports,require) **/
a.d(t, {
    A: () => s
});
var l = a(299855),
    r = a.n(l),
    i = a(723702);
let n = {
    [i.PlatformTypes.WINDOWS]: {
        nvidia: ">=397.93.0"
    }
};

function s(e) {
    let t = n[(0, i.getPlatform)()];
    if (null == t) return !1;
    for (let a of Object.keys(e)) {
        let l = e[a],
            i = t[a];
        if (null == l || null == i || null != l.error) continue;
        let n = `${l.major??0}.${l.minor??0}.0`;
        if (!r().satisfies(n, i)) return !0
    }
    return !1
}