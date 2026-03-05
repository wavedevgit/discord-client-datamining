/** chunk id: 115980 params = (module,exports,require) **/
n.d(t, {
    Ay: () => D,
    HG: () => R,
    OH: () => y,
    ac: () => P
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(384904),
    o = n(974544),
    d = n(971105),
    c = n(767375),
    u = n(459357),
    _ = n(813077),
    g = n(459793),
    m = n(195043),
    A = n(351906),
    h = n(287809),
    p = n(615405),
    x = n(295405),
    E = n(166403),
    T = n(773669),
    S = n(780964),
    C = n(493068),
    f = n(840065),
    I = n(531525),
    b = n(652215),
    N = n(985018),
    v = n(679864);

function j() {
    return (0, i.jsx)("div", {
        className: v.oE,
        children: (0, i.jsx)(a.y$y, {})
    })
}

function O() {
    (0, f.openUserSettings)(S.X.GIFT_PANEL, {
        section: b.nc_.INVENTORY
    })
}

function R(e) {
    let {
        showHeader: t = !1
    } = e, n = (0, l.bG)([p.A], () => p.A.isSyncing), a = (0, l.bG)([x.A], () => x.A.paymentSources), o = (0, l.bG)([x.A], () => x.A.defaultPaymentSourceId), d = (0, l.bG)([T.default], () => T.default.locale), _ = (0, l.bG)([E.A], () => E.A.getPremiumTypeSubscription()), g = (0, l.bG)([p.A], () => p.A.isRemovingPaymentSource), m = (0, l.bG)([p.A], () => p.A.isUpdatingPaymentSource), {
        enabled: A
    } = (0, u.c)({
        location: "UserSettingsBilling"
    });
    return (s.useEffect(() => {
        r.$o(), r.hP()
    }, []), n && 0 === Object.keys(a).length) ? (0, i.jsx)(j, {}) : (0, i.jsx)(c.A, {
        showHeader: t,
        paymentSources: a,
        defaultPaymentSourceId: o,
        premiumSubscriptionPaymentSourceId: null != _ && _.status !== b.Dmq.CANCELED ? _.paymentSourceId : null,
        locale: d,
        removing: g,
        submitting: m,
        showGiftCards: A
    })
}

function y(e) {
    let {
        className: t
    } = e;
    return (0, i.jsx)(a.po8, {
        messageType: a.YCn.INFO,
        className: t,
        children: N.intl.format(N.t["8b+FXG"], {
            onClick: O
        })
    })
}

function P() {
    let e = (0, l.bG)([T.default], () => T.default.locale);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(g.kb, {}), (0, i.jsx)(d.A, {
            locale: e
        })]
    })
}

function L() {
    let e = (0, _.wI)("UserSettingsBilling");
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.x, {
            setting: I.H.BILLING_PAYMENT_METHODS,
            children: (0, i.jsx)(R, {
                showHeader: !0
            })
        }), e && (0, i.jsx)(m.x, {
            setting: I.H.BILLING_STORE_COUNTRY,
            children: (0, i.jsxs)(a.BJc, {
                gap: 16,
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-lg/semibold",
                    children: N.intl.string(N.t["3pIjBH"])
                }), (0, i.jsx)(C.d, {})]
            })
        }), (0, i.jsx)(m.x, {
            setting: I.H.BILLING_TRANSACTION_HISTORY,
            children: (0, i.jsx)("div", {
                className: v.TI,
                children: (0, i.jsxs)(a.BJc, {
                    gap: 16,
                    children: [(0, i.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: N.intl.string(N.t.obLrcK)
                    }), (0, i.jsx)(P, {})]
                })
            })
        }), (0, i.jsx)(y, {
            className: v.Dt
        })]
    })
}

function D() {
    let e = (0, l.bG)([h.default], () => null != h.default.getCurrentUser()),
        t = (0, l.bG)([A.A], () => A.A.enabled);
    return e ? t ? (0, i.jsx)(o.A, {}) : (0, i.jsx)(L, {}) : (0, i.jsx)(j, {})
}