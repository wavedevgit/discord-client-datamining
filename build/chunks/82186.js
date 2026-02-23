/** chunk id: 82186, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => u
}), n(667532);
var a = n(627968);
n(64700);
var r = n(158954),
    i = n(963935),
    s = n(894858),
    l = n(985018),
    o = n(621580);

function c(e) {
    let {
        node: t,
        isLast: n
    } = e, i = t.useTitle(), l = t.useBadge?.(), c = (0, a.jsxs)(r.BJc, {
        direction: "horizontal",
        align: "center",
        gap: "xs",
        className: o.Ze,
        children: [(0, a.jsx)(r.EYj, {
            variant: n ? "text-md/medium" : "text-md/normal",
            color: n ? "text-default" : void 0,
            className: o.b,
            children: i
        }), n && null != l && l, !n && (0, a.jsx)(r.EYj, {
            variant: "text-md/normal",
            color: "interactive-text-default",
            children: "/"
        })]
    });
    return (0, a.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: o.QF,
        children: n ? c : (0, a.jsx)(r.DUT, {
            onClick: () => {
                s.A.setState({
                    requestedTargetKey: t.key
                })
            },
            className: o.vk,
            children: c
        })
    })
}

function u(e) {
    let {
        node: t
    } = e, n = function(e) {
        let t = [e];
        for (let n = e.parent; null != n && n.type !== i.Z6.SIDEBAR_ITEM; n = n.parent) n.type === i.Z6.PANEL && t.unshift(n);
        return t
    }(t);
    return (0, a.jsx)("nav", {
        "aria-label": l.intl.string(l.t["bM+M/m"]),
        className: o.m7,
        children: (0, a.jsx)(r.BJc, {
            direction: "horizontal",
            role: "list",
            className: o.jD,
            children: n.map((e, t) => (0, a.jsx)(c, {
                node: e,
                isLast: t === n.length - 1
            }, e.key))
        })
    })
}