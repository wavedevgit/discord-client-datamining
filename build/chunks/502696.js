/** chunk id: 502696 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(964486),
    l = n(954571),
    s = n(217549),
    o = n(70856),
    d = n(875922),
    c = n(163518),
    u = n(294132),
    A = n(971203),
    h = n(652215),
    _ = n(985018);

function m(e) {
    let {
        party: t,
        close: n,
        onSelect: m
    } = e, g = (0, d.A)(t), p = (0, A.A)(t), E = (0, u.A)(t), I = (0, c.A)(t), f = (0, s.A)(t), C = (0, o.A)(t);
    return (0, a.Ay)(() => {
        let e = t.currentActivities.filter(e => e.game?.name != null && (0, l.isGameApplicationType)(e.game?.type)).map(e => e.game.name);
        l.default.track(h.HAw.OPEN_POPOUT, {
            type: "Now Playing Card Popout",
            games_detected: e
        })
    }), (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "now-playing-menu",
        onClose: n,
        "aria-label": _.intl.string(_.t.ogxXGq),
        onSelect: m,
        children: [g, (0, i.jsxs)(r.rXV, {
            children: [p, E]
        }), (0, i.jsx)(r.rXV, {
            children: I
        }), (0, i.jsx)(r.rXV, {
            children: f
        }), C]
    })
}