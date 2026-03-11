/** chunk id: 522958 params = (module,exports,require) **/
n.d(t, {
    n: () => o
});
var a = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(147925),
    r = n(159452);

function o(e) {
    let {
        title: t,
        initExpanded: n,
        highlightMode: o = "none",
        children: d
    } = e, [c, u] = i.useState(n), m = i.useCallback(() => {
        u(!c)
    }, [c]), h = "migrated" === o || "migrated-root" === o ? void 0 : "status-warning", p = e => (0, a.jsx)(s.Text, {
        variant: e,
        color: h,
        children: t
    });
    return null == d ? (0, a.jsx)("div", {
        className: r.NF,
        children: p("text-md/normal")
    }) : (0, a.jsxs)("div", {
        className: r.NF,
        children: [(0, a.jsxs)(s.DUT, {
            className: r.jr,
            onClick: m,
            children: [p("text-md/bold"), (0, a.jsx)(l.A, {
                direction: c ? l.A.Directions.DOWN : l.A.Directions.RIGHT,
                className: r.D
            })]
        }), c && (0, a.jsx)("div", {
            className: r.m4,
            children: d
        })]
    })
}