/** Chunk was on 78528 **/
/** chunk id: 561446, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(990078),
    s = n(397927),
    a = n(58736),
    o = n(657331),
    c = n(498642),
    u = n(71393),
    d = n(576705),
    p = n(661191),
    h = n(844944),
    f = n(513461),
    g = n(123393),
    m = n(652215),
    b = n(985018),
    A = n(116228);

function y(e) {
    let {
        channelId: t,
        showProfile: n = !1,
        showTrailingDivider: y = !1
    } = e, _ = p.default.cast(t), {
        joinRequest: O,
        isModmin: j,
        guildId: v,
        maxMembers: x
    } = (0, l.cf)([h.A, u.A, d.A], () => {
        let e = h.A.getRequest(_),
            t = u.A.getGuild(null == e ? void 0 : e.guildId);
        return {
            joinRequest: e,
            isModmin: null != t && d.A.can(m.xBc.KICK_MEMBERS, t),
            guildId: null == t ? void 0 : t.id,
            maxMembers: null == t ? void 0 : t.maxMembers
        }
    }), E = (0, l.bG)([c.A], () => null != v ? c.A.getMemberCount(v) : 0), C = null != x && (null != E ? E : 0) >= x, {
        approveRequest: S,
        rejectRequest: I,
        submitting: N
    } = (0, g.W)(null == O ? void 0 : O.guildId, null == O ? void 0 : O.userId, null == O ? void 0 : O.joinRequestId);
    return null != O && O.applicationStatus === f.B5.SUBMITTED && j ? (0, r.jsxs)("div", {
        className: A.U,
        children: [(0, r.jsx)(i.m, {
            text: b.intl.string(b.t.cdPGbE),
            shouldShow: C,
            children: (0, r.jsx)(s.Button, {
                variant: "active",
                size: "sm",
                text: b.intl.string(b.t.BzjDQJ),
                loading: N,
                onClick: S,
                disabled: C
            })
        }), (0, r.jsx)(s.Button, {
            variant: "critical-primary",
            size: "sm",
            text: b.intl.string(b.t.hDtbsz),
            onClick: I,
            disabled: N || O.applicationStatus !== f.B5.SUBMITTED
        }), n && (0, r.jsx)(s.Button, {
            onClick: () => {
                (0, o.openUserProfileModal)({
                    userId: O.userId,
                    guildId: O.guildId
                })
            },
            variant: "secondary",
            size: "sm",
            text: b.intl.string(b.t.iXAna6)
        }), y && (0, r.jsx)(a.Ay.Divider, {})]
    }) : null
}