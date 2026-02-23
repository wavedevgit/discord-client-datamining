/** chunk id: 342744, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => f
});
var i = n(627968),
    s = n(64700),
    a = n(284009),
    r = n.n(a),
    l = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(384904),
    u = n(923408),
    _ = n(198982),
    m = n(136857),
    A = n(793574),
    g = n(688810),
    h = n(253390),
    x = n(166403),
    p = n(927578),
    E = n(985018),
    C = n(359294);
async function T(e, t, n, i) {
    let s = (0, p.aE)(e, t);
    await (0, u.Ey)(n), await (0, d.nV)(e, {
        items: s
    }, {
        amount: 0,
        currency: e.currency
    }, (0, p.UC)(s, e.currency, e.paymentSourceId), i)
}

function S(e) {
    let {
        errorMsg: t
    } = e;
    return (0, i.jsxs)("div", {
        className: C.rf,
        children: [null !== t && (0, i.jsx)("div", {
            className: C.z3,
            children: (0, i.jsx)(c.wx6, {
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
        className: C.rf,
        children: [(0, i.jsx)("div", {
            className: C.dk
        }), (0, i.jsx)("div", {
            children: E.intl.string(E.t.G27uHe)
        })]
    })
}

function f(e) {
    let {
        guildBoostSlotId: t,
        transitionState: n,
        onClose: a
    } = e, {
        analyticsLocations: u
    } = (0, g.Ay)(A.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    s.useEffect(() => {
        x.A.hasFetchedSubscriptions() || (0, d.hP)()
    }, []);
    let C = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        [f, N] = s.useState(1),
        [b, j] = s.useState(!1),
        [v, O] = s.useState(null),
        R = s.useCallback(async () => {
            if (null != C) try {
                j(!0), O(null);
                let e = (0, h.v)(C, 1);
                r()((0, p.bx)(e) <= (0, p.bx)(C.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await T(C, e, t, u), N(2)
            } catch (t) {
                let e = t instanceof _.Ey ? t : new _.Ey(t, t.code);
                O(E.intl.string(e.code === m.tG.BILLING_PAUSE_INVALID_UPDATE ? E.t.dq4vq7 : E.t["5mlOCW"])), j(!1)
            }
        }, [C, t, u]);
    return (0, i.jsx)(g.f5, {
        value: u,
        children: (0, i.jsx)(l.Modal, {
            transitionState: n,
            onClose: async () => await a(),
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
                            disabled: b,
                            onClick: a
                        }, {
                            variant: "primary",
                            text: E.intl.string(E.t.etZP4B),
                            loading: b,
                            onClick: R
                        }];
                    case 2:
                        return [{
                            variant: "primary",
                            text: E.intl.string(E.t.BddRzS),
                            onClick: a
                        }];
                    default:
                        return []
                }
            })(),
            children: (() => {
                if (null == C) return (0, i.jsx)(c.y$y, {});
                switch (f) {
                    case 1:
                        return (0, i.jsx)(S, {
                            errorMsg: v
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