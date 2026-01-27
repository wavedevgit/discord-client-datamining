/** Chunk was on web.js **/
/** chunk id: 342296, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A,
    S: () => E
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(287809),
    l = n(454719),
    c = n(589022),
    u = n(518477),
    d = n(818348);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            f(e, t, n[t])
        })
    }
    return e
}

function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function h(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function m(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = g(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function g(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let E = (0, o.FT9)(o._3J.SIZE_80),
    y = {
        onMouseDown: d.tE,
        onClick: d.tE,
        onKeyDown: d.tE,
        "aria-controls": void 0,
        "aria-expanded": !1
    },
    b = {
        isShown: !1,
        position: void 0
    };

function O(e) {
    let {
        children: t,
        user: n,
        currentUser: a,
        guildId: s,
        channelId: d,
        messageId: f,
        roleId: _,
        disableUserProfileLink: g,
        newAnalyticsLocations: y,
        appContext: b,
        avatarUrl: O,
        preload: v,
        renderPopout: A,
        onRequestOpen: I,
        onRequestClose: S,
        onClosePopout: T,
        shouldShow: C,
        shouldPreload: N = !0
    } = e, w = m(e, ["children", "user", "currentUser", "guildId", "channelId", "messageId", "roleId", "disableUserProfileLink", "newAnalyticsLocations", "appContext", "avatarUrl", "preload", "renderPopout", "onRequestOpen", "onRequestClose", "onClosePopout", "shouldShow", "shouldPreload"]), R = i.useRef(void 0), P = i.useCallback(() => null != v ? v() : (0, l.A)(n.id, null != O ? O : n.getAvatarURL(s, E), {
        type: "popout",
        withMutualGuilds: n.id !== a.id,
        withMutualFriends: !n.bot && n.id !== a.id,
        guildId: s,
        channelId: d
    }), [v, a, n, O, s, d]), D = i.useCallback(e => (R.current = Date.now(), null != A) ? A(e, R.current) : (0, r.jsx)(c.A, h(p({}, e), {
        user: n,
        currentUser: a,
        guildId: s,
        channelId: d,
        roleId: _,
        messageId: f,
        disableUserProfileLink: g,
        newAnalyticsLocations: y,
        appContext: b,
        openedAt: R.current,
        closePopout: () => {
            e.closePopout(), null == T || T()
        }
    })), [n, a, A, s, d, _, f, g, y, b, T]);
    return (0, r.jsx)(o.YNO, h(p({
        popoutKey: u.KM,
        shouldShow: C,
        preload: N ? P : void 0,
        renderPopout: D,
        onRequestOpen: I,
        onRequestClose: S
    }, w), {
        children: t
    }))
}

function v(e) {
    let {
        children: t,
        userId: n,
        user: i
    } = e, o = m(e, ["children", "userId", "user"]), l = (0, a.bG)([s.default], () => s.default.getCurrentUser()), c = (0, a.bG)([s.default], () => null != i ? i : s.default.getUser(n));
    return null == c || null == l ? t(y, b) : (0, r.jsx)(O, h(p({}, o), {
        user: c,
        currentUser: l,
        children: t
    }))
}
let A = i.memo(v)