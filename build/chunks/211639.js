/** chunk id: 211639 params = (module,exports,require) **/
n.d(t, {
    T: () => x
});
var i = n(934551),
    s = n(824552),
    l = n(419954),
    a = n(780964),
    r = n(601954),
    o = n(978431),
    d = n(731542),
    c = n(674082),
    u = n(570874),
    m = n(985018);
let _ = (0, l.dT)(a.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => m.intl.string(m.t["/7xJCF"]),
        buildLayout: () => [o.e, u.q, d.N, c.Y]
    }),
    g = (0, l.dT)(a.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            s.A.fetch()
        },
        getTitle: () => m.intl.string(m.t.YpCiMt),
        buildLayout: () => [r.j]
    }),
    A = (0, l.t_)(a.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => m.intl.string(m.t["+o1pDZ"]),
        buildLayout: () => [_, g]
    }),
    x = (0, l.i4)(a.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["+o1pDZ"]),
        icon: i.ShieldUserIcon,
        buildLayout: () => [A]
    })