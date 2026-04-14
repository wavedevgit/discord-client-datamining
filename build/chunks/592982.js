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
    p = n(834857),
    g = n(451556),
    f = n(74329),
    E = n(956747),
    x = n(470743),
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
    } = e, y = (0, o.Us)(), {
        id: v,
        type: R
    } = T, j = (0, l.bG)([c.A], () => c.A.getGuild(T.guild_id), [T.guild_id]), O = (0, l.bG)([u.A], () => u.A.getSelectedParticipant(v)), L = O?.type === I.lp.STREAM ? O.stream : null, M = (0, l.bG)([a.A], () => O?.type === I.lp.ACTIVITY ? a.A.getApplication(O.applicationId) : void 0), D = (0, _.A)(v), U = (0, E.A)(v), G = (0, p.A)(T, j, L?.ownerId, M?.id), P = (0, A.A)(v), k = (0, x.A)(), w = (0, d.RQ)(v), B = (0, d.dA)(v), V = (0, f.A)(L, y), H = (0, g.A)(M, v), F = (0, m.A)(), W = (0, r.A)(T), K = (0, h.f)(v);
    return (0, i.jsxs)(s.W1t, {
        "data-menu-migrated": !0,
        onClose: t,
        onSelect: n,
        onInteraction: b,
        navId: "more-settings-context",
        "aria-label": N.intl.string(N.t.FTLzdR),
        children: [(0, i.jsx)(s.rXV, {
            children: R !== C.rbe.GUILD_STAGE_VOICE ? G : null
        }), (0, i.jsxs)(s.rXV, {
            children: [R === C.rbe.GUILD_STAGE_VOICE ? w : null, R === C.rbe.GUILD_STAGE_VOICE ? B : null, S || R === C.rbe.GUILD_STAGE_VOICE ? null : P, F, R !== C.rbe.GUILD_STAGE_VOICE ? D : null, R === C.rbe.GUILD_STAGE_VOICE || R === C.rbe.GUILD_VOICE ? U : null]
        }), (0, i.jsx)(s.rXV, {
            children: W
        }), (0, i.jsxs)(s.rXV, {
            children: [k, !T.isManaged() && T.isPrivate() ? K : null]
        }), (0, i.jsxs)(s.rXV, {
            children: [null != L ? V : null, null != M ? H : null]
        })]
    })
}