/** chunk id: 987140 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    l = n(64700),
    a = n(183555),
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
        setExpanded: g
    } = (0, o.B)(), {
        trackUserProfileEditAction: m
    } = (0, a.NJ)(), x = l.useCallback(e => {
        u(e), g(!0), (0, s.ew)({
            widgetType: t,
            game: {
                applicationId: e
            }
        }), m({
            action: "GAME_ADDED",
            gameId: e,
            widgetEdited: t
        })
    }, [u, t, m, g]);
    return (0, i.jsx)(c.A, {
        games: d,
        onClick: x,
        ...n
    })
}