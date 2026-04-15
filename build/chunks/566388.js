/** chunk id: 566388 params = (module,exports,require) **/
n.d(t, {
    A: () => er,
    l: () => es
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(311907),
    d = n(506774),
    c = n(397927),
    u = n(73153),
    h = n(765671),
    A = n(964486),
    _ = n(793574),
    m = n(688810),
    p = n(313961),
    g = n(520698),
    f = n(43189),
    E = n(518530),
    x = n(384059),
    I = n(267102),
    C = n(574172),
    N = n(869146),
    T = n(976860),
    S = n(461782),
    b = n(20465),
    y = n(156652),
    v = n(128286),
    j = n(619344),
    R = n(821747),
    O = n(961350),
    L = n(249288),
    M = n(71393),
    D = n(576705),
    U = n(309010),
    G = n(723702),
    P = n(837921),
    k = n(323443),
    w = n(113783),
    B = n(69407),
    V = n(446600),
    H = n(571909),
    F = n(374873),
    W = n(623413),
    K = n(707251),
    Y = n(357819),
    z = n(717965),
    q = n(696842),
    X = n(895903),
    $ = n(542372),
    J = n(533233),
    Q = n(652215),
    Z = n(806931),
    ee = n(985018),
    et = n(323167);
let en = "HasBeenInStageChannel",
    ei = e => {
        (0, x.X)(_.A.VOICE_CONTROL_TRAY, x.O.STAY_ON_TOP, e), C.setAlwaysOnTop(Q.MLl.CHANNEL_CALL_POPOUT, e)
    };

function el(e) {
    let {
        channel: t,
        appContext: n,
        popoutOpen: s,
        popoutWindow: a,
        popoutWindowAlwaysOnTop: r,
        selectedParticipant: d
    } = e, {
        parentAnalyticsLocation: c
    } = (0, m.Ay)(), h = t.getGuildId(), A = (0, o.bG)([U.A], () => U.A.getMostRecentSelectedTextChannelId(h), [h]), _ = O.default.getId(), f = !(0, o.bG)([p.A], () => p.A.isFullscreenInContext(n)) && (!G.isPlatformEmbedded || P.Ay.supportsFeature(Q.BYE.POPOUT_WINDOWS)), E = null != d && d.type !== Z.lp.ACTIVITY && d.user.id !== _, I = l.useMemo(() => a?.window ?? window, [a]), N = (0, $.A)({
        channel: t,
        appContext: n,
        popoutOpen: s,
        popoutWindow: a,
        currentWindow: I
    }), S = n === Q.BRT.POPOUT && G.isPlatformEmbedded && P.Ay.supportsFeature(Q.BYE.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [E ? (0, i.jsx)(R.A, {
            context: (0, g.A)(d.type),
            userId: d.user.id,
            currentWindow: I,
            sliderClassName: et.MQ,
            location: c
        }) : null, S ? (0, i.jsx)(j.A, {
            popoutWindowAlwaysOnTop: r,
            onToggleStayOnTop: ei
        }) : null, f ? (0, i.jsx)(v.A, {
            popoutOpen: s,
            onOpenPopout: () => {
                (0, x.X)(c, x.O.POPOUT, !0), (() => {
                    let e = t.getGuildId();
                    null != e && null != A && (0, T.uh)(e, A), C.openChannelCallPopout(t)
                })()
            },
            onClosePopout: () => {
                (0, x.X)(c, x.O.POPOUT, !1), u.h.wait(() => C.close(Q.MLl.CHANNEL_CALL_POPOUT))
            }
        }) : null, N]
    })
}

function es(e) {
    let {
        channel: t
    } = e, n = (0, I.Us)(), l = (0, o.bG)([D.A], () => D.A.can(Q.xBc.CREATE_INSTANT_INVITE, t)), s = (0, o.bG)([M.A], () => M.A.getGuild(t.guild_id)), a = (0, o.bG)([V.A], () => V.A.getStageInstanceByChannel(t.id)), r = l || a?.invite_code != null;
    return null != s && r ? (0, i.jsx)(q.A, {
        size: "md",
        channel: t,
        appContext: n,
        analyticsLocation: Q.liQ.GUILD_CHANNEL
    }) : null
}

function ea(e) {
    let t, {
            channel: n,
            toggleRequestToSpeakSidebar: s,
            showRequestToSpeakSidebar: d,
            popoutWindow: c,
            popoutWindowAlwaysOnTop: u,
            popoutOpen: h,
            popoutType: A,
            chatOpen: g,
            idleProps: E
        } = e,
        {
            analyticsLocations: x
        } = (0, m.Ay)(_.A.VOICE_CONTROL_TRAY),
        C = (0, I.Us)(),
        N = (0, o.bG)([U.A], () => U.A.getVoiceChannelId() === n.id, [n.id]),
        T = (0, o.bG)([D.A], () => D.A.can(Q.xBc.CONNECT, n)),
        S = (0, w.E5)(n.id, B.ip.SPEAKER),
        v = (0, o.bG)([p.A], () => p.A.getSelectedParticipant(n.id)),
        j = h && C !== Q.BRT.POPOUT,
        [R, O] = l.useState(0),
        M = l.useMemo(() => (0, r.debounce)(e => {
            let {
                scrollTop: t
            } = e.target;
            O(t)
        }, 1e3, {
            leading: !0
        }), []),
        {
            isOnStartStageScreen: G
        } = (0, H.Ay)();
    (0, H.vI)(n);
    let P = (0, o.bG)([L.A], () => L.A.getToastsEnabled(n.id)),
        V = (0, J.A)(n) ? null != v ? "84px" : "124px" : null != v ? "0px" : "48px";
    return G && (V = "0px"), t = G ? (0, i.jsx)(X.A, {
        channel: n,
        onContinueClick: () => {
            (0, H.ek)(!1), N || (0, k.cy)(n)
        }
    }) : N ? (0, i.jsx)(Y.A, {
        channel: n,
        onScroll: M,
        popoutType: A
    }) : (0, i.jsx)(W.A, {
        participants: S,
        channel: n,
        hasConnectPermission: T
    }), (0, i.jsx)(y.A, {
        style: {
            height: `calc(100% - ${V})`,
            paddingTop: V
        },
        disableGradients: !N || 0 === R && y.x.TOP,
        renderBottomCenter: () => N ? (0, i.jsx)(m.f5, {
            value: x,
            children: (0, i.jsx)(z.A, {
                channel: n,
                isOnStartStageScreen: G
            })
        }) : null,
        renderBottomRight: () => N ? (0, i.jsx)(m.f5, {
            value: x,
            children: (0, i.jsx)(el, {
                channel: n,
                appContext: C,
                popoutOpen: h,
                popoutWindow: c,
                popoutWindowAlwaysOnTop: u,
                selectedParticipant: v
            })
        }) : null,
        renderHeader: () => (0, i.jsx)(K.A, {
            toggleRequestToSpeakSidebar: s,
            showRequestToSpeakSidebar: d,
            channel: n
        }),
        renderChatToasts: () => !P || g || j ? null : (0, i.jsx)(f.Ay, {
            children: (0, i.jsx)(b.A, {
                className: a()(et.T6, {
                    [et.c3]: d
                }),
                channelId: n.id
            })
        }),
        screenMessage: j ? {
            mainText: ee.intl.string(ee.t.J5bXZU)
        } : null,
        ...E,
        children: !j && t
    })
}

function er(e) {
    let {
        channel: t,
        popoutType: s
    } = e, [r, u] = l.useState(!1), g = l.useCallback(() => {
        u(!r)
    }, [r, u]), {
        popoutWindow: x,
        popoutWindowAlwaysOnTop: C
    } = (0, o.cf)([N.A], () => ({
        popoutWindow: N.A.getWindow(Q.MLl.CHANNEL_CALL_POPOUT),
        popoutWindowAlwaysOnTop: N.A.getIsAlwaysOnTop(Q.MLl.CHANNEL_CALL_POPOUT)
    })), T = null != x && !x.closed, {
        analyticsLocations: b
    } = (0, m.Ay)(_.A.STAGE_CHANNEL_CALL), y = (0, I.Us)(), v = (0, o.bG)([p.A], () => p.A.getChatOpen(t.id), [t.id]), j = (0, o.bG)([M.A], () => M.A.getGuild(t.guild_id), [t.guild_id]);
    (0, A.Ay)(() => {
        null == d.w.get(en) && ((0, c.mMO)(async () => {
            let {
                default: e
            } = await n.e("56016").then(n.bind(n, 456947));
            return t => (0, i.jsx)(e, {
                ...t
            })
        }), d.w.set(en, Date.now()))
    });
    let {
        width: R = 0,
        ref: O
    } = (0, h.Ay)(), L = !T || y === Q.BRT.POPOUT;
    return (0, i.jsx)(m.f5, {
        value: b,
        children: (0, i.jsxs)(f.qh, {
            children: [(0, i.jsxs)("div", {
                className: et.kL,
                ref: O,
                children: [(0, i.jsx)(c.NPJ, {
                    theme: Q.NJ8.DARK,
                    children: e => (0, i.jsx)("div", {
                        className: a()(et.ik, e, {
                            [et.pR]: r,
                            [et.gy]: r || v
                        }),
                        children: (0, i.jsx)(S.Ay, {
                            timeout: 2e3,
                            children: e => (0, i.jsx)(ea, {
                                channel: t,
                                toggleRequestToSpeakSidebar: g,
                                showRequestToSpeakSidebar: r,
                                popoutWindow: x,
                                popoutWindowAlwaysOnTop: C,
                                popoutOpen: T,
                                popoutType: s,
                                chatOpen: v,
                                idleProps: e
                            })
                        })
                    })
                }), r ? (0, i.jsx)(F.A, {
                    channel: t,
                    toggleRequestToSpeakSidebar: g,
                    chatOpen: v
                }) : null, (0, i.jsx)("div", {
                    className: et.B2,
                    children: v && L && (0, i.jsx)(E.A, {
                        channel: t,
                        guild: j,
                        maxWidth: R - 550
                    })
                })]
            }), (0, i.jsx)(f.WD, {})]
        })
    })
}