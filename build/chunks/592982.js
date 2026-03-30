/** chunk id: 592982 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(587895),
    r = n(690953),
    o = n(267102),
    c = n(516311),
    d = n(71393),
    u = n(313961),
    h = n(457246),
    A = n(973937),
    m = n(854182),
    _ = n(734337),
    g = n(834857),
    p = n(451556),
    f = n(74329),
    x = n(956747),
    E = n(470743),
    C = n(806931),
    I = n(652215),
    N = n(985018);

function b(e) {
    let {
        onClose: t,
        onSelect: n,
        channel: b,
        remoteMode: S,
        onInteraction: T
    } = e, v = (0, o.Us)(), {
        id: y,
        type: j
    } = b, R = (0, s.bG)([d.A], () => d.A.getGuild(b.guild_id), [b.guild_id]), O = (0, s.bG)([u.A], () => u.A.getSelectedParticipant(y)), L = O?.type === C.lp.STREAM ? O.stream : null, M = (0, s.bG)([a.A], () => O?.type === C.lp.ACTIVITY ? a.A.getApplication(O.applicationId) : void 0), D = (0, m.A)(y), G = (0, x.A)(y), U = (0, g.A)(b, R, L?.ownerId, M?.id), P = (0, A.A)(y), w = (0, E.A)(), k = (0, c.RQ)(y), V = (0, c.dA)(y), B = (0, f.A)(L, v), H = (0, p.A)(M, y), F = (0, _.A)(), K = (0, r.A)(b), W = (0, h.f)(y);
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        onClose: t,
        onSelect: n,
        onInteraction: T,
        navId: "more-settings-context",
        "aria-label": N.intl.string(N.t.FTLzdR),
        children: [(0, i.jsx)(l.rXV, {
            children: j !== I.rbe.GUILD_STAGE_VOICE ? U : null
        }), (0, i.jsxs)(l.rXV, {
            children: [j === I.rbe.GUILD_STAGE_VOICE ? k : null, j === I.rbe.GUILD_STAGE_VOICE ? V : null, S || j === I.rbe.GUILD_STAGE_VOICE ? null : P, F, j !== I.rbe.GUILD_STAGE_VOICE ? D : null, j === I.rbe.GUILD_STAGE_VOICE || j === I.rbe.GUILD_VOICE ? G : null]
        }), (0, i.jsx)(l.rXV, {
            children: K
        }), (0, i.jsxs)(l.rXV, {
            children: [w, !b.isManaged() && b.isPrivate() ? W : null]
        }), (0, i.jsxs)(l.rXV, {
            children: [null != L ? B : null, null != M ? H : null]
        })]
    })
}