/** chunk id: 928764, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => V
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(506774),
    c = n(990078),
    u = n(397927),
    d = n(843472),
    h = n(56562),
    p = n(765671),
    f = n(304072),
    m = n(390395),
    g = n(659195),
    A = n(505527),
    b = n(467073),
    _ = n(960538),
    y = n(898280),
    v = n(573163),
    E = n(260821),
    O = n(226698),
    C = n(376708),
    x = n(715757),
    S = n(390897),
    j = n(704860),
    I = n(152007),
    T = n(867455),
    N = n(734057),
    P = n(147036),
    w = n(957565),
    R = n(435470),
    D = n(473503),
    M = n(853742),
    L = n(652215),
    k = n(985018),
    U = n(641131),
    G = n(256366),
    F = n(233080),
    H = n(165180);

function B(e) {
    let {
        channel: t
    } = e, i = t.isArchivedThread(), a = (0, C.uW)(t), [s, c] = r.useState(!1), d = () => {
        c(!0), O.A.resolveFlag(t.id).then(() => {
            c(!1)
        })
    };
    return a ? (0, l.jsx)(u.Button, {
        size: "sm",
        variant: "secondary",
        text: i ? k.intl.string(U.default["2Y4vkk"]) : k.intl.string(U.default.YIbR4r),
        onClick: () => {
            !0 === o.w.get(S.f) ? d() : (0, u.mMO)(async () => {
                let {
                    default: e
                } = await Promise.resolve().then(n.bind(n, 390897));
                return t => {
                    let {
                        transitionState: n,
                        onClose: r
                    } = t;
                    return (0, l.jsx)(e, {
                        transitionState: n,
                        onClose: r,
                        handleResolveFlag: d
                    })
                }
            })
        },
        loading: s,
        icon: u.A9s,
        disabled: i
    }) : null
}

function V(e) {
    let {
        postId: t,
        isFirstMessage: n,
        isLastItem: i = !1,
        parentChannelId: o
    } = e, {
        ref: O,
        width: C
    } = (0, p.Ay)(), [S, U] = r.useState(3), [V, K] = r.useState(!n), [W, z] = (0, f.A)(!1, 2e3), q = (0, s.bG)([N.A], () => N.A.getChannel(t), [t]), {
        firstMessage: Y
    } = (0, D.OA)(q), J = (0, s.bG)([I.A], () => I.A.hasJoined(t)), {
        disableReactionUpdates: Z,
        disableReactionCreates: X,
        isLurking: Q,
        isPendingMember: $
    } = (0, b.A)(q), ee = (0, x.W1)(q), et = (0, s.bG)([N.A], () => N.A.getChannel(o)), en = (0, R.Ck)(et), el = (0, s.bG)([m.A], () => m.A.shouldDisplayPrompt(t) && !0 === n, [t, n]), er = r.useCallback(e => {
        let t = e[0];
        if (null != t && n) {
            let e = t.intersectionRect,
                n = t.boundingClientRect;
            K((e.bottom - e.top) / (n.bottom - n.top) < 1)
        }
    }, [n]);
    r.useLayoutEffect(() => {
        let e = O.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(er, {
            threshold: 1
        });
        return t.observe(e), () => {
            t.disconnect()
        }
    });
    let [ei, ea] = r.useState(!0);
    if (r.useEffect(() => {
            null == C || (U(Math.floor((C - 280) / 58)), ea(!1))
        }, [C]), null == q || null == Y) return null;
    let es = Y.reactions.length > 0,
        eo = () => {
            (0, M.jC)({
                postId: q.id,
                location: {
                    section: L.JJy.CHANNEL_HEADER
                }
            }), (0, w.C)((0, P.af)(q, et), () => z(!0))
        },
        ec = J ? u.A9s : u.XFE;
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
            className: a()(G.kL, {
                [G.wx]: V
            }),
            ref: O,
            children: [ee ? (0, l.jsx)("div", {
                className: G.kX,
                children: (0, l.jsx)(j.A, {
                    message: Y,
                    channel: q
                })
            }) : (0, l.jsxs)("div", {
                className: a()(G.hY, {
                    [G.Lq]: ei
                }),
                children: [!es && !X && null != en && (0, l.jsx)("div", {
                    className: F.reactions,
                    children: (0, l.jsx)(E.qT, {
                        message: Y,
                        readOnly: !1,
                        useChatFontScaling: !1,
                        isLurking: Q,
                        isPendingMember: $,
                        emoji: en,
                        type: A.v.NORMAL,
                        hideCount: !0,
                        count: 0,
                        me: !1,
                        burst_count: 0,
                        me_burst: !1,
                        emojiSize: "reaction"
                    })
                }), (0, l.jsx)(v.A, {
                    message: Y,
                    channel: q,
                    disableReactionCreates: !0,
                    disableReactionUpdates: Z,
                    isLurking: Q,
                    isPendingMember: $,
                    maxReactions: S,
                    className: G.Br,
                    useChatFontScaling: !1,
                    isForumToolbar: !0,
                    forceHideReactionCreates: !0
                }), !X && (0, l.jsx)(_.t, {
                    message: Y,
                    channel: q,
                    useChatFontScaling: !1,
                    className: a()(H.secondary, G.vU, {
                        [G.w$]: !es
                    }),
                    isForumToolbar: !0,
                    children: !es && k.intl.string(k.t.xpOyTO)
                })]
            }), (0, l.jsxs)("div", {
                className: G.Uo,
                children: [ee ? (0, l.jsx)(B, {
                    channel: q
                }) : !Q && (0, l.jsx)(c.m, {
                    text: k.intl.string(k.t.F7oeDv),
                    children: (0, l.jsx)(u.Button, {
                        icon: ec,
                        size: "sm",
                        variant: "secondary",
                        text: J ? k.intl.string(k.t["7OkUzs"]) : k.intl.string(k.t["3aOv+h"]),
                        onClick: () => {
                            J ? T.A.leaveThread(q, "Forum Toolbar") : T.A.joinThread(q, "Forum Toolbar")
                        }
                    })
                }), (0, l.jsx)(c.m, {
                    text: k.intl.string(k.t.WqhZss),
                    children: W ? (0, l.jsx)(u.Button, {
                        icon: u.A9s,
                        size: "sm",
                        variant: "secondary",
                        onClick: eo,
                        text: k.intl.string(k.t.t5VZ88)
                    }) : (0, l.jsx)(u.K0, {
                        icon: u.qYV,
                        size: "sm",
                        variant: "secondary",
                        onClick: eo,
                        "aria-label": k.intl.string(k.t.WqhZss)
                    })
                }), !n && (0, l.jsx)(c.m, {
                    text: k.intl.string(k.t.nFP4oa),
                    children: (0, l.jsx)(u.K0, {
                        icon: u.Dl6,
                        size: "sm",
                        variant: "secondary",
                        onClick: () => {
                            d.A.jumpToMessage({
                                channelId: q.id,
                                messageId: q.id,
                                flash: !0,
                                jumpType: h.US.INSTANT
                            })
                        },
                        "aria-label": k.intl.string(k.t.nFP4oa)
                    })
                })]
            })]
        }), el && (0, l.jsx)(g.A, {
            threadId: t
        }), (0, l.jsx)(y.A, {
            channel: q,
            isLastItem: i
        })]
    })
}