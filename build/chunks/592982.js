/** chunk id: 592982, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(587895),
    a = n(690953),
    o = n(267102),
    c = n(516311),
    u = n(71393),
    d = n(313961),
    h = n(457246),
    p = n(973937),
    g = n(854182),
    f = n(734337),
    m = n(834857),
    b = n(451556),
    A = n(74329),
    y = n(956747),
    O = n(470743),
    _ = n(806931),
    j = n(652215),
    x = n(985018),
    v = n(220636);

function E(e) {
    let {
        onClose: t,
        onSelect: n,
        channel: E,
        remoteMode: C,
        onInteraction: S
    } = e, I = (0, o.Us)(), {
        id: N,
        type: T
    } = E, P = (0, l.bG)([u.A], () => u.A.getGuild(E.guild_id), [E.guild_id]), w = (0, l.bG)([d.A], () => d.A.getSelectedParticipant(N)), R = (null == w ? void 0 : w.type) === _.lp.STREAM ? w.stream : null, D = (0, l.bG)([s.A], () => (null == w ? void 0 : w.type) === _.lp.ACTIVITY ? s.A.getApplication(w.applicationId) : void 0), L = (0, g.A)(N), M = (0, y.A)(N), G = (0, m.A)(E, P, null == R ? void 0 : R.ownerId, null == D ? void 0 : D.id), k = (0, p.A)(N), U = (0, O.A)(), V = (0, c.RQ)(N), B = (0, c.dA)(N), H = (0, A.A)(R, I), F = (0, b.A)(D, N), K = (0, f.A)(), Y = (0, a.A)(E), W = (0, h.f)(N);
    return (0, r.jsxs)(i.W1t, {
        "data-menu-needs-review": !0,
        className: v.MK,
        onClose: t,
        onSelect: n,
        onInteraction: S,
        navId: "more-settings-context",
        "aria-label": x.intl.string(x.t.FTLzdR),
        children: [(0, r.jsx)(i.rXV, {
            children: T !== j.rbe.GUILD_STAGE_VOICE ? G : null
        }), (0, r.jsxs)(i.rXV, {
            children: [T === j.rbe.GUILD_STAGE_VOICE ? V : null, T === j.rbe.GUILD_STAGE_VOICE ? B : null, C || T === j.rbe.GUILD_STAGE_VOICE ? null : k, K, T !== j.rbe.GUILD_STAGE_VOICE ? L : null, T === j.rbe.GUILD_STAGE_VOICE || T === j.rbe.GUILD_VOICE ? M : null]
        }), (0, r.jsx)(i.rXV, {
            children: Y
        }), (0, r.jsxs)(i.rXV, {
            children: [U, !E.isManaged() && E.isPrivate() ? W : null]
        }), (0, r.jsxs)(i.rXV, {
            children: [null != R ? H : null, null != D ? F : null]
        })]
    })
}