/** chunk id: 211639 params = (module,exports,require) **/
n.d(t, {
    T: () => h
});
var i = n(934551),
    s = n(824552),
    l = n(419954),
    r = n(780964),
    a = n(601954),
    o = n(978431),
    d = n(731542),
    c = n(674082),
    u = n(570874),
    _ = n(985018);
let m = (0, l.dT)(r.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => _.intl.string(_.t["/7xJCF"]),
        buildLayout: () => [o.e, u.q, d.N, c.Y]
    }),
    g = (0, l.dT)(r.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            s.A.fetch()
        },
        getTitle: () => _.intl.string(_.t.YpCiMt),
        buildLayout: () => [a.j]
    }),
    A = (0, l.t_)(r.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        buildLayout: () => [m, g]
    }),
    h = (0, l.i4)(r.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["+o1pDZ"]),
        icon: i.ShieldUserIcon,
        buildLayout: () => [A]
    })