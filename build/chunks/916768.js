/** chunk id: 916768 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => tD,
    w: () => tM
});
var i = n(627968),
    r = n(64700),
    s = n(989349),
    l = n.n(s);
if (21552 == n.j) var a = n(936504);
var o = n(299855),
    c = n.n(o),
    u = n(311907),
    d = n(397927),
    E = n(157559),
    _ = n(827343),
    T = n(830215),
    A = n(503703),
    I = n(912851),
    N = n(169604),
    p = n(956793),
    R = n(785796),
    g = n(55619),
    h = n(246605),
    m = n(271866),
    O = n(77729),
    C = n(573648),
    S = n(793574),
    y = n(688810),
    x = n(587895),
    P = n(315982),
    U = n(235986),
    M = n(420216),
    f = n(984870),
    D = n(626262),
    j = n(813803),
    L = n(487329),
    k = n(102609),
    G = n(49463),
    v = n(322223),
    b = n(137207),
    B = n(619029),
    w = n(202384),
    q = n(51758),
    $ = n(571139),
    X = n(527012),
    V = n(997509),
    H = n(475723),
    W = n(598733),
    F = n(801644),
    K = n(74848),
    J = n(39771),
    z = n(532794),
    Y = n(234419),
    Z = n(814249),
    Q = n(829219),
    tt = n(601730),
    te = n(722255),
    tn = n(613491),
    ti = n(464473),
    tr = n(780964),
    ts = n(840065),
    tl = n(459321),
    ta = n(594609),
    to = n(734057),
    tc = n(430452),
    tu = n(383501),
    td = n(967198),
    tE = n(287809),
    t_ = n(67480),
    tT = n(147964),
    tA = n(519057),
    tI = n(954571),
    tN = n(975571),
    tp = n(723702),
    tR = n(652215),
    tg = n(502075),
    th = n(788868),
    tm = n(831502),
    tO = n(731854),
    tC = n(985018),
    tS = n(237082);
let ty = t => {
        let {
            error: e,
            allowClick: n = !1
        } = t, r = (0, L.B1)(e)?.errorCode, s = tC.intl.formatToPlainString(tC.t.ejOT95, {
            errorCode: r
        }), l = (0, i.jsx)(d.Text, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: tS.fU,
            selectable: !0,
            children: s
        });
        return n ? (0, i.jsx)(d.DUT, {
            tag: "span",
            className: tS.wz,
            onClick: () => open(tN.A.getArticleURL(tR.MVz.AV_ERROR_CODES)),
            children: l
        }) : l
    },
    tx = t => {
        let {
            noticeType: e
        } = t;
        return (0, i.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            children: [(0, i.jsx)(d.PMB, {
                noticeType: e,
                onClick: () => {
                    tM()
                }
            }), tC.intl.string(tC.t.o3zuYz), (0, i.jsx)(ty, {
                error: L.iy.NO_INPUT_DEVICES
            }), (0, i.jsx)(d.eCN, {
                href: tN.A.getArticleURL(tR.MVz.NO_INPUT_DETECTED),
                noticeType: e,
                children: tC.intl.string(tC.t.RYKKox)
            })]
        })
    };

function tP(t) {
    return (0, tp.isWindows)() && c().satisfies(O.A?.os.release, tg.PH) ? `ms-settings:sound-properties?endpointId=${t}` : "ms-settings:sound"
}

function tU(t) {
    let e, n, {
            noticeType: r
        } = t,
        s = (0, K.x5)(tO.oh.AUDIO_INPUT),
        l = s?.guid ?? "",
        {
            inputDeviceOSMuted: a,
            inputDeviceOSVolume: o
        } = (0, u.cf)([tc.Ay], () => ({
            inputDeviceOSMuted: tc.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: tc.Ay.getInputDeviceOSVolume()
        })),
        c = !1;
    return !0 === a ? (e = tC.intl.string(tC.t.ppW3ri), n = (0, i.jsx)(d.eCN, {
        href: tP(l),
        noticeType: r,
        children: tC.intl.string(tC.t.QghSIq)
    })) : 0 === o ? (e = tC.intl.string(tC.t.j4gGA4), n = (0, i.jsx)(d.eCN, {
        href: tP(l),
        noticeType: r,
        children: tC.intl.string(tC.t.QghSIq)
    })) : tc.Ay.supports(tO.O5.LOOPBACK) ? (e = tC.intl.string(tC.t.dNAJ18), c = !0, n = (0, i.jsx)(d.zr9, {
        onClick: () => {
            (0, ts.openUserSettings)(tr.X.VOICE_AND_VIDEO_PANEL)
        },
        children: tC.intl.string(tC.t.I6YlB4)
    })) : (e = tC.intl.string(tC.t.nCO9bI), n = (0, i.jsx)(d.eCN, {
        href: tN.A.getArticleURL(tR.MVz.NO_INPUT_DETECTED),
        noticeType: r,
        children: tC.intl.string(tC.t.RYKKox)
    })), (0, i.jsxs)(d.$Td, {
        color: d.Hv$.DANGER,
        children: [(0, i.jsx)(d.PMB, {
            noticeType: r,
            onClick: () => {
                tM(), (0, ta.h)()
            }
        }), e, (0, i.jsx)(ty, {
            allowClick: c,
            error: L.iy.NO_AUDIO_INPUT_DETECTED
        }), n]
    })
}

function tM(t) {
    I.A.dismiss(null != t ? {
        untilAtLeast: l()(t)
    } : void 0)
}
let tf = 21552 == n.j ? r.memo(function() {
    let t = (0, u.bG)([tE.default], () => tE.default.getCurrentUser()),
        e = (0, u.bG)([td.A], () => td.A.getGuildId()),
        s = (0, u.bG)([tA.Ay], () => tA.Ay.getNotice()),
        {
            analyticsLocations: l
        } = (0, y.Ay)(),
        o = (0, q.H)(e),
        c = (0, Y.V)();
    if (r.useEffect(() => {
            if (s?.type != null) {
                let t;
                if (null == c && (s.type === tR.kqX.PREMIUM_TIER_2_TRIAL_ENDING || s.type === tR.kqX.PREMIUM_TIER_0_TRIAL_ENDING)) return;
                let n = {};
                null != e && (n.guild_id = e), c?.trial_id != null && (n.trial_id = c.trial_id), t = {
                    notice_type: s.type,
                    ...n
                }, tI.default.track(tR.HAw.APP_NOTICE_VIEWED, t)
            }
        }, [s?.type, e, c]), r.useEffect(() => {
            if (null != s && s.type === tR.kqX.SURVEY && null != s.metadata) {
                let {
                    metadata: t
                } = s, e = G.A.getUserExperimentDescriptor(t.id);
                null != e && (0, k.LQ)(t.id, e), (async () => {
                    s.metadata?.id != null && await (0, h.oX)(s.metadata?.id)
                })()
            }
        }, [s]), null == s) return null;
    let I = null != s.type ? tA.Re[s.type] : null,
        O = null != s.type ? tA.k3[s.type] : null,
        S = null != s.type ? tA.f7[s.type] : null,
        L = tA.pe[s.type];
    if (null != I) return (0, i.jsx)(D.$, {
        dismissibleContent: I,
        noticeType: s.type
    });
    if (null != O) return (0, i.jsx)(j._, {
        dismissibleContent: O,
        noticeType: s.type
    });
    if (null != S) return (0, i.jsx)(f.T, {
        dismissibleContent: S
    });
    if (null != L) return (0, i.jsx)(M.r, {
        dismissibleContent: L,
        noticeType: s.type
    });
    let K = s.metadata?.premiumType;
    switch (s.type) {
        case tR.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(tl.A, {});
        case tR.kqX.LURKING_GUILD:
            return (0, i.jsx)(W.A, {});
        case tR.kqX.PENDING_MEMBER:
            return (0, i.jsx)($.A, {});
        case tR.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(tn.A, {});
        case tR.kqX.GUILD_RAID_NOTIFICATION:
            let {
                dismissUntil: ta
            } = s.metadata;
            return (0, i.jsx)(v.A, {
                onDismiss: () => tM(ta)
            });
        case tR.kqX.WIN32_DEPRECATED_MESSAGE:
            let {
                dismissUntil: tc
            } = s.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(tc),
                    noticeType: s.type
                }), tC.intl.format(tC.t["08KQ1P"], {
                    helpCenterLink: tN.A.getArticleURL(tR.MVz.WIN32_DEPRECATE)
                })]
            });
        case tR.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let {
                dismissUntil: tg
            } = s.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(tg),
                    noticeType: s.type
                }), tC.intl.format(tC.t["8Je+dX"], {
                    helpCenterLink: tN.A.getArticleURL(tR.MVz.WIN7_8_DEPRECATE)
                })]
            });
        case tR.kqX.WIN_COMPAT_MODE_MESSAGE:
            let {
                dismissUntil: tO
            } = s.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(tO),
                    noticeType: s.type
                }), tC.intl.string(tC.t["9DJgOg"])]
            });
        case tR.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let {
                dismissUntil: ty
            } = s.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(ty),
                    noticeType: s.type
                }), tC.intl.format(tC.t.q8VPLo, {
                    helpCenterLink: tN.A.getArticleURL(tR.MVz.MACOS_19_DEPRECATE)
                })]
            });
        case tR.kqX.E2EE_UPDATE_REQUIRED:
            let {
                dismissUntil: tP
            } = s.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(tP),
                    noticeType: s.type
                }), tC.intl.format(tp.isPlatformEmbedded ? tC.t.J232TI : tC.t.vceuiL, {
                    helpCenterLink: tN.A.getArticleURL(tR.MVz.END_TO_END_ENCRYPTION)
                })]
            });
        case tR.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(),
                    noticeType: s.type
                }), tC.intl.string(tC.t.iW0fcQ), (0, i.jsx)(d.eCN, {
                    href: tN.A.getArticleURL(tR.MVz.WINDOWS_MEDIA_PACK),
                    target: "_blank",
                    noticeType: s.type,
                    children: tC.intl.string(tC.t.LQG5j6)
                })]
            });
        case tR.kqX.GENERIC:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(),
                    noticeType: s.type
                }), s.message, null != s.buttonText ? (0, i.jsx)(d.Z_L, {
                    onClick: s.callback,
                    noticeType: s.type,
                    children: s.buttonText
                }) : null]
            });
        case tR.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(),
                    noticeType: s.type
                }), s.message, null != s.buttonText ? (0, i.jsx)(d.Z_L, {
                    onClick: s.callback,
                    noticeType: s.type,
                    children: s.buttonText
                }) : null]
            });
        case tR.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => {
                        N.A.clearRemoteDisconnectVoiceChannelId(), tM()
                    },
                    noticeType: s.type
                }), tC.intl.string(tC.t.bOQ3jV), (0, i.jsx)(d.Z_L, {
                    onClick: () => {
                        let t = tu.A.getRemoteDisconnectVoiceChannelId();
                        null != t && null != to.A.getChannel(t) && p.default.selectVoiceChannel(t)
                    },
                    noticeType: s.type,
                    children: tC.intl.string(tC.t.vD60Pv)
                })]
            });
        case tR.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => {
                        N.A.clearLastSessionVoiceChannelId(), tM()
                    },
                    noticeType: s.type
                }), tC.intl.string(tC.t.jY2lUA), (0, i.jsx)(d.Z_L, {
                    onClick: () => {
                        let t = tu.A.getLastSessionVoiceChannelId();
                        null != t && null != to.A.getChannel(t) && p.default.selectVoiceChannel(t)
                    },
                    noticeType: s.type,
                    children: tC.intl.string(tC.t.vD60Pv)
                })]
            });
        case tR.kqX.SPOTIFY_AUTO_PAUSED:
            let tf = C.A.get(tR.fg2.SPOTIFY);
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(),
                    noticeType: s.type
                }), (0, i.jsx)("img", {
                    alt: "",
                    className: tS.tV,
                    src: tf.icon.whiteSVG
                }), tC.intl.string(tC.t.D8Cp76), (0, i.jsx)(d.Z_L, {
                    onClick: () => (0, ts.openUserSettings)(tr.X.VOICE_AND_VIDEO_PANEL),
                    noticeType: s.type,
                    children: tC.intl.string(tC.t.NiTd0e)
                }), (0, i.jsx)(d.MzZ, {
                    className: tS.N0,
                    href: tN.A.getArticleURL(tR.MVz.SPOTIFY_AUTO_PAUSED),
                    target: "_blank",
                    children: tC.intl.string(tC.t.CiqAIU)
                })]
            });
        case tR.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [tC.intl.string(tC.t["f+Zaol"]), (0, i.jsx)(d.Z_L, {
                    noticeType: s.type,
                    onClick: () => o && null != e ? (0, w.Ze)(e) : P.R(),
                    children: tC.intl.string(tC.t.fiNVin)
                })]
            });
        case tR.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [tC.intl.string(tC.t["3sWbf3"]), (0, i.jsx)(d.Z_L, {
                    noticeType: s.type,
                    onClick: () => {
                        T.A.verifyResend(), E.A.show({
                            title: tC.intl.string(tC.t.LykQYk),
                            body: tC.intl.format(tC.t.azKEPy, {
                                email: t?.email
                            }),
                            cancelText: tC.intl.string(tC.t.Vm8akB),
                            onCancel: P.R
                        })
                    },
                    children: tC.intl.string(tC.t.WnX4J2)
                })]
            });
        case tR.kqX.SCHEDULED_MAINTENANCE:
            if (null == s.metadata) return null;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => R.A.ackScheduledMaintenance(),
                    noticeType: s.type
                }), tC.intl.format(tC.t["yb96S+"], s.metadata), (0, i.jsx)(d.eCN, {
                    href: `${tR.qF7.STATUS}/incidents/${s.metadata.id}`,
                    noticeType: s.type,
                    children: tC.intl.string(tC.t.hvVgAZ)
                })]
            });
        case tR.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(tU, {
                noticeType: s.type
            });
        case tR.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(tx, {
                noticeType: s.type
            });
        case tR.kqX.HARDWARE_MUTE:
            if (null != s.metadata) {
                let {
                    vendor: t,
                    model: e
                } = s.metadata;
                return (0, i.jsxs)(d.$Td, {
                    color: d.Hv$.DANGER,
                    children: [tC.intl.format(tC.t.qoDex7, {
                        vendorName: t.name,
                        modelName: e.name
                    }), (0, i.jsx)(d.PMB, {
                        noticeType: s.type,
                        onClick: () => {
                            _.A.setEnableHardwareMuteNotice(!1), tM()
                        }
                    }), (0, i.jsx)(d.eCN, {
                        href: e.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: s.type,
                        children: tC.intl.string(tC.t["Yl/Riu"])
                    })]
                })
            }
            if (F.A.getConfig({
                    location: "Notice.AudioIssueNoticeHardwareMute"
                }).enableHardwareSilenceWarning) return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.INFO,
                children: [tC.intl.format(tC.t.QMw8Fd, {}), (0, i.jsx)(d.PMB, {
                    noticeType: s.type,
                    onClick: () => {
                        _.A.setEnableHardwareMuteNotice(!1), tM()
                    }
                })]
            });
            return null;
        case tR.kqX.STREAMER_MODE:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.STREAMER_MODE,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(),
                    noticeType: tR.kqX.STREAMER_MODE
                }), tC.intl.string(tC.t.iEgBXp), (0, i.jsx)(d.Z_L, {
                    onClick: () => g.A.setEnabled(!1),
                    noticeType: tR.kqX.STREAMER_MODE,
                    children: tC.intl.string(tC.t.R9GHya)
                })]
            });
        case tR.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == s.metadata) return null;
            let {
                skuId: tD, applicationId: tj
            } = s.metadata, tL = t_.A.get(tD), tk = x.A.getApplication(tj);
            if (null == tL || null == tk) return null;
            let tG = {
                page: tR.liQ.IN_APP
            };
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => A.X(tL.id),
                    noticeType: tR.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                }), (0, i.jsx)(d.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tS.PC
                }), tC.intl.format(tC.t["g3MU/+"], {
                    applicationName: tk.name,
                    skuName: tL.name
                }), (0, i.jsx)(d.Z_L, {
                    noticeType: tR.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    onClick: () => (0, J.j)({
                        applicationId: tk.id,
                        skuId: tL.id,
                        openPremiumPaymentModal: () => {
                            (0, z.A)({
                                initialPlanId: null,
                                subscriptionTier: th.pe.TIER_2,
                                analyticsLocations: l,
                                analyticsObject: tG
                            })
                        },
                        analyticsLocations: l,
                        analyticsLocationObject: tG,
                        context: __OVERLAY__ ? tR.BRT.OVERLAY : tR.BRT.APP
                    }).then(() => A.X(tL.id)),
                    children: tC.intl.string(tC.t.KEwPYx)
                })]
            });
        case tR.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == s.metadata) return null;
            let {
                skuId: t,
                applicationId: e
            } = s.metadata, n = t_.A.get(t), r = x.A.getApplication(e);
            if (null == n || null == r) return null;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(),
                    noticeType: tR.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                }), (0, i.jsx)(d.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tS.PC
                }), tC.intl.format(tC.t.LquIKC, {
                    applicationName: r.name,
                    skuName: n.name
                }), (0, i.jsx)(d.zr9, {
                    children: (0, i.jsx)(a.N_, {
                        onClick: () => tM(),
                        to: {
                            pathname: tR.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                            state: {
                                scrollRestoration: !1
                            }
                        },
                        children: tC.intl.string(tC.t.hvVgAZ)
                    })
                })]
            })
        }
        case tR.kqX.SURVEY: {
            let t = s.metadata;
            if (null == t) return null;
            let {
                key: e,
                prompt: n,
                cta: r,
                url: l,
                embedded: a,
                id: o
            } = t;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.CUSTOM,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: tR.kqX.SURVEY,
                    onClick: () => {
                        (0, h.pX)(e, !0)
                    }
                }), n, (0, i.jsx)(d.Z_L, {
                    noticeType: tR.kqX.SURVEY,
                    onClick: () => {
                        a ? (0, Z.K)(o) : window.open(l, "_blank"), (0, h.pX)(e, !1)
                    },
                    children: r
                })]
            })
        }
        case tR.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [tC.intl.string(tC.t["ugxmk/"]), (0, i.jsx)(d.eCN, {
                    href: tN.A.getArticleURL(tR.MVz.CORRUPT_INSTALLATION),
                    target: "_blank",
                    noticeType: s.type,
                    children: tC.intl.string(tC.t["6ik4Xk"])
                })]
            });
        case tR.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(),
                    noticeType: tR.kqX.VIDEO_UNSUPPORTED_BROWSER
                }), tC.intl.string(tC.t.wVjKGi), (0, i.jsx)(d.Z_L, {
                    noticeType: tR.kqX.VIDEO_UNSUPPORTED_BROWSER,
                    onClick: () => {
                        (0, d.mMO)(async () => {
                            let {
                                default: t
                            } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                            return e => (0, i.jsx)(t, {
                                source: "Video unsupported browser",
                                ...e
                            })
                        })
                    },
                    children: tC.intl.string(tC.t["1WjMbC"])
                })]
            });
        case tR.kqX.DISPATCH_ERROR:
            if (null == s.metadata) return null;
            let {
                error: tv
            } = s.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(),
                    noticeType: tR.kqX.DISPATCH_ERROR
                }), tv?.displayMessage, (0, i.jsx)(d.Z_L, {
                    noticeType: tR.kqX.DISPATCH_ERROR,
                    onClick: () => (0, d.mMO)(async () => {
                        let {
                            default: t
                        } = await n.e("88014").then(n.bind(n, 627261));
                        return e => (0, i.jsx)(t, {
                            ...e
                        })
                    }),
                    children: tC.intl.string(tC.t.hvVgAZ)
                })]
            });
        case tR.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == s.metadata) return null;
            let {
                progress: tb, total: tB, name: tw
            } = s.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => tM(),
                    noticeType: tR.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS
                }), (0, i.jsxs)(U.A, {
                    justify: U.A.Justify.CENTER,
                    children: [null != tw ? tC.intl.formatToPlainString(tC.t["pHj+z4"], {
                        name: `${tw}`,
                        progress: tb,
                        total: tB
                    }) : tC.intl.formatToPlainString(tC.t["lHZn+A"], {
                        progress: tb,
                        total: tB
                    }), (0, i.jsx)(d.y$y, {
                        type: d.y$y.Type.PULSING_ELLIPSIS,
                        className: tS.gO
                    })]
                })]
            });
        case tR.kqX.APPLICATION_TEST_MODE:
            if (null == s.metadata) return null;
            if (null != tT.A.testModeEmbeddedApplicationId) return (0, i.jsx)(d.$Td, {
                color: d.Hv$.WARNING,
                children: (0, i.jsxs)(U.A, {
                    justify: U.A.Justify.CENTER,
                    align: U.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: tC.intl.format(tC.t["1qxVe4"], {
                            applicationName: s.metadata.applicationName
                        })
                    }), (0, i.jsx)(d.PMB, {
                        onClick: m.cL,
                        noticeType: tR.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
            return (0, i.jsx)(d.$Td, {
                color: d.Hv$.WARNING,
                children: (0, i.jsxs)(U.A, {
                    justify: U.A.Justify.CENTER,
                    align: U.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: tC.intl.format(tC.t.Fv5HrE, {
                            applicationName: s.metadata.applicationName
                        })
                    }), (0, i.jsx)(d.PMB, {
                        onClick: m.cL,
                        noticeType: tR.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
        case tR.kqX.VIEWING_ROLES:
            return (0, i.jsx)(H.A, {});
        case tR.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(d.$Td, {
                color: K === th.PremiumTypes.TIER_1 ? d.Hv$.PREMIUM_TIER_1 : K === th.PremiumTypes.TIER_0 ? d.Hv$.PREMIUM_TIER_0 : d.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: tR.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        tM(s.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), (0, i.jsx)(d.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tS.PC
                }), K === th.PremiumTypes.TIER_1 ? tC.intl.formatToPlainString(tC.t.fXv4wm, {
                    daysLeft: s.metadata.daysLeft
                }) : K === th.PremiumTypes.TIER_0 ? tC.intl.formatToPlainString(tC.t.ZOHZMr, {
                    daysLeft: s.metadata.daysLeft
                }) : tC.intl.formatToPlainString(tC.t.outyHh, {
                    daysLeft: s.metadata.daysLeft
                }), (0, i.jsx)(d.Z_L, {
                    noticeType: tR.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        tM(s.metadata?.premiumSubscription?.currentPeriodEnd), (0, d.mMO)(async () => {
                            let {
                                default: t
                            } = await Promise.all([n.e("41353"), n.e("62175"), n.e("14704"), n.e("94934")]).then(n.bind(n, 174705));
                            return e => (0, i.jsx)(t, {
                                ...e,
                                daysLeft: s.metadata.daysLeft,
                                premiumType: K,
                                analyticsSource: "Nag Bar",
                                premiumSubscription: s.metadata.premiumSubscription
                            })
                        })
                    },
                    children: K === th.PremiumTypes.TIER_1 ? tC.intl.string(tC.t.BkbUPM) : K === th.PremiumTypes.TIER_0 ? tC.intl.string(tC.t.Px978X) : tC.intl.string(tC.t.LW5tCE)
                })]
            });
        case tR.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let {
                daysPastDue: tq, dismissUntil: t$
            } = s.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: s.type,
                    onClick: () => {
                        tM(t$)
                    }
                }), tC.intl.format(tC.t.zxU0Kp, {
                    daysPastDue: tq
                }), (0, i.jsx)(d.Z_L, {
                    noticeType: tR.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                    onClick: () => {
                        tM(t$), (0, ts.openUserSettings)(tr.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tC.intl.string(tC.t.q8rxeS)
                })]
            });
        case tR.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: tR.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        tM(s.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), tC.intl.string(tC.t.LlZaoX), (0, i.jsx)(d.Z_L, {
                    noticeType: tR.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        tM(s.metadata?.premiumSubscription?.currentPeriodEnd), (0, ts.openUserSettings)(tr.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tC.intl.string(tC.t["Zpd+Yq"])
                })]
            });
        case tR.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: tR.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        tM(s.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), tC.intl.string(tC.t["30YfCr"]), (0, i.jsx)(d.Z_L, {
                    noticeType: tR.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        tM(s.metadata?.premiumSubscription?.currentPeriodEnd), (0, ts.openUserSettings)(tr.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tC.intl.string(tC.t.U5pKWA)
                })]
            });
        case tR.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: tR.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        tM(s.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), K === th.PremiumTypes.TIER_1 ? tC.intl.formatToPlainString(tC.t.b6QUvf, {
                    daysLeft: s.metadata.daysLeft
                }) : K === th.PremiumTypes.TIER_0 ? tC.intl.formatToPlainString(tC.t["tURZ/M"], {
                    daysLeft: s.metadata.daysLeft
                }) : tC.intl.formatToPlainString(tC.t.AyC74I, {
                    daysLeft: s.metadata.daysLeft
                }), (0, i.jsx)(d.Z_L, {
                    noticeType: tR.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        tM(s.metadata?.premiumSubscription?.currentPeriodEnd), (0, ts.openUserSettings)(tr.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: K === th.PremiumTypes.TIER_1 ? tC.intl.string(tC.t.lboF5O) : K === th.PremiumTypes.TIER_0 ? tC.intl.string(tC.t["4UPwOq"]) : tC.intl.string(tC.t["P/VvGb"])
                })]
            });
        case tR.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(X.y, {
                buttonText: s.buttonText ?? tC.intl.string(tC.t["/g10LC"]),
                onGoBack: s.callback,
                onDismiss: () => tM(),
                showCloseButton: !0
            });
        case tR.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(B.A, {
                guildId: e,
                analyticsLocations: l
            });
        case tR.kqX.QUARANTINED:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [tC.intl.string(tC.t.DVFJYf), (0, i.jsx)(d.eCN, {
                    href: tm.q,
                    target: "_blank",
                    noticeType: s.type,
                    children: tC.intl.string(tC.t.kvHdFN)
                }), (0, i.jsx)(d.MzZ, {
                    href: tN.A.getArticleURL(tR.MVz.QUARANTINE),
                    target: "_blank",
                    className: tS.yw,
                    children: tC.intl.string(tC.t.hvVgAZ)
                })]
            });
        case tR.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let {
                dismissUntil: tX, decisionId: tV
            } = s.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: tR.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                    onClick: () => {
                        null != e && (0, b.wu)(e), tM(tX)
                    }
                }), tC.intl.string(tC.t.B8ruyY), (0, i.jsx)(d.zr9, {
                    onClick: () => {
                        null != e && (0, b.W5)(e, tV, () => {
                            tM(tX), (0, b.wu)(e)
                        })
                    },
                    children: tC.intl.string(tC.t.oX14El)
                }), null != e ? (0, i.jsx)(d.zr9, {
                    onClick: () => V.A.open(e, tR.BEX.GUILD_AUTOMOD, void 0, tR.nd0.AUTOMOD_MENTION_SPAM),
                    children: tC.intl.string(tC.t["1R7QIx"])
                }) : null]
            });
        case tR.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: tR.kqX.QUESTS_PROGRESS_INTERRUPTION,
                    onClick: () => {
                        s.metadata?.streamKey != null && (0, Q.lk)(s.metadata.streamKey)
                    }
                }), tC.intl.string(tC.t.rOx44m)]
            });
        case tR.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.BRAND,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => {
                        tM(s.metadata?.dismissUntil)
                    },
                    noticeType: tR.kqX.BLOCK_USER_FEEDBACK_NAGBAR
                }), tC.intl.string(tC.t["0klLS7"]), (0, i.jsx)(d.Z_L, {
                    onClick: () => {
                        (0, te.$)(), tM(s.metadata?.dismissUntil)
                    },
                    noticeType: tR.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    children: tC.intl.string(tC.t.e4y2VM)
                })]
            });
        case tR.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(tt.A, {});
        case tR.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(ti.A, {});
        default:
            return null
    }
}) : null;

function tD() {
    let {
        analyticsLocations: t
    } = (0, y.Ay)(S.A.NOTICE);
    return (0, i.jsx)(y.f5, {
        value: t,
        children: (0, i.jsx)(tf, {})
    })
}