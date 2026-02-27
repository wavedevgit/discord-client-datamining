/** chunk id: 191065, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => u
});
var s = l(627968),
    n = l(64700),
    a = l(827734),
    i = l(397927),
    r = l(170985);
let u = n.forwardRef(function(e, t) {
    let {
        isInventory: l,
        style: n,
        children: u
    } = e;
    return (0, s.jsxs)("div", {
        ref: t,
        className: r.Q,
        style: {
            marginTop: 8 * !!l,
            ...n
        },
        children: [(0, s.jsx)(i.mir, {
            size: "custom",
            className: r.G,
            height: l ? 16 : 12,
            width: l ? 16 : 12,
            color: l ? a.A.colors.TEXT_MUTED.css : a.A.colors.WHITE.css
        }), (0, s.jsx)(i.Text, {
            color: l ? "text-muted" : "always-white",
            variant: l ? "text-xs/normal" : "text-xxs/normal",
            children: u
        })]
    })
})