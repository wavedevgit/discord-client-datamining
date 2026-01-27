/** Chunk was on 94682 **/
/** chunk id: 415043, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p,
    H: () => g
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(342952),
    o = n(435371),
    s = n(397927),
    c = n(915089),
    u = n(457047);

function d(e) {
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

function f(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }
    if (i = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
}

function p(e) {
    let {
        label: t,
        className: n,
        size: l = s._3J.SIZE_16,
        maxUsers: o = 4
    } = e, p = f(e, ["label", "className", "size", "maxUsers"]), g = (0, c.GV)();
    return (0, r.jsxs)("div", {
        className: i()(n, u.k),
        children: [(0, r.jsx)(a.I, d({
            "aria-labelledby": g,
            overflowCountClassName: u.j,
            size: l,
            maxUsers: o
        }, p)), (0, r.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            id: g,
            children: t
        })]
    })
}

function g(e) {
    let {
        label: t,
        className: n,
        overflowCountClassName: l,
        size: c = s._3J.SIZE_16,
        maxUsers: p = 4,
        onClick: g
    } = e, m = f(e, ["label", "className", "overflowCountClassName", "size", "maxUsers", "onClick"]);
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsx)(o.m_, {
            text: t,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, r.jsx)(s.DUT, {
                onClick: g,
                "aria-label": t,
                children: (0, r.jsx)(a.I, d({
                    size: c,
                    maxUsers: p,
                    overflowCountClassName: i()(u.j, l),
                    "aria-hidden": !0
                }, m))
            })
        })
    })
}