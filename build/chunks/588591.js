/** Chunk was on 14691 **/
/** chunk id: 588591, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r, l = n(311907),
    i = n(73153);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let a = {},
    d = [];

function o() {
    a = {}
}
class c extends(r = l.Ay.Store) {
    getRegionStateForPingUrl(e) {
        if (null != e) return a[e]
    }
    getRegionState() {
        return a
    }
    getRegions() {
        return d
    }
}
s(c, "displayName", "GameServerRegionStore");
let u = new c(i.h, {
    LOGOUT: o,
    GAME_SERVER_REGION_PING_STATE_UPDATE: function(e) {
        var t, n;
        let {
            pingUrl: r,
            state: l
        } = e;
        t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    s(e, t, n[t])
                })
            }
            return e
        }({}, a), n = n = {
            [r]: l
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), a = t
    },
    GAME_SERVER_REGION_PING_STATE_RESET: o,
    GAME_SERVER_FETCH_REGIONS_SUCCESS: function(e) {
        let {
            regions: t
        } = e;
        d = t
    }
})