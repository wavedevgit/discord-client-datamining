/** chunk id: 901057, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(990078),
    a = n(397927),
    s = n(367513),
    o = n(956793),
    c = n(47167),
    u = n(332173),
    d = n(976860),
    p = n(95701),
    m = n(734057),
    f = n(71393),
    g = n(994500),
    _ = n(287809),
    h = n(147036),
    b = n(449054),
    y = n(652215);

function A(e) {
    let {
        channel: t,
        onClick: n,
        beforeTransition: A,
        className: v,
        openChatWithoutConnecting: O
    } = e, x = (0, i.bG)([_.default, g.A], () => null == t ? "" : (0, c.m1)(t, _.default, g.A), [t]);
    return (0, r.jsx)(l.m, {
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: x,
        position: "top",
        children: (0, r.jsx)(u.A, {
            role: "link",
            className: v,
            onClick: e => {
                e.stopPropagation(), null != n ? n() : (null != A && A(), (0, a.s7G)(), function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == e || null == t) return;
                    let r = f.A.getGuild(e);
                    if ((null == r ? void 0 : r.joinedAt) == null) return b.Z2(e, {}, {
                        channelId: t
                    });
                    let i = m.A.getChannel(t);
                    if (null != i && (0, p.ay)(i.type)) {
                        if (n) {
                            s.A.updateChatOpen(i.id, !0), (0, d.pX)(y.BVt.CHANNEL(e, t));
                            return
                        }
                        o.default.selectVoiceChannel(i.id);
                        return
                    }(0, d.pX)(y.BVt.CHANNEL(e, t))
                }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, O))
            },
            iconType: (0, h.QG)(t),
            children: x
        })
    })
}