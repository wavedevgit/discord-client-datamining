/** chunk id: 162942 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var a = n(627968),
    i = n(64700),
    s = n(687173),
    l = n(183555),
    r = n(289173),
    o = n(624160),
    d = n(229231),
    c = n(49999),
    u = n(985018),
    m = n(557134);

function h(e) {
    let {
        handleOpenUserProfileModal: t,
        markAsDismissed: n,
        ...h
    } = e, {
        trackUserProfileEditAction: p
    } = (0, l.NJ)(), x = i.useMemo(() => d.Zc.filter(r.hL).map(e => new r.Yy({
        type: e,
        games: []
    })), []), g = i.useCallback(() => {
        n(c.i.TAKE_ACTION), p({
            action: "PRESS_ADD_WIDGET"
        }), t()
    }, [t, n, p]);
    return (0, a.jsx)(s.A, {
        heading: u.intl.string(u.t["oqalC+"]),
        subheading: u.intl.string(u.t.O9SQ1c),
        markAsDismissed: n,
        ...h,
        children: (0, a.jsx)("ul", {
            "aria-label": u.intl.string(u.t["+EIBSA"]),
            className: m.f,
            children: x.map(e => (0, a.jsx)(o.A, {
                widget: e,
                size: "medium",
                onAddWidget: g,
                trackUserProfileEditAction: p
            }, e.getUniqueKey()))
        })
    })
}