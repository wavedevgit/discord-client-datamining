/** Chunk was on 72668 **/
/** chunk id: 404128, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => j
});
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    l = n(311907),
    o = n(990078),
    s = n(397927),
    d = n(29086),
    c = n(581781),
    u = n(71393),
    b = n(287809),
    f = n(685073),
    g = n(514661),
    p = n(985018),
    y = n(583970),
    m = n(581298);

function j(e) {
    var t, n, a, j;
    let {
        guildId: O
    } = e, _ = function(e, t) {
        if (null == e) return {};
        var n, r, a, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (a = 0, n = Reflect.ownKeys(e); a < n.length; a++) r = n[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                return a
            }(e, t), Object.getOwnPropertySymbols)
            for (a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) r = n[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["guildId"]), h = (0, l.bG)([u.A], () => u.A.getGuild(O)), v = (0, l.bG)([b.default], () => {
        var e;
        let t = null == (e = b.default.getCurrentUser()) ? void 0 : e.primaryGuild;
        return (null == t ? void 0 : t.identityGuildId) === O && (null == t ? void 0 : t.identityEnabled) === !0
    }, [O]), {
        isAdopting: x,
        onAdoptTag: C,
        onEditProfile: w
    } = (0, g.A)(O, _.onClose);
    if (null != h && (0, f.Rg)(h) && (0, f.q0)(h)) return (0, r.jsxs)(s.EOs, (a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r
            })
        }
        return e
    }({
        "data-migration-pending": !0,
        className: m.yl,
        size: s.rIJ.DYNAMIC
    }, _), j = j = {
        parentComponent: "GuildTagAdoptModal",
        children: [(0, r.jsxs)(s.$mQ, {
            "data-migration-pending": !0,
            className: m.jE,
            scrollbarType: "none",
            children: [(0, r.jsx)("div", {
                className: m.X6,
                children: (0, r.jsxs)("div", {
                    className: m.kb,
                    children: [(0, r.jsxs)("div", {
                        className: m.N1,
                        children: [(0, r.jsx)(s.Heading, {
                            variant: "heading-lg/bold",
                            children: p.intl.string(y.default.OvKPi0)
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: p.intl.string(y.default.kHxfDw)
                        })]
                    }), (0, r.jsx)(c.A, {
                        className: m._S,
                        guildId: h.id,
                        guildName: h.name,
                        guildIcon: h.icon,
                        guildIconSize: 32,
                        guildTag: h.profile.tag,
                        guildBadge: null != (t = h.profile.badge) ? t : ""
                    }), (0, r.jsxs)("div", {
                        className: m.UD,
                        children: [(0, r.jsx)(o.m, {
                            text: p.intl.string(y.default.WlENZt),
                            shouldShow: v,
                            children: (0, r.jsx)(s.Button, {
                                variant: "primary",
                                text: p.intl.string(p.t.jwEaiX),
                                fullWidth: !0,
                                onClick: C,
                                loading: x,
                                disabled: v
                            })
                        }), (0, r.jsx)(s.Button, {
                            variant: "secondary",
                            text: p.intl.string(p.t.s5vZlQ),
                            fullWidth: !0,
                            onClick: w
                        })]
                    })]
                })
            }), (0, r.jsx)("div", {
                className: i()(m.X6, m.pG),
                children: (0, r.jsx)(d.A, {
                    className: m.uJ,
                    guildId: h.id,
                    tag: h.profile.tag,
                    badge: null != (n = h.profile.badge) ? n : ""
                })
            })]
        }), (0, r.jsx)(s.s_y, {
            "data-migration-pending": !0,
            className: m.VN,
            onClick: _.onClose
        })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(j)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(j)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(j, e))
    }), a))
}