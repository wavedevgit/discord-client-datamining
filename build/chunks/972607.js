/** Chunk was on web.js **/
/** chunk id: 972607, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k
}), n(896048), n(638769);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(311907),
    u = n(732955),
    d = n(421380),
    f = n(397927),
    p = n(398590),
    _ = n(49229),
    h = n(966327),
    m = n(841702),
    g = n(769015),
    E = n(242874),
    y = n(552736),
    b = n(810498),
    O = n(219271),
    v = n(21119),
    A = n(7133),
    I = n(994500),
    S = n(351906),
    T = n(287809),
    C = n(957565),
    N = n(45938),
    w = n(927578),
    R = n(427262),
    P = n(937008),
    D = n(652215),
    L = n(788868),
    x = n(985018),
    M = n(381907);
let j = 1500;

function k(e) {
    let {
        giftCode: t,
        application: n,
        sku: a,
        subscriptionPlan: s,
        selectedGiftStyle: l,
        onClose: u,
        hasSentMessage: p,
        giftRecipient: _,
        giftMessageError: E,
        isSendingMessage: O
    } = e, [v, I] = i.useState(f.e2O.Modes.DEFAULT), T = (0, c.bG)([S.A], () => S.A.enabled), k = p || null != l && null != _, G = (null == a ? void 0 : a.productLine) === D.EZt.COLLECTIBLES, F = (0, y.A)(), {
        selectedGiftingPromotionReward: V
    } = (0, P.Pv)(), B = null == F ? void 0 : F.giftPurchaseConfirmation, H = (0, m.Mv)(V), Y = (0, b.Mq)(s) && null != H && null != B, W = () => null != s ? s.skuId : null != a ? a.id : null, K = () => {
        let e;
        return null != E ? x.intl.string(x.t.qB8aya) : null == s ? null : (e = s.interval === L.WT.MONTH ? k ? Y ? B.monthGiftText : x.t["4ZJ+7Z"] : x.t["P+z55d"] : k ? Y ? B.yearGiftText : x.t.p0pZXP : x.t.bXqk3o, x.intl.format(e, {
            skuName: (0, w.RH)(s.id),
            intervalCount: s.intervalCount
        }))
    }, z = () => null != _ || p && null == E ? x.intl.string(x.t.zOmK9N) : null != E ? x.intl.string(x.t.d1lrmU) : x.intl.string(x.t["/s1xR7"]), q = (e, t) => {
        null != a && (0, N.AK)(new A.A({
            code: t,
            maxUses: 1
        }), a), (0, C.C)(e, () => I(f.e2O.Modes.SUCCESS), () => I(f.e2O.Modes.ERROR)), setTimeout(() => {
            I(f.e2O.Modes.DEFAULT)
        }, j)
    }, Z = () => {
        let e;
        if (null == t) return null;
        switch (v) {
            case f.e2O.Modes.SUCCESS:
                e = x.intl.string(x.t.XVvPjU);
                break;
            case f.e2O.Modes.ERROR:
                e = x.intl.string(x.t.i4GM3L);
                break;
            default:
                e = x.intl.string(x.t.OpuAlK)
        }
        return (0, r.jsxs)("div", {
            className: M.PN,
            children: [null != t && (0, r.jsx)(f.D0$, {
                label: x.intl.string(x.t["/dG4NA"]),
                children: (0, r.jsx)(f.e2O, {
                    hideMessage: T ? x.intl.string(x.t["0RLn47"]) : null,
                    value: (0, N.Zq)(t),
                    mode: v,
                    text: e,
                    onCopy: e => q(e, t),
                    supportsCopy: C.p5,
                    className: M.__invalid_copyInput,
                    buttonColor: d.XD.LINK,
                    buttonLook: d.pR.LINK
                })
            }), (0, r.jsx)("div", {
                className: M.W$,
                children: x.intl.string(x.t.QWKUpn)
            })]
        })
    }, Q = () => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: M.I0,
            children: K()
        }), null == E && (0, r.jsx)(U, {
            giftCode: t,
            onClose: u
        }), (0, r.jsx)("div", {
            className: M.yF
        }), Z()]
    }), X = () => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: M.jx,
            children: [(0, r.jsx)(h.A, {
                user: _,
                size: f._3J.SIZE_40
            }), (0, r.jsxs)("div", {
                className: M.gn,
                children: [(0, r.jsx)(f.Heading, {
                    variant: "heading-md/semibold",
                    children: R.Ay.getName(_)
                }), (0, r.jsxs)("div", {
                    className: M.Ik,
                    children: [" ", R.Ay.getUserTag(_)]
                })]
            })]
        }), (0, r.jsx)("div", {
            className: M._c,
            children: K()
        })]
    });
    return O ? (0, r.jsxs)("div", {
        className: M.EL,
        children: [null != n ? (0, r.jsx)(g.A, {
            game: n,
            className: M.__invalid_icon,
            size: g.M.LARGE,
            skuId: W()
        }) : null, (0, r.jsx)(f.y$y, {
            type: f.tVU.PULSING_ELLIPSIS
        })]
    }) : (0, r.jsxs)("div", {
        className: o()(M.EL, {
            [M.L1]: Y
        }),
        children: [null != n ? (0, r.jsx)(g.A, {
            game: n,
            className: M.__invalid_icon,
            size: g.M.LARGE,
            skuId: W()
        }) : null, (0, r.jsx)(f.Heading, {
            variant: "heading-lg/semibold",
            className: o()({
                [M.wx]: null == l && !G,
                [M.$A]: null != l && !G
            }),
            children: z()
        }), p && null != _ && null == E || k ? X() : Q()]
    })
}
let U = e => {
    let {
        giftCode: t,
        onClose: n
    } = e;
    i.useEffect(() => {
        _.A.fetchRelationships(), (0, O.u)()
    }, []);
    let [a, o] = i.useState(), [s, d] = i.useState(!1), [m, g] = i.useState(!1), {
        userAffinities: y,
        isLoading: b
    } = (0, c.cf)([v.A], () => ({
        userAffinities: v.A.getUserAffinitiesMap(),
        isLoading: v.A.isFetching()
    })), A = Array.from(y.keys()).sort((e, t) => v.A.compare(e, t)), S = (0, c.bG)([I.A], () => I.A.getFriendIDs()), C = l().difference(S, A), N = [...A, ...C], w = (0, c.bG)([T.default], () => T.default.filter(e => N.includes(e.id) && !e.bot), [N]);
    if (null == w || 0 === w.length) return null;
    let P = l().sortBy(w, e => N.indexOf(e.id));
    return (0, r.jsxs)("div", {
        className: M.vt,
        children: [(0, r.jsxs)("div", {
            className: M.AQ,
            children: [(0, r.jsx)(f.ZiE, {
                selectionMode: "single",
                label: x.intl.string(x.t.MJw05f),
                placeholder: x.intl.string(x.t.J019jZ),
                loading: b,
                value: a,
                onSelectionChange: e => {
                    o(e), d(!1)
                },
                options: P.map(e => ({
                    id: e.id,
                    value: e,
                    label: "".concat(R.Ay.getUserTag(e)),
                    leading: (0, r.jsx)(h.A, {
                        user: e,
                        size: f._3J.SIZE_20
                    })
                }))
            }), (0, r.jsx)("div", {
                className: M.Qg,
                children: (0, r.jsx)(u.$nd, {
                    disabled: null == a,
                    loading: m,
                    onClick: () => {
                        g(!0), (0, E.UN)(a, t).then(() => {
                            n(), (0, p.bz)()
                        }).catch(() => {
                            d(!0), g(!1)
                        })
                    },
                    text: x.intl.string(x.t["+EgwQn"])
                })
            })]
        }), (0, r.jsx)("div", {
            className: s ? M.Sc : M.W$,
            children: s ? x.intl.string(x.t.jo5Vbl) : x.intl.string(x.t["8/N3v3"])
        })]
    })
}