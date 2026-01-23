/** Chunk was on web.js **/
/** chunk id: 491182, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(473193),
    c = n(397927),
    u = n(824994),
    d = n(176201),
    f = n(676608),
    p = n(317525),
    _ = n(679740);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function E(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function y(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = b(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function b(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let O = function(e) {
    let {
        className: t,
        compact: n = !1,
        contentOnly: a = !1,
        zalgo: h = !0,
        preview: g = !1,
        disableInteraction: b = !1,
        childrenRepliedMessage: O,
        childrenExecutedCommand: v,
        childrenHeader: A,
        childrenSystemMessage: I,
        childrenButtons: S,
        childrenMessageContent: T,
        childrenAccessories: C,
        messageRef: N,
        focusProps: w = {
            offset: {
                left: 4,
                right: 4
            }
        },
        hasThread: R,
        isSystemMessage: P,
        hasReply: D,
        author: x,
        onMouseEnter: L,
        onMouseLeave: j
    } = e, M = y(e, ["className", "compact", "contentOnly", "zalgo", "preview", "disableInteraction", "childrenRepliedMessage", "childrenExecutedCommand", "childrenHeader", "childrenSystemMessage", "childrenButtons", "childrenMessageContent", "childrenAccessories", "messageRef", "focusProps", "hasThread", "isSystemMessage", "hasReply", "author", "onMouseEnter", "onMouseLeave"]), k = (0, o.bG)([p.A], () => (null == x ? void 0 : x.guildId) == null || (null == x ? void 0 : x.colorRoleId) == null ? null : p.A.getRole(x.guildId, x.colorRoleId)), U = (0, f.jV)(null == x ? void 0 : x.guildId, k) && (0, d.kz)(x), [G, V] = i.useState(!1), F = i.useCallback(e => {
        V(!0), null == L || L(e)
    }, [L]), B = i.useCallback(e => {
        V(!1), null == j || j(e)
    }, [j]), H = (0, u.W)({
        location: "BaseMessage"
    }), Y = (0, r.jsx)(l.C.Provider, {
        value: {
            animate: G,
            setAnimate: V
        },
        children: (0, r.jsx)(c.vN3, E(m({}, w), {
            children: (0, r.jsxs)("div", E(m({
                className: s()(t, {
                    [_.D7]: U,
                    [_.e8]: H && (null == x ? void 0 : x.displayNameStyles) != null && (null == x ? void 0 : x.guildId) == null,
                    [_.iE]: !0,
                    [_.kl]: a,
                    [_.oE]: n,
                    [_.VH]: g,
                    [_.E]: !n,
                    [_.GZ]: h,
                    [_.pR]: R,
                    [_.X4]: P,
                    [_.h8]: D
                }),
                ref: N
            }, M), {
                role: "article",
                onMouseEnter: F,
                onMouseLeave: B,
                children: [O, v, (0, r.jsxs)("div", {
                    className: _.PG,
                    children: [I, A, null == I && T]
                }), C, null != S ? (0, r.jsx)("div", {
                    className: _.UD,
                    children: S
                }) : null]
            }))
        }))
    });
    return b ? (0, r.jsx)(c.M1G, {
        children: Y
    }) : Y
}