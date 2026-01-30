/** chunk id: 298009, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o,
    u: () => d
});
var r = n(64700),
    l = n(27023),
    i = n(294726),
    s = n(985018);
let a = ["/", "\\\\"];

function d(e) {
    let t = r.useMemo(() => a.some(t => (null != e ? e : "").includes(t)), [e]);
    return {
        isValid: !t,
        errors: {
            name: t ? s.intl.formatToPlainString(i.default.jYZD44, {
                forbiddenCharacters: a.join(", ")
            }) : void 0
        }
    }
}

function o() {
    let {
        regionId: e,
        gameServerInstance: t,
        name: n,
        planId: r
    } = (0, l.bv)(), i = "" !== n && "" !== e && void 0 !== r;
    return null != t ? i && (t.name !== n || t.regionId !== e || t.planId !== r) : i
}