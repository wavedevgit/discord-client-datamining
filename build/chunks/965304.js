/** Chunk was on 3911 **/
/** chunk id: 965304, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A,
    e: () => m
}), n(321073), n(896048);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    o = n(554146),
    a = n(827734),
    d = n(397927),
    u = n(404374),
    c = n(379848),
    h = n(40185),
    g = n(552736),
    p = n(422936),
    f = n(234419),
    C = n(603488),
    v = n(105390),
    y = n(49999),
    b = n(788868),
    S = n(738386);

function m() {
    let e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, f.V)(),
        r = (0, p.O)(),
        l = (0, h.cg)(),
        a = null != (0, g.A)(),
        d = l || a,
        u = (null == n ? void 0 : n.trial_id) === b.Dw,
        S = [];
    d && S.push(o.M.BOGO_2025_NITRO_TAB_BADGE);
    let [m, A] = (0, c.kn)(S, void 0, !0);
    return s.useEffect(() => {
        !0 === t && m === o.M.BOGO_2025_NITRO_TAB_BADGE && A(y.i.AUTO_DISMISS)
    }, [A, t, m]), d ? e = (0, i.jsx)(C.A, {}) : null != r ? e = (0, i.jsx)(v.fY, {
        isTabSelected: t,
        userDiscount: r,
        includesAmountOff: !1
    }) : null == n || u || (e = (0, i.jsx)(v.Ag, {
        isTabSelected: t,
        trialOffer: n
    })), e
}

function A(e) {
    var t, n;
    let {
        decoration: s,
        label: r,
        isSelected: o
    } = e, c = (0, h.cg)(), g = null != (t = null != (n = m(o)) ? n : s) ? t : (0, i.jsx)(d.tvc, {
        size: "sm",
        color: o ? a.A.unsafe_rawColors.WHITE.css : u.k0.PREMIUM_TIER_2
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: l()(S.gj, {
                [S.wH]: o && !c
            }),
            children: [r, g]
        }), (0, i.jsx)("div", {
            className: l()(S.Tp, {
                [S._I]: !c && o
            })
        })]
    })
}