/** Chunk was on 1113 **/
/** chunk id: 788579, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(262763),
    u = n(753727),
    d = n(721592),
    h = n(406704),
    p = n(576705),
    g = n(977997),
    f = n(203982),
    m = n(58736),
    b = n(652215),
    A = n(985018);
let y = l.memo(function(e) {
    let {
        channel: t
    } = e, n = (0, u.A)(), i = (0, a.bG)([g.A], () => g.A.isInChannel(t.id)), y = (0, a.bG)([g.A], () => !s().isEmpty(g.A.getVoiceStatesForChannel(t.id))), O = (0, a.bG)([p.A], () => p.A.can(b.xBc.CONNECT, t)), {
        needSubscriptionToAccess: _
    } = (0, d.A)(t.id), j = (0, h.Id)(t), x = l.useCallback(() => {
        c.A.handleVoiceConnect({
            channel: t,
            connected: i,
            needSubscriptionToAccess: _,
            locked: !1
        })
    }, [t, i, _]);
    return (l.useEffect(() => (f._.subscribe(b.jej.CALL_START, x), () => {
        f._.unsubscribe(b.jej.CALL_START, x)
    }), [x]), h.io.useExperiment({
        guildId: t.guild_id,
        location: "63250c_1"
    }, {
        autoTrackExposure: !1
    }).enabled && !n && !i && O && j && t.isVocalThread()) ? (0, r.jsx)(m.Ay.Icon, {
        icon: o._jp,
        onClick: x,
        tooltip: y ? A.intl.string(A.t.fdEeb5) : A.intl.string(A.t.focH1t)
    }) : null
})