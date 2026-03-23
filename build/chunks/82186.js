/** chunk id: 82186 params = (module,exports,require) **/
"use strict";
r.d(t, {
    E: () => d
}), r(667532);
var n = r(627968);
r(64700);
var a = r(158954),
    i = r(963935),
    l = r(272053),
    s = r(215566),
    o = r(985018),
    c = r(621580);

function u(e) {
    let {
        node: t,
        isLast: r
    } = e, i = t.useTitle(), o = t.usePersistentBadge?.(), u = (0, n.jsxs)(a.BJc, {
        direction: "horizontal",
        align: "center",
        gap: "xs",
        className: c.Ze,
        children: [(0, n.jsx)(a.EYj, {
            variant: r ? "text-md/medium" : "text-md/normal",
            color: r ? "text-default" : void 0,
            className: c.b,
            children: i
        }), r && null != o && (0, n.jsx)(s.A, {
            badge: o
        }), !r && (0, n.jsx)(a.EYj, {
            variant: "text-md/normal",
            color: "interactive-text-default",
            children: "/"
        })]
    });
    return (0, n.jsx)("li", {
        "aria-current": r ? "page" : void 0,
        className: c.QF,
        children: r ? u : (0, n.jsx)(a.DUT, {
            onClick: () => {
                l.A.navigate(t.key)
            },
            className: c.vk,
            children: u
        })
    })
}

function d(e) {
    let {
        node: t
    } = e, r = function(e) {
        let t = [e];
        for (let r = e.parent; null != r && r.type !== i.Z6.SIDEBAR_ITEM; r = r.parent) r.type === i.Z6.PANEL && t.unshift(r);
        return t
    }(t);
    return (0, n.jsx)("nav", {
        "aria-label": o.intl.string(o.t["bM+M/m"]),
        className: c.m7,
        children: (0, n.jsx)(a.BJc, {
            direction: "horizontal",
            role: "list",
            className: c.jD,
            children: r.map((e, t) => (0, n.jsx)(u, {
                node: e,
                isLast: t === r.length - 1
            }, e.key))
        })
    })
}