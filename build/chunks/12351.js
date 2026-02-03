/** chunk id: 12351, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var s, r, a = n(627968),
    i = n(64700),
    l = n(503698),
    c = n.n(l),
    o = n(397927),
    u = n(985018),
    p = n(228763);
let d = {
    BLOCK: p.om,
    INLINE: p.mG
};
class g extends(r = i.PureComponent) {
    render() {
        let {
            children: e,
            className: t,
            textClassName: n,
            type: s = d.BLOCK,
            style: r
        } = this.props;
        return (0, a.jsxs)("div", {
            className: c()(t, s),
            style: r,
            children: [(0, a.jsxs)(o.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: p.AD,
                children: [u.intl.string(u.t["8tvIiN"]), ":"]
            }), (0, a.jsx)(o.Text, {
                className: c()(p.uN, n),
                variant: "text-sm/normal",
                children: e
            })]
        })
    }
}(s = "Types") in g ? Object.defineProperty(g, s, {
    value: d,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : g[s] = d;
let f = g