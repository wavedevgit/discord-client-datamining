/** Chunk was on 78528 **/
/** chunk id: 566388, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => eu,
    l: () => eo
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n(311907),
    c = n(506774),
    u = n(397927),
    d = n(73153),
    p = n(765671),
    h = n(964486),
    f = n(793574),
    g = n(688810),
    m = n(313961),
    b = n(520698),
    A = n(43189),
    y = n(518530),
    _ = n(264250),
    O = n(261718),
    j = n(384059),
    v = n(267102),
    x = n(574172),
    E = n(869146),
    C = n(976860),
    S = n(993952),
    I = n(461782),
    N = n(20465),
    T = n(156652),
    P = n(128286),
    w = n(619344),
    R = n(821747),
    D = n(961350),
    M = n(249288),
    L = n(71393),
    k = n(576705),
    U = n(309010),
    G = n(723702),
    B = n(837921),
    V = n(323443),
    F = n(113783),
    H = n(69407),
    K = n(446600),
    W = n(571909),
    z = n(374873),
    Y = n(623413),
    q = n(707251),
    X = n(357819),
    J = n(717965),
    Q = n(895903),
    Z = n(542372),
    $ = n(533233),
    ee = n(652215),
    et = n(806931),
    en = n(985018),
    er = n(105626);

function el(e) {
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
let ei = "HasBeenInStageChannel",
    es = e => {
        (0, j.X)(f.A.VOICE_CONTROL_TRAY, j.O.STAY_ON_TOP, e), x.setAlwaysOnTop(ee.MLl.CHANNEL_CALL_POPOUT, e)
    };

function ea(e) {
    let {
        channel: t,
        appContext: n,
        popoutOpen: i,
        popoutWindow: s,
        popoutWindowAlwaysOnTop: a,
        selectedParticipant: c
    } = e, {
        parentAnalyticsLocation: u
    } = (0, g.Ay)(), p = t.getGuildId(), h = (0, o.bG)([U.A], () => U.A.getMostRecentSelectedTextChannelId(p), [p]), f = D.default.getId(), A = !(0, o.bG)([m.A], () => m.A.isFullscreenInContext(n)) && (!G.isPlatformEmbedded || G.isPlatformEmbedded && B.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS)), y = null != c && c.type !== et.lp.ACTIVITY && c.user.id !== f, _ = l.useMemo(() => {
        var e;
        return null != (e = null == s ? void 0 : s.window) ? e : window
    }, [s]), O = (0, Z.A)({
        channel: t,
        appContext: n,
        popoutOpen: i,
        popoutWindow: s,
        currentWindow: _
    }), v = n === ee.BRT.POPOUT && G.isPlatformEmbedded && B.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS);
    return (0, r.jsxs)(r.Fragment, {
        children: [y ? (0, r.jsx)(R.A, {
            context: (0, b.A)(c.type),
            userId: c.user.id,
            currentWindow: _,
            sliderClassName: er.MQ,
            location: u
        }) : null, v ? (0, r.jsx)(w.A, {
            popoutWindowAlwaysOnTop: a,
            onToggleStayOnTop: es
        }) : null, A ? (0, r.jsx)(P.A, {
            popoutOpen: i,
            onOpenPopout: () => {
                (0, j.X)(u, j.O.POPOUT, !0), (() => {
                    let e = t.getGuildId();
                    null != e && null != h && (0, C.uh)(e, h), x.openChannelCallPopout(t)
                })()
            },
            onClosePopout: () => {
                (0, j.X)(u, j.O.POPOUT, !1), d.h.wait(() => x.close(ee.MLl.CHANNEL_CALL_POPOUT))
            }
        }) : null, O]
    })
}

function eo(e) {
    let {
        channel: t
    } = e, n = (0, v.Us)(), l = (0, o.bG)([k.A], () => k.A.can(ee.xBc.CREATE_INSTANT_INVITE, t)), i = (0, o.bG)([L.A], () => L.A.getGuild(t.guild_id)), s = (0, o.bG)([K.A], () => K.A.getStageInstanceByChannel(t.id)), a = l || (null == s ? void 0 : s.invite_code) != null;
    return null != i && a ? (0, r.jsx)(S.A, {
        size: "md",
        channel: t,
        appContext: n,
        analyticsLocation: ee.liQ.GUILD_CHANNEL
    }) : null
}

function ec(e) {
    var t, n;
    let i, {
            channel: c,
            toggleRequestToSpeakSidebar: u,
            showRequestToSpeakSidebar: d,
            popoutWindow: p,
            popoutWindowAlwaysOnTop: h,
            popoutOpen: b,
            popoutType: y,
            chatOpen: _,
            idleProps: O
        } = e,
        {
            analyticsLocations: j
        } = (0, g.Ay)(f.A.VOICE_CONTROL_TRAY),
        x = (0, v.Us)(),
        E = (0, o.bG)([U.A], () => U.A.getVoiceChannelId() === c.id, [c.id]),
        C = (0, o.bG)([k.A], () => k.A.can(ee.xBc.CONNECT, c)),
        S = (0, F.E5)(c.id, H.ip.SPEAKER),
        I = (0, o.bG)([m.A], () => m.A.getSelectedParticipant(c.id)),
        P = b && x !== ee.BRT.POPOUT,
        [w, R] = l.useState(0),
        D = l.useMemo(() => (0, a.debounce)(e => {
            let {
                scrollTop: t
            } = e.target;
            R(t)
        }, 1e3, {
            leading: !0
        }), []),
        {
            isOnStartStageScreen: L
        } = (0, W.Ay)();
    (0, W.vI)(c);
    let G = (0, o.bG)([M.A], () => M.A.getToastsEnabled(c.id)),
        B = (0, $.A)(c) ? null != I ? "84px" : "124px" : null != I ? "0px" : "48px";
    return L && (B = "0px"), i = L ? (0, r.jsx)(Q.A, {
        channel: c,
        onContinueClick: () => {
            (0, W.ek)(!1), E || (0, V.cy)(c)
        }
    }) : E ? (0, r.jsx)(X.A, {
        channel: c,
        onScroll: D,
        popoutType: y
    }) : (0, r.jsx)(Y.A, {
        participants: S,
        channel: c,
        hasConnectPermission: C
    }), (0, r.jsx)(T.A, (t = el({
        style: {
            height: "calc(100% - ".concat(B, ")"),
            paddingTop: B
        },
        disableGradients: !E || 0 === w && T.x.TOP,
        renderBottomCenter: () => E ? (0, r.jsx)(g.f5, {
            value: j,
            children: (0, r.jsx)(J.A, {
                channel: c,
                isOnStartStageScreen: L
            })
        }) : null,
        renderBottomRight: () => E ? (0, r.jsx)(g.f5, {
            value: j,
            children: (0, r.jsx)(ea, {
                channel: c,
                appContext: x,
                popoutOpen: b,
                popoutWindow: p,
                popoutWindowAlwaysOnTop: h,
                selectedParticipant: I
            })
        }) : null,
        renderHeader: () => (0, r.jsx)(q.A, {
            toggleRequestToSpeakSidebar: u,
            showRequestToSpeakSidebar: d,
            channel: c
        }),
        renderChatToasts: () => !G || _ || P ? null : (0, r.jsx)(A.Ay, {
            children: (0, r.jsx)(N.A, {
                className: s()(er.T6, {
                    [er.c3]: d
                }),
                channelId: c.id
            })
        }),
        screenMessage: P ? {
            mainText: en.intl.string(en.t.J5bXZU)
        } : null
    }, O), n = n = {
        children: !P && i
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
}

function eu(e) {
    let {
        channel: t,
        popoutType: i
    } = e, [a, d] = l.useState(!1), b = l.useCallback(() => {
        d(!a)
    }, [a, d]), {
        popoutWindow: j,
        popoutWindowAlwaysOnTop: x
    } = (0, o.cf)([E.A], () => ({
        popoutWindow: E.A.getWindow(ee.MLl.CHANNEL_CALL_POPOUT),
        popoutWindowAlwaysOnTop: E.A.getIsAlwaysOnTop(ee.MLl.CHANNEL_CALL_POPOUT)
    })), C = null != j && !j.closed, {
        analyticsLocations: S
    } = (0, g.Ay)(f.A.STAGE_CHANNEL_CALL), N = (0, v.Us)(), {
        chatOpen: T,
        participantsListOpen: P
    } = (0, o.cf)([m.A], () => ({
        chatOpen: m.A.getChatOpen(t.id),
        participantsListOpen: m.A.getParticipantsListOpen(t.id)
    }), [t.id]), w = (0, o.bG)([L.A], () => L.A.getGuild(t.guild_id), [t.guild_id]), {
        hasParticipantsPanel: R
    } = (0, O.A)({
        location: "StageChannelCall"
    });
    (0, h.Ay)(() => {
        null == c.w.get(ei) && ((0, u.mMO)(async () => {
            let {
                default: e
            } = await n.e("56016").then(n.bind(n, 456947));
            return t => (0, r.jsx)(e, el({}, t))
        }), c.w.set(ei, Date.now()))
    });
    let {
        width: D = 0,
        ref: M
    } = (0, p.Ay)(), k = D - 550, U = !C || C && N === ee.BRT.POPOUT;
    return (0, r.jsx)(g.f5, {
        value: S,
        children: (0, r.jsxs)(A.qh, {
            children: [(0, r.jsxs)("div", {
                className: er.kL,
                ref: M,
                children: [(0, r.jsx)(u.NPJ, {
                    theme: ee.NJ8.DARK,
                    children: e => (0, r.jsx)("div", {
                        className: s()(er.ik, e, {
                            [er.pR]: a,
                            [er.gy]: a || T || P
                        }),
                        children: (0, r.jsx)(I.Ay, {
                            timeout: 2e3,
                            children: e => (0, r.jsx)(ec, {
                                channel: t,
                                toggleRequestToSpeakSidebar: b,
                                showRequestToSpeakSidebar: a,
                                popoutWindow: j,
                                popoutWindowAlwaysOnTop: x,
                                popoutOpen: C,
                                popoutType: i,
                                chatOpen: T,
                                idleProps: e
                            })
                        })
                    })
                }), a ? (0, r.jsx)(z.A, {
                    channel: t,
                    toggleRequestToSpeakSidebar: b,
                    chatOpen: T
                }) : null, (0, r.jsxs)("div", {
                    className: er.B2,
                    children: [T && U && (0, r.jsx)(y.A, {
                        channel: t,
                        guild: w,
                        maxWidth: k
                    }), P && R && U && (0, r.jsx)(_.A, {
                        channel: t,
                        maxWidth: k
                    })]
                })]
            }), (0, r.jsx)(A.WD, {})]
        })
    })
}