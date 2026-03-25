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
    _ = n(688810),
    p = n(313961),
    g = n(520698),
    f = n(43189),
    x = n(518530),
    C = n(384059),
    E = n(267102),
    I = n(574172),
    N = n(869146),
    b = n(976860),
    S = n(461782),
    T = n(20465),
    v = n(156652),
    y = n(128286),
    j = n(619344),
    R = n(821747),
    O = n(961350),
    L = n(249288),
    M = n(71393),
    D = n(576705),
    G = n(309010),
    U = n(723702),
    P = n(837921),
    k = n(323443),
    w = n(113783),
    V = n(69407),
    B = n(446600),
    H = n(571909),
    F = n(374873),
    K = n(623413),
    W = n(707251),
    Y = n(357819),
    z = n(717965),
    q = n(696842),
    X = n(895903),
    J = n(542372),
    Q = n(533233),
    $ = n(652215),
    Z = n(806931),
    ee = n(985018),
    et = n(105626);
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
    } = (0, _.Ay)(), h = t.getGuildId(), A = (0, o.bG)([G.A], () => G.A.getMostRecentSelectedTextChannelId(h), [h]), m = O.default.getId(), f = !(0, o.bG)([p.A], () => p.A.isFullscreenInContext(n)) && (!U.isPlatformEmbedded || P.Ay.supportsFeature($.BYE.POPOUT_WINDOWS)), x = null != c && c.type !== Z.lp.ACTIVITY && c.user.id !== m, E = s.useMemo(() => a?.window ?? window, [a]), N = (0, J.A)({
        channel: t,
        appContext: n,
        popoutOpen: l,
        popoutWindow: a,
        currentWindow: E
    }), S = n === $.BRT.POPOUT && U.isPlatformEmbedded && P.Ay.supportsFeature($.BYE.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [x ? (0, i.jsx)(R.A, {
            context: (0, g.A)(c.type),
            userId: c.user.id,
            currentWindow: E,
            sliderClassName: et.MQ,
            location: d
        }) : null, S ? (0, i.jsx)(j.A, {
            popoutWindowAlwaysOnTop: r,
            onToggleStayOnTop: ei
        }) : null, f ? (0, i.jsx)(y.A, {
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
    } = e, n = (0, E.Us)(), s = (0, o.bG)([D.A], () => D.A.can($.xBc.CREATE_INSTANT_INVITE, t)), l = (0, o.bG)([M.A], () => M.A.getGuild(t.guild_id)), a = (0, o.bG)([B.A], () => B.A.getStageInstanceByChannel(t.id)), r = s || a?.invite_code != null;
    return null != l && r ? (0, i.jsx)(q.A, {
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
            chatOpen: g,
            idleProps: x
        } = e,
        {
            analyticsLocations: C
        } = (0, _.Ay)(m.A.VOICE_CONTROL_TRAY),
        I = (0, E.Us)(),
        N = (0, o.bG)([G.A], () => G.A.getVoiceChannelId() === n.id, [n.id]),
        b = (0, o.bG)([D.A], () => D.A.can($.xBc.CONNECT, n)),
        S = (0, w.E5)(n.id, V.ip.SPEAKER),
        y = (0, o.bG)([p.A], () => p.A.getSelectedParticipant(n.id)),
        j = h && I !== $.BRT.POPOUT,
        [R, O] = s.useState(0),
        M = s.useMemo(() => (0, r.debounce)(e => {
            let {
                scrollTop: t
            } = e.target;
            O(t)
        }, 1e3, {
            leading: !0
        }), []),
        {
            isOnStartStageScreen: U
        } = (0, H.Ay)();
    (0, H.vI)(n);
    let P = (0, o.bG)([L.A], () => L.A.getToastsEnabled(n.id)),
        B = (0, Q.A)(n) ? null != y ? "84px" : "124px" : null != y ? "0px" : "48px";
    return U && (B = "0px"), t = U ? (0, i.jsx)(X.A, {
        channel: n,
        onContinueClick: () => {
            (0, H.ek)(!1), N || (0, k.cy)(n)
        }
    }) : N ? (0, i.jsx)(Y.A, {
        channel: n,
        onScroll: M,
        popoutType: A
    }) : (0, i.jsx)(K.A, {
        participants: S,
        channel: n,
        hasConnectPermission: b
    }), (0, i.jsx)(v.A, {
        style: {
            height: `calc(100% - ${B})`,
            paddingTop: B
        },
        disableGradients: !N || 0 === R && v.x.TOP,
        renderBottomCenter: () => N ? (0, i.jsx)(_.f5, {
            value: C,
            children: (0, i.jsx)(z.A, {
                channel: n,
                isOnStartStageScreen: U
            })
        }) : null,
        renderBottomRight: () => N ? (0, i.jsx)(_.f5, {
            value: C,
            children: (0, i.jsx)(es, {
                channel: n,
                appContext: I,
                popoutOpen: h,
                popoutWindow: d,
                popoutWindowAlwaysOnTop: u,
                selectedParticipant: y
            })
        }) : null,
        renderHeader: () => (0, i.jsx)(W.A, {
            toggleRequestToSpeakSidebar: l,
            showRequestToSpeakSidebar: c,
            channel: n
        }),
        renderChatToasts: () => !P || g || j ? null : (0, i.jsx)(f.Ay, {
            children: (0, i.jsx)(T.A, {
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
    } = e, [r, u] = s.useState(!1), g = s.useCallback(() => {
        u(!r)
    }, [r, u]), {
        popoutWindow: C,
        popoutWindowAlwaysOnTop: I
    } = (0, o.cf)([N.A], () => ({
        popoutWindow: N.A.getWindow($.MLl.CHANNEL_CALL_POPOUT),
        popoutWindowAlwaysOnTop: N.A.getIsAlwaysOnTop($.MLl.CHANNEL_CALL_POPOUT)
    })), b = null != C && !C.closed, {
        analyticsLocations: T
    } = (0, _.Ay)(m.A.STAGE_CHANNEL_CALL), v = (0, E.Us)(), y = (0, o.bG)([p.A], () => p.A.getChatOpen(t.id), [t.id]), j = (0, o.bG)([M.A], () => M.A.getGuild(t.guild_id), [t.guild_id]);
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
    } = (0, h.Ay)(), L = !b || v === $.BRT.POPOUT;
    return (0, i.jsx)(_.f5, {
        value: T,
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
                        children: (0, i.jsx)(S.Ay, {
                            timeout: 2e3,
                            children: e => (0, i.jsx)(ea, {
                                channel: t,
                                toggleRequestToSpeakSidebar: g,
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
                }), r ? (0, i.jsx)(F.A, {
                    channel: t,
                    toggleRequestToSpeakSidebar: g,
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