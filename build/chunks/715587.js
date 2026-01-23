/** Chunk was on 96811 **/
/** chunk id: 715587, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
});
var n = r(627968),
    i = r(64700),
    l = r(505312),
    s = r(397927),
    a = r(744086),
    o = r(985018);

function c(e) {
    let {
        align: t = "left"
    } = e, r = i.useRef(null), c = (0, l.w)();
    return (0, n.jsx)(s.YNO, {
        targetElementRef: r,
        position: "top",
        align: t,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, n.jsx)(a.Ay, {
                onClose: t,
                onSelect: void 0
            })
        },
        children: e => (0, n.jsx)(s.K0, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n;
                    n = r[t], t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })
            }
            return e
        }({
            buttonRef: r,
            size: "md",
            variant: "secondary",
            icon: c.Component,
            "aria-label": o.intl.string(o.t["+1H47t"])
        }, e, c.events))
    })
}