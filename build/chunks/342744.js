/** chunk id: 342744 params = (module,exports,require) **/
n.d(t, {
    default: () => C
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(158954),
    o = n(311907),
    d = n(397927),
    c = n(923408),
    u = n(198982),
    m = n(136857),
    g = n(793574),
    _ = n(688810),
    x = n(323082),
    h = n(253390),
    A = n(166403),
    p = n(927578),
    T = n(985018),
    f = n(743641);
async function S(e, t, n, i) {
    let s = (0, p.aE)(e, t);
    await (0, c.Ey)(n), await (0, x.nV)(e, {
        items: s
    }, {
        amount: 0,
        currency: e.currency
    }, (0, p.UC)(s, e.currency, e.paymentSourceId), i)
}

function E(e) {
    let {
        errorMsg: t
    } = e;
    return (0, i.jsxs)("div", {
        className: f.rf,
        children: [null !== t && (0, i.jsx)("div", {
            className: f.z3,
            children: (0, i.jsx)(d.wx6, {
                type: "critical",
                children: t
            })
        }), (0, i.jsx)("div", {
            children: T.intl.string(T.t.DY2CXs)
        })]
    })
}

function b() {
    return (0, i.jsxs)("div", {
        className: f.rf,
        children: [(0, i.jsx)("div", {
            className: f.dk
        }), (0, i.jsx)("div", {
            children: T.intl.string(T.t.G27uHe)
        })]
    })
}

function C(e) {
    let {
        guildBoostSlotId: t,
        transitionState: n,
        onClose: l
    } = e, {
        analyticsLocations: c
    } = (0, _.Ay)(g.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    s.useEffect(() => {
        A.A.hasFetchedSubscriptions() || (0, x.hP)()
    }, []);
    let f = (0, o.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
        [C, v] = s.useState(1),
        [N, I] = s.useState(!1),
        [j, y] = s.useState(null),
        O = s.useCallback(async () => {
            if (null != f) try {
                I(!0), y(null);
                let e = (0, h.v)(f, 1);
                r()((0, p.bx)(e) <= (0, p.bx)(f.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await S(f, e, t, c), v(2)
            } catch (t) {
                let e = t instanceof u.Ey ? t : new u.Ey(t, t.code);
                y(T.intl.string(e.code === m.tG.BILLING_PAUSE_INVALID_UPDATE ? T.t.dq4vq7 : T.t["5mlOCW"])), I(!1)
            }
        }, [f, t, c]);
    return (0, i.jsx)(_.f5, {
        value: c,
        children: (0, i.jsx)(a.Modal, {
            transitionState: n,
            onClose: async () => await l(),
            size: "sm",
            title: (() => {
                switch (C) {
                    case 1:
                        return T.intl.string(T.t.l52ih2);
                    case 2:
                        return T.intl.string(T.t.H9QUAB);
                    default:
                        return ""
                }
            })(),
            actions: (() => {
                switch (C) {
                    case 1:
                        return [{
                            variant: "secondary",
                            text: T.intl.string(T.t.oEAioF),
                            disabled: N,
                            onClick: l
                        }, {
                            variant: "primary",
                            text: T.intl.string(T.t.etZP4B),
                            loading: N,
                            onClick: O
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
                if (null == f) return (0, i.jsx)(d.y$y, {});
                switch (C) {
                    case 1:
                        return (0, i.jsx)(E, {
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