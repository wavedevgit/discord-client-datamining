/** chunk id: 532423 params = (module,exports,require) **/
n.d(e, {
    A: () => T
});
var i = n(627968),
    l = n(64700),
    r = n(877624),
    s = n(554146),
    a = n(397927),
    o = n(367727),
    c = n(549996),
    d = n(498470),
    u = n(652215),
    _ = n(49999),
    E = n(589574);

function T() {
    let t = (0, c.c)(r.C.NAGBAR),
        e = t?.properties.properties.oneofKind === "nagbar" ? t.properties.properties.nagbar : null,
        n = t?.promotionId,
        T = l.useCallback(() => {
            null != n && (0, o.qr)(s.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, {
                dismissAction: _.i.USER_DISMISS
            })
        }, [n]);
    if (null == e) return null;
    let A = (0, d.h)({
        buttonAction: e.ctaAction,
        onClose: T
    });
    return (0, i.jsxs)(a.$Td, {
        color: a.Hv$.PREMIUM_TIER_2,
        children: [(0, i.jsx)(a.PMB, {
            noticeType: u.kqX.PREMIUM_MARKETING_NAGBAR,
            onClick: T
        }), (0, i.jsx)(a.tvc, {
            size: "md",
            color: "currentColor",
            className: E.P
        }), e.body, "" !== e.ctaLabel && (0, i.jsx)(a.Z_L, {
            noticeType: u.kqX.PREMIUM_MARKETING_NAGBAR,
            onClick: A,
            children: e.ctaLabel
        })]
    })
}