/** chunk id: 223251, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(64700),
    r = n(136722),
    s = n(311907),
    l = n(58149),
    o = n(332456),
    a = n(237774),
    c = n(815706),
    d = n(734057),
    u = n(808728),
    p = n(696451),
    h = n(71393),
    f = n(576705),
    g = n(309010),
    y = n(967198),
    m = n(287809),
    _ = n(256415),
    b = n(9302),
    A = n(652215);

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}
class v extends i.Component {
    componentDidUpdate(e) {
        if (this.props.locked) return null;
        let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: r,
            postableChannelCount: s
        } = this.props;
        if (null != t && (t !== e.selectedGuild || i && !e.isMemberPending)) {
            var u, p;
            (0, c.z)(A.HAw.GUILD_VIEWED, (u = O({}, i ? {
                is_pending: i,
                preview_enabled: r
            } : {}), p = p = {
                postable_channels: s
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(p)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, i)
                }
                return n
            })(Object(p)).forEach(function(e) {
                Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(p, e))
            }), u)), (0, a.k)(A.HAw.GUILD_VIEWED_CLICKSTREAM, {
                guildId: t
            })
        }
        if (null != n && n !== e.selectedChannel) {
            let e = (0, o.C)(d.A.getChannel(n), !0);
            (0, c.z)(A.HAw.CHANNEL_OPENED, O({}, e, (0, l.qL)(n))), (0, a.k)(A.HAw.CHANNEL_OPENED_CLICKSTREAM, {
                channelId: n
            })
        }
    }
    render() {
        return null
    }
}
let E = s.Ay.connectStores([y.A, g.A, h.A, m.default, _.default, u.Ay, f.A, p.Ay], () => {
    var e, t, n;
    let i = y.A.getGuildId(),
        s = g.A.getChannelId(i),
        l = h.A.getGuild(i),
        o = m.default.getCurrentUser(),
        a = null != (e = u.Ay.getChannels(null == l ? void 0 : l.id)[u.I6]) ? e : [],
        c = a.length > 0 ? a.filter(e => {
            let {
                channel: t
            } = e;
            return f.A.can(r.kg(A.xBc.SEND_MESSAGES, A.xBc.VIEW_CHANNEL), t)
        }).length : 0,
        d = null != o && null != i && null != (t = null == (n = p.Ay.getMember(i, o.id)) ? void 0 : n.isPending) && t;
    return {
        selectedGuild: i,
        selectedChannel: s,
        locked: _.default.isLocked((0, b.getPID)()),
        hasPreviewEnabled: null == l ? void 0 : l.features.has(A.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: d,
        postableChannelCount: c
    }
})(v)