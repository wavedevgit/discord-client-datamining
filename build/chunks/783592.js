/** chunk id: 783592, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var l, r = n(311907),
    i = n(73153),
    s = n(294857),
    a = n(21119),
    o = n(290863),
    u = n(287809),
    c = n(652215);

function d(e, t, n) {
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
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            d(e, t, n[t])
        })
    }
    return e
}

function g(e, t) {
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
let f = !1,
    p = {},
    I = {};

function m(e) {
    let t = !1;
    return e.forEach(e => {
        t = !1 !== A(e) || t
    }), t
}

function E(e) {
    let t = I[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != p[n] && (p = h({}, p), delete p[n][e], 0 === Object.values(p[n]).length && delete p[n]), I = h({}, I), delete I[e], !0
}

function A(e) {
    let {
        user: t,
        activities: n
    } = e;
    if (null == t) return !1;
    let l = n.filter(e => e.type !== c.$pd.CUSTOM_STATUS);
    if (0 === l.length) return E(t.id);
    let r = !1;
    return l.forEach(e => {
        (function(e, t) {
            var n, l;
            let r = (0, s.A)(e);
            if (null == r) return E(t.id);
            let i = I[t.id];
            null != i && i.gameId !== r && E(t.id);
            let a = null != (n = null == (l = e.timestamps) ? void 0 : l.start) ? n : Date.now(),
                o = {
                    userId: t.id,
                    activity: e,
                    startedPlaying: a
                };
            return p = g(h({}, p), {
                [r]: g(h({}, p[r]), {
                    [o.userId]: o
                })
            }), I = g(h({}, I), {
                [o.userId]: {
                    gameId: r,
                    startedPlaying: o.startedPlaying
                }
            }), !0
        })(e, t) && (r = !0)
    }), r
}

function y() {
    let e, t = !1;
    return a.A.shouldFetch() || f || (p = {}, I = {}, e = !1, o.A.getUserIds().forEach(t => {
        let n = u.default.getUser(t);
        null != n && (e = A({
            user: n,
            activities: o.A.getActivities(t)
        }) || e)
    }), t = e), f = !a.A.shouldFetch(), t
}
class S extends(l = r.Ay.Store) {
    initialize() {
        this.waitFor(o.A, a.A, u.default), this.syncWith([a.A], y)
    }
    get games() {
        return p
    }
    get usersPlaying() {
        return I
    }
    get gameIds() {
        return Object.keys(p)
    }
    getNowPlaying(e) {
        return p[e]
    }
    getUserGame(e) {
        return I[e]
    }
}
d(S, "displayName", "NowPlayingStore");
let v = new S(i.h, {
    CONNECTION_OPEN: function() {
        p = {}, I = {}
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
        let {
            guilds: t,
            presences: n
        } = e, l = !1;
        return t.forEach(e => {
            m(e.presences) && (l = !0)
        }), m(n) && (l = !0), l
    },
    LOGOUT: function() {
        p = {}, I = {}
    },
    PRESENCE_UPDATES: function(e) {
        let {
            updates: t
        } = e;
        return t.map(e => A(e)).some(e => e)
    },
    PRESENCES_REPLACE: function(e) {
        let {
            presences: t
        } = e;
        return m(t)
    }
})