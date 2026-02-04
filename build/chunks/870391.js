/** chunk id: 870391, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(321073), n(896048);
var l, r = n(311907),
    i = n(73153),
    s = n(21119),
    a = n(153488),
    o = n(994500),
    u = n(287809);

function c(e, t, n) {
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
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            c(e, t, n[t])
        })
    }
    return e
}

function h(e, t) {
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
let g = [],
    f = !1;
class p extends(l = r.Ay.PersistedStore) {
    initialize(e) {
        if (this.waitFor(a.A, o.A, s.A, u.default), null != e) {
            var t, n;
            g = null != (t = e.groups) ? t : [], f = null != (n = e.isInitialized) && n
        }
    }
    getGroups() {
        return g
    }
    getGroup(e) {
        var t;
        return null != (t = g.find(t => t.id === e)) ? t : null
    }
    getGroupIds() {
        return g.map(e => e.id)
    }
    getUserGroups(e) {
        return g.filter(t => t.userIds.includes(e))
    }
    isGroupEmpty(e) {
        let t = this.getGroup(e);
        return null == t || 0 === t.userIds.length
    }
    isInitialized() {
        return f
    }
    getState() {
        return {
            groups: g,
            isInitialized: f
        }
    }
}
c(p, "displayName", "FriendGroupsStore"), c(p, "persistKey", "FriendGroupsStoreV2");
let I = new p(i.h, {
    POST_CONNECTION_OPEN: function() {
        if (f || g.length > 0) return !1;
        g = [], f = !0
    },
    CREATE_FRIEND_GROUP: function(e) {
        let {
            groupId: t,
            name: n
        } = e;
        return !g.some(e => e.id === t) && (g.push({
            id: t,
            name: n,
            userIds: []
        }), !0)
    },
    UPDATE_FRIEND_GROUP: function(e) {
        let {
            groupId: t,
            name: n
        } = e, l = g.findIndex(e => e.id === t);
        return -1 !== l && (g[l] = h(d({}, g[l]), {
            name: n
        }), !0)
    },
    DELETE_FRIEND_GROUP: function(e) {
        let {
            groupId: t
        } = e, n = g.length;
        return (g = g.filter(e => e.id !== t)).length !== n
    },
    REORDER_FRIEND_GROUPS: function(e) {
        let {
            groupIds: t
        } = e, n = [], l = new Map(g.map(e => [e.id, e]));
        for (let e of t) {
            let t = l.get(e);
            null != t && n.push(t)
        }
        return n.length === g.length && (g = n, !0)
    },
    ADD_USERS_TO_GROUP: function(e) {
        let {
            groupId: t,
            userIds: n
        } = e, l = g.findIndex(e => e.id === t);
        if (-1 === l) return !1;
        let r = g[l],
            i = new Set(r.userIds),
            s = n.filter(e => !i.has(e));
        return 0 !== s.length && (g[l] = h(d({}, r), {
            userIds: [...r.userIds, ...s]
        }), !0)
    },
    REMOVE_USERS_FROM_GROUP: function(e) {
        let {
            groupId: t,
            userIds: n
        } = e, l = g.findIndex(e => e.id === t);
        if (-1 === l) return !1;
        let r = g[l],
            i = new Set(n),
            s = r.userIds.filter(e => !i.has(e));
        return s.length !== r.userIds.length && (g[l] = h(d({}, r), {
            userIds: s
        }), !0)
    }
})