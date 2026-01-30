/** chunk id: 180812, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => D
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(442433),
    a = n(847767),
    o = n(358367),
    u = n(468389),
    c = n(793574),
    s = n(50268),
    d = n(222311),
    A = n(803664),
    b = n(29293),
    f = n(291247),
    g = n(239211),
    O = n(707378),
    E = n(399476),
    p = n(889460),
    _ = n(443439),
    y = n(198229),
    h = n(972432),
    m = n(77544),
    j = n(652215),
    v = n(985018);

function S(e) {
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

function T(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function I(e) {
    let {
        user: t,
        guildId: n,
        channelId: a,
        mediaEngineContext: o,
        onSelect: c,
        onShowProfile: j,
        onWatchStream: S,
        appContext: T
    } = e, I = (0, _.A)({
        onAction: () => {
            null == j || j()
        }
    }), P = (0, O.A)({
        user: t,
        context: T
    }), D = (0, b.A)({
        user: t,
        appContext: T
    }), w = (0, m.A)(t.id, S), C = (0, h.A)(t.id), M = (0, y.A)(t.id, o), x = (0, p.A)({
        user: t
    }), N = (0, u.A)(null, t), R = (0, A.A)({
        user: t,
        appContext: T
    }), U = (0, g.A)({
        user: t,
        appContext: T
    }), L = (0, E.A)({
        user: t,
        appContext: T
    }), V = (0, s.A)({
        id: t.id,
        label: v.intl.string(v.t["/AXYnE"])
    }), G = (0, d.A)(t), B = (0, f.A)(t, n, a), k = t.isNonUserBot();
    return (0, r.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: i.Z_,
        "aria-label": v.intl.string(v.t.liqwPJ),
        onSelect: c,
        children: [!k && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.rXV, {
                children: G
            }), (0, r.jsxs)(l.rXV, {
                children: [I, P, D, w]
            }), (0, r.jsx)(l.rXV, {
                children: C
            }), (0, r.jsx)(l.rXV, {
                children: N
            }), (0, r.jsxs)(l.rXV, {
                children: [M, x, R, L, U]
            }), (0, r.jsx)(l.rXV, {
                children: B
            })]
        }), (0, r.jsx)(l.rXV, {
            children: V
        })]
    })
}

function P(e) {
    let {
        user: t,
        mediaEngineContext: n,
        onSelect: a,
        onShowProfile: o,
        onWatchStream: c,
        appContext: f
    } = e, j = (0, _.A)({
        onAction: () => {
            null == o || o()
        }
    }), S = (0, O.A)({
        user: t,
        context: f
    }), T = (0, b.A)({
        user: t,
        appContext: f
    }), I = (0, m.A)(t.id, c), P = (0, h.A)(t.id), D = (0, y.A)(t.id, n), w = (0, p.A)({
        user: t
    }), C = (0, u.A)(null, t), M = (0, A.A)({
        user: t,
        appContext: f
    }), x = (0, g.A)({
        user: t,
        appContext: f
    }), N = (0, E.A)({
        user: t,
        appContext: f
    }), R = (0, s.A)({
        id: t.id,
        label: v.intl.string(v.t["/AXYnE"])
    }), U = (0, d.A)(t), L = t.isNonUserBot();
    return (0, r.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: i.Z_,
        "aria-label": v.intl.string(v.t.liqwPJ),
        onSelect: a,
        children: [!L && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.rXV, {
                children: U
            }), (0, r.jsxs)(l.rXV, {
                children: [j, S, T, I]
            }), (0, r.jsx)(l.rXV, {
                children: P
            }), (0, r.jsx)(l.rXV, {
                children: C
            }), (0, r.jsxs)(l.rXV, {
                children: [D, w, M, N, x]
            })]
        }), (0, r.jsx)(l.rXV, {
            children: R
        })]
    })
}
let D = (0, o.A)((0, a.A)(function(e) {
    let {
        guildId: t,
        channelId: n
    } = e, l = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["guildId", "channelId"]);
    return null != t && null != n ? (0, r.jsx)(I, T(S({}, l), {
        guildId: t,
        channelId: n
    })) : (0, r.jsx)(P, T(S({}, l), {
        guildId: t,
        channelId: n
    }))
}, {
    object: j.ZSU.CONTEXT_MENU
}), [c.A.CONTEXT_MENU, c.A.USER_OVERLAY_CONTEXT_MENU])