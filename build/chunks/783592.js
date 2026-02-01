/** chunk id: 783592, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r, i = n(311907),
    l = n(73153),
    s = n(294857),
    a = n(21119),
    u = n(290863),
    o = n(287809),
    d = n(652215);

function c(e, t, n) {
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
            c(e, t, n[t])
        })
    }
    return e
}

function f(e, t) {
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
let g = !1,
    I = {},
    A = {};

function S(e) {
    let t = !1;
    return e.forEach(e => {
        t = !1 !== p(e) || t
    }), t
}

function E(e) {
    let t = A[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != I[n] && (I = h({}, I), delete I[n][e], 0 === Object.values(I[n]).length && delete I[n]), A = h({}, A), delete A[e], !0
}

function p(e) {
    let {
        user: t,
        activities: n
    } = e;
    if (null == t) return !1;
    let r = n.filter(e => e.type !== d.$pd.CUSTOM_STATUS);
    if (0 === r.length) return E(t.id);
    let i = !1;
    return r.forEach(e => {
        (function(e, t) {
            var n, r;
            let i = (0, s.A)(e);
            if (null == i) return E(t.id);
            let l = A[t.id];
            null != l && l.gameId !== i && E(t.id);
            let a = null != (n = null == (r = e.timestamps) ? void 0 : r.start) ? n : Date.now(),
                u = {
                    userId: t.id,
                    activity: e,
                    startedPlaying: a
                };
            return I = f(h({}, I), {
                [i]: f(h({}, I[i]), {
                    [u.userId]: u
                })
            }), A = f(h({}, A), {
                [u.userId]: {
                    gameId: i,
                    startedPlaying: u.startedPlaying
                }
            }), !0
        })(e, t) && (i = !0)
    }), i
}

function y() {
    let e, t = !1;
    return a.A.shouldFetch() || g || (I = {}, A = {}, e = !1, u.A.getUserIds().forEach(t => {
        let n = o.default.getUser(t);
        null != n && (e = p({
            user: n,
            activities: u.A.getActivities(t)
        }) || e)
    }), t = e), g = !a.A.shouldFetch(), t
}
class v extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(u.A, a.A, o.default), this.syncWith([a.A], y)
    }
    get games() {
        return I
    }
    get usersPlaying() {
        return A
    }
    get gameIds() {
        return Object.keys(I)
    }
    getNowPlaying(e) {
        return I[e]
    }
    getUserGame(e) {
        return A[e]
    }
}
c(v, "displayName", "NowPlayingStore");
let _ = new v(l.h, {
    CONNECTION_OPEN: function() {
        I = {}, A = {}
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
        let {
            guilds: t,
            presences: n
        } = e, r = !1;
        return t.forEach(e => {
            S(e.presences) && (r = !0)
        }), S(n) && (r = !0), r
    },
    LOGOUT: function() {
        I = {}, A = {}
    },
    PRESENCE_UPDATES: function(e) {
        let {
            updates: t
        } = e;
        return t.map(e => p(e)).some(e => e)
    },
    PRESENCES_REPLACE: function(e) {
        let {
            presences: t
        } = e;
        return S(t)
    }
})