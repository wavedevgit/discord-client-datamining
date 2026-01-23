/** Chunk was on 64228 **/
/** chunk id: 280645, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(638769), n(896048);
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(696451),
    s = n(317525),
    o = n(71393),
    a = n(576705),
    c = n(183555),
    d = n(1659),
    u = n(166005),
    p = n(900179),
    m = n(518477),
    f = n(652215),
    A = n(985018);

function x(e) {
    var t, n;
    let {
        userId: x,
        guildId: j
    } = e, h = function(e, t) {
        if (null == e) return {};
        var n, l, i, r = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
            return r
        }
        if (r = function(e, t) {
                if (null == e) return {};
                var n, l, i = {},
                    r = Object.getOwnPropertyNames(e);
                for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
        return r
    }(e, ["userId", "guildId"]), {
        trackUserProfileAction: g
    } = (0, c.NJ)(), v = (0, i.bG)([o.A], () => o.A.getGuild(j)), b = (0, i.bG)([r.Ay], () => r.Ay.getMember(j, x)), I = null == b ? void 0 : b.roles, y = (0, i.yK)([s.A], () => s.A.getManyRoles(j, null != I ? I : []).sort(d.m), [I, j]), [_] = (0, i.yK)([a.A], () => [a.A.can(f.xBc.MANAGE_ROLES, v), a.A.getGuildVersion(j)]);
    if (null == v) return null;
    let O = _ && null != b;
    return 0 !== y.length || O ? (0, l.jsx)(p.A, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = l
            })
        }
        return e
    }({
        heading: A.intl.string(A.t["LPJmL/"]),
        scrollTargetId: m.bk.ROLES
    }, h), n = n = {
        children: (0, l.jsx)(u.Y, {
            userId: x,
            guild: v,
            roles: y,
            onAddRole: () => {
                g({
                    action: "ADD_ROLE"
                })
            },
            onRemoveRole: () => {
                g({
                    action: "REMOVE_ROLE"
                })
            },
            allowEditing: !0
        })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)) : null
}