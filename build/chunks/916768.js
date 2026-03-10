/** chunk id: 916768 params = (module,exports,require) **/
n.d(t, {
    A: () => ek,
    w: () => ej
});
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(936504),
    o = n(299855),
    c = n.n(o),
    d = n(311907),
    u = n(397927),
    _ = n(157559),
    E = n(827343),
    T = n(830215),
    A = n(503703),
    I = n(912851),
    N = n(169604),
    p = n(956793),
    R = n(785796),
    S = n(800342),
    m = n(55619),
    h = n(246605),
    g = n(271866),
    C = n(86980),
    O = n(322337),
    y = n(77729),
    x = n(573648),
    P = n(793574),
    D = n(688810),
    U = n(587895),
    f = n(315982),
    M = n(235986),
    L = n(420216),
    j = n(984870),
    b = n(626262),
    k = n(813803),
    G = n(487329),
    v = n(102609),
    B = n(49463),
    w = n(322223),
    H = n(137207),
    V = n(619029),
    F = n(202384),
    $ = n(51758),
    q = n(571139),
    W = n(527012),
    X = n(997509),
    K = n(475723),
    z = n(598733),
    J = n(801644),
    Y = n(37770),
    Z = n(74848),
    Q = n(532794),
    ee = n(234419),
    et = n(814249),
    en = n(829219),
    ei = n(597936),
    el = n(601730),
    er = n(722255),
    es = n(613491),
    ea = n(464473),
    eo = n(780964),
    ec = n(840065),
    ed = n(459321),
    eu = n(594609),
    e_ = n(734057),
    eE = n(430452),
    eT = n(383501),
    eA = n(967198),
    eI = n(287809),
    eN = n(67480),
    ep = n(147964),
    eR = n(519057),
    eS = n(954571),
    em = n(975571),
    eh = n(723702),
    eg = n(652215),
    eC = n(502075),
    eO = n(788868),
    ey = n(831502),
    ex = n(731854),
    eP = n(985018),
    eD = n(237082);
