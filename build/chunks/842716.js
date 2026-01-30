/** chunk id: 842716, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(733351), n(667532);
var r, i = n(311907),
    a = n(506774),
    o = n(73153),
    s = n(768570);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let c = s.nC,
    u = "tokenized",
    d = !1,
    f = {};

function p(e) {
    var t;
    let {
        id: n,
        query: r
    } = e;
    if ("string" != typeof r || "" === (r = r.trim())) return;
    let i = f[n] = null != (t = f[n]) ? t : [],
        o = i.indexOf(r); - 1 !== o ? (i.splice(o, 1), i.unshift(r)) : null != i[0] && "" !== i[0] && r.startsWith(i[0]) ? i[0] = r : o < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), a.w.set(s.nC, {
        history: f
    })
}

function _(e) {
    let {
        id: t
    } = e;
    delete f[t], a.w.set(s.nC, {
        history: f
    })
}

function h(e) {
    let {
        id: t,
        query: n
    } = e;
    null != f[t] && (f[t] = f[t].filter(e => e !== n), a.w.set(s.nC, {
        history: f
    }))
}

function m(e) {
    return Object.keys(e).forEach(t => {
        Array.isArray(e[t]) && (e[t] = e[t].filter(e => "string" == typeof e && e.trim())), Array.isArray(e[t]) && 0 !== e[t].length || delete e[t]
    }), e
}

function g() {
    a.w.remove(s.nC), f = {}
}
class E extends(r = i.Ay.Store) {
    initialize() {
        let e = a.w.get(c);
        (null == e ? void 0 : e.history) != null && (f = m(e.history)), d = !!a.w.get(u)
    }
    isTokenized() {
        return d
    }
    getHistory(e) {
        return f[e]
    }
}
l(E, "displayName", s.yQ);
let y = new E(o.h, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: _,
    SEARCH_HISTORY_WEB_REMOVE_ITEM: h,
    SEARCH_HISTORY_WEB_ADD_ITEM: p,
    LOGOUT: g
})