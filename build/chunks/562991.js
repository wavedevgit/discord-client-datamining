/** chunk id: 562991 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(3026),
    c = n(397927),
    d = n(532622),
    u = n(309698),
    h = n(581007),
    A = n(522435),
    m = n(46054),
    _ = n(954571),
    g = n(652215),
    p = n(985018),
    f = n(171616),
    x = n(782691);

function E(e) {
    let {
        channel: t,
        connected: n,
        hovered: l,
        subtitle: E,
        onClick: C,
        showEmptyChannelTopic: I
    } = e, N = (0, r.bG)([u.A], () => u.A.getChannelStatus(t)), {
        enableHangoutWindow: b
    } = (0, h.Dm)({
        guildId: t.guild_id,
        location: "VoiceChannelStatus"
    }), S = b && (0, A.TP)(N), T = null != N && N.length > 0 && !S, v = (0, d.Ay)(t, !0), y = null != E && E.length > 0;
    if (s.useEffect(() => {
            T && _.default.track(g.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id
            })
        }, [T, t.id, t.guild_id]), null == t.guild_id) return null;
    let j = a()(f.Ui, n && v ? f.BI : null);
    return T ? (0, i.jsx)(c.DUT, {
        className: j,
        onClick: v ? C : void 0,
        children: (0, i.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: a()(f.qS, x.PT),
            children: (0, i.jsx)(o.A, {
                children: m.A.parseVoiceChannelStatus(N, !0, {
                    channelId: t.id
                })
            })
        })
    }) : n && v && !S && (!y || l) && I ? (0, i.jsxs)(c.DUT, {
        className: j,
        onClick: C,
        children: [(0, i.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: f.qS,
            children: p.intl.string(p.t.Mgpxiw)
        }), (0, i.jsx)(c.R2l, {
            color: "currentColor",
            className: f.rD,
            size: "xxs"
        })]
    }) : y ? (0, i.jsx)(o.A, {
        children: E
    }) : null
}