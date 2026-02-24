/** chunk id: 298009, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o,
    u: () => d
});
var l = n(64700),
    r = n(27023),
    a = n(294726),
    i = n(985018);
let s = ["/", "\\\\"];

function d(e) {
    let t = l.useMemo(() => s.some(t => (e ?? "").includes(t)), [e]);
    return {
        isValid: !t,
        errors: {
            name: t ? i.intl.formatToPlainString(a.default.jYZD44, {
                forbiddenCharacters: s.join(", ")
            }) : void 0
        }
    }
}

function o() {
    let {
        regionId: e,
        gameServerInstance: t,
        name: n,
        planId: l
    } = (0, r.bv)(), a = "" !== n && "" !== e && void 0 !== l;
    return null != t ? a && (t.name !== n || t.regionId !== e || t.planId !== l) : a
}