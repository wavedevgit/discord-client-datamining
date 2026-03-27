/** chunk id: 310721 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(627968);
n(64700);
var i = n(158954),
    l = n(985018),
    r = n(282063);

function s(e) {
    let {
        detectedGame: t
    } = e;
    return 0 === t.publishers.length ? null : (0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.DZT, {
            className: r.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: l.intl.string(l.t["4Byy/G"])
        }), (0, a.jsx)(i.EYj, {
            variant: "text-sm/normal",
            children: t.publishers.join(", ")
        })]
    })
}