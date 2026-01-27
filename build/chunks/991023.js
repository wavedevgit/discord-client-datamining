/** Chunk was on web.js **/
/** chunk id: 991023, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(573435),
    c = n(696451),
    u = n(486020),
    d = n(392054),
    f = n(104075),
    p = n(532406);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            _(e, t, n[t])
        })
    }
    return e
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function g(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function E(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = y(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function y(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function b(e) {
    let {
        section: t,
        channel: {
            guild_id: n
        },
        isSelected: a,
        width: _,
        height: m,
        className: y,
        selectable: b = !1,
        isSquircle: O,
        onFocus: v,
        onBlur: A,
        onMouseOver: I,
        onMouseLeave: S
    } = e, T = E(e, ["section", "channel", "isSelected", "width", "height", "className", "selectable", "isSquircle", "onFocus", "onBlur", "onMouseOver", "onMouseLeave"]), [C, N] = i.useState(!1), w = i.useCallback(() => {
        N(!0), null == v || v()
    }, [v]), R = i.useCallback(() => {
        N(!1), null == A || A()
    }, [A]), P = i.useCallback(() => {
        N(!0), null == I || I()
    }, [I]), D = i.useCallback(() => {
        N(!1), null == S || S()
    }, [S]), L = (0, s.bG)([c.Ay], () => {
        var e, r, i, a;
        return (null == (r = t.application) || null == (e = r.bot) ? void 0 : e.id) != null ? c.Ay.getMember(n, null == (a = t.application) || null == (i = a.bot) ? void 0 : i.id) : null
    }), x = i.useMemo(() => {
        var e;
        return t.type !== d.Hf.APPLICATION ? p : u.Ay.getApplicationIconURL({
            id: t.id,
            icon: t.icon,
            bot: null == (e = t.application) ? void 0 : e.bot,
            botIconFirst: !0,
            guildMember: L,
            size: _
        })
    }, [t, _, L]);
    return (0, r.jsx)("div", g(h({}, T), {
        className: o()(f.iE, y, {
            [f.rb]: b,
            [f.wH]: b && a
        }),
        onFocus: w,
        onBlur: R,
        onMouseOver: P,
        onMouseLeave: D,
        children: (0, r.jsx)(l.Ay, {
            className: f.dK,
            mask: O || b && (a || C) ? l.hW.SQUIRCLE : l.hW.AVATAR_DEFAULT,
            width: _,
            height: m,
            children: (0, r.jsx)("img", {
                alt: "",
                className: f.Kk,
                style: {
                    width: _,
                    height: m
                },
                src: x
            })
        })
    }))
}