/** chunk id: 987140 params = (module,exports,require) **/
i.d(t, {
    A: () => c
});
var n = i(627968),
    s = i(64700),
    l = i(183555),
    a = i(735321),
    r = i(958338),
    o = i(253798),
    d = i(224360);

function c(e) {
    let {
        widgetType: t,
        ...i
    } = e, {
        games: c,
        onAddGame: u
    } = (0, r.S)(t), {
        setExpanded: g
    } = (0, o.B)(), {
        trackUserProfileEditAction: m
    } = (0, l.NJ)(), h = s.useCallback(e => {
        u(e), g(!0), (0, a.ew)({
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
    return (0, n.jsx)(d.A, {
        games: c,
        onClick: h,
        ...i
    })
}