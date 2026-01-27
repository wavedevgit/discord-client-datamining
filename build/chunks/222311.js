/** Chunk was on 87997 **/
/** chunk id: 222311, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(935649),
    o = n(847599),
    u = n(71393),
    c = n(287809),
    s = n(977997),
    d = n(849736),
    A = n(776781),
    b = n(312006),
    f = n(150401),
    g = n(354583),
    O = n(418208),
    E = n(985018);

function p(e) {
    var t;
    let n = (0, g.A)(),
        p = null == n ? void 0 : n.id,
        _ = null == n ? void 0 : n.guild_id,
        y = (0, l.bG)([u.A], () => u.A.getGuild(_), [_]),
        h = (0, l.bG)([s.A], () => null != p ? s.A.getVoiceStateForChannel(p, e.id) : null, [p, e.id]),
        m = (null == (t = c.default.getCurrentUser()) ? void 0 : t.id) === e.id,
        j = (0, f.A)(),
        v = (0, l.bG)([b.Ay], () => b.Ay.getPermissionsForUser(e.id, p), [p, e.id]),
        S = (0, A.Ni)(p),
        T = (0, O.zU)();
    if (null == n || null == y || null == h || v.speaker) return null;
    let I = () => {
        if (m) {
            if ((0, O.Cf)(n.id)) return void a.A.showAgeVerificationGetStartedModal({
                entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND
            });
            (0, d.e7)(n, !1)
        } else(0, d.SA)(n, e.id)
    };
    return m && T ? null : S ? (0, r.jsx)(i.Drp, {
        id: "invite-speaker",
        label: m ? E.intl.string(E.t["W6c/Vf"]) : E.intl.string(E.t.VUCWcO),
        action: I
    }) : j && m ? (0, r.jsx)(i.Drp, {
        id: "invite-speaker",
        label: E.intl.string(E.t["W6c/Vf"]),
        action: I
    }) : null
}