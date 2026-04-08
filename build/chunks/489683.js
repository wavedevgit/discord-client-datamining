/** chunk id: 489683 params = (module,exports,require) **/
n.d(t, {
    A: () => e2
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    d = n(936504),
    c = n(311907),
    u = n(554146),
    A = n(697744),
    h = n(533781),
    _ = n(416696),
    m = n(446080),
    p = n(385278),
    g = n(435371),
    E = n(421380),
    I = n(397927),
    f = n(827343),
    C = n(442433),
    T = n(951001),
    N = n(707606),
    S = n(155718),
    v = n(933958),
    x = n(967812),
    y = n(404522),
    b = n(782091),
    O = n(641703),
    L = n(521588),
    R = n(793574),
    P = n(688810),
    D = n(975412),
    M = n(17143),
    j = n(750765),
    w = n(384059),
    U = n(480890),
    G = n(47167),
    k = n(235986),
    V = n(932001),
    B = n(379848),
    H = n(643501),
    F = n(857253),
    Y = n(41261),
    W = n(880144),
    K = n(338771),
    q = n(421838),
    z = n(891540),
    $ = n(164956),
    Q = n(267102),
    X = n(195895),
    Z = n(3527),
    J = n(976860),
    ee = n(178442),
    et = n(38185),
    en = n(104357),
    ei = n(478564),
    er = n(729081),
    ea = n(123973),
    el = n(477835),
    es = n(63995),
    eo = n(69407),
    ed = n(96566),
    ec = n(302884),
    eu = n(30108),
    eA = n(39938),
    eh = n(105530),
    e_ = n(253932),
    em = n(151476),
    ep = n(405018),
    eg = n(704877),
    eE = n(848362),
    eI = n(222692),
    ef = n(702904),
    eC = n(471993),
    eT = n(442353),
    eN = n(970636),
    eS = n(616356),
    ev = n(961350),
    ex = n(734057),
    ey = n(71393),
    eb = n(186111),
    eO = n(430452),
    eL = n(576705),
    eR = n(383501),
    eP = n(994500),
    eD = n(287809),
    eM = n(977997),
    ej = n(607567),
    ew = n(954571),
    eU = n(975571),
    eG = n(427262),
    ek = n(42473),
    eV = n(994314),
    eB = n(40234),
    eH = n(253742),
    eF = n(652215),
    eY = n(806931),
    eW = n(49999),
    eK = n(897513),
    eq = n(509381),
    ez = n(985018),
    e$ = n(435549);
let eQ = {
    offset: {
        left: -1,
        top: -1,
        right: 1,
        bottom: 1
    }
};

function eX(e) {
    let t = e.currentTarget;
    ew.default.track(eF.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            section: eF.JJy.NOISE_CANCELLATION_POPOUT
        }
    })
}

function eZ() {
    let e = r.useRef(null);
    (0, I.tjt)(e), r.useEffect(() => {
        ew.default.track(eF.HAw.OPEN_POPOUT, {
            type: eF.JJy.NOISE_CANCELLATION_POPOUT
        })
    }, []);
    let t = (0, c.bG)([eO.Ay], () => eO.Ay.getNoiseCancellation()),
        n = (0, X.c)(),
        a = (0, c.bG)([eO.Ay], () => eO.Ay.getActiveInputProfile()),
        l = null != a && a !== eq.m.CUSTOM,
        s = ez.intl.string(ez.t.uKdWn6),
        o = ez.intl.string(ez.t.uKdWn6);
    return n ? (s = ez.intl.string(ez.t.mXZgC9), o = ez.intl.format(ez.t.F6lrb4, {
        onSettingsClick: () => {
            eO.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes")
        }
    })) : l && (s = ez.intl.formatToPlainString(ez.t["/tqmfM"], {
        enabled: t ? "true" : "false",
        inputProfile: a
    })), (0, i.jsxs)("div", {
        ref: e,
        className: e$.dD,
        children: [(0, i.jsx)(g.m_, {
            text: s,
            shouldShow: l || n,
            align: "right",
            children: (0, i.jsx)("div", {
                children: (0, i.jsx)(I.dOG, {
                    label: ez.intl.string(ez.t["WGWHv/"]),
                    checked: t && !n,
                    disabled: l || n,
                    onChange: () => f.A.setNoiseCancellation(!t, {
                        section: eF.JJy.NOISE_CANCELLATION_POPOUT
                    })
                })
            })
        }), (0, i.jsx)(I.Text, {
            variant: "text-sm/normal",
            children: o
        }), (0, i.jsx)(M.A, {
            title: ez.intl.string(ez.t.JdUas1),
            notchBackground: M.V.BLACK,
            buttonTest: ez.intl.string(ez.t["sG+MGg"]),
            buttonStop: ez.intl.string(ez.t.Yp3SbJ),
            location: {
                section: eF.JJy.NOISE_CANCELLATION_POPOUT
            }
        }), (0, i.jsx)(I.D0$, {
            label: ez.intl.string(ez.t.k6h1F4),
            children: (0, i.jsxs)(k.A, {
                justify: k.A.Justify.BETWEEN,
                className: e$.__invalid_footer,
                children: [(0, i.jsx)(I.MzZ, {
                    href: eF.X7G.KRISP,
                    onClick: e => eX(e),
                    children: (0, i.jsx)("div", {
                        className: e$.zQ
                    })
                }), (0, i.jsx)(I.MzZ, {
                    href: eU.A.getArticleURL(eF.MVz.NOISE_SUPPRESSION),
                    className: e$.W,
                    onClick: e => eX(e),
                    children: ez.intl.string(ez.t.hvVgAZ)
                })]
            })
        })]
    })
}

