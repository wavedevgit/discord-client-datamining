/** Chunk was on web.js **/
/** chunk id: 189213, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Modal: () => m
});
var r = n(627968);
n(64700);
var i = n(224640),
    a = n(696208),
    o = n(430993),
    s = n(364840),
    l = n(20742),
    c = n(655053);

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

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function p(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function _(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = h(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function h(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function m(e) {
    let {
        size: t,
        title: n,
        subtitle: u,
        input: f,
        preview: h,
        actions: m,
        actionBarInput: g,
        actionBarInputLayout: E = "default",
        listProps: y,
        notice: b,
        onScroll: O,
        scrollerRef: v,
        children: A
    } = e, I = _(e, ["size", "title", "subtitle", "input", "preview", "actions", "actionBarInput", "actionBarInputLayout", "listProps", "notice", "onScroll", "scrollerRef", "children"]), S = null != t ? t : null != f || null != g || (0, o.y)(A) || null != y ? "md" : "sm";
    return (0, r.jsxs)(i.d, p(d({}, I), {
        size: S,
        children: [(0, r.jsx)(l.rQ, {
            title: n,
            subtitle: u
        }), (0, r.jsx)(c.i, {
            message: null == b ? void 0 : b.message,
            type: null == b ? void 0 : b.type
        }), (0, r.jsx)(o.c, {
            controls: f,
            listProps: y,
            onScroll: O,
            scrollerRef: v,
            children: A
        }), (0, r.jsx)(s.j, {
            children: h
        }), (0, r.jsx)(a.H, {
            leading: g,
            leadingLayout: E,
            actions: m,
            actionsFullWidth: null == g
        })]
    }))
}