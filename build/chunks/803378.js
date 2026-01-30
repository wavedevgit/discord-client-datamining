/** chunk id: 803378, original params: e,t,n (module,exports,require) **/
let i, r, l;
n.d(t, {
    A: () => h
}), n(446912), n(896048);
var a, s = n(311907),
    o = n(73153),
    c = n(168186),
    d = n(200662);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let p = {},
    m = {},
    g = !1;

function b() {
    i = void 0, p = {}, m = {}, r = void 0, l = void 0, g = !1
}
class f extends(a = s.Ay.Store) {
    getApplicationPermissions() {
        return p
    }
    getCommands() {
        return m
    }
    getCommand(e) {
        return null == m ? void 0 : m[e]
    }
    getEditedApplication() {
        return r
    }
    getEditedCommand() {
        return l
    }
    isUnavailable() {
        return g
    }
    getApplicationId() {
        return i
    }
}
u(f, "displayName", "IntegrationPermissionStore");
let h = new f(o.h, {
    LOGOUT: b,
    INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function(e) {
        let {
            applicationId: t
        } = e;
        if (t !== i) return !1;
        g = !0
    },
    INTEGRATION_PERMISSION_SETTINGS_CLEAR: b,
    INTEGRATION_PERMISSION_SETTINGS_INIT: function(e) {
        let {
            applicationId: t
        } = e;
        b(), i = t
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function(e) {
        var t, n;
        let {
            applicationId: r,
            commandId: l,
            permissions: a
        } = e;
        if (r !== i) return !1;
        if (l === i) {
            p = (0, d.UZ)(a);
            return
        }
        let s = m[l];
        if (null == s) return !1;
        m[l] = (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                    u(e, t, n[t])
                })
            }
            return e
        }({}, s), n = n = {
            permissions: (0, d.UZ)(a)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t)
    },
    INTEGRATION_PERMISSION_SETTINGS_EDIT: function(e) {
        let {
            applicationId: t,
            commandId: n,
            permissions: a
        } = e;
        if (t !== i) return !1;
        n === i ? r = a : l = {
            commandId: n,
            permissions: a
        }
    },
    INTEGRATION_PERMISSION_SETTINGS_RESET: function(e) {
        let {
            commandId: t
        } = e;
        null == t ? r = void 0 : l = void 0
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function(e) {
        let {
            applicationId: t
        } = e;
        if (t !== i) return !1;
        g = !0
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function(e) {
        let {
            applicationId: t,
            commands: n,
            permissions: r
        } = e;
        if (t !== i) return !1;
        let l = Object.fromEntries(r.map(e => [e.id, e.permissions])),
            a = {};
        for (let e of n)
            if (e.application_id === i) {
                let t = (0, c.Oe)({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id
                    }),
                    n = l[e.id];
                null != n && (t.permissions = (0, d.UZ)(n)), a[e.id] = t
            } m = a
    }
})