let eU = e => {
        let {
            error: t,
            allowClick: n = !1
        } = e, l = (0, G.B1)(t)?.errorCode, r = eP.intl.formatToPlainString(eP.t.ejOT95, {
            errorCode: l
        }), s = (0, i.jsx)(u.Text, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: eD.fU,
            selectable: !0,
            children: r
        });
        return n ? (0, i.jsx)(u.DUT, {
            tag: "span",
            className: eD.wz,
            onClick: () => n && open(em.A.getArticleURL(eg.MVz.AV_ERROR_CODES)),
            children: s
        }) : s
    },
    ef = e => {
        let {
            noticeType: t
        } = e;
        return (0, i.jsxs)(u.$Td, {
            color: u.Hv$.DANGER,
            children: [(0, i.jsx)(u.PMB, {
                noticeType: t,
                onClick: () => {
                    ej()
                }
            }), eP.intl.string(eP.t.o3zuYz), (0, i.jsx)(eU, {
                error: G.iy.NO_INPUT_DEVICES
            }), (0, i.jsx)(u.eCN, {
                href: em.A.getArticleURL(eg.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: eP.intl.string(eP.t.RYKKox)
            })]
        })
    };

function eM(e) {
    return (0, eh.isWindows)() && c().satisfies(y.A?.os.release, eC.PH) ? `ms-settings:sound-properties?endpointId=${e}` : "ms-settings:sound"
}

function eL(e) {
    let t, n, {
            noticeType: l
        } = e,
        {
            windowsMuteAndZeroVolumeDetectionEnabled: r
        } = (0, Y.I)({
            location: "AudioIssueNoticeNoInput"
        }),
        s = (0, Z.x5)(ex.oh.AUDIO_INPUT),
        a = s?.guid ?? "",
        {
            inputDeviceOSMuted: o,
            inputDeviceOSVolume: _
        } = (0, d.cf)([eE.Ay], () => ({
            inputDeviceOSMuted: eE.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: eE.Ay.getInputDeviceOSVolume()
        })),
        E = (0, eh.isWindows)() && c().satisfies(y.A?.os.release, eC.PH) && r,
        T = !1;
    return E && !0 === o ? (t = eP.intl.string(eP.t.ppW3ri), n = (0, i.jsx)(u.eCN, {
        href: eM(a),
        noticeType: l,
        children: eP.intl.string(eP.t.QghSIq)
    })) : E && 0 === _ ? (t = eP.intl.string(eP.t.j4gGA4), n = (0, i.jsx)(u.eCN, {
        href: eM(a),
        noticeType: l,
        children: eP.intl.string(eP.t.QghSIq)
    })) : eE.Ay.supports(ex.O5.LOOPBACK) ? (t = eP.intl.string(eP.t.dNAJ18), T = !0, n = (0, i.jsx)(u.zr9, {
        onClick: () => {
            (0, ec.openUserSettings)(eo.X.VOICE_AND_VIDEO_PANEL, {
                section: eg.nc_.VOICE
            })
        },
        children: eP.intl.string(eP.t.I6YlB4)
    })) : (t = eP.intl.string(eP.t.nCO9bI), n = (0, i.jsx)(u.eCN, {
        href: em.A.getArticleURL(eg.MVz.NO_INPUT_DETECTED),
        noticeType: l,
        children: eP.intl.string(eP.t.RYKKox)
    })), (0, i.jsxs)(u.$Td, {
        color: u.Hv$.DANGER,
        children: [(0, i.jsx)(u.PMB, {
            noticeType: l,
            onClick: () => {
                ej(), (0, eu.h)()
            }
        }), t, (0, i.jsx)(eU, {
            allowClick: T,
            error: G.iy.NO_AUDIO_INPUT_DETECTED
        }), n]
    })
}

function ej(e) {
    I.A.dismiss(null != e ? {
        untilAtLeast: s()(e)
    } : void 0)
}
let eb = l.memo(function() {
    let e = (0, d.bG)([eI.default], () => eI.default.getCurrentUser()),
        t = (0, d.bG)([eA.A], () => eA.A.getGuildId()),
        r = (0, d.bG)([eR.Ay], () => eR.Ay.getNotice()),
        {
            analyticsLocations: s
        } = (0, D.Ay)(),
        o = (0, $.H)(t),
        c = (0, ee.V)();
    if (l.useEffect(() => {
            if (r?.type != null) {
                let e;
                if (null == c && (r.type === eg.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === eg.kqX.PREMIUM_TIER_0_TRIAL_ENDING)) return;
                let n = {};
                null != t && (n.guild_id = t), c?.trial_id != null && (n.trial_id = c.trial_id), e = {
                    notice_type: r.type,
                    ...n
                }, eS.default.track(eg.HAw.APP_NOTICE_VIEWED, e)
            }
        }, [r?.type, t, c]), l.useEffect(() => {
            if (null != r && r.type === eg.kqX.SURVEY && null != r.metadata) {
                let {
                    metadata: e
                } = r, t = B.A.getUserExperimentDescriptor(e.id);
                null != t && (0, v.LQ)(e.id, t), (async () => {
                    r.metadata?.id != null && await (0, h.oX)(r.metadata?.id)
                })()
            }
        }, [r]), null == r) return null;
    let I = null != r.type ? eR.Re[r.type] : null,
        y = null != r.type ? eR.k3[r.type] : null,
        P = null != r.type ? eR.f7[r.type] : null,
        G = eR.pe[r.type];
    if (null != I) return (0, i.jsx)(b.$, {
        dismissibleContent: I,
        noticeType: r.type
    });
    if (null != y) return (0, i.jsx)(k._, {
        dismissibleContent: y,
        noticeType: r.type
    });
    if (null != P) return (0, i.jsx)(j.T, {
        dismissibleContent: P
    });
    if (null != G) return (0, i.jsx)(L.r, {
        dismissibleContent: G,
        noticeType: r.type
    });
    let Y = r.metadata?.premiumType;
    switch (r.type) {
        case eg.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(ed.A, {});
        case eg.kqX.LURKING_GUILD:
            return (0, i.jsx)(z.A, {});
        case eg.kqX.PENDING_MEMBER:
            return (0, i.jsx)(q.A, {});
        case eg.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(es.A, {});
        case eg.kqX.GUILD_RAID_NOTIFICATION:
            let {
                dismissUntil: Z
            } = r.metadata;
            return (0, i.jsx)(w.A, {
                onDismiss: () => ej(Z)
            });
        case eg.kqX.WIN32_DEPRECATED_MESSAGE:
            let {
                dismissUntil: eu
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(eu),
                    noticeType: r.type
                }), eP.intl.format(eP.t["08KQ1P"], {
                    helpCenterLink: em.A.getArticleURL(eg.MVz.WIN32_DEPRECATE)
                })]
            });
        case eg.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let {
                dismissUntil: eE
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(eE),
                    noticeType: r.type
                }), eP.intl.format(eP.t["8Je+dX"], {
                    helpCenterLink: em.A.getArticleURL(eg.MVz.WIN7_8_DEPRECATE)
                })]
            });
        case eg.kqX.WIN_COMPAT_MODE_MESSAGE:
            let {
                dismissUntil: eC
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(eC),
                    noticeType: r.type
                }), eP.intl.string(eP.t["9DJgOg"])]
            });
        case eg.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let {
                dismissUntil: ex
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(ex),
                    noticeType: r.type
                }), eP.intl.format(eP.t.q8VPLo, {
                    helpCenterLink: em.A.getArticleURL(eg.MVz.MACOS_19_DEPRECATE)
                })]
            });
        case eg.kqX.E2EE_UPDATE_REQUIRED:
            let {
                dismissUntil: eU
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(eU),
                    noticeType: r.type
                }), eP.intl.format(eh.isPlatformEmbedded ? eP.t.J232TI : eP.t.vceuiL, {
                    helpCenterLink: em.A.getArticleURL(eg.MVz.END_TO_END_ENCRYPTION)
                })]
            });
        case eg.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(),
                    noticeType: r.type
                }), eP.intl.string(eP.t.iW0fcQ), (0, i.jsx)(u.eCN, {
                    href: em.A.getArticleURL(eg.MVz.WINDOWS_MEDIA_PACK),
                    target: "_blank",
                    noticeType: r.type,
                    children: eP.intl.string(eP.t.LQG5j6)
                })]
            });
        case eg.kqX.GENERIC:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(),
                    noticeType: r.type
                }), r.message, null != r.buttonText ? (0, i.jsx)(u.Z_L, {
                    onClick: r.callback,
                    noticeType: r.type,
                    children: r.buttonText
                }) : null]
            });
        case eg.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(),
                    noticeType: r.type
                }), r.message, null != r.buttonText ? (0, i.jsx)(u.Z_L, {
                    onClick: r.callback,
                    noticeType: r.type,
                    children: r.buttonText
                }) : null]
            });
        case eg.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => {
                        N.A.clearRemoteDisconnectVoiceChannelId(), ej()
                    },
                    noticeType: r.type
                }), eP.intl.string(eP.t.bOQ3jV), (0, i.jsx)(u.Z_L, {
                    onClick: () => {
                        let e = eT.A.getRemoteDisconnectVoiceChannelId();
                        null != e && null != e_.A.getChannel(e) && p.default.selectVoiceChannel(e)
                    },
                    noticeType: r.type,
                    children: eP.intl.string(eP.t.vD60Pv)
                })]
            });
        case eg.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => {
                        N.A.clearLastSessionVoiceChannelId(), ej()
                    },
                    noticeType: r.type
                }), eP.intl.string(eP.t.jY2lUA), (0, i.jsx)(u.Z_L, {
                    onClick: () => {
                        let e = eT.A.getLastSessionVoiceChannelId();
                        null != e && null != e_.A.getChannel(e) && p.default.selectVoiceChannel(e)
                    },
                    noticeType: r.type,
                    children: eP.intl.string(eP.t.vD60Pv)
                })]
            });
        case eg.kqX.SPOTIFY_AUTO_PAUSED:
            let eM = x.A.get(eg.fg2.SPOTIFY);
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(),
                    noticeType: r.type
                }), (0, i.jsx)("img", {
                    alt: "",
                    className: eD.tV,
                    src: eM.icon.whiteSVG
                }), eP.intl.string(eP.t.D8Cp76), (0, i.jsx)(u.Z_L, {
                    onClick: () => (0, ec.openUserSettings)(eo.X.VOICE_AND_VIDEO_PANEL, {
                        section: eg.nc_.VOICE
                    }),
                    noticeType: r.type,
                    children: eP.intl.string(eP.t.NiTd0e)
                }), (0, i.jsx)(u.MzZ, {
                    className: eD.N0,
                    href: em.A.getArticleURL(eg.MVz.SPOTIFY_AUTO_PAUSED),
                    target: "_blank",
                    children: eP.intl.string(eP.t.CiqAIU)
                })]
            });
        case eg.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [eP.intl.string(eP.t["f+Zaol"]), (0, i.jsx)(u.Z_L, {
                    noticeType: r.type,
                    onClick: () => o && null != t ? (0, F.Ze)(t) : f.R(),
                    children: eP.intl.string(eP.t.fiNVin)
                })]
            });
        case eg.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [eP.intl.string(eP.t["3sWbf3"]), (0, i.jsx)(u.Z_L, {
                    noticeType: r.type,
                    onClick: () => {
                        T.A.verifyResend(), _.A.show({
                            title: eP.intl.string(eP.t.LykQYk),
                            body: eP.intl.format(eP.t.azKEPy, {
                                email: e?.email
                            }),
                            cancelText: eP.intl.string(eP.t.Vm8akB),
                            onCancel: f.R
                        })
                    },
                    children: eP.intl.string(eP.t.WnX4J2)
                })]
            });
        case eg.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => R.A.ackScheduledMaintenance(),
                    noticeType: r.type
                }), eP.intl.format(eP.t["yb96S+"], r.metadata), (0, i.jsx)(u.eCN, {
                    href: `${eg.qF7.STATUS}/incidents/${r.metadata.id}`,
                    noticeType: r.type,
                    children: eP.intl.string(eP.t.hvVgAZ)
                })]
            });
        case eg.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(eL, {
                noticeType: r.type
            });
        case eg.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(ef, {
                noticeType: r.type
            });
        case eg.kqX.HARDWARE_MUTE:
            if (null != r.metadata) {
                let {
                    vendor: e,
                    model: t
                } = r.metadata;
                return (0, i.jsxs)(u.$Td, {
                    color: u.Hv$.DANGER,
                    children: [eP.intl.format(eP.t.qoDex7, {
                        vendorName: e.name,
                        modelName: t.name
                    }), (0, i.jsx)(u.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            E.A.setEnableHardwareMuteNotice(!1), ej()
                        }
                    }), (0, i.jsx)(u.eCN, {
                        href: t.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: r.type,
                        children: eP.intl.string(eP.t["Yl/Riu"])
                    })]
                })
            }
            if (J.A.getConfig({
                    location: "Notice.AudioIssueNoticeHardwareMute"
                }).enableHardwareSilenceWarning) return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.INFO,
                children: [eP.intl.format(eP.t.QMw8Fd, {}), (0, i.jsx)(u.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        E.A.setEnableHardwareMuteNotice(!1), ej()
                    }
                })]
            });
            return null;
        case eg.kqX.STREAMER_MODE:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.STREAMER_MODE,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(),
                    noticeType: eg.kqX.STREAMER_MODE
                }), eP.intl.string(eP.t.iEgBXp), (0, i.jsx)(u.Z_L, {
                    onClick: () => m.A.setEnabled(!1),
                    noticeType: eg.kqX.STREAMER_MODE,
                    children: eP.intl.string(eP.t.R9GHya)
                })]
            });
        case eg.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let {
                skuId: eb, applicationId: ek
            } = r.metadata, eG = eN.A.get(eb), ev = U.A.getApplication(ek);
            if (null == eG || null == ev) return null;
            let eB = {
                page: eg.liQ.IN_APP
            };
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => A.X(eG.id),
                    noticeType: eg.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                }), (0, i.jsx)(u.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: eD.PC
                }), eP.intl.format(eP.t["g3MU/+"], {
                    applicationName: ev.name,
                    skuName: eG.name
                }), (0, i.jsx)(u.Z_L, {
                    noticeType: eg.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    onClick: () => (0, C.j)({
                        applicationId: ev.id,
                        skuId: eG.id,
                        openPremiumPaymentModal: () => {
                            (0, Q.A)({
                                initialPlanId: null,
                                subscriptionTier: eO.pe.TIER_2,
                                analyticsLocations: s,
                                analyticsObject: eB
                            })
                        },
                        analyticsLocations: s,
                        analyticsLocationObject: eB,
                        context: __OVERLAY__ ? eg.BRT.OVERLAY : eg.BRT.APP
                    }).then(() => A.X(eG.id)),
                    children: eP.intl.string(eP.t.KEwPYx)
                })]
            });
        case eg.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let {
                skuId: e,
                applicationId: t
            } = r.metadata, n = eN.A.get(e), l = U.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(),
                    noticeType: eg.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                }), (0, i.jsx)(u.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: eD.PC
                }), eP.intl.format(eP.t.LquIKC, {
                    applicationName: l.name,
                    skuName: n.name
                }), (0, i.jsx)(u.zr9, {
                    children: (0, i.jsx)(a.N_, {
                        onClick: () => ej(),
                        to: {
                            pathname: eg.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                            state: {
                                scrollRestoration: !1
                            }
                        },
                        children: eP.intl.string(eP.t.hvVgAZ)
                    })
                })]
            })
        }
        case eg.kqX.SURVEY: {
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
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.CUSTOM,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eg.kqX.SURVEY,
                    onClick: () => {
                        (0, h.pX)(t, !0)
                    }
                }), n, (0, i.jsx)(u.Z_L, {
                    noticeType: eg.kqX.SURVEY,
                    onClick: () => {
                        a ? (0, et.K)(o) : window.open(s, "_blank"), (0, h.pX)(t, !1)
                    },
                    children: l
                })]
            })
        }
        case eg.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [eP.intl.string(eP.t["ugxmk/"]), (0, i.jsx)(u.eCN, {
                    href: em.A.getArticleURL(eg.MVz.CORRUPT_INSTALLATION),
                    target: "_blank",
                    noticeType: r.type,
                    children: eP.intl.string(eP.t["6ik4Xk"])
                })]
            });
        case eg.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(),
                    noticeType: eg.kqX.VIDEO_UNSUPPORTED_BROWSER
                }), eP.intl.string(eP.t.wVjKGi), (0, i.jsx)(u.Z_L, {
                    noticeType: eg.kqX.VIDEO_UNSUPPORTED_BROWSER,
                    onClick: () => {
                        (0, u.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                            return t => (0, i.jsx)(e, {
                                source: "Video unsupported browser",
                                ...t
                            })
                        })
                    },
                    children: eP.intl.string(eP.t["1WjMbC"])
                })]
            });
        case eg.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let {
                error: ew
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(),
                    noticeType: eg.kqX.DISPATCH_ERROR
                }), ew?.displayMessage, (0, i.jsx)(u.Z_L, {
                    noticeType: eg.kqX.DISPATCH_ERROR,
                    onClick: () => (0, u.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("88014").then(n.bind(n, 627261));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    }),
                    children: eP.intl.string(eP.t.hvVgAZ)
                })]
            });
        case eg.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let {
                progress: eH, total: eV, name: eF
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => ej(),
                    noticeType: eg.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS
                }), (0, i.jsxs)(M.A, {
                    justify: M.A.Justify.CENTER,
                    children: [null != eF ? eP.intl.formatToPlainString(eP.t["pHj+z4"], {
                        name: `${eF}`,
                        progress: eH,
                        total: eV
                    }) : eP.intl.formatToPlainString(eP.t["lHZn+A"], {
                        progress: eH,
                        total: eV
                    }), (0, i.jsx)(u.y$y, {
                        type: u.y$y.Type.PULSING_ELLIPSIS,
                        className: eD.gO
                    })]
                })]
            });
        case eg.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != ep.A.testModeEmbeddedApplicationId) return (0, i.jsx)(u.$Td, {
                color: u.Hv$.WARNING,
                children: (0, i.jsxs)(M.A, {
                    justify: M.A.Justify.CENTER,
                    align: M.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: eP.intl.format(eP.t["1qxVe4"], {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(u.PMB, {
                        onClick: g.cL,
                        noticeType: eg.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
            return (0, i.jsx)(u.$Td, {
                color: u.Hv$.WARNING,
                children: (0, i.jsxs)(M.A, {
                    justify: M.A.Justify.CENTER,
                    align: M.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: eP.intl.format(eP.t.Fv5HrE, {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(O.A, {
                        dropdownSize: O.p.DropdownSizes.SMALL,
                        className: eD.aV,
                        color: O.p.Colors.WHITE,
                        look: O.p.Looks.OUTLINED,
                        size: O.p.Sizes.MIN,
                        onSKUSelect: e => S.ct(e.id, {
                            analyticsSource: {
                                page: null,
                                section: eg.JJy.NOTIFICATION_BAR,
                                object: eg.ZSU.NAVIGATION_LINK
                            }
                        }),
                        applicationId: r.metadata.applicationId,
                        children: eP.intl.string(eP.t.Q5ZgpK)
                    }), (0, i.jsx)(u.PMB, {
                        onClick: g.cL,
                        noticeType: eg.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
        case eg.kqX.VIEWING_ROLES:
            return (0, i.jsx)(K.A, {});
        case eg.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(u.$Td, {
                color: Y === eO.PremiumTypes.TIER_1 ? u.Hv$.PREMIUM_TIER_1 : Y === eO.PremiumTypes.TIER_0 ? u.Hv$.PREMIUM_TIER_0 : u.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eg.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        ej(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), (0, i.jsx)(u.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: eD.PC
                }), Y === eO.PremiumTypes.TIER_1 ? eP.intl.formatToPlainString(eP.t.fXv4wm, {
                    daysLeft: r.metadata.daysLeft
                }) : Y === eO.PremiumTypes.TIER_0 ? eP.intl.formatToPlainString(eP.t.ZOHZMr, {
                    daysLeft: r.metadata.daysLeft
                }) : eP.intl.formatToPlainString(eP.t.outyHh, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(u.Z_L, {
                    noticeType: eg.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        ej(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, u.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("41353"), n.e("62175"), n.e("14704"), n.e("94934")]).then(n.bind(n, 174705));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                daysLeft: r.metadata.daysLeft,
                                premiumType: Y,
                                analyticsSource: "Nag Bar",
                                premiumSubscription: r.metadata.premiumSubscription
                            })
                        })
                    },
                    children: Y === eO.PremiumTypes.TIER_1 ? eP.intl.string(eP.t.BkbUPM) : Y === eO.PremiumTypes.TIER_0 ? eP.intl.string(eP.t.Px978X) : eP.intl.string(eP.t.LW5tCE)
                })]
            });
        case eg.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let {
                daysPastDue: e$, dismissUntil: eq
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        ej(eq)
                    }
                }), eP.intl.format(eP.t.zxU0Kp, {
                    daysPastDue: e$
                }), (0, i.jsx)(u.Z_L, {
                    noticeType: eg.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                    onClick: () => {
                        ej(eq), (0, ec.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, {
                            section: eg.nc_.SUBSCRIPTIONS
                        })
                    },
                    children: eP.intl.string(eP.t.q8rxeS)
                })]
            });
        case eg.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eg.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        ej(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), eP.intl.string(eP.t.LlZaoX), (0, i.jsx)(u.Z_L, {
                    noticeType: eg.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        ej(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, ec.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, {
                            section: eg.nc_.SUBSCRIPTIONS
                        })
                    },
                    children: eP.intl.string(eP.t["Zpd+Yq"])
                })]
            });
        case eg.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eg.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        ej(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), eP.intl.string(eP.t["30YfCr"]), (0, i.jsx)(u.Z_L, {
                    noticeType: eg.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        ej(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, ec.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, {
                            section: eg.nc_.SUBSCRIPTIONS
                        })
                    },
                    children: eP.intl.string(eP.t.U5pKWA)
                })]
            });
        case eg.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eg.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        ej(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), Y === eO.PremiumTypes.TIER_1 ? eP.intl.formatToPlainString(eP.t.b6QUvf, {
                    daysLeft: r.metadata.daysLeft
                }) : Y === eO.PremiumTypes.TIER_0 ? eP.intl.formatToPlainString(eP.t["tURZ/M"], {
                    daysLeft: r.metadata.daysLeft
                }) : eP.intl.formatToPlainString(eP.t.AyC74I, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(u.Z_L, {
                    noticeType: eg.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        ej(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, ec.openUserSettings)(eo.X.SUBSCRIPTIONS_PANEL, {
                            section: eg.nc_.SUBSCRIPTIONS
                        })
                    },
                    children: Y === eO.PremiumTypes.TIER_1 ? eP.intl.string(eP.t.lboF5O) : Y === eO.PremiumTypes.TIER_0 ? eP.intl.string(eP.t["4UPwOq"]) : eP.intl.string(eP.t["P/VvGb"])
                })]
            });
        case eg.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(W.y, {
                buttonText: r.buttonText ?? eP.intl.string(eP.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => ej(),
                showCloseButton: !0
            });
        case eg.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(V.A, {
                guildId: t,
                analyticsLocations: s
            });
        case eg.kqX.QUARANTINED:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [eP.intl.string(eP.t.DVFJYf), (0, i.jsx)(u.eCN, {
                    href: ey.q,
                    target: "_blank",
                    noticeType: r.type,
                    children: eP.intl.string(eP.t.kvHdFN)
                }), (0, i.jsx)(u.MzZ, {
                    href: em.A.getArticleURL(eg.MVz.QUARANTINE),
                    target: "_blank",
                    className: eD.yw,
                    children: eP.intl.string(eP.t.hvVgAZ)
                })]
            });
        case eg.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let {
                dismissUntil: eW, decisionId: eX
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eg.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                    onClick: () => {
                        null != t && (0, H.wu)(t), ej(eW)
                    }
                }), eP.intl.string(eP.t.B8ruyY), (0, i.jsx)(u.zr9, {
                    onClick: () => {
                        null != t && (0, H.W5)(t, eX, () => {
                            ej(eW), (0, H.wu)(t)
                        })
                    },
                    children: eP.intl.string(eP.t.oX14El)
                }), null != t ? (0, i.jsx)(u.zr9, {
                    onClick: () => X.A.open(t, eg.BEX.GUILD_AUTOMOD, void 0, eg.nd0.AUTOMOD_MENTION_SPAM),
                    children: eP.intl.string(eP.t["1R7QIx"])
                }) : null]
            });
        case eg.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.BRAND,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eg.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                    onClick: () => {
                        ei.li(), ej()
                    }
                }), eP.intl.string(eP.t.I1nKfO), (0, i.jsx)(u.Z_L, {
                    noticeType: eg.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                    onClick: () => {
                        (0, u.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("16833"), n.e("95095")]).then(n.bind(n, 156189));
                            return t => (0, i.jsx)(e, {
                                ...t
                            })
                        }), ei.li(), ej()
                    },
                    children: eP.intl.string(eP.t.l5xYnH)
                })]
            });
        case eg.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eg.kqX.QUESTS_PROGRESS_INTERRUPTION,
                    onClick: () => {
                        r.metadata?.streamKey != null && (0, en.lk)(r.metadata.streamKey)
                    }
                }), eP.intl.string(eP.t.rOx44m)]
            });
        case eg.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.BRAND,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => {
                        ej(r.metadata?.dismissUntil)
                    },
                    noticeType: eg.kqX.BLOCK_USER_FEEDBACK_NAGBAR
                }), eP.intl.string(eP.t["0klLS7"]), (0, i.jsx)(u.Z_L, {
                    onClick: () => {
                        (0, er.$)(), ej(r.metadata?.dismissUntil)
                    },
                    noticeType: eg.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    children: eP.intl.string(eP.t.e4y2VM)
                })]
            });
        case eg.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(el.A, {});
        case eg.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(ea.A, {});
        default:
            return null
    }
});

function ek() {
    let {
        analyticsLocations: e
    } = (0, D.Ay)(P.A.NOTICE);
    return (0, i.jsx)(D.f5, {
        value: e,
        children: (0, i.jsx)(eb, {})
    })
}