function eJ() {
    let {
        parentAnalyticsLocation: e
    } = (0, P.Ay)(), t = (0, c.bG)([eA.A], () => eA.A.isMuted()), n = t ? ez.intl.string(ez.t.ScHlfl) : ez.intl.string(ez.t.zqxfrf);
    return (0, i.jsx)(ek.A, {
        tooltipText: n,
        icon: t ? I.CIB : I.T7G,
        onClick: () => {
            (0, w.X)(e, w.O.STAGE_MUSIC, t), (0, ec.k)(!t)
        }
    })
}

function e0(e) {
    let {
        channel: t,
        enableActivities: n,
        disabled: a
    } = e, s = r.useRef(null), {
        parentAnalyticsLocation: o
    } = (0, P.Ay)(), d = (0, em.A)(), u = (0, eg.A)(t), A = (0, c.bG)([v.Ay], () => null != v.Ay.getSelfEmbeddedActivityForLocation(v.Ay.getConnectedActivityLocation())), h = (0, ea.Ay)(t), {
        reachedLimit: _,
        limit: p
    } = (0, ep.A)(t), C = r.useCallback(() => {
        (0, eI.A)()
    }, []), T = (0, Q.Us)(), N = r.useCallback(e => {
        if (eO.Ay.isVideoEnabled() === e) return;
        let n = () => {
            f.A.setVideoEnabled(e), e && (0, J.pX)(eF.BVt.CHANNEL(t.getGuildId() ?? eF.ME, t.id))
        };
        (0, w.X)(o, w.O.CAMERA, e), e ? (0, eT.A)(n, T) : n()
    }, [t, T, o]), S = A || n || h, {
        Component: x,
        play: y,
        events: b
    } = (0, m.K)(d.enabled ? "disable" : "enable");
    return r.useEffect(() => () => y(), [d.enabled, y]), (0, i.jsx)(eN.r, {
        onChange: N,
        onCameraUnavailable: C,
        hasPermission: u,
        channelLimit: p,
        channelLimitReached: _,
        ...d,
        enabled: !a && d.enabled,
        children: e => {
            let {
                unavailable: t,
                isActive: n,
                label: r,
                iconComponent: a,
                iconColor: d,
                ...c
            } = e, u = (0, i.jsx)(x, {
                size: "md",
                className: l()(e$.iA, {
                    [e$.ij]: !S
                }),
                color: "currentColor"
            });
            return (0, i.jsx)(I.YNO, {
                targetElementRef: s,
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, i.jsx)(j.A, {
                        onClose: t,
                        minimal: !0,
                        onInteraction: (0, U.s)("VideoDeviceMenu", o)
                    })
                },
                position: "top",
                align: "center",
                animation: I.YNO.Animation.FADE,
                children: (e, a) => {
                    let {
                        onClick: o,
                        ...d
                    } = e, {
                        isShown: A
                    } = a;
                    return (0, i.jsx)(g.m_, {
                        text: r,
                        children: (0, i.jsx)(E.$n, {
                            "data-migration-pending": !0,
                            buttonRef: s,
                            ...c,
                            ...d,
                            onClick: e => {
                                c.onClick(e), A && o(e)
                            },
                            onMouseEnter: () => {
                                d.onMouseEnter?.(), b.onMouseEnter()
                            },
                            onMouseLeave: () => {
                                b.onMouseLeave()
                            },
                            onContextMenu: e => {
                                o(e)
                            },
                            size: E.$n.Sizes.MEDIUM,
                            className: l()(e$.x6, e$.Sq, {
                                [e$.rK]: n,
                                [e$.tU]: t,
                                [e$.r9]: c.disabled
                            }),
                            innerClassName: e$.bk,
                            wrapperClassName: e$.x6,
                            fullWidth: !0,
                            focusProps: eQ,
                            children: S ? u : (0, i.jsxs)(k.A, {
                                align: k.A.Align.CENTER,
                                children: [u, ez.intl.string(ez.t.FlNoSV)]
                            })
                        })
                    })
                }
            })
        }
    })
}

