/** Chunk was on 5606 **/
/** chunk id: 581781, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(990078),
    o = n(145497),
    c = n(534400),
    d = n(743981),
    u = n(996373);

function p(e) {
    let {
        className: t,
        guildTag: n,
        guildBadge: l,
        guildId: p,
        guildName: _,
        guildIcon: m,
        guildIconSize: g
    } = e, f = i.useRef(null), [b, h] = i.useState(!1);
    return i.useEffect(() => {
        let e = f.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && h(e.offsetWidth < e.scrollWidth)
    }, []), (0, r.jsxs)("div", {
        className: s()(u.kL, t),
        children: [(0, r.jsxs)("div", {
            className: u.v2,
            children: [(0, r.jsx)(o.j, {
                guildId: p,
                guildName: _,
                guildIcon: m,
                iconSize: g,
                className: u.rr,
                animate: !1
            }), (0, r.jsx)("div", {
                className: u.zH,
                children: (0, r.jsx)(a.m, {
                    __unsupportedReactNodeAsText: _,
                    shouldShow: b,
                    children: (0, r.jsx)("span", {
                        ref: f,
                        className: u.J5,
                        children: _
                    })
                })
            })]
        }), (0, r.jsx)("div", {
            className: u.I8,
            children: (0, r.jsx)(c.o9, {
                guildId: p,
                className: u.Tc,
                guildTag: n,
                guildBadge: l,
                badgeSize: d.Sl.SIZE_16,
                textColor: "interactive-text-default",
                textVariant: "text-sm/semibold",
                badgeClassName: u.qS
            })
        })]
    })
}