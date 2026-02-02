/** chunk id: 396816, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i, l;
n.d(t, {
    A: () => J,
    y: () => S
}), n(896048), n(228524);
var s, a, o = n(735438),
    c = n.n(o),
    d = n(136722),
    u = n(317097),
    g = n(311907),
    m = n(73153),
    p = n(867051),
    f = n(145643),
    h = n(176201),
    b = n(676608),
    x = n(317525),
    j = n(111613),
    _ = n(403362),
    O = n(488926),
    v = n(555337),
    y = n(652215),
    A = n(178758);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            E(e, t, n[t])
        })
    }
    return e
}
var S = ((a = {}).SOLID = "solid", a.GRADIENT = "gradient", a.HOLOGRAPHIC = "holographic", a);
let I = new Set,
    C = y.XlH.CLOSED,
    T = !1,
    P = !1,
    w = [],
    R = [],
    D = !1,
    G = new Set,
    L = new Map,
    k = new Map,
    M = new Map;

function U() {
    return null == r || null == w ? [] : j.Ay.calculatePositionDeltas({
        oldOrdering: x.A.getSortedRoles(r.id),
        newOrdering: w,
        idGetter: e => e.id,
        existingPositionGetter: e => e.position,
        ascending: !1
    })
}

function B(e) {
    let {
        section: t
    } = e;
    if (null != r || t !== y.BEX.ROLES) return !1;
    F()
}

function F() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    r = v.A.getProps().guild, T = !1, P = !1, l = void 0, I.clear(), M.clear(), C = y.XlH.OPEN, R = [...w = null != r ? [...x.A.getSortedRoles(r.id)] : []], H(null == r ? void 0 : r.id, R), D = !1, e && (k.clear(), L.forEach((e, t) => {
        k.set(t, [...e])
    }))
}

function H(e, t) {
    t.forEach(t => {
        let n = "solid",
            r = (0, b.aF)(e, t);
        null != t.colors && r && (null != t.colors.tertiary_color ? n = "holographic" : null != t.colors.secondary_color && (n = "gradient"));
        let i = {
            solid: {
                primary_color: y.TGz,
                secondary_color: null,
                tertiary_color: null
            },
            gradient: {
                primary_color: A.lO.primary_color,
                secondary_color: A.lO.secondary_color,
                tertiary_color: null
            },
            holographic: {
                primary_color: A.jl.primary_color,
                secondary_color: A.jl.secondary_color,
                tertiary_color: A.jl.tertiary_color
            }
        };
        if (null != t.colors) {
            var l, s, a;
            i[n] = {
                primary_color: null != (l = t.colors.primary_color) ? l : y.TGz,
                secondary_color: null != (s = t.colors.secondary_color) ? s : null,
                tertiary_color: null != (a = t.colors.tertiary_color) ? a : null
            }
        }
        M.set(t.id, {
            currentStyle: n,
            styleColors: i
        })
    })
}
let V = c().debounce(() => {
    let e = !1;
    P && ((P = U().length > 0) || (e = !0)), [...I].forEach(t => {
        var n;
        c().isEqual(z(t), (n = t, R.find(e => {
            let {
                id: t
            } = e;
            return t === n
        }))) && (I.delete(t), e = !0)
    }), 0 === I.size && (T = !1), D && c().isEqual(L, k) && (e = !0, D = !1), e && X.emitChange()
}, 500);

function K(e, t) {
    let n = w.indexOf(e);
    if (n < 0) return !1;
    let r = N({}, e, t),
        i = [...w];
    i[n] = r, w = i, T = !0, I.add(r.id), V()
}

function z(e) {
    return w.find(t => {
        let {
            id: n
        } = t;
        return n === e
    })
}

function W(e) {
    let {
        guildId: t
    } = e;
    if (null == (r = v.A.getProps().guild) || t !== r.id || C === y.XlH.SUBMITTING) return !1;
    let n = [...x.A.getSortedRoles(r.id)];
    I.forEach(e => {
        let t = z(e),
            r = -1;
        null == n.find((t, n) => {
            let {
                id: i
            } = t;
            if (i === e) return r = n, !0
        }) || null == t ? I.delete(e) : n[r] = t
    }), 0 === I.size && (T = !1);
    let i = new Map;
    I.forEach(e => {
        let t = M.get(e);
        null != t && i.set(e, t)
    }), M.clear(), H(t, n), i.forEach((e, t) => {
        M.set(t, e)
    }), P = !1, w = [...n]
}
class Y extends(s = g.Ay.Store) {
    initialize() {
        this.waitFor(v.A, f.A, x.A)
    }
    hasChanges() {
        return T || P || D
    }
    getRoleStyleData(e) {
        return M.get(e)
    }
    get errorMessage() {
        return l
    }
    get hasSortChanges() {
        return P
    }
    get hasRoleConfigurationChanges() {
        return D
    }
    get guild() {
        return r
    }
    get editedRoleIds() {
        return Array.from(I)
    }
    get editedRoleIdsForConfigurations() {
        return G
    }
    get roles() {
        return w
    }
    get formState() {
        return C
    }
    getSortDeltas() {
        return U()
    }
    showNotice() {
        return this.hasChanges()
    }
    getRole(e) {
        return z(e)
    }
    getPermissionSearchQuery() {
        return i
    }
    getEditedRoleConnectionConfigurationsMap() {
        return k
    }
}
E(Y, "displayName", "GuildSettingsRolesStore");
let X = new Y(m.h, __OVERLAY__ ? {} : {
        GUILD_SETTINGS_ROLES_INIT: () => F(),
        GUILD_SETTINGS_INIT: B,
        GUILD_SETTINGS_SET_SECTION: B,
        GUILD_SETTINGS_ROLES_SORT_UPDATE: function(e) {
            let {
                roles: t
            } = e;
            if (null != w && t.length !== w.length) return !1;
            w = t.map(e => z(e)).filter(_.Vq), P = !0, V()
        },
        GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function(e) {
            let {
                id: t,
                flag: n,
                allow: r
            } = e, i = z(t);
            if (null == i) return !1;
            let {
                permissions: l
            } = i;
            return K(i, {
                permissions: l = r ? d.WQ(l, n) : d.TF(l, n)
            })
        },
        GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function(e) {
            let {
                id: t,
                permissions: n
            } = e, r = z(t);
            return null != r && K(r, {
                permissions: n
            })
        },
        GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function(e) {
            let {
                id: t
            } = e, n = z(t);
            return null != n && K(n, {
                permissions: O.x3
            })
        },
        GUILD_SETTINGS_ROLES_UPDATE_NAME: function(e) {
            let {
                id: t,
                name: n
            } = e, r = z(t);
            return null != r && K(r, {
                name: n
            })
        },
        GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function(e) {
            let {
                id: t,
                description: n
            } = e, r = z(t);
            return null != r && K(r, {
                description: n
            })
        },
        GUILD_SETTINGS_ROLES_UPDATE_COLOR: function(e) {
            let {
                id: t,
                color: n
            } = e, r = 0 === n ? null : (0, u.Hl)(n), i = z(t);
            if (null == i) return !1;
            let l = M.get(t);
            return null != l && (l.currentStyle = "solid", l.styleColors.solid = {
                primary_color: n,
                secondary_color: null,
                tertiary_color: null
            }, M.set(t, N({}, l)), K(i, {
                color: n,
                colorString: r,
                colors: {
                    primary_color: n,
                    secondary_color: null,
                    tertiary_color: null
                },
                colorStrings: null != r ? {
                    primaryColor: r,
                    secondaryColor: null,
                    tertiaryColor: null
                } : null
            }))
        },
        GUILD_SETTINGS_ROLES_UPDATE_COLORS: function(e) {
            let {
                id: t,
                colors: n,
                currentStyle: r
            } = e, i = z(t);
            if (null == i) return !1;
            let l = (0, h.K3)(n),
                s = M.get(t);
            return null != s && (s.styleColors[r] = n, s.currentStyle = r, M.set(t, N({}, s)), K(i, {
                color: n.primary_color,
                colors: n,
                colorString: l.primaryColor,
                colorStrings: l
            }))
        },
        GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function(e) {
            let {
                id: t,
                hoist: n,
                mentionable: r
            } = e, i = z(t);
            return null != i && K(i, {
                hoist: n,
                mentionable: r
            })
        },
        GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function(e) {
            let {
                id: t,
                icon: n,
                unicodeEmoji: r
            } = e, i = z(t);
            return null != i && K(i, {
                icon: n,
                unicodeEmoji: r
            })
        },
        GUILD_SETTINGS_ROLE_SELECT: function(e) {
            let {
                role: t,
                searchQuery: n
            } = e;
            if (i = n, null != t) {
                if (null != z(t.id)) return void K(t, t);
                w = [...w, t], V()
            }
        },
        GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function(e) {
            var t;
            let {
                id: n,
                currentStyle: r
            } = e, i = z(n);
            if (null == i) return !1;
            let l = M.get(n);
            if (null == l) return !1;
            M.set(n, {
                currentStyle: r,
                styleColors: l.styleColors
            });
            let s = l.styleColors[r],
                a = (0, h.K3)(s);
            return K(i, {
                color: null != (t = s.primary_color) ? t : void 0,
                colors: s,
                colorString: a.primaryColor,
                colorStrings: a
            })
        },
        GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function(e) {
            let {
                roleId: t,
                roleConnectionConfigurations: n
            } = e, r = z(t);
            if (null == r) return !1;
            let i = L.get(r.id);
            if (c().isEqual(i, n)) return !1;
            k.set(r.id, n), L.set(r.id, n), V()
        },
        GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function(e) {
            let {
                roleId: t,
                roleConnectionConfigurations: n
            } = e, r = z(t);
            if (null == r) return !1;
            D = !0, G.add(r.id), k.set(r.id, n), V()
        },
        GUILD_SETTINGS_CLOSE: function() {
            r = null, R = w = [], L.clear(), I.clear(), M.clear(), k.clear(), G = new Set, T = !1, P = !1, D = !1, C = y.XlH.CLOSED
        },
        GUILD_ROLE_CREATE: W,
        GUILD_ROLE_UPDATE: W,
        GUILD_ROLE_DELETE: function(e) {
            return G.has(e.roleId) && (G.delete(e.roleId), L.delete(e.roleId), k.delete(e.roleId), D = !1), W(e)
        },
        GUILD_SETTINGS_ROLES_SUBMITTING: function() {
            C = y.XlH.SUBMITTING
        },
        GUILD_SETTINGS_ROLES_SAVE_FAIL: function(e) {
            let {
                message: t
            } = e;
            C = y.XlH.OPEN, l = t
        },
        GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function() {
            F(!1)
        },
        GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function(e) {
            let {
                guildId: t
            } = e;
            if (null == r || t !== r.id) return !1;
            r = (0, p.hZ)(r, "features", new Set([...r.features, y.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]))
        },
        GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function(e) {
            let {
                guildId: t
            } = e;
            if (null == r || t !== r.id) return !1;
            r = (0, p.hZ)(r, "features", new Set([...r.features, y.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]))
        }
    }),
    J = X