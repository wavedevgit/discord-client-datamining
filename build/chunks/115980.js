/** chunk id: 115980 params = (module,exports,require) **/
n.d(t, {
    Ay: () => L,
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
    A = n(195043),
    m = n(351906),
    h = n(287809),
    p = n(615405),
    x = n(295405),
    E = n(166403),
    T = n(773669),
    S = n(780964),
    C = n(493068),
    I = n(840065),
    f = n(531525),
    N = n(652215),
    b = n(985018),
    v = n(231182);

function O() {
    return (0, i.jsx)("div", {
        className: v.oE,
        children: (0, i.jsx)(a.y$y, {})
    })
}

function j() {
    (0, I.openUserSettings)(S.X.GIFT_PANEL, {
        section: N.nc_.INVENTORY
    })
}

function R(e) {
    let {
        showHeader: t = !1
    } = e, n = (0, l.bG)([p.A], () => p.A.isSyncing), a = (0, l.bG)([x.A], () => x.A.paymentSources), o = (0, l.bG)([x.A], () => x.A.defaultPaymentSourceId), d = (0, l.bG)([T.default], () => T.default.locale), _ = (0, l.bG)([E.A], () => E.A.getPremiumTypeSubscription()), g = (0, l.bG)([p.A], () => p.A.isRemovingPaymentSource), A = (0, l.bG)([p.A], () => p.A.isUpdatingPaymentSource), {
        enabled: m
    } = (0, u.c)({
        location: "UserSettingsBilling"
    });
    return (s.useEffect(() => {
        r.$o(), r.hP()
    }, []), n && 0 === Object.keys(a).length) ? (0, i.jsx)(O, {}) : (0, i.jsx)(c.A, {
        showHeader: t,
        paymentSources: a,
        defaultPaymentSourceId: o,
        premiumSubscriptionPaymentSourceId: null != _ && _.status !== N.Dmq.CANCELED ? _.paymentSourceId : null,
        locale: d,
        removing: g,
        submitting: A,
        showGiftCards: m
    })
}

function y(e) {
    let {
        className: t
    } = e;
    return (0, i.jsx)(a.po8, {
        messageType: a.YCn.INFO,
        className: t,
        children: b.intl.format(b.t["8b+FXG"], {
            onClick: j
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

function D() {
    let e = (0, _.wI)("UserSettingsBilling");
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(A.x, {
            setting: f.H.BILLING_PAYMENT_METHODS,
            children: (0, i.jsx)(R, {
                showHeader: !0
            })
        }), e && (0, i.jsx)(A.x, {
            setting: f.H.BILLING_STORE_COUNTRY,
            children: (0, i.jsxs)(a.BJc, {
                gap: 16,
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-lg/semibold",
                    children: b.intl.string(b.t["3pIjBH"])
                }), (0, i.jsx)(C.d, {})]
            })
        }), (0, i.jsx)(A.x, {
            setting: f.H.BILLING_TRANSACTION_HISTORY,
            children: (0, i.jsx)("div", {
                className: v.TI,
                children: (0, i.jsxs)(a.BJc, {
                    gap: 16,
                    children: [(0, i.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: b.intl.string(b.t.obLrcK)
                    }), (0, i.jsx)(P, {})]
                })
            })
        }), (0, i.jsx)(y, {
            className: v.Dt
        })]
    })
}

function L() {
    let e = (0, l.bG)([h.default], () => null != h.default.getCurrentUser()),
        t = (0, l.bG)([m.A], () => m.A.enabled);
    return e ? t ? (0, i.jsx)(o.A, {}) : (0, i.jsx)(D, {}) : (0, i.jsx)(O, {})
}