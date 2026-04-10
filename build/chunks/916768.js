/** chunk id: 916768 params = (module,exports,require) **/
n.d(e, {
    A: () => tk,
    w: () => tj
});
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r);
if (21552 == n.j) var a = n(936504);
var o = n(299855),
    c = n.n(o),
    d = n(311907),
    u = n(582754),
    E = n(397927),
    _ = n(157559),
    T = n(827343),
    A = n(830215),
    I = n(503703),
    N = n(912851),
    R = n(169604),
    p = n(956793),
    h = n(785796),
    m = n(55619),
    O = n(246605),
    C = n(271866),
    g = n(736653),
    S = n(77729),
    y = n(573648),
    P = n(793574),
    M = n(688810),
    U = n(587895),
    x = n(315982),
    D = n(235986),
    f = n(420216),
    j = n(984870),
    L = n(626262),
    k = n(813803),
    G = n(487329),
    v = n(102609),
    b = n(49463),
    B = n(322223),
    w = n(137207),
    q = n(619029),
    X = n(202384),
    $ = n(51758),
    H = n(571139),
    V = n(527012),
    W = n(997509),
    F = n(475723),
    K = n(598733),
    Y = n(801644),
    J = n(74848),
    z = n(4630),
    Q = n(532794),
    Z = n(234419),
    tt = n(532423),
    te = n(814249),
    tn = n(829219),
    ti = n(601730),
    tl = n(722255),
    tr = n(613491),
    ts = n(464473),
    ta = n(780964),
    to = n(858897),
    tc = n(459321),
    td = n(594609),
    tu = n(734057),
    tE = n(430452),
    t_ = n(383501),
    tT = n(967198),
    tA = n(287809),
    tI = n(67480),
    tN = n(147964),
    tR = n(519057),
    tp = n(954571),
    th = n(975571),
    tm = n(723702),
    tO = n(652215),
    tC = n(502075),
    tg = n(788868),
    tS = n(831502),
    ty = n(731854),
    tP = n(985018),
    tM = n(381703);
let tU = t => {
        let {
            error: e,
            allowClick: n = !1
        } = t, l = (0, G.B1)(e)?.errorCode, r = tP.intl.formatToPlainString(tP.t.ejOT95, {
            errorCode: l
        }), s = (0, i.jsx)(E.Text, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: tM.fU,
            selectable: !0,
            children: r
        });
        return n ? (0, i.jsx)(E.DUT, {
            tag: "span",
            className: tM.wz,
            onClick: () => open(th.A.getArticleURL(tO.MVz.AV_ERROR_CODES)),
            children: s
        }) : s
    },
    tx = t => {
        let {
            noticeType: e
        } = t;
        return (0, i.jsxs)(E.$Td, {
            color: E.Hv$.DANGER,
            children: [(0, i.jsx)(E.PMB, {
                noticeType: e,
                onClick: () => {
                    tj()
                }
            }), tP.intl.string(tP.t.o3zuYz), (0, i.jsx)(tU, {
                error: G.iy.NO_INPUT_DEVICES
            }), (0, i.jsx)(E.eCN, {
                href: th.A.getArticleURL(tO.MVz.NO_INPUT_DETECTED),
                noticeType: e,
                children: tP.intl.string(tP.t.RYKKox)
            })]
        })
    };

function tD(t) {
    return (0, tm.isWindows)() && c().satisfies(S.A?.os.release, tC.PH) ? `ms-settings:sound-properties?endpointId=${t}` : "ms-settings:sound"
}

