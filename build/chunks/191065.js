/** chunk id: 191065 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968),
    s = n(64700),
    i = n(827734),
    a = n(397927),
    r = n(347367);
let u = s.forwardRef(function(e, t) {
    let {
        isInventory: n,
        style: s,
        children: u
    } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: r.Q,
        style: {
            marginTop: 8 * !!n,
            ...s
        },
        children: [(0, l.jsx)(a.mir, {
            size: "custom",
            className: r.G,
            height: n ? 16 : 12,
            width: n ? 16 : 12,
            color: n ? i.A.colors.TEXT_MUTED.css : i.A.colors.WHITE.css
        }), (0, l.jsx)(a.Text, {
            color: n ? "text-muted" : "always-white",
            variant: n ? "text-xs/normal" : "text-xxs/normal",
            children: u
        })]
    })
})