/** chunk id: 916768 params = (module,exports,require) **/
n.d(t, {
    A: () => eb,
    w: () => eL
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
    p = n(169604),
    N = n(956793),
    m = n(785796),
    R = n(800342),
    S = n(55619),
    h = n(246605),
    g = n(271866),
    C = n(86980),
    O = n(322337),
    y = n(77729),
    x = n(573648),
    f = n(793574),
    P = n(688810),
    D = n(587895),
    U = n(315982),
    M = n(235986),
    L = n(420216),
    j = n(984870),
    b = n(626262),
    v = n(813803),
    k = n(487329),
    G = n(102609),
    B = n(49463),
    w = n(322223),
    H = n(137207),
    F = n(619029),
    V = n(202384),
    $ = n(51758),
    q = n(571139),
    W = n(527012),
    X = n(997509),
    z = n(475723),
    K = n(598733),
    Y = n(801644),
    J = n(74848),
    Q = n(532794),
    Z = n(234419),
    ee = n(814249),
    et = n(829219),
    en = n(597936),
    ei = n(601730),
    el = n(722255),
    er = n(613491),
    es = n(464473),
    ea = n(780964),
    eo = n(840065),
    ec = n(459321),
    ed = n(594609),
    eu = n(734057),
    e_ = n(430452),
    eE = n(383501),
    eT = n(967198),
    eA = n(287809),
    eI = n(67480),
    ep = n(147964),
    eN = n(519057),
    em = n(954571),
    eR = n(975571),
    eS = n(723702),
    eh = n(652215),
    eg = n(502075),
    eC = n(788868),
    eO = n(831502),
    ey = n(731854),
    ex = n(985018),
    ef = n(237082);
let eP = e => {
        let {
            error: t,
            allowClick: n = !1
        } = e, l = (0, k.B1)(t)?.errorCode, r = ex.intl.formatToPlainString(ex.t.ejOT95, {
            errorCode: l
        }), s = (0, i.jsx)(u.Text, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: ef.fU,
            selectable: !0,
            children: r
        });
        return n ? (0, i.jsx)(u.DUT, {
            tag: "span",
            className: ef.wz,
            onClick: () => n && open(eR.A.getArticleURL(eh.MVz.AV_ERROR_CODES)),
            children: s
        }) : s
    },
    eD = e => {
        let {
            noticeType: t
        } = e;
        return (0, i.jsxs)(u.$Td, {
            color: u.Hv$.DANGER,
            children: [(0, i.jsx)(u.PMB, {
                noticeType: t,
                onClick: () => {
                    eL()
                }
            }), ex.intl.string(ex.t.o3zuYz), (0, i.jsx)(eP, {
                error: k.iy.NO_INPUT_DEVICES
            }), (0, i.jsx)(u.eCN, {
                href: eR.A.getArticleURL(eh.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: ex.intl.string(ex.t.RYKKox)
            })]
        })
    };

function eU(e) {
    return (0, eS.isWindows)() && c().satisfies(y.A?.os.release, eg.PH) ? `ms-settings:sound-properties?endpointId=${e}` : "ms-settings:sound"
}

function eM(e) {
    let t, n, {
            noticeType: l
        } = e,
        r = (0, J.x5)(ey.oh.AUDIO_INPUT),
        s = r?.guid ?? "",
        {
            inputDeviceOSMuted: a,
            inputDeviceOSVolume: o
        } = (0, d.cf)([e_.Ay], () => ({
            inputDeviceOSMuted: e_.Ay.getInputDeviceOSMuted(),
            inputDeviceOSVolume: e_.Ay.getInputDeviceOSVolume()
        })),
        c = !1;
    return !0 === a ? (t = ex.intl.string(ex.t.ppW3ri), n = (0, i.jsx)(u.eCN, {
        href: eU(s),
        noticeType: l,
        children: ex.intl.string(ex.t.QghSIq)
    })) : 0 === o ? (t = ex.intl.string(ex.t.j4gGA4), n = (0, i.jsx)(u.eCN, {
        href: eU(s),
        noticeType: l,
        children: ex.intl.string(ex.t.QghSIq)
    })) : e_.Ay.supports(ey.O5.LOOPBACK) ? (t = ex.intl.string(ex.t.dNAJ18), c = !0, n = (0, i.jsx)(u.zr9, {
        onClick: () => {
            (0, eo.openUserSettings)(ea.X.VOICE_AND_VIDEO_PANEL, {
                section: eh.nc_.VOICE
            })
        },
        children: ex.intl.string(ex.t.I6YlB4)
    })) : (t = ex.intl.string(ex.t.nCO9bI), n = (0, i.jsx)(u.eCN, {
        href: eR.A.getArticleURL(eh.MVz.NO_INPUT_DETECTED),
        noticeType: l,
        children: ex.intl.string(ex.t.RYKKox)
    })), (0, i.jsxs)(u.$Td, {
        color: u.Hv$.DANGER,
        children: [(0, i.jsx)(u.PMB, {
            noticeType: l,
            onClick: () => {
                eL(), (0, ed.h)()
            }
        }), t, (0, i.jsx)(eP, {
            allowClick: c,
            error: k.iy.NO_AUDIO_INPUT_DETECTED
        }), n]
    })
}

function eL(e) {
    I.A.dismiss(null != e ? {
        untilAtLeast: s()(e)
    } : void 0)
}
let ej = l.memo(function() {
    let e = (0, d.bG)([eA.default], () => eA.default.getCurrentUser()),
        t = (0, d.bG)([eT.A], () => eT.A.getGuildId()),
        r = (0, d.bG)([eN.Ay], () => eN.Ay.getNotice()),
        {
            analyticsLocations: s
        } = (0, P.Ay)(),
        o = (0, $.H)(t),
        c = (0, Z.V)();
    if (l.useEffect(() => {
            if (r?.type != null) {
                let e;
                if (null == c && (r.type === eh.kqX.PREMIUM_TIER_2_TRIAL_ENDING || r.type === eh.kqX.PREMIUM_TIER_0_TRIAL_ENDING)) return;
                let n = {};
                null != t && (n.guild_id = t), c?.trial_id != null && (n.trial_id = c.trial_id), e = {
                    notice_type: r.type,
                    ...n
                }, em.default.track(eh.HAw.APP_NOTICE_VIEWED, e)
            }
        }, [r?.type, t, c]), l.useEffect(() => {
            if (null != r && r.type === eh.kqX.SURVEY && null != r.metadata) {
                let {
                    metadata: e
                } = r, t = B.A.getUserExperimentDescriptor(e.id);
                null != t && (0, G.LQ)(e.id, t), (async () => {
                    r.metadata?.id != null && await (0, h.oX)(r.metadata?.id)
                })()
            }
        }, [r]), null == r) return null;
    let I = null != r.type ? eN.Re[r.type] : null,
        y = null != r.type ? eN.k3[r.type] : null,
        f = null != r.type ? eN.f7[r.type] : null,
        k = eN.pe[r.type];
    if (null != I) return (0, i.jsx)(b.$, {
        dismissibleContent: I,
        noticeType: r.type
    });
    if (null != y) return (0, i.jsx)(v._, {
        dismissibleContent: y,
        noticeType: r.type
    });
    if (null != f) return (0, i.jsx)(j.T, {
        dismissibleContent: f
    });
    if (null != k) return (0, i.jsx)(L.r, {
        dismissibleContent: k,
        noticeType: r.type
    });
    let J = r.metadata?.premiumType;
    switch (r.type) {
        case eh.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, i.jsx)(ec.A, {});
        case eh.kqX.LURKING_GUILD:
            return (0, i.jsx)(K.A, {});
        case eh.kqX.PENDING_MEMBER:
            return (0, i.jsx)(q.A, {});
        case eh.kqX.INVITED_TO_SPEAK:
            return (0, i.jsx)(er.A, {});
        case eh.kqX.GUILD_RAID_NOTIFICATION:
            let {
                dismissUntil: ed
            } = r.metadata;
            return (0, i.jsx)(w.A, {
                onDismiss: () => eL(ed)
            });
        case eh.kqX.WIN32_DEPRECATED_MESSAGE:
            let {
                dismissUntil: e_
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(e_),
                    noticeType: r.type
                }), ex.intl.format(ex.t["08KQ1P"], {
                    helpCenterLink: eR.A.getArticleURL(eh.MVz.WIN32_DEPRECATE)
                })]
            });
        case eh.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let {
                dismissUntil: eg
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(eg),
                    noticeType: r.type
                }), ex.intl.format(ex.t["8Je+dX"], {
                    helpCenterLink: eR.A.getArticleURL(eh.MVz.WIN7_8_DEPRECATE)
                })]
            });
        case eh.kqX.WIN_COMPAT_MODE_MESSAGE:
            let {
                dismissUntil: ey
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(ey),
                    noticeType: r.type
                }), ex.intl.string(ex.t["9DJgOg"])]
            });
        case eh.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let {
                dismissUntil: eP
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(eP),
                    noticeType: r.type
                }), ex.intl.format(ex.t.q8VPLo, {
                    helpCenterLink: eR.A.getArticleURL(eh.MVz.MACOS_19_DEPRECATE)
                })]
            });
        case eh.kqX.E2EE_UPDATE_REQUIRED:
            let {
                dismissUntil: eU
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(eU),
                    noticeType: r.type
                }), ex.intl.format(eS.isPlatformEmbedded ? ex.t.J232TI : ex.t.vceuiL, {
                    helpCenterLink: eR.A.getArticleURL(eh.MVz.END_TO_END_ENCRYPTION)
                })]
            });
        case eh.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(),
                    noticeType: r.type
                }), ex.intl.string(ex.t.iW0fcQ), (0, i.jsx)(u.eCN, {
                    href: eR.A.getArticleURL(eh.MVz.WINDOWS_MEDIA_PACK),
                    target: "_blank",
                    noticeType: r.type,
                    children: ex.intl.string(ex.t.LQG5j6)
                })]
            });
        case eh.kqX.GENERIC:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(),
                    noticeType: r.type
                }), r.message, null != r.buttonText ? (0, i.jsx)(u.Z_L, {
                    onClick: r.callback,
                    noticeType: r.type,
                    children: r.buttonText
                }) : null]
            });
        case eh.kqX.LAUNCH_GAME_FAILURE:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(),
                    noticeType: r.type
                }), r.message, null != r.buttonText ? (0, i.jsx)(u.Z_L, {
                    onClick: r.callback,
                    noticeType: r.type,
                    children: r.buttonText
                }) : null]
            });
        case eh.kqX.VOICE_DISABLED:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => {
                        p.A.clearRemoteDisconnectVoiceChannelId(), eL()
                    },
                    noticeType: r.type
                }), ex.intl.string(ex.t.bOQ3jV), (0, i.jsx)(u.Z_L, {
                    onClick: () => {
                        let e = eE.A.getRemoteDisconnectVoiceChannelId();
                        null != e && null != eu.A.getChannel(e) && N.default.selectVoiceChannel(e)
                    },
                    noticeType: r.type,
                    children: ex.intl.string(ex.t.vD60Pv)
                })]
            });
        case eh.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => {
                        p.A.clearLastSessionVoiceChannelId(), eL()
                    },
                    noticeType: r.type
                }), ex.intl.string(ex.t.jY2lUA), (0, i.jsx)(u.Z_L, {
                    onClick: () => {
                        let e = eE.A.getLastSessionVoiceChannelId();
                        null != e && null != eu.A.getChannel(e) && N.default.selectVoiceChannel(e)
                    },
                    noticeType: r.type,
                    children: ex.intl.string(ex.t.vD60Pv)
                })]
            });
        case eh.kqX.SPOTIFY_AUTO_PAUSED:
            let ej = x.A.get(eh.fg2.SPOTIFY);
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(),
                    noticeType: r.type
                }), (0, i.jsx)("img", {
                    alt: "",
                    className: ef.tV,
                    src: ej.icon.whiteSVG
                }), ex.intl.string(ex.t.D8Cp76), (0, i.jsx)(u.Z_L, {
                    onClick: () => (0, eo.openUserSettings)(ea.X.VOICE_AND_VIDEO_PANEL, {
                        section: eh.nc_.VOICE
                    }),
                    noticeType: r.type,
                    children: ex.intl.string(ex.t.NiTd0e)
                }), (0, i.jsx)(u.MzZ, {
                    className: ef.N0,
                    href: eR.A.getArticleURL(eh.MVz.SPOTIFY_AUTO_PAUSED),
                    target: "_blank",
                    children: ex.intl.string(ex.t.CiqAIU)
                })]
            });
        case eh.kqX.UNCLAIMED_ACCOUNT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [ex.intl.string(ex.t["f+Zaol"]), (0, i.jsx)(u.Z_L, {
                    noticeType: r.type,
                    onClick: () => o && null != t ? (0, V.Ze)(t) : U.R(),
                    children: ex.intl.string(ex.t.fiNVin)
                })]
            });
        case eh.kqX.UNVERIFIED_ACCOUNT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [ex.intl.string(ex.t["3sWbf3"]), (0, i.jsx)(u.Z_L, {
                    noticeType: r.type,
                    onClick: () => {
                        T.A.verifyResend(), _.A.show({
                            title: ex.intl.string(ex.t.LykQYk),
                            body: ex.intl.format(ex.t.azKEPy, {
                                email: e?.email
                            }),
                            cancelText: ex.intl.string(ex.t.Vm8akB),
                            onCancel: U.R
                        })
                    },
                    children: ex.intl.string(ex.t.WnX4J2)
                })]
            });
        case eh.kqX.SCHEDULED_MAINTENANCE:
            if (null == r.metadata) return null;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => m.A.ackScheduledMaintenance(),
                    noticeType: r.type
                }), ex.intl.format(ex.t["yb96S+"], r.metadata), (0, i.jsx)(u.eCN, {
                    href: `${eh.qF7.STATUS}/incidents/${r.metadata.id}`,
                    noticeType: r.type,
                    children: ex.intl.string(ex.t.hvVgAZ)
                })]
            });
        case eh.kqX.NO_INPUT_DETECTED:
            return (0, i.jsx)(eM, {
                noticeType: r.type
            });
        case eh.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, i.jsx)(eD, {
                noticeType: r.type
            });
        case eh.kqX.HARDWARE_MUTE:
            if (null != r.metadata) {
                let {
                    vendor: e,
                    model: t
                } = r.metadata;
                return (0, i.jsxs)(u.$Td, {
                    color: u.Hv$.DANGER,
                    children: [ex.intl.format(ex.t.qoDex7, {
                        vendorName: e.name,
                        modelName: t.name
                    }), (0, i.jsx)(u.PMB, {
                        noticeType: r.type,
                        onClick: () => {
                            E.A.setEnableHardwareMuteNotice(!1), eL()
                        }
                    }), (0, i.jsx)(u.eCN, {
                        href: t.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: r.type,
                        children: ex.intl.string(ex.t["Yl/Riu"])
                    })]
                })
            }
            if (Y.A.getConfig({
                    location: "Notice.AudioIssueNoticeHardwareMute"
                }).enableHardwareSilenceWarning) return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.INFO,
                children: [ex.intl.format(ex.t.QMw8Fd, {}), (0, i.jsx)(u.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        E.A.setEnableHardwareMuteNotice(!1), eL()
                    }
                })]
            });
            return null;
        case eh.kqX.STREAMER_MODE:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.STREAMER_MODE,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(),
                    noticeType: eh.kqX.STREAMER_MODE
                }), ex.intl.string(ex.t.iEgBXp), (0, i.jsx)(u.Z_L, {
                    onClick: () => S.A.setEnabled(!1),
                    noticeType: eh.kqX.STREAMER_MODE,
                    children: ex.intl.string(ex.t.R9GHya)
                })]
            });
        case eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == r.metadata) return null;
            let {
                skuId: eb, applicationId: ev
            } = r.metadata, ek = eI.A.get(eb), eG = D.A.getApplication(ev);
            if (null == ek || null == eG) return null;
            let eB = {
                page: eh.liQ.IN_APP
            };
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => A.X(ek.id),
                    noticeType: eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                }), (0, i.jsx)(u.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: ef.PC
                }), ex.intl.format(ex.t["g3MU/+"], {
                    applicationName: eG.name,
                    skuName: ek.name
                }), (0, i.jsx)(u.Z_L, {
                    noticeType: eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    onClick: () => (0, C.j)({
                        applicationId: eG.id,
                        skuId: ek.id,
                        openPremiumPaymentModal: () => {
                            (0, Q.A)({
                                initialPlanId: null,
                                subscriptionTier: eC.pe.TIER_2,
                                analyticsLocations: s,
                                analyticsObject: eB
                            })
                        },
                        analyticsLocations: s,
                        analyticsLocationObject: eB,
                        context: __OVERLAY__ ? eh.BRT.OVERLAY : eh.BRT.APP
                    }).then(() => A.X(ek.id)),
                    children: ex.intl.string(ex.t.KEwPYx)
                })]
            });
        case eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == r.metadata) return null;
            let {
                skuId: e,
                applicationId: t
            } = r.metadata, n = eI.A.get(e), l = D.A.getApplication(t);
            if (null == n || null == l) return null;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.PREMIUM_TIER_1,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(),
                    noticeType: eh.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                }), (0, i.jsx)(u.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: ef.PC
                }), ex.intl.format(ex.t.LquIKC, {
                    applicationName: l.name,
                    skuName: n.name
                }), (0, i.jsx)(u.zr9, {
                    children: (0, i.jsx)(a.N_, {
                        onClick: () => eL(),
                        to: {
                            pathname: eh.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                            state: {
                                scrollRestoration: !1
                            }
                        },
                        children: ex.intl.string(ex.t.hvVgAZ)
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
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.CUSTOM,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eh.kqX.SURVEY,
                    onClick: () => {
                        (0, h.pX)(t, !0)
                    }
                }), n, (0, i.jsx)(u.Z_L, {
                    noticeType: eh.kqX.SURVEY,
                    onClick: () => {
                        a ? (0, ee.K)(o) : window.open(s, "_blank"), (0, h.pX)(t, !1)
                    },
                    children: l
                })]
            })
        }
        case eh.kqX.CORRUPT_INSTALLATION:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [ex.intl.string(ex.t["ugxmk/"]), (0, i.jsx)(u.eCN, {
                    href: eR.A.getArticleURL(eh.MVz.CORRUPT_INSTALLATION),
                    target: "_blank",
                    noticeType: r.type,
                    children: ex.intl.string(ex.t["6ik4Xk"])
                })]
            });
        case eh.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(),
                    noticeType: eh.kqX.VIDEO_UNSUPPORTED_BROWSER
                }), ex.intl.string(ex.t.wVjKGi), (0, i.jsx)(u.Z_L, {
                    noticeType: eh.kqX.VIDEO_UNSUPPORTED_BROWSER,
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
                    children: ex.intl.string(ex.t["1WjMbC"])
                })]
            });
        case eh.kqX.DISPATCH_ERROR:
            if (null == r.metadata) return null;
            let {
                error: ew
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(),
                    noticeType: eh.kqX.DISPATCH_ERROR
                }), ew?.displayMessage, (0, i.jsx)(u.Z_L, {
                    noticeType: eh.kqX.DISPATCH_ERROR,
                    onClick: () => (0, u.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("88014").then(n.bind(n, 627261));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    }),
                    children: ex.intl.string(ex.t.hvVgAZ)
                })]
            });
        case eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == r.metadata) return null;
            let {
                progress: eH, total: eF, name: eV
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DEFAULT,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => eL(),
                    noticeType: eh.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS
                }), (0, i.jsxs)(M.A, {
                    justify: M.A.Justify.CENTER,
                    children: [null != eV ? ex.intl.formatToPlainString(ex.t["pHj+z4"], {
                        name: `${eV}`,
                        progress: eH,
                        total: eF
                    }) : ex.intl.formatToPlainString(ex.t["lHZn+A"], {
                        progress: eH,
                        total: eF
                    }), (0, i.jsx)(u.y$y, {
                        type: u.y$y.Type.PULSING_ELLIPSIS,
                        className: ef.gO
                    })]
                })]
            });
        case eh.kqX.APPLICATION_TEST_MODE:
            if (null == r.metadata) return null;
            if (null != ep.A.testModeEmbeddedApplicationId) return (0, i.jsx)(u.$Td, {
                color: u.Hv$.WARNING,
                children: (0, i.jsxs)(M.A, {
                    justify: M.A.Justify.CENTER,
                    align: M.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: ex.intl.format(ex.t["1qxVe4"], {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(u.PMB, {
                        onClick: g.cL,
                        noticeType: eh.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
            return (0, i.jsx)(u.$Td, {
                color: u.Hv$.WARNING,
                children: (0, i.jsxs)(M.A, {
                    justify: M.A.Justify.CENTER,
                    align: M.A.Align.CENTER,
                    children: [(0, i.jsx)("div", {
                        children: ex.intl.format(ex.t.Fv5HrE, {
                            applicationName: r.metadata.applicationName
                        })
                    }), (0, i.jsx)(O.A, {
                        dropdownSize: O.p.DropdownSizes.SMALL,
                        className: ef.aV,
                        color: O.p.Colors.WHITE,
                        look: O.p.Looks.OUTLINED,
                        size: O.p.Sizes.MIN,
                        onSKUSelect: e => R.ct(e.id, {
                            analyticsSource: {
                                page: null,
                                section: eh.JJy.NOTIFICATION_BAR,
                                object: eh.ZSU.NAVIGATION_LINK
                            }
                        }),
                        applicationId: r.metadata.applicationId,
                        children: ex.intl.string(ex.t.Q5ZgpK)
                    }), (0, i.jsx)(u.PMB, {
                        onClick: g.cL,
                        noticeType: eh.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
        case eh.kqX.VIEWING_ROLES:
            return (0, i.jsx)(z.A, {});
        case eh.kqX.PREMIUM_UNCANCEL:
            return (0, i.jsxs)(u.$Td, {
                color: J === eC.PremiumTypes.TIER_1 ? u.Hv$.PREMIUM_TIER_1 : J === eC.PremiumTypes.TIER_0 ? u.Hv$.PREMIUM_TIER_0 : u.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eh.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        eL(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), (0, i.jsx)(u.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: ef.PC
                }), J === eC.PremiumTypes.TIER_1 ? ex.intl.formatToPlainString(ex.t.fXv4wm, {
                    daysLeft: r.metadata.daysLeft
                }) : J === eC.PremiumTypes.TIER_0 ? ex.intl.formatToPlainString(ex.t.ZOHZMr, {
                    daysLeft: r.metadata.daysLeft
                }) : ex.intl.formatToPlainString(ex.t.outyHh, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(u.Z_L, {
                    noticeType: eh.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        eL(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, u.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("41353"), n.e("62175"), n.e("14704"), n.e("94934")]).then(n.bind(n, 174705));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                daysLeft: r.metadata.daysLeft,
                                premiumType: J,
                                analyticsSource: "Nag Bar",
                                premiumSubscription: r.metadata.premiumSubscription
                            })
                        })
                    },
                    children: J === eC.PremiumTypes.TIER_1 ? ex.intl.string(ex.t.BkbUPM) : J === eC.PremiumTypes.TIER_0 ? ex.intl.string(ex.t.Px978X) : ex.intl.string(ex.t.LW5tCE)
                })]
            });
        case eh.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let {
                daysPastDue: e$, dismissUntil: eq
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: r.type,
                    onClick: () => {
                        eL(eq)
                    }
                }), ex.intl.format(ex.t.zxU0Kp, {
                    daysPastDue: e$
                }), (0, i.jsx)(u.Z_L, {
                    noticeType: eh.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                    onClick: () => {
                        eL(eq), (0, eo.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, {
                            section: eh.nc_.SUBSCRIPTIONS
                        })
                    },
                    children: ex.intl.string(ex.t.q8rxeS)
                })]
            });
        case eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        eL(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), ex.intl.string(ex.t.LlZaoX), (0, i.jsx)(u.Z_L, {
                    noticeType: eh.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        eL(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, eo.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, {
                            section: eh.nc_.SUBSCRIPTIONS
                        })
                    },
                    children: ex.intl.string(ex.t["Zpd+Yq"])
                })]
            });
        case eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        eL(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), ex.intl.string(ex.t["30YfCr"]), (0, i.jsx)(u.Z_L, {
                    noticeType: eh.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        eL(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, eo.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, {
                            section: eh.nc_.SUBSCRIPTIONS
                        })
                    },
                    children: ex.intl.string(ex.t.U5pKWA)
                })]
            });
        case eh.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eh.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        eL(r.metadata?.premiumSubscription?.currentPeriodEnd)
                    }
                }), J === eC.PremiumTypes.TIER_1 ? ex.intl.formatToPlainString(ex.t.b6QUvf, {
                    daysLeft: r.metadata.daysLeft
                }) : J === eC.PremiumTypes.TIER_0 ? ex.intl.formatToPlainString(ex.t["tURZ/M"], {
                    daysLeft: r.metadata.daysLeft
                }) : ex.intl.formatToPlainString(ex.t.AyC74I, {
                    daysLeft: r.metadata.daysLeft
                }), (0, i.jsx)(u.Z_L, {
                    noticeType: eh.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        eL(r.metadata?.premiumSubscription?.currentPeriodEnd), (0, eo.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, {
                            section: eh.nc_.SUBSCRIPTIONS
                        })
                    },
                    children: J === eC.PremiumTypes.TIER_1 ? ex.intl.string(ex.t.lboF5O) : J === eC.PremiumTypes.TIER_0 ? ex.intl.string(ex.t["4UPwOq"]) : ex.intl.string(ex.t["P/VvGb"])
                })]
            });
        case eh.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, i.jsx)(W.y, {
                buttonText: r.buttonText ?? ex.intl.string(ex.t["/g10LC"]),
                onGoBack: r.callback,
                onDismiss: () => eL(),
                showCloseButton: !0
            });
        case eh.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, i.jsx)(F.A, {
                guildId: t,
                analyticsLocations: s
            });
        case eh.kqX.QUARANTINED:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [ex.intl.string(ex.t.DVFJYf), (0, i.jsx)(u.eCN, {
                    href: eO.q,
                    target: "_blank",
                    noticeType: r.type,
                    children: ex.intl.string(ex.t.kvHdFN)
                }), (0, i.jsx)(u.MzZ, {
                    href: eR.A.getArticleURL(eh.MVz.QUARANTINE),
                    target: "_blank",
                    className: ef.yw,
                    children: ex.intl.string(ex.t.hvVgAZ)
                })]
            });
        case eh.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let {
                dismissUntil: eW, decisionId: eX
            } = r.metadata;
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.WARNING,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eh.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                    onClick: () => {
                        null != t && (0, H.wu)(t), eL(eW)
                    }
                }), ex.intl.string(ex.t.B8ruyY), (0, i.jsx)(u.zr9, {
                    onClick: () => {
                        null != t && (0, H.W5)(t, eX, () => {
                            eL(eW), (0, H.wu)(t)
                        })
                    },
                    children: ex.intl.string(ex.t.oX14El)
                }), null != t ? (0, i.jsx)(u.zr9, {
                    onClick: () => X.A.open(t, eh.BEX.GUILD_AUTOMOD, void 0, eh.nd0.AUTOMOD_MENTION_SPAM),
                    children: ex.intl.string(ex.t["1R7QIx"])
                }) : null]
            });
        case eh.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.BRAND,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eh.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                    onClick: () => {
                        en.li(), eL()
                    }
                }), ex.intl.string(ex.t.I1nKfO), (0, i.jsx)(u.Z_L, {
                    noticeType: eh.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                    onClick: () => {
                        (0, u.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("16833"), n.e("95095")]).then(n.bind(n, 156189));
                            return t => (0, i.jsx)(e, {
                                ...t
                            })
                        }), en.li(), eL()
                    },
                    children: ex.intl.string(ex.t.l5xYnH)
                })]
            });
        case eh.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.DANGER,
                children: [(0, i.jsx)(u.PMB, {
                    noticeType: eh.kqX.QUESTS_PROGRESS_INTERRUPTION,
                    onClick: () => {
                        r.metadata?.streamKey != null && (0, et.lk)(r.metadata.streamKey)
                    }
                }), ex.intl.string(ex.t.rOx44m)]
            });
        case eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, i.jsxs)(u.$Td, {
                color: u.Hv$.BRAND,
                children: [(0, i.jsx)(u.PMB, {
                    onClick: () => {
                        eL(r.metadata?.dismissUntil)
                    },
                    noticeType: eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR
                }), ex.intl.string(ex.t["0klLS7"]), (0, i.jsx)(u.Z_L, {
                    onClick: () => {
                        (0, el.$)(), eL(r.metadata?.dismissUntil)
                    },
                    noticeType: eh.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    children: ex.intl.string(ex.t.e4y2VM)
                })]
            });
        case eh.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, i.jsx)(ei.A, {});
        case eh.kqX.SYSTEM_SERVICE_WARNING:
            return (0, i.jsx)(es.A, {});
        default:
            return null
    }
});

function eb() {
    let {
        analyticsLocations: e
    } = (0, P.Ay)(f.A.NOTICE);
    return (0, i.jsx)(P.f5, {
        value: e,
        children: (0, i.jsx)(ej, {})
    })
}