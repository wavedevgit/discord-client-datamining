/** Chunk was on web.js **/
/** chunk id: 14702, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    O: () => C
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(575593),
    s = n(311907),
    o = n(582754),
    l = n(397927),
    c = n(736653),
    u = n(226540),
    d = n(227),
    f = n(262737),
    p = n(590180),
    _ = n(442759),
    h = n(181774),
    m = n(628856),
    g = n(132198),
    E = n(929283),
    y = n(190016),
    b = n(180171),
    O = n(989099),
    v = n(191761);
let A = e => {
        let {
            avatarDecoration: t,
            avatarSize: n
        } = e, i = (0, c.Ay)(), a = (0, o.qB)(i) ? O : b;
        return (0, r.jsx)(E.i, {
            item: t,
            avatarSize: n,
            isHighlighted: !1,
            avatarPlaceholderSrc: a,
            className: y.M
        })
    },
    I = e => {
        var t;
        let {
            profileEffect: n,
            fallbackLabel: a
        } = e, s = (0, f.V)(null == n ? void 0 : n.skuId), {
            accessibilityLabel: o,
            thumbnailPreviewSrc: l,
            title: c
        } = null != (t = null == s ? void 0 : s.config) ? t : {}, u = i.useMemo(() => (0, h.Rc)(l), [l]);
        return null == s ? a : (0, r.jsxs)("div", {
            className: y.YS,
            children: [(0, r.jsx)("img", {
                src: v,
                alt: o,
                className: y.Zp
            }), (0, r.jsx)("img", {
                className: y.Hm,
                src: u,
                alt: c
            })]
        })
    },
    S = e => {
        let {
            nameplate: t,
            fallbackLabel: n
        } = e, [a, s] = i.useState(!1), o = i.useCallback(() => s(!0), []), l = i.useCallback(() => s(!1), []);
        return null == t ? n : (0, r.jsx)("div", {
            className: y.rz,
            onMouseEnter: o,
            onMouseLeave: l,
            children: (0, r.jsx)(d.A, {
                nameplate: (0, m.D)(t),
                hovered: a,
                placement: u.u.MINI_PREVIEW
            })
        })
    },
    T = e => {
        let {
            product: t,
            fallbackLabel: n
        } = e, {
            firstAvatarDecoration: i,
            firstProfileEffect: a,
            firstNameplate: s
        } = (0, _.f5)(t);
        return null == i && null == a && null == s ? n : (0, r.jsxs)("div", {
            className: y.WJ,
            children: [null != a && (0, r.jsx)("div", {
                className: y.zh,
                children: (0, r.jsx)(I, {
                    profileEffect: a,
                    fallbackLabel: null
                })
            }), null != s && (0, r.jsx)("div", {
                className: y.sY,
                children: (0, r.jsx)(S, {
                    nameplate: s,
                    fallbackLabel: null
                })
            }), null != i && (0, r.jsx)("div", {
                className: y.kf,
                children: (0, r.jsx)(A, {
                    avatarDecoration: i,
                    avatarSize: l._3J.SIZE_24
                })
            })]
        })
    },
    C = e => {
        var t;
        let {
            product: n,
            sku: i,
            fallbackLabel: o
        } = e, c = null == i ? void 0 : i.id, u = (0, s.bG)([p.A], () => p.A.getProduct(null == i ? void 0 : i.id)), d = null != n ? n : u;
        if ((null == d ? void 0 : d.type) === a.R.BUNDLE) return (0, r.jsx)(T, {
            product: d,
            fallbackLabel: o
        });
        let [f] = null != (t = null == d ? void 0 : d.items) ? t : [];
        return void 0 !== c && c in g.m ? g.m[c].render({
            animationState: "on_hover",
            className: y.Vr
        }) : (null == f ? void 0 : f.type) === a.R.AVATAR_DECORATION ? (0, r.jsx)(A, {
            avatarDecoration: f,
            avatarSize: l._3J.SIZE_40
        }) : (null == f ? void 0 : f.type) === a.R.PROFILE_EFFECT ? (0, r.jsx)(I, {
            profileEffect: f,
            fallbackLabel: o
        }) : (null == f ? void 0 : f.type) === a.R.NAMEPLATE ? (0, r.jsx)(S, {
            nameplate: f,
            fallbackLabel: o
        }) : o
    }