function e1(e) {
    let {
        channel: t,
        enableActivities: n
    } = e, r = (0, Q.Us)(), {
        parentAnalyticsLocation: a,
        newestAnalyticsLocation: s
    } = (0, P.Ay)(), o = r === eF.BRT.POPOUT, d = (0, b.et)(t.id), h = (0, b.dL)(d), {
        userInActivity: _
    } = (0, c.cf)([v.Ay], () => ({
        userInActivity: null != v.Ay.getSelfEmbeddedActivityForChannel(t.id)
    })), m = (0, y.b)({
        surface: S.YI.VOICE_LAUNCHER,
        skipFetchingShelf: !0
    }), p = d !== b.xy.CAN_LAUNCH, {
        Component: I,
        events: f,
        play: C
    } = (0, A.c)();
    return n ? (0, i.jsx)(B.GY, {
        contentType: u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
        latestVersion: m,
        children: e => {
            let {
                visibleContent: n,
                markAsDismissed: r
            } = e;
            return (0, i.jsx)(g.m_, {
                text: h,
                children: (0, i.jsxs)(E.$n, {
                    "data-migration-pending": !0,
                    fullWidth: !0,
                    size: E.$n.Sizes.MEDIUM,
                    ...f,
                    onClick: () => {
                        C(), (0, D.A)({
                            context: null != t ? {
                                type: "channel",
                                channel: t
                            } : {
                                type: "contextless"
                            },
                            openInPopout: o,
                            analyticsLocation: s
                        }), (0, w.X)(a, w.O.ACTIVITY), n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && r(eW.i.TAKE_ACTION)
                    },
                    onMouseEnter: () => {
                        f.onMouseEnter()
                    },
                    onMouseLeave: () => {
                        f.onMouseLeave()
                    },
                    disabled: p,
                    className: l()(e$.x6, e$.Sq, {
                        [e$.rK]: _,
                        [e$.r9]: p
                    }),
                    innerClassName: e$.bk,
                    wrapperClassName: e$.x6,
                    focusProps: eQ,
                    children: [n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, i.jsx)(L.a, {
                        top: -1,
                        right: -1
                    }), (0, i.jsx)(I, {
                        size: "md",
                        color: "currentColor",
                        className: e$.iA
                    })]
                })
            })
        }
    }) : null
}

