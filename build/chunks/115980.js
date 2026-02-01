/** chunk id: 115980, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => P,
    HG: () => S,
    OH: () => I,
    ac: () => N
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(384904),
    o = n(974544),
    c = n(971105),
    u = n(767375),
    d = n(459793),
    p = n(195043),
    h = n(351906),
    g = n(287809),
    f = n(615405),
    m = n(295405),
    b = n(166403),
    A = n(773669),
    y = n(780964),
    O = n(840065),
    j = n(531525),
    x = n(652215),
    _ = n(985018),
    v = n(231182);

function E() {
    return (0, r.jsx)("div", {
        className: v.oE,
        children: (0, r.jsx)(s.y$y, {})
    })
}

function C() {
    (0, O.openUserSettings)(y.X.GIFT_PANEL, {
        section: x.nc_.INVENTORY
    })
}

function S(e) {
    let {
        showHeader: t = !1
    } = e, n = (0, i.bG)([f.A], () => f.A.isSyncing), s = (0, i.bG)([m.A], () => m.A.paymentSources), o = (0, i.bG)([m.A], () => m.A.defaultPaymentSourceId), c = (0, i.bG)([A.default], () => A.default.locale), d = (0, i.bG)([b.A], () => b.A.getPremiumTypeSubscription()), p = (0, i.bG)([f.A], () => f.A.isRemovingPaymentSource), h = (0, i.bG)([f.A], () => f.A.isUpdatingPaymentSource);
    return (l.useEffect(() => {
        a.$o(), a.hP()
    }, []), n && 0 === Object.keys(s).length) ? (0, r.jsx)(E, {}) : (0, r.jsx)(u.A, {
        showHeader: t,
        paymentSources: s,
        defaultPaymentSourceId: o,
        premiumSubscriptionPaymentSourceId: null != d && d.status !== x.Dmq.CANCELED ? d.paymentSourceId : null,
        locale: c,
        removing: p,
        submitting: h
    })
}

function I(e) {
    let {
        className: t
    } = e;
    return (0, r.jsx)(s.po8, {
        messageType: s.YCn.INFO,
        className: t,
        children: _.intl.format(_.t["8b+FXG"], {
            onClick: C
        })
    })
}

function N() {
    let e = (0, i.bG)([A.default], () => A.default.locale);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.kb, {}), (0, r.jsx)(c.A, {
            locale: e
        })]
    })
}

function T() {
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(p.x, {
            setting: j.H.BILLING_PAYMENT_METHODS,
            children: (0, r.jsx)(S, {
                showHeader: !0
            })
        }), (0, r.jsx)(p.x, {
            setting: j.H.BILLING_TRANSACTION_HISTORY,
            children: (0, r.jsx)("div", {
                className: v.TI,
                children: (0, r.jsxs)(s.BJc, {
                    gap: 16,
                    children: [(0, r.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        children: _.intl.string(_.t.obLrcK)
                    }), (0, r.jsx)(N, {})]
                })
            })
        }), (0, r.jsx)(I, {
            className: v.Dt
        })]
    })
}

function P() {
    let e = (0, i.bG)([g.default], () => null != g.default.getCurrentUser()),
        t = (0, i.bG)([h.A], () => h.A.enabled);
    return e ? t ? (0, r.jsx)(o.A, {}) : (0, r.jsx)(T, {}) : (0, r.jsx)(E, {})
}