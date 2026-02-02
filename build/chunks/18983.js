/** chunk id: 18983, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => d
});
var n = r(627968),
    i = r(64700),
    l = r(235218),
    s = r(872472),
    a = r(721932),
    u = r(804870),
    o = r(242640);

function c(e) {
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
}
let d = i.memo(function(e) {
    let {
        item: t,
        cardSize: r = o.Y.MEDIUM,
        showOverlayButton: i = !0,
        isDragging: d = !1,
        dragHandle: f
    } = e, h = function(e, t) {
        if (null == e) return {};
        var r, n, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    l = Object.getOwnPropertyNames(e);
                for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
    }(e, ["item", "cardSize", "showOverlayButton", "isDragging", "dragHandle"]);
    return (0, s.L)(t) ? (0, n.jsx)(u.Ay, c({
        item: t,
        cardSize: r,
        showOverlayButton: i,
        isDragging: d,
        dragHandle: f
    }, h)) : (0, a.$)(t) ? (0, n.jsx)(l.A, c({
        item: t,
        cardSize: r,
        showOverlayButton: i,
        isDragging: d,
        dragHandle: f
    }, h)) : null
})