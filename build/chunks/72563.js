/** chunk id: 72563, original params: e,t,r (module,exports,require) **/
r.d(t, {
    i: () => o
});
var n = r(64700),
    l = r(311907),
    s = r(287809),
    i = r(403362),
    a = r(427262),
    u = r(985018);

function o(e) {
    let t = (0, l.yK)([s.default], () => e.recipients.map(e => s.default.getUser(e)).filter(i.Vq).map(e => a.Ay.getName(e)));
    return n.useMemo(() => {
        if ("" === e.name) return null;
        if (0 === t.length) return null;
        if (1 === t.length) return u.intl.formatToPlainString(u.t["J+Wpst"], {
            first: t[0]
        });
        if (2 === t.length) return u.intl.formatToPlainString(u.t.gwRP0Y, {
            first: t[0],
            second: t[1]
        });
        if (3 === t.length) return u.intl.formatToPlainString(u.t.QDB5et, {
            first: t[0],
            second: t[1],
            third: t[2]
        });
        let r = t.length - 3;
        return u.intl.formatToPlainString(u.t.VYfueb, {
            first: t[0],
            second: t[1],
            third: t[2],
            count: r
        })
    }, [e, t])
}