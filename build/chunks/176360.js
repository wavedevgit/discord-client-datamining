/** chunk id: 176360, original params: e,t,n (module,exports,require) **/
let r, i;
n.d(t, {
    A: () => w
}), n(896048);
var l, a = n(735438),
    s = n.n(a),
    o = n(311907),
    c = n(506774),
    u = n(73153),
    d = n(488926),
    p = n(863036),
    h = n(734057),
    f = n(652215),
    g = n(737045);

function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            m(e, t, n[t])
        })
    }
    return e
}

function _(e, t) {
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
let b = new Set,
    E = f.XlH.CLOSED,
    O = !1,
    y = null,
    I = null,
    v = null,
    S = null,
    C = null,
    N = null,
    T = c.w.get(g.t0) || !1;

function j(e) {
    let t = e.getGuildId(),
        n = A({}, e.permissionOverwrites);
    return null != t && null == n[t] && (n[t] = d.xT(t)), n
}

function x() {
    if (v = p.A.getChannel(), S = p.A.getCategory(), null == v) return !1;
    let e = v.getGuildId();
    I = y = j(v), null == y[C] && (C = e), i = null != S, r = d.r(v, S), N = null, O = !1, E = f.XlH.CLOSED, b.clear()
}
class P extends(l = o.Ay.Store) {
    initialize() {
        this.waitFor(p.A, h.A)
    }
    hasChanges() {
        return O
    }
    showNotice() {
        return this.hasChanges()
    }
    getPermissionOverwrite(e) {
        return null == y ? void 0 : y[e]
    }
    get editedPermissionIds() {
        return Array.from(b)
    }
    get permissionOverwrites() {
        return y
    }
    get selectedOverwriteId() {
        return C
    }
    get formState() {
        return E
    }
    get isLockable() {
        return i
    }
    get locked() {
        return r
    }
    get channel() {
        return v
    }
    get category() {
        return S
    }
    get advancedMode() {
        return T
    }
}
m(P, "displayName", "ChannelSettingsPermissionsStore");
let w = new P(u.h, {
    CHANNEL_SETTINGS_SET_SECTION: function(e) {
        let {
            section: t
        } = e;
        if (null != v || t !== f.p_A.PERMISSIONS) return !1;
        x()
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: x,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
        let {
            id: t,
            allow: n,
            deny: i
        } = e, l = null == y ? void 0 : y[t];
        if (null == l || null == v) return !1;
        l = _(A({}, l), {
            allow: n,
            deny: i
        }), y = _(A({}, y), {
            [t]: l
        }), b.add(t), E = f.XlH.OPEN, O = !s().isEqual(y, I), r = d.r(v, S)
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
        let {
            id: t
        } = e;
        if (null != y && null != y[t]) C = t;
        else {
            if (null == v) return !1;
            N = t
        }
    },
    CHANNEL_SETTINGS_INIT: function() {
        p.A.getSection() === f.p_A.PERMISSIONS && x()
    },
    CHANNEL_SETTINGS_CLOSE: function() {
        E = f.XlH.CLOSED, y = null, I = null, v = null, S = null, O = !1, b.clear(), C = null, N = null
    },
    CHANNEL_UPDATES: function(e) {
        let {
            channels: t
        } = e;
        if (null == v) return !1;
        let n = !1;
        for (let e of t) !1 !== function(e) {
            if (null == v || v.id !== e || null == (v = h.A.getChannel(e))) return !1;
            S = p.A.getCategory();
            let t = v.getGuildId();
            if (null == t) return !1;
            I = j(v);
            let n = {};
            return b.forEach(e => {
                null != y && (n[e] = y[e])
            }), null == n[t] && null == v.permissionOverwrites[t] && (n[t] = d.xT(t)), null == (y = A({}, v.permissionOverwrites, n))[C] ? C = t : null != N && null != y[N] && (C = N, N = null), r = d.r(v, S), !0
        }(e.id) && (n = !0);
        return n
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
        E = f.XlH.SUBMITTING
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
        let {
            silent: t
        } = e;
        t ? E = f.XlH.OPEN : (E = f.XlH.CLOSED, x())
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
        let {
            advancedMode: t
        } = e;
        T = t, c.w.set(g.t0, t)
    }
})