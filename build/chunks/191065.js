/** Chunk was on 52390 **/
/** chunk id: 191065, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968),
    l = n(64700),
    i = n(827734),
    a = n(397927),
    o = n(170985);
let s = l.forwardRef(function(e, t) {
    let {
        isInventory: n,
        style: l,
        children: s
    } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: o.Q,
        style: function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({
            marginTop: 8 * !!n
        }, l),
        children: [(0, r.jsx)(a.mir, {
            size: "custom",
            className: o.G,
            height: n ? 16 : 12,
            width: n ? 16 : 12,
            color: n ? i.A.colors.TEXT_MUTED.css : i.A.colors.WHITE.css
        }), (0, r.jsx)(a.Text, {
            color: n ? "text-muted" : "always-white",
            variant: n ? "text-xs/normal" : "text-xxs/normal",
            children: s
        })]
    })
})