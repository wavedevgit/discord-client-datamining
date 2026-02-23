/** chunk id: 115980, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => D,
    HG: () => R,
    OH: () => y,
    ac: () => P
});
var i = n(627968),
    s = n(64700),
    a = n(311907),
    r = n(397927),
    l = n(384904),
    o = n(974544),
    c = n(971105),
    d = n(767375),
    u = n(459357),
    _ = n(813077),
    m = n(459793),
    A = n(195043),
    g = n(351906),
    h = n(287809),
    x = n(615405),
    p = n(295405),
    E = n(166403),
    C = n(773669),
    T = n(780964),
    S = n(493068),
    I = n(840065),
    f = n(531525),
    N = n(652215),
    b = n(985018),
    j = n(231182);

function v() {
    return (0, i.jsx)("div", {
        className: j.oE,
        children: (0, i.jsx)(r.y$y, {})
    })
}

function O() {
    (0, I.openUserSettings)(T.X.GIFT_PANEL, {
        section: N.nc_.INVENTORY
    })
}

function R(e) {
    let {
        showHeader: t = !1
    } = e, n = (0, a.bG)([x.A], () => x.A.isSyncing), r = (0, a.bG)([p.A], () => p.A.paymentSources), o = (0, a.bG)([p.A], () => p.A.defaultPaymentSourceId), c = (0, a.bG)([C.default], () => C.default.locale), _ = (0, a.bG)([E.A], () => E.A.getPremiumTypeSubscription()), m = (0, a.bG)([x.A], () => x.A.isRemovingPaymentSource), A = (0, a.bG)([x.A], () => x.A.isUpdatingPaymentSource), {
        enabled: g
    } = (0, u.c)({
        location: "UserSettingsBilling"
    });
    return (s.useEffect(() => {
        l.$o(), l.hP()
    }, []), n && 0 === Object.keys(r).length) ? (0, i.jsx)(v, {}) : (0, i.jsx)(d.A, {
        showHeader: t,
        paymentSources: r,
        defaultPaymentSourceId: o,
        premiumSubscriptionPaymentSourceId: null != _ && _.status !== N.Dmq.CANCELED ? _.paymentSourceId : null,
        locale: c,
        removing: m,
        submitting: A,
        showGiftCards: g
    })
}

function y(e) {
    let {
        className: t
    } = e;
    return (0, i.jsx)(r.po8, {
        messageType: r.YCn.INFO,
        className: t,
        children: b.intl.format(b.t["8b+FXG"], {
            onClick: O
        })
    })
}

function P() {
    let e = (0, a.bG)([C.default], () => C.default.locale);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m.kb, {}), (0, i.jsx)(c.A, {
            locale: e
        })]
    })
}

function L() {
    let e = (0, _.wI)("UserSettingsBilling");
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(A.x, {
            setting: f.H.BILLING_PAYMENT_METHODS,
            children: (0, i.jsx)(R, {
                showHeader: !0
            })
        }), e && (0, i.jsx)(A.x, {
            setting: f.H.BILLING_STORE_COUNTRY,
            children: (0, i.jsxs)(r.BJc, {
                gap: 16,
                children: [(0, i.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    children: b.intl.string(b.t["3pIjBH"])
                }), (0, i.jsx)(S.d, {})]
            })
        }), (0, i.jsx)(A.x, {
            setting: f.H.BILLING_TRANSACTION_HISTORY,
            children: (0, i.jsx)("div", {
                className: j.TI,
                children: (0, i.jsxs)(r.BJc, {
                    gap: 16,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        children: b.intl.string(b.t.obLrcK)
                    }), (0, i.jsx)(P, {})]
                })
            })
        }), (0, i.jsx)(y, {
            className: j.Dt
        })]
    })
}

function D() {
    let e = (0, a.bG)([h.default], () => null != h.default.getCurrentUser()),
        t = (0, a.bG)([g.A], () => g.A.enabled);
    return e ? t ? (0, i.jsx)(o.A, {}) : (0, i.jsx)(L, {}) : (0, i.jsx)(v, {})
}