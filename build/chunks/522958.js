/** chunk id: 522958 params = (module,exports,require) **/
n.d(t, {
    n: () => o
});
var a = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(147925),
    r = n(307374);

function o(e) {
    let {
        title: t,
        initExpanded: n,
        highlightMode: o = "none",
        children: d
    } = e, [c, u] = i.useState(n), m = i.useCallback(() => {
        u(!c)
    }, [c]), h = "migrated" === o || "migrated-root" === o ? void 0 : "status-warning", x = e => (0, a.jsx)(l.Text, {
        variant: e,
        color: h,
        children: t
    });
    return null == d ? (0, a.jsx)("div", {
        className: r.NF,
        children: x("text-md/normal")
    }) : (0, a.jsxs)("div", {
        className: r.NF,
        children: [(0, a.jsxs)(l.DUT, {
            className: r.jr,
            onClick: m,
            children: [x("text-md/bold"), (0, a.jsx)(s.A, {
                direction: c ? s.A.Directions.DOWN : s.A.Directions.RIGHT,
                className: r.D
            })]
        }), c && (0, a.jsx)("div", {
            className: r.m4,
            children: d
        })]
    })
}