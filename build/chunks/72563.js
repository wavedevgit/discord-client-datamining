/** chunk id: 72563 params = (module,exports,require) **/
s.d(t, {
    i: () => u
});
var l = s(64700),
    i = s(311907),
    a = s(287809),
    n = s(403362),
    r = s(427262),
    A = s(985018);

function u(e) {
    let t = (0, i.yK)([a.default], () => e.recipients.map(e => a.default.getUser(e)).filter(n.Vq).map(e => r.Ay.getName(e)));
    return l.useMemo(() => {
        if ("" === e.name) return null;
        if (0 === t.length) return null;
        if (1 === t.length) return A.intl.formatToPlainString(A.t["J+Wpst"], {
            first: t[0]
        });
        if (2 === t.length) return A.intl.formatToPlainString(A.t.gwRP0Y, {
            first: t[0],
            second: t[1]
        });
        if (3 === t.length) return A.intl.formatToPlainString(A.t.QDB5et, {
            first: t[0],
            second: t[1],
            third: t[2]
        });
        let s = t.length - 3;
        return A.intl.formatToPlainString(A.t.VYfueb, {
            first: t[0],
            second: t[1],
            third: t[2],
            count: s
        })
    }, [e, t])
}