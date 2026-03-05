/** chunk id: 191065 params = (module,exports,require) **/
s.d(t, {
    A: () => o
});
var l = s(627968),
    n = s(64700),
    a = s(827734),
    i = s(397927),
    r = s(838839);
let o = n.forwardRef(function(e, t) {
    let {
        isInventory: s,
        style: n,
        children: o
    } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: r.Q,
        style: {
            marginTop: 8 * !!s,
            ...n
        },
        children: [(0, l.jsx)(i.mir, {
            size: "custom",
            className: r.G,
            height: s ? 16 : 12,
            width: s ? 16 : 12,
            color: s ? a.A.colors.TEXT_MUTED.css : a.A.colors.WHITE.css
        }), (0, l.jsx)(i.Text, {
            color: s ? "text-muted" : "always-white",
            variant: s ? "text-xs/normal" : "text-xxs/normal",
            children: o
        })]
    })
})