/** chunk id: 129267, original params: e,t,i (module,exports,require) **/
i.d(t, {
    X: () => c
});
var n = i(419117),
    l = i(419954),
    s = i(780964),
    r = i(931852),
    a = i(528237),
    u = i(693804),
    o = i(985018);
let d = s.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    T = (0, l.bd)(d, {
        useTitle: e => e ? o.intl.string(o.t.RyimDk) : o.intl.string(o.t.CUICbO),
        useCollapsedSubtitle: function() {
            return (0, n.A)(d, {
                formatter: e => {
                    let {
                        title: t,
                        index: i
                    } = e;
                    return "string" != typeof t ? t : 0 === i ? "".concat(t.charAt(0).toLocaleUpperCase()).concat(t.slice(1).toLocaleLowerCase()) : t.toLocaleLowerCase()
                }
            })
        },
        buildLayout: () => [r.z, a.m, u.j]
    }),
    c = (0, l.zZ)(s.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => o.intl.string(o.t["31DySj"]),
        buildLayout: () => [T]
    })