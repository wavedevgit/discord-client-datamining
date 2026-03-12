/** chunk id: 129267 params = (module,exports,require) **/
n.d(t, {
    X: () => _
});
var i = n(419117),
    s = n(419954),
    l = n(780964),
    r = n(931852),
    a = n(528237),
    o = n(693804),
    d = n(985018);
let c = l.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    u = (0, s.bd)(c, {
        useTitle: e => e ? d.intl.string(d.t.RyimDk) : d.intl.string(d.t.CUICbO),
        useCollapsedSubtitle: function() {
            return (0, i.A)(c, {
                formatter: e => {
                    let {
                        title: t,
                        index: n
                    } = e;
                    return "string" != typeof t ? t : 0 === n ? `${t.charAt(0).toLocaleUpperCase()}${t.slice(1).toLocaleLowerCase()}` : t.toLocaleLowerCase()
                }
            })
        },
        buildLayout: () => [r.z, a.m, o.j]
    }),
    _ = (0, s.zZ)(l.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => d.intl.string(d.t["31DySj"]),
        buildLayout: () => [u]
    })