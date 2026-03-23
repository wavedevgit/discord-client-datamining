/** chunk id: 561446 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(990078),
    a = n(397927),
    r = n(58736),
    o = n(657331),
    c = n(498642),
    d = n(71393),
    u = n(576705),
    h = n(661191),
    m = n(844944),
    A = n(513461),
    g = n(123393),
    p = n(652215),
    f = n(985018),
    _ = n(116228);

function E(e) {
    let {
        channelId: t,
        showProfile: n = !1,
        showTrailingDivider: E = !1
    } = e, x = h.default.cast(t), {
        joinRequest: C,
        isModmin: S,
        guildId: I,
        maxMembers: T
    } = (0, l.cf)([m.A, d.A, u.A], () => {
        let e = m.A.getRequest(x),
            t = d.A.getGuild(e?.guildId);
        return {
            joinRequest: e,
            isModmin: null != t && u.A.can(p.xBc.KICK_MEMBERS, t),
            guildId: t?.id,
            maxMembers: t?.maxMembers
        }
    }), N = (0, l.bG)([c.A], () => null != I ? c.A.getMemberCount(I) : 0), v = null != T && (N ?? 0) >= T, {
        approveRequest: b,
        rejectRequest: y,
        submitting: j
    } = (0, g.W)(C?.guildId, C?.userId, C?.joinRequestId);
    return null != C && C.applicationStatus === A.B5.SUBMITTED && S ? (0, i.jsxs)("div", {
        className: _.U,
        children: [(0, i.jsx)(s.m, {
            text: f.intl.string(f.t.cdPGbE),
            shouldShow: v,
            children: (0, i.jsx)(a.Button, {
                variant: "active",
                size: "sm",
                text: f.intl.string(f.t.BzjDQJ),
                loading: j,
                onClick: b,
                disabled: v
            })
        }), (0, i.jsx)(a.Button, {
            variant: "critical-primary",
            size: "sm",
            text: f.intl.string(f.t.hDtbsz),
            onClick: y,
            disabled: j || C.applicationStatus !== A.B5.SUBMITTED
        }), n && (0, i.jsx)(a.Button, {
            onClick: () => {
                (0, o.openUserProfileModal)({
                    userId: C.userId,
                    guildId: C.guildId
                })
            },
            variant: "secondary",
            size: "sm",
            text: f.intl.string(f.t.iXAna6)
        }), E && (0, i.jsx)(r.Ay.Divider, {})]
    }) : null
}