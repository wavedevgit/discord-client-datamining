/** chunk id: 436805 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(575593),
    o = n(397927),
    d = n(821701),
    c = n(253292),
    u = n(780898),
    m = n(580630),
    g = n(349439),
    _ = n(380258);
let A = e => {
        let {
            displayName: t,
            product: n
        } = e, s = (0, g.nF)(n);
        return null == s ? null : (0, i.jsx)("img", {
            src: s,
            alt: t,
            className: _._P
        })
    },
    x = e => {
        let {
            displayName: t,
            nameplateData: n
        } = e, {
            staticImageUrl: s
        } = (0, c.K)(n);
        return null == s ? null : (0, i.jsx)("img", {
            src: s,
            alt: t,
            className: _.M4
        })
    },
    h = e => {
        let {
            displayName: t,
            product: n
        } = e, s = (0, g.GQ)(n);
        return null == s ? null : (0, i.jsx)("img", {
            src: s,
            alt: t,
            className: _._P
        })
    },
    p = e => {
        let {
            subscriptionPlanId: t
        } = e;
        if (null == t) return (0, i.jsx)("div", {
            className: _.T8,
            children: (0, i.jsx)(o.U1X, {})
        });
        let n = (0, g.il)(t);
        return (0, i.jsx)("div", {
            className: _.T8,
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
    T = e => {
        let {
            displayName: t,
            product: n
        } = e;
        if (null == n) return (0, i.jsx)("div", {
            className: _.T8,
            children: (0, i.jsx)(o.U1X, {})
        });
        switch (n.type) {
            case r.R.AVATAR_DECORATION:
                return (0, i.jsx)(A, {
                    displayName: t,
                    product: n
                });
            case r.R.NAMEPLATE:
                let s = (0, u.EQ)(n);
                return null != s ? (0, i.jsx)(x, {
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
                    className: _.T8,
                    children: (0, i.jsx)(o.U1X, {})
                })
        }
    },
    f = s.memo(e => {
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
            typeName: A,
            isSubscription: x
        } = (0, g.GZ)(c ?? null, n);
        if (null != t && !x && null == c || null == u) return null;
        let h = (0, m.$g)(s, l);
        return (0, i.jsxs)("div", {
            className: a()(_.kL, r),
            children: [x ? (0, i.jsx)(p, {
                subscriptionPlanId: n
            }) : (0, i.jsx)(T, {
                displayName: u,
                product: c ?? null
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    children: null != A ? `${u} • ${A}` : u
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: h
                })]
            })]
        })
    });
f.displayName = "FamilyCenterActivityPurchaseRow";
let E = f