/** Chunk was on 77870 **/
/** chunk id: 770904, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(554146),
    a = n(192308),
    o = n(397927),
    c = n(379848),
    u = n(652793),
    d = n(976860),
    p = n(186111),
    h = n(249584),
    f = n(652215),
    g = n(746080),
    m = n(49999),
    b = n(294726),
    A = n(985018),
    y = n(838554);
let _ = l.memo(function(e) {
    let {
        guildId: t,
        selected: n
    } = e, _ = (0, a.useHasAnyModalOpen)(), O = (0, i.bG)([p.A], () => p.A.hasLayers()), [j, v] = (0, c.ww)([s.M.GAME_SERVER_HOSTING_NEW_BADGE], t), x = j === s.M.GAME_SERVER_HOSTING_NEW_BADGE, [E, C] = (0, c.ww)(_ || O || !x ? [] : [s.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t), S = l.useCallback(e => {
        v(e), C(e)
    }, [v, C]), I = l.useCallback(() => {
        S(m.i.USER_DISMISS), (0, d.pX)(f.BVt.CHANNEL(t, g.VV.GAME_SERVERS))
    }, [t, S]), N = l.useRef(null), T = E === s.M.GAME_SERVER_HOSTING_NEW_COACHMARK, P = l.useCallback(() => (0, r.jsx)(h.mn, {
        channelRowRef: N,
        guildId: t,
        markAsDismissed: S
    }), [t, S]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.G, {
            ref: N,
            id: "game-server-".concat(t),
            renderIcon: e => (0, r.jsx)(o._xR, {
                size: "md",
                className: e,
                color: "currentColor"
            }),
            text: A.intl.string(b.default.vCzwM7),
            selected: n,
            onClick: I,
            trailing: x ? (0, r.jsx)(o.LpS, {
                disableColor: !0,
                text: A.intl.string(A.t.y2b7CA),
                className: y.q
            }) : null
        }), T && P()]
    })
})