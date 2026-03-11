/** chunk id: 222311 params = (module,exports,require) **/
n.d(t, {
    A: () => h
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
    m = n(150401),
    b = n(354583),
    f = n(418208),
    x = n(985018);

function h(e) {
    let t = (0, b.A)(),
        n = t?.id,
        h = t?.guild_id,
        E = (0, l.bG)([s.A], () => s.A.getGuild(h), [h]),
        j = (0, l.bG)([u.A], () => null != n ? u.A.getVoiceStateForChannel(n, e.id) : null, [n, e.id]),
        C = o.default.getCurrentUser()?.id === e.id,
        I = (0, m.A)(),
        S = (0, l.bG)([g.Ay], () => g.Ay.getPermissionsForUser(e.id, n), [n, e.id]),
        v = (0, A.Ni)(n),
        p = (0, f.zU)();
    if (null == t || null == E || null == j || S.speaker) return null;
    let _ = () => {
        if (C) {
            if ((0, f.Cf)(t.id)) return void r.A.showAgeVerificationGetStartedModal({
                entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND
            });
            (0, c.e7)(t, !1)
        } else(0, c.SA)(t, e.id)
    };
    return C && p ? null : v ? (0, i.jsx)(a.Drp, {
        id: "invite-speaker",
        label: C ? x.intl.string(x.t["W6c/Vf"]) : x.intl.string(x.t.VUCWcO),
        action: _
    }) : I && C ? (0, i.jsx)(a.Drp, {
        id: "invite-speaker",
        label: x.intl.string(x.t["W6c/Vf"]),
        action: _
    }) : null
}