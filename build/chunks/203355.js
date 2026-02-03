/** chunk id: 203355, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => z,
    D: () => W
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(435371),
    c = n(397927),
    u = n(367513),
    d = n(401843),
    h = n(964486),
    p = n(684339),
    f = n(164617),
    m = n(402216),
    g = n(626584),
    A = n(525505),
    b = n(753727),
    _ = n(315606),
    y = n(638480),
    v = n(607407),
    E = n(872363),
    O = n(901690),
    C = n(351073),
    S = n(919706),
    x = n(616356),
    j = n(961350),
    I = n(734057),
    T = n(430452),
    N = n(531685),
    P = n(200749),
    w = n(70171),
    R = n(566331),
    D = n(768088),
    M = n(256195),
    k = (n(729365), n(399849)),
    L = n(275731),
    U = n(345812),
    G = n(652215),
    F = n(806931),
    H = n(731854),
    B = n(985018),
    V = n(707511);
let K = new g.A("StreamTile");

function W(e) {
    let {
        participant: t,
        selected: n,
        focused: r,
        idle: i,
        width: a,
        premiumIndicator: o
    } = e, c = (0, s.bG)([x.A], () => x.A.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, U.V)(a);
    return (0, l.jsxs)(l.Fragment, {
        children: [n || r ? null : (0, l.jsx)(L.A, {
            participant: t
        }), r || null == c || c.state === G.XYD.ENDED || c.state === G.XYD.FAILED ? null : (0, l.jsx)(E.A, {
            size: m.Ay.Sizes.SMALL,
            className: V.Ok,
            participant: t,
            showQuality: !u && !i,
            isUpsellEnabled: !1,
            premiumIndicator: o
        })]
    })
}

function z(e) {
    let {
        participant: t,
        selected: n,
        onVideoResize: i,
        fit: m,
        popoutType: g,
        width: E,
        focused: L,
        wrapperClassName: U,
        paused: W = !1,
        idle: z = !1,
        controlsBottom: Y
    } = e, q = T.A.getVideoComponent(), J = (0, s.bG)([j.default], () => j.default.getId()), Z = (0, b.A)(), {
        stream: X,
        user: Q,
        streamId: $
    } = t, ee = (0, s.bG)([I.A], () => I.A.getChannel(X.channelId)), et = (0, s.bG)([x.A], () => x.A.getActiveStreamForUser(Q.id, X.guildId), [Q.id, X.guildId]), {
        defaultWatchMultipleStreams: en
    } = (0, _.W)({
        location: "StreamTile"
    }), el = (0, s.bG)([x.A], () => x.A.getAllActiveStreams().length > 0), er = (0, s.bG)([N.A], () => N.A.isFocused()), ei = (null == et ? void 0 : et.ownerId) === J, ea = ei && !er && g === f.N.NO_POPOUT, es = null != et ? (0, y.A)(et, Q, Q.id === J, ea) : null, eo = E < 195;
    (0, h.Ay)(() => {
        !el && (null == ee ? void 0 : ee.isGuildStageVoice()) && !ei && ((0, d.A9)(X), u.A.updateStageStreamSize(X.channelId, !1))
    });
    let ec = (0, A.u)(H.x.STREAM, t.user.id);
    if (r.useEffect(() => {
            K.info("Stream Tile State - activeStream: ".concat(null != et, " | selected: ").concat(n, " | Video: ").concat(null != q, " | MediaEngine: ").concat(T.A.supports(H.O5.VIDEO)))
        }, [q, et, n]), Z) return (0, l.jsx)(k.A, {
        stream: t.stream,
        isSmall: eo,
        selected: n,
        isSelfStream: Q.id === J
    });
    if ((null == et ? void 0 : et.state) === G.XYD.ENDED) return (0, l.jsx)(R.A, {
        selected: n,
        stream: et,
        width: E
    });
    if (null != ec || (null == et ? void 0 : et.state) === G.XYD.FAILED) return (0, l.jsx)(D.A, {
        avError: null == ec ? void 0 : ec.type,
        avErrorContext: ec,
        selected: n,
        stream: t.stream,
        width: E
    });
    if (t.type === F.lp.HIDDEN_STREAM) return (0, l.jsx)(M.A, {
        selected: n,
        participant: t,
        width: E
    });
    if (!(null != et && !n && null != q && T.A.supports(H.O5.VIDEO))) return (0, l.jsxs)("div", {
        className: a()(V.Qs, V.Rh, {
            [V.EX]: eo
        }),
        children: [(0, l.jsx)(v.A, {
            noImage: !0,
            noText: !0,
            className: a()(V.HL, {
                [V.gH]: null == et
            }),
            stream: t.stream
        }), n ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
                className: V.lO,
                children: (0, l.jsx)(c.Button, {
                    variant: "secondary",
                    size: eo ? "sm" : "md",
                    text: E < 175 ? B.intl.string(B.t.I6JG46) : B.intl.string(B.t["7Xq/nV"])
                })
            }), el && !en ? (0, l.jsx)("div", {
                className: a()(V.lO, V.EU),
                children: (0, l.jsx)(o.m_, {
                    text: B.intl.string(B.t.wCrzut),
                    children: (0, l.jsx)(c.K0, {
                        variant: "secondary",
                        size: eo ? "sm" : "md",
                        icon: c.vAm,
                        "aria-label": B.intl.string(B.t.wCrzut),
                        onClick: e => {
                            e.stopPropagation(), (0, d.A9)(t.stream, {
                                forceMultiple: !0
                            })
                        }
                    })
                })
            }) : null]
        })]
    });
    else return (0, l.jsxs)(l.Fragment, {
        children: [null != ee ? (0, l.jsx)(C.A, {
            focused: L,
            channelId: ee.id,
            guildId: ee.guild_id,
            streamerId: Q.id,
            hasScreenMessage: null != es,
            stream: X
        }) : null, (0, l.jsx)(O.A, {
            enableZoom: L,
            onResize: i,
            wrapperClassName: a()(g !== f.N.CALL_TILE ? V.tN : void 0, U),
            className: V.Qs,
            streamId: $,
            videoComponent: q,
            fit: m,
            paused: W || (null == et ? void 0 : et.state) === G.XYD.PAUSED || ea,
            videoSpinnerContext: ei ? p.u.SELF_STREAM : p.u.REMOTE_STREAM,
            userId: Q.id,
            streamKey: t.id,
            controlsBottom: Y,
            idle: z
        }, $), null != es ? (0, l.jsx)(S.A, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                        value: l,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = l
                })
            }
            return e
        }({
            size: (0, P.J)(E)
        }, es)) : null, (0, l.jsx)(w.A, {
            stream: X,
            popoutType: g
        })]
    })
}