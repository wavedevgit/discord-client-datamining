/** chunk id: 223251 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => I
});
var n = i(64700),
    s = i(136722),
    a = i(311907),
    l = i(58149),
    r = i(332456),
    o = i(237774),
    d = i(973854),
    c = i(815706),
    u = i(734057),
    h = i(808728),
    _ = i(696451),
    p = i(71393),
    f = i(576705),
    m = i(309010),
    g = i(967198),
    A = i(287809),
    x = i(256415),
    v = i(9302),
    y = i(652215);
class E extends n.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let {
            selectedGuild: t,
            selectedChannel: i,
            isMemberPending: n,
            hasPreviewEnabled: s,
            postableChannelCount: a
        } = this.props;
        if (null != t && (t !== e.selectedGuild || n && !e.isMemberPending) && ((0, c.z)(y.HAw.GUILD_VIEWED, {
                ...n ? {
                    is_pending: n,
                    preview_enabled: s
                } : {},
                postable_channels: a
            }), (0, o.k)(y.HAw.GUILD_VIEWED_CLICKSTREAM, {
                guild_id: t
            })), null != i && i !== e.selectedChannel) {
            let e = (0, r.C)(u.A.getChannel(i), !0);
            (0, c.z)(y.HAw.CHANNEL_OPENED, {
                ...e,
                ...(0, l.qL)(i)
            }), (0, d.A)({
                channelId: i
            })
        }
    }
    render() {
        return null
    }
}
let I = a.Ay.connectStores([g.A, m.A, p.A, A.default, x.default, h.Ay, f.A, _.Ay], () => {
    let e = g.A.getGuildId(),
        t = m.A.getChannelId(e),
        i = p.A.getGuild(e),
        n = A.default.getCurrentUser(),
        a = h.Ay.getChannels(i?.id)[h.I6] ?? [],
        l = a.length > 0 ? a.filter(e => {
            let {
                channel: t
            } = e;
            return f.A.can(s.kg(y.xBc.SEND_MESSAGES, y.xBc.VIEW_CHANNEL), t)
        }).length : 0,
        r = null != n && null != e && (_.Ay.getMember(e, n.id)?.isPending ?? !1);
    return {
        selectedGuild: e,
        selectedChannel: t,
        locked: x.default.isLocked((0, v.getPID)()),
        hasPreviewEnabled: i?.features.has(y.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: r,
        postableChannelCount: l
    }
})(E)