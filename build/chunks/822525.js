/** chunk id: 822525, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(311907),
    d = n(827734),
    u = n(397927),
    g = n(580630),
    m = n(500345),
    p = n(599941),
    f = n(636194),
    h = n(11351),
    b = n(306444),
    x = n(922975),
    j = n(679428),
    _ = n(778526),
    O = n(985018),
    v = n(17149);

function y(e) {
    var t, n;
    let {
        guildId: l,
        initialEditStateId: a,
        allSubscriptionListings: y,
        priceTiers: A,
        onDeleteEditState: E,
        groupListingId: N,
        onBeforeDispatchNewListing: S,
        onAfterDispatchNewListing: I
    } = e, [C, T] = i.useState(a), P = (0, c.bG)([f.A], () => f.A.getSubscriptionListing(C)), w = null == P, [R, D] = i.useState(w), G = null == P ? void 0 : P.subscription_plans[0], L = null != (t = null == P ? void 0 : P.published) && t, k = null != (n = null == P ? void 0 : P.archived) && n, M = !k && !L && void 0 !== P, U = void 0 === P, B = (0, h.gN)(), [F] = x.tx(C), [H] = x.bL(C), [V] = x.I8(C), [K] = x.lK(C, 1024), z = "" !== F ? F : O.intl.string(O.t.QWhe9G), W = "" !== F && null != K && "" !== V && null != H && !B, Y = x.rf(C), {
        loading: X,
        error: J,
        handleCreateOrUpdateFromEditState: Z
    } = x.j1(), {
        submitting: Q,
        error: q,
        publishSubscriptionListing: $
    } = (0, p.Yc)(), ee = X || Q;
    return (0, r.jsxs)("div", {
        className: v.kL,
        children: [(0, r.jsxs)("div", {
            className: s()(v.wx, {
                [v.xo]: R
            }),
            children: [(0, r.jsx)("div", {
                className: v.oZ,
                children: null == K ? (0, r.jsx)(j.A, {
                    className: v.wv,
                    "aria-hidden": !0
                }) : (0, r.jsx)("img", {
                    className: v.F0,
                    src: K,
                    alt: z
                })
            }), (0, r.jsxs)("div", {
                className: v.me,
                children: [(0, r.jsx)(u.Text, {
                    variant: "text-md/medium",
                    color: "interactive-text-active",
                    children: z
                }), (0, r.jsx)(u.hKd, {
                    size: 2
                }), (0, r.jsxs)("div", {
                    className: v.Hp,
                    children: [M && (0, r.jsx)(u.LpS, {
                        color: d.A.unsafe_rawColors.YELLOW_300.css,
                        text: O.intl.string(O.t.vosPk5),
                        className: v.vW
                    }), k && (0, r.jsx)(u.LpS, {
                        color: d.A.unsafe_rawColors.PRIMARY_500.css,
                        text: O.intl.string(O.t.nhbtEl),
                        className: v.KR
                    }), U && (0, r.jsx)(u.LpS, {
                        color: d.A.unsafe_rawColors.PRIMARY_500.css,
                        text: O.intl.string(O.t.aiwXeq),
                        className: v.s7
                    }), null != G && (0, r.jsxs)(u.Text, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: [(0, g.$g)(G.price, G.currency), "/", (0, m.cV)(G)]
                    })]
                })]
            }), R ? (0, r.jsxs)("div", {
                className: v.$s,
                children: [(0, r.jsx)(u.QWc, {
                    variant: "secondary",
                    onClick: () => {
                        x.Ts(C), w ? null == E || E() : D(!1)
                    },
                    text: O.intl.string(O.t["ETE/oC"])
                }), (0, r.jsx)(u.Button, {
                    variant: "primary",
                    onClick: () => Z({
                        guildId: l,
                        editStateId: C,
                        groupListingId: N,
                        onBeforeDispatchNewListing: S,
                        onAfterDispatchNewListing: e => {
                            T(e.id), null == I || I(e)
                        }
                    }),
                    disabled: !W || !Y,
                    loading: ee,
                    text: O.intl.string(O.t["R3BPH+"])
                })]
            }) : (0, r.jsx)(u.DUT, {
                onClick: () => D(!0),
                "aria-label": O.intl.string(O.t["2qPbmO"]),
                children: (0, r.jsx)(u.R2l, {
                    size: "xs",
                    color: "currentColor",
                    className: v.rD
                })
            })]
        }), R && (0, r.jsx)(b.A, {
            editStateId: C,
            guildId: l,
            groupListingId: N,
            children: (0, r.jsx)(_.A, {
                allSubscriptionListings: y,
                priceTiers: A,
                loading: ee,
                error: null != J ? J : q,
                handlePublishTier: () => {
                    o()(null != N, "group listing doesnt exist"), o()(null != P, "subscription listing doesnt exist"), $({
                        guildId: l,
                        groupListingId: N,
                        listingId: P.id
                    })
                },
                onDeleteEditState: E
            })
        })]
    })
}