/** chunk id: 858808 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(990078),
    r = n(397927),
    o = n(183555),
    d = n(735321),
    c = n(985018),
    u = n(919820);

function m(e) {
    let {
        game: t,
        widgetType: n,
        iconSize: l = "refresh_sm",
        className: m,
        buttonRef: g,
        onRemove: x
    } = e, {
        trackUserProfileEditAction: f
    } = (0, o.NJ)();
    return (0, i.jsx)(s.m, {
        text: c.intl.string(c.t.HUvyDc),
        ariaHidden: !0,
        children: (0, i.jsx)(r.DUT, {
            innerRef: g,
            onClick: () => {
                (0, d.ef)(n, t.applicationId), r.ORC.announce(c.intl.string(c.t["08HmMj"])), f({
                    action: "GAME_REMOVED",
                    gameId: t.applicationId,
                    widgetEdited: n
                }), x?.()
            },
            "aria-label": c.intl.string(c.t.HUvyDc),
            className: a()(m, u.v),
            children: (0, i.jsx)(r.ucK, {
                size: l,
                className: u.K,
                color: r.LU0.colors.ICON_FEEDBACK_CRITICAL
            })
        })
    })
}