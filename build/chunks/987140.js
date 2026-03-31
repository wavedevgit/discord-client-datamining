/** chunk id: 987140 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    a = n(64700),
    l = n(183555),
    s = n(735321),
    r = n(958338),
    o = n(253798),
    d = n(224360);

function c(e) {
    let {
        widgetType: t,
        ...n
    } = e, {
        games: c,
        onAddGame: u
    } = (0, r.S)(t), {
        setExpanded: g
    } = (0, o.B)(), {
        trackUserProfileEditAction: m
    } = (0, l.NJ)(), x = a.useCallback(e => {
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
    return (0, i.jsx)(d.A, {
        games: c,
        onClick: x,
        ...n
    })
}