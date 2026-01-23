/** Chunk was on web.js **/
/** chunk id: 115980, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => P,
    HG: () => C,
    OH: () => N,
    ac: () => w
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(384904),
    l = n(974544),
    c = n(971105),
    u = n(767375),
    d = n(459793),
    f = n(195043),
    p = n(351906),
    _ = n(287809),
    h = n(615405),
    m = n(295405),
    g = n(166403),
    E = n(773669),
    y = n(780964),
    b = n(840065),
    O = n(531525),
    v = n(652215),
    A = n(985018),
    I = n(231182);

function S() {
    return (0, r.jsx)("div", {
        className: I.oE,
        children: (0, r.jsx)(s.y$y, {})
    })
}

function T() {
    (0, b.openUserSettings)(y.X.GIFT_PANEL, {
        section: v.nc_.INVENTORY
    })
}

function C(e) {
    let {
        showHeader: t = !1
    } = e, n = (0, a.bG)([h.A], () => h.A.isSyncing), s = (0, a.bG)([m.A], () => m.A.paymentSources), l = (0, a.bG)([m.A], () => m.A.defaultPaymentSourceId), c = (0, a.bG)([E.default], () => E.default.locale), d = (0, a.bG)([g.A], () => g.A.getPremiumTypeSubscription()), f = (0, a.bG)([h.A], () => h.A.isRemovingPaymentSource), p = (0, a.bG)([h.A], () => h.A.isUpdatingPaymentSource);
    return (i.useEffect(() => {
        o.$o(), o.hP()
    }, []), n && 0 === Object.keys(s).length) ? (0, r.jsx)(S, {}) : (0, r.jsx)(u.A, {
        showHeader: t,
        paymentSources: s,
        defaultPaymentSourceId: l,
        premiumSubscriptionPaymentSourceId: null != d && d.status !== v.Dmq.CANCELED ? d.paymentSourceId : null,
        locale: c,
        removing: f,
        submitting: p
    })
}

function N(e) {
    let {
        className: t
    } = e;
    return (0, r.jsx)(s.po8, {
        messageType: s.YCn.INFO,
        className: t,
        children: A.intl.format(A.t["8b+FXG"], {
            onClick: T
        })
    })
}

function w() {
    let e = (0, a.bG)([E.default], () => E.default.locale);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.kb, {}), (0, r.jsx)(c.A, {
            locale: e
        })]
    })
}

function R() {
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.x, {
            setting: O.H.BILLING_PAYMENT_METHODS,
            children: (0, r.jsx)(C, {
                showHeader: !0
            })
        }), (0, r.jsx)(f.x, {
            setting: O.H.BILLING_TRANSACTION_HISTORY,
            children: (0, r.jsx)("div", {
                className: I.TI,
                children: (0, r.jsxs)(s.BJc, {
                    gap: 16,
                    children: [(0, r.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: A.intl.string(A.t.obLrcK)
                    }), (0, r.jsx)(w, {})]
                })
            })
        }), (0, r.jsx)(N, {
            className: I.Dt
        })]
    })
}

function P() {
    let e = (0, a.bG)([_.default], () => null != _.default.getCurrentUser()),
        t = (0, a.bG)([p.A], () => p.A.enabled);
    return e ? t ? (0, r.jsx)(l.A, {}) : (0, r.jsx)(R, {}) : (0, r.jsx)(S, {})
}