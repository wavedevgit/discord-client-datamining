/** Chunk was on web.js **/
/** chunk id: 311127, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(136722),
    s = n(311907),
    o = n(389723),
    l = n(332661),
    c = n(397927),
    u = n(260509),
    d = n(34457),
    f = n(696451),
    p = n(317525),
    _ = n(71393),
    h = n(287809),
    m = n(488926),
    g = n(661191),
    E = n(529942),
    y = n(164956),
    b = n(209700),
    O = n(652215),
    v = n(985018),
    A = n(110927);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            I(e, t, n[t])
        })
    }
    return e
}

function T(e) {
    let {
        guildId: t
    } = e, n = (0, s.bG)([h.default], () => h.default.getCurrentUser()), I = (0, s.bG)([_.A], () => _.A.getGuild(t)), T = (0, s.bG)([p.A], () => p.A.getRolesSnapshot(t)), N = (0, s.bG)([p.A], () => p.A.getSortedRoles(t)), {
        impersonateType: w,
        viewingRoles: R
    } = (0, s.cf)([y.A], () => ({
        impersonateType: y.A.getImpersonateType(t),
        viewingRoles: y.A.getViewingRoles(t)
    })), P = w === b._.SERVER_SHOP, D = (0, s.bG)([f.Ay], () => null != n ? f.Ay.getTrueMember(t, n.id) : null), x = null != I ? T[(0, u.af)(I)] : null, [L, j] = i.useState(() => {
        let e = null == R ? [] : g.default.keys(R);
        return null != x && e.push(x.id), e
    }), M = i.useRef(I);
    i.useEffect(() => {
        let e = {},
            t = M.current;
        if (null != t && null != w) {
            for (let t of L) {
                let n = T[t];
                null != n && (e[t] = n)
            }(0, E.IA)(t.id, {
                type: w,
                roles: e
            })
        }
    }, [L, w, T]);
    let k = null != I && null != n && null != D ? N.find(e => D.roles.includes(e.id)) : void 0,
        U = i.useMemo(() => null != I && null != n ? N.filter(e => !(0, d.Oy)(e)).filter(e => {
            var t;
            return !P || (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null
        }).filter(e => (null == k ? void 0 : k.id) === e.id || m.wO(I, n.id, k, e)) : [], [I, n, P, k, N]),
        G = i.useMemo(() => {
            let e = Array.from(U).map(e => ({
                leading: C(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1
            }));
            return null != I && null != x && e.push({
                leading: C(x),
                value: x.id,
                label: x.name,
                id: x.id.toString(),
                disabled: !0
            }), e
        }, [U, I, x]);
    if (null == n || null == I || null == D) return null;
    let V = {};
    return (D.roles.forEach(e => {
        let t = T[e];
        null != t && (V[t.id] = t)
    }), a.zy(m.aH({
        forceRoles: V,
        context: I
    }), a.kg(O.xBc.MANAGE_GUILD, O.xBc.MANAGE_ROLES)) || (0, u.bM)(I, n)) ? (0, r.jsx)("div", {
        className: A.kL,
        children: (0, r.jsxs)(o.iS, {
            selectionMode: "multiple",
            options: G,
            value: L,
            onSelectionChange: e => {
                j(e)
            },
            children: [(0, r.jsx)(o.a3, {
                hideTags: !0,
                autoFocus: !0,
                placeholder: v.intl.string(v.t.Sojqsr)
            }), (0, r.jsx)(o.X2, {
                renderListItem: e => (0, r.jsx)(l.c, S({}, e))
            })]
        })
    }) : (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        children: v.intl.string(v.t.MNSTbY)
    })
}

function C(e) {
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