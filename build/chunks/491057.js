/** chunk id: 491057, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Qt: () => l,
    cG: () => s
}), n(896048);
var r = n(627968);

function i(e, t) {
    if (null == e) return {};
    var n, r, i, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
    }
    if (o = a(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    return o
}

function a(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
n(64700);
let [o, s] = (0, n(786300).A)();

function l(e) {
    let {
        children: t
    } = e, n = i(e, ["children"]);
    return (0, r.jsx)(o.Provider, {
        value: n,
        children: t
    })
}