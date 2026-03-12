/** chunk id: 566388 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => er,
    l: () => el
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n(311907),
    c = n(506774),
    d = n(397927),
    u = n(73153),
    h = n(765671),
    A = n(964486),
    m = n(793574),
    p = n(688810),
    g = n(313961),
    _ = n(520698),
    f = n(43189),
    x = n(518530),
    C = n(384059),
    E = n(267102),
    I = n(574172),
    N = n(869146),
    b = n(976860),
    S = n(993952),
    T = n(461782),
    v = n(20465),
    y = n(156652),
    j = n(128286),
    R = n(619344),
    O = n(821747),
    L = n(961350),
    M = n(249288),
    D = n(71393),
    G = n(576705),
    U = n(309010),
    P = n(723702),
    w = n(837921),
    k = n(323443),
    V = n(113783),
    B = n(69407),
    H = n(446600),
    F = n(571909),
    K = n(374873),
    W = n(623413),
    Y = n(707251),
    z = n(357819),
    q = n(717965),
    X = n(895903),
    J = n(542372),
    Q = n(533233),
    $ = n(652215),
    Z = n(806931),
    ee = n(985018),
    et = n(173232);
let en = "HasBeenInStageChannel",
    ei = e => {
        (0, C.X)(m.A.VOICE_CONTROL_TRAY, C.O.STAY_ON_TOP, e), I.setAlwaysOnTop($.MLl.CHANNEL_CALL_POPOUT, e)
    };

function es(e) {
    let {
        channel: t,
        appContext: n,
        popoutOpen: l,
        popoutWindow: a,
        popoutWindowAlwaysOnTop: r,
        selectedParticipant: c
    } = e, {
        parentAnalyticsLocation: d
    } = (0, p.Ay)(), h = t.getGuildId(), A = (0, o.bG)([U.A], () => U.A.getMostRecentSelectedTextChannelId(h), [h]), m = L.default.getId(), f = !(0, o.bG)([g.A], () => g.A.isFullscreenInContext(n)) && (!P.isPlatformEmbedded || P.isPlatformEmbedded && w.Ay.supportsFeature($.BYE.POPOUT_WINDOWS)), x = null != c && c.type !== Z.lp.ACTIVITY && c.user.id !== m, E = s.useMemo(() => a?.window ?? window, [a]), N = (0, J.A)({
        channel: t,
        appContext: n,
        popoutOpen: l,
        popoutWindow: a,
        currentWindow: E
    }), S = n === $.BRT.POPOUT && P.isPlatformEmbedded && w.Ay.supportsFeature($.BYE.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [x ? (0, i.jsx)(O.A, {
            context: (0, _.A)(c.type),
            userId: c.user.id,
            currentWindow: E,
            sliderClassName: et.MQ,
            location: d
        }) : null, S ? (0, i.jsx)(R.A, {
            popoutWindowAlwaysOnTop: r,
            onToggleStayOnTop: ei
        }) : null, f ? (0, i.jsx)(j.A, {
            popoutOpen: l,
            onOpenPopout: () => {
                (0, C.X)(d, C.O.POPOUT, !0), (() => {
                    let e = t.getGuildId();
                    null != e && null != A && (0, b.uh)(e, A), I.openChannelCallPopout(t)
                })()
            },
            onClosePopout: () => {
                (0, C.X)(d, C.O.POPOUT, !1), u.h.wait(() => I.close($.MLl.CHANNEL_CALL_POPOUT))
            }
        }) : null, N]
    })
}

function el(e) {
    let {
        channel: t
    } = e, n = (0, E.Us)(), s = (0, o.bG)([G.A], () => G.A.can($.xBc.CREATE_INSTANT_INVITE, t)), l = (0, o.bG)([D.A], () => D.A.getGuild(t.guild_id)), a = (0, o.bG)([H.A], () => H.A.getStageInstanceByChannel(t.id)), r = s || a?.invite_code != null;
    return null != l && r ? (0, i.jsx)(S.A, {
        size: "md",
        channel: t,
        appContext: n,
        analyticsLocation: $.liQ.GUILD_CHANNEL
    }) : null
}

function ea(e) {
    let t, {
            channel: n,
            toggleRequestToSpeakSidebar: l,
            showRequestToSpeakSidebar: c,
            popoutWindow: d,
            popoutWindowAlwaysOnTop: u,
            popoutOpen: h,
            popoutType: A,
            chatOpen: _,
            idleProps: x
        } = e,
        {
            analyticsLocations: C
        } = (0, p.Ay)(m.A.VOICE_CONTROL_TRAY),
        I = (0, E.Us)(),
        N = (0, o.bG)([U.A], () => U.A.getVoiceChannelId() === n.id, [n.id]),
        b = (0, o.bG)([G.A], () => G.A.can($.xBc.CONNECT, n)),
        S = (0, V.E5)(n.id, B.ip.SPEAKER),
        T = (0, o.bG)([g.A], () => g.A.getSelectedParticipant(n.id)),
        j = h && I !== $.BRT.POPOUT,
        [R, O] = s.useState(0),
        L = s.useMemo(() => (0, r.debounce)(e => {
            let {
                scrollTop: t
            } = e.target;
            O(t)
        }, 1e3, {
            leading: !0
        }), []),
        {
            isOnStartStageScreen: D
        } = (0, F.Ay)();
    (0, F.vI)(n);
    let P = (0, o.bG)([M.A], () => M.A.getToastsEnabled(n.id)),
        w = (0, Q.A)(n) ? null != T ? "84px" : "124px" : null != T ? "0px" : "48px";
    return D && (w = "0px"), t = D ? (0, i.jsx)(X.A, {
        channel: n,
        onContinueClick: () => {
            (0, F.ek)(!1), N || (0, k.cy)(n)
        }
    }) : N ? (0, i.jsx)(z.A, {
        channel: n,
        onScroll: L,
        popoutType: A
    }) : (0, i.jsx)(W.A, {
        participants: S,
        channel: n,
        hasConnectPermission: b
    }), (0, i.jsx)(y.A, {
        style: {
            height: `calc(100% - ${w})`,
            paddingTop: w
        },
        disableGradients: !N || 0 === R && y.x.TOP,
        renderBottomCenter: () => N ? (0, i.jsx)(p.f5, {
            value: C,
            children: (0, i.jsx)(q.A, {
                channel: n,
                isOnStartStageScreen: D
            })
        }) : null,
        renderBottomRight: () => N ? (0, i.jsx)(p.f5, {
            value: C,
            children: (0, i.jsx)(es, {
                channel: n,
                appContext: I,
                popoutOpen: h,
                popoutWindow: d,
                popoutWindowAlwaysOnTop: u,
                selectedParticipant: T
            })
        }) : null,
        renderHeader: () => (0, i.jsx)(Y.A, {
            toggleRequestToSpeakSidebar: l,
            showRequestToSpeakSidebar: c,
            channel: n
        }),
        renderChatToasts: () => !P || _ || j ? null : (0, i.jsx)(f.Ay, {
            children: (0, i.jsx)(v.A, {
                className: a()(et.T6, {
                    [et.c3]: c
                }),
                channelId: n.id
            })
        }),
        screenMessage: j ? {
            mainText: ee.intl.string(ee.t.J5bXZU)
        } : null,
        ...x,
        children: !j && t
    })
}

function er(e) {
    let {
        channel: t,
        popoutType: l
    } = e, [r, u] = s.useState(!1), _ = s.useCallback(() => {
        u(!r)
    }, [r, u]), {
        popoutWindow: C,
        popoutWindowAlwaysOnTop: I
    } = (0, o.cf)([N.A], () => ({
        popoutWindow: N.A.getWindow($.MLl.CHANNEL_CALL_POPOUT),
        popoutWindowAlwaysOnTop: N.A.getIsAlwaysOnTop($.MLl.CHANNEL_CALL_POPOUT)
    })), b = null != C && !C.closed, {
        analyticsLocations: S
    } = (0, p.Ay)(m.A.STAGE_CHANNEL_CALL), v = (0, E.Us)(), y = (0, o.bG)([g.A], () => g.A.getChatOpen(t.id), [t.id]), j = (0, o.bG)([D.A], () => D.A.getGuild(t.guild_id), [t.guild_id]);
    (0, A.Ay)(() => {
        null == c.w.get(en) && ((0, d.mMO)(async () => {
            let {
                default: e
            } = await n.e("56016").then(n.bind(n, 456947));
            return t => (0, i.jsx)(e, {
                ...t
            })
        }), c.w.set(en, Date.now()))
    });
    let {
        width: R = 0,
        ref: O
    } = (0, h.Ay)(), L = !b || b && v === $.BRT.POPOUT;
    return (0, i.jsx)(p.f5, {
        value: S,
        children: (0, i.jsxs)(f.qh, {
            children: [(0, i.jsxs)("div", {
                className: et.kL,
                ref: O,
                children: [(0, i.jsx)(d.NPJ, {
                    theme: $.NJ8.DARK,
                    children: e => (0, i.jsx)("div", {
                        className: a()(et.ik, e, {
                            [et.pR]: r,
                            [et.gy]: r || y
                        }),
                        children: (0, i.jsx)(T.Ay, {
                            timeout: 2e3,
                            children: e => (0, i.jsx)(ea, {
                                channel: t,
                                toggleRequestToSpeakSidebar: _,
                                showRequestToSpeakSidebar: r,
                                popoutWindow: C,
                                popoutWindowAlwaysOnTop: I,
                                popoutOpen: b,
                                popoutType: l,
                                chatOpen: y,
                                idleProps: e
                            })
                        })
                    })
                }), r ? (0, i.jsx)(K.A, {
                    channel: t,
                    toggleRequestToSpeakSidebar: _,
                    chatOpen: y
                }) : null, (0, i.jsx)("div", {
                    className: et.B2,
                    children: y && L && (0, i.jsx)(x.A, {
                        channel: t,
                        guild: j,
                        maxWidth: R - 550
                    })
                })]
            }), (0, i.jsx)(f.WD, {})]
        })
    })
}