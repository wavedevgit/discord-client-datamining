/** chunk id: 190269, original params: e,t,r (module,exports,require) **/
r.d(t, {
    B: () => S
}), r(228524);
var n = r(627968),
    a = r(64700),
    o = r(397927),
    i = r(639289),
    l = r(203982),
    s = r(573359),
    c = r(28003),
    d = r(659746),
    p = r(4471),
    u = r(380083),
    b = r(788868),
    m = r(652215),
    _ = r(985018),
    y = r(401517);

function g(e) {
    let {
        onClose: t
    } = e, r = (0, n.jsx)(o.Text, {
        className: y.h,
        variant: "text-md/normal",
        children: _.intl.string(_.t.FCsTCk)
    });
    return (0, n.jsx)(p.A, {
        type: d.Ay.Types.PREMIUM_ACTIVATED,
        text: r,
        buttonText: _.intl.string(_.t.TkTvBz),
        hideClose: !1,
        onClose: t
    })
}

function f(e) {
    let {
        onClose: t
    } = e;
    return (0, n.jsx)(u.Ay, {
        planId: b.gD.PREMIUM_MONTH_TIER_0,
        onClose: t
    })
}
let S = e => {
    let {
        transitionState: t,
        onClose: r,
        premiumType: d
    } = e, p = d === b.PremiumTypes.TIER_0, u = a.useCallback(() => {
        l._.dispatch(m.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), s.A.isDisplayingWowMomentConfirmation && s.A.isAnimated ? setTimeout(() => {
            r()
        }, i.K) : r()
    }, [r]);
    return (0, n.jsxs)(o.EOs, {
        "data-migration-pending": !0,
        className: y.z,
        transitionState: t,
        parentComponent: "ResubscribeSuccessStep",
        children: [(0, n.jsx)(c.A, {
            onClose: u,
            upgradeToPremiumType: d
        }), (0, n.jsx)(o.$mQ, {
            "data-migration-pending": !0,
            children: (0, n.jsx)(p ? f : g, {
                onClose: u
            })
        })]
    })
}