/** Chunk was on 87680 **/
/** chunk id: 370640, original params: e,r,t (module,exports,require) **/
t.r(r), t.d(r, {
    default: () => l
});
var n = t(627968),
    c = t(64700),
    o = t(868062),
    i = t(247366),
    s = t(132091);

function a(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.forEach(function(r) {
            var n;
            n = t[r], r in e ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = n
        })
    }
    return e
}
let p = (0, o.kl)(e => {
        var r, t;
        return (0, n.jsxs)("div", {
            className: s.iE,
            children: [(0, n.jsx)("div", {
                className: s.Lr,
                children: (0, n.jsx)(i.Saturation, a({}, e))
            }), (0, n.jsx)("div", {
                className: s.lG,
                children: (0, n.jsx)(i.Hue, (r = a({}, e), t = t = {
                    direction: "horizontal"
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : (function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t.push.apply(t, n)
                    }
                    return t
                })(Object(t)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
                }), r))
            })]
        })
    }),
    l = c.memo(p)