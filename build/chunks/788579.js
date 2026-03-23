/** chunk id: 788579 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(262763),
    d = n(753727),
    u = n(721592),
    h = n(406704),
    A = n(576705),
    m = n(977997),
    p = n(203982),
    _ = n(58736),
    g = n(652215),
    f = n(985018);
let x = s.memo(function(e) {
    let {
        channel: t
    } = e, n = (0, d.A)(), l = (0, r.bG)([m.A], () => m.A.isInChannel(t.id)), x = (0, r.bG)([m.A], () => !a().isEmpty(m.A.getVoiceStatesForChannel(t.id))), C = (0, r.bG)([A.A], () => A.A.can(g.xBc.CONNECT, t)), {
        needSubscriptionToAccess: E
    } = (0, u.A)(t.id), I = (0, h.Id)(t), N = s.useCallback(() => {
        c.A.handleVoiceConnect({
            channel: t,
            connected: l,
            needSubscriptionToAccess: E,
            locked: !1
        })
    }, [t, l, E]);
    return (s.useEffect(() => (p._.subscribe(g.jej.CALL_START, N), () => {
        p._.unsubscribe(g.jej.CALL_START, N)
    }), [N]), h.io.useExperiment({
        guildId: t.guild_id,
        location: "63250c_1"
    }, {
        autoTrackExposure: !1
    }).enabled && !n && !l && C && I && t.isVocalThread()) ? (0, i.jsx)(_.Ay.Icon, {
        icon: o._jp,
        onClick: N,
        tooltip: x ? f.intl.string(f.t.fdEeb5) : f.intl.string(f.t.focH1t)
    }) : null
})