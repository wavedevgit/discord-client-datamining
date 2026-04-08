/** chunk id: 916768 params = (module,exports,require) **/
n.d(e, {
    A: () => tL,
    w: () => tf
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
    _ = n(397927),
    E = n(157559),
    T = n(827343),
    A = n(830215),
    I = n(503703),
    N = n(912851),
    R = n(169604),
    p = n(956793),
    h = n(785796),
    C = n(55619),
    m = n(246605),
    O = n(271866),
    g = n(736653),
    S = n(77729),
    y = n(573648),
    x = n(793574),
    M = n(688810),
    P = n(587895),
    U = n(315982),
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
    H = n(571139),
    V = n(527012),
    W = n(997509),
    F = n(475723),
    K = n(598733),
    J = n(801644),
    Y = n(74848),
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
    t_ = n(430452),
    tE = n(383501),
    tT = n(967198),
    tA = n(287809),
    tI = n(67480),
    tN = n(147964),
    tR = n(519057),
    tp = n(954571),
    th = n(975571),
    tC = n(723702),
    tm = n(652215),
    tO = n(502075),
    tg = n(788868),
    tS = n(831502),
    ty = n(731854),
    tx = n(985018),
    tM = n(571655);
let tP = t => {
        let {
            error: e,
            allowClick: n = !1
        } = t, l = (0, G.B1)(e)?.errorCode, r = tx.intl.formatToPlainString(tx.t.ejOT95, {
            errorCode: l
        }), s = (0, i.jsx)(_.Text, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: tM.fU,
            selectable: !0,
            children: r
        });
        return n ? (0, i.jsx)(_.DUT, {
            tag: "span",
            className: tM.wz,
            onClick: () => open(th.A.getArticleURL(tm.MVz.AV_ERROR_CODES)),
            children: s
        }) : s
    },
    tU = t => {
        let {
            noticeType: e
        } = t;
        return (0, i.jsxs)(_.$Td, {
            color: _.Hv$.DANGER,
            children: [(0, i.jsx)(_.PMB, {
                noticeType: e,
                onClick: () => {
                    tf()
                }
            }), tx.intl.string(tx.t.o3zuYz), (0, i.jsx)(tP, {
                error: G.iy.NO_INPUT_DEVICES
            }), (0, i.jsx)(_.eCN, {
                href: th.A.getArticleURL(tm.MVz.NO_INPUT_DETECTED),
                noticeType: e,
                children: tx.intl.string(tx.t.RYKKox)
            })]
        })
    };

function tj(t) {
    return (0, tC.isWindows)() && c().satisfies(S.A?.os.release, tO.PH) ? `ms-settings:sound-properties?endpointId=${t}` : "ms-settings:sound"
}

function tD(t) {
    let e, n, {
            noticeType: l
        } = t,
        r = (0, Y.x5)(ty.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        {
            inputDeviceOSMuted: a,
            inputDeviceOSVolume: o
        } = (0, d.cf)([t_.Ay], () => ({
            inputDeviceOSMuted: t_.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: t_.Ay.getInputDeviceOSVolume()
        })),
        c = !1;
    return !0 === a ? (e = tx.intl.string(tx.t.ppW3ri), n = (0, i.jsx)(_.eCN, {
        href: tj(s),
        noticeType: l,
        children: tx.intl.string(tx.t.QghSIq)
    })) : 0 === o ? (e = tx.intl.string(tx.t.j4gGA4), n = (0, i.jsx)(_.eCN, {
        href: tj(s),
        noticeType: l,
        children: tx.intl.string(tx.t.QghSIq)
    })) : t_.Ay.supports(ty.O5.LOOPBACK) ? (e = tx.intl.string(tx.t.dNAJ18), c = !0, n = (0, i.jsx)(_.zr9, {
        onClick: () => {
            (0, to.openUserSettings)(ta.X.VOICE_AND_VIDEO_PANEL)
        },
        children: tx.intl.string(tx.t.I6YlB4)
    })) : (e = tx.intl.string(tx.t.nCO9bI), n = (0, i.jsx)(_.eCN, {
        href: th.A.getArticleURL(tm.MVz.NO_INPUT_DETECTED),
        noticeType: l,
        children: tx.intl.string(tx.t.RYKKox)
    })), (0, i.jsxs)(_.$Td, {
        color: _.Hv$.DANGER,
        children: [(0, i.jsx)(_.PMB, {
            noticeType: l,
            onClick: () => {
                tf(), (0, td.h)()
            }
        }), e, (0, i.jsx)(tP, {
            allowClick: c,
            error: G.iy.NO_AUDIO_INPUT_DETECTED
        }), n]
    })
}

function tf(t) {
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
        } = (0, M.Ay)(),
        o = (0, g.Ay)(),
        c = (0, X.H)(e),
        N = (0, Z.V)();
    if (l.useEffect(() => {
            if (r?.type != null) {
                let t;
                if (null == N && (r.type === tm.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === tm.kqX.PREMIUM_TIER_0_TRIAL_ENDING)) return;
                let n = {};
                null != e && (n.guild_id = e), N?.trial_id != null && (n.trial_id = N.trial_id), t = {
                    notice_type: r.type,
                    ...n
                }, tp.default.track(tm.HAw.APP_NOTICE_VIEWED, t)
            }
        }, [r?.type, e, N]), l.useEffect(() => {
            if (null != r && r.type === tm.kqX.SURVEY && null != r.metadata) {
                let {
                    metadata: t
                } = r, e = B.A.getUserExperimentDescriptor(t.id);
                null != e && (0, v.LQ)(t.id, e), (async () => {
                    r.metadata?.id != null && await (0, m.oX)(r.metadata?.id)
                })()
            }
        }, [r]), null == r) return null;
    let S = null != r.type ? tR.Re[r.type] : null,
        x = null != r.type ? tR.k3[r.type] : null,
        G = null != r.type ? tR.f7[r.type] : null,
        Y = tR.pe[r.type];
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
    let td = r.metadata?.premiumType;
    switch (r.type) {
        case tm.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(tc.A, {});
        case tm.kqX.LURKING_GUILD:
            return (0, i.jsx)(K.A, {});
        case tm.kqX.PENDING_MEMBER:
            return (0, i.jsx)(H.A, {});
        case tm.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(tr.A, {});
        case tm.kqX.GUILD_RAID_NOTIFICATION:
            let {
                dismissUntil: t_
            } = r.metadata;
            return (0, i.jsx)(b.A, {
                onDismiss: () => tf(t_)
            });
        case tm.kqX.WIN32_DEPRECATED_MESSAGE:
            let {
                dismissUntil: tO
            } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(tO),
                    noticeType: r.type
                }), tx.intl.format(tx.t["08KQ1P"], {
                    helpCenterLink: th.A.getArticleURL(tm.MVz.WIN32_DEPRECATE)
                })]
            });
        case tm.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let {
                dismissUntil: ty
            } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(ty),
                    noticeType: r.type
                }), tx.intl.format(tx.t["8Je+dX"], {
                    helpCenterLink: th.A.getArticleURL(tm.MVz.WIN7_8_DEPRECATE)
                })]
            });
        case tm.kqX.WIN_COMPAT_MODE_MESSAGE:
            let {
                dismissUntil: tP
            } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(tP),
                    noticeType: r.type
                }), tx.intl.string(tx.t["9DJgOg"])]
            });
        case tm.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let {
                dismissUntil: tj
            } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(tj),
                    noticeType: r.type
                }), tx.intl.format(tx.t.q8VPLo, {
                    helpCenterLink: th.A.getArticleURL(tm.MVz.MACOS_19_DEPRECATE)
                })]
            });
        case tm.kqX.E2EE_UPDATE_REQUIRED:
            let {
                dismissUntil: tk
            } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(tk),
                    noticeType: r.type
                }), tx.intl.format(tC.isPlatformEmbedded ? tx.t.J232TI : tx.t.vceuiL, {
                    helpCenterLink: th.A.getArticleURL(tm.MVz.END_TO_END_ENCRYPTION)
                })]
            });
        case tm.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(),
                    noticeType: r.type
                }), tx.intl.string(tx.t.iW0fcQ), (0, i.jsx)(_.eCN, {
                    href: th.A.getArticleURL(tm.MVz.WINDOWS_MEDIA_PACK),
                    target: "_blank",
                    noticeType: r.type,
                    children: tx.intl.string(tx.t.LQG5j6)
                })]
            });
        case tm.kqX.GENERIC:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(),
                    noticeType: r.type
                }), r.message, null != r.buttonText ? (0, i.jsx)(_.Z_L, {
                    onClick: r.callback,
                    noticeType: r.type,
                    children: r.buttonText
                }) : null]
            });
        case tm.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(),
                    noticeType: r.type
                }), r.message, null != r.buttonText ? (0, i.jsx)(_.Z_L, {
                    onClick: r.callback,
                    noticeType: r.type,
                    children: r.buttonText
                }) : null]
            });
        case tm.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => {
                        R.A.clearRemoteDisconnectVoiceChannelId(), tf()
                    },
                    noticeType: r.type
                }), tx.intl.string(tx.t.bOQ3jV), (0, i.jsx)(_.Z_L, {
                    onClick: () => {
                        let t = tE.A.getRemoteDisconnectVoiceChannelId();
                        null != t && null != tu.A.getChannel(t) && p.default.selectVoiceChannel(t)
                    },
                    noticeType: r.type,
                    children: tx.intl.string(tx.t.vD60Pv)
                })]
            });
        case tm.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => {
                        R.A.clearLastSessionVoiceChannelId(), tf()
                    },
                    noticeType: r.type
                }), tx.intl.string(tx.t.jY2lUA), (0, i.jsx)(_.Z_L, {
                    onClick: () => {
                        let t = tE.A.getLastSessionVoiceChannelId();
                        null != t && null != tu.A.getChannel(t) && p.default.selectVoiceChannel(t)
                    },
                    noticeType: r.type,
                    children: tx.intl.string(tx.t.vD60Pv)
                })]
            });
        case tm.kqX.SPOTIFY_AUTO_PAUSED:
            let tL = y.A.get(tm.fg2.SPOTIFY);
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(),
                    noticeType: r.type
                }), (0, i.jsx)("img", {
                    alt: "",
                    className: tM.tV,
                    src: (0, u.qB)(o) ? tL.icon.darkSVG : tL.icon.whiteSVG
                }), tx.intl.string(tx.t.D8Cp76), (0, i.jsx)(_.Z_L, {
                    onClick: () => (0, to.openUserSettings)(ta.X.VOICE_AND_VIDEO_PANEL),
                    noticeType: r.type,
                    children: tx.intl.string(tx.t.NiTd0e)
                }), (0, i.jsx)(_.MzZ, {
                    className: tM.uD,
                    href: th.A.getArticleURL(tm.MVz.SPOTIFY_AUTO_PAUSED),
                    target: "_blank",
                    children: tx.intl.string(tx.t.CiqAIU)
                })]
            });
        case tm.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [tx.intl.string(tx.t["f+Zaol"]), (0, i.jsx)(_.Z_L, {
                    noticeType: r.type,
                    onClick: () => c && null != e ? (0, $.Ze)(e) : U.R(),
                    children: tx.intl.string(tx.t.fiNVin)
                })]
            });
        case tm.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [tx.intl.string(tx.t["3sWbf3"]), (0, i.jsx)(_.Z_L, {
                    noticeType: r.type,
                    onClick: () => {
                        A.A.verifyResend(), E.A.show({
                            title: tx.intl.string(tx.t.LykQYk),
                            body: tx.intl.format(tx.t.azKEPy, {
                                email: t?.email
                            }),
                            cancelText: tx.intl.string(tx.t.Vm8akB),
                            onCancel: U.R
                        })
                    },
                    children: tx.intl.string(tx.t.WnX4J2)
                })]
            });
        case tm.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => h.A.ackScheduledMaintenance(),
                    noticeType: r.type
                }), tx.intl.format(tx.t["yb96S+"], r.metadata), (0, i.jsx)(_.eCN, {
                    href: `${tm.qF7.STATUS}/incidents/${r.metadata.id}`,
                    noticeType: r.type,
                    children: tx.intl.string(tx.t.hvVgAZ)
                })]
            });
        case tm.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(tD, {
                noticeType: r.type
            });
        case tm.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(tU, {
                noticeType: r.type
            });
        case tm.kqX.HARDWARE_MUTE:
            if (null != r.metadata) {
                let {
                    vendor: t,
                    model: e
                } = r.metadata;
                return (0, i.jsxs)(_.$Td, {
                    color: _.Hv$.DANGER,
                    children: [tx.intl.format(tx.t.qoDex7, {
                        vendorName: t.name,
                        modelName: e.name
                    }), (0, i.jsx)(_.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            T.A.setEnableHardwareMuteNotice(!1), tf()
                        }
                    }), (0, i.jsx)(_.eCN, {
                        href: e.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: r.type,
                        children: tx.intl.string(tx.t["Yl/Riu"])
                    })]
                })
            }
            if (J.A.getConfig({
                    location: "Notice.AudioIssueNoticeHardwareMute"
                }).enableHardwareSilenceWarning) return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.INFO,
                children: [tx.intl.format(tx.t.QMw8Fd, {}), (0, i.jsx)(_.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        T.A.setEnableHardwareMuteNotice(!1), tf()
                    }
                })]
            });
            return null;
        case tm.kqX.STREAMER_MODE:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.STREAMER_MODE,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(),
                    noticeType: tm.kqX.STREAMER_MODE
                }), tx.intl.string(tx.t.iEgBXp), (0, i.jsx)(_.Z_L, {
                    onClick: () => C.A.setEnabled(!1),
                    noticeType: tm.kqX.STREAMER_MODE,
                    children: tx.intl.string(tx.t.R9GHya)
                })]
            });
        case tm.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let {
                skuId: tG, applicationId: tv
            } = r.metadata, tB = tI.A.get(tG), tb = P.A.getApplication(tv);
            if (null == tB || null == tb) return null;
            let tw = {
                page: tm.liQ.IN_APP
            };
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => I.X(tB.id),
                    noticeType: tm.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                }), (0, i.jsx)(_.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tM.PC
                }), tx.intl.format(tx.t["g3MU/+"], {
                    applicationName: tb.name,
                    skuName: tB.name
                }), (0, i.jsx)(_.Z_L, {
                    noticeType: tm.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    onClick: () => (0, z.j)({
                        applicationId: tb.id,
                        skuId: tB.id,
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
                        context: __OVERLAY__ ? tm.BRT.OVERLAY : tm.BRT.APP
                    }).then(() => I.X(tB.id)),
                    children: tx.intl.string(tx.t.KEwPYx)
                })]
            });
        case tm.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let {
                skuId: t,
                applicationId: e
            } = r.metadata, n = tI.A.get(t), l = P.A.getApplication(e);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(),
                    noticeType: tm.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                }), (0, i.jsx)(_.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tM.PC
                }), tx.intl.format(tx.t.LquIKC, {
                    applicationName: l.name,
                    skuName: n.name
                }), (0, i.jsx)(_.zr9, {
                    children: (0, i.jsx)(a.N_, {
                        onClick: () => tf(),
                        to: {
                            pathname: tm.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                            state: {
                                scrollRestoration: !1
                            }
                        },
                        children: tx.intl.string(tx.t.hvVgAZ)
                    })
                })]
            })
        }
        case tm.kqX.SURVEY: {
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
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.CUSTOM,
                children: [(0, i.jsx)(_.PMB, {
                    noticeType: tm.kqX.SURVEY,
                    onClick: () => {
                        (0, m.pX)(e, !0)
                    }
                }), n, (0, i.jsx)(_.Z_L, {
                    noticeType: tm.kqX.SURVEY,
                    onClick: () => {
                        a ? (0, te.K)(o) : window.open(s, "_blank"), (0, m.pX)(e, !1)
                    },
                    children: l
                })]
            })
        }
        case tm.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [tx.intl.string(tx.t["ugxmk/"]), (0, i.jsx)(_.eCN, {
                    href: th.A.getArticleURL(tm.MVz.CORRUPT_INSTALLATION),
                    target: "_blank",
                    noticeType: r.type,
                    children: tx.intl.string(tx.t["6ik4Xk"])
                })]
            });
        case tm.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(),
                    noticeType: tm.kqX.VIDEO_UNSUPPORTED_BROWSER
                }), tx.intl.string(tx.t.wVjKGi), (0, i.jsx)(_.Z_L, {
                    noticeType: tm.kqX.VIDEO_UNSUPPORTED_BROWSER,
                    onClick: () => {
                        (0, _.mMO)(async () => {
                            let {
                                default: t
                            } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                            return e => (0, i.jsx)(t, {
                                source: "Video unsupported browser",
                                ...e
                            })
                        })
                    },
                    children: tx.intl.string(tx.t["1WjMbC"])
                })]
            });
        case tm.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let {
                error: tq
            } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(),
                    noticeType: tm.kqX.DISPATCH_ERROR
                }), tq?.displayMessage, (0, i.jsx)(_.Z_L, {
                    noticeType: tm.kqX.DISPATCH_ERROR,
                    onClick: () => (0, _.mMO)(async () => {
                        let {
                            default: t
                        } = await n.e("88014").then(n.bind(n, 627261));
                        return e => (0, i.jsx)(t, {
                            ...e
                        })
                    }),
                    children: tx.intl.string(tx.t.hvVgAZ)
                })]
            });
        case tm.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let {
                progress: t$, total: tX, name: tH
            } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DEFAULT,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => tf(),
                    noticeType: tm.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS
                }), (0, i.jsxs)(j.A, {
                    justify: j.A.Justify.CENTER,
                    children: [null != tH ? tx.intl.formatToPlainString(tx.t["pHj+z4"], {
                        name: `${tH}`,
                        progress: t$,
                        total: tX
                    }) : tx.intl.formatToPlainString(tx.t["lHZn+A"], {
                        progress: t$,
                        total: tX
                    }), (0, i.jsx)(_.y$y, {
                        type: _.y$y.Type.PULSING_ELLIPSIS,
                        className: tM.gO
                    })]
                })]
            });
        case tm.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != tN.A.testModeEmbeddedApplicationId) return (0, i.jsx)(_.$Td, {
                color: _.Hv$.WARNING,
                children: (0, i.jsxs)(j.A, {
                    justify: j.A.Justify.CENTER,
                    align: j.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: tx.intl.format(tx.t["1qxVe4"], {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(_.PMB, {
                        onClick: O.cL,
                        noticeType: tm.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
            return (0, i.jsx)(_.$Td, {
                color: _.Hv$.WARNING,
                children: (0, i.jsxs)(j.A, {
                    justify: j.A.Justify.CENTER,
                    align: j.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: tx.intl.format(tx.t.Fv5HrE, {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(_.PMB, {
                        onClick: O.cL,
                        noticeType: tm.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
        case tm.kqX.VIEWING_ROLES:
            return (0, i.jsx)(F.A, {});
        case tm.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(_.$Td, {
                color: td === tg.PremiumTypes.TIER_1 ? _.Hv$.PREMIUM_TIER_1 : td === tg.PremiumTypes.TIER_0 ? _.Hv$.PREMIUM_TIER_0 : _.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(_.PMB, {
                    noticeType: tm.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        tf(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), (0, i.jsx)(_.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: tM.PC
                }), td === tg.PremiumTypes.TIER_1 ? tx.intl.formatToPlainString(tx.t.fXv4wm, {
                    daysLeft: r.metadata.daysLeft
                }) : td === tg.PremiumTypes.TIER_0 ? tx.intl.formatToPlainString(tx.t.ZOHZMr, {
                    daysLeft: r.metadata.daysLeft
                }) : tx.intl.formatToPlainString(tx.t.outyHh, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(_.Z_L, {
                    noticeType: tm.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        tf(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, _.mMO)(async () => {
                            let {
                                default: t
                            } = await Promise.all([n.e("41353"), n.e("62175"), n.e("14704"), n.e("99590")]).then(n.bind(n, 174705));
                            return e => (0, i.jsx)(t, {
                                ...e,
                                daysLeft: r.metadata.daysLeft,
                                premiumType: td,
                                analyticsSource: "Nag Bar",
                                premiumSubscription: r.metadata.premiumSubscription
                            })
                        })
                    },
                    children: td === tg.PremiumTypes.TIER_1 ? tx.intl.string(tx.t.BkbUPM) : td === tg.PremiumTypes.TIER_0 ? tx.intl.string(tx.t.Px978X) : tx.intl.string(tx.t.LW5tCE)
                })]
            });
        case tm.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let {
                daysPastDue: tV, dismissUntil: tW
            } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [(0, i.jsx)(_.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        tf(tW)
                    }
                }), tx.intl.format(tx.t.zxU0Kp, {
                    daysPastDue: tV
                }), (0, i.jsx)(_.Z_L, {
                    noticeType: tm.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                    onClick: () => {
                        tf(tW), (0, to.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tx.intl.string(tx.t.q8rxeS)
                })]
            });
        case tm.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [(0, i.jsx)(_.PMB, {
                    noticeType: tm.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        tf(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), tx.intl.string(tx.t.LlZaoX), (0, i.jsx)(_.Z_L, {
                    noticeType: tm.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        tf(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, to.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tx.intl.string(tx.t["Zpd+Yq"])
                })]
            });
        case tm.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [(0, i.jsx)(_.PMB, {
                    noticeType: tm.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        tf(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), tx.intl.string(tx.t["30YfCr"]), (0, i.jsx)(_.Z_L, {
                    noticeType: tm.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        tf(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, to.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: tx.intl.string(tx.t.U5pKWA)
                })]
            });
        case tm.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [(0, i.jsx)(_.PMB, {
                    noticeType: tm.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        tf(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), td === tg.PremiumTypes.TIER_1 ? tx.intl.formatToPlainString(tx.t.b6QUvf, {
                    daysLeft: r.metadata.daysLeft
                }) : td === tg.PremiumTypes.TIER_0 ? tx.intl.formatToPlainString(tx.t["tURZ/M"], {
                    daysLeft: r.metadata.daysLeft
                }) : tx.intl.formatToPlainString(tx.t.AyC74I, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(_.Z_L, {
                    noticeType: tm.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        tf(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, to.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: td === tg.PremiumTypes.TIER_1 ? tx.intl.string(tx.t.lboF5O) : td === tg.PremiumTypes.TIER_0 ? tx.intl.string(tx.t["4UPwOq"]) : tx.intl.string(tx.t["P/VvGb"])
                })]
            });
        case tm.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(V.y, {
                buttonText: r.buttonText ?? tx.intl.string(tx.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => tf(),
                showCloseButton: !0
            });
        case tm.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(q.A, {
                guildId: e,
                analyticsLocations: s
            });
        case tm.kqX.QUARANTINED:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [tx.intl.string(tx.t.DVFJYf), (0, i.jsx)(_.eCN, {
                    href: tS.q,
                    target: "_blank",
                    noticeType: r.type,
                    children: tx.intl.string(tx.t.kvHdFN)
                }), (0, i.jsx)(_.MzZ, {
                    href: th.A.getArticleURL(tm.MVz.QUARANTINE),
                    target: "_blank",
                    className: tM.yw,
                    children: tx.intl.string(tx.t.hvVgAZ)
                })]
            });
        case tm.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let {
                dismissUntil: tF, decisionId: tK
            } = r.metadata;
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.WARNING,
                children: [(0, i.jsx)(_.PMB, {
                    noticeType: tm.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                    onClick: () => {
                        null != e && (0, w.wu)(e), tf(tF)
                    }
                }), tx.intl.string(tx.t.B8ruyY), (0, i.jsx)(_.zr9, {
                    onClick: () => {
                        null != e && (0, w.W5)(e, tK, () => {
                            tf(tF), (0, w.wu)(e)
                        })
                    },
                    children: tx.intl.string(tx.t.oX14El)
                }), null != e ? (0, i.jsx)(_.zr9, {
                    onClick: () => W.A.open(e, tm.BEX.GUILD_AUTOMOD, void 0, tm.nd0.AUTOMOD_MENTION_SPAM),
                    children: tx.intl.string(tx.t["1R7QIx"])
                }) : null]
            });
        case tm.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.DANGER,
                children: [(0, i.jsx)(_.PMB, {
                    noticeType: tm.kqX.QUESTS_PROGRESS_INTERRUPTION,
                    onClick: () => {
                        r.metadata?.streamKey != null && (0, tn.lk)(r.metadata.streamKey)
                    }
                }), tx.intl.string(tx.t.rOx44m)]
            });
        case tm.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(_.$Td, {
                color: _.Hv$.BRAND,
                children: [(0, i.jsx)(_.PMB, {
                    onClick: () => {
                        tf(r.metadata?.dismissUntil)
                    },
                    noticeType: tm.kqX.BLOCK_USER_FEEDBACK_NAGBAR
                }), tx.intl.string(tx.t["0klLS7"]), (0, i.jsx)(_.Z_L, {
                    onClick: () => {
                        (0, tl.$)(), tf(r.metadata?.dismissUntil)
                    },
                    noticeType: tm.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    children: tx.intl.string(tx.t.e4y2VM)
                })]
            });
        case tm.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(ti.A, {});
        case tm.kqX.PREMIUM_MARKETING_NAGBAR:
            return (0, i.jsx)(tt.A, {});
        case tm.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(ts.A, {});
        default:
            return null
    }
}) : null;

function tL() {
    let {
        analyticsLocations: t
    } = (0, M.Ay)(x.A.NOTICE);
    return (0, i.jsx)(M.f5, {
        value: t,
        children: (0, i.jsx)(tk, {})
    })
}