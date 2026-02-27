/** chunk id: 562991, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
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
    h = n(46054),
    A = n(954571),
    p = n(652215),
    m = n(985018),
    g = n(499711),
    _ = n(206314);

function f(e) {
    let {
        channel: t,
        connected: n,
        hovered: l,
        subtitle: f,
        onClick: x,
        showEmptyChannelTopic: C
    } = e, E = (0, r.bG)([u.A], () => u.A.getChannelStatus(t)), I = null != E && E.length > 0, N = (0, d.Ay)(t, !0), b = null != f && f.length > 0;
    if (s.useEffect(() => {
            I && A.default.track(p.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id
            })
        }, [I, t.id, t.guild_id]), null == t.guild_id) return null;
    let S = a()(g.Ui, n && N ? g.BI : null);
    return I ? (0, i.jsx)(c.DUT, {
        className: S,
        onClick: N ? x : void 0,
        children: (0, i.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: a()(g.qS, _.PT),
            children: (0, i.jsx)(o.A, {
                children: h.A.parseVoiceChannelStatus(E, !0, {
                    channelId: t.id
                })
            })
        })
    }) : n && N && (!b || l) && C ? (0, i.jsxs)(c.DUT, {
        className: S,
        onClick: x,
        children: [(0, i.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: g.qS,
            children: m.intl.string(m.t.Mgpxiw)
        }), (0, i.jsx)(c.R2l, {
            color: "currentColor",
            className: g.rD,
            size: "xxs"
        })]
    }) : b ? (0, i.jsx)(o.A, {
        children: f
    }) : null
}