/** Chunk was on 97492 **/
/** chunk id: 928764, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => H
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(506774),
    c = n(990078),
    u = n(397927),
    d = n(843472),
    p = n(56562),
    h = n(765671),
    f = n(304072),
    g = n(390395),
    m = n(659195),
    b = n(505527),
    A = n(467073),
    y = n(960538),
    _ = n(898280),
    O = n(573163),
    j = n(260821),
    v = n(226698),
    x = n(376708),
    E = n(715757),
    C = n(390897),
    S = n(704860),
    I = n(152007),
    N = n(867455),
    T = n(734057),
    P = n(147036),
    w = n(957565),
    R = n(435470),
    D = n(473503),
    M = n(853742),
    L = n(652215),
    k = n(985018),
    G = n(641131),
    U = n(256366),
    B = n(233080),
    V = n(165180);

function F(e) {
    let {
        channel: t
    } = e, i = t.isArchivedThread(), s = (0, x.uW)(t), [a, c] = l.useState(!1), d = () => {
        c(!0), v.A.resolveFlag(t.id).then(() => {
            c(!1)
        })
    };
    return s ? (0, r.jsx)(u.Button, {
        size: "sm",
        variant: "secondary",
        text: i ? k.intl.string(G.default["2Y4vkk"]) : k.intl.string(G.default.YIbR4r),
        onClick: () => {
            !0 === o.w.get(C.f) ? d() : (0, u.mMO)(async () => {
                let {
                    default: e
                } = await Promise.resolve().then(n.bind(n, 390897));
                return t => {
                    let {
                        transitionState: n,
                        onClose: l
                    } = t;
                    return (0, r.jsx)(e, {
                        transitionState: n,
                        onClose: l,
                        handleResolveFlag: d
                    })
                }
            })
        },
        loading: a,
        icon: u.A9s,
        disabled: i
    }) : null
}

function H(e) {
    let {
        postId: t,
        isFirstMessage: n,
        isLastItem: i = !1,
        parentChannelId: o
    } = e, {
        ref: v,
        width: x
    } = (0, h.Ay)(), [C, G] = l.useState(3), [H, K] = l.useState(!n), [W, z] = (0, f.A)(!1, 2e3), Y = (0, a.bG)([T.A], () => T.A.getChannel(t), [t]), {
        firstMessage: q
    } = (0, D.OA)(Y), X = (0, a.bG)([I.A], () => I.A.hasJoined(t)), {
        disableReactionUpdates: J,
        disableReactionCreates: Q,
        isLurking: Z,
        isGuest: $,
        isPendingMember: ee
    } = (0, A.A)(Y), et = (0, E.W1)(Y), en = (0, a.bG)([T.A], () => T.A.getChannel(o)), er = (0, R.Ck)(en), el = (0, a.bG)([g.A], () => g.A.shouldDisplayPrompt(t) && !0 === n, [t, n]), ei = l.useCallback(e => {
        let t = e[0];
        if (null != t && n) {
            let e = t.intersectionRect,
                n = t.boundingClientRect;
            K((e.bottom - e.top) / (n.bottom - n.top) < 1)
        }
    }, [n]);
    l.useLayoutEffect(() => {
        let e = v.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(ei, {
            threshold: 1
        });
        return t.observe(e), () => {
            t.disconnect()
        }
    });
    let [es, ea] = l.useState(!0);
    if (l.useEffect(() => {
            null == x || (G(Math.floor((x - 280) / 58)), ea(!1))
        }, [x]), null == Y || null == q) return null;
    let eo = q.reactions.length > 0,
        ec = () => {
            (0, M.jC)({
                postId: Y.id,
                location: {
                    section: L.JJy.CHANNEL_HEADER
                }
            }), (0, w.C)((0, P.af)(Y, en), () => z(!0))
        },
        eu = X ? u.A9s : u.XFE;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: s()(U.kL, {
                [U.wx]: H
            }),
            ref: v,
            children: [et ? (0, r.jsx)("div", {
                className: U.kX,
                children: (0, r.jsx)(S.A, {
                    message: q,
                    channel: Y
                })
            }) : (0, r.jsxs)("div", {
                className: s()(U.hY, {
                    [U.Lq]: es
                }),
                children: [!eo && !Q && null != er && (0, r.jsx)("div", {
                    className: B.reactions,
                    children: (0, r.jsx)(j.qT, {
                        message: q,
                        readOnly: !1,
                        useChatFontScaling: !1,
                        isLurking: Z,
                        isGuest: $,
                        isPendingMember: ee,
                        emoji: er,
                        type: b.v.NORMAL,
                        hideCount: !0,
                        count: 0,
                        me: !1,
                        burst_count: 0,
                        me_burst: !1,
                        emojiSize: "reaction"
                    })
                }), (0, r.jsx)(O.A, {
                    message: q,
                    channel: Y,
                    disableReactionCreates: !0,
                    disableReactionUpdates: J,
                    isLurking: Z,
                    isGuest: $,
                    isPendingMember: ee,
                    maxReactions: C,
                    className: U.Br,
                    useChatFontScaling: !1,
                    isForumToolbar: !0,
                    forceHideReactionCreates: !0
                }), !Q && (0, r.jsx)(y.t, {
                    message: q,
                    channel: Y,
                    useChatFontScaling: !1,
                    className: s()(V.secondary, U.vU, {
                        [U.w$]: !eo
                    }),
                    isForumToolbar: !0,
                    children: !eo && k.intl.string(k.t.xpOyTO)
                })]
            }), (0, r.jsxs)("div", {
                className: U.Uo,
                children: [et ? (0, r.jsx)(F, {
                    channel: Y
                }) : !Z && (0, r.jsx)(c.m, {
                    text: k.intl.string(k.t.F7oeDv),
                    children: (0, r.jsx)(u.Button, {
                        icon: eu,
                        size: "sm",
                        variant: "secondary",
                        text: X ? k.intl.string(k.t["7OkUzs"]) : k.intl.string(k.t["3aOv+h"]),
                        onClick: () => {
                            X ? N.A.leaveThread(Y, "Forum Toolbar") : N.A.joinThread(Y, "Forum Toolbar")
                        }
                    })
                }), (0, r.jsx)(c.m, {
                    text: k.intl.string(k.t.WqhZss),
                    children: W ? (0, r.jsx)(u.Button, {
                        icon: u.A9s,
                        size: "sm",
                        variant: "secondary",
                        onClick: ec,
                        text: k.intl.string(k.t.t5VZ88)
                    }) : (0, r.jsx)(u.K0, {
                        icon: u.qYV,
                        size: "sm",
                        variant: "secondary",
                        onClick: ec,
                        "aria-label": k.intl.string(k.t.WqhZss)
                    })
                }), !n && (0, r.jsx)(c.m, {
                    text: k.intl.string(k.t.nFP4oa),
                    children: (0, r.jsx)(u.K0, {
                        icon: u.Dl6,
                        size: "sm",
                        variant: "secondary",
                        onClick: () => {
                            d.A.jumpToMessage({
                                channelId: Y.id,
                                messageId: Y.id,
                                flash: !0,
                                jumpType: p.US.INSTANT
                            })
                        },
                        "aria-label": k.intl.string(k.t.nFP4oa)
                    })
                })]
            })]
        }), el && (0, r.jsx)(m.A, {
            threadId: t
        }), (0, r.jsx)(_.A, {
            channel: Y,
            isLastItem: i
        })]
    })
}