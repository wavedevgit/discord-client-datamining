/** chunk id: 901057 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(990078),
    r = n(397927),
    s = n(367513),
    o = n(956793),
    c = n(47167),
    d = n(332173),
    u = n(976860),
    _ = n(95701),
    A = n(734057),
    m = n(71393),
    E = n(994500),
    I = n(287809),
    T = n(147036),
    f = n(449054),
    N = n(652215);

function C(e) {
    let {
        channel: t,
        onClick: n,
        beforeTransition: C,
        className: g,
        openChatWithoutConnecting: h
    } = e, p = (0, l.bG)([I.default, E.A], () => null == t ? "" : (0, c.m1)(t, I.default, E.A), [t]);
    return (0, i.jsx)(a.m, {
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: p,
        position: "top",
        children: (0, i.jsx)(d.A, {
            role: "link",
            className: g,
            onClick: e => {
                e.stopPropagation(), null != n ? n() : (null != C && C(), (0, r.s7G)(), function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == e || null == t) return;
                    let i = m.A.getGuild(e);
                    if (i?.joinedAt == null) return f.Z2(e, {}, {
                        channelId: t
                    });
                    let l = A.A.getChannel(t);
                    if (null != l && (0, _.ay)(l.type)) {
                        if (n) {
                            s.A.updateChatOpen(l.id, !0), (0, u.pX)(N.BVt.CHANNEL(e, t));
                            return
                        }
                        o.default.selectVoiceChannel(l.id);
                        return
                    }(0, u.pX)(N.BVt.CHANNEL(e, t))
                }(t?.guild_id, t?.id, h))
            },
            iconType: (0, T.QG)(t),
            children: p
        })
    })
}