function e7(e) {
    let {
        channel: t
    } = e, n = r.useRef(null), {
        parentAnalyticsLocation: a
    } = (0, P.Ay)(), {
        Component: s,
        play: o,
        events: {
            onMouseEnter: d,
            onMouseLeave: c,
            ...A
        }
    } = (0, h.T)(), [_, m] = r.useState(!1), [p, f] = (0, V.kn)([u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE], void 0, !0), C = r.useCallback(() => {
        m(!1)
    }, []), T = r.useCallback(e => {
        let {
            closePopout: n
        } = e;
        return (0, i.jsx)(er.A, {
            channel: t,
            closePopout: n,
            isHovered: _
        })
    }, [t, _]), N = r.useCallback(() => {
        o(), _ ? m(!1) : m(!0), (0, w.X)(a, w.O.GIFTING), p === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && f(eW.i.TAKE_ACTION)
    }, [a, o, _, p, f]);
    return (0, i.jsx)(I.YNO, {
        targetElementRef: n,
        shouldShow: _,
        animation: I.YNO.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "left",
        spacing: 16,
        onRequestClose: C,
        renderPopout: T,
        children: () => (0, i.jsx)(g.m_, {
            text: ez.intl.string(ez.t.PEjaCx),
            targetElementRef: n,
            shouldShow: !_,
            onTooltipShow: d,
            onTooltipHide: c,
            children: (0, i.jsxs)(E.$n, {
                "data-migration-pending": !0,
                fullWidth: !0,
                size: E.$n.Sizes.MEDIUM,
                buttonRef: n,
                ...A,
                onClick: N,
                className: l()(e$.x6, e$.Sq),
                innerClassName: e$.bk,
                wrapperClassName: e$.x6,
                focusProps: eQ,
                children: [p === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && (0, i.jsx)(L.a, {
                    top: -4,
                    right: -4,
                    alert: !0
                }), (0, i.jsx)(s, {
                    size: "md",
                    color: "currentColor",
                    className: e$.iA
                })]
            })
        })
    })
}

