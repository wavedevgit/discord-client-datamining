/** chunk id: 342744, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => f
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(397927),
    c = n(384904),
    u = n(923408),
    _ = n(198982),
    g = n(136857),
    m = n(793574),
    A = n(688810),
    h = n(253390),
    p = n(166403),
    x = n(927578),
    E = n(985018),
    T = n(359294);
async function S(e, t, n, i) {
    let s = (0, x.aE)(e, t);
    await (0, u.Ey)(n), await (0, c.nV)(e, {
        items: s
    }, {
        amount: 0,
        currency: e.currency
    }, (0, x.UC)(s, e.currency, e.paymentSourceId), i)
}

function C(e) {
    let {
        errorMsg: t
    } = e;
    return (0, i.jsxs)("div", {
        className: T.rf,
        children: [null !== t && (0, i.jsx)("div", {
            className: T.z3,
            children: (0, i.jsx)(d.wx6, {
                type: "critical",
                children: t
            })
        }), (0, i.jsx)("div", {
            children: E.intl.string(E.t.DY2CXs)
        })]
    })
}

function I() {
    return (0, i.jsxs)("div", {
        className: T.rf,
        children: [(0, i.jsx)("div", {
            className: T.dk
        }), (0, i.jsx)("div", {
            children: E.intl.string(E.t.G27uHe)
        })]
    })
}

function f(e) {
    let {
        guildBoostSlotId: t,
        transitionState: n,
        onClose: l
    } = e, {
        analyticsLocations: u
    } = (0, A.Ay)(m.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    s.useEffect(() => {
        p.A.hasFetchedSubscriptions() || (0, c.hP)()
    }, []);
    let T = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        [f, b] = s.useState(1),
        [N, v] = s.useState(!1),
        [j, O] = s.useState(null),
        R = s.useCallback(async () => {
            if (null != T) try {
                v(!0), O(null);
                let e = (0, h.v)(T, 1);
                a()((0, x.bx)(e) <= (0, x.bx)(T.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await S(T, e, t, u), b(2)
            } catch (t) {
                let e = t instanceof _.Ey ? t : new _.Ey(t, t.code);
                O(E.intl.string(e.code === g.tG.BILLING_PAUSE_INVALID_UPDATE ? E.t.dq4vq7 : E.t["5mlOCW"])), v(!1)
            }
        }, [T, t, u]);
    return (0, i.jsx)(A.f5, {
        value: u,
        children: (0, i.jsx)(r.Modal, {
            transitionState: n,
            onClose: async () => await l(),
            size: "sm",
            title: (() => {
                switch (f) {
                    case 1:
                        return E.intl.string(E.t.l52ih2);
                    case 2:
                        return E.intl.string(E.t.H9QUAB);
                    default:
                        return ""
                }
            })(),
            actions: (() => {
                switch (f) {
                    case 1:
                        return [{
                            variant: "secondary",
                            text: E.intl.string(E.t.oEAioF),
                            disabled: N,
                            onClick: l
                        }, {
                            variant: "primary",
                            text: E.intl.string(E.t.etZP4B),
                            loading: N,
                            onClick: R
                        }];
                    case 2:
                        return [{
                            variant: "primary",
                            text: E.intl.string(E.t.BddRzS),
                            onClick: l
                        }];
                    default:
                        return []
                }
            })(),
            children: (() => {
                if (null == T) return (0, i.jsx)(d.y$y, {});
                switch (f) {
                    case 1:
                        return (0, i.jsx)(C, {
                            errorMsg: j
                        });
                    case 2:
                        return (0, i.jsx)(I, {});
                    default:
                        throw Error(`Unexpected step: ${f}`)
                }
            })()
        })
    })
}