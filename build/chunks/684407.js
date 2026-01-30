/** chunk id: 684407, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T,
    E: () => s
});
var l, r, a = n(311907),
    i = n(73153);
let s = {},
    o = {},
    u = {},
    c = !1,
    E = !1,
    d = !1;

function _(e) {
    let {
        guild: t
    } = e.invite;
    return (null == t ? void 0 : t.welcome_screen) != null && (o[t.id] = t.welcome_screen, !0)
}

function g(e) {
    let {
        welcomeScreen: t,
        guildId: n
    } = e;
    o[n] = null != t ? t : s
}
class A extends(r = a.Ay.Store) {
    get(e) {
        if (null != e) return o[e]
    }
    isFetching() {
        return E
    }
    hasError() {
        return d
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? c : u[e] || !1)
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = o[e];
        return null == t || 0 === t.welcome_channels.length
    }
}(l = "displayName") in A ? Object.defineProperty(A, l, {
    value: "WelcomeScreenStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : A[l] = "WelcomeScreenStore";
let T = new A(i.h, {
    INVITE_RESOLVE_SUCCESS: _,
    INVITE_ACCEPT_SUCCESS: _,
    WELCOME_SCREEN_SUBMIT_SUCCESS: g,
    WELCOME_SCREEN_UPDATE: g,
    WELCOME_SCREEN_VIEW: function(e) {
        let {
            guildId: t,
            isLurking: n
        } = e;
        u[t] = !0, n && (c = !0)
    },
    GUILD_STOP_LURKING: function() {
        c = !1
    },
    GUILD_DELETE: function(e) {
        let {
            guild: {
                id: t
            }
        } = e;
        u[t] = !1
    },
    WELCOME_SCREEN_FETCH_START: function() {
        E = !0, d = !1
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
        E = !1, d = !1;
        let {
            welcomeScreen: t,
            guildId: n
        } = e;
        o[n] = null != t ? t : s
    },
    WELCOME_SCREEN_FETCH_FAIL: function() {
        E = !1, d = !0
    }
})