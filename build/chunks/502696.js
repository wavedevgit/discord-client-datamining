/** chunk id: 502696 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(964486),
    l = n(954571),
    s = n(217549),
    o = n(70856),
    d = n(875922),
    c = n(163518),
    u = n(294132),
    A = n(971203),
    _ = n(652215),
    h = n(985018);

function m(e) {
    let {
        party: t,
        close: n,
        onSelect: m
    } = e, g = (0, d.A)(t), p = (0, A.A)(t), E = (0, u.A)(t), I = (0, c.A)(t), f = (0, s.A)(t), C = (0, o.A)(t);
    return (0, r.Ay)(() => {
        let e = t.currentActivities.filter(e => e.game?.name != null && (0, l.isGameApplicationType)(e.game?.type)).map(e => e.game.name);
        l.default.track(_.HAw.OPEN_POPOUT, {
            type: "Now Playing Card Popout",
            games_detected: e
        })
    }), (0, i.jsxs)(a.W1t, {
        "data-menu-migrated": !0,
        navId: "now-playing-menu",
        onClose: n,
        "aria-label": h.intl.string(h.t.ogxXGq),
        onSelect: m,
        children: [g, (0, i.jsxs)(a.rXV, {
            children: [p, E]
        }), (0, i.jsx)(a.rXV, {
            children: I
        }), (0, i.jsx)(a.rXV, {
            children: f
        }), C]
    })
}