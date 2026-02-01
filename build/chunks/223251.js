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
    h = n(696451),
    p = n(71393),
    f = n(576705),
    g = n(309010),
    y = n(967198),
    A = n(287809),
    m = n(256415),
    b = n(9302),
    O = n(652215);

function _(e) {
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
            var u, h;
            (0, c.z)(O.HAw.GUILD_VIEWED, (u = _({}, i ? {
                is_pending: i,
                preview_enabled: r
            } : {}), h = h = {
                postable_channels: s
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, i)
                }
                return n
            })(Object(h)).forEach(function(e) {
                Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(h, e))
            }), u)), (0, a.k)(O.HAw.GUILD_VIEWED_CLICKSTREAM, {
                guildId: t
            })
        }
        if (null != n && n !== e.selectedChannel) {
            let e = (0, o.C)(d.A.getChannel(n), !0);
            (0, c.z)(O.HAw.CHANNEL_OPENED, _({}, e, (0, l.qL)(n))), (0, a.k)(O.HAw.CHANNEL_OPENED_CLICKSTREAM, {
                channelId: n
            })
        }
    }
    render() {
        return null
    }
}
let E = s.Ay.connectStores([y.A, g.A, p.A, A.default, m.default, u.Ay, f.A, h.Ay], () => {
    var e, t, n;
    let i = y.A.getGuildId(),
        s = g.A.getChannelId(i),
        l = p.A.getGuild(i),
        o = A.default.getCurrentUser(),
        a = null != (e = u.Ay.getChannels(null == l ? void 0 : l.id)[u.I6]) ? e : [],
        c = a.length > 0 ? a.filter(e => {
            let {
                channel: t
            } = e;
            return f.A.can(r.kg(O.xBc.SEND_MESSAGES, O.xBc.VIEW_CHANNEL), t)
        }).length : 0,
        d = null != o && null != i && null != (t = null == (n = h.Ay.getMember(i, o.id)) ? void 0 : n.isPending) && t;
    return {
        selectedGuild: i,
        selectedChannel: s,
        locked: m.default.isLocked((0, b.getPID)()),
        hasPreviewEnabled: null == l ? void 0 : l.features.has(O.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: d,
        postableChannelCount: c
    }
})(v)