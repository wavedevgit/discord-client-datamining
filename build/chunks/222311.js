/** chunk id: 222311 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(935649),
    d = n(847599),
    s = n(71393),
    o = n(287809),
    u = n(977997),
    c = n(849736),
    A = n(776781),
    g = n(312006),
    b = n(150401),
    m = n(354583),
    h = n(418208),
    x = n(985018);

function f(e) {
    let t = (0, m.A)(),
        n = t?.id,
        f = t?.guild_id,
        E = (0, l.bG)([s.A], () => s.A.getGuild(f), [f]),
        j = (0, l.bG)([u.A], () => null != n ? u.A.getVoiceStateForChannel(n, e.id) : null, [n, e.id]),
        C = o.default.getCurrentUser()?.id === e.id,
        S = (0, b.A)(),
        I = (0, l.bG)([g.Ay], () => g.Ay.getPermissionsForUser(e.id, n), [n, e.id]),
        v = (0, A.Ni)(n),
        D = (0, h.zU)();
    if (null == t || null == E || null == j || I.speaker) return null;
    let M = () => {
        if (C) {
            if ((0, h.Cf)(t.id)) return void r.A.showAgeVerificationGetStartedModal({
                entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND
            });
            (0, c.e7)(t, !1)
        } else(0, c.SA)(t, e.id)
    };
    return C && D ? null : v ? (0, i.jsx)(a.Drp, {
        id: "invite-speaker",
        label: C ? x.intl.string(x.t["W6c/Vf"]) : x.intl.string(x.t.VUCWcO),
        action: M
    }) : S && C ? (0, i.jsx)(a.Drp, {
        id: "invite-speaker",
        label: x.intl.string(x.t["W6c/Vf"]),
        action: M
    }) : null
}