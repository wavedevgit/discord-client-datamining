/** Chunk was on web.js **/
/** chunk id: 57991, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => M
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(827734),
    c = n(582754),
    u = n(397927),
    d = n(404374),
    f = n(509536),
    p = n(496885),
    _ = n(544028),
    h = n(696451),
    m = n(287809),
    g = n(816166),
    E = n(813098),
    y = n(473145),
    b = n(426983),
    O = n(176128),
    v = n(981883),
    A = n(652215),
    I = n(985018),
    S = n(106967);

function T(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            T(e, t, n[t])
        })
    }
    return e
}

function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function w(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function R(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = P(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function P(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let D = {
    [b._.STAFF]: {
        IconComponent: u.VaJ,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css
    },
    [b._.VERIFIED_AND_PARTNERED]: {
        IconComponent: u.Uzd,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css
    },
    [b._.VERIFIED]: {
        IconComponent: u.Uzd,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css
    },
    [b._.PARTNERED]: {
        IconComponent: (0, u.kHD)(g.A),
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.A.unsafe_rawColors.BRAND_500.css
    },
    [b._.COMMUNITY]: {
        IconComponent: u.fAJ,
        foregroundDarkColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: d.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2
    },
    [b._.DISCOVERABLE]: {
        IconComponent: u.L_e,
        foregroundDarkColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: d.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2
    },
    [b._.NONE]: {}
};

function L(e) {
    let {
        guildTraits: t
    } = e;
    return (0, r.jsxs)("div", {
        className: S.V8,
        children: [(0, r.jsxs)("div", {
            className: o()(S.f, S.N5),
            children: [(0, r.jsx)(E.A, {
                width: 18,
                height: 18,
                className: S.F8
            }), (0, r.jsx)(u.Text, {
                variant: "text-xs/semibold",
                color: "always-white",
                children: y.gb(t.premiumTier)
            })]
        }), (0, r.jsx)("div", {
            className: S.f,
            children: (0, r.jsx)(u.Text, {
                variant: "text-xs/semibold",
                color: "always-white",
                children: I.intl.format(I.t["dR/SVH"], {
                    count: t.premiumSubscriberCount
                })
            })
        })]
    })
}

function x(e) {
    let {
        badgeType: t,
        guildTraits: n
    } = e, {
        tooltipTitle: i,
        tooltipSubtitle: a,
        tooltipDescription: o
    } = (0, v.V)(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: S.Rf,
            children: [(0, r.jsx)(u.Text, {
                color: "interactive-text-active",
                variant: "text-xs/bold",
                children: i
            }), null != a ? (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: a
            }) : null, null != o ? (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: o
            }) : null]
        }), n.premium ? (0, r.jsx)(L, {
            guildTraits: n
        }) : null]
    })
}

function M(e) {
    var t;
    let n, a, {
            guild: o,
            tooltipColor: l = u.STz.Colors.BRAND,
            tooltipPosition: d,
            className: g,
            flowerStarClassName: E,
            iconClassName: y,
            badgeStrokeColor: v,
            badgeColor: I,
            disableBoostClick: T,
            "aria-label": N = !1
        } = e,
        P = null != (t = R(e, ["guild", "tooltipColor", "tooltipPosition", "className", "flowerStarClassName", "iconClassName", "badgeStrokeColor", "badgeColor", "disableBoostClick", "aria-label"]).size) ? t : 18,
        L = (0, s.bG)([m.default, h.Ay], () => {
            let e = m.default.getCurrentUser();
            return h.Ay.isMember(null == o ? void 0 : o.id, null == e ? void 0 : e.id)
        }),
        M = (0, s.bG)([_.A], () => _.A.theme),
        j = (0, O.Jp)(o),
        k = (0, b.K)(j),
        U = i.useMemo(() => j.premium && L && !T, [T, j.premium, L]),
        G = i.useCallback(e => {
            U && (e.stopPropagation(), e.preventDefault(), (0, f.K)({
                guildId: o.id,
                location: {
                    section: A.JJy.GUILD_HEADER,
                    object: A.ZSU.BOOST_GEM_ICON
                }
            }))
        }, [U, o.id]);
    if (k === b._.NONE) return null;
    let {
        IconComponent: F,
        backgroundDarkColor: V,
        backgroundLightColor: B,
        foregroundDarkColor: H,
        foregroundLightColor: Y,
        premiumBackgroundColor: W,
        premiumForegroundColor: K,
        sizeAdjustment: z
    } = D[k];
    if (null == F) return null;
    j.premium && (n = K, a = W);
    let q = (0, c.Mw)(M) ? H : Y,
        Z = (0, c.Mw)(M) ? V : B;
    n = null != n ? n : q, a = null != a ? a : Z;
    let Q = Math.floor(.75 * P) - (null != z ? z : 0);
    return (0, r.jsx)(u.STz, {
        color: l,
        position: d,
        "aria-label": N,
        text: (0, r.jsx)(x, {
            badgeType: k,
            guildTraits: j
        }),
        tooltipContentClassName: S.Hj,
        children: e => (0, r.jsx)(u.DUT, {
            onClick: G,
            tabIndex: U ? 0 : -1,
            children: (0, r.jsx)(p.A, w(C({}, e), {
                className: g,
                flowerStarClassName: E,
                allowFullSizedIcon: !0,
                color: null != a ? a : I,
                stroke: v,
                size: P,
                children: (0, r.jsx)(F, {
                    size: "custom",
                    width: Q,
                    height: Q,
                    className: y,
                    color: null != n ? n : "currentColor"
                })
            }))
        })
    })
}