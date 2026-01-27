/** Chunk was on 39048 **/
/** chunk id: 664007, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(827734),
    a = n(397927),
    o = n(736653),
    c = n(342298),
    d = n(458091);

function u(e) {
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
let g = s.A.unsafe_rawColors.PRIMARY_400.css,
    m = s.A.unsafe_rawColors.PRIMARY_500.css;

function p(e) {
    let {
        enabled: t,
        imageClassName: n,
        iconWrapperClassName: i
    } = e, s = function(e, t) {
        if (null == e) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    l = Object.getOwnPropertyNames(e);
                for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
    }(e, ["enabled", "imageClassName", "iconWrapperClassName"]), p = (0, o.Ay)(), f = {
        height: 18,
        width: 18,
        color: (0, a.Mwr)(p) ? g : m
    };
    return (0, r.jsx)(c.A, u({
        className: l()({
            [d.MY]: t,
            [d.O7]: !t
        }),
        imageClassName: l()(n, d.f3, {
            [d.Hn]: !t
        }),
        icon: null != s.image && "" !== s.image ? (0, r.jsx)(a.R2l, u({
            size: "custom"
        }, f)) : (0, r.jsx)(a.XGR, u({
            size: "custom"
        }, f)),
        iconClassName: l()(d.oB, d.BD),
        iconWrapperClassName: i,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0
    }, s))
}