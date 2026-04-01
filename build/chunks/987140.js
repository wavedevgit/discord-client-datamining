/** chunk id: 987140 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    a = n(64700),
    l = n(183555),
    s = n(735321),
    r = n(958338),
    o = n(253798),
    c = n(224360);

function d(e) {
    let {
        widgetType: t,
        ...n
    } = e, {
        games: d,
        onAddGame: u
    } = (0, r.S)(t), {
        setExpanded: m
    } = (0, o.B)(), {
        trackUserProfileEditAction: g
    } = (0, l.NJ)(), p = a.useCallback(e => {
        u(e), m(!0), (0, s.ew)({
            widgetType: t,
            game: {
                applicationId: e
            }
        }), g({
            action: "GAME_ADDED",
            gameId: e,
            widgetEdited: t
        })
    }, [u, t, g, m]);
    return (0, i.jsx)(c.A, {
        games: d,
        onClick: p,
        ...n
    })
}