function tf(t) {
    let e, n, {
            noticeType: l
        } = t,
        r = (0, J.x5)(ty.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        {
            inputDeviceOSMuted: a,
            inputDeviceOSVolume: o
        } = (0, d.cf)([tE.Ay], () => ({
            inputDeviceOSMuted: tE.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: tE.Ay.getInputDeviceOSVolume()
        })),
        c = !1;
    return !0 === a ? (e = tP.intl.string(tP.t.ppW3ri), n = (0, i.jsx)(E.eCN, {
        href: tD(s),
        noticeType: l,
        children: tP.intl.string(tP.t.QghSIq)
    })) : 0 === o ? (e = tP.intl.string(tP.t.j4gGA4), n = (0, i.jsx)(E.eCN, {
        href: tD(s),
        noticeType: l,
        children: tP.intl.string(tP.t.QghSIq)
    })) : tE.Ay.supports(ty.O5.LOOPBACK) ? (e = tP.intl.string(tP.t.dNAJ18), c = !0, n = (0, i.jsx)(E.zr9, {
        onClick: () => {
            (0, to.openUserSettings)(ta.X.VOICE_AND_VIDEO_PANEL)
        },
        children: tP.intl.string(tP.t.I6YlB4)
    })) : (e = tP.intl.string(tP.t.nCO9bI), n = (0, i.jsx)(E.eCN, {
        href: th.A.getArticleURL(tO.MVz.NO_INPUT_DETECTED),
        noticeType: l,
        children: tP.intl.string(tP.t.RYKKox)
    })), (0, i.jsxs)(E.$Td, {
        color: E.Hv$.DANGER,
        children: [(0, i.jsx)(E.PMB, {
            noticeType: l,
            onClick: () => {
                tj(), (0, td.h)()
            }
        }), e, (0, i.jsx)(tU, {
            allowClick: c,
            error: G.iy.NO_AUDIO_INPUT_DETECTED
        }), n]
    })
}

function tj(t) {
    N.A.dismiss(null != t ? {
        untilAtLeast: s()(t)
    } : void 0)
}
let tL = 21552 == n.j ? l.memo(function() {
    let t = (0, d.bG)([tA.default], () => tA.default.getCurrentUser()),
        e = (0, d.bG)([tT.A], () => tT.A.getGuildId()),
        r = (0, d.bG)([tR.Ay], () => tR.Ay.getNotice()),
        {
            analyticsLocations: s
        } = (0, M.Ay)(),
        o = (0, g.Ay)(),
        c = (0, $.H)(e),
        N = (0, Z.V)();
    if (l.useEffect(() => {
            if (r?.type != null) {
                let t;
                if (null == N && (r.type === tO.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === tO.kqX.PREMIUM_TIER_0_TRIAL_ENDING)) return;
                let n = {};
                null != e && (n.guild_id = e), N?.trial_id != null && (n.trial_id = N.trial_id), t = {
                    notice_type: r.type,
                    ...n
                }, tp.default.track(tO.HAw.APP_NOTICE_VIEWED, t)
            }
        }, [r?.type, e, N]), l.useEffect(() => {
            if (null != r && r.type === tO.kqX.SURVEY && null != r.metadata) {
                let {
                    metadata: t
                } = r, e = b.A.getUserExperimentDescriptor(t.id);
                null != e && (0, v.LQ)(t.id, e), (async () => {
                    r.metadata?.id != null && await (0, O.oX)(r.metadata?.id)
                })()
            }
        }, [r]), null == r) return null;
    let S = null != r.type ? tR.Re[r.type] : null,
        P = null != r.type ? tR.k3[r.type] : null,
        G = null != r.type ? tR.f7[r.type] : null,
        J = tR.pe[r.type];
    if (null != S) return (0, i.jsx)(L.$, {
        dismissibleContent: S,
        noticeType: r.type
    });
    if (null != P) return (0, i.jsx)(k._, {
        dismissibleContent: P,
        noticeType: r.type
    });
    if (null != G) return (0, i.jsx)(j.T, {
        dismissibleContent: G
    });
    if (null != J) return (0, i.jsx)(f.r, {
        dismissibleContent: J,
        noticeType: r.type
    });
    let td = r.metadata?.premiumType;
    switch (r.type) {
        case tO.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(tc.A, {});
        case tO.kqX.LURKING_GUILD:
            return (0, i.jsx)(K.A, {});
        case tO.kqX.PENDING_MEMBER:
            return (0, i.jsx)(H.A, {});
        case tO.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(tr.A, {});
        case tO.kqX.GUILD_RAID_NOTIFICATION:
            let {
                dismissUntil: tE
            } = r.metadata;
            return (0, i.jsx)(B.A, {
                onDismiss: () => tj(tE)
            });
        case tO.kqX.WIN32_DEPRECATED_MESSAGE:
            let {
                dismissUntil: tC
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(tC),
                    noticeType: r.type
                }), tP.intl.format(tP.t["08KQ1P"], {
                    helpCenterLink: th.A.getArticleURL(tO.MVz.WIN32_DEPRECATE)
                })]
            });
        case tO.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let {
                dismissUntil: ty
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(ty),
                    noticeType: r.type
                }), tP.intl.format(tP.t["8Je+dX"], {
                    helpCenterLink: th.A.getArticleURL(tO.MVz.WIN7_8_DEPRECATE)
                })]
            });
        case tO.kqX.WIN_COMPAT_MODE_MESSAGE:
            let {
                dismissUntil: tU
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(tU),
                    noticeType: r.type
                }), tP.intl.string(tP.t["9DJgOg"])]
            });
        case tO.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let {
                dismissUntil: tD
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(tD),
                    noticeType: r.type
                }), tP.intl.format(tP.t.q8VPLo, {
                    helpCenterLink: th.A.getArticleURL(tO.MVz.MACOS_19_DEPRECATE)
                })]
            });
        case tO.kqX.E2EE_UPDATE_REQUIRED:
            let {
                dismissUntil: tL
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(tL),
                    noticeType: r.type
                }), tP.intl.format(tm.isPlatformEmbedded ? tP.t.J232TI : tP.t.vceuiL, {
                    helpCenterLink: th.A.getArticleURL(tO.MVz.END_TO_END_ENCRYPTION)
                })]
            });
        case tO.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: r.type
                }), tP.intl.string(tP.t.iW0fcQ), (0, i.jsx)(E.eCN, {
                    href: th.A.getArticleURL(tO.MVz.WINDOWS_MEDIA_PACK),
                    target: "_blank",
                    noticeType: r.type,
                    children: tP.intl.string(tP.t.LQG5j6)
                })]
            });
        case tO.kqX.GENERIC:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: r.type
                }), r.message, null != r.buttonText ? (0, i.jsx)(E.Z_L, {
                    onClick: r.callback,
                    noticeType: r.type,
                    children: r.buttonText
                }) : null]
            });
        case tO.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: r.type
                }), r.message, null != r.buttonText ? (0, i.jsx)(E.Z_L, {
                    onClick: r.callback,
                    noticeType: r.type,
                    children: r.buttonText
                }) : null]
            });
        case tO.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => {
                        R.A.clearRemoteDisconnectVoiceChannelId(), tj()
                    },
                    noticeType: r.type
                }), tP.intl.string(tP.t.bOQ3jV), (0, i.jsx)(E.Z_L, {
                    onClick: () => {
                        let t = t_.A.getRemoteDisconnectVoiceChannelId();
                        null != t && null != tu.A.getChannel(t) && p.default.selectVoiceChannel(t)
                    },
                    noticeType: r.type,
                    children: tP.intl.string(tP.t.vD60Pv)
                })]
            });
        case tO.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => {
                        R.A.clearLastSessionVoiceChannelId(), tj()
                    },
                    noticeType: r.type
                }), tP.intl.string(tP.t.jY2lUA), (0, i.jsx)(E.Z_L, {
                    onClick: () => {
                        let t = t_.A.getLastSessionVoiceChannelId();
                        null != t && null != tu.A.getChannel(t) && p.default.selectVoiceChannel(t)
                    },
                    noticeType: r.type,
                    children: tP.intl.string(tP.t.vD60Pv)
                })]
            });
        case tO.kqX.SPOTIFY_AUTO_PAUSED:
            let tk = y.A.get(tO.fg2.SPOTIFY);
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: r.type
                }), (0, i.jsx)("img", {
                    alt: "",
                    className: tM.tV,
                    src: (0, u.qB)(o) ? tk.icon.darkSVG : tk.icon.whiteSVG
                }), tP.intl.string(tP.t.D8Cp76), (0, i.jsx)(E.Z_L, {
                    onClick: () => (0, to.openUserSettings)(ta.X.VOICE_AND_VIDEO_PANEL),
                    noticeType: r.type,
                    children: tP.intl.string(tP.t.NiTd0e)
                }), (0, i.jsx)(E.MzZ, {
                    className: tM.uD,
                    href: th.A.getArticleURL(tO.MVz.SPOTIFY_AUTO_PAUSED),
                    target: "_blank",
                    children: tP.intl.string(tP.t.CiqAIU)
                })]
            });
        case tO.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [tP.intl.string(tP.t["f+Zaol"]), (0, i.jsx)(E.Z_L, {
                    noticeType: r.type,
                    onClick: () => c && null != e ? (0, X.Ze)(e) : x.R(),
                    children: tP.intl.string(tP.t.fiNVin)
                })]
            });
        case tO.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [tP.intl.string(tP.t["3sWbf3"]), (0, i.jsx)(E.Z_L, {
                    noticeType: r.type,
                    onClick: () => {
                        A.A.verifyResend(), _.A.show({
                            title: tP.intl.string(tP.t.LykQYk),
                            body: tP.intl.format(tP.t.azKEPy, {
                                email: t?.email
                            }),
                            cancelText: tP.intl.string(tP.t.Vm8akB),
                            onCancel: x.R
                        })
                    },
                    children: tP.intl.string(tP.t.WnX4J2)
                })]
            });
        case tO.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => h.A.ackScheduledMaintenance(),
                    noticeType: r.type
                }), tP.intl.format(tP.t["yb96S+"], r.metadata), (0, i.jsx)(E.eCN, {
                    href: `${tO.qF7.STATUS}/incidents/${r.metadata.id}`,
                    noticeType: r.type,
                    children: tP.intl.string(tP.t.hvVgAZ)
                })]
            });
        case tO.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(tf, {
                noticeType: r.type
            });
        case tO.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(tx, {
                noticeType: r.type
            });
        case tO.kqX.HARDWARE_MUTE:
            if (null != r.metadata) {
                let {
                    vendor: t,
                    model: e
                } = r.metadata;
                return (0, i.jsxs)(E.$Td, {
                    color: E.Hv$.DANGER,
                    children: [tP.intl.format(tP.t.qoDex7, {
                        vendorName: t.name,
                        modelName: e.name
                    }), (0, i.jsx)(E.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            T.A.setEnableHardwareMuteNotice(!1), tj()
                        }
                    }), (0, i.jsx)(E.eCN, {
                        href: e.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: r.type,
                        children: tP.intl.string(tP.t["Yl/Riu"])
                    })]
                })
            }
            if (Y.A.getConfig({
                    location: "Notice.AudioIssueNoticeHardwareMute"
                }).enableHardwareSilenceWarning) return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.INFO,
                children: [tP.intl.format(tP.t.QMw8Fd, {}), (0, i.jsx)(E.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        T.A.setEnableHardwareMuteNotice(!1), tj()
                    }
                })]
            });
            return null;
        case tO.kqX.STREAMER_MODE:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.STREAMER_MODE,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: tO.kqX.STREAMER_MODE
                }), tP.intl.string(tP.t.iEgBXp), (0, i.jsx)(E.Z_L, {
                    onClick: () => m.A.setEnabled(!1),
                    noticeType: tO.kqX.STREAMER_MODE,
                    children: tP.intl.string(tP.t.R9GHya)
                })]
            });
        case tO.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let {
                skuId: tG, applicationId: tv
            } = r.metadata, tb = tI.A.get(tG), tB = U.A.getApplication(tv);
            if (null == tb || null == tB) return null;
            let tw = {
                page: tO.liQ.IN_APP
            };
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => I.X(tb.id),
                    noticeType: tO.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                }), (0, i.jsx)(E.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tM.PC
                }), tP.intl.format(tP.t["g3MU/+"], {
                    applicationName: tB.name,
                    skuName: tb.name
                }), (0, i.jsx)(E.Z_L, {
                    noticeType: tO.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    onClick: () => (0, z.j)({
                        applicationId: tB.id,
                        skuId: tb.id,
                        openPremiumPaymentModal: () => {
                            (0, Q.A)({
                                initialPlanId: null,
                                subscriptionTier: tg.pe.TIER_2,
                                analyticsLocations: s,
                                analyticsObject: tw
                            })
                        },
                        analyticsLocations: s,
                        analyticsLocationObject: tw,
                        context: __OVERLAY__ ? tO.BRT.OVERLAY : tO.BRT.APP
                    }).then(() => I.X(tb.id)),
                    children: tP.intl.string(tP.t.KEwPYx)
                })]
            });
        case tO.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let {
                skuId: t,
                applicationId: e
            } = r.metadata, n = tI.A.get(t), l = U.A.getApplication(e);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: tO.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                }), (0, i.jsx)(E.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tM.PC
                }), tP.intl.format(tP.t.LquIKC, {
                    applicationName: l.name,
                    skuName: n.name
                }), (0, i.jsx)(E.zr9, {
                    children: (0, i.jsx)(a.N_, {
                        onClick: () => tj(),
                        to: {
                            pathname: tO.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                            state: {
                                scrollRestoration: !1
                            }
                        },
                        children: tP.intl.string(tP.t.hvVgAZ)
                    })
                })]
            })
        }
        case tO.kqX.SURVEY: {
            let t = r.metadata;
            if (null == t) return null;
            let {
                key: e,
                prompt: n,
                cta: l,
                url: s,
                embedded: a,
                id: o
            } = t;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.CUSTOM,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tO.kqX.SURVEY,
                    onClick: () => {
                        (0, O.pX)(e, !0)
                    }
                }), n, (0, i.jsx)(E.Z_L, {
                    noticeType: tO.kqX.SURVEY,
                    onClick: () => {
                        a ? (0, te.K)(o) : window.open(s, "_blank"), (0, O.pX)(e, !1)
                    },
                    children: l
                })]
            })
        }
        case tO.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [tP.intl.string(tP.t["ugxmk/"]), (0, i.jsx)(E.eCN, {
                    href: th.A.getArticleURL(tO.MVz.CORRUPT_INSTALLATION),
                    target: "_blank",
                    noticeType: r.type,
                    children: tP.intl.string(tP.t["6ik4Xk"])
                })]
            });
        case tO.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: tO.kqX.VIDEO_UNSUPPORTED_BROWSER
                }), tP.intl.string(tP.t.wVjKGi), (0, i.jsx)(E.Z_L, {
                    noticeType: tO.kqX.VIDEO_UNSUPPORTED_BROWSER,
                    onClick: () => {
                        (0, E.mMO)(async () => {
                            let {
                                default: t
                            } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                            return e => (0, i.jsx)(t, {
                                source: "Video unsupported browser",
                                ...e
                            })
                        })
                    },
                    children: tP.intl.string(tP.t["1WjMbC"])
                })]
            });
        case tO.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let {
                error: tq
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: tO.kqX.DISPATCH_ERROR
                }), tq?.displayMessage, (0, i.jsx)(E.Z_L, {
                    noticeType: tO.kqX.DISPATCH_ERROR,
                    onClick: () => (0, E.mMO)(async () => {
                        let {
                            default: t
                        } = await n.e("88014").then(n.bind(n, 627261));
                        return e => (0, i.jsx)(t, {
                            ...e
                        })
                    }),
                    children: tP.intl.string(tP.t.hvVgAZ)
                })]
            });
        case tO.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let {
                progress: tX, total: t$, name: tH
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: tO.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS
                }), (0, i.jsxs)(D.A, {
                    justify: D.A.Justify.CENTER,
                    children: [null != tH ? tP.intl.formatToPlainString(tP.t["pHj+z4"], {
                        name: `${tH}`,
                        progress: tX,
                        total: t$
                    }) : tP.intl.formatToPlainString(tP.t["lHZn+A"], {
                        progress: tX,
                        total: t$
                    }), (0, i.jsx)(E.y$y, {
                        type: E.y$y.Type.PULSING_ELLIPSIS,
                        className: tM.gO
                    })]
                })]
            });
        case tO.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != tN.A.testModeEmbeddedApplicationId) return (0, i.jsx)(E.$Td, {
                color: E.Hv$.WARNING,
                children: (0, i.jsxs)(D.A, {
                    justify: D.A.Justify.CENTER,
                    align: D.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: tP.intl.format(tP.t["1qxVe4"], {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(E.PMB, {
                        onClick: C.cL,
                        noticeType: tO.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
            return (0, i.jsx)(E.$Td, {
                color: E.Hv$.WARNING,
                children: (0, i.jsxs)(D.A, {
                    justify: D.A.Justify.CENTER,
                    align: D.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: tP.intl.format(tP.t.Fv5HrE, {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(E.PMB, {
                        onClick: C.cL,
                        noticeType: tO.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
        case tO.kqX.VIEWING_ROLES:
            return (0, i.jsx)(F.A, {});
        case tO.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(E.$Td, {
                color: td === tg.PremiumTypes.TIER_1 ? E.Hv$.PREMIUM_TIER_1 : td === tg.PremiumTypes.TIER_0 ? E.Hv$.PREMIUM_TIER_0 : E.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tO.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), (0, i.jsx)(E.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tM.PC
                }), td === tg.PremiumTypes.TIER_1 ? tP.intl.formatToPlainString(tP.t.fXv4wm, {
                    daysLeft: r.metadata.daysLeft
                }) : td === tg.PremiumTypes.TIER_0 ? tP.intl.formatToPlainString(tP.t.ZOHZMr, {
                    daysLeft: r.metadata.daysLeft
                }) : tP.intl.formatToPlainString(tP.t.outyHh, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(E.Z_L, {
                    noticeType: tO.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, E.mMO)(async () => {
                            let {
                                default: t
                            } = await Promise.all([n.e("41353"), n.e("62175"), n.e("14704"), n.e("2550")]).then(n.bind(n, 174705));
                            return e => (0, i.jsx)(t, {
                                ...e,
                                daysLeft: r.metadata.daysLeft,
                                premiumType: td,
                                analyticsSource: "Nag Bar",
                                premiumSubscription: r.metadata.premiumSubscription
                            })
                        })
                    },
                    children: td === tg.PremiumTypes.TIER_1 ? tP.intl.string(tP.t.BkbUPM) : td === tg.PremiumTypes.TIER_0 ? tP.intl.string(tP.t.Px978X) : tP.intl.string(tP.t.LW5tCE)
                })]
            });
        case tO.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let {
                daysPastDue: tV, dismissUntil: tW
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        tj(tW)
                    }
                }), tP.intl.format(tP.t.zxU0Kp, {
                    daysPastDue: tV
                }), (0, i.jsx)(E.Z_L, {
                    noticeType: tO.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                    onClick: () => {
                        tj(tW), (0, to.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tP.intl.string(tP.t.q8rxeS)
                })]
            });
        case tO.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tO.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), tP.intl.string(tP.t.LlZaoX), (0, i.jsx)(E.Z_L, {
                    noticeType: tO.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, to.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tP.intl.string(tP.t["Zpd+Yq"])
                })]
            });
        case tO.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tO.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), tP.intl.string(tP.t["30YfCr"]), (0, i.jsx)(E.Z_L, {
                    noticeType: tO.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, to.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tP.intl.string(tP.t.U5pKWA)
                })]
            });
        case tO.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tO.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), td === tg.PremiumTypes.TIER_1 ? tP.intl.formatToPlainString(tP.t.b6QUvf, {
                    daysLeft: r.metadata.daysLeft
                }) : td === tg.PremiumTypes.TIER_0 ? tP.intl.formatToPlainString(tP.t["tURZ/M"], {
                    daysLeft: r.metadata.daysLeft
                }) : tP.intl.formatToPlainString(tP.t.AyC74I, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(E.Z_L, {
                    noticeType: tO.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, to.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: td === tg.PremiumTypes.TIER_1 ? tP.intl.string(tP.t.lboF5O) : td === tg.PremiumTypes.TIER_0 ? tP.intl.string(tP.t["4UPwOq"]) : tP.intl.string(tP.t["P/VvGb"])
                })]
            });
        case tO.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(V.y, {
                buttonText: r.buttonText ?? tP.intl.string(tP.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => tj(),
                showCloseButton: !0
            });
        case tO.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(q.A, {
                guildId: e,
                analyticsLocations: s
            });
        case tO.kqX.QUARANTINED:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [tP.intl.string(tP.t.DVFJYf), (0, i.jsx)(E.eCN, {
                    href: tS.q,
                    target: "_blank",
                    noticeType: r.type,
                    children: tP.intl.string(tP.t.kvHdFN)
                }), (0, i.jsx)(E.MzZ, {
                    href: th.A.getArticleURL(tO.MVz.QUARANTINE),
                    target: "_blank",
                    className: tM.yw,
                    children: tP.intl.string(tP.t.hvVgAZ)
                })]
            });
        case tO.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let {
                dismissUntil: tF, decisionId: tK
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tO.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                    onClick: () => {
                        null != e && (0, w.wu)(e), tj(tF)
                    }
                }), tP.intl.string(tP.t.B8ruyY), (0, i.jsx)(E.zr9, {
                    onClick: () => {
                        null != e && (0, w.W5)(e, tK, () => {
                            tj(tF), (0, w.wu)(e)
                        })
                    },
                    children: tP.intl.string(tP.t.oX14El)
                }), null != e ? (0, i.jsx)(E.zr9, {
                    onClick: () => W.A.open(e, tO.BEX.GUILD_AUTOMOD, void 0, tO.nd0.AUTOMOD_MENTION_SPAM),
                    children: tP.intl.string(tP.t["1R7QIx"])
                }) : null]
            });
        case tO.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tO.kqX.QUESTS_PROGRESS_INTERRUPTION,
                    onClick: () => {
                        r.metadata?.streamKey != null && (0, tn.lk)(r.metadata.streamKey)
                    }
                }), tP.intl.string(tP.t.rOx44m)]
            });
        case tO.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.BRAND,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => {
                        tj(r.metadata?.dismissUntil)
                    },
                    noticeType: tO.kqX.BLOCK_USER_FEEDBACK_NAGBAR
                }), tP.intl.string(tP.t["0klLS7"]), (0, i.jsx)(E.Z_L, {
                    onClick: () => {
                        (0, tl.$)(), tj(r.metadata?.dismissUntil)
                    },
                    noticeType: tO.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    children: tP.intl.string(tP.t.e4y2VM)
                })]
            });
        case tO.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(ti.A, {});
        case tO.kqX.PREMIUM_MARKETING_NAGBAR:
            return (0, i.jsx)(tt.A, {});
        case tO.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(ts.A, {});
        default:
            return null
    }
}) : null;

function tk() {
    let {
        analyticsLocations: t
    } = (0, M.Ay)(P.A.NOTICE);
    return (0, i.jsx)(M.f5, {
        value: t,
        children: (0, i.jsx)(tL, {})
    })
}