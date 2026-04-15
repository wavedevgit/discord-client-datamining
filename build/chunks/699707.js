/** chunk id: 699707 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(407045),
    o = n(397927),
    d = n(475743),
    c = n(216418),
    u = n(80051),
    h = n(961350),
    A = n(430452),
    _ = n(203982),
    m = n(220144),
    p = n(175203),
    g = n(306852),
    f = n(947580),
    E = n(163432),
    x = n(652215),
    I = n(806931),
    C = n(256960),
    N = n(363862);
let T = 16 / 9,
    S = 8 + E.Vp;

function b(e) {
    let t, {
            onSelectParticipant: n,
            onContextMenuParticipant: s,
            onFullscreenParticipant: b,
            participants: y,
            filteredParticipants: v,
            popoutType: R,
            inCall: j,
            channel: O,
            selectedParticipant: L,
            showParticipants: M = !0,
            className: D,
            width: U,
            height: G,
            layout: P,
            idle: k
        } = e,
        w = A.Ay.getVideoComponent(),
        B = h.default.getId(),
        [V, H] = l.useState(null),
        F = (0, d.A)(V),
        [W, K] = l.useState(!0),
        [Y, z] = l.useState(!1),
        X = L.type === I.lp.ACTIVITY,
        q = (0, c.A)(X ? L.applicationId : void 0),
        $ = !X && null != L.streamId,
        J = G <= 2 * S + 144,
        Q = M && !J,
        Z = (0, d.A)(Q),
        ee = P === x.DUB.MINIMUM || P === x.DUB.NORMAL,
        et = !J && (!ee || X),
        en = (0, m.A)(et, 100),
        ei = ((0, d.A)(L.id) ?? L.id) !== L.id,
        el = 0;
    (X || Q) && (el += 72), X && !Q && (et ? el += 48 : el += 8), Q && (el += .5 * S + 8);
    let es = l.useMemo(() => X && q ? U / (G - 2 * el) : $ && null != V && V.width > 0 && V.height > 0 ? V.width / V.height : T, [$, V, X, U, G, el, q]),
        ea = G - 2 * el,
        er = X && q ? U : ea * es,
        eo = Math.floor(Math.min(U, er) / es),
        ed = G > U / es + 72 + S + 8;
    t = Q || X ? Q ? -16 : -8 : 40 + Math.max(0, 72 - (G - eo) / 2);
    let ec = Math.max(0, 72 - (G - eo) / 2);
    l.useEffect(() => {
        let e = setTimeout(() => {
            K(!1)
        }, 250);
        return () => {
            clearTimeout(e)
        }
    }, []);
    let eu = W || null == F,
        eh = eu ? "animate-never" : "animate-always",
        eA = (0, o.zhh)({
            value: +!!Q,
            delay: ed || !Q ? 0 : 100,
            config: {
                ...r.config.stiff,
                clamp: !0
            },
            onStart: () => z(!0),
            onChange: () => _._.dispatch(x.jej.REMEASURE_TARGET),
            onRest: () => {
                z(!1), _._.dispatch(x.jej.REMEASURE_TARGET)
            }
        }, eh),
        e_ = (0, o.zhh)({
            value: +!!Q,
            config: {
                ...r.config.stiff,
                clamp: !0
            }
        }, eh),
        em = (0, o.zhh)({
            value: er,
            config: {
                ...r.config.stiff,
                clamp: !0
            }
        }, Z === Q && e_.value.idle && !en || ei || eu ? "animate-never" : "animate-always"),
        ep = (0, o.zhh)({
            value: t,
            config: {
                ...r.config.stiff,
                clamp: !0
            }
        }, eh),
        eg = (0, o.pnh)(L, {
            keys: e => e?.id,
            config: {
                ...r.config.stiff,
                clamp: !0
            },
            initial: null,
            from: {
                opacity: 0
            },
            enter: {
                opacity: 1
            },
            leave: {
                opacity: 0
            }
        }, eh),
        ef = l.useCallback(e => {
            H(e), K(!1)
        }, []),
        eE = Q ? [] : (0, f.Cf)(y, L, B),
        {
            visibleParticipants: ex,
            participantTileWidth: eI
        } = (0, E.i4)(U, v);
    return (0, i.jsxs)("div", {
        className: a()(N.zr, C.tR, D),
        children: [(0, i.jsxs)("div", {
            className: N.QX,
            style: {
                opacity: $ && W ? 0 : 1
            },
            children: [(0, i.jsxs)(r.animated.div, {
                className: N.pc,
                style: {
                    top: e_.value.to(e => -e * S / 2)
                },
                children: [(0, i.jsx)(r.animated.div, {
                    style: {
                        width: em.value
                    },
                    className: N.tN,
                    children: (0, i.jsx)("div", {
                        className: C.xS,
                        style: {
                            aspectRatio: es
                        },
                        children: eg((e, t, l) => {
                            let {
                                key: a
                            } = l;
                            return null != t ? (0, i.jsx)(r.animated.div, {
                                className: C.qX,
                                style: e,
                                children: (0, i.jsx)(p.Ay, {
                                    focused: !0,
                                    noBorder: er >= U || ea >= G,
                                    channel: O,
                                    className: C.JS,
                                    videoComponent: w,
                                    width: U,
                                    participant: t,
                                    onClick: n,
                                    onDoubleClick: b,
                                    onContextMenu: s,
                                    onVideoResize: ef,
                                    inCall: j,
                                    popoutType: R,
                                    controlsBottom: ec
                                })
                            }, a) : null
                        })
                    })
                }), et ? (0, i.jsx)(r.animated.div, {
                    className: a()(N.$l, {
                        [N.N7]: k
                    }),
                    style: {
                        bottom: ep.value
                    },
                    children: (0, i.jsx)(u.A, {
                        channelId: O.id,
                        isParticipantsOpen: M,
                        isVertical: !0
                    })
                }) : null]
            }), (0, i.jsx)(r.animated.div, {
                className: N.Vx,
                style: {
                    translateY: eA.value.to(e => e * S / 2),
                    opacity: eA.value,
                    visibility: eA.value.to(e => 0 === e ? "hidden" : "visible")
                },
                children: (0, i.jsx)(E.Ay, {
                    channel: O,
                    onClick: n,
                    onContextMenu: s,
                    onDoubleClick: b,
                    participants: ex,
                    participantTileWidth: eI,
                    selectedParticipantId: L.id,
                    inCall: j,
                    popoutType: R,
                    paused: Y || !M
                })
            })]
        }), eE.length > 0 ? (0, i.jsx)(g.A, {
            onContextMenuParticipant: s,
            width: U,
            height: G,
            channel: O,
            participants: eE,
            onSelectParticipant: n
        }) : null]
    })
}