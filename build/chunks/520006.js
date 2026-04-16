/** chunk id: 520006 params = (module,exports,require) **/
n.d(t, {
    A: () => E,
    X: () => f
});
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    a = n(311907),
    r = n(397927),
    o = n(298990),
    d = n(688810),
    c = n(384059),
    u = n(267102),
    h = n(71393),
    A = n(375492),
    _ = n(576705),
    m = n(709562),
    p = n(652215),
    g = n(985018);

function f(e) {
    let {
        guild: t,
        channel: l,
        streamUserId: s,
        applicationId: a,
        appContext: o,
        exitFullScreen: d,
        analyticsLocation: c,
        guildScheduledEvent: u,
        source: h
    } = e;
    d?.(), (0, r.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([n.e("43600"), n.e("28136"), n.e("42738")]).then(n.bind(n, 234355));
        return n => (0, i.jsx)(e, {
            ...n,
            guild: t,
            channel: l,
            streamUserId: s,
            applicationId: a,
            analyticsLocation: c,
            source: h,
            guildScheduledEvent: u
        })
    }, {
        modalKey: "stream-invite-modal",
        contextKey: o === p.BRT.POPOUT ? r.KX8 : r.SYi
    })
}

function E(e) {
    let {
        applicationId: t,
        stream: n,
        channel: l,
        exitFullScreen: E,
        appContext: x,
        analyticsLocation: I,
        guildScheduledEvent: C,
        shouldPrioritizeGroupPlusIcon: N = !1,
        isRichPresenceInvite: T = !1,
        iconClassName: S,
        look: b,
        size: y,
        buttonText: v,
        color: R,
        ...j
    } = e, O = (0, u.Us)(), {
        parentAnalyticsLocation: L
    } = (0, d.Ay)(), M = l?.getGuildId(), D = (0, a.bG)([h.A], () => null != M ? h.A.getGuild(M) : null, [M]), U = (0, a.bG)([A.A], () => null != t ? A.A.getApplicationActivity(t) : void 0), G = null == t || N ? r.DpX : r.dCJ, P = g.intl.string(g.t["6F9ivu"]);
    return (null != t && (P = g.intl.string(g.t["OzOM/q"])), null != n && (P = g.intl.string(g.t["6VQaqd"])), null != U && T) ? (0, i.jsx)(m.A, {
        onClick: () => {
            null != L && (0, c.X)(L, c.O.INVITE), o.qf(U, !1, O)
        },
        iconComponent: G,
        label: P,
        iconClassName: S,
        look: b,
        size: y,
        buttonText: v,
        color: R ?? void 0
    }) : null != D && null != l && _.A.can(p.xBc.CREATE_INSTANT_INVITE, l) ? (0, i.jsx)(m.A, {
        onClick: () => {
            s()(null != D, "guild cannot be null"), s()(null != l, "channel cannot be null"), null != L && (0, c.X)(L, c.O.INVITE), f({
                guild: D,
                channel: l,
                streamUserId: n?.ownerId,
                applicationId: t,
                appContext: x ?? O,
                exitFullScreen: E,
                analyticsLocation: I,
                guildScheduledEvent: C,
                source: l.isGuildStageVoice() ? p.PE1.STAGE_CHANNEL : p.PE1.STREAM_INVITE
            })
        },
        iconComponent: G,
        label: P,
        iconClassName: S,
        look: b,
        size: y,
        color: R,
        buttonText: v,
        ...j
    }) : null
}