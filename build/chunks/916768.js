/** chunk id: 916768 params = (module,exports,require) **/
n.d(e, {
    A: () => tL,
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
    O = n(785796),
    h = n(55619),
    C = n(246605),
    m = n(271866),
    g = n(736653),
    S = n(77729),
    y = n(573648),
    M = n(793574),
    P = n(688810),
    x = n(587895),
    D = n(315982),
    U = n(235986),
    f = n(420216),
    j = n(187848),
    k = n(984870),
    L = n(626262),
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
    Z = n(532794),
    Q = n(234419),
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
    tO = n(975571),
    th = n(723702),
    tC = n(652215),
    tm = n(502075),
    tg = n(788868),
    tS = n(831502),
    ty = n(731854),
    tM = n(985018),
    tP = n(381703);
let tx = t => {
        let {
            error: e,
            allowClick: n = !1
        } = t, l = (0, G.B1)(e)?.errorCode, r = tM.intl.formatToPlainString(tM.t.ejOT95, {
            errorCode: l
        }), s = (0, i.jsx)(E.Text, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: tP.fU,
            selectable: !0,
            children: r
        });
        return n ? (0, i.jsx)(E.DUT, {
            tag: "span",
            className: tP.wz,
            onClick: () => open(tO.A.getArticleURL(tC.MVz.AV_ERROR_CODES)),
            children: s
        }) : s
    },
    tD = t => {
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
            }), tM.intl.string(tM.t.o3zuYz), (0, i.jsx)(tx, {
                error: G.iy.NO_INPUT_DEVICES
            }), (0, i.jsx)(E.eCN, {
                href: tO.A.getArticleURL(tC.MVz.NO_INPUT_DETECTED),
                noticeType: e,
                children: tM.intl.string(tM.t.RYKKox)
            })]
        })
    };

