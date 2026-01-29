/** Chunk was on 1113 **/
/** chunk id: 849205, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(990078),
    s = n(397927),
    a = n(73392),
    o = n(665691),
    c = n(290863),
    u = n(994500),
    d = n(287809),
    h = n(427262),
    p = n(742589),
    g = n(985018),
    f = n(638990);

function m(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        m = (0, l.bG)([d.default], () => d.default.getUser(t)),
        b = (0, l.bG)([c.A], () => c.A.getStatus(t)),
        A = (0, l.bG)([c.A], () => c.A.isMobileOnline(t)),
        y = (0, l.bG)([u.A], () => u.A.getNickname(t)),
        O = h.Ay.useUserTag(m),
        _ = (0, a.a)({
            displayNameStyles: null == m ? void 0 : m.displayNameStyles
        }),
        x = (0, o.bG)({
            channelId: e.channel.id
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.AC4, {
            children: g.intl.string(g.t.EJRzg7)
        }), null != m && !n && (0, r.jsx)("div", {
            children: (0, r.jsx)(s.euF, {
                status: b,
                isMobile: A,
                className: f.my,
                size: s._3J.SIZE_20,
                "aria-label": h.Ay.getName(m),
                src: m.getAvatarURL(void 0, 20)
            })
        }), (0, r.jsx)(p.A.Title, {
            level: e.level,
            onClick: e.handleClick,
            onContextMenu: e.handleContextMenu,
            className: null != e.handleClick ? f.or : null,
            children: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(i.m, {
                    text: O,
                    position: "bottom",
                    children: (0, r.jsx)("span", {
                        className: _,
                        children: null != y ? y : h.Ay.getName(m)
                    })
                }), x && (0, r.jsx)(i.m, {
                    text: g.intl.string(g.t.QyZ4Td),
                    children: (0, r.jsx)(s.m5V, {
                        size: "xs",
                        "aria-label": g.intl.string(g.t.VHXh8a),
                        color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                        className: f.vW
                    })
                })]
            })
        })]
    })
}