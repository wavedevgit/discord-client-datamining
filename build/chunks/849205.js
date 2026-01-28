/** Chunk was on 78528 **/
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
    p = n(427262),
    h = n(742589),
    f = n(985018),
    g = n(638990);

function m(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        m = (0, l.bG)([d.default], () => d.default.getUser(t)),
        b = (0, l.bG)([c.A], () => c.A.getStatus(t)),
        A = (0, l.bG)([c.A], () => c.A.isMobileOnline(t)),
        y = (0, l.bG)([u.A], () => u.A.getNickname(t)),
        _ = p.Ay.useUserTag(m),
        O = (0, a.a)({
            displayNameStyles: null == m ? void 0 : m.displayNameStyles
        }),
        j = (0, o.bG)({
            channelId: e.channel.id
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.AC4, {
            children: f.intl.string(f.t.EJRzg7)
        }), null != m && !n && (0, r.jsx)("div", {
            children: (0, r.jsx)(s.euF, {
                status: b,
                isMobile: A,
                className: g.my,
                size: s._3J.SIZE_20,
                "aria-label": p.Ay.getName(m),
                src: m.getAvatarURL(void 0, 20)
            })
        }), (0, r.jsx)(h.A.Title, {
            level: e.level,
            onClick: e.handleClick,
            onContextMenu: e.handleContextMenu,
            className: null != e.handleClick ? g.or : null,
            children: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(i.m, {
                    text: _,
                    position: "bottom",
                    children: (0, r.jsx)("span", {
                        className: O,
                        children: null != y ? y : p.Ay.getName(m)
                    })
                }), j && (0, r.jsx)(i.m, {
                    text: f.intl.string(f.t.QyZ4Td),
                    children: (0, r.jsx)(s.m5V, {
                        size: "xs",
                        "aria-label": f.intl.string(f.t.VHXh8a),
                        color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                        className: g.vW
                    })
                })]
            })
        })]
    })
}