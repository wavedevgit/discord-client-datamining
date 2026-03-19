/** chunk id: 342744 params = (module,exports,require) **/
n.d(t, {
    default: () => b
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
    m = n(136857),
    g = n(793574),
    A = n(688810),
    x = n(253390),
    h = n(166403),
    p = n(927578),
    T = n(985018),
    E = n(326428);
async function S(e, t, n, i) {
    let s = (0, p.aE)(e, t);
    await (0, u.Ey)(n), await (0, c.nV)(e, {
        items: s
    }, {
        amount: 0,
        currency: e.currency
    }, (0, p.UC)(s, e.currency, e.paymentSourceId), i)
}

function C(e) {
    let {
        errorMsg: t
    } = e;
    return (0, i.jsxs)("div", {
        className: E.rf,
        children: [null !== t && (0, i.jsx)("div", {
            className: E.z3,
            children: (0, i.jsx)(d.wx6, {
                type: "critical",
                children: t
            })
        }), (0, i.jsx)("div", {
            children: T.intl.string(T.t.DY2CXs)
        })]
    })
}

function f() {
    return (0, i.jsxs)("div", {
        className: E.rf,
        children: [(0, i.jsx)("div", {
            className: E.dk
        }), (0, i.jsx)("div", {
            children: T.intl.string(T.t.G27uHe)
        })]
    })
}

function b(e) {
    let {
        guildBoostSlotId: t,
        transitionState: n,
        onClose: l
    } = e, {
        analyticsLocations: u
    } = (0, A.Ay)(g.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    s.useEffect(() => {
        h.A.hasFetchedSubscriptions() || (0, c.hP)()
    }, []);
    let E = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        [b, N] = s.useState(1),
        [I, v] = s.useState(!1),
        [j, y] = s.useState(null),
        R = s.useCallback(async () => {
            if (null != E) try {
                v(!0), y(null);
                let e = (0, x.v)(E, 1);
                a()((0, p.bx)(e) <= (0, p.bx)(E.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await S(E, e, t, u), N(2)
            } catch (t) {
                let e = t instanceof _.Ey ? t : new _.Ey(t, t.code);
                y(T.intl.string(e.code === m.tG.BILLING_PAUSE_INVALID_UPDATE ? T.t.dq4vq7 : T.t["5mlOCW"])), v(!1)
            }
        }, [E, t, u]);
    return (0, i.jsx)(A.f5, {
        value: u,
        children: (0, i.jsx)(r.Modal, {
            transitionState: n,
            onClose: async () => await l(),
            size: "sm",
            title: (() => {
                switch (b) {
                    case 1:
                        return T.intl.string(T.t.l52ih2);
                    case 2:
                        return T.intl.string(T.t.H9QUAB);
                    default:
                        return ""
                }
            })(),
            actions: (() => {
                switch (b) {
                    case 1:
                        return [{
                            variant: "secondary",
                            text: T.intl.string(T.t.oEAioF),
                            disabled: I,
                            onClick: l
                        }, {
                            variant: "primary",
                            text: T.intl.string(T.t.etZP4B),
                            loading: I,
                            onClick: R
                        }];
                    case 2:
                        return [{
                            variant: "primary",
                            text: T.intl.string(T.t.BddRzS),
                            onClick: l
                        }];
                    default:
                        return []
                }
            })(),
            children: (() => {
                if (null == E) return (0, i.jsx)(d.y$y, {});
                switch (b) {
                    case 1:
                        return (0, i.jsx)(C, {
                            errorMsg: j
                        });
                    case 2:
                        return (0, i.jsx)(f, {});
                    default:
                        throw Error(`Unexpected step: ${b}`)
                }
            })()
        })
    })
}