/** chunk id: 661623, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(158954),
    o = n(311907),
    c = n(230109),
    u = n(990078),
    d = n(397927),
    g = n(713517),
    f = n(613566),
    m = n(979286),
    p = n(590180),
    _ = n(4227),
    b = n(597783),
    h = n(61750),
    E = n(357704),
    v = n(985018),
    C = n(514294),
    A = n(620399),
    S = n(68465),
    x = n(165530),
    O = n(871237);
let y = l.memo(function(e) {
    let {
        category: t,
        rewardSkuId: n
    } = e, {
        handleCardVisibilityChange: s
    } = (0, b.Z)(n), y = l.useRef(null), {
        isHoveringOrFocusing: j
    } = (0, g.A)(y), {
        readyToClaim: T,
        collectibleProductSkuIds: L,
        collectedSkuIds: I
    } = (0, E.K)(t, n), k = (0, o.bG)([_.A], () => _.A.isClaiming === n);
    return (0, r.jsx)(c.L, {
        onChange: s,
        threshold: 0,
        innerRef: y,
        children: (0, r.jsx)("div", {
            ref: y,
            className: a()(C.ty, A.Q3, {
                [C.yo]: j
            }),
            "aria-label": v.intl.formatToPlainString(v.t.Ez6aHE, {
                category: t.name
            }),
            children: (0, r.jsxs)("div", {
                className: C.qt,
                children: [(0, r.jsx)("img", {
                    alt: "Reward Bow",
                    src: O.A,
                    className: A.L8
                }), (0, r.jsx)("div", {
                    className: C.N1,
                    children: (0, r.jsx)(d.LpS, {
                        text: v.intl.string(v.t.rykAJ9),
                        disableColor: !0,
                        className: A.HZ
                    })
                }), (0, r.jsxs)("div", {
                    className: C.xQ,
                    children: [(0, r.jsxs)("div", {
                        className: A.xE,
                        children: [(0, r.jsxs)("div", {
                            className: A.cs,
                            children: [(0, r.jsx)(d.Heading, {
                                variant: "heading-md/medium",
                                color: "text-strong",
                                lineClamp: 1,
                                className: C.tZ,
                                children: v.intl.string(v.t["0mDmg/"])
                            }), (0, r.jsx)(u.m, {
                                text: T ? v.intl.string(v.t.cKH3tk) : v.intl.formatToPlainString(v.t["8aMDPc"], {
                                    totalCount: L.length
                                }),
                                align: "right",
                                caretConfig: {
                                    position: "bottom",
                                    align: "end"
                                },
                                position: "top",
                                children: (0, r.jsx)("span", {
                                    className: A.ZB,
                                    children: (0, r.jsx)(i.cBN, {
                                        size: "xs"
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: C.oh,
                            "aria-hidden": !0,
                            children: (0, r.jsxs)("div", {
                                className: A.L$,
                                children: [(0, r.jsx)(f.Ay, {
                                    variant: f.qP.BLUE,
                                    progress: I.length,
                                    maximum: L.length
                                }), (0, r.jsxs)("div", {
                                    className: a()(A.__, {
                                        [A.gF]: T
                                    }),
                                    children: [T ? (0, r.jsx)(i.Uzd, {
                                        size: "xs",
                                        color: "currentColor"
                                    }) : null, (0, r.jsx)(i.EYj, {
                                        variant: "text-xs/medium",
                                        color: "currentColor",
                                        children: v.intl.formatToPlainString(v.t["5TwASM"], {
                                            collectedCount: I.length,
                                            totalCount: L.length
                                        })
                                    })]
                                })]
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: C.Vs,
                        children: (0, r.jsx)(i.e2v, {
                            wrap: !1,
                            className: C.Ld,
                            fullWidth: !0,
                            children: (0, r.jsx)(i.$nd, {
                                variant: "primary",
                                onClick: e => {
                                    e.stopPropagation(), T && (0, m.BX)(t.skuId, n).then(() => {
                                        let e = p.A.getProduct(n);
                                        null != e && (0, h.A)({
                                            product: e,
                                            analyticsLocations: [],
                                            overrideGraphic: {
                                                type: "video",
                                                src: x.A,
                                                fallbackImageSrc: S.A,
                                                loop: !0,
                                                loopAt: 6,
                                                aspectRatio: "16/9"
                                            }
                                        })
                                    }).catch(() => {
                                        (0, d.mMO)(() => Promise.resolve(e => (0, r.jsx)(i.Modal, {
                                            transitionState: e.transitionState,
                                            onClose: e.onClose,
                                            size: "sm",
                                            title: v.intl.string(v.t.SRTlyA),
                                            actions: [{
                                                text: v.intl.string(v.t.TyCVIq),
                                                onClick: e.onClose,
                                                variant: "primary"
                                            }],
                                            children: (0, r.jsx)("div", {
                                                children: v.intl.string(v.t["0YpIF/"])
                                            })
                                        })))
                                    })
                                },
                                text: v.intl.string(v.t.VnVTNc),
                                fullWidth: !0,
                                disabled: !T,
                                loading: k
                            })
                        })
                    })]
                })]
            })
        })
    })
})