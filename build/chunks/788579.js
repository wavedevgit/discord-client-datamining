/** chunk id: 788579 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(262763),
    c = n(753727),
    u = n(721592),
    h = n(406704),
    A = n(576705),
    _ = n(977997),
    m = n(203982),
    p = n(58736),
    g = n(652215),
    f = n(985018);
let E = l.memo(function(e) {
    let {
        channel: t
    } = e, n = (0, c.A)(), s = (0, r.bG)([_.A], () => _.A.isInChannel(t.id)), E = (0, r.bG)([_.A], () => !a().isEmpty(_.A.getVoiceStatesForChannel(t.id))), x = (0, r.bG)([A.A], () => A.A.can(g.xBc.CONNECT, t)), {
        needSubscriptionToAccess: I
    } = (0, u.A)(t.id), C = (0, h.Id)(t), N = l.useCallback(() => {
        d.A.handleVoiceConnect({
            channel: t,
            connected: s,
            needSubscriptionToAccess: I,
            locked: !1
        })
    }, [t, s, I]);
    return (l.useEffect(() => (m._.subscribe(g.jej.CALL_START, N), () => {
        m._.unsubscribe(g.jej.CALL_START, N)
    }), [N]), h.io.useExperiment({
        guildId: t.guild_id,
        location: "63250c_1"
    }, {
        autoTrackExposure: !1
    }).enabled && !n && !s && x && C && t.isVocalThread()) ? (0, i.jsx)(p.Ay.Icon, {
        icon: o._jp,
        onClick: N,
        tooltip: E ? f.intl.string(f.t.fdEeb5) : f.intl.string(f.t.focH1t)
    }) : null
})