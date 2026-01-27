/** Chunk was on 94682 **/
/** chunk id: 858808, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(990078),
    o = n(397927),
    s = n(183555),
    c = n(735321),
    u = n(985018),
    d = n(794118);

function f(e) {
    let {
        game: t,
        widgetType: n,
        iconSize: l = "refresh_sm",
        className: f,
        buttonRef: p,
        onRemove: g
    } = e, {
        trackUserProfileEditAction: m
    } = (0, s.NJ)();
    return (0, r.jsx)(a.m, {
        text: u.intl.string(u.t.HUvyDc),
        ariaHidden: !0,
        children: (0, r.jsx)(o.DUT, {
            innerRef: p,
            onClick: () => {
                (0, c.ef)(n, t.applicationId), o.ORC.announce(u.intl.string(u.t["08HmMj"])), m({
                    action: "GAME_REMOVED",
                    gameId: t.applicationId,
                    widgetEdited: n
                }), null == g || g()
            },
            "aria-label": u.intl.string(u.t.HUvyDc),
            className: i()(f, d.v),
            children: (0, r.jsx)(o.ucK, {
                size: l,
                className: d.K,
                color: o.LU0.colors.ICON_FEEDBACK_CRITICAL
            })
        })
    })
}