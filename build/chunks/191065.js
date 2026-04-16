/** chunk id: 191065 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(627968),
    s = n(64700),
    i = n(827734),
    r = n(397927),
    a = n(870788);
let o = s.forwardRef(function(e, t) {
    let {
        isInventory: n,
        style: s,
        children: o
    } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: a.Q,
        style: {
            marginTop: 8 * !!n,
            ...s
        },
        children: [(0, l.jsx)(r.mir, {
            size: "custom",
            className: a.G,
            height: n ? 16 : 12,
            width: n ? 16 : 12,
            color: n ? i.A.colors.TEXT_MUTED.css : i.A.colors.WHITE.css
        }), (0, l.jsx)(r.Text, {
            color: n ? "text-muted" : "always-white",
            variant: n ? "text-xs/normal" : "text-xxs/normal",
            children: o
        })]
    })
})