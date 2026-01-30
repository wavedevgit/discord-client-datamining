/** chunk id: 849823, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => d
}), n(747238), n(812715), n(896048);
var r = n(492462),
    i = n(652215);
let a = "_",
    o = /(-|%20)/g,
    s = "AND",
    l = /%26/g;

function c(e) {
    return null == e ? "" : e.toUpperCase().replace(o, a).replace(l, s)
}

function u(e) {
    return i.nc_.hasOwnProperty(e)
}

function d(e, t) {
    let [, , n, a] = e.split("/"), o = c(n), s = c(a), l = u(o), d = "" === s || u(s);
    return l && d ? {
        params: (0, r.parse)(null != t ? t : location.search),
        section: i.nc_[o],
        subsection: s
    } : null
}