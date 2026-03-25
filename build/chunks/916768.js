/** chunk id: 916768 params = (module,exports,require) **/
n.d(t, {
    A: () => eU,
    w: () => eD
});
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(936504),
    o = n(299855),
    c = n.n(o),
    u = n(311907),
    d = n(397927),
    _ = n(157559),
    E = n(827343),
    A = n(830215),
    T = n(503703),
    I = n(912851),
    N = n(169604),
    p = n(956793),
    h = n(785796),
    m = n(55619),
    S = n(246605),
    C = n(271866),
    R = n(77729),
    g = n(573648),
    O = n(793574),
    y = n(688810),
    x = n(587895),
    P = n(315982),
    f = n(235986),
    D = n(420216),
    L = n(984870),
    U = n(626262),
    M = n(813803),
    j = n(487329),
    b = n(102609),
    G = n(49463),
    v = n(322223),
    k = n(137207),
    B = n(619029),
    w = n(202384),
    F = n(51758),
    W = n(571139),
    H = n(527012),
    V = n(997509),
    $ = n(475723),
    q = n(598733),
    X = n(801644),
    K = n(74848),
    z = n(39771),
    J = n(532794),
    Y = n(234419),
    Z = n(814249),
    Q = n(829219),
    ee = n(601730),
    et = n(722255),
    en = n(613491),
    ei = n(464473),
    el = n(780964),
    er = n(840065),
    es = n(459321),
    ea = n(594609),
    eo = n(734057),
    ec = n(430452),
    eu = n(383501),
    ed = n(967198),
    e_ = n(287809),
    eE = n(67480),
    eA = n(147964),
    eT = n(519057),
    eI = n(954571),
    eN = n(975571),
    ep = n(723702),
    eh = n(652215),
    em = n(502075),
    eS = n(788868),
    eC = n(831502),
    eR = n(731854),
    eg = n(985018),
    eO = n(237082);
