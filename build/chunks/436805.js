/** chunk id: 436805 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(575593),
    o = n(397927),
    d = n(821701),
    c = n(253292),
    u = n(780898),
    m = n(580630),
    g = n(349439),
    _ = n(380258);
let x = e => {
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
    h = e => {
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
    A = e => {
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
            case a.R.AVATAR_DECORATION:
                return (0, i.jsx)(x, {
                    displayName: t,
                    product: n
                });
            case a.R.NAMEPLATE:
                let s = (0, u.EQ)(n);
                return null != s ? (0, i.jsx)(h, {
                    displayName: t,
                    nameplateData: s
                }) : null;
            case a.R.PROFILE_EFFECT:
                return (0, i.jsx)(A, {
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
            className: a
        } = e, {
            product: c
        } = (0, d.A)(t), {
            displayName: u,
            typeName: x,
            isSubscription: h
        } = (0, g.GZ)(c ?? null, n);
        if (null != t && !h && null == c || null == u) return null;
        let A = (0, m.$g)(s, l);
        return (0, i.jsxs)("div", {
            className: r()(_.kL, a),
            children: [h ? (0, i.jsx)(p, {
                subscriptionPlanId: n
            }) : (0, i.jsx)(T, {
                displayName: u,
                product: c ?? null
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    children: null != x ? `${u} • ${x}` : u
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: A
                })]
            })]
        })
    });
f.displayName = "FamilyCenterActivityPurchaseRow";
let S = f