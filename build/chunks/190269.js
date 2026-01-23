/** Chunk was on 5241 **/
/** chunk id: 190269, original params: e,t,r (module,exports,require) **/
r.d(t, {
    B: () => f
}), r(228524);
var n = r(627968),
    a = r(64700),
    i = r(397927),
    o = r(639289),
    c = r(203982),
    l = r(573359),
    s = r(28003),
    d = r(659746),
    b = r(4471),
    _ = r(380083),
    p = r(788868),
    u = r(652215),
    m = r(985018),
    y = r(401517);

function g(e) {
    let {
        onClose: t
    } = e, r = (0, n.jsx)(i.Text, {
        className: y.h,
        variant: "text-md/normal",
        children: m.intl.string(m.t.FCsTCk)
    });
    return (0, n.jsx)(b.A, {
        type: d.Ay.Types.PREMIUM_ACTIVATED,
        text: r,
        buttonText: m.intl.string(m.t.TkTvBz),
        hideClose: !1,
        onClose: t
    })
}

function S(e) {
    let {
        onClose: t
    } = e;
    return (0, n.jsx)(_.Ay, {
        planId: p.gD.PREMIUM_MONTH_TIER_0,
        onClose: t
    })
}
let f = e => {
    let {
        transitionState: t,
        onClose: r,
        premiumType: d
    } = e, b = d === p.PremiumTypes.TIER_0, _ = a.useCallback(() => {
        c._.dispatch(u.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), l.A.isDisplayingWowMomentConfirmation && l.A.isAnimated ? setTimeout(() => {
            r()
        }, o.K) : r()
    }, [r]);
    return (0, n.jsxs)(i.EOs, {
        "data-migration-pending": !0,
        className: y.z,
        transitionState: t,
        parentComponent: "ResubscribeSuccessStep",
        children: [(0, n.jsx)(s.A, {
            onClose: _,
            upgradeToPremiumType: d
        }), (0, n.jsx)(i.$mQ, {
            "data-migration-pending": !0,
            children: (0, n.jsx)(b ? S : g, {
                onClose: _
            })
        })]
    })
}