/** chunk id: 834968, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(73510),
    l = n(60090);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            c(e, t, n[t])
        })
    }
    return e
}

function d(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = f(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function f(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let p = e => {
    switch (e.id) {
        case s.Ik.BUILT_IN:
            return o.kC9;
        case s.Ik.FRECENCY:
            return o.O4;
        default:
            return
    }
};

function _(e) {
    let {
        section: t,
        className: n,
        width: i,
        height: o,
        padding: s,
        isSelected: c,
        selectable: f = !1
    } = e, _ = d(e, ["section", "className", "width", "height", "padding", "isSelected", "selectable"]), h = p(t);
    return (0, r.jsx)("div", {
        className: a()(l.iE, n, {
            [l.rb]: f,
            [l.wH]: f && c
        }),
        style: {
            width: i,
            height: o,
            padding: null != s ? s : 0
        },
        children: null != h ? (0, r.jsx)(h, u({
            className: l.Kk,
            color: "currentColor",
            size: "custom",
            width: i,
            height: o
        }, _)) : null
    })
}