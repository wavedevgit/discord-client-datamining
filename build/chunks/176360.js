/** chunk id: 176360 params = (module,exports,require) **/
let i, r;
n.d(t, {
    A: () => y
});
var a = n(735438),
    l = n.n(a),
    s = n(311907),
    o = n(506774),
    d = n(73153),
    c = n(488926),
    u = n(863036),
    A = n(734057),
    h = n(652215),
    _ = n(737045);
let m = new Set,
    g = h.XlH.CLOSED,
    p = !1,
    E = null,
    I = null,
    f = null,
    C = null,
    T = null,
    N = null,
    S = o.w.get(_.t0) || !1;

function x(e) {
    let t = e.getGuildId(),
        n = {
            ...e.permissionOverwrites
        };
    return null != t && null == n[t] && (n[t] = c.xT(t)), n
}

function v() {
    if (f = u.A.getChannel(), C = u.A.getCategory(), null == f) return !1;
    let e = f.getGuildId();
    I = E = x(f), null == E[T] && (T = e), r = null != C, i = c.r(f, C), N = null, p = !1, g = h.XlH.CLOSED, m.clear()
}
class b extends s.Ay.Store {
    static displayName = "ChannelSettingsPermissionsStore";
    initialize() {
        this.waitFor(u.A, A.A)
    }
    hasChanges() {
        return p
    }
    showNotice() {
        return this.hasChanges()
    }
    getPermissionOverwrite(e) {
        return E?.[e]
    }
    get editedPermissionIds() {
        return Array.from(m)
    }
    get permissionOverwrites() {
        return E
    }
    get selectedOverwriteId() {
        return T
    }
    get formState() {
        return g
    }
    get isLockable() {
        return r
    }
    get locked() {
        return i
    }
    get channel() {
        return f
    }
    get category() {
        return C
    }
    get advancedMode() {
        return S
    }
}
let y = new b(d.h, {
    CHANNEL_SETTINGS_SET_SECTION: function(e) {
        let {
            section: t
        } = e;
        if (null != f || t !== h.p_A.PERMISSIONS) return !1;
        v()
    },
    CHANNEL_SETTINGS_PERMISSIONS_INIT: v,
    CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION: function(e) {
        let {
            id: t,
            allow: n,
            deny: r
        } = e, a = E?.[t];
        if (null == a || null == f) return !1;
        a = {
            ...a,
            allow: n,
            deny: r
        }, E = {
            ...E,
            [t]: a
        }, m.add(t), g = h.XlH.OPEN, p = !l().isEqual(E, I), i = c.r(f, C)
    },
    CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION: function(e) {
        let {
            id: t
        } = e;
        if (null != E && null != E[t]) T = t;
        else {
            if (null == f) return !1;
            N = t
        }
    },
    CHANNEL_SETTINGS_INIT: function() {
        u.A.getSection() === h.p_A.PERMISSIONS && v()
    },
    CHANNEL_SETTINGS_CLOSE: function() {
        g = h.XlH.CLOSED, E = null, I = null, f = null, C = null, p = !1, m.clear(), T = null, N = null
    },
    CHANNEL_UPDATES: function(e) {
        let {
            channels: t
        } = e;
        if (null == f) return !1;
        let n = !1;
        for (let e of t) !1 !== function(e) {
            if (null == f || f.id !== e || null == (f = A.A.getChannel(e))) return !1;
            C = u.A.getCategory();
            let t = f.getGuildId();
            if (null == t) return !1;
            I = x(f);
            let n = {};
            return m.forEach(e => {
                null != E && (n[e] = E[e])
            }), null == n[t] && null == f.permissionOverwrites[t] && (n[t] = c.xT(t)), null == (E = {
                ...f.permissionOverwrites,
                ...n
            })[T] ? T = t : null != N && null != E[N] && (T = N, N = null), i = c.r(f, C), !0
        }(e.id) && (n = !0);
        return n
    },
    CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING: function() {
        g = h.XlH.SUBMITTING
    },
    CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS: function(e) {
        let {
            silent: t
        } = e;
        t ? g = h.XlH.OPEN : (g = h.XlH.CLOSED, v())
    },
    CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE: function(e) {
        let {
            advancedMode: t
        } = e;
        S = t, o.w.set(_.t0, t)
    }
})