let ey = e => {
        let {
            error: t,
            allowClick: n = !1
        } = e, l = (0, j.B1)(t)?.errorCode, r = eg.intl.formatToPlainString(eg.t.ejOT95, {
            errorCode: l
        }), s = (0, i.jsx)(d.Text, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: eO.fU,
            selectable: !0,
            children: r
        });
        return n ? (0, i.jsx)(d.DUT, {
            tag: "span",
            className: eO.wz,
            onClick: () => open(eN.A.getArticleURL(eh.MVz.AV_ERROR_CODES)),
            children: s
        }) : s
    },
    ex = e => {
        let {
            noticeType: t
        } = e;
        return (0, i.jsxs)(d.$Td, {
            color: d.Hv$.DANGER,
            children: [(0, i.jsx)(d.PMB, {
                noticeType: t,
                onClick: () => {
                    eD()
                }
            }), eg.intl.string(eg.t.o3zuYz), (0, i.jsx)(ey, {
                error: j.iy.NO_INPUT_DEVICES
            }), (0, i.jsx)(d.eCN, {
                href: eN.A.getArticleURL(eh.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: eg.intl.string(eg.t.RYKKox)
            })]
        })
    };

function eP(e) {
    return (0, ep.isWindows)() && c().satisfies(R.A?.os.release, em.PH) ? `ms-settings:sound-properties?endpointId=${e}` : "ms-settings:sound"
}

function ef(e) {
    let t, n, {
            noticeType: l
        } = e,
        r = (0, K.x5)(eR.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        {
            inputDeviceOSMuted: a,
            inputDeviceOSVolume: o
        } = (0, u.cf)([ec.Ay], () => ({
            inputDeviceOSMuted: ec.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: ec.Ay.getInputDeviceOSVolume()
        })),
        c = !1;
    return !0 === a ? (t = eg.intl.string(eg.t.ppW3ri), n = (0, i.jsx)(d.eCN, {
        href: eP(s),
        noticeType: l,
        children: eg.intl.string(eg.t.QghSIq)
    })) : 0 === o ? (t = eg.intl.string(eg.t.j4gGA4), n = (0, i.jsx)(d.eCN, {
        href: eP(s),
        noticeType: l,
        children: eg.intl.string(eg.t.QghSIq)
    })) : ec.Ay.supports(eR.O5.LOOPBACK) ? (t = eg.intl.string(eg.t.dNAJ18), c = !0, n = (0, i.jsx)(d.zr9, {
        onClick: () => {
            (0, er.openUserSettings)(el.X.VOICE_AND_VIDEO_PANEL)
        },
        children: eg.intl.string(eg.t.I6YlB4)
    })) : (t = eg.intl.string(eg.t.nCO9bI), n = (0, i.jsx)(d.eCN, {
        href: eN.A.getArticleURL(eh.MVz.NO_INPUT_DETECTED),
        noticeType: l,
        children: eg.intl.string(eg.t.RYKKox)
    })), (0, i.jsxs)(d.$Td, {
        color: d.Hv$.DANGER,
        children: [(0, i.jsx)(d.PMB, {
            noticeType: l,
            onClick: () => {
                eD(), (0, ea.h)()
            }
        }), t, (0, i.jsx)(ey, {
            allowClick: c,
            error: j.iy.NO_AUDIO_INPUT_DETECTED
        }), n]
    })
}

function eD(e) {
    I.A.dismiss(null != e ? {
        untilAtLeast: s()(e)
    } : void 0)
}
let eL = l.memo(function() {
    let e = (0, u.bG)([e_.default], () => e_.default.getCurrentUser()),
        t = (0, u.bG)([ed.A], () => ed.A.getGuildId()),
        r = (0, u.bG)([eT.Ay], () => eT.Ay.getNotice()),
        {
            analyticsLocations: s
        } = (0, y.Ay)(),
        o = (0, F.H)(t),
        c = (0, Y.V)();
    if (l.useEffect(() => {
            if (r?.type != null) {
                let e;
                if (null == c && (r.type === eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === eh.kqX.PREMIUM_TIER_0_TRIAL_ENDING)) return;
                let n = {};
                null != t && (n.guild_id = t), c?.trial_id != null && (n.trial_id = c.trial_id), e = {
                    notice_type: r.type,
                    ...n
                }, eI.default.track(eh.HAw.APP_NOTICE_VIEWED, e)
            }
        }, [r?.type, t, c]), l.useEffect(() => {
            if (null != r && r.type === eh.kqX.SURVEY && null != r.metadata) {
                let {
                    metadata: e
                } = r, t = G.A.getUserExperimentDescriptor(e.id);
                null != t && (0, b.LQ)(e.id, t), (async () => {
                    r.metadata?.id != null && await (0, S.oX)(r.metadata?.id)
                })()
            }
        }, [r]), null == r) return null;
    let I = null != r.type ? eT.Re[r.type] : null,
        R = null != r.type ? eT.k3[r.type] : null,
        O = null != r.type ? eT.f7[r.type] : null,
        j = eT.pe[r.type];
    if (null != I) return (0, i.jsx)(U.$, {
        dismissibleContent: I,
        noticeType: r.type
    });
    if (null != R) return (0, i.jsx)(M._, {
        dismissibleContent: R,
        noticeType: r.type
    });
    if (null != O) return (0, i.jsx)(L.T, {
        dismissibleContent: O
    });
    if (null != j) return (0, i.jsx)(D.r, {
        dismissibleContent: j,
        noticeType: r.type
    });
    let K = r.metadata?.premiumType;
    switch (r.type) {
        case eh.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(es.A, {});
        case eh.kqX.LURKING_GUILD:
            return (0, i.jsx)(q.A, {});
        case eh.kqX.PENDING_MEMBER:
            return (0, i.jsx)(W.A, {});
        case eh.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(en.A, {});
        case eh.kqX.GUILD_RAID_NOTIFICATION:
            let {
                dismissUntil: ea
            } = r.metadata;
            return (0, i.jsx)(v.A, {
                onDismiss: () => eD(ea)
            });
        case eh.kqX.WIN32_DEPRECATED_MESSAGE:
            let {
                dismissUntil: ec
            } = r.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(ec),
                    noticeType: r.type
                }), eg.intl.format(eg.t["08KQ1P"], {
                    helpCenterLink: eN.A.getArticleURL(eh.MVz.WIN32_DEPRECATE)
                })]
            });
        case eh.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let {
                dismissUntil: em
            } = r.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(em),
                    noticeType: r.type
                }), eg.intl.format(eg.t["8Je+dX"], {
                    helpCenterLink: eN.A.getArticleURL(eh.MVz.WIN7_8_DEPRECATE)
                })]
            });
        case eh.kqX.WIN_COMPAT_MODE_MESSAGE:
            let {
                dismissUntil: eR
            } = r.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(eR),
                    noticeType: r.type
                }), eg.intl.string(eg.t["9DJgOg"])]
            });
        case eh.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let {
                dismissUntil: ey
            } = r.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(ey),
                    noticeType: r.type
                }), eg.intl.format(eg.t.q8VPLo, {
                    helpCenterLink: eN.A.getArticleURL(eh.MVz.MACOS_19_DEPRECATE)
                })]
            });
        case eh.kqX.E2EE_UPDATE_REQUIRED:
            let {
                dismissUntil: eP
            } = r.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(eP),
                    noticeType: r.type
                }), eg.intl.format(ep.isPlatformEmbedded ? eg.t.J232TI : eg.t.vceuiL, {
                    helpCenterLink: eN.A.getArticleURL(eh.MVz.END_TO_END_ENCRYPTION)
                })]
            });
        case eh.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(),
                    noticeType: r.type
                }), eg.intl.string(eg.t.iW0fcQ), (0, i.jsx)(d.eCN, {
                    href: eN.A.getArticleURL(eh.MVz.WINDOWS_MEDIA_PACK),
                    target: "_blank",
                    noticeType: r.type,
                    children: eg.intl.string(eg.t.LQG5j6)
                })]
            });
        case eh.kqX.GENERIC:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(),
                    noticeType: r.type
                }), r.message, null != r.buttonText ? (0, i.jsx)(d.Z_L, {
                    onClick: r.callback,
                    noticeType: r.type,
                    children: r.buttonText
                }) : null]
            });
        case eh.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(),
                    noticeType: r.type
                }), r.message, null != r.buttonText ? (0, i.jsx)(d.Z_L, {
                    onClick: r.callback,
                    noticeType: r.type,
                    children: r.buttonText
                }) : null]
            });
        case eh.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => {
                        N.A.clearRemoteDisconnectVoiceChannelId(), eD()
                    },
                    noticeType: r.type
                }), eg.intl.string(eg.t.bOQ3jV), (0, i.jsx)(d.Z_L, {
                    onClick: () => {
                        let e = eu.A.getRemoteDisconnectVoiceChannelId();
                        null != e && null != eo.A.getChannel(e) && p.default.selectVoiceChannel(e)
                    },
                    noticeType: r.type,
                    children: eg.intl.string(eg.t.vD60Pv)
                })]
            });
        case eh.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => {
                        N.A.clearLastSessionVoiceChannelId(), eD()
                    },
                    noticeType: r.type
                }), eg.intl.string(eg.t.jY2lUA), (0, i.jsx)(d.Z_L, {
                    onClick: () => {
                        let e = eu.A.getLastSessionVoiceChannelId();
                        null != e && null != eo.A.getChannel(e) && p.default.selectVoiceChannel(e)
                    },
                    noticeType: r.type,
                    children: eg.intl.string(eg.t.vD60Pv)
                })]
            });
        case eh.kqX.SPOTIFY_AUTO_PAUSED:
            let eL = g.A.get(eh.fg2.SPOTIFY);
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(),
                    noticeType: r.type
                }), (0, i.jsx)("img", {
                    alt: "",
                    className: eO.tV,
                    src: eL.icon.whiteSVG
                }), eg.intl.string(eg.t.D8Cp76), (0, i.jsx)(d.Z_L, {
                    onClick: () => (0, er.openUserSettings)(el.X.VOICE_AND_VIDEO_PANEL),
                    noticeType: r.type,
                    children: eg.intl.string(eg.t.NiTd0e)
                }), (0, i.jsx)(d.MzZ, {
                    className: eO.N0,
                    href: eN.A.getArticleURL(eh.MVz.SPOTIFY_AUTO_PAUSED),
                    target: "_blank",
                    children: eg.intl.string(eg.t.CiqAIU)
                })]
            });
        case eh.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [eg.intl.string(eg.t["f+Zaol"]), (0, i.jsx)(d.Z_L, {
                    noticeType: r.type,
                    onClick: () => o && null != t ? (0, w.Ze)(t) : P.R(),
                    children: eg.intl.string(eg.t.fiNVin)
                })]
            });
        case eh.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [eg.intl.string(eg.t["3sWbf3"]), (0, i.jsx)(d.Z_L, {
                    noticeType: r.type,
                    onClick: () => {
                        A.A.verifyResend(), _.A.show({
                            title: eg.intl.string(eg.t.LykQYk),
                            body: eg.intl.format(eg.t.azKEPy, {
                                email: e?.email
                            }),
                            cancelText: eg.intl.string(eg.t.Vm8akB),
                            onCancel: P.R
                        })
                    },
                    children: eg.intl.string(eg.t.WnX4J2)
                })]
            });
        case eh.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => h.A.ackScheduledMaintenance(),
                    noticeType: r.type
                }), eg.intl.format(eg.t["yb96S+"], r.metadata), (0, i.jsx)(d.eCN, {
                    href: `${eh.qF7.STATUS}/incidents/${r.metadata.id}`,
                    noticeType: r.type,
                    children: eg.intl.string(eg.t.hvVgAZ)
                })]
            });
        case eh.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(ef, {
                noticeType: r.type
            });
        case eh.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(ex, {
                noticeType: r.type
            });
        case eh.kqX.HARDWARE_MUTE:
            if (null != r.metadata) {
                let {
                    vendor: e,
                    model: t
                } = r.metadata;
                return (0, i.jsxs)(d.$Td, {
                    color: d.Hv$.DANGER,
                    children: [eg.intl.format(eg.t.qoDex7, {
                        vendorName: e.name,
                        modelName: t.name
                    }), (0, i.jsx)(d.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            E.A.setEnableHardwareMuteNotice(!1), eD()
                        }
                    }), (0, i.jsx)(d.eCN, {
                        href: t.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: r.type,
                        children: eg.intl.string(eg.t["Yl/Riu"])
                    })]
                })
            }
            if (X.A.getConfig({
                    location: "Notice.AudioIssueNoticeHardwareMute"
                }).enableHardwareSilenceWarning) return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.INFO,
                children: [eg.intl.format(eg.t.QMw8Fd, {}), (0, i.jsx)(d.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        E.A.setEnableHardwareMuteNotice(!1), eD()
                    }
                })]
            });
            return null;
        case eh.kqX.STREAMER_MODE:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.STREAMER_MODE,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(),
                    noticeType: eh.kqX.STREAMER_MODE
                }), eg.intl.string(eg.t.iEgBXp), (0, i.jsx)(d.Z_L, {
                    onClick: () => m.A.setEnabled(!1),
                    noticeType: eh.kqX.STREAMER_MODE,
                    children: eg.intl.string(eg.t.R9GHya)
                })]
            });
        case eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let {
                skuId: eU, applicationId: eM
            } = r.metadata, ej = eE.A.get(eU), eb = x.A.getApplication(eM);
            if (null == ej || null == eb) return null;
            let eG = {
                page: eh.liQ.IN_APP
            };
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => T.X(ej.id),
                    noticeType: eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                }), (0, i.jsx)(d.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: eO.PC
                }), eg.intl.format(eg.t["g3MU/+"], {
                    applicationName: eb.name,
                    skuName: ej.name
                }), (0, i.jsx)(d.Z_L, {
                    noticeType: eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    onClick: () => (0, z.j)({
                        applicationId: eb.id,
                        skuId: ej.id,
                        openPremiumPaymentModal: () => {
                            (0, J.A)({
                                initialPlanId: null,
                                subscriptionTier: eS.pe.TIER_2,
                                analyticsLocations: s,
                                analyticsObject: eG
                            })
                        },
                        analyticsLocations: s,
                        analyticsLocationObject: eG,
                        context: __OVERLAY__ ? eh.BRT.OVERLAY : eh.BRT.APP
                    }).then(() => T.X(ej.id)),
                    children: eg.intl.string(eg.t.KEwPYx)
                })]
            });
        case eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let {
                skuId: e,
                applicationId: t
            } = r.metadata, n = eE.A.get(e), l = x.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(),
                    noticeType: eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                }), (0, i.jsx)(d.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: eO.PC
                }), eg.intl.format(eg.t.LquIKC, {
                    applicationName: l.name,
                    skuName: n.name
                }), (0, i.jsx)(d.zr9, {
                    children: (0, i.jsx)(a.N_, {
                        onClick: () => eD(),
                        to: {
                            pathname: eh.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                            state: {
                                scrollRestoration: !1
                            }
                        },
                        children: eg.intl.string(eg.t.hvVgAZ)
                    })
                })]
            })
        }
        case eh.kqX.SURVEY: {
            let e = r.metadata;
            if (null == e) return null;
            let {
                key: t,
                prompt: n,
                cta: l,
                url: s,
                embedded: a,
                id: o
            } = e;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.CUSTOM,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: eh.kqX.SURVEY,
                    onClick: () => {
                        (0, S.pX)(t, !0)
                    }
                }), n, (0, i.jsx)(d.Z_L, {
                    noticeType: eh.kqX.SURVEY,
                    onClick: () => {
                        a ? (0, Z.K)(o) : window.open(s, "_blank"), (0, S.pX)(t, !1)
                    },
                    children: l
                })]
            })
        }
        case eh.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [eg.intl.string(eg.t["ugxmk/"]), (0, i.jsx)(d.eCN, {
                    href: eN.A.getArticleURL(eh.MVz.CORRUPT_INSTALLATION),
                    target: "_blank",
                    noticeType: r.type,
                    children: eg.intl.string(eg.t["6ik4Xk"])
                })]
            });
        case eh.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(),
                    noticeType: eh.kqX.VIDEO_UNSUPPORTED_BROWSER
                }), eg.intl.string(eg.t.wVjKGi), (0, i.jsx)(d.Z_L, {
                    noticeType: eh.kqX.VIDEO_UNSUPPORTED_BROWSER,
                    onClick: () => {
                        (0, d.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                            return t => (0, i.jsx)(e, {
                                source: "Video unsupported browser",
                                ...t
                            })
                        })
                    },
                    children: eg.intl.string(eg.t["1WjMbC"])
                })]
            });
        case eh.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let {
                error: ev
            } = r.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(),
                    noticeType: eh.kqX.DISPATCH_ERROR
                }), ev?.displayMessage, (0, i.jsx)(d.Z_L, {
                    noticeType: eh.kqX.DISPATCH_ERROR,
                    onClick: () => (0, d.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("88014").then(n.bind(n, 627261));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    }),
                    children: eg.intl.string(eg.t.hvVgAZ)
                })]
            });
        case eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let {
                progress: ek, total: eB, name: ew
            } = r.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DEFAULT,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => eD(),
                    noticeType: eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS
                }), (0, i.jsxs)(f.A, {
                    justify: f.A.Justify.CENTER,
                    children: [null != ew ? eg.intl.formatToPlainString(eg.t["pHj+z4"], {
                        name: `${ew}`,
                        progress: ek,
                        total: eB
                    }) : eg.intl.formatToPlainString(eg.t["lHZn+A"], {
                        progress: ek,
                        total: eB
                    }), (0, i.jsx)(d.y$y, {
                        type: d.y$y.Type.PULSING_ELLIPSIS,
                        className: eO.gO
                    })]
                })]
            });
        case eh.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != eA.A.testModeEmbeddedApplicationId) return (0, i.jsx)(d.$Td, {
                color: d.Hv$.WARNING,
                children: (0, i.jsxs)(f.A, {
                    justify: f.A.Justify.CENTER,
                    align: f.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: eg.intl.format(eg.t["1qxVe4"], {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(d.PMB, {
                        onClick: C.cL,
                        noticeType: eh.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
            return (0, i.jsx)(d.$Td, {
                color: d.Hv$.WARNING,
                children: (0, i.jsxs)(f.A, {
                    justify: f.A.Justify.CENTER,
                    align: f.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: eg.intl.format(eg.t.Fv5HrE, {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(d.PMB, {
                        onClick: C.cL,
                        noticeType: eh.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
        case eh.kqX.VIEWING_ROLES:
            return (0, i.jsx)($.A, {});
        case eh.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(d.$Td, {
                color: K === eS.PremiumTypes.TIER_1 ? d.Hv$.PREMIUM_TIER_1 : K === eS.PremiumTypes.TIER_0 ? d.Hv$.PREMIUM_TIER_0 : d.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: eh.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        eD(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), (0, i.jsx)(d.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: eO.PC
                }), K === eS.PremiumTypes.TIER_1 ? eg.intl.formatToPlainString(eg.t.fXv4wm, {
                    daysLeft: r.metadata.daysLeft
                }) : K === eS.PremiumTypes.TIER_0 ? eg.intl.formatToPlainString(eg.t.ZOHZMr, {
                    daysLeft: r.metadata.daysLeft
                }) : eg.intl.formatToPlainString(eg.t.outyHh, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(d.Z_L, {
                    noticeType: eh.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        eD(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, d.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("41353"), n.e("62175"), n.e("14704"), n.e("94934")]).then(n.bind(n, 174705));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                daysLeft: r.metadata.daysLeft,
                                premiumType: K,
                                analyticsSource: "Nag Bar",
                                premiumSubscription: r.metadata.premiumSubscription
                            })
                        })
                    },
                    children: K === eS.PremiumTypes.TIER_1 ? eg.intl.string(eg.t.BkbUPM) : K === eS.PremiumTypes.TIER_0 ? eg.intl.string(eg.t.Px978X) : eg.intl.string(eg.t.LW5tCE)
                })]
            });
        case eh.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let {
                daysPastDue: eF, dismissUntil: eW
            } = r.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        eD(eW)
                    }
                }), eg.intl.format(eg.t.zxU0Kp, {
                    daysPastDue: eF
                }), (0, i.jsx)(d.Z_L, {
                    noticeType: eh.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                    onClick: () => {
                        eD(eW), (0, er.openUserSettings)(el.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: eg.intl.string(eg.t.q8rxeS)
                })]
            });
        case eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        eD(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), eg.intl.string(eg.t.LlZaoX), (0, i.jsx)(d.Z_L, {
                    noticeType: eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        eD(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, er.openUserSettings)(el.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: eg.intl.string(eg.t["Zpd+Yq"])
                })]
            });
        case eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        eD(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), eg.intl.string(eg.t["30YfCr"]), (0, i.jsx)(d.Z_L, {
                    noticeType: eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        eD(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, er.openUserSettings)(el.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: eg.intl.string(eg.t.U5pKWA)
                })]
            });
        case eh.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: eh.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        eD(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), K === eS.PremiumTypes.TIER_1 ? eg.intl.formatToPlainString(eg.t.b6QUvf, {
                    daysLeft: r.metadata.daysLeft
                }) : K === eS.PremiumTypes.TIER_0 ? eg.intl.formatToPlainString(eg.t["tURZ/M"], {
                    daysLeft: r.metadata.daysLeft
                }) : eg.intl.formatToPlainString(eg.t.AyC74I, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(d.Z_L, {
                    noticeType: eh.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        eD(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, er.openUserSettings)(el.X.SUBSCRIPTIONS_PANEL)
                    },
                    children: K === eS.PremiumTypes.TIER_1 ? eg.intl.string(eg.t.lboF5O) : K === eS.PremiumTypes.TIER_0 ? eg.intl.string(eg.t["4UPwOq"]) : eg.intl.string(eg.t["P/VvGb"])
                })]
            });
        case eh.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(H.y, {
                buttonText: r.buttonText ?? eg.intl.string(eg.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => eD(),
                showCloseButton: !0
            });
        case eh.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(B.A, {
                guildId: t,
                analyticsLocations: s
            });
        case eh.kqX.QUARANTINED:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [eg.intl.string(eg.t.DVFJYf), (0, i.jsx)(d.eCN, {
                    href: eC.q,
                    target: "_blank",
                    noticeType: r.type,
                    children: eg.intl.string(eg.t.kvHdFN)
                }), (0, i.jsx)(d.MzZ, {
                    href: eN.A.getArticleURL(eh.MVz.QUARANTINE),
                    target: "_blank",
                    className: eO.yw,
                    children: eg.intl.string(eg.t.hvVgAZ)
                })]
            });
        case eh.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let {
                dismissUntil: eH, decisionId: eV
            } = r.metadata;
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.WARNING,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: eh.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                    onClick: () => {
                        null != t && (0, k.wu)(t), eD(eH)
                    }
                }), eg.intl.string(eg.t.B8ruyY), (0, i.jsx)(d.zr9, {
                    onClick: () => {
                        null != t && (0, k.W5)(t, eV, () => {
                            eD(eH), (0, k.wu)(t)
                        })
                    },
                    children: eg.intl.string(eg.t.oX14El)
                }), null != t ? (0, i.jsx)(d.zr9, {
                    onClick: () => V.A.open(t, eh.BEX.GUILD_AUTOMOD, void 0, eh.nd0.AUTOMOD_MENTION_SPAM),
                    children: eg.intl.string(eg.t["1R7QIx"])
                }) : null]
            });
        case eh.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.DANGER,
                children: [(0, i.jsx)(d.PMB, {
                    noticeType: eh.kqX.QUESTS_PROGRESS_INTERRUPTION,
                    onClick: () => {
                        r.metadata?.streamKey != null && (0, Q.lk)(r.metadata.streamKey)
                    }
                }), eg.intl.string(eg.t.rOx44m)]
            });
        case eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(d.$Td, {
                color: d.Hv$.BRAND,
                children: [(0, i.jsx)(d.PMB, {
                    onClick: () => {
                        eD(r.metadata?.dismissUntil)
                    },
                    noticeType: eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR
                }), eg.intl.string(eg.t["0klLS7"]), (0, i.jsx)(d.Z_L, {
                    onClick: () => {
                        (0, et.$)(), eD(r.metadata?.dismissUntil)
                    },
                    noticeType: eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    children: eg.intl.string(eg.t.e4y2VM)
                })]
            });
        case eh.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(ee.A, {});
        case eh.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(ei.A, {});
        default:
            return null
    }
});

function eU() {
    let {
        analyticsLocations: e
    } = (0, y.Ay)(O.A.NOTICE);
    return (0, i.jsx)(y.f5, {
        value: e,
        children: (0, i.jsx)(eL, {})
    })
}