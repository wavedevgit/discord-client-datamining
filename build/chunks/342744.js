/** Chunk was on web.js **/
/** chunk id: 342744, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => I
}), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(384904),
    d = n(923408),
    f = n(198982),
    p = n(136857),
    _ = n(793574),
    h = n(688810),
    m = n(253390),
    g = n(166403),
    E = n(927578),
    y = n(985018),
    b = n(359294);
async function O(e, t, n, r) {
    let i = (0, E.aE)(e, t);
    await (0, d.Ey)(n), await (0, u.nV)(e, {
        items: i
    }, {
        amount: 0,
        currency: e.currency
    }, (0, E.UC)(i, e.currency, e.paymentSourceId), r)
}

function v(e) {
    let {
        errorMsg: t
    } = e;
    return (0, r.jsxs)("div", {
        className: b.rf,
        children: [null !== t && (0, r.jsx)("div", {
            className: b.z3,
            children: (0, r.jsx)(c.wx6, {
                type: "critical",
                children: t
            })
        }), (0, r.jsx)("div", {
            children: y.intl.string(y.t.DY2CXs)
        })]
    })
}

function A() {
    return (0, r.jsxs)("div", {
        className: b.rf,
        children: [(0, r.jsx)("div", {
            className: b.dk
        }), (0, r.jsx)("div", {
            children: y.intl.string(y.t.G27uHe)
        })]
    })
}

function I(e) {
    let {
        guildBoostSlotId: t,
        transitionState: n,
        onClose: a
    } = e, {
        analyticsLocations: d
    } = (0, h.Ay)(_.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    i.useEffect(() => {
        g.A.hasFetchedSubscriptions() || (0, u.hP)()
    }, []);
    let b = (0, l.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        [I, S] = i.useState(1),
        [T, C] = i.useState(!1),
        [N, w] = i.useState(null),
        R = i.useCallback(async () => {
            if (null != b) try {
                C(!0), w(null);
                let e = (0, m.v)(b, 1);
                s()((0, E.bx)(e) <= (0, E.bx)(b.additionalPlans), "Uncanceling should not increase the number of guild subscriptions"), await O(b, e, t, d), S(2)
            } catch (t) {
                let e = t instanceof f.Ey ? t : new f.Ey(t, t.code);
                w(y.intl.string(e.code === p.tG.BILLING_PAUSE_INVALID_UPDATE ? y.t.dq4vq7 : y.t["5mlOCW"])), C(!1)
            }
        }, [b, t, d]),
        P = () => {
            switch (I) {
                case 1:
                    return y.intl.string(y.t.l52ih2);
                case 2:
                    return y.intl.string(y.t.H9QUAB);
                default:
                    return ""
            }
        },
        D = () => {
            switch (I) {
                case 1:
                    return [{
                        variant: "secondary",
                        text: y.intl.string(y.t.oEAioF),
                        disabled: T,
                        onClick: a
                    }, {
                        variant: "primary",
                        text: y.intl.string(y.t.etZP4B),
                        loading: T,
                        onClick: R
                    }];
                case 2:
                    return [{
                        variant: "primary",
                        text: y.intl.string(y.t.BddRzS),
                        onClick: a
                    }];
                default:
                    return []
            }
        },
        x = () => {
            if (null == b) return (0, r.jsx)(c.y$y, {});
            switch (I) {
                case 1:
                    return (0, r.jsx)(v, {
                        errorMsg: N
                    });
                case 2:
                    return (0, r.jsx)(A, {});
                default:
                    throw Error("Unexpected step: ".concat(I))
            }
        };
    return (0, r.jsx)(h.f5, {
        value: d,
        children: (0, r.jsx)(o.Modal, {
            transitionState: n,
            onClose: async () => await a(),
            size: "sm",
            title: P(),
            actions: D(),
            children: x()
        })
    })
}