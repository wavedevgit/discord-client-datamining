/** chunk id: 160162 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => _
});
var n = i(627968),
    s = i(64700),
    a = i(873263),
    l = i(686956),
    r = i(956793),
    o = i(549711),
    d = i(463347),
    c = i(976860),
    u = i(652215);
class h extends s.Component {
    componentDidUpdate(e) {
        let {
            location: t
        } = this.props;
        t.pathname + t.search !== e.location.pathname + e.location.search && this.checkGuildAndChannel()
    }
    checkGuildAndChannel() {
        let {
            match: e
        } = this.props;
        if (null == e) return;
        let {
            guildId: t,
            channelId: i,
            messageId: n
        } = function(e) {
            let {
                guildId: t,
                channelId: i,
                messageId: n
            } = e.params;
            return {
                guildId: null != t && "" !== t ? t : u.ME,
                channelId: i,
                messageId: n
            }
        }(e);
        (0, d.nn)(t) && (0, d.ts)(i) ? (l.A.selectGuild(t), r.default.selectChannel({
            guildId: t,
            channelId: i,
            messageId: n
        })) : (0, c.bG)(u.BVt.ME)
    }
    render() {
        return null
    }
}
let _ = () => (0, n.jsxs)(a.dO, {
    children: [(0, n.jsx)(o.A, {
        path: u.BVt.CHANNEL(d.pv.guildId(), d.pv.channelId({
            optional: !0
        }), ":messageId?"),
        component: h
    }), (0, n.jsx)(o.A, {
        component: h
    })]
})