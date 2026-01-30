/** chunk id: 303612, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u,
    y: () => x
});
var r = n(627968);
n(64700);
var l = n(23339),
    a = n(319060),
    i = n(492749),
    s = n(234914);

function o(e) {
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
}

function c(e, t) {
    if (null == e) return {};
    var n, r, l, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
                a = Object.getOwnPropertyNames(e);
            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}
let d = (0, l.xI)(a.A.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function u(e) {
    let {
        listing: t,
        imageSize: n,
        alt: l
    } = e, a = c(e, ["listing", "imageSize", "alt"]), s = (0, i.R)(t, n);
    return (0, r.jsx)("img", o({
        src: s,
        alt: l
    }, a))
}

function x(e) {
    let {
        listing: t,
        aspectRatio: n = 16 / 9,
        height: l
    } = e, a = c(e, ["listing", "aspectRatio", "height"]), u = (l - 2 * d) * n, x = (0, i.R)(t, u), m = (0, i.R)(t, u, {
        shouldAnimate: !1
    });
    return (0, r.jsx)(s.A, o({
        src: x,
        backgroundSrc: m,
        aspectRatio: n
    }, a))
}