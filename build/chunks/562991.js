/** Chunk was on 41727 **/
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
    p = n(46054),
    h = n(954571),
    f = n(652215),
    g = n(985018),
    m = n(499711),
    b = n(206314);

function A(e) {
    let {
        channel: t,
        connected: n,
        hovered: i,
        subtitle: A,
        onClick: y,
        showEmptyChannelTopic: _
    } = e, O = (0, a.bG)([d.A], () => d.A.getChannelStatus(t)), j = null != O && O.length > 0, v = (0, u.Ay)(t, !0), x = null != A && A.length > 0;
    if (l.useEffect(() => {
            j && h.default.track(f.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id
            })
        }, [j, t.id, t.guild_id]), null == t.guild_id) return null;
    let E = s()(m.Ui, n && v ? m.BI : null);
    return j ? (0, r.jsx)(c.DUT, {
        className: E,
        onClick: v ? y : void 0,
        children: (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: s()(m.qS, b.PT),
            children: (0, r.jsx)(o.A, {
                children: p.A.parseVoiceChannelStatus(O, !0, {
                    channelId: t.id
                })
            })
        })
    }) : n && v && (!x || i) && _ ? (0, r.jsxs)(c.DUT, {
        className: E,
        onClick: y,
        children: [(0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: m.qS,
            children: g.intl.string(g.t.Mgpxiw)
        }), (0, r.jsx)(c.R2l, {
            color: "currentColor",
            className: m.rD,
            size: "xxs"
        })]
    }) : x ? (0, r.jsx)(o.A, {
        children: A
    }) : null
}