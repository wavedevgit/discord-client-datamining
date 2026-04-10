/** chunk id: 532423 params = (module,exports,require) **/
n.d(e, {
    A: () => T
});
var i = n(627968),
    l = n(64700),
    r = n(877624),
    s = n(554146),
    a = n(367727),
    o = n(954571),
    c = n(549996),
    d = n(498470),
    u = n(635995),
    E = n(652215),
    _ = n(49999);

function T() {
    let t = (0, c.c)(r.C.NAGBAR),
        e = t?.properties.properties.oneofKind === "nagbar" ? t.properties.properties.nagbar : null,
        n = t?.promotionId,
        T = l.useCallback(() => {
            null != n && (0, a.qr)(s.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, {
                dismissAction: _.i.USER_DISMISS
            })
        }, [n]),
        A = l.useCallback(() => {
            o.default.track(E.HAw.APP_NOTICE_CLOSED, {
                notice_type: E.kqX.PREMIUM_MARKETING_NAGBAR
            }), T()
        }, [T]);
    if (null == e) return null;
    let I = (0, d.h)({
        buttonAction: e.ctaAction,
        onClose: T
    });
    return (0, i.jsxs)(u.T0, {
        onClick: A,
        children: [(0, i.jsx)(u.In, {
            children: e.body
        }), "" !== e.ctaLabel && (0, i.jsx)(u.fY, {
            text: e.ctaLabel,
            onClick: () => {
                o.default.track(E.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: E.kqX.PREMIUM_MARKETING_NAGBAR
                }), I()
            }
        })]
    })
}