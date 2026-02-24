/** chunk id: 581781, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(990078),
    o = n(145497),
    c = n(534400),
    d = n(743981),
    u = n(404424);

function _(e) {
    let {
        className: t,
        guildTag: n,
        guildBadge: a,
        guildId: _,
        guildName: m,
        guildIcon: A,
        guildIconSize: g
    } = e, h = s.useRef(null), [x, p] = s.useState(!1);
    return s.useEffect(() => {
        let e = h.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && p(e.offsetWidth < e.scrollWidth)
    }, []), (0, i.jsxs)("div", {
        className: l()(u.kL, t),
        children: [(0, i.jsxs)("div", {
            className: u.v2,
            children: [(0, i.jsx)(o.j, {
                guildId: _,
                guildName: m,
                guildIcon: A,
                iconSize: g,
                className: u.rr,
                animate: !1
            }), (0, i.jsx)("div", {
                className: u.zH,
                children: (0, i.jsx)(r.m, {
                    __unsupportedReactNodeAsText: m,
                    shouldShow: x,
                    children: (0, i.jsx)("span", {
                        ref: h,
                        className: u.J5,
                        children: m
                    })
                })
            })]
        }), (0, i.jsx)("div", {
            className: u.I8,
            children: (0, i.jsx)(c.o9, {
                guildId: _,
                className: u.Tc,
                guildTag: n,
                guildBadge: a,
                badgeSize: d.Sl.SIZE_16,
                textColor: "interactive-text-default",
                textVariant: "text-sm/semibold",
                badgeClassName: u.qS
            })
        })]
    })
}