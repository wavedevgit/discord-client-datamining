/** Chunk was on 1113 **/
/** chunk id: 562991, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(3026),
    c = n(397927),
    u = n(532622),
    d = n(309698),
    h = n(46054),
    p = n(954571),
    g = n(652215),
    f = n(985018),
    m = n(499711),
    b = n(206314);

function A(e) {
    let {
        channel: t,
        connected: n,
        hovered: i,
        subtitle: A,
        onClick: y,
        showEmptyChannelTopic: O
    } = e, _ = (0, a.bG)([d.A], () => d.A.getChannelStatus(t)), x = null != _ && _.length > 0, j = (0, u.Ay)(t, !0), v = null != A && A.length > 0;
    if (l.useEffect(() => {
            x && p.default.track(g.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id
            })
        }, [x, t.id, t.guild_id]), null == t.guild_id) return null;
    let E = s()(m.Ui, n && j ? m.BI : null);
    return x ? (0, r.jsx)(c.DUT, {
        className: E,
        onClick: j ? y : void 0,
        children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: s()(m.qS, b.PT),
            children: (0, r.jsx)(o.A, {
                children: h.A.parseVoiceChannelStatus(_, !0, {
                    channelId: t.id
                })
            })
        })
    }) : n && j && (!v || i) && O ? (0, r.jsxs)(c.DUT, {
        className: E,
        onClick: y,
        children: [(0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: m.qS,
            children: f.intl.string(f.t.Mgpxiw)
        }), (0, r.jsx)(c.R2l, {
            color: "currentColor",
            className: m.rD,
            size: "xxs"
        })]
    }) : v ? (0, r.jsx)(o.A, {
        children: A
    }) : null
}