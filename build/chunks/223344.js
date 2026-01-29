/** Chunk was on 87557 **/
/** chunk id: 223344, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(627968),
    l = n(64700),
    r = n(317097),
    i = n(397927),
    s = n(350246);

function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a
        })
    }
    return e
}

function c(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let d = function(e) {
    let {
        colorKey: t,
        value: n,
        onChange: d,
        title: u
    } = e, m = l.useRef(null);
    return (0, a.jsx)(i.D0$, {
        label: u,
        children: (0, a.jsx)(i.YNO, {
            targetElementRef: m,
            renderPopout: e => (0, a.jsx)(i.VNw, c(o({}, e), {
                value: n,
                onChange: e => d(t, (0, r.Hl)(e))
            })),
            children: e => (0, a.jsx)(i.DUT, c(o({}, e), {
                innerRef: m,
                tag: "span",
                "aria-label": "Select a color",
                className: s.O6,
                style: {
                    backgroundColor: n
                },
                children: (0, a.jsx)(i.dDg, {
                    size: "xs",
                    color: "currentColor",
                    className: s.WY
                })
            }))
        })
    })
}