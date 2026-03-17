/** chunk id: 191065 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var s = n(627968),
    l = n(64700),
    a = n(827734),
    i = n(397927),
    r = n(170985);
let o = l.forwardRef(function(e, t) {
    let {
        isInventory: n,
        style: l,
        children: o
    } = e;
    return (0, s.jsxs)("div", {
        ref: t,
        className: r.Q,
        style: {
            marginTop: 8 * !!n,
            ...l
        },
        children: [(0, s.jsx)(i.mir, {
            size: "custom",
            className: r.G,
            height: n ? 16 : 12,
            width: n ? 16 : 12,
            color: n ? a.A.colors.TEXT_MUTED.css : a.A.colors.WHITE.css
        }), (0, s.jsx)(i.Text, {
            color: n ? "text-muted" : "always-white",
            variant: n ? "text-xs/normal" : "text-xxs/normal",
            children: o
        })]
    })
})