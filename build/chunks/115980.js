/** Chunk was on 82575 **/
/** chunk id: 115980, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => P,
    HG: () => y,
    OH: () => N,
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
    p = n(615405),
    A = n(295405),
    m = n(166403),
    j = n(773669),
    b = n(780964),
    O = n(840065),
    S = n(531525),
    E = n(652215),
    f = n(985018),
    v = n(231182);

function T() {
    return (0, i.jsx)("div", {
        className: v.oE,
        children: (0, i.jsx)(r.y$y, {})
    })
}

function C() {
    (0, O.openUserSettings)(b.X.GIFT_PANEL, {
        section: E.nc_.INVENTORY
    })
}

function y(e) {
    let {
        showHeader: t = !1
    } = e, n = (0, l.bG)([p.A], () => p.A.isSyncing), r = (0, l.bG)([A.A], () => A.A.paymentSources), o = (0, l.bG)([A.A], () => A.A.defaultPaymentSourceId), c = (0, l.bG)([j.default], () => j.default.locale), u = (0, l.bG)([m.A], () => m.A.getPremiumTypeSubscription()), g = (0, l.bG)([p.A], () => p.A.isRemovingPaymentSource), h = (0, l.bG)([p.A], () => p.A.isUpdatingPaymentSource);
    return (s.useEffect(() => {
        a.$o(), a.hP()
    }, []), n && 0 === Object.keys(r).length) ? (0, i.jsx)(T, {}) : (0, i.jsx)(d.A, {
        showHeader: t,
        paymentSources: r,
        defaultPaymentSourceId: o,
        premiumSubscriptionPaymentSourceId: null != u && u.status !== E.Dmq.CANCELED ? u.paymentSourceId : null,
        locale: c,
        removing: g,
        submitting: h
    })
}

function N(e) {
    let {
        className: t
    } = e;
    return (0, i.jsx)(r.po8, {
        messageType: r.YCn.INFO,
        className: t,
        children: f.intl.format(f.t["8b+FXG"], {
            onClick: C
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

function _() {
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(g.x, {
            setting: S.H.BILLING_PAYMENT_METHODS,
            children: (0, i.jsx)(y, {
                showHeader: !0
            })
        }), (0, i.jsx)(g.x, {
            setting: S.H.BILLING_TRANSACTION_HISTORY,
            children: (0, i.jsx)("div", {
                className: v.TI,
                children: (0, i.jsxs)(r.BJc, {
                    gap: 16,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        children: f.intl.string(f.t.obLrcK)
                    }), (0, i.jsx)(I, {})]
                })
            })
        }), (0, i.jsx)(N, {
            className: v.Dt
        })]
    })
}

function P() {
    let e = (0, l.bG)([x.default], () => null != x.default.getCurrentUser()),
        t = (0, l.bG)([h.A], () => h.A.enabled);
    return e ? t ? (0, i.jsx)(o.A, {}) : (0, i.jsx)(_, {}) : (0, i.jsx)(T, {})
}