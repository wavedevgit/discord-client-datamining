/** chunk id: 965304, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O,
    e: () => S
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
    p = n(552736),
    g = n(422936),
    f = n(234419),
    C = n(603488),
    y = n(105390),
    v = n(49999),
    b = n(788868),
    m = n(738386);

function S() {
    let e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, f.V)(),
        r = (0, g.O)(),
        l = (0, h.cg)(),
        a = null != (0, p.A)(),
        d = l || a,
        u = (null == n ? void 0 : n.trial_id) === b.Dw,
        m = [];
    d && m.push(o.M.BOGO_2025_NITRO_TAB_BADGE);
    let [S, O] = (0, c.kn)(m, void 0, !0);
    return s.useEffect(() => {
        !0 === t && S === o.M.BOGO_2025_NITRO_TAB_BADGE && O(v.i.AUTO_DISMISS)
    }, [O, t, S]), d ? e = (0, i.jsx)(C.A, {}) : null != r ? e = (0, i.jsx)(y.fY, {
        isTabSelected: t,
        userDiscount: r,
        includesAmountOff: !1
    }) : null == n || u || (e = (0, i.jsx)(y.Ag, {
        isTabSelected: t,
        trialOffer: n
    })), e
}

function O(e) {
    var t, n;
    let {
        decoration: s,
        label: r,
        isSelected: o
    } = e, c = (0, h.cg)(), p = null != (t = null != (n = S(o)) ? n : s) ? t : (0, i.jsx)(d.tvc, {
        size: "sm",
        color: o ? a.A.unsafe_rawColors.WHITE.css : u.k0.PREMIUM_TIER_2
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: l()(m.gj, {
                [m.wH]: o && !c
            }),
            children: [r, p]
        }), (0, i.jsx)("div", {
            className: l()(m.Tp, {
                [m._I]: !c && o
            })
        })]
    })
}