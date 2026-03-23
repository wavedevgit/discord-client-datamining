/** chunk id: 342744 params = (module,exports,require) **/
n.d(t, {
    default: () => C
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
    m = n(198982),
    _ = n(136857),
    g = n(793574),
    A = n(688810),
    x = n(253390),
    p = n(166403),
    h = n(927578),
    f = n(985018),
    T = n(359294);
async function E(e, t, n, i) {
    let s = (0, h.aE)(e, t);
    await (0, u.Ey)(n), await (0, c.nV)(e, {
        items: s
    }, {
        amount: 0,
        currency: e.currency
    }, (0, h.UC)(s, e.currency, e.paymentSourceId), i)
}

function S(e) {
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
            children: f.intl.string(f.t.DY2CXs)
        })]
    })
}

function b() {
    return (0, i.jsxs)("div", {
        className: T.rf,
        children: [(0, i.jsx)("div", {
            className: T.dk
        }), (0, i.jsx)("div", {
            children: f.intl.string(f.t.G27uHe)
        })]
    })
}

function C(e) {
    let {
        guildBoostSlotId: t,
        transitionState: n,
        onClose: l
    } = e, {
        analyticsLocations: u
    } = (0, A.Ay)(g.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    s.useEffect(() => {
        p.A.hasFetchedSubscriptions() || (0, c.hP)()
    }, []);
    let T = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        [C, N] = s.useState(1),
        [v, I] = s.useState(!1),
        [j, y] = s.useState(null),
        O = s.useCallback(async () => {
            if (null != T) try {
                I(!0), y(null);
                let e = (0, x.v)(T, 1);
                a()((0, h.bx)(e) <= (0, h.bx)(T.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await E(T, e, t, u), N(2)
            } catch (t) {
                let e = t instanceof m.Ey ? t : new m.Ey(t, t.code);
                y(f.intl.string(e.code === _.tG.BILLING_PAUSE_INVALID_UPDATE ? f.t.dq4vq7 : f.t["5mlOCW"])), I(!1)
            }
        }, [T, t, u]);
    return (0, i.jsx)(A.f5, {
        value: u,
        children: (0, i.jsx)(r.Modal, {
            transitionState: n,
            onClose: async () => await l(),
            size: "sm",
            title: (() => {
                switch (C) {
                    case 1:
                        return f.intl.string(f.t.l52ih2);
                    case 2:
                        return f.intl.string(f.t.H9QUAB);
                    default:
                        return ""
                }
            })(),
            actions: (() => {
                switch (C) {
                    case 1:
                        return [{
                            variant: "secondary",
                            text: f.intl.string(f.t.oEAioF),
                            disabled: v,
                            onClick: l
                        }, {
                            variant: "primary",
                            text: f.intl.string(f.t.etZP4B),
                            loading: v,
                            onClick: O
                        }];
                    case 2:
                        return [{
                            variant: "primary",
                            text: f.intl.string(f.t.BddRzS),
                            onClick: l
                        }];
                    default:
                        return []
                }
            })(),
            children: (() => {
                if (null == T) return (0, i.jsx)(d.y$y, {});
                switch (C) {
                    case 1:
                        return (0, i.jsx)(S, {
                            errorMsg: j
                        });
                    case 2:
                        return (0, i.jsx)(b, {});
                    default:
                        throw Error(`Unexpected step: ${C}`)
                }
            })()
        })
    })
}