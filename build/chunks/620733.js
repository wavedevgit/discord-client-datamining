/** chunk id: 620733, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => u
}), n(896048);
var r, i = n(311907),
    s = n(73153);

function a(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}
let c = [];

function o() {
    c = []
}
class l extends(r = i.Ay.Store) {
    getSessions() {
        return c
    }
}
a(l, "displayName", "AuthSessionsStore");
let u = new l(s.h, {
    LOGOUT: o,
    LOGIN_SUCCESS: o,
    FETCH_AUTH_SESSIONS_SUCCESS: function(t) {
        let {
            sessions: e
        } = t;
        c = e.map(t => {
            var e, n;
            return e = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), r.forEach(function(e) {
                        a(t, e, n[e])
                    })
                }
                return t
            }({}, t), n = n = {
                approx_last_used_time: new Date(t.approx_last_used_time)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }), e
        })
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function(t) {
        let {
            sessionIdHashes: e
        } = t, n = [...c], r = !1;
        for (let t of e) {
            let e = n.findIndex(e => e.id_hash === t);
            e >= 0 && (n.splice(e, 1), r = !0)
        }
        if (!r) return !1;
        c = n
    }
})