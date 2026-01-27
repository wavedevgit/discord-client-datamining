/** Chunk was on 77870 **/
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
    p = n(406704),
    h = n(576705),
    f = n(977997),
    g = n(203982),
    m = n(58736),
    b = n(652215),
    A = n(985018);
let y = l.memo(function(e) {
    let {
        channel: t
    } = e, n = (0, u.A)(), i = (0, a.bG)([f.A], () => f.A.isInChannel(t.id)), y = (0, a.bG)([f.A], () => !s().isEmpty(f.A.getVoiceStatesForChannel(t.id))), _ = (0, a.bG)([h.A], () => h.A.can(b.xBc.CONNECT, t)), {
        needSubscriptionToAccess: O
    } = (0, d.A)(t.id), j = (0, p.Id)(t), v = l.useCallback(() => {
        c.A.handleVoiceConnect({
            channel: t,
            connected: i,
            needSubscriptionToAccess: O,
            locked: !1
        })
    }, [t, i, O]);
    return (l.useEffect(() => (g._.subscribe(b.jej.CALL_START, v), () => {
        g._.unsubscribe(b.jej.CALL_START, v)
    }), [v]), p.io.useExperiment({
        guildId: t.guild_id,
        location: "63250c_1"
    }, {
        autoTrackExposure: !1
    }).enabled && !n && !i && _ && j && t.isVocalThread()) ? (0, r.jsx)(m.Ay.Icon, {
        icon: o._jp,
        onClick: v,
        tooltip: y ? A.intl.string(A.t.fdEeb5) : A.intl.string(A.t.focH1t)
    }) : null
})