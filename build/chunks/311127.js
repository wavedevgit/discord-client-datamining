/** chunk id: 311127, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(136722),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    c = n(260509),
    u = n(34457),
    d = n(696451),
    p = n(317525),
    m = n(71393),
    f = n(287809),
    g = n(488926),
    _ = n(661191),
    h = n(529942),
    b = n(164956),
    y = n(209700),
    A = n(652215),
    v = n(985018),
    O = n(110927);

function x(e) {
    let {
        guildId: t
    } = e, n = (0, s.bG)([f.default], () => f.default.getCurrentUser()), x = (0, s.bG)([m.A], () => m.A.getGuild(t)), j = (0, s.bG)([p.A], () => p.A.getRolesSnapshot(t)), C = (0, s.bG)([p.A], () => p.A.getSortedRoles(t)), {
        impersonateType: I,
        viewingRoles: S
    } = (0, s.cf)([b.A], () => ({
        impersonateType: b.A.getImpersonateType(t),
        viewingRoles: b.A.getViewingRoles(t)
    })), T = I === y._.SERVER_SHOP, N = (0, s.bG)([d.Ay], () => null != n ? d.Ay.getTrueMember(t, n.id) : null), P = null != x ? j[(0, c.af)(x)] : null, [w, R] = i.useState(() => {
        let e = null == S ? [] : _.default.keys(S);
        return null != P && e.push(P.id), e
    }), D = i.useRef(x);
    i.useEffect(() => {
        let e = {},
            t = D.current;
        if (null != t && null != I) {
            for (let t of w) {
                let n = j[t];
                null != n && (e[t] = n)
            }(0, h.IA)(t.id, {
                type: I,
                roles: e
            })
        }
    }, [w, I, j]);
    let L = null != x && null != n && null != N ? C.find(e => N.roles.includes(e.id)) : void 0,
        M = i.useMemo(() => null != x && null != n ? C.filter(e => !(0, u.Oy)(e)).filter(e => {
            var t;
            return !T || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null
        }).filter(e => (null == L ? void 0 : L.id) === e.id || g.wO(x, n.id, L, e)) : [], [x, n, T, L, C]),
        k = i.useMemo(() => {
            let e = Array.from(M).map(e => ({
                leading: E(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1
            }));
            return null != x && null != P && e.push({
                leading: E(P),
                value: P.id,
                label: P.name,
                id: P.id.toString(),
                disabled: !0
            }), e
        }, [M, x, P]);
    if (null == n || null == x || null == N) return null;
    let U = {};
    return (N.roles.forEach(e => {
        let t = j[e];
        null != t && (U[t.id] = t)
    }), l.zy(g.aH({
        forceRoles: U,
        context: x
    }), l.kg(A.xBc.MANAGE_GUILD, A.xBc.MANAGE_ROLES)) || (0, c.bM)(x, n)) ? (0, r.jsx)("div", {
        className: O.kL,
        children: (0, r.jsxs)(o.iS7, {
            selectionMode: "multiple",
            options: k,
            value: w,
            onSelectionChange: e => {
                R(e)
            },
            children: [(0, r.jsx)(o.a32, {
                hideTags: !0,
                autoFocus: !0,
                placeholder: v.intl.string(v.t.Sojqsr)
            }), (0, r.jsx)(o.X2W, {
                renderListItem: e => (0, r.jsx)(a.c$x, function(e) {
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
                }({}, e))
            })]
        })
    }) : (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        children: v.intl.string(v.t.MNSTbY)
    })
}

function E(e) {
    return () => {
        var t;
        return (0, r.jsx)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("circle", {
                cx: "6",
                cy: "6",
                r: "6",
                fill: null != (t = e.colorString) ? t : "currentColor"
            })
        })
    }
}