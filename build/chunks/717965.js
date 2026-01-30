/** Chunk was on 1113 **/
/** chunk id: 717965, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => ey
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(342494),
    a = n(397927),
    o = n(956793),
    c = n(517461),
    u = n(935649),
    d = n(847599),
    h = n(793574),
    p = n(688810),
    g = n(313961),
    f = n(385318),
    m = n(750765),
    b = n(183184),
    A = n(384059),
    y = n(480890),
    O = n(643501),
    _ = n(880144),
    j = n(698441),
    x = n(394412),
    v = n(859894),
    E = n(267102),
    C = n(931991),
    S = n(151476),
    I = n(405018),
    N = n(704877),
    T = n(173660),
    P = n(105225),
    w = n(579153),
    R = n(222692),
    D = n(461782),
    L = n(246356),
    M = n(709562),
    G = n(404355),
    k = n(577062),
    U = n(970636),
    V = n(961350),
    B = n(430452),
    H = n(576705),
    F = n(309010),
    K = n(287809),
    Y = n(993838),
    W = n(849736),
    z = n(776781),
    q = n(233993),
    X = n(312006),
    J = n(446600),
    Q = n(96566),
    Z = n(302884),
    $ = n(30108),
    ee = n(39938),
    et = n(106044),
    en = n(370228),
    er = n(982279),
    el = n(418208),
    ei = n(505543),
    es = n(361619),
    ea = n(806931),
    eo = n(985018),
    ec = n(563429),
    eu = n(117816);

function ed(e) {
    let {
        channel: t
    } = e, {
        parentAnalyticsLocation: n
    } = (0, p.Ay)(), i = (0, er.A)(t.id), [o, h] = (0, es.A)(t), g = (0, en.L)(t), f = (0, el.Vv)(), m = (0, el.tp)(), b = l.useRef(null), [y, O] = (0, c.V)("age-verification-stage-popover-dismissed", !1), _ = l.useContext(D.vG);
    if (i) return null;
    let j = m && !y;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(M.l, {
            ref: b,
            isTrayButton: !0,
            isActive: o,
            label: function(e, t, n, r) {
                let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                return !l && r ? null : n ? eo.intl.string(eo.t.NzITVo) : e ? eo.intl.string(eo.t.GCimTk) : t ? eo.intl.string(eo.t.hLbG5N) : eo.intl.string(eo.t.e4WMvx)
            }(o, g, f, m, y),
            iconComponent: f ? a._xi : a.E7M,
            onClick: () => {
                (0, A.X)(n, A.O.REQUEST_TO_SPEAK, !o), O(!0), f ? u.A.showAgeVerificationGetStartedModal({
                    entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND
                }) : h()
            },
            color: o ? "green" : void 0,
            disabled: !g && !o
        }), j && (0, r.jsx)(s.AM, {
            targetElementRef: b,
            graphic: {
                type: "image",
                src: eu.A
            },
            gradientColor: "blue",
            title: eo.intl.string(eo.t.zvubnM),
            body: eo.intl.string(eo.t["/wx+J2"]),
            shouldShow: !_,
            actions: [{
                text: eo.intl.string(eo.t.KXVgjt),
                onClick: () => {
                    u.A.showAgeVerificationGetStartedModal({
                        entryPoint: d.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT
                    }), O(!0)
                }
            }],
            onRequestClose: () => O(!0)
        })]
    })
}
let eh = l.memo(function(e) {
    let {
        channel: t
    } = e, n = (0, i.bG)([F.A], () => F.A.getVoiceChannelId() === t.id, [t.id]);
    return (0, r.jsxs)("div", {
        className: ec.kL,
        children: [(0, r.jsxs)("div", {
            className: ec.qi,
            children: [(0, r.jsx)(em, {
                channelId: t.id
            }), n ? (0, r.jsx)(ed, {
                channel: t
            }) : null, (0, r.jsx)(w.A, {
                channel: t
            })]
        }), (0, r.jsx)(eg, {
            channel: t
        })]
    })
});

function ep(e) {
    let {
        channel: t
    } = e, {
        parentAnalyticsLocation: n
    } = (0, p.Ay)();
    return (0, r.jsx)(M.l, {
        isTrayButton: !0,
        onClick: () => {
            ((0, A.X)(n, A.O.SPEAK_ON_STAGE), (0, el.Cf)(t.id)) ? u.A.showAgeVerificationGetStartedModal({
                entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND
            }): (0, W.e7)(t, !1)
        },
        iconComponent: a.LvC,
        label: eo.intl.string(eo.t["8Joh+p"])
    })
}

function eg(e) {
    let {
        channel: t,
        onSelect: n
    } = e, s = (0, E.Us)(), {
        canManageGuildEvent: c
    } = (0, C.nr)(t), u = (0, i.bG)([J.A], () => J.A.getStageInstanceByChannel(t.id), [t.id]), d = (0, i.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(null == u ? void 0 : u.guild_scheduled_event_id)), {
        suppress: g
    } = (0, T.A)(t), f = V.default.getId(), [m] = (0, es.A)(t), b = X.Ay.isModerator(f, t.id), O = (0, z.Ni)(t.id), _ = c(d), {
        parentAnalyticsLocation: x
    } = (0, p.Ay)(), v = l.useRef(null), S = () => (function(e) {
        let {
            channel: t,
            appContext: n
        } = e;
        ((0, A.X)(h.A.VOICE_CONTROL_TRAY, A.O.DISCONNECT), (0, et.A)(t)) ? (0, Y.j3)(t, n) : o.default.disconnect()
    })({
        channel: t,
        appContext: s
    });
    return (b || _) && null != u ? (0, r.jsx)(a.YNO, {
        targetElementRef: v,
        renderPopout: e => {
            let {
                closePopout: l
            } = e;
            return (0, r.jsx)(L.A, {
                children: (0, r.jsx)(a.W1t, {
                    "data-menu-migrated": !0,
                    navId: "exit-options",
                    "aria-label": eo.intl.string(eo.t["3Uj+2p"]),
                    onClose: l,
                    onSelect: n,
                    onInteraction: (0, y.s)("End Stage", x, {
                        entrypoint: ea.GK.CARET
                    }),
                    children: (0, r.jsx)(a.Drp, {
                        id: "end-stage",
                        color: "danger",
                        action: () => (0, Y.$q)(t, s),
                        label: eo.intl.string(eo.t["Fmx5y/"]),
                        icon: a.aXh,
                        leadingAccessory: {
                            type: "icon",
                            icon: a.aXh
                        }
                    })
                })
            })
        },
        align: "center",
        position: "top",
        spacing: 16,
        animation: a.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: l
            } = t;
            return (0, r.jsx)(G.A, {
                ref: v,
                label: eo.intl.string(eo.t.c6qKwr),
                onClick: S,
                onPopoutClick: n,
                popoutOpen: l
            })
        }
    }) : g && !O || m ? (0, r.jsx)(G.A, {
        label: eo.intl.string(eo.t.SMKyih),
        onClick: S
    }) : (0, r.jsx)(G.A, {
        label: eo.intl.string(eo.t.c6qKwr),
        onClick: S
    })
}

function ef(e) {
    let {
        channel: t
    } = e, {
        parentAnalyticsLocation: n
    } = (0, p.Ay)();
    return (0, r.jsx)(M.l, {
        isTrayButton: !0,
        iconComponent: a.U$V,
        label: eo.intl.string(eo.t.ezLpY6),
        onClick: () => {
            (0, A.X)(n, A.O.MOVE_TO_AUDIENCE), (0, W.Tf)(t)
        }
    })
}

function em(e) {
    let {
        channelId: t
    } = e, {
        parentAnalyticsLocation: n
    } = (0, p.Ay)(), l = (0, i.bG)([ee.A], () => ee.A.isMuted()), s = (0, $.bF)(t), o = (0, i.bG)([ee.A], () => ee.A.shouldPlay());
    return s ? (0, r.jsx)(M.l, {
        isTrayButton: !0,
        isActive: !l,
        label: l ? eo.intl.string(eo.t.ScHlfl) : eo.intl.string(eo.t.zqxfrf),
        iconComponent: l ? a.CIB : a.T7G,
        color: l ? void 0 : "green",
        onClick: () => {
            (0, A.X)(n, A.O.STAGE_MUSIC, l), (0, Z.k)(!l)
        }
    }) : (0, r.jsx)(M.l, {
        isTrayButton: !0,
        isActive: o,
        label: o ? eo.intl.string(eo.t.zqxfrf) : eo.intl.string(eo.t.ScHlfl),
        iconComponent: o ? a.T7G : a.CIB,
        color: o ? "green" : void 0,
        onClick: () => {
            (0, A.X)(n, A.O.STAGE_MUSIC, !o), (0, Z.C)(!o)
        }
    })
}
let eb = l.memo(function(e) {
    let {
        channel: t
    } = e, {
        parentAnalyticsLocation: n
    } = (0, p.Ay)(), {
        suppress: s,
        selfMute: o,
        mute: c
    } = (0, T.A)(t), u = (0, z.Ni)(t.id), d = (0, er.A)(t.id), h = (0, i.bG)([O.default], () => null != O.default.getAwaitingRemoteSessionInfo()), {
        cameraUnavailable: A,
        enabled: j
    } = (0, S.A)(), x = (0, N.A)(t), {
        limit: v,
        reachedLimit: E
    } = (0, I.A)(t), C = (0, i.bG)([K.default], () => K.default.getCurrentUser()), D = (0, i.bG)([B.A], () => (0, _.A)(B.A)), M = (0, i.bG)([F.A], () => F.A.getVoiceChannelId() === t.id, [t.id]), G = (0, i.bG)([g.A], () => g.A.getStreamParticipants(t.id)[0], [t.id]), V = (0, Q.qT)(t.id), H = v > 0, Y = E && !V || null != G && G.user.id !== (null == C ? void 0 : C.id), W = (0, y.s)("AudioDeviceMenu", n, {
        entrypoint: ea.GK.CARET
    }), q = l.useRef(null), X = l.useRef(null);
    if (null == C) return null;
    let J = (0, r.jsx)(a.YNO, {
        targetElementRef: q,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, r.jsx)(L.A, {
                children: (0, r.jsx)(m.A, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, y.s)("VideoDeviceMenu", n, {
                        entrypoint: ea.GK.CARET
                    })
                })
            })
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: a.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: l
            } = t;
            return (0, r.jsx)(U.A, {
                ref: q,
                centerButton: !0,
                hasPermission: x,
                enabled: j,
                cameraUnavailable: A,
                onChange: P.SZ,
                onCameraUnavailable: R.A,
                channelLimitReached: E,
                channelLimit: v,
                popoutOpen: l,
                onPopoutClick: n
            })
        }
    });
    return (0, r.jsxs)("div", {
        className: ec.iE,
        children: [M && !s ? (0, r.jsxs)("div", {
            className: ec.qi,
            children: [(0, r.jsx)(a.YNO, {
                targetElementRef: X,
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, r.jsx)(L.A, {
                        children: (0, r.jsx)(f.default, {
                            onClose: t,
                            renderInputDevices: !0,
                            renderInputModes: !0,
                            renderOutputDevices: !0,
                            renderInputVolume: !0,
                            renderOutputVolume: !0,
                            renderDeafen: !0,
                            minimal: !0,
                            onInteraction: W
                        })
                    })
                },
                align: "right",
                position: "top",
                spacing: 16,
                animation: a.YNO.Animation.FADE,
                children: (e, t) => {
                    let {
                        onClick: n
                    } = e, {
                        isShown: l
                    } = t;
                    return (0, r.jsx)(k.A, {
                        ref: X,
                        centerButton: !0,
                        onPopoutClick: n,
                        selfMute: o,
                        serverMute: c,
                        suppress: s,
                        popoutOpen: l,
                        onClick: () => (0, b.A)(c, s, "Stage Channel Controls"),
                        awaitingRemote: h
                    })
                }
            }), H && J]
        }) : null, (0, r.jsxs)("div", {
            className: ec.qi,
            children: [M && !s && H ? (0, r.jsx)(P.rP, {
                channel: t,
                currentUser: C,
                exitFullScreen: () => null,
                canGoLive: D,
                hasPermission: x,
                disabled: Y
            }) : null, (0, r.jsx)(em, {
                channelId: t.id
            }), M && (0, r.jsx)(ed, {
                channel: t
            }), M && u && s && d && (0, r.jsx)(ep, {
                channel: t
            }), M && !s && (0, r.jsx)(ef, {
                channel: t
            }), (0, r.jsx)(w.A, {
                channel: t
            })]
        }), (0, r.jsx)(eg, {
            channel: t
        })]
    })
});

function eA(e) {
    let {
        channel: t
    } = e;
    return (0, r.jsxs)("div", {
        className: ec.iE,
        children: [(0, r.jsx)("div", {
            className: ec.qi,
            children: (0, r.jsx)(em, {
                channelId: t.id
            })
        }), (0, r.jsx)(eg, {
            channel: t
        })]
    })
}
let ey = l.memo(function(e) {
    let {
        channel: t,
        isOnStartStageScreen: n
    } = e, l = (0, er.A)(t.id), s = (0, z.Ni)(t.id), a = (0, i.bG)([H.A], () => H.A.can(q.QY, t), [t]), o = (0, el.zU)(), c = (0, ei.A)(t.id), u = (0, i.bG)([g.A], () => null != t ? g.A.getSelectedParticipant(t.id) : null), d = !c && null == u;
    return n ? (0, r.jsx)(eA, {
        channel: t
    }) : l || s ? (0, r.jsxs)("div", {
        className: ec.My,
        children: [(0, r.jsxs)("div", {
            className: ec.Ac,
            children: [d ? (0, r.jsx)(x.A, {
                channelId: null == t ? void 0 : t.id
            }) : null, (0, r.jsx)("div", {
                className: ec.me
            }), d && a && !o ? (0, r.jsx)(v.A, {
                highlight: !0,
                channel: t
            }) : null, (0, r.jsx)("div", {
                className: ec.me
            })]
        }), (0, r.jsx)(eb, {
            channel: t
        })]
    }) : (0, r.jsx)(eh, {
        channel: t
    })
})