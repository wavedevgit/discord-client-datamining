/** chunk id: 949302 params = (module,exports,require) **/
n.d(t, {
    A: () => R,
    e: () => j
}), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    o = n(311907),
    a = n(554146),
    c = n(827734),
    d = n(397927),
    u = n(404374),
    h = n(826673),
    m = n(932001),
    p = n(40185),
    E = n(552736),
    S = n(422936),
    _ = n(234419),
    g = n(412260),
    x = n(852218),
    f = n(603488),
    N = n(282077),
    v = n(105390),
    A = n(49999),
    C = n(788868),
    T = n(985018),
    b = n(292127);

function j() {
    let e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, _.V)(),
        r = (0, S.O)(),
        l = (0, p.cg)(),
        c = null != (0, E.A)(),
        d = l || c,
        u = n?.trial_id === C.Dw,
        b = [];
    d && b.push(a.M.BOGO_2025_NITRO_TAB_BADGE);
    let [j, R] = (0, m.kn)(b, void 0, !0), O = (0, o.bG)([g.A], () => {
        let e = g.A.getPromotionByTypeAndKey(x.pt.MARKETING_MOMENT, x.zw);
        return null == e || e.endDate < new Date ? null : e
    }), [I, P] = (0, m.Cc)(null != O ? a.M.PREMIUM_MARKETING_MOMENT_USER_SETTINGS_OFFER_BADGE : null, O?.id ?? "", void 0, !0);
    return s.useEffect(() => {
        !0 === t && (j === a.M.BOGO_2025_NITRO_TAB_BADGE && R(A.i.AUTO_DISMISS), null != I && P(A.i.AUTO_DISMISS))
    }, [R, P, t, j, I]), null != O ? e = (0, i.jsx)(N.A, {
        componentId: "nitro-settings-offer-badge",
        badgeCopy: T.intl.string(T.t.OS9KPu),
        acknowledgedBadgeCopy: T.intl.string(T.t.OS9KPu),
        isDismissed: (0, h.u$)(a.M.PREMIUM_MARKETING_MOMENT_USER_SETTINGS_OFFER_BADGE, O.id).isDismissed
    }) : d ? e = (0, i.jsx)(f.A, {}) : null != r ? e = (0, i.jsx)(v.fY, {
        isTabSelected: t,
        userDiscount: r,
        includesAmountOff: !1
    }) : null == n || u || (e = (0, i.jsx)(v.Ag, {
        isTabSelected: t,
        trialOffer: n
    })), e
}

function R(e) {
    let {
        decoration: t,
        label: n,
        isSelected: s
    } = e, r = (0, p.cg)(), o = j(s) ?? t ?? (0, i.jsx)(d.tvc, {
        size: "sm",
        color: s ? c.A.unsafe_rawColors.WHITE.css : u.k0.PREMIUM_TIER_2
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: l()(b.gj, {
                [b.wH]: s && !r
            }),
            children: [n, o]
        }), (0, i.jsx)("div", {
            className: l()(b.Tp, {
                [b._I]: !r && s
            })
        })]
    })
}