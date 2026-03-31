/** chunk id: 916768 params = (module,exports,require) **/
n.d(e, {
    A: () => tk,
    w: () => tD
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
    C = n(55619),
    m = n(246605),
    g = n(271866),
    O = n(736653),
    S = n(77729),
    y = n(573648),
    x = n(793574),
    U = n(688810),
    P = n(587895),
    M = n(315982),
    j = n(235986),
    D = n(420216),
    f = n(984870),
    k = n(403881),
    L = n(813803),
    G = n(487329),
    v = n(102609),
    B = n(49463),
    b = n(322223),
    w = n(137207),
    q = n(619029),
    $ = n(202384),
    X = n(51758),
    V = n(571139),
    H = n(527012),
    W = n(997509),
    F = n(475723),
    K = n(598733),
    J = n(801644),
    Y = n(74848),
    z = n(4630),
    Q = n(532794),
    Z = n(234419),
    tt = n(814249),
    te = n(829219),
    tn = n(601730),
    ti = n(722255),
    tl = n(613491),
    tr = n(464473),
    ts = n(780964),
    ta = n(840065),
    to = n(459321),
    tc = n(594609),
    td = n(734057),
    tu = n(430452),
    tE = n(383501),
    t_ = n(967198),
    tT = n(287809),
    tA = n(67480),
    tI = n(147964),
    tN = n(519057),
    tR = n(954571),
    tp = n(975571),
    th = n(723702),
    tC = n(652215),
    tm = n(502075),
    tg = n(788868),
    tO = n(831502),
    tS = n(731854),
    ty = n(985018),
    tx = n(571655);
let tU = t => {
        let {
            error: e,
            allowClick: n = !1
        } = t, l = (0, G.B1)(e)?.errorCode, r = ty.intl.formatToPlainString(ty.t.ejOT95, {
            errorCode: l
        }), s = (0, i.jsx)(E.Text, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: tx.fU,
            selectable: !0,
            children: r
        });
        return n ? (0, i.jsx)(E.DUT, {
            tag: "span",
            className: tx.wz,
            onClick: () => open(tp.A.getArticleURL(tC.MVz.AV_ERROR_CODES)),
            children: s
        }) : s
    },
    tP = t => {
        let {
            noticeType: e
        } = t;
        return (0, i.jsxs)(E.$Td, {
            color: E.Hv$.DANGER,
            children: [(0, i.jsx)(E.PMB, {
                noticeType: e,
                onClick: () => {
                    tD()
                }
            }), ty.intl.string(ty.t.o3zuYz), (0, i.jsx)(tU, {
                error: G.iy.NO_INPUT_DEVICES
            }), (0, i.jsx)(E.eCN, {
                href: tp.A.getArticleURL(tC.MVz.NO_INPUT_DETECTED),
                noticeType: e,
                children: ty.intl.string(ty.t.RYKKox)
            })]
        })
    };

function tM(t) {
    return (0, th.isWindows)() && c().satisfies(S.A?.os.release, tm.PH) ? `ms-settings:sound-properties?endpointId=${t}` : "ms-settings:sound"
}

function tj(t) {
    let e, n, {
            noticeType: l
        } = t,
        r = (0, Y.x5)(tS.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        {
            inputDeviceOSMuted: a,
            inputDeviceOSVolume: o
        } = (0, d.cf)([tu.Ay], () => ({
            inputDeviceOSMuted: tu.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: tu.Ay.getInputDeviceOSVolume()
        })),
        c = !1;
    return !0 === a ? (e = ty.intl.string(ty.t.ppW3ri), n = (0, i.jsx)(E.eCN, {
        href: tM(s),
        noticeType: l,
        children: ty.intl.string(ty.t.QghSIq)
    })) : 0 === o ? (e = ty.intl.string(ty.t.j4gGA4), n = (0, i.jsx)(E.eCN, {
        href: tM(s),
        noticeType: l,
        children: ty.intl.string(ty.t.QghSIq)
    })) : tu.Ay.supports(tS.O5.LOOPBACK) ? (e = ty.intl.string(ty.t.dNAJ18), c = !0, n = (0, i.jsx)(E.zr9, {
        onClick: () => {
            (0, ta.openUserSettings)(ts.X.VOICE_AND_VIDEO_PANEL)
        },
        children: ty.intl.string(ty.t.I6YlB4)
    })) : (e = ty.intl.string(ty.t.nCO9bI), n = (0, i.jsx)(E.eCN, {
        href: tp.A.getArticleURL(tC.MVz.NO_INPUT_DETECTED),
        noticeType: l,
        children: ty.intl.string(ty.t.RYKKox)
    })), (0, i.jsxs)(E.$Td, {
        color: E.Hv$.DANGER,
        children: [(0, i.jsx)(E.PMB, {
            noticeType: l,
            onClick: () => {
                tD(), (0, tc.h)()
            }
        }), e, (0, i.jsx)(tU, {
            allowClick: c,
            error: G.iy.NO_AUDIO_INPUT_DETECTED
        }), n]
    })
}

function tD(t) {
    N.A.dismiss(null != t ? {
        untilAtLeast: s()(t)
    } : void 0)
}
let tf = 21552 == n.j ? l.memo(function() {
    let t = (0, d.bG)([tT.default], () => tT.default.getCurrentUser()),
        e = (0, d.bG)([t_.A], () => t_.A.getGuildId()),
        r = (0, d.bG)([tN.Ay], () => tN.Ay.getNotice()),
        {
            analyticsLocations: s
        } = (0, U.Ay)(),
        o = (0, O.Ay)(),
        c = (0, X.H)(e),
        N = (0, Z.V)();
    if (l.useEffect(() => {
            if (r?.type != null) {
                let t;
                if (null == N && (r.type === tC.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === tC.kqX.PREMIUM_TIER_0_TRIAL_ENDING)) return;
                let n = {};
                null != e && (n.guild_id = e), N?.trial_id != null && (n.trial_id = N.trial_id), t = {
                    notice_type: r.type,
                    ...n
                }, tR.default.track(tC.HAw.APP_NOTICE_VIEWED, t)
            }
        }, [r?.type, e, N]), l.useEffect(() => {
            if (null != r && r.type === tC.kqX.SURVEY && null != r.metadata) {
                let {
                    metadata: t
                } = r, e = B.A.getUserExperimentDescriptor(t.id);
                null != e && (0, v.LQ)(t.id, e), (async () => {
                    r.metadata?.id != null && await (0, m.oX)(r.metadata?.id)
                })()
            }
        }, [r]), null == r) return null;
    let S = null != r.type ? tN.Re[r.type] : null,
        x = null != r.type ? tN.k3[r.type] : null,
        G = null != r.type ? tN.f7[r.type] : null,
        Y = tN.pe[r.type];
    if (null != S) return (0, i.jsx)(k.$, {
        dismissibleContent: S,
        noticeType: r.type
    });
    if (null != x) return (0, i.jsx)(L._, {
        dismissibleContent: x,
        noticeType: r.type
    });
    if (null != G) return (0, i.jsx)(f.T, {
        dismissibleContent: G
    });
    if (null != Y) return (0, i.jsx)(D.r, {
        dismissibleContent: Y,
        noticeType: r.type
    });
    let tc = r.metadata?.premiumType;
    switch (r.type) {
        case tC.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(to.A, {});
        case tC.kqX.LURKING_GUILD:
            return (0, i.jsx)(K.A, {});
        case tC.kqX.PENDING_MEMBER:
            return (0, i.jsx)(V.A, {});
        case tC.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(tl.A, {});
        case tC.kqX.GUILD_RAID_NOTIFICATION:
            let {
                dismissUntil: tu
            } = r.metadata;
            return (0, i.jsx)(b.A, {
                onDismiss: () => tD(tu)
            });
        case tC.kqX.WIN32_DEPRECATED_MESSAGE:
            let {
                dismissUntil: tm
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(tm),
                    noticeType: r.type
                }), ty.intl.format(ty.t["08KQ1P"], {
                    helpCenterLink: tp.A.getArticleURL(tC.MVz.WIN32_DEPRECATE)
                })]
            });
        case tC.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let {
                dismissUntil: tS
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(tS),
                    noticeType: r.type
                }), ty.intl.format(ty.t["8Je+dX"], {
                    helpCenterLink: tp.A.getArticleURL(tC.MVz.WIN7_8_DEPRECATE)
                })]
            });
        case tC.kqX.WIN_COMPAT_MODE_MESSAGE:
            let {
                dismissUntil: tU
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(tU),
                    noticeType: r.type
                }), ty.intl.string(ty.t["9DJgOg"])]
            });
        case tC.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let {
                dismissUntil: tM
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(tM),
                    noticeType: r.type
                }), ty.intl.format(ty.t.q8VPLo, {
                    helpCenterLink: tp.A.getArticleURL(tC.MVz.MACOS_19_DEPRECATE)
                })]
            });
        case tC.kqX.E2EE_UPDATE_REQUIRED:
            let {
                dismissUntil: tf
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(tf),
                    noticeType: r.type
                }), ty.intl.format(th.isPlatformEmbedded ? ty.t.J232TI : ty.t.vceuiL, {
                    helpCenterLink: tp.A.getArticleURL(tC.MVz.END_TO_END_ENCRYPTION)
                })]
            });
        case tC.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(),
                    noticeType: r.type
                }), ty.intl.string(ty.t.iW0fcQ), (0, i.jsx)(E.eCN, {
                    href: tp.A.getArticleURL(tC.MVz.WINDOWS_MEDIA_PACK),
                    target: "_blank",
                    noticeType: r.type,
                    children: ty.intl.string(ty.t.LQG5j6)
                })]
            });
        case tC.kqX.GENERIC:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(),
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
                    onClick: () => tD(),
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
                        R.A.clearRemoteDisconnectVoiceChannelId(), tD()
                    },
                    noticeType: r.type
                }), ty.intl.string(ty.t.bOQ3jV), (0, i.jsx)(E.Z_L, {
                    onClick: () => {
                        let t = tE.A.getRemoteDisconnectVoiceChannelId();
                        null != t && null != td.A.getChannel(t) && p.default.selectVoiceChannel(t)
                    },
                    noticeType: r.type,
                    children: ty.intl.string(ty.t.vD60Pv)
                })]
            });
        case tC.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => {
                        R.A.clearLastSessionVoiceChannelId(), tD()
                    },
                    noticeType: r.type
                }), ty.intl.string(ty.t.jY2lUA), (0, i.jsx)(E.Z_L, {
                    onClick: () => {
                        let t = tE.A.getLastSessionVoiceChannelId();
                        null != t && null != td.A.getChannel(t) && p.default.selectVoiceChannel(t)
                    },
                    noticeType: r.type,
                    children: ty.intl.string(ty.t.vD60Pv)
                })]
            });
        case tC.kqX.SPOTIFY_AUTO_PAUSED:
            let tk = y.A.get(tC.fg2.SPOTIFY);
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(),
                    noticeType: r.type
                }), (0, i.jsx)("img", {
                    alt: "",
                    className: tx.tV,
                    src: (0, u.qB)(o) ? tk.icon.darkSVG : tk.icon.whiteSVG
                }), ty.intl.string(ty.t.D8Cp76), (0, i.jsx)(E.Z_L, {
                    onClick: () => (0, ta.openUserSettings)(ts.X.VOICE_AND_VIDEO_PANEL),
                    noticeType: r.type,
                    children: ty.intl.string(ty.t.NiTd0e)
                }), (0, i.jsx)(E.MzZ, {
                    className: tx.uD,
                    href: tp.A.getArticleURL(tC.MVz.SPOTIFY_AUTO_PAUSED),
                    target: "_blank",
                    children: ty.intl.string(ty.t.CiqAIU)
                })]
            });
        case tC.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [ty.intl.string(ty.t["f+Zaol"]), (0, i.jsx)(E.Z_L, {
                    noticeType: r.type,
                    onClick: () => c && null != e ? (0, $.Ze)(e) : M.R(),
                    children: ty.intl.string(ty.t.fiNVin)
                })]
            });
        case tC.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [ty.intl.string(ty.t["3sWbf3"]), (0, i.jsx)(E.Z_L, {
                    noticeType: r.type,
                    onClick: () => {
                        A.A.verifyResend(), _.A.show({
                            title: ty.intl.string(ty.t.LykQYk),
                            body: ty.intl.format(ty.t.azKEPy, {
                                email: t?.email
                            }),
                            cancelText: ty.intl.string(ty.t.Vm8akB),
                            onCancel: M.R
                        })
                    },
                    children: ty.intl.string(ty.t.WnX4J2)
                })]
            });
        case tC.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => h.A.ackScheduledMaintenance(),
                    noticeType: r.type
                }), ty.intl.format(ty.t["yb96S+"], r.metadata), (0, i.jsx)(E.eCN, {
                    href: `${tC.qF7.STATUS}/incidents/${r.metadata.id}`,
                    noticeType: r.type,
                    children: ty.intl.string(ty.t.hvVgAZ)
                })]
            });
        case tC.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(tj, {
                noticeType: r.type
            });
        case tC.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(tP, {
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
                    children: [ty.intl.format(ty.t.qoDex7, {
                        vendorName: t.name,
                        modelName: e.name
                    }), (0, i.jsx)(E.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            T.A.setEnableHardwareMuteNotice(!1), tD()
                        }
                    }), (0, i.jsx)(E.eCN, {
                        href: e.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: r.type,
                        children: ty.intl.string(ty.t["Yl/Riu"])
                    })]
                })
            }
            if (J.A.getConfig({
                    location: "Notice.AudioIssueNoticeHardwareMute"
                }).enableHardwareSilenceWarning) return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.INFO,
                children: [ty.intl.format(ty.t.QMw8Fd, {}), (0, i.jsx)(E.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        T.A.setEnableHardwareMuteNotice(!1), tD()
                    }
                })]
            });
            return null;
        case tC.kqX.STREAMER_MODE:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.STREAMER_MODE,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(),
                    noticeType: tC.kqX.STREAMER_MODE
                }), ty.intl.string(ty.t.iEgBXp), (0, i.jsx)(E.Z_L, {
                    onClick: () => C.A.setEnabled(!1),
                    noticeType: tC.kqX.STREAMER_MODE,
                    children: ty.intl.string(ty.t.R9GHya)
                })]
            });
        case tC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let {
                skuId: tL, applicationId: tG
            } = r.metadata, tv = tA.A.get(tL), tB = P.A.getApplication(tG);
            if (null == tv || null == tB) return null;
            let tb = {
                page: tC.liQ.IN_APP
            };
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => I.X(tv.id),
                    noticeType: tC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                }), (0, i.jsx)(E.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tx.PC
                }), ty.intl.format(ty.t["g3MU/+"], {
                    applicationName: tB.name,
                    skuName: tv.name
                }), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    onClick: () => (0, z.j)({
                        applicationId: tB.id,
                        skuId: tv.id,
                        openPremiumPaymentModal: () => {
                            (0, Q.A)({
                                initialPlanId: null,
                                subscriptionTier: tg.pe.TIER_2,
                                analyticsLocations: s,
                                analyticsObject: tb
                            })
                        },
                        analyticsLocations: s,
                        analyticsLocationObject: tb,
                        context: __OVERLAY__ ? tC.BRT.OVERLAY : tC.BRT.APP
                    }).then(() => I.X(tv.id)),
                    children: ty.intl.string(ty.t.KEwPYx)
                })]
            });
        case tC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let {
                skuId: t,
                applicationId: e
            } = r.metadata, n = tA.A.get(t), l = P.A.getApplication(e);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(),
                    noticeType: tC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                }), (0, i.jsx)(E.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tx.PC
                }), ty.intl.format(ty.t.LquIKC, {
                    applicationName: l.name,
                    skuName: n.name
                }), (0, i.jsx)(E.zr9, {
                    children: (0, i.jsx)(a.N_, {
                        onClick: () => tD(),
                        to: {
                            pathname: tC.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                            state: {
                                scrollRestoration: !1
                            }
                        },
                        children: ty.intl.string(ty.t.hvVgAZ)
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
                        (0, m.pX)(e, !0)
                    }
                }), n, (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.SURVEY,
                    onClick: () => {
                        a ? (0, tt.K)(o) : window.open(s, "_blank"), (0, m.pX)(e, !1)
                    },
                    children: l
                })]
            })
        }
        case tC.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [ty.intl.string(ty.t["ugxmk/"]), (0, i.jsx)(E.eCN, {
                    href: tp.A.getArticleURL(tC.MVz.CORRUPT_INSTALLATION),
                    target: "_blank",
                    noticeType: r.type,
                    children: ty.intl.string(ty.t["6ik4Xk"])
                })]
            });
        case tC.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(),
                    noticeType: tC.kqX.VIDEO_UNSUPPORTED_BROWSER
                }), ty.intl.string(ty.t.wVjKGi), (0, i.jsx)(E.Z_L, {
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
                    children: ty.intl.string(ty.t["1WjMbC"])
                })]
            });
        case tC.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let {
                error: tw
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(),
                    noticeType: tC.kqX.DISPATCH_ERROR
                }), tw?.displayMessage, (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.DISPATCH_ERROR,
                    onClick: () => (0, E.mMO)(async () => {
                        let {
                            default: t
                        } = await n.e("88014").then(n.bind(n, 627261));
                        return e => (0, i.jsx)(t, {
                            ...e
                        })
                    }),
                    children: ty.intl.string(ty.t.hvVgAZ)
                })]
            });
        case tC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let {
                progress: tq, total: t$, name: tX
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => tD(),
                    noticeType: tC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS
                }), (0, i.jsxs)(j.A, {
                    justify: j.A.Justify.CENTER,
                    children: [null != tX ? ty.intl.formatToPlainString(ty.t["pHj+z4"], {
                        name: `${tX}`,
                        progress: tq,
                        total: t$
                    }) : ty.intl.formatToPlainString(ty.t["lHZn+A"], {
                        progress: tq,
                        total: t$
                    }), (0, i.jsx)(E.y$y, {
                        type: E.y$y.Type.PULSING_ELLIPSIS,
                        className: tx.gO
                    })]
                })]
            });
        case tC.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != tI.A.testModeEmbeddedApplicationId) return (0, i.jsx)(E.$Td, {
                color: E.Hv$.WARNING,
                children: (0, i.jsxs)(j.A, {
                    justify: j.A.Justify.CENTER,
                    align: j.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: ty.intl.format(ty.t["1qxVe4"], {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(E.PMB, {
                        onClick: g.cL,
                        noticeType: tC.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
            return (0, i.jsx)(E.$Td, {
                color: E.Hv$.WARNING,
                children: (0, i.jsxs)(j.A, {
                    justify: j.A.Justify.CENTER,
                    align: j.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: ty.intl.format(ty.t.Fv5HrE, {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(E.PMB, {
                        onClick: g.cL,
                        noticeType: tC.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
        case tC.kqX.VIEWING_ROLES:
            return (0, i.jsx)(F.A, {});
        case tC.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(E.$Td, {
                color: tc === tg.PremiumTypes.TIER_1 ? E.Hv$.PREMIUM_TIER_1 : tc === tg.PremiumTypes.TIER_0 ? E.Hv$.PREMIUM_TIER_0 : E.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tC.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        tD(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), (0, i.jsx)(E.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tx.PC
                }), tc === tg.PremiumTypes.TIER_1 ? ty.intl.formatToPlainString(ty.t.fXv4wm, {
                    daysLeft: r.metadata.daysLeft
                }) : tc === tg.PremiumTypes.TIER_0 ? ty.intl.formatToPlainString(ty.t.ZOHZMr, {
                    daysLeft: r.metadata.daysLeft
                }) : ty.intl.formatToPlainString(ty.t.outyHh, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        tD(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, E.mMO)(async () => {
                            let {
                                default: t
                            } = await Promise.all([n.e("41353"), n.e("62175"), n.e("14704"), n.e("99590")]).then(n.bind(n, 174705));
                            return e => (0, i.jsx)(t, {
                                ...e,
                                daysLeft: r.metadata.daysLeft,
                                premiumType: tc,
                                analyticsSource: "Nag Bar",
                                premiumSubscription: r.metadata.premiumSubscription
                            })
                        })
                    },
                    children: tc === tg.PremiumTypes.TIER_1 ? ty.intl.string(ty.t.BkbUPM) : tc === tg.PremiumTypes.TIER_0 ? ty.intl.string(ty.t.Px978X) : ty.intl.string(ty.t.LW5tCE)
                })]
            });
        case tC.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let {
                daysPastDue: tV, dismissUntil: tH
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        tD(tH)
                    }
                }), ty.intl.format(ty.t.zxU0Kp, {
                    daysPastDue: tV
                }), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                    onClick: () => {
                        tD(tH), (0, ta.openUserSettings)(ts.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: ty.intl.string(ty.t.q8rxeS)
                })]
            });
        case tC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        tD(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), ty.intl.string(ty.t.LlZaoX), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        tD(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, ta.openUserSettings)(ts.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: ty.intl.string(ty.t["Zpd+Yq"])
                })]
            });
        case tC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        tD(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), ty.intl.string(ty.t["30YfCr"]), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        tD(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, ta.openUserSettings)(ts.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: ty.intl.string(ty.t.U5pKWA)
                })]
            });
        case tC.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tC.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        tD(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), tc === tg.PremiumTypes.TIER_1 ? ty.intl.formatToPlainString(ty.t.b6QUvf, {
                    daysLeft: r.metadata.daysLeft
                }) : tc === tg.PremiumTypes.TIER_0 ? ty.intl.formatToPlainString(ty.t["tURZ/M"], {
                    daysLeft: r.metadata.daysLeft
                }) : ty.intl.formatToPlainString(ty.t.AyC74I, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(E.Z_L, {
                    noticeType: tC.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        tD(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, ta.openUserSettings)(ts.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tc === tg.PremiumTypes.TIER_1 ? ty.intl.string(ty.t.lboF5O) : tc === tg.PremiumTypes.TIER_0 ? ty.intl.string(ty.t["4UPwOq"]) : ty.intl.string(ty.t["P/VvGb"])
                })]
            });
        case tC.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(H.y, {
                buttonText: r.buttonText ?? ty.intl.string(ty.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => tD(),
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
                children: [ty.intl.string(ty.t.DVFJYf), (0, i.jsx)(E.eCN, {
                    href: tO.q,
                    target: "_blank",
                    noticeType: r.type,
                    children: ty.intl.string(ty.t.kvHdFN)
                }), (0, i.jsx)(E.MzZ, {
                    href: tp.A.getArticleURL(tC.MVz.QUARANTINE),
                    target: "_blank",
                    className: tx.yw,
                    children: ty.intl.string(ty.t.hvVgAZ)
                })]
            });
        case tC.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let {
                dismissUntil: tW, decisionId: tF
            } = r.metadata;
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tC.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                    onClick: () => {
                        null != e && (0, w.wu)(e), tD(tW)
                    }
                }), ty.intl.string(ty.t.B8ruyY), (0, i.jsx)(E.zr9, {
                    onClick: () => {
                        null != e && (0, w.W5)(e, tF, () => {
                            tD(tW), (0, w.wu)(e)
                        })
                    },
                    children: ty.intl.string(ty.t.oX14El)
                }), null != e ? (0, i.jsx)(E.zr9, {
                    onClick: () => W.A.open(e, tC.BEX.GUILD_AUTOMOD, void 0, tC.nd0.AUTOMOD_MENTION_SPAM),
                    children: ty.intl.string(ty.t["1R7QIx"])
                }) : null]
            });
        case tC.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, i.jsx)(E.PMB, {
                    noticeType: tC.kqX.QUESTS_PROGRESS_INTERRUPTION,
                    onClick: () => {
                        r.metadata?.streamKey != null && (0, te.lk)(r.metadata.streamKey)
                    }
                }), ty.intl.string(ty.t.rOx44m)]
            });
        case tC.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(E.$Td, {
                color: E.Hv$.BRAND,
                children: [(0, i.jsx)(E.PMB, {
                    onClick: () => {
                        tD(r.metadata?.dismissUntil)
                    },
                    noticeType: tC.kqX.BLOCK_USER_FEEDBACK_NAGBAR
                }), ty.intl.string(ty.t["0klLS7"]), (0, i.jsx)(E.Z_L, {
                    onClick: () => {
                        (0, ti.$)(), tD(r.metadata?.dismissUntil)
                    },
                    noticeType: tC.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    children: ty.intl.string(ty.t.e4y2VM)
                })]
            });
        case tC.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(tn.A, {});
        case tC.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(tr.A, {});
        default:
            return null
    }
}) : null;

function tk() {
    let {
        analyticsLocations: t
    } = (0, U.Ay)(x.A.NOTICE);
    return (0, i.jsx)(U.f5, {
        value: t,
        children: (0, i.jsx)(tf, {})
    })
}