/** chunk id: 901057 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var a = n(311907),
    l = n(990078),
    r = n(397927),
    s = n(367513),
    o = n(956793),
    c = n(47167),
    d = n(332173),
    u = n(976860),
    _ = n(95701),
    m = n(734057),
    A = n(71393),
    E = n(994500),
    I = n(287809),
    T = n(147036),
    f = n(449054),
    N = n(652215);

function g(e) {
    let {
        channel: t,
        onClick: n,
        beforeTransition: g,
        className: C,
        openChatWithoutConnecting: p
    } = e, h = (0, a.bG)([I.default, E.A], () => null == t ? "" : (0, c.m1)(t, I.default, E.A), [t]);
    return (0, i.jsx)(l.m, {
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: h,
        position: "top",
        children: (0, i.jsx)(d.A, {
            role: "link",
            className: C,
            onClick: e => {
                e.stopPropagation(), null != n ? n() : (null != g && g(), (0, r.s7G)(), function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == e || null == t) return;
                    let i = A.A.getGuild(e);
                    if (i?.joinedAt == null) return f.Z2(e, {}, {
                        channelId: t
                    });
                    let a = m.A.getChannel(t);
                    if (null != a && (0, _.ay)(a.type)) {
                        if (n) {
                            s.A.updateChatOpen(a.id, !0), (0, u.pX)(N.BVt.CHANNEL(e, t));
                            return
                        }
                        o.default.selectVoiceChannel(a.id);
                        return
                    }(0, u.pX)(N.BVt.CHANNEL(e, t))
                }(t?.guild_id, t?.id, p))
            },
            iconType: (0, T.QG)(t),
            children: h
        })
    })
}