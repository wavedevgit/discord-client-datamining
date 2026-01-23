/** Chunk was on 97492 **/
/** chunk id: 810153, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r, l = n(311907),
    i = n(73153),
    s = n(187508),
    a = n(927813),
    o = n(661191),
    c = n(322387);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            u(e, t, n[t])
        })
    }
    return e
}

function p(e, t) {
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
let h = 90 * a.A.Millis.DAY,
    f = {
        tab: null,
        localItemAcks: {},
        hasNewMentions: !1,
        isDataStale: !1,
        isRefreshing: !1
    };
class g extends(r = l.Ay.PersistedStore) {
    initialize(e) {
        if (this.waitFor(s.Ay), null != e) {
            var t;
            (f = e).localItemAcks = function(e) {
                let t = {};
                for (let [n, r] of Object.entries(e)) Date.now() - r < h && (t[n] = r);
                return t
            }(null != (t = f.localItemAcks) ? t : {}), f.isDataStale = !0
        }
    }
    getState() {
        return f
    }
    getTab() {
        var e;
        return null != (e = f.tab) ? e : c.$w.ForYou
    }
    isLocalItemAcked(e) {
        return null != e.local_id && (null != f.localItemAcks[e.local_id] || o.default.age(e.id) > h)
    }
    hasNewMentions() {
        return f.hasNewMentions
    }
    isDataStale() {
        return f.isDataStale
    }
    isRefreshing() {
        return f.isRefreshing
    }
    shouldReload() {
        return f.hasNewMentions || f.isDataStale || f.isRefreshing
    }
}

function m() {
    f.hasNewMentions = !1, f.isDataStale = !1, f.isRefreshing = !1
}
u(g, "displayName", "NotificationCenterStore"), u(g, "persistKey", "NotificationCenterStore");
let b = new g(i.h, {
    MESSAGE_CREATE: function(e) {
        let {
            message: t
        } = e
    },
    NOTIFICATION_CENTER_SET_TAB: function(e) {
        f = p(d({}, f), {
            tab: e.tab
        })
    },
    NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function(e) {
        let {
            localIds: t
        } = e;
        t.forEach(e => {
            f = p(d({}, f), {
                localItemAcks: p(d({}, f.localItemAcks), {
                    [e]: Date.now()
                })
            })
        })
    },
    NOTIFICATION_CENTER_REFRESH: function() {
        f.isRefreshing = !0
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: m,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: m
})