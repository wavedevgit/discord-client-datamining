/** chunk id: 436805 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(575593),
    o = n(397927),
    d = n(821701),
    c = n(302086),
    u = n(369496),
    m = n(580630),
    _ = n(349439),
    g = n(959349);
let x = e => {
        let {
            displayName: t,
            product: n
        } = e, s = (0, _.nF)(n);
        return null == s ? null : (0, i.jsx)("img", {
            src: s,
            alt: t,
            className: g._P
        })
    },
    A = e => {
        let {
            displayName: t,
            nameplateData: n
        } = e, {
            staticImageUrl: s
        } = (0, c.K)(n);
        return null == s ? null : (0, i.jsx)("img", {
            src: s,
            alt: t,
            className: g.M4
        })
    },
    h = e => {
        let {
            displayName: t,
            product: n
        } = e, s = (0, _.GQ)(n);
        return null == s ? null : (0, i.jsx)("img", {
            src: s,
            alt: t,
            className: g._P
        })
    },
    p = e => {
        let {
            subscriptionPlanId: t
        } = e;
        if (null == t) return (0, i.jsx)("div", {
            className: g.T8,
            children: (0, i.jsx)(o.U1X, {})
        });
        let n = (0, _.il)(t);
        return (0, i.jsx)("div", {
            className: g.T8,
            children: n ? (0, i.jsx)(o._Jp, {
                size: "custom",
                width: 20,
                height: 20
            }) : (0, i.jsx)(o.tvc, {
                size: "custom",
                width: 20,
                height: 20
            })
        })
    },
    f = e => {
        let {
            displayName: t,
            product: n
        } = e;
        if (null == n) return (0, i.jsx)("div", {
            className: g.T8,
            children: (0, i.jsx)(o.U1X, {})
        });
        switch (n.type) {
            case r.R.AVATAR_DECORATION:
                return (0, i.jsx)(x, {
                    displayName: t,
                    product: n
                });
            case r.R.NAMEPLATE:
                let s = (0, u.EQ)(n);
                return null != s ? (0, i.jsx)(A, {
                    displayName: t,
                    nameplateData: s
                }) : null;
            case r.R.PROFILE_EFFECT:
                return (0, i.jsx)(h, {
                    displayName: t,
                    product: n
                });
            default:
                return (0, i.jsx)("div", {
                    className: g.T8,
                    children: (0, i.jsx)(o.U1X, {})
                })
        }
    },
    T = s.memo(e => {
        let {
            skuId: t,
            subscriptionPlanId: n,
            total: s,
            currency: l,
            className: r
        } = e, {
            product: c
        } = (0, d.A)(t), {
            displayName: u,
            typeName: x,
            isSubscription: A
        } = (0, _.GZ)(c ?? null, n);
        if (null != t && !A && null == c || null == u) return null;
        let h = (0, m.$g)(s, l);
        return (0, i.jsxs)("div", {
            className: a()(g.kL, r),
            children: [A ? (0, i.jsx)(p, {
                subscriptionPlanId: n
            }) : (0, i.jsx)(f, {
                displayName: u,
                product: c ?? null
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    children: null != x ? `${u} • ${x}` : u
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: h
                })]
            })]
        })
    });
T.displayName = "FamilyCenterActivityPurchaseRow";
let S = T