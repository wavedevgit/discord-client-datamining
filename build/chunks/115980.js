/** Chunk was on 60449 **/
/** chunk id: 115980, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => D,
    HG: () => N,
    OH: () => _,
    ac: () => I
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(384904),
    o = n(974544),
    c = n(971105),
    d = n(767375),
    u = n(459793),
    g = n(195043),
    h = n(351906),
    x = n(287809),
    A = n(615405),
    p = n(295405),
    m = n(166403),
    j = n(773669),
    O = n(780964),
    E = n(840065),
    b = n(531525),
    S = n(652215),
    v = n(985018),
    C = n(231182);

function f() {
    return (0, i.jsx)("div", {
        className: C.oE,
        children: (0, i.jsx)(r.y$y, {})
    })
}

function T() {
    (0, E.openUserSettings)(O.X.GIFT_PANEL, {
        section: S.nc_.INVENTORY
    })
}

function N(e) {
    let {
        showHeader: t = !1
    } = e, n = (0, l.bG)([A.A], () => A.A.isSyncing), r = (0, l.bG)([p.A], () => p.A.paymentSources), o = (0, l.bG)([p.A], () => p.A.defaultPaymentSourceId), c = (0, l.bG)([j.default], () => j.default.locale), u = (0, l.bG)([m.A], () => m.A.getPremiumTypeSubscription()), g = (0, l.bG)([A.A], () => A.A.isRemovingPaymentSource), h = (0, l.bG)([A.A], () => A.A.isUpdatingPaymentSource);
    return (s.useEffect(() => {
        a.$o(), a.hP()
    }, []), n && 0 === Object.keys(r).length) ? (0, i.jsx)(f, {}) : (0, i.jsx)(d.A, {
        showHeader: t,
        paymentSources: r,
        defaultPaymentSourceId: o,
        premiumSubscriptionPaymentSourceId: null != u && u.status !== S.Dmq.CANCELED ? u.paymentSourceId : null,
        locale: c,
        removing: g,
        submitting: h
    })
}

function _(e) {
    let {
        className: t
    } = e;
    return (0, i.jsx)(r.po8, {
        messageType: r.YCn.INFO,
        className: t,
        children: v.intl.format(v.t["8b+FXG"], {
            onClick: T
        })
    })
}

function I() {
    let e = (0, l.bG)([j.default], () => j.default.locale);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.kb, {}), (0, i.jsx)(c.A, {
            locale: e
        })]
    })
}

function y() {
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(g.x, {
            setting: b.H.BILLING_PAYMENT_METHODS,
            children: (0, i.jsx)(N, {
                showHeader: !0
            })
        }), (0, i.jsx)(g.x, {
            setting: b.H.BILLING_TRANSACTION_HISTORY,
            children: (0, i.jsx)("div", {
                className: C.TI,
                children: (0, i.jsxs)(r.BJc, {
                    gap: 16,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        children: v.intl.string(v.t.obLrcK)
                    }), (0, i.jsx)(I, {})]
                })
            })
        }), (0, i.jsx)(_, {
            className: C.Dt
        })]
    })
}

function D() {
    let e = (0, l.bG)([x.default], () => null != x.default.getCurrentUser()),
        t = (0, l.bG)([h.A], () => h.A.enabled);
    return e ? t ? (0, i.jsx)(o.A, {}) : (0, i.jsx)(y, {}) : (0, i.jsx)(f, {})
}