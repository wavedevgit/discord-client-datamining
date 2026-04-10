/** chunk id: 901057 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(990078),
    r = n(397927),
    s = n(367513),
    o = n(956793),
    c = n(47167),
    u = n(332173),
    d = n(976860),
    _ = n(95701),
    A = n(734057),
    m = n(71393),
    E = n(994500),
    T = n(287809),
    I = n(147036),
    g = n(449054),
    N = n(652215);

function f(e) {
    let {
        channel: t,
        onClick: n,
        beforeTransition: f,
        className: C,
        openChatWithoutConnecting: h
    } = e, p = (0, l.bG)([T.default, E.A], () => null == t ? "" : (0, c.m1)(t, T.default, E.A), [t]);
    return (0, i.jsx)(a.m, {
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: p,
        position: "top",
        children: (0, i.jsx)(u.A, {
            role: "link",
            className: C,
            onClick: e => {
                e.stopPropagation(), null != n ? n() : (null != f && f(), (0, r.s7G)(), function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == e || null == t) return;
                    let i = m.A.getGuild(e);
                    if (i?.joinedAt == null) return g.Z2(e, {}, {
                        channelId: t
                    });
                    let l = A.A.getChannel(t);
                    if (null != l && (0, _.ay)(l.type)) {
                        if (n) {
                            s.A.updateChatOpen(l.id, !0), (0, d.pX)(N.BVt.CHANNEL(e, t));
                            return
                        }
                        o.default.selectVoiceChannel(l.id);
                        return
                    }(0, d.pX)(N.BVt.CHANNEL(e, t))
                }(t?.guild_id, t?.id, h))
            },
            iconType: (0, I.QG)(t),
            children: p
        })
    })
}