/** Chunk was on 32502 **/
/** chunk id: 115980, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => P,
    HG: () => T,
    OH: () => _,
    ac: () => N
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(397927),
    a = n(384904),
    o = n(974544),
    c = n(971105),
    d = n(767375),
    u = n(459793),
    h = n(195043),
    g = n(351906),
    x = n(287809),
    p = n(615405),
    m = n(295405),
    A = n(166403),
    b = n(773669),
    j = n(780964),
    O = n(840065),
    E = n(531525),
    S = n(652215),
    f = n(985018),
    C = n(231182);

function v() {
    return (0, i.jsx)("div", {
        className: C.oE,
        children: (0, i.jsx)(r.y$y, {})
    })
}

function y() {
    (0, O.openUserSettings)(j.X.GIFT_PANEL, {
        section: S.nc_.INVENTORY
    })
}

function T(e) {
    let {
        showHeader: t = !1
    } = e, n = (0, s.bG)([p.A], () => p.A.isSyncing), r = (0, s.bG)([m.A], () => m.A.paymentSources), o = (0, s.bG)([m.A], () => m.A.defaultPaymentSourceId), c = (0, s.bG)([b.default], () => b.default.locale), u = (0, s.bG)([A.A], () => A.A.getPremiumTypeSubscription()), h = (0, s.bG)([p.A], () => p.A.isRemovingPaymentSource), g = (0, s.bG)([p.A], () => p.A.isUpdatingPaymentSource);
    return (l.useEffect(() => {
        a.$o(), a.hP()
    }, []), n && 0 === Object.keys(r).length) ? (0, i.jsx)(v, {}) : (0, i.jsx)(d.A, {
        showHeader: t,
        paymentSources: r,
        defaultPaymentSourceId: o,
        premiumSubscriptionPaymentSourceId: null != u && u.status !== S.Dmq.CANCELED ? u.paymentSourceId : null,
        locale: c,
        removing: h,
        submitting: g
    })
}

function _(e) {
    let {
        className: t
    } = e;
    return (0, i.jsx)(r.po8, {
        messageType: r.YCn.INFO,
        className: t,
        children: f.intl.format(f.t["8b+FXG"], {
            onClick: y
        })
    })
}

function N() {
    let e = (0, s.bG)([b.default], () => b.default.locale);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.kb, {}), (0, i.jsx)(c.A, {
            locale: e
        })]
    })
}

function I() {
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(h.x, {
            setting: E.H.BILLING_PAYMENT_METHODS,
            children: (0, i.jsx)(T, {
                showHeader: !0
            })
        }), (0, i.jsx)(h.x, {
            setting: E.H.BILLING_TRANSACTION_HISTORY,
            children: (0, i.jsx)("div", {
                className: C.TI,
                children: (0, i.jsxs)(r.BJc, {
                    gap: 16,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        children: f.intl.string(f.t.obLrcK)
                    }), (0, i.jsx)(N, {})]
                })
            })
        }), (0, i.jsx)(_, {
            className: C.Dt
        })]
    })
}

function P() {
    let e = (0, s.bG)([x.default], () => null != x.default.getCurrentUser()),
        t = (0, s.bG)([g.A], () => g.A.enabled);
    return e ? t ? (0, i.jsx)(o.A, {}) : (0, i.jsx)(I, {}) : (0, i.jsx)(v, {})
}