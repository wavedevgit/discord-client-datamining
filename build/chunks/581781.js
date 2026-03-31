/** chunk id: 581781 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(990078),
    o = n(145497),
    d = n(534400),
    c = n(743981),
    u = n(320875);

function m(e) {
    let {
        className: t,
        guildTag: n,
        guildBadge: l,
        guildId: m,
        guildName: g,
        guildIcon: _,
        guildIconSize: x
    } = e, A = s.useRef(null), [h, p] = s.useState(!1);
    return s.useEffect(() => {
        let e = A.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && p(e.offsetWidth < e.scrollWidth)
    }, []), (0, i.jsxs)("div", {
        className: a()(u.kL, t),
        children: [(0, i.jsxs)("div", {
            className: u.v2,
            children: [(0, i.jsx)(o.j, {
                guildId: m,
                guildName: g,
                guildIcon: _,
                iconSize: x,
                className: u.rr,
                animate: !1
            }), (0, i.jsx)("div", {
                className: u.zH,
                children: (0, i.jsx)(r.m, {
                    __unsupportedReactNodeAsText: g,
                    shouldShow: h,
                    children: (0, i.jsx)("span", {
                        ref: A,
                        className: u.J5,
                        children: g
                    })
                })
            })]
        }), (0, i.jsx)("div", {
            className: u.I8,
            children: (0, i.jsx)(d.o9, {
                guildId: m,
                className: u.Tc,
                guildTag: n,
                guildBadge: l,
                badgeSize: c.Sl.SIZE_16,
                textColor: "interactive-text-default",
                textVariant: "text-sm/semibold",
                badgeClassName: u.qS
            })
        })]
    })
}