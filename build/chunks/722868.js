/** chunk id: 722868, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var l = n(627968),
    i = n(397927),
    r = n(688810),
    s = n(562153),
    o = n(183555),
    a = n(657331),
    d = n(950191),
    c = n(985018);

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function p(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function f(e) {
    let {
        user: t,
        guildId: n,
        channelId: f,
        displayProfile: m,
        onClose: A
    } = e, {
        analyticsLocations: x,
        sourceAnalyticsLocations: g
    } = (0, r.Ay)(), {
        context: j,
        trackUserProfileAction: h
    } = (0, o.NJ)(), b = (0, d.Ay)(t.id, n);
    return (null == b ? void 0 : b.guildId) == null ? null : (null == m ? void 0 : m.guildId) != null ? (0, l.jsx)(i.Drp, {
        id: "view-main-profile",
        label: c.intl.string(c.t.GISTta),
        subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
            displayName: s.Ay.getName(void 0, void 0, t)
        }),
        action: () => {
            null == A || A(), (0, a.openUserProfileModal)(p(u({
                userId: t.id,
                guildId: n
            }, j), {
                showGuildProfile: !1,
                sourceAnalyticsLocations: g
            })), h(u({
                action: "PRESS_VIEW_MAIN_PROFILE",
                analyticsLocations: x
            }, j))
        }
    }) : (0, l.jsx)(i.Drp, {
        id: "view-server-profile",
        label: c.intl.string(c.t.DisZzB),
        subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
            displayName: s.Ay.getName(n, f, t)
        }),
        action: () => {
            null == A || A(), (0, a.openUserProfileModal)(p(u({
                userId: t.id,
                guildId: n
            }, j), {
                showGuildProfile: !0,
                sourceAnalyticsLocations: g
            })), h(u({
                action: "PRESS_VIEW_SERVER_PROFILE",
                analyticsLocations: x
            }, j))
        }
    })
}