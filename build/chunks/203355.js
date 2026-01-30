/** chunk id: 203355, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => Y,
    D: () => z
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(435371),
    c = n(397927),
    u = n(367513),
    d = n(401843),
    f = n(964486),
    p = n(684339),
    g = n(164617),
    m = n(402216),
    _ = n(626584),
    h = n(525505),
    y = n(753727),
    A = n(315606),
    b = n(638480),
    E = n(607407),
    v = n(872363),
    O = n(901690),
    x = n(351073),
    S = n(919706),
    C = n(616356),
    N = n(961350),
    I = n(734057),
    j = n(430452),
    T = n(531685),
    w = n(200749),
    P = n(70171),
    R = n(566331),
    D = n(768088),
    k = n(256195),
    L = (n(729365), n(399849)),
    M = n(275731),
    U = n(345812),
    V = n(652215),
    F = n(806931),
    G = n(731854),
    B = n(985018),
    H = n(707511);
let W = new _.A("StreamTile");

function z(e) {
    let {
        participant: t,
        selected: n,
        focused: l,
        idle: i,
        width: a,
        premiumIndicator: s
    } = e, c = (0, o.bG)([C.A], () => C.A.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, U.V)(a);
    return (0, r.jsxs)(r.Fragment, {
        children: [n || l ? null : (0, r.jsx)(M.A, {
            participant: t
        }), l || null == c || c.state === V.XYD.ENDED || c.state === V.XYD.FAILED ? null : (0, r.jsx)(v.A, {
            size: m.Ay.Sizes.SMALL,
            className: H.Ok,
            participant: t,
            showQuality: !u && !i,
            isUpsellEnabled: !1,
            premiumIndicator: s
        })]
    })
}

function Y(e) {
    let {
        participant: t,
        selected: n,
        onVideoResize: i,
        fit: m,
        popoutType: _,
        width: v,
        focused: M,
        wrapperClassName: U,
        paused: z = !1,
        idle: Y = !1,
        controlsBottom: K
    } = e, Z = j.A.getVideoComponent(), q = (0, o.bG)([N.default], () => N.default.getId()), X = (0, y.A)(), {
        stream: J,
        user: Q,
        streamId: $
    } = t, ee = (0, o.bG)([I.A], () => I.A.getChannel(J.channelId)), et = (0, o.bG)([C.A], () => C.A.getActiveStreamForUser(Q.id, J.guildId), [Q.id, J.guildId]), {
        defaultWatchMultipleStreams: en
    } = (0, A.W)({
        location: "StreamTile"
    }), er = (0, o.bG)([C.A], () => C.A.getAllActiveStreams().length > 0), el = (0, o.bG)([T.A], () => T.A.isFocused()), ei = (null == et ? void 0 : et.ownerId) === q, ea = ei && !el && _ === g.N.NO_POPOUT, eo = null != et ? (0, b.A)(et, Q, Q.id === q, ea) : null, es = v < 195;
    (0, f.Ay)(() => {
        !er && (null == ee ? void 0 : ee.isGuildStageVoice()) && !ei && ((0, d.A9)(J), u.A.updateStageStreamSize(J.channelId, !1))
    });
    let ec = (0, h.u)(G.x.STREAM, t.user.id);
    if (l.useEffect(() => {
            W.info("Stream Tile State - activeStream: ".concat(null != et, " | selected: ").concat(n, " | Video: ").concat(null != Z, " | MediaEngine: ").concat(j.A.supports(G.O5.VIDEO)))
        }, [Z, et, n]), X) return (0, r.jsx)(L.A, {
        stream: t.stream,
        isSmall: es,
        selected: n,
        isSelfStream: Q.id === q
    });
    if ((null == et ? void 0 : et.state) === V.XYD.ENDED) return (0, r.jsx)(R.A, {
        selected: n,
        stream: et,
        width: v
    });
    if (null != ec || (null == et ? void 0 : et.state) === V.XYD.FAILED) return (0, r.jsx)(D.A, {
        avError: null == ec ? void 0 : ec.type,
        avErrorContext: ec,
        selected: n,
        stream: t.stream,
        width: v
    });
    if (t.type === F.lp.HIDDEN_STREAM) return (0, r.jsx)(k.A, {
        selected: n,
        participant: t,
        width: v
    });
    if (!(null != et && !n && null != Z && j.A.supports(G.O5.VIDEO))) return (0, r.jsxs)("div", {
        className: a()(H.Qs, H.Rh, {
            [H.EX]: es
        }),
        children: [(0, r.jsx)(E.A, {
            noImage: !0,
            noText: !0,
            className: a()(H.HL, {
                [H.gH]: null == et
            }),
            stream: t.stream
        }), n ? null : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
                className: H.lO,
                children: (0, r.jsx)(c.Button, {
                    variant: "secondary",
                    size: es ? "sm" : "md",
                    text: v < 175 ? B.intl.string(B.t.I6JG46) : B.intl.string(B.t["7Xq/nV"])
                })
            }), er && !en ? (0, r.jsx)("div", {
                className: a()(H.lO, H.EU),
                children: (0, r.jsx)(s.m_, {
                    text: B.intl.string(B.t.wCrzut),
                    children: (0, r.jsx)(c.K0, {
                        variant: "secondary",
                        size: es ? "sm" : "md",
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
    else return (0, r.jsxs)(r.Fragment, {
        children: [null != ee ? (0, r.jsx)(x.A, {
            focused: M,
            channelId: ee.id,
            guildId: ee.guild_id,
            streamerId: Q.id,
            hasScreenMessage: null != eo,
            stream: J
        }) : null, (0, r.jsx)(O.A, {
            enableZoom: M,
            onResize: i,
            wrapperClassName: a()(_ !== g.N.CALL_TILE ? H.tN : void 0, U),
            className: H.Qs,
            streamId: $,
            videoComponent: Z,
            fit: m,
            paused: z || (null == et ? void 0 : et.state) === V.XYD.PAUSED || ea,
            videoSpinnerContext: ei ? p.u.SELF_STREAM : p.u.REMOTE_STREAM,
            userId: Q.id,
            streamKey: t.id,
            controlsBottom: K,
            idle: Y
        }, $), null != eo ? (0, r.jsx)(S.A, function(e) {
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
        }({
            size: (0, w.J)(v)
        }, eo)) : null, (0, r.jsx)(P.A, {
            stream: J,
            popoutType: _
        })]
    })
}