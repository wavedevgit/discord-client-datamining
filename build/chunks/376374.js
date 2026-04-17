/** chunk id: 376374 params = (module,exports,require) **/
e.d(i, {
    $P: () => f,
    rc: () => C,
    wF: () => E
});
var n, l = e(627968);
e(64700);
var s = e(323125),
    a = e(397927),
    r = e(793574),
    o = e(688810),
    u = e(285871),
    c = e(897100),
    d = e(638643),
    S = e(976860),
    p = e(954571),
    I = e(580630),
    A = e(56754),
    _ = e(652215),
    T = e(985018),
    E = ((n = {})[n.AVAILABLE = 0] = "AVAILABLE", n[n.LOADING = 1] = "LOADING", n[n.UPCOMING_PLAN = 2] = "UPCOMING_PLAN", n[n.SUBSCRIBED = 3] = "SUBSCRIBED", n[n.UNAVAILABLE = 4] = "UNAVAILABLE", n);

function C(t) {
    let {
        appId: i,
        onClick: e,
        onHasClicked: n,
        skuId: s,
        subscriptionPlan: a,
        icon: r,
        state: o = 0
    } = t, u = null != a ? (0, I._J)(a) : null, c = 1 === o;
    return 0 === o || c ? (0, l.jsx)(N, {
        appId: i,
        skuId: s,
        onClick: t => {
            e(t), n?.()
        },
        loading: c,
        icon: r,
        text: null != u ? T.intl.formatToPlainString(T.t.i4T8vz, {
            rate: u
        }) : T.intl.string(T.t.uuzaAK)
    }) : (0, l.jsx)(P, {
        text: function(t, i) {
            switch (t) {
                case 2:
                    return T.intl.formatToPlainString(T.t.k1ew5N, {
                        rate: i
                    });
                case 3:
                    return T.intl.formatToPlainString(T.t["Hs3Y+I"], {
                        rate: i
                    });
                case 4:
                    return T.intl.string(T.t.DLAKbi)
            }
        }(o, u ?? "")
    })
}

function f(t) {
    let {
        appId: i,
        onClick: e,
        onHasClicked: n,
        sku: s,
        icon: a
    } = t, {
        analyticsLocations: c
    } = (0, o.Ay)(r.A.APP_STOREFRONT), S = (0, A.L)(s.id), p = s.type === _.Puh.DURABLE && S, {
        price: E
    } = s;
    return null == E ? null : p ? (0, l.jsx)(P, {
        text: T.intl.string(T.t["6cfuDj"])
    }) : (0, l.jsx)(N, {
        appId: i,
        skuId: s.id,
        onClick: t => {
            (e ?? (() => {
                (0, d.k)({
                    appId: i,
                    skuId: s.id,
                    analyticsLocations: c,
                    checkoutFlow: u.C.PREMIUM_APPS_OTP_CHECKOUT
                })
            }))(t), n?.()
        },
        text: T.intl.format(T.t.Xp5WTn, {
            price: (0, I.$g)(E.amount, E.currency)
        }),
        icon: a
    })
}

function N(t) {
    let {
        appId: i,
        skuId: e,
        onClick: n,
        ...r
    } = t, o = (0, c.A)();
    return (0, l.jsx)(a.Button, {
        ...r,
        onClick: t => {
            if (p.default.track(_.HAw.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: i,
                    sku_id: e
                }), !o) {
                t.preventDefault(), t.stopPropagation();
                let n = _.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(i, e),
                    l = (0, s.T2)(n, !1);
                (0, S.pX)(l);
                return
            }
            n?.(t)
        }
    })
}

function P(t) {
    let {
        text: i
    } = t;
    return (0, l.jsx)(a.Button, {
        text: i,
        disabled: !0,
        variant: "primary"
    })
}