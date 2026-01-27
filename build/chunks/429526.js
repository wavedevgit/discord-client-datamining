/** Chunk was on 39048 **/
/** chunk id: 429526, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
});
var r = n(627968),
    i = n(64700),
    l = n(735438),
    s = n(417597),
    a = n(397927),
    o = n(374084),
    c = n(808728),
    d = n(71393),
    u = n(488926),
    g = n(199940),
    m = n(132514),
    p = n(139497),
    f = n(652215),
    h = n(985018),
    b = n(659233);
let x = [],
    j = function(e) {
        let {
            guildId: t
        } = e, n = (0, s.bG)([d.A], () => d.A.getGuild(t)), j = (0, s.yK)([m.A], () => {
            var e, t;
            return null != (e = null == (t = m.A.getSettings().resourceChannels) ? void 0 : t.map(e => e.channelId)) ? e : x
        }), _ = (0, s.yK)([m.A], () => m.A.getDismissedSuggestedChannelIds(t)), O = (0, s.bG)([c.Ay], () => c.Ay.getSelectableChannels(t)), v = i.useMemo(() => (0, l.chain)(O).filter(e => e.channel.type === f.rbe.GUILD_TEXT && e.channel.id !== (null == n ? void 0 : n.rulesChannelId) && !_.includes(e.channel.id) && !j.includes(e.channel.id) && u.MJ(f.xBc.VIEW_CHANNEL, e.channel) && !u.MJ(f.xBc.SEND_MESSAGES, e.channel)).take(5).value(), [O, _, null == n ? void 0 : n.rulesChannelId, j]), y = i.useCallback(() => {
            let e = v.map(e => e.channel.id);
            (0, g.kO)(t, e)
        }, [t, v]);
        return v.length <= 0 || j.length >= o.CW ? null : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: b.rS,
                children: [(0, r.jsx)(a.Text, {
                    variant: "text-md/semibold",
                    children: h.intl.string(h.t.WThgAR)
                }), (0, r.jsxs)("div", {
                    className: b.vn,
                    children: [(0, r.jsx)(a.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: h.intl.string(h.t.YtNI8C)
                    }), (0, r.jsxs)(a.DUT, {
                        className: b.iC,
                        onClick: y,
                        children: [(0, r.jsx)(a.A9s, {
                            size: "md",
                            color: "currentColor",
                            className: b.An
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-xs/semibold",
                            color: "text-brand",
                            children: h.intl.string(h.t.aLqZTl)
                        })]
                    })]
                }), (0, r.jsx)("div", {
                    className: b.cF,
                    children: v.map((e, t) => (0, r.jsx)(p.A, {
                        channel: e.channel,
                        end: t < v.length - 1
                    }, e.channel.id))
                })]
            }), (0, r.jsx)("div", {
                className: b.DY
            })]
        })
    }