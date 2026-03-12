/** chunk id: 115980 params = (module,exports,require) **/
n.d(t, {
    Ay: () => L,
    HG: () => y,
    OH: () => R,
    ac: () => P
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(384904),
    o = n(974544),
    d = n(971105),
    c = n(767375),
    u = n(459357),
    _ = n(813077),
    m = n(459793),
    g = n(195043),
    A = n(351906),
    h = n(287809),
    x = n(615405),
    p = n(295405),
    T = n(166403),
    E = n(773669),
    C = n(780964),
    S = n(493068),
    f = n(840065),
    N = n(531525),
    b = n(652215),
    I = n(985018),
    v = n(679864);

function j() {
    return (0, i.jsx)("div", {
        className: v.oE,
        children: (0, i.jsx)(r.y$y, {})
    })
}

function O() {
    (0, f.openUserSettings)(C.X.GIFT_PANEL, {
        section: b.nc_.INVENTORY
    })
}

function y(e) {
    let {
        showHeader: t = !1
    } = e, n = (0, l.bG)([x.A], () => x.A.isSyncing), r = (0, l.bG)([p.A], () => p.A.paymentSources), o = (0, l.bG)([p.A], () => p.A.defaultPaymentSourceId), d = (0, l.bG)([E.default], () => E.default.locale), _ = (0, l.bG)([T.A], () => T.A.getPremiumTypeSubscription()), m = (0, l.bG)([x.A], () => x.A.isRemovingPaymentSource), g = (0, l.bG)([x.A], () => x.A.isUpdatingPaymentSource), {
        enabled: A
    } = (0, u.c)({
        location: "UserSettingsBilling"
    });
    return (s.useEffect(() => {
        a.$o(), a.hP()
    }, []), n && 0 === Object.keys(r).length) ? (0, i.jsx)(j, {}) : (0, i.jsx)(c.A, {
        showHeader: t,
        paymentSources: r,
        defaultPaymentSourceId: o,
        premiumSubscriptionPaymentSourceId: null != _ && _.status !== b.Dmq.CANCELED ? _.paymentSourceId : null,
        locale: d,
        removing: m,
        submitting: g,
        showGiftCards: A
    })
}

function R(e) {
    let {
        className: t
    } = e;
    return (0, i.jsx)(r.po8, {
        messageType: r.YCn.INFO,
        className: t,
        children: I.intl.format(I.t["8b+FXG"], {
            onClick: O
        })
    })
}

function P() {
    let e = (0, l.bG)([E.default], () => E.default.locale);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m.kb, {}), (0, i.jsx)(d.A, {
            locale: e
        })]
    })
}

function D() {
    let e = (0, _.wI)("UserSettingsBilling");
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(g.x, {
            setting: N.H.BILLING_PAYMENT_METHODS,
            children: (0, i.jsx)(y, {
                showHeader: !0
            })
        }), e && (0, i.jsx)(g.x, {
            setting: N.H.BILLING_STORE_COUNTRY,
            children: (0, i.jsxs)(r.BJc, {
                gap: 16,
                children: [(0, i.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    children: I.intl.string(I.t["3pIjBH"])
                }), (0, i.jsx)(S.d, {})]
            })
        }), (0, i.jsx)(g.x, {
            setting: N.H.BILLING_TRANSACTION_HISTORY,
            children: (0, i.jsx)("div", {
                className: v.TI,
                children: (0, i.jsxs)(r.BJc, {
                    gap: 16,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        children: I.intl.string(I.t.obLrcK)
                    }), (0, i.jsx)(P, {})]
                })
            })
        }), (0, i.jsx)(R, {
            className: v.Dt
        })]
    })
}

function L() {
    let e = (0, l.bG)([h.default], () => null != h.default.getCurrentUser()),
        t = (0, l.bG)([A.A], () => A.A.enabled);
    return e ? t ? (0, i.jsx)(o.A, {}) : (0, i.jsx)(D, {}) : (0, i.jsx)(j, {})
}