function e9(e) {
    let t, {
            channel: n,
            canGoLive: a,
            enableActivities: s,
            disabled: o
        } = e,
        d = r.useRef(null),
        {
            parentAnalyticsLocation: u,
            analyticsLocations: A
        } = (0, P.Ay)(),
        h = (0, c.bG)([eD.default], () => eD.default.getCurrentUser()),
        m = (0, c.yK)([eS.A], () => eS.A.getAllActiveStreams()),
        p = (0, eg.A)(n),
        f = n.getGuildId(),
        C = (0, c.cf)([v.Ay], () => null != v.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        T = (0, ea.Ay)(n),
        N = r.useCallback(() => {
            (0, eC.A)(f, n.id, A)
        }, [f, n.id, A]),
        S = m.find(e => e.ownerId === h?.id),
        x = (0, eE.T)(n, h, m);
    t = null == S ? a ? N : ef.A : () => (0, K.A)(S);
    let y = null != S || x.length > 0,
        b = p ? ez.intl.string(ez.t.fjBNo1) : ez.intl.string(ez.t.uQn9B8),
        O = C || s || T,
        L = null != S,
        {
            Component: R,
            events: D,
            play: M
        } = (0, _.c)(L ? "disable" : "enable");
    r.useEffect(() => () => M(), [M, L]);
    let j = (0, i.jsx)(R, {
        size: "md",
        color: "currentColor",
        className: l()(e$.iA, {
            [e$.ij]: !O
        })
    });
    return (0, i.jsx)(I.YNO, {
        targetElementRef: d,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(eE.A, {
                channel: n,
                currentUser: h,
                activeStreams: m,
                onClose: t,
                handleGoLive: a ? N : ef.A,
                onInteraction: (0, U.s)("ManageStreamsMenu", u, {
                    entrypoint: eY.GK.OTHER_BUTTON
                })
            })
        },
        position: "top",
        align: "center",
        animation: I.YNO.Animation.FADE,
        children: e => {
            let {
                onClick: n,
                onMouseEnter: r,
                ...a
            } = e;
            return (0, i.jsx)(g.m_, {
                text: b,
                children: (0, i.jsx)(E.$n, {
                    "data-migration-pending": !0,
                    buttonRef: d,
                    size: E.$n.Sizes.MEDIUM,
                    onClick: e => {
                        (0, w.X)(u, w.O.STREAM, null == S), y ? n(e) : t()
                    },
                    disabled: !p || o,
                    className: l()(e$.x6, e$.Sq, {
                        [e$.rK]: null != S,
                        [e$.r9]: !p || o
                    }),
                    ...y ? a : null,
                    onMouseEnter: () => {
                        r?.(), D.onMouseEnter()
                    },
                    onMouseLeave: () => {
                        D.onMouseLeave()
                    },
                    innerClassName: e$.bk,
                    wrapperClassName: e$.x6,
                    focusProps: eQ,
                    children: O ? j : (0, i.jsxs)(k.A, {
                        align: k.A.Align.CENTER,
                        children: [j, ez.intl.string(ez.t["r0/+v7"])]
                    })
                })
            })
        }
    })
}
class e6 extends r.PureComponent {
    ref = r.createRef();
    krispButtonRef = r.createRef();
    handleChannelLinkClick = e => {
        let {
            guild: t,
            channel: n
        } = this.props;
        o()(null != n, "Channel is null during navigation click"), e.stopPropagation(), T.A.channelListScrollTo(t?.id ?? eF.ME, n.id), (0, w.X)(R.A.RTC_PANEL, w.O.CHANNEL_LINK)
    };
    handleChannelLinkContextMenu = e => {
        let {
            channel: t,
            analyticsLocations: r
        } = this.props;
        (0, C.L3)(e, async () => {
            let {
                default: e
            } = await n.e("57550").then(n.bind(n, 576701));
            return n => (0, i.jsx)(P.f5, {
                value: r,
                children: (0, i.jsx)(e, {
                    ...n,
                    channel: t,
                    onInteraction: (0, U.s)("RTCConnectionMenu", R.A.RTC_PANEL)
                })
            })
        })
    };
    handleCloseVoicePanelIntroduction = () => {
        q.sF(eK._.VOICE_PANEL_INTRODUCTION)
    };
    renderConnectionStatus() {
        let e, {
            channel: t,
            guild: n,
            rtcConnectionQuality: r,
            rtcConnectionState: a,
            rtcConnectionLastPing: l,
            hasVideo: s
        } = this.props;
        if (null == t) return null;
        let o = (0, G.m1)(t, eD.default, eP.A);
        return null != n ? (e = eF.BVt.CHANNEL(n.id, t.id), o = `${o} / ${n.name}`) : e = eF.BVt.CHANNEL(eF.ME, t.id), (0, i.jsx)(ee.A, {
            channelId: t.id,
            quality: r,
            state: a,
            lastPing: l,
            hasVideo: s,
            connectionStatusTextVariant: "text-md/medium",
            childrenAsSubtitle: !0,
            children: (0, i.jsx)(I.vN3, {
                children: (0, i.jsx)(d.N_, {
                    to: e,
                    onClick: this.handleChannelLinkClick,
                    onContextMenu: this.handleChannelLinkContextMenu,
                    children: (0, i.jsx)(eV.A, {
                        className: e$.Ix,
                        children: (0, i.jsx)(I.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: o
                        })
                    })
                })
            })
        })
    }
    renderNoiseCancellation() {
        let {
            noiseCancellationActive: e,
            noiseCancellationError: t,
            hasLayers: n,
            remoteVoiceState: r,
            channel: a,
            voiceStates: l
        } = this.props;
        return null != r ? null : a?.isGuildStageVoice() && null == l.find(e => e.user.id === ev.default.getId() && (0, eh.eY)(e.voiceState) === eh.zF.ON_STAGE) && (0, eu.Zl)(a.id) ? (0, i.jsx)(eJ, {}) : !n && t ? (0, i.jsx)(g.m_, {
            text: ez.intl.string(ez.t["i+SO/U"]),
            forceOpen: !0,
            children: (0, i.jsx)(ek.A, {
                tooltipText: null,
                disabled: !0,
                icon: I.mXj,
                "aria-label": ez.intl.string(ez.t["i+SO/U"])
            })
        }) : (0, i.jsx)(I.YNO, {
            targetElementRef: this.krispButtonRef,
            position: "top",
            align: "center",
            renderPopout: () => (0, i.jsx)(eZ, {}),
            children: (t, n) => {
                let {
                    isShown: r
                } = n;
                return (0, i.jsx)(e5, {
                    popoutProps: t,
                    isShown: r,
                    noiseCancellationActive: e,
                    ref: this.krispButtonRef
                })
            }
        }, "krisp-popout")
    }
    renderVoiceStates() {
        let {
            channel: e,
            voiceStates: t,
            showVoiceStates: n
        } = this.props;
        return null != e && n && 0 !== t.length ? (0, i.jsx)(eH.A, {
            voiceStates: t,
            channel: e,
            className: e$.Xk
        }) : null
    }
    renderChannelButtons() {
        let {
            channel: e,
            canGoLive: t,
            remoteVoiceState: n,
            enableActivities: r,
            voiceStates: a,
            selfStream: l,
            isPrivateChannelWithEnabledActivities: s,
            showSocialLayerStorefrontGiftingButton: o
        } = this.props;
        if (null == e || null != n) return null;
        let d = ev.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, ed.Bw)(e.guild_id) || !t) return null;
            let n = a.find(e => e.user.id === d);
            if (null == n || n.voiceState.suppress) return null
        }
        let c = (e.isGuildVoice() || s) && r,
            {
                reachedLimit: u
            } = (0, ep.M)(e),
            A = (0, ed.xn)(e.id);
        return (0, i.jsxs)("div", {
            className: e$.uu,
            children: [(0, i.jsx)(e0, {
                channel: e,
                enableActivities: c,
                disabled: !A && u
            }), (0, i.jsx)(e9, {
                channel: e,
                canGoLive: t,
                enableActivities: c,
                disabled: e.isGuildStageVoice() && (A && null == l || !A && u)
            }), c && !o ? (0, i.jsx)(e1, {
                channel: e,
                enableActivities: r
            }) : null, o ? (0, i.jsx)(e7, {
                channel: e
            }) : null, (0, ea.Ay)(e) ? (0, i.jsx)(el.A, {
                channel: e,
                focusProps: eQ
            }) : null]
        })
    }
    renderVoicePanelIntroduction = () => (0, i.jsxs)("div", {
        className: l()(e$.SC, "theme-light"),
        children: [(0, i.jsx)(I.Heading, {
            className: e$.oN,
            variant: "heading-md/semibold",
            children: ez.intl.string(ez.t["ba/rL2"])
        }), (0, i.jsx)(I.Text, {
            className: e$.uf,
            variant: "text-sm/normal",
            children: ez.intl.string(ez.t.Ne1Eew)
        }), (0, i.jsx)(I.Button, {
            fullWidth: !0,
            onClick: this.handleCloseVoicePanelIntroduction,
            text: ez.intl.string(ez.t.shaBeH),
            focusProps: eQ
        })]
    });
    render() {
        let {
            channel: e,
            noiseCancellationSupported: t,
            shouldShowVoicePanelIntroduction: n
        } = this.props;
        return null == e ? null : (0, i.jsx)(I.YNO, {
            targetElementRef: this.ref,
            renderPopout: this.renderVoicePanelIntroduction,
            position: "top",
            align: "center",
            animation: I.YNO.Animation.TRANSLATE,
            shouldShow: n,
            children: () => (0, i.jsxs)("div", {
                ref: this.ref,
                className: e$.kL,
                children: [(0, i.jsxs)(k.A, {
                    className: e$.FI,
                    align: k.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        className: e$.vW,
                        children: this.renderConnectionStatus()
                    }), (0, i.jsxs)(k.A, {
                        grow: 0,
                        shrink: 0,
                        className: e$.nL,
                        children: [t ? this.renderNoiseCancellation() : null, (0, i.jsx)(eB.A, {
                            channel: e
                        })]
                    })]
                }), this.renderVoiceStates(), this.renderChannelButtons()]
            })
        })
    }
}

