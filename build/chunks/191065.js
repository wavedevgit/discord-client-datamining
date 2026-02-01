/** chunk id: 191065, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968),
    l = n(64700),
    o = n(827734),
    i = n(397927),
    a = n(170985);
let s = l.forwardRef(function(e, t) {
    let {
        isInventory: n,
        style: l,
        children: s
    } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: a.Q,
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
        children: [(0, r.jsx)(i.mir, {
            size: "custom",
            className: a.G,
            height: n ? 16 : 12,
            width: n ? 16 : 12,
            color: n ? o.A.colors.TEXT_MUTED.css : o.A.colors.WHITE.css
        }), (0, r.jsx)(i.Text, {
            color: n ? "text-muted" : "always-white",
            variant: n ? "text-xs/normal" : "text-xxs/normal",
            children: s
        })]
    })
})