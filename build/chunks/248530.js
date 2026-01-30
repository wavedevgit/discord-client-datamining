/** chunk id: 248530, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => p
}), n(896048), n(264879);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(575087),
    s = n.n(o),
    l = n(827734),
    c = n(500804);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            u(e, t, n[t])
        })
    }
    return e
}
var f = function(e) {
    return e.XSMALL = "xsmall", e.SMALL = "small", e.LARGE = "large", e
}(f || {});

function p(e) {
    let {
        className: t,
        percents: n,
        size: i = "small",
        foregroundColors: o = [l.A.unsafe_rawColors.BRAND_500.css],
        backgroundColor: u = "var(--interactive-background-active)",
        animate: f = !0
    } = e, p = s()(null != n ? n : [], o).map((e, t) => {
        let n, [o, s] = e;
        return n = Array.isArray(s) ? {
            background: "linear-gradient(to right, ".concat(s[0], ", ").concat(s[1], ")")
        } : {
            backgroundColor: s
        }, (0, r.jsx)("div", {
            className: a()(c.progressBar, c[i], {
                [c.animating]: f
            }),
            style: d({
                transform: "translate3d(".concat(Math.min(Math.max(0, null != o ? o : 0), 100) - 100, "%, 0, 0)")
            }, n)
        }, t)
    }).reverse();
    return (0, r.jsx)("div", {
        className: a()(t, c.progress, c[i]),
        style: {
            backgroundColor: u
        },
        children: p
    })
}
p.Sizes = f