function tU(t) {
    return (0, th.isWindows)() && c().satisfies(S.A?.os.release, tm.PH) ? `ms-settings:sound-properties?endpointId=${t}` : "ms-settings:sound"
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
    return !0 === a ? (e = tM.intl.string(tM.t.ppW3ri), n = (0, i.jsx)(E.eCN, {
        href: tU(s),
        noticeType: l,
        children: tM.intl.string(tM.t.QghSIq)
    })) : 0 === o ? (e = tM.intl.string(tM.t.j4gGA4), n = (0, i.jsx)(E.eCN, {
        href: tU(s),
        noticeType: l,
        children: tM.intl.string(tM.t.QghSIq)
    })) : tE.Ay.supports(ty.O5.LOOPBACK) ? (e = tM.intl.string(tM.t.dNAJ18), c = !0, n = (0, i.jsx)(E.zr9, {
        onClick: () => {
            (0, to.openUserSettings)(ta.X.VOICE_AND_VIDEO_PANEL)
        },
        children: tM.intl.string(tM.t.I6YlB4)
    })) : (e = tM.intl.string(tM.t.nCO9bI), n = (0, i.jsx)(E.eCN, {
        href: tO.A.getArticleURL(tC.MVz.NO_INPUT_DETECTED),
        noticeType: l,
        children: tM.intl.string(tM.t.RYKKox)
    })), (0, i.jsxs)(E.$Td, {
        color: E.Hv$.DANGER,
        children: [(0, i.jsx)(E.PMB, {
            noticeType: l,
            onClick: () => {
                tj(), (0, td.h)()
            }
        }), e, (0, i.jsx)(tx, {
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
let tk = 21552 == n.j ? l.memo(function() {
    let t = (0, d.bG)([tA.default], () => tA.default.getCurrentUser()),
        e = (0, d.bG)([tT.A], () => tT.A.getGuildId()),
        r = (0, d.bG)([tR.Ay], () => tR.Ay.getNotice()),
        {
            analyticsLocations: s
        } = (0, P.Ay)(),
        o = (0, g.Ay)(),
        c = (0, $.H)(e),
        N = (0, Q.V)();
    if (l.useEffect(() => {
            if (r?.type != null) {
                let t;
                if (null == N && (r.type === tC.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === tC.kqX.PREMIUM_TIER_0_TRIAL_ENDING)) return;
                let n = {};
                null != e && (n.guild_id = e), N?.trial_id != null && (n.trial_id = N.trial_id), t = {
                    notice_type: r.type,
                    ...n
                }, tp.default.track(tC.HAw.APP_NOTICE_VIEWED, t)
            }
        }, [r?.type, e, N]), l.useEffect(() => {
            if (null != r && r.type === tC.kqX.SURVEY && null != r.metadata) {
                let {
                    metadata: t
                } = r, e = b.A.getUserExperimentDescriptor(t.id);
                null != e && (0, v.LQ)(t.id, e), (async () => {
                    r.metadata?.id != null && await (0, C.oX)(r.metadata?.id)
                })()
            }
        }, [r]), null == r) return null;
    let S = null != r.type ? tR.Re[r.type] : null,
        M = null != r.type ? tR.rV[r.type] : null,
        G = null != r.type ? tR.f7[r.type] : null,
        J = tR.pe[r.type];
    if (null != S) return (0, i.jsx)(L.$, {
        dismissibleContent: S,
        noticeType: r.type
    });
    if (null != M) return (0, i.jsx)(j.d, {
        dismissibleContent: M
    });
    if (null != G) return (0, i.jsx)(k.T, {
        dismissibleContent: G
    });
    if (null != J) return (0, i.jsx)(f.r, {
        dismissibleContent: J,
        noticeType: r.type
    });
    let td = r.metadata?.premiumType;
    switch (r.type) {
        case tC.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(tc.A, {});
        case tC.kqX.LURKING_GUILD:
            return (0, i.jsx)(K.A, {});
        case tC.kqX.PENDING_MEMBER:
            return (0, i.jsx)(H.A, {});
        case tC.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(tr.A, {});
        case tC.kqX.GUILD_RAID_NOTIFICATION:
            let {
                dismissUntil: tE
            } = r.metadata;
            return (0, i.jsx)(B.A, {
                onDismiss: () => tj(tE)
            });
        case tC.kqX.WIN32_DEPRECATED_MESSAGE:
            let {
                dismissUntil: tm
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(tm),
                    noticeType: r.type
                }), tM.intl.format(tM.t["08KQ1P"], {
                    helpCenterLink: tO.A.getArticleURL(tC.MVz.WIN32_DEPRECATE)
                })]
            });
        case tC.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let {
                dismissUntil: ty
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(ty),
                    noticeType: r.type
                }), tM.intl.format(tM.t["8Je+dX"], {
                    helpCenterLink: tO.A.getArticleURL(tC.MVz.WIN7_8_DEPRECATE)
                })]
            });
        case tC.kqX.WIN_COMPAT_MODE_MESSAGE:
            let {
                dismissUntil: tx
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(tx),
                    noticeType: r.type
                }), tM.intl.string(tM.t["9DJgOg"])]
            });
        case tC.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let {
                dismissUntil: tU
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(tU),
                    noticeType: r.type
                }), tM.intl.format(tM.t.q8VPLo, {
                    helpCenterLink: tO.A.getArticleURL(tC.MVz.MACOS_19_DEPRECATE)
                })]
            });
        case tC.kqX.E2EE_UPDATE_REQUIRED:
            let {
                dismissUntil: tk
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(tk),
                    noticeType: r.type
                }), tM.intl.format(th.isPlatformEmbedded ? tM.t.J232TI : tM.t.vceuiL, {
                    helpCenterLink: tO.A.getArticleURL(tC.MVz.END_TO_END_ENCRYPTION)
                })]
            });
        case tC.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: r.type
                }), tM.intl.string(tM.t.iW0fcQ), (0, i.jsx)(E.eCN, {
                    href: tO.A.getArticleURL(tC.MVz.WINDOWS_MEDIA_PACK),
                    target: "_blank",
                    noticeType: r.type,
                    children: tM.intl.string(tM.t.LQG5j6)
                })]
            });
        case tC.kqX.GENERIC:
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
        case tC.kqX.LAUNCH_GAME_FAILURE:
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
        case tC.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => {
                        R.A.clearRemoteDisconnectVoiceChannelId(), tj()
                    },
                    noticeType: r.type
                }), tM.intl.string(tM.t.bOQ3jV), (0, i.jsx)(E.Z_L, {
                    onClick: () => {
                        let t = t_.A.getRemoteDisconnectVoiceChannelId();
                        null != t && null != tu.A.getChannel(t) && p.default.selectVoiceChannel(t)
                    },
                    noticeType: r.type,
                    children: tM.intl.string(tM.t.vD60Pv)
                })]
            });
        case tC.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => {
                        R.A.clearLastSessionVoiceChannelId(), tj()
                    },
                    noticeType: r.type
                }), tM.intl.string(tM.t.jY2lUA), (0, i.jsx)(E.Z_L, {
                    onClick: () => {
                        let t = t_.A.getLastSessionVoiceChannelId();
                        null != t && null != tu.A.getChannel(t) && p.default.selectVoiceChannel(t)
                    },
                    noticeType: r.type,
                    children: tM.intl.string(tM.t.vD60Pv)
                })]
            });
        case tC.kqX.SPOTIFY_AUTO_PAUSED:
            let tL = y.A.get(tC.fg2.SPOTIFY);
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: r.type
                }), (0, i.jsx)("img", {
                    alt: "",
                    className: tP.tV,
                    src: (0, u.qB)(o) ? tL.icon.darkSVG : tL.icon.whiteSVG
                }), tM.intl.string(tM.t.D8Cp76), (0, i.jsx)(E.Z_L, {
                    onClick: () => (0, to.openUserSettings)(ta.X.VOICE_AND_VIDEO_PANEL),
                    noticeType: r.type,
                    children: tM.intl.string(tM.t.NiTd0e)
                }), (0, i.jsx)(E.MzZ, {
                    className: tP.uD,
                    href: tO.A.getArticleURL(tC.MVz.SPOTIFY_AUTO_PAUSED),
                    target: "_blank",
                    children: tM.intl.string(tM.t.CiqAIU)
                })]
            });
        case tC.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [tM.intl.string(tM.t["f+Zaol"]), (0, i.jsx)(E.Z_L, {
                    noticeType: r.type,
                    onClick: () => c && null != e ? (0, X.Ze)(e) : D.R(),
                    children: tM.intl.string(tM.t.fiNVin)
                })]
            });
        case tC.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [tM.intl.string(tM.t["3sWbf3"]), (0, i.jsx)(E.Z_L, {
                    noticeType: r.type,
                    onClick: () => {
                        A.A.verifyResend(), _.A.show({
                            title: tM.intl.string(tM.t.LykQYk),
                            body: tM.intl.format(tM.t.azKEPy, {
                                email: t?.email
                            }),
                            cancelText: tM.intl.string(tM.t.Vm8akB),
                            onCancel: D.R
                        })
                    },
                    children: tM.intl.string(tM.t.WnX4J2)
                })]
            });
        case tC.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => O.A.ackScheduledMaintenance(),
                    noticeType: r.type
                }), tM.intl.format(tM.t["yb96S+"], r.metadata), (0, i.jsx)(E.eCN, {
                    href: `${tC.qF7.STATUS}/incidents/${r.metadata.id}`,
                    noticeType: r.type,
                    children: tM.intl.string(tM.t.hvVgAZ)
                })]
            });
        case tC.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(tf, {
                noticeType: r.type
            });
        case tC.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(tD, {
                noticeType: r.type
            });
        case tC.kqX.HARDWARE_MUTE:
            if (null != r.metadata) {
                let {
                    vendor: t,
                    model: e
                } = r.metadata;
                return (0, i.jsxs)(E.$Td, {
                    color: E.Hv$.DANGER,
                    children: [tM.intl.format(tM.t.qoDex7, {
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
                        children: tM.intl.string(tM.t["Yl/Riu"])
                    })]
                })
            }
            if (Y.A.getConfig({
                    location: "Notice.AudioIssueNoticeHardwareMute"
                }).enableHardwareSilenceWarning) return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.INFO,
                children: [tM.intl.format(tM.t.QMw8Fd, {}), (0, i.jsx)(E.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        T.A.setEnableHardwareMuteNotice(!1), tj()
                    }
                })]
            });
            return null;
        case tC.kqX.STREAMER_MODE:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.STREAMER_MODE,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: tC.kqX.STREAMER_MODE
                }), tM.intl.string(tM.t.iEgBXp), (0, i.jsx)(E.Z_L, {
                    onClick: () => h.A.setEnabled(!1),
                    noticeType: tC.kqX.STREAMER_MODE,
                    children: tM.intl.string(tM.t.R9GHya)
                })]
            });
        case tC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let {
                skuId: tG, applicationId: tv
            } = r.metadata, tb = tI.A.get(tG), tB = x.A.getApplication(tv);
            if (null == tb || null == tB) return null;
            let tw = {
                page: tC.liQ.IN_APP
            };
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => I.X(tb.id),
                    noticeType: tC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                }), (0, i.jsx)(E.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tP.PC
                }), tM.intl.format(tM.t["g3MU/+"], {
                    applicationName: tB.name,
                    skuName: tb.name
                }), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    onClick: () => (0, z.j)({
                        applicationId: tB.id,
                        skuId: tb.id,
                        openPremiumPaymentModal: () => {
                            (0, Z.A)({
                                initialPlanId: null,
                                subscriptionTier: tg.pe.TIER_2,
                                analyticsLocations: s,
                                analyticsObject: tw
                            })
                        },
                        analyticsLocations: s,
                        analyticsLocationObject: tw,
                        context: __OVERLAY__ ? tC.BRT.OVERLAY : tC.BRT.APP
                    }).then(() => I.X(tb.id)),
                    children: tM.intl.string(tM.t.KEwPYx)
                })]
            });
        case tC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let {
                skuId: t,
                applicationId: e
            } = r.metadata, n = tI.A.get(t), l = x.A.getApplication(e);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: tC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                }), (0, i.jsx)(E.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tP.PC
                }), tM.intl.format(tM.t.LquIKC, {
                    applicationName: l.name,
                    skuName: n.name
                }), (0, i.jsx)(E.zr9, {
                    children: (0, i.jsx)(a.N_, {
                        onClick: () => tj(),
                        to: {
                            pathname: tC.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                            state: {
                                scrollRestoration: !1
                            }
                        },
                        children: tM.intl.string(tM.t.hvVgAZ)
                    })
                })]
            })
        }
        case tC.kqX.SURVEY: {
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
                    noticeType: tC.kqX.SURVEY,
                    onClick: () => {
                        (0, C.pX)(e, !0)
                    }
                }), n, (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.SURVEY,
                    onClick: () => {
                        a ? (0, te.K)(o) : window.open(s, "_blank"), (0, C.pX)(e, !1)
                    },
                    children: l
                })]
            })
        }
        case tC.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [tM.intl.string(tM.t["ugxmk/"]), (0, i.jsx)(E.eCN, {
                    href: tO.A.getArticleURL(tC.MVz.CORRUPT_INSTALLATION),
                    target: "_blank",
                    noticeType: r.type,
                    children: tM.intl.string(tM.t["6ik4Xk"])
                })]
            });
        case tC.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: tC.kqX.VIDEO_UNSUPPORTED_BROWSER
                }), tM.intl.string(tM.t.wVjKGi), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.VIDEO_UNSUPPORTED_BROWSER,
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
                    children: tM.intl.string(tM.t["1WjMbC"])
                })]
            });
        case tC.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let {
                error: tq
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: tC.kqX.DISPATCH_ERROR
                }), tq?.displayMessage, (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.DISPATCH_ERROR,
                    onClick: () => (0, E.mMO)(async () => {
                        let {
                            default: t
                        } = await n.e("88014").then(n.bind(n, 627261));
                        return e => (0, i.jsx)(t, {
                            ...e
                        })
                    }),
                    children: tM.intl.string(tM.t.hvVgAZ)
                })]
            });
        case tC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let {
                progress: tX, total: t$, name: tH
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tj(),
                    noticeType: tC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS
                }), (0, i.jsxs)(U.A, {
                    justify: U.A.Justify.CENTER,
                    children: [null != tH ? tM.intl.formatToPlainString(tM.t["pHj+z4"], {
                        name: `${tH}`,
                        progress: tX,
                        total: t$
                    }) : tM.intl.formatToPlainString(tM.t["lHZn+A"], {
                        progress: tX,
                        total: t$
                    }), (0, i.jsx)(E.y$y, {
                        type: E.y$y.Type.PULSING_ELLIPSIS,
                        className: tP.gO
                    })]
                })]
            });
        case tC.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != tN.A.testModeEmbeddedApplicationId) return (0, i.jsx)(E.$Td, {
                color: E.Hv$.WARNING,
                children: (0, i.jsxs)(U.A, {
                    justify: U.A.Justify.CENTER,
                    align: U.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: tM.intl.format(tM.t["1qxVe4"], {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(E.PMB, {
                        onClick: m.cL,
                        noticeType: tC.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
            return (0, i.jsx)(E.$Td, {
                color: E.Hv$.WARNING,
                children: (0, i.jsxs)(U.A, {
                    justify: U.A.Justify.CENTER,
                    align: U.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: tM.intl.format(tM.t.Fv5HrE, {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(E.PMB, {
                        onClick: m.cL,
                        noticeType: tC.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
        case tC.kqX.VIEWING_ROLES:
            return (0, i.jsx)(F.A, {});
        case tC.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(E.$Td, {
                color: td === tg.PremiumTypes.TIER_1 ? E.Hv$.PREMIUM_TIER_1 : td === tg.PremiumTypes.TIER_0 ? E.Hv$.PREMIUM_TIER_0 : E.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tC.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), (0, i.jsx)(E.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tP.PC
                }), td === tg.PremiumTypes.TIER_1 ? tM.intl.formatToPlainString(tM.t.fXv4wm, {
                    daysLeft: r.metadata.daysLeft
                }) : td === tg.PremiumTypes.TIER_0 ? tM.intl.formatToPlainString(tM.t.ZOHZMr, {
                    daysLeft: r.metadata.daysLeft
                }) : tM.intl.formatToPlainString(tM.t.outyHh, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.PREMIUM_UNCANCEL,
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
                    children: td === tg.PremiumTypes.TIER_1 ? tM.intl.string(tM.t.BkbUPM) : td === tg.PremiumTypes.TIER_0 ? tM.intl.string(tM.t.Px978X) : tM.intl.string(tM.t.LW5tCE)
                })]
            });
        case tC.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
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
                }), tM.intl.format(tM.t.zxU0Kp, {
                    daysPastDue: tV
                }), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                    onClick: () => {
                        tj(tW), (0, to.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tM.intl.string(tM.t.q8rxeS)
                })]
            });
        case tC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), tM.intl.string(tM.t.LlZaoX), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, to.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tM.intl.string(tM.t["Zpd+Yq"])
                })]
            });
        case tC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), tM.intl.string(tM.t["30YfCr"]), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, to.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tM.intl.string(tM.t.U5pKWA)
                })]
            });
        case tC.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tC.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), td === tg.PremiumTypes.TIER_1 ? tM.intl.formatToPlainString(tM.t.b6QUvf, {
                    daysLeft: r.metadata.daysLeft
                }) : td === tg.PremiumTypes.TIER_0 ? tM.intl.formatToPlainString(tM.t["tURZ/M"], {
                    daysLeft: r.metadata.daysLeft
                }) : tM.intl.formatToPlainString(tM.t.AyC74I, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        tj(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, to.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: td === tg.PremiumTypes.TIER_1 ? tM.intl.string(tM.t.lboF5O) : td === tg.PremiumTypes.TIER_0 ? tM.intl.string(tM.t["4UPwOq"]) : tM.intl.string(tM.t["P/VvGb"])
                })]
            });
        case tC.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(V.y, {
                buttonText: r.buttonText ?? tM.intl.string(tM.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => tj(),
                showCloseButton: !0
            });
        case tC.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(q.A, {
                guildId: e,
                analyticsLocations: s
            });
        case tC.kqX.QUARANTINED:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [tM.intl.string(tM.t.DVFJYf), (0, i.jsx)(E.eCN, {
                    href: tS.q,
                    target: "_blank",
                    noticeType: r.type,
                    children: tM.intl.string(tM.t.kvHdFN)
                }), (0, i.jsx)(E.MzZ, {
                    href: tO.A.getArticleURL(tC.MVz.QUARANTINE),
                    target: "_blank",
                    className: tP.yw,
                    children: tM.intl.string(tM.t.hvVgAZ)
                })]
            });
        case tC.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let {
                dismissUntil: tF, decisionId: tK
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tC.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                    onClick: () => {
                        null != e && (0, w.wu)(e), tj(tF)
                    }
                }), tM.intl.string(tM.t.B8ruyY), (0, i.jsx)(E.zr9, {
                    onClick: () => {
                        null != e && (0, w.W5)(e, tK, () => {
                            tj(tF), (0, w.wu)(e)
                        })
                    },
                    children: tM.intl.string(tM.t.oX14El)
                }), null != e ? (0, i.jsx)(E.zr9, {
                    onClick: () => W.A.open(e, tC.BEX.GUILD_AUTOMOD, void 0, tC.nd0.AUTOMOD_MENTION_SPAM),
                    children: tM.intl.string(tM.t["1R7QIx"])
                }) : null]
            });
        case tC.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tC.kqX.QUESTS_PROGRESS_INTERRUPTION,
                    onClick: () => {
                        r.metadata?.streamKey != null && (0, tn.lk)(r.metadata.streamKey)
                    }
                }), tM.intl.string(tM.t.rOx44m)]
            });
        case tC.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.BRAND,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => {
                        tj(r.metadata?.dismissUntil)
                    },
                    noticeType: tC.kqX.BLOCK_USER_FEEDBACK_NAGBAR
                }), tM.intl.string(tM.t["0klLS7"]), (0, i.jsx)(E.Z_L, {
                    onClick: () => {
                        (0, tl.$)(), tj(r.metadata?.dismissUntil)
                    },
                    noticeType: tC.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    children: tM.intl.string(tM.t.e4y2VM)
                })]
            });
        case tC.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(ti.A, {});
        case tC.kqX.PREMIUM_MARKETING_NAGBAR:
            return (0, i.jsx)(tt.A, {});
        case tC.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(ts.A, {});
        default:
            return null
    }
}) : null;

function tL() {
    let {
        analyticsLocations: t
    } = (0, P.Ay)(M.A.NOTICE);
    return (0, i.jsx)(P.f5, {
        value: t,
        children: (0, i.jsx)(tk, {})
    })
}