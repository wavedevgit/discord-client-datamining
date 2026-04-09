/** chunk id: 592982 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(587895),
    r = n(690953),
    o = n(267102),
    d = n(516311),
    c = n(71393),
    u = n(313961),
    h = n(457246),
    A = n(973937),
    _ = n(854182),
    m = n(734337),
    g = n(834857),
    p = n(451556),
    f = n(74329),
    x = n(956747),
    E = n(470743),
    I = n(806931),
    C = n(652215),
    N = n(985018);

function T(e) {
    let {
        onClose: t,
        onSelect: n,
        channel: T,
        remoteMode: S,
        onInteraction: b
    } = e, v = (0, o.Us)(), {
        id: y,
        type: j
    } = T, R = (0, l.bG)([c.A], () => c.A.getGuild(T.guild_id), [T.guild_id]), O = (0, l.bG)([u.A], () => u.A.getSelectedParticipant(y)), L = O?.type === I.lp.STREAM ? O.stream : null, M = (0, l.bG)([a.A], () => O?.type === I.lp.ACTIVITY ? a.A.getApplication(O.applicationId) : void 0), D = (0, _.A)(y), U = (0, x.A)(y), G = (0, g.A)(T, R, L?.ownerId, M?.id), P = (0, A.A)(y), k = (0, E.A)(), w = (0, d.RQ)(y), B = (0, d.dA)(y), V = (0, f.A)(L, v), H = (0, p.A)(M, y), F = (0, m.A)(), W = (0, r.A)(T), K = (0, h.f)(y);
    return (0, i.jsxs)(s.W1t, {
        "data-menu-migrated": !0,
        onClose: t,
        onSelect: n,
        onInteraction: b,
        navId: "more-settings-context",
        "aria-label": N.intl.string(N.t.FTLzdR),
        children: [(0, i.jsx)(s.rXV, {
            children: j !== C.rbe.GUILD_STAGE_VOICE ? G : null
        }), (0, i.jsxs)(s.rXV, {
            children: [j === C.rbe.GUILD_STAGE_VOICE ? w : null, j === C.rbe.GUILD_STAGE_VOICE ? B : null, S || j === C.rbe.GUILD_STAGE_VOICE ? null : P, F, j !== C.rbe.GUILD_STAGE_VOICE ? D : null, j === C.rbe.GUILD_STAGE_VOICE || j === C.rbe.GUILD_VOICE ? U : null]
        }), (0, i.jsx)(s.rXV, {
            children: W
        }), (0, i.jsxs)(s.rXV, {
            children: [k, !T.isManaged() && T.isPrivate() ? K : null]
        }), (0, i.jsxs)(s.rXV, {
            children: [null != L ? V : null, null != M ? H : null]
        })]
    })
}