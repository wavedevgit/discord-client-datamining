/** Chunk was on 72450 **/
/** chunk id: 12351, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i, r, l = n(627968),
    s = n(64700),
    o = n(503698),
    a = n.n(o),
    c = n(397927),
    u = n(985018),
    d = n(228763);
let h = {
    BLOCK: d.om,
    INLINE: d.mG
};
class p extends(r = s.PureComponent) {
    render() {
        let {
            children: e,
            className: t,
            textClassName: n,
            type: i = h.BLOCK,
            style: r
        } = this.props;
        return (0, l.jsxs)("div", {
            className: a()(t, i),
            style: r,
            children: [(0, l.jsxs)(c.Text, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: d.AD,
                children: [u.intl.string(u.t["8tvIiN"]), ":"]
            }), (0, l.jsx)(c.Text, {
                className: a()(d.uN, n),
                variant: "text-sm/normal",
                children: e
            })]
        })
    }
}(i = "Types") in p ? Object.defineProperty(p, i, {
    value: h,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : p[i] = h;
let C = p