/** Chunk was on 5606 **/
/** chunk id: 342744, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => y
}), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(384904),
    u = n(923408),
    p = n(198982),
    _ = n(136857),
    m = n(793574),
    g = n(688810),
    f = n(253390),
    b = n(166403),
    h = n(927578),
    A = n(985018),
    E = n(359294);
async function x(e, t, n, r) {
    let i = (0, h.aE)(e, t);
    await (0, u.Ey)(n), await (0, d.nV)(e, {
        items: i
    }, {
        amount: 0,
        currency: e.currency
    }, (0, h.UC)(i, e.currency, e.paymentSourceId), r)
}

function O(e) {
    let {
        errorMsg: t
    } = e;
    return (0, r.jsxs)("div", {
        className: E.rf,
        children: [null !== t && (0, r.jsx)("div", {
            className: E.z3,
            children: (0, r.jsx)(c.wx6, {
                type: "critical",
                children: t
            })
        }), (0, r.jsx)("div", {
            children: A.intl.string(A.t.DY2CXs)
        })]
    })
}

function C() {
    return (0, r.jsxs)("div", {
        className: E.rf,
        children: [(0, r.jsx)("div", {
            className: E.dk
        }), (0, r.jsx)("div", {
            children: A.intl.string(A.t.G27uHe)
        })]
    })
}

function y(e) {
    let {
        guildBoostSlotId: t,
        transitionState: n,
        onClose: l
    } = e, {
        analyticsLocations: u
    } = (0, g.Ay)(m.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    i.useEffect(() => {
        b.A.hasFetchedSubscriptions() || (0, d.hP)()
    }, []);
    let E = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
        [y, j] = i.useState(1),
        [T, v] = i.useState(!1),
        [S, I] = i.useState(null),
        N = i.useCallback(async () => {
            if (null != E) try {
                v(!0), I(null);
                let e = (0, f.v)(E, 1);
                s()((0, h.bx)(e) <= (0, h.bx)(E.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await x(E, e, t, u), j(2)
            } catch (t) {
                let e = t instanceof p.Ey ? t : new p.Ey(t, t.code);
                I(A.intl.string(e.code === _.tG.BILLING_PAUSE_INVALID_UPDATE ? A.t.dq4vq7 : A.t["5mlOCW"])), v(!1)
            }
        }, [E, t, u]);
    return (0, r.jsx)(g.f5, {
        value: u,
        children: (0, r.jsx)(a.Modal, {
            transitionState: n,
            onClose: async () => await l(),
            size: "sm",
            title: (() => {
                switch (y) {
                    case 1:
                        return A.intl.string(A.t.l52ih2);
                    case 2:
                        return A.intl.string(A.t.H9QUAB);
                    default:
                        return ""
                }
            })(),
            actions: (() => {
                switch (y) {
                    case 1:
                        return [{
                            variant: "secondary",
                            text: A.intl.string(A.t.oEAioF),
                            disabled: T,
                            onClick: l
                        }, {
                            variant: "primary",
                            text: A.intl.string(A.t.etZP4B),
                            loading: T,
                            onClick: N
                        }];
                    case 2:
                        return [{
                            variant: "primary",
                            text: A.intl.string(A.t.BddRzS),
                            onClick: l
                        }];
                    default:
                        return []
                }
            })(),
            children: (() => {
                if (null == E) return (0, r.jsx)(c.y$y, {});
                switch (y) {
                    case 1:
                        return (0, r.jsx)(O, {
                            errorMsg: S
                        });
                    case 2:
                        return (0, r.jsx)(C, {});
                    default:
                        throw Error("Unexpected step: ".concat(y))
                }
            })()
        })
    })
}