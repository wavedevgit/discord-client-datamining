/** chunk id: 72563 params = (module,exports,require) **/
s.d(t, {
    i: () => d
});
var i = s(64700),
    l = s(311907),
    n = s(287809),
    a = s(403362),
    r = s(427262),
    u = s(985018);

function d(e) {
    let t = (0, l.yK)([n.default], () => e.recipients.map(e => n.default.getUser(e)).filter(a.Vq).map(e => r.Ay.getName(e)));
    return i.useMemo(() => {
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
        let s = t.length - 3;
        return u.intl.formatToPlainString(u.t.VYfueb, {
            first: t[0],
            second: t[1],
            third: t[2],
            count: s
        })
    }, [e, t])
}