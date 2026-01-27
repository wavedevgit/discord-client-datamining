/** Chunk was on 77870 **/
/** chunk id: 699707, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(108531),
    o = n(397927),
    c = n(475743),
    u = n(216418),
    d = n(80051),
    p = n(961350),
    h = n(430452),
    f = n(203982),
    g = n(220144),
    m = n(175203),
    b = n(306852),
    A = n(947580),
    y = n(163432),
    _ = n(652215),
    O = n(806931),
    j = n(403264),
    v = n(542411);

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function E(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let C = 16 / 9,
    S = 8 + y.Vp;

function I(e) {
    var t;
    let n, {
            onSelectParticipant: i,
            onContextMenuParticipant: I,
            onFullscreenParticipant: N,
            participants: T,
            filteredParticipants: P,
            popoutType: w,
            inCall: R,
            channel: D,
            selectedParticipant: M,
            showParticipants: L = !0,
            className: k,
            width: G,
            height: U,
            layout: B,
            idle: V
        } = e,
        F = h.A.getVideoComponent(),
        H = p.default.getId(),
        [K, W] = l.useState(null),
        z = (0, c.A)(K),
        [Y, q] = l.useState(!0),
        [X, J] = l.useState(!1),
        Q = M.type === O.lp.ACTIVITY,
        Z = (0, u.A)(Q ? M.applicationId : void 0),
        $ = !Q && null != M.streamId,
        ee = U <= 2 * S + 144,
        et = L && !ee,
        en = (0, c.A)(et),
        er = B === _.DUB.MINIMUM || B === _.DUB.NORMAL,
        el = !ee && (!er || Q),
        ei = (0, g.A)(el, 100),
        es = (null != (t = (0, c.A)(M.id)) ? t : M.id) !== M.id,
        ea = 0;
    (Q || et) && (ea += 72), Q && !et && (el ? ea += 48 : ea += 8), et && (ea += .5 * S + 8);
    let eo = l.useMemo(() => Q && Z ? G / (U - 2 * ea) : $ && null != K && K.width > 0 && K.height > 0 ? K.width / K.height : C, [$, K, Q, G, U, ea, Z]),
        ec = U - 2 * ea,
        eu = Q && Z ? G : ec * eo,
        ed = Math.floor(Math.min(G, eu) / eo),
        ep = U > G / eo + 72 + S + 8;
    n = et || Q ? et ? -16 : -8 : 40 + Math.max(0, 72 - (U - ed) / 2);
    let eh = 8 + Math.max(0, 72 - (U - ed) / 2);
    l.useEffect(() => {
        let e = setTimeout(() => {
            q(!1)
        }, 250);
        return () => {
            clearTimeout(e)
        }
    }, []);
    let ef = Y || null == z,
        eg = ef ? "animate-never" : "animate-always",
        em = (0, o.zhh)({
            value: +!!et,
            delay: ep || !et ? 0 : 100,
            config: E(x({}, a.config.stiff), {
                clamp: !0
            }),
            onStart: () => J(!0),
            onChange: () => f._.dispatch(_.jej.REMEASURE_TARGET),
            onRest: () => {
                J(!1), f._.dispatch(_.jej.REMEASURE_TARGET)
            }
        }, eg),
        eb = (0, o.zhh)({
            value: +!!et,
            config: E(x({}, a.config.stiff), {
                clamp: !0
            })
        }, eg),
        eA = (0, o.zhh)({
            value: eu,
            config: E(x({}, a.config.stiff), {
                clamp: !0
            })
        }, en === et && eb.value.idle && !ei || es || ef ? "animate-never" : "animate-always"),
        ey = (0, o.zhh)({
            value: n,
            config: E(x({}, a.config.stiff), {
                clamp: !0
            })
        }, eg),
        e_ = (0, o.pnh)(M, {
            keys: e => null == e ? void 0 : e.id,
            config: E(x({}, a.config.stiff), {
                clamp: !0
            }),
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
        }, eg),
        eO = l.useCallback(e => {
            W(e), q(!1)
        }, []),
        ej = et ? [] : (0, A.Cf)(T, M, H),
        {
            visibleParticipants: ev,
            participantTileWidth: ex
        } = (0, y.i4)(G, P);
    return (0, r.jsxs)("div", {
        className: s()(v.zr, j.tR, k),
        children: [(0, r.jsxs)("div", {
            className: v.QX,
            style: {
                opacity: $ && Y ? 0 : 1
            },
            children: [(0, r.jsxs)(a.animated.div, {
                className: v.pc,
                style: {
                    top: eb.value.to(e => -e * S / 2)
                },
                children: [(0, r.jsx)(a.animated.div, {
                    style: {
                        width: eA.value
                    },
                    className: v.tN,
                    children: (0, r.jsx)("div", {
                        className: j.xS,
                        style: {
                            aspectRatio: eo
                        },
                        children: e_((e, t, n) => {
                            let {
                                key: l
                            } = n;
                            return null != t ? (0, r.jsx)(a.animated.div, {
                                className: j.qX,
                                style: e,
                                children: (0, r.jsx)(m.Ay, {
                                    focused: !0,
                                    noBorder: eu >= G || ec >= U,
                                    channel: D,
                                    className: j.JS,
                                    videoComponent: F,
                                    width: G,
                                    participant: t,
                                    onClick: i,
                                    onDoubleClick: N,
                                    onContextMenu: I,
                                    onVideoResize: eO,
                                    inCall: R,
                                    popoutType: w,
                                    controlsBottom: eh
                                })
                            }, l) : null
                        })
                    })
                }), el ? (0, r.jsx)(a.animated.div, {
                    className: s()(v.$l, {
                        [v.N7]: V
                    }),
                    style: {
                        bottom: ey.value
                    },
                    children: (0, r.jsx)(d.A, {
                        channelId: D.id,
                        isParticipantsOpen: L,
                        isVertical: !0
                    })
                }) : null]
            }), (0, r.jsx)(a.animated.div, {
                className: v.Vx,
                style: {
                    translateY: em.value.to(e => e * S / 2),
                    opacity: em.value,
                    visibility: em.value.to(e => 0 === e ? "hidden" : "visible")
                },
                children: (0, r.jsx)(y.Ay, {
                    channel: D,
                    onClick: i,
                    onContextMenu: I,
                    onDoubleClick: N,
                    participants: ev,
                    participantTileWidth: ex,
                    selectedParticipantId: M.id,
                    inCall: R,
                    popoutType: w,
                    paused: X || !L
                })
            })]
        }), ej.length > 0 ? (0, r.jsx)(b.A, {
            onContextMenuParticipant: I,
            width: G,
            height: U,
            channel: D,
            participants: ej,
            onSelectParticipant: i
        }) : null]
    })
}