/** Chunk was on 96758 **/
/** chunk id: 72563, original params: e,t,r (module,exports,require) **/
r.d(t, {
    i: () => c
});
var n = r(64700),
    l = r(311907),
    s = r(287809),
    i = r(403362),
    u = r(427262),
    a = r(985018);

function c(e) {
    let t = (0, l.yK)([s.default], () => e.recipients.map(e => s.default.getUser(e)).filter(i.Vq).map(e => u.Ay.getName(e)));
    return n.useMemo(() => {
        if ("" === e.name) return null;
        if (0 === t.length) return null;
        if (1 === t.length) return a.intl.formatToPlainString(a.t["J+Wpst"], {
            first: t[0]
        });
        if (2 === t.length) return a.intl.formatToPlainString(a.t.gwRP0Y, {
            first: t[0],
            second: t[1]
        });
        if (3 === t.length) return a.intl.formatToPlainString(a.t.QDB5et, {
            first: t[0],
            second: t[1],
            third: t[2]
        });
        let r = t.length - 3;
        return a.intl.formatToPlainString(a.t.VYfueb, {
            first: t[0],
            second: t[1],
            third: t[2],
            count: r
        })
    }, [e, t])
}