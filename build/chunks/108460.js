/** chunk id: 108460, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(835245),
    o = n(397927),
    c = n(315502),
    u = n(545290);

function d(e) {
    let {
        width: t = 24,
        height: n = 24,
        isBadged: i = !1,
        isTyping: s = !1
    } = e, [c] = l.useState(() => (0, a.A)());
    return (0, r.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [(0, r.jsx)("defs", {
            children: (0, r.jsxs)("mask", {
                id: c,
                children: [(0, r.jsx)("rect", {
                    fill: "white",
                    width: "100%",
                    height: "100%"
                }), s && (0, r.jsx)("g", {
                    fill: "black",
                    transform: "translate(5.5, ".concat(10.5, ") scale(").concat(11 / 24, ")"),
                    children: (0, r.jsx)(o.UBN, {
                        dotRadius: 3.5,
                        spacing: 3,
                        fill: "black"
                    })
                }), i && (0, r.jsx)("circle", {
                    cx: "20",
                    cy: "19",
                    r: "10",
                    fill: "red"
                })]
            })
        }), (0, r.jsx)("g", {
            mask: "url(#".concat(c, ")"),
            children: (0, r.jsx)(o.oyn, {
                size: "custom",
                width: t,
                height: n,
                color: "currentColor"
            })
        })]
    })
}

function p(e) {
    var t;
    let {
        className: n,
        unreadCount: l,
        mentionCount: i,
        isTyping: a,
        canBadge: o
    } = e, p = null != i && i > 0, h = null != (t = p ? i : l) ? t : 0, g = o && null != l && l > 0;
    return (0, r.jsxs)("div", {
        className: s()(u.Or, n),
        children: [(0, r.jsx)(d, {
            isBadged: g,
            isTyping: a
        }), g && (0, r.jsx)(c.A, {
            hasMentions: p,
            truncatedCount: h > 99 ? "99+" : h,
            className: u.qS
        })]
    })
}