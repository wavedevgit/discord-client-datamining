/** chunk id: 561446, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(990078),
    a = n(397927),
    s = n(58736),
    o = n(657331),
    c = n(498642),
    u = n(71393),
    d = n(576705),
    h = n(661191),
    p = n(844944),
    f = n(513461),
    m = n(123393),
    g = n(652215),
    A = n(985018),
    b = n(116228);

function _(e) {
    let {
        channelId: t,
        showProfile: n = !1,
        showTrailingDivider: _ = !1
    } = e, y = h.default.cast(t), {
        joinRequest: v,
        isModmin: E,
        guildId: O,
        maxMembers: C
    } = (0, r.cf)([p.A, u.A, d.A], () => {
        let e = p.A.getRequest(y),
            t = u.A.getGuild(null == e ? void 0 : e.guildId);
        return {
            joinRequest: e,
            isModmin: null != t && d.A.can(g.xBc.KICK_MEMBERS, t),
            guildId: null == t ? void 0 : t.id,
            maxMembers: null == t ? void 0 : t.maxMembers
        }
    }), x = (0, r.bG)([c.A], () => null != O ? c.A.getMemberCount(O) : 0), S = null != C && (null != x ? x : 0) >= C, {
        approveRequest: j,
        rejectRequest: I,
        submitting: T
    } = (0, m.W)(null == v ? void 0 : v.guildId, null == v ? void 0 : v.userId, null == v ? void 0 : v.joinRequestId);
    return null != v && v.applicationStatus === f.B5.SUBMITTED && E ? (0, l.jsxs)("div", {
        className: b.U,
        children: [(0, l.jsx)(i.m, {
            text: A.intl.string(A.t.cdPGbE),
            shouldShow: S,
            children: (0, l.jsx)(a.Button, {
                variant: "active",
                size: "sm",
                text: A.intl.string(A.t.BzjDQJ),
                loading: T,
                onClick: j,
                disabled: S
            })
        }), (0, l.jsx)(a.Button, {
            variant: "critical-primary",
            size: "sm",
            text: A.intl.string(A.t.hDtbsz),
            onClick: I,
            disabled: T || v.applicationStatus !== f.B5.SUBMITTED
        }), n && (0, l.jsx)(a.Button, {
            onClick: () => {
                (0, o.openUserProfileModal)({
                    userId: v.userId,
                    guildId: v.guildId
                })
            },
            variant: "secondary",
            size: "sm",
            text: A.intl.string(A.t.iXAna6)
        }), _ && (0, l.jsx)(s.Ay.Divider, {})]
    }) : null
}