function e5(e) {
    let {
        popoutProps: t,
        isShown: n,
        noiseCancellationActive: a,
        ref: l
    } = e, {
        parentAnalyticsLocation: s
    } = (0, P.Ay)(), {
        play: o,
        Component: d,
        events: c
    } = (0, p.G)(a ? "disable" : "enable");
    return r.useEffect(() => () => o(), [a, o]), (0, i.jsx)(ek.A, {
        ...t,
        ref: l,
        onClick: e => {
            (0, w.X)(s, w.O.KRISP, !a), t.onClick(e)
        },
        onMouseEnter: () => {
            t.onMouseEnter?.(), c.onMouseEnter()
        },
        onMouseLeave: () => {
            c.onMouseLeave()
        },
        tooltipText: n ? null : ez.intl.string(ez.t.vFiCSx),
        icon: (0, i.jsx)(d, {
            size: "refresh_sm"
        })
    })
}
let e2 = (0, N.A)(function(e) {
    let t = (0, F.A)(),
        n = (0, c.bG)([H.default], () => H.default.getAwaitingRemoteSessionInfo()),
        a = (0, c.bG)([eD.default], () => eD.default.getCurrentUser()),
        {
            channelId: l,
            ...s
        } = (0, c.cf)([eR.A], () => null != t ? {
            channelId: t.channelId,
            rtcConnectionQuality: eF.bFR.FINE,
            rtcConnectionState: eF.S7L.RTC_CONNECTED,
            rtcConnectionLastPing: 0
        } : {
            channelId: eR.A.getChannelId(),
            rtcConnectionQuality: eR.A.getQuality(),
            rtcConnectionState: eR.A.getState(),
            rtcConnectionLastPing: eR.A.getLastPing()
        }),
        o = (0, c.bG)([ex.A], () => ex.A.getChannel(l), [l]),
        d = o?.getGuildId(),
        u = (0, c.bG)([ey.A], () => ey.A.getGuild(d), [d]),
        A = (0, c.cf)([eO.Ay], () => ({
            noiseCancellationSupported: eO.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, Z.A)(eO.Ay.getNoiseCancellation(), eO.Ay.getSystemMicrophoneMode()),
            noiseCancellationError: eO.Ay.isNoiseCancellationError(),
            canGoLive: (0, W.A)(eO.Ay)
        })),
        h = (0, c.bG)([eO.Ay, z.A], () => z.A.hasHotspot(eK._.VOICE_PANEL_INTRODUCTION) && (0, eG.mv)(a) && !eO.Ay.isInteractionRequired() && !o?.isGuildStageVoice()),
        _ = (0, c.bG)([eM.A], () => null != l && eM.A.hasVideo(l), [l]),
        m = (0, c.bG)([eS.A], () => eS.A.getCurrentUserActiveStream()),
        p = (0, c.bG)([eb.A], () => eb.A.hasLayers()),
        g = (0, c.bG)([$.A], () => $.A.isViewingRoles(d)),
        E = (0, c.bG)([eL.A], () => g && !eL.A.can(eF.xBc.VIEW_CHANNEL, o), [g, o]),
        f = e_.vL.useSetting(),
        [C, T, N] = (0, c.yK)([ej.Ay, es.A], () => o?.isGuildStageVoice() ? [es.A.getMutableParticipants(o.id, eo.ip.SPEAKER), es.A.getParticipantsVersion(o.id), null] : [null, null, null != o ? ej.Ay.getVoiceStatesForChannel(o) : null], [o]),
        S = r.useMemo(() => C?.map(e => {
            let {
                user: t,
                userNick: n,
                voiceState: i
            } = e;
            return {
                user: t,
                nick: n,
                voiceState: i
            }
        }) ?? N ?? [], [C, T, N]),
        [v, y] = r.useState(!1);
    r.useEffect(() => {
        (g || E) && y(!1)
    }, [g, E, y]);
    let {
        analyticsLocations: b
    } = (0, P.Ay)(R.A.RTC_PANEL), L = (0, x.A)(d ?? eF.dJq, o?.id), D = (0, O.A)(o?.id), M = (0, en.T)({
        location: "RTCConnection"
    }), j = (0, ei.A)({
        channelId: o?.id
    }), w = (0, et.i)({
        location: "RTCConnection"
    });
    return (0, i.jsx)(P.f5, {
        value: b,
        children: (0, i.jsxs)("div", {
            className: e$.iE,
            children: [null != t || null != n ? (0, i.jsx)(Y.A, {
                voiceState: t,
                awaitingRemoteSessionInfo: n
            }) : null, (0, i.jsx)(e6, {
                ...e,
                ...A,
                ...s,
                enableActivities: L,
                remoteVoiceState: t,
                guild: u,
                channel: o,
                hasVideo: _,
                selfStream: m,
                hasLayers: p,
                voiceStates: S,
                showVoiceStates: f,
                shouldShowVoicePanelIntroduction: h,
                showSocialLayerStorefrontGiftingButton: M && j && w,
                isPrivateChannelWithEnabledActivities: D,
                analyticsLocations: b
            }), !v && g && null != d ? (0, i.jsxs)("div", {
                className: e$.BT,
                children: [(0, i.jsx)(I.Text, {
                    variant: "text-sm/normal",
                    className: e$.u0,
                    children: E ? ez.intl.string(ez.t.efjuQJ) : ez.intl.string(ez.t.br8H2N)
                }), (0, i.jsx)(I.Button, {
                    size: "sm",
                    fullWidth: !0,
                    onClick: () => {
                        y(!0)
                    },
                    text: ez.intl.string(ez.t.WAI6xu),
                    focusProps: eQ
                })]
            }) : null]
        })
    })
})