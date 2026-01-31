/** chunk id: 916768, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => ev,
    w: () => ek
});
var r = n(627968),
    i = n(64700),
    l = n(989349),
    o = n.n(l);
if (21552 == n.j) var a = n(758879);
var s = n(299855),
    c = n.n(s),
    u = n(311907),
    E = n(397927),
    d = n(157559),
    _ = n(827343),
    A = n(830215),
    T = n(503703),
    I = n(912851),
    O = n(169604),
    N = n(956793),
    p = n(785796),
    R = n(800342),
    S = n(55619),
    P = n(246605),
    y = n(271866),
    C = n(86980),
    f = n(322337),
    D = n(77729),
    g = n(573648),
    m = n(793574),
    h = n(688810),
    U = n(587895),
    M = n(315982),
    b = n(235986),
    j = n(420216),
    k = n(984870),
    L = n(626262),
    v = n(813803),
    x = n(709710),
    G = n(102609),
    w = n(49463),
    B = n(322223),
    q = n(137207),
    X = n(619029),
    V = n(202384),
    F = n(51758),
    H = n(571139),
    W = n(527012),
    Y = n(997509),
    K = n(475723),
    $ = n(598733),
    z = n(37770),
    J = n(74848),
    Z = n(532794),
    Q = n(234419),
    ee = n(814249),
    et = n(829219),
    en = n(597936),
    er = n(601730),
    ei = n(722255),
    el = n(613491),
    eo = n(464473),
    ea = n(780964),
    es = n(840065),
    ec = n(459321),
    eu = n(594609),
    eE = n(734057),
    ed = n(430452),
    e_ = n(383501),
    eA = n(967198),
    eT = n(287809),
    eI = n(67480),
    eO = n(147964),
    eN = n(519057),
    ep = n(954571),
    eR = n(975571),
    eS = n(723702),
    eP = n(652215),
    ey = n(502075),
    eC = n(788868),
    ef = n(831502),
    eD = n(731854),
    eg = n(985018),
    em = n(237082);

function eh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}
let eU = e => {
        var t;
        let {
            error: n,
            allowClick: i = !1
        } = e, l = null == (t = (0, x.B1)(n)) ? void 0 : t.errorCode, o = eg.intl.formatToPlainString(eg.t.ejOT95, {
            errorCode: l
        }), a = (0, r.jsx)(E.Text, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: em.fU,
            selectable: !0,
            children: o
        });
        return i ? (0, r.jsx)(E.DUT, {
            tag: "span",
            className: em.wz,
            onClick: () => i && open(eR.A.getArticleURL(eP.MVz.AV_ERROR_CODES)),
            children: a
        }) : a
    },
    eM = e => {
        let {
            noticeType: t
        } = e;
        return (0, r.jsxs)(E.$Td, {
            color: E.Hv$.DANGER,
            children: [(0, r.jsx)(E.PMB, {
                noticeType: t,
                onClick: () => {
                    ek()
                }
            }), eg.intl.string(eg.t.o3zuYz), (0, r.jsx)(eU, {
                error: x.iy.NO_INPUT_DEVICES
            }), (0, r.jsx)(E.eCN, {
                href: eR.A.getArticleURL(eP.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: eg.intl.string(eg.t.RYKKox)
            })]
        })
    };

function eb(e) {
    return (0, eS.isWindows)() && c().satisfies(null === D.A || void 0 === D.A ? void 0 : D.A.os.release, ey.PH) ? "".concat("ms-settings:sound-properties", "?endpointId=").concat(e) : "ms-settings:sound"
}

function ej(e) {
    var t;
    let n, i, {
            noticeType: l
        } = e,
        {
            windowsMuteAndZeroVolumeDetectionEnabled: o
        } = (0, z.I)({
            location: "AudioIssueNoticeNoInput"
        }),
        a = (0, J.x5)(eD.oh.AUDIO_INPUT),
        s = null != (t = null == a ? void 0 : a.guid) ? t : "",
        {
            inputDeviceOSMuted: d,
            inputDeviceOSVolume: _
        } = (0, u.cf)([ed.A], () => ({
            inputDeviceOSMuted: ed.A.getInputDeviceOSMuted(),
            inputDeviceOSVolume: ed.A.getInputDeviceOSVolume()
        })),
        A = (0, eS.isWindows)() && c().satisfies(null === D.A || void 0 === D.A ? void 0 : D.A.os.release, ey.PH) && o,
        T = !1;
    return A && !0 === d ? (n = eg.intl.string(eg.t.ppW3ri), i = (0, r.jsx)(E.eCN, {
        href: eb(s),
        noticeType: l,
        children: eg.intl.string(eg.t.QghSIq)
    })) : A && 0 === _ ? (n = eg.intl.string(eg.t.j4gGA4), i = (0, r.jsx)(E.eCN, {
        href: eb(s),
        noticeType: l,
        children: eg.intl.string(eg.t.QghSIq)
    })) : ed.A.supports(eD.O5.LOOPBACK) ? (n = eg.intl.string(eg.t.dNAJ18), T = !0, i = (0, r.jsx)(E.zr9, {
        onClick: () => {
            (0, es.openUserSettings)(ea.X.VOICE_AND_VIDEO_PANEL, {
                section: eP.nc_.VOICE
            })
        },
        children: eg.intl.string(eg.t.I6YlB4)
    })) : (n = eg.intl.string(eg.t.nCO9bI), i = (0, r.jsx)(E.eCN, {
        href: eR.A.getArticleURL(eP.MVz.NO_INPUT_DETECTED),
        noticeType: l,
        children: eg.intl.string(eg.t.RYKKox)
    })), (0, r.jsxs)(E.$Td, {
        color: E.Hv$.DANGER,
        children: [(0, r.jsx)(E.PMB, {
            noticeType: l,
            onClick: () => {
                ek(), (0, eu.h)()
            }
        }), n, (0, r.jsx)(eU, {
            allowClick: T,
            error: x.iy.NO_AUDIO_INPUT_DETECTED
        }), i]
    })
}

function ek(e) {
    I.A.dismiss(null != e ? {
        untilAtLeast: o()(e)
    } : void 0)
}
let eL = 21552 == n.j ? i.memo(function() {
    var e, t;
    let l = (0, u.bG)([eT.default], () => eT.default.getCurrentUser()),
        o = (0, u.bG)([eA.A], () => eA.A.getGuildId()),
        s = (0, u.bG)([eN.Ay], () => eN.Ay.getNotice()),
        {
            analyticsLocations: c
        } = (0, h.Ay)(),
        I = (0, F.H)(o),
        D = (0, Q.V)();
    if (i.useEffect(() => {
            if ((null == s ? void 0 : s.type) != null) {
                let e;
                if (null == D && (s.type === eP.kqX.PREMIUM_TIER_2_TRIAL_ENDING || s.type === eP.kqX.PREMIUM_TIER_0_TRIAL_ENDING)) return;
                let t = {};
                null != o && (t.guild_id = o), (null == D ? void 0 : D.trial_id) != null && (t.trial_id = D.trial_id), e = eh({
                    notice_type: s.type
                }, t), ep.default.track(eP.HAw.APP_NOTICE_VIEWED, e)
            }
        }, [null == s ? void 0 : s.type, o, D]), i.useEffect(() => {
            if (null != s && s.type === eP.kqX.SURVEY && null != s.metadata) {
                let {
                    metadata: e
                } = s, t = w.A.getUserExperimentDescriptor(e.id);
                null != t && (0, G.LQ)(e.id, t), (async () => {
                    var e, t;
                    (null == (e = s.metadata) ? void 0 : e.id) != null && await (0, P.oX)(null == (t = s.metadata) ? void 0 : t.id)
                })()
            }
        }, [s]), null == s) return null;
    let m = null != s.type ? eN.Re[s.type] : null,
        x = null != s.type ? eN.k3[s.type] : null,
        z = null != s.type ? eN.f7[s.type] : null,
        J = eN.pe[s.type];
    if (null != m) return (0, r.jsx)(L.$, {
        dismissibleContent: m,
        noticeType: s.type
    });
    if (null != x) return (0, r.jsx)(v._, {
        dismissibleContent: x,
        noticeType: s.type
    });
    if (null != z) return (0, r.jsx)(k.T, {
        dismissibleContent: z
    });
    if (null != J) return (0, r.jsx)(j.r, {
        dismissibleContent: J,
        noticeType: s.type
    });
    let eu = null == (e = s.metadata) ? void 0 : e.premiumType;
    switch (s.type) {
        case eP.kqX.PTT_NO_KEYBIND_WARNING:
            return (0, r.jsx)(ec.A, {});
        case eP.kqX.LURKING_GUILD:
            return (0, r.jsx)($.A, {});
        case eP.kqX.PENDING_MEMBER:
            return (0, r.jsx)(H.A, {});
        case eP.kqX.INVITED_TO_SPEAK:
            return (0, r.jsx)(el.A, {});
        case eP.kqX.GUILD_RAID_NOTIFICATION:
            let {
                dismissUntil: ed
            } = s.metadata;
            return (0, r.jsx)(B.A, {
                onDismiss: () => ek(ed)
            });
        case eP.kqX.WIN32_DEPRECATED_MESSAGE:
            let {
                dismissUntil: ey
            } = s.metadata;
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => ek(ey),
                    noticeType: s.type
                }), eg.intl.format(eg.t["08KQ1P"], {
                    helpCenterLink: eR.A.getArticleURL(eP.MVz.WIN32_DEPRECATE)
                })]
            });
        case eP.kqX.WIN7_8_DEPRECATED_MESSAGE:
            let {
                dismissUntil: eD
            } = s.metadata;
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => ek(eD),
                    noticeType: s.type
                }), eg.intl.format(eg.t["8Je+dX"], {
                    helpCenterLink: eR.A.getArticleURL(eP.MVz.WIN7_8_DEPRECATE)
                })]
            });
        case eP.kqX.MACOS_19_DEPRECATED_MESSAGE:
            let {
                dismissUntil: eU
            } = s.metadata;
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => ek(eU),
                    noticeType: s.type
                }), eg.intl.format(eg.t.q8VPLo, {
                    helpCenterLink: eR.A.getArticleURL(eP.MVz.MACOS_19_DEPRECATE)
                })]
            });
        case eP.kqX.E2EE_UPDATE_REQUIRED:
            let {
                dismissUntil: eb
            } = s.metadata;
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => ek(eb),
                    noticeType: s.type
                }), eg.intl.format(eS.isPlatformEmbedded ? eg.t.J232TI : eg.t.vceuiL, {
                    helpCenterLink: eR.A.getArticleURL(eP.MVz.END_TO_END_ENCRYPTION)
                })]
            });
        case eP.kqX.GENERIC:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => ek(),
                    noticeType: s.type
                }), s.message, null != s.buttonText ? (0, r.jsx)(E.Z_L, {
                    onClick: s.callback,
                    noticeType: s.type,
                    children: s.buttonText
                }) : null]
            });
        case eP.kqX.LAUNCH_GAME_FAILURE:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => ek(),
                    noticeType: s.type
                }), s.message, null != s.buttonText ? (0, r.jsx)(E.Z_L, {
                    onClick: s.callback,
                    noticeType: s.type,
                    children: s.buttonText
                }) : null]
            });
        case eP.kqX.VOICE_DISABLED:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => {
                        O.A.clearRemoteDisconnectVoiceChannelId(), ek()
                    },
                    noticeType: s.type
                }), eg.intl.string(eg.t.bOQ3jV), (0, r.jsx)(E.Z_L, {
                    onClick: () => {
                        let e = e_.A.getRemoteDisconnectVoiceChannelId();
                        null != e && null != eE.A.getChannel(e) && N.default.selectVoiceChannel(e)
                    },
                    noticeType: s.type,
                    children: eg.intl.string(eg.t.vD60Pv)
                })]
            });
        case eP.kqX.VOICE_CONNECTED_LAST_SESSION:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => {
                        O.A.clearLastSessionVoiceChannelId(), ek()
                    },
                    noticeType: s.type
                }), eg.intl.string(eg.t.jY2lUA), (0, r.jsx)(E.Z_L, {
                    onClick: () => {
                        let e = e_.A.getLastSessionVoiceChannelId();
                        null != e && null != eE.A.getChannel(e) && N.default.selectVoiceChannel(e)
                    },
                    noticeType: s.type,
                    children: eg.intl.string(eg.t.vD60Pv)
                })]
            });
        case eP.kqX.SPOTIFY_AUTO_PAUSED:
            let eL = g.A.get(eP.fg2.SPOTIFY);
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => ek(),
                    noticeType: s.type
                }), (0, r.jsx)("img", {
                    alt: "",
                    className: em.tV,
                    src: eL.icon.whiteSVG
                }), eg.intl.string(eg.t.D8Cp76), (0, r.jsx)(E.Z_L, {
                    onClick: () => (0, es.openUserSettings)(ea.X.VOICE_AND_VIDEO_PANEL, {
                        section: eP.nc_.VOICE
                    }),
                    noticeType: s.type,
                    children: eg.intl.string(eg.t.NiTd0e)
                }), (0, r.jsx)(E.MzZ, {
                    className: em.N0,
                    href: eR.A.getArticleURL(eP.MVz.SPOTIFY_AUTO_PAUSED),
                    target: "_blank",
                    children: eg.intl.string(eg.t.CiqAIU)
                })]
            });
        case eP.kqX.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [eg.intl.string(eg.t["f+Zaol"]), (0, r.jsx)(E.Z_L, {
                    noticeType: s.type,
                    onClick: () => I && null != o ? (0, V.Ze)(o) : M.R(),
                    children: eg.intl.string(eg.t.fiNVin)
                })]
            });
        case eP.kqX.UNVERIFIED_ACCOUNT:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [eg.intl.string(eg.t["3sWbf3"]), (0, r.jsx)(E.Z_L, {
                    noticeType: s.type,
                    onClick: () => {
                        A.A.verifyResend(), d.A.show({
                            title: eg.intl.string(eg.t.LykQYk),
                            body: eg.intl.format(eg.t.azKEPy, {
                                email: null == l ? void 0 : l.email
                            }),
                            cancelText: eg.intl.string(eg.t.Vm8akB),
                            onCancel: M.R
                        })
                    },
                    children: eg.intl.string(eg.t.WnX4J2)
                })]
            });
        case eP.kqX.SCHEDULED_MAINTENANCE:
            if (null == s.metadata) return null;
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => p.A.ackScheduledMaintenance(),
                    noticeType: s.type
                }), eg.intl.format(eg.t["yb96S+"], s.metadata), (0, r.jsx)(E.eCN, {
                    href: "".concat(eP.qF7.STATUS, "/incidents/").concat(s.metadata.id),
                    noticeType: s.type,
                    children: eg.intl.string(eg.t.hvVgAZ)
                })]
            });
        case eP.kqX.NO_INPUT_DETECTED:
            return (0, r.jsx)(ej, {
                noticeType: s.type
            });
        case eP.kqX.NO_INPUT_DEVICES_DETECTED:
            return (0, r.jsx)(eM, {
                noticeType: s.type
            });
        case eP.kqX.HARDWARE_MUTE:
            if (null == s.metadata) return null;
            let {
                vendor: ev, model: ex
            } = s.metadata;
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [eg.intl.format(eg.t.qoDex7, {
                    vendorName: ev.name,
                    modelName: ex.name
                }), (0, r.jsx)(E.PMB, {
                    noticeType: s.type,
                    onClick: () => {
                        _.A.setEnableHardwareMuteNotice(!1), ek()
                    }
                }), (0, r.jsx)(E.eCN, {
                    href: ex.url,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    noticeType: s.type,
                    children: eg.intl.string(eg.t["Yl/Riu"])
                })]
            });
        case eP.kqX.STREAMER_MODE:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.STREAMER_MODE,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => ek(),
                    noticeType: eP.kqX.STREAMER_MODE
                }), eg.intl.string(eg.t.iEgBXp), (0, r.jsx)(E.Z_L, {
                    onClick: () => S.A.setEnabled(!1),
                    noticeType: eP.kqX.STREAMER_MODE,
                    children: eg.intl.string(eg.t.R9GHya)
                })]
            });
        case eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == s.metadata) return null;
            let {
                skuId: eG, applicationId: ew
            } = s.metadata, eB = eI.A.get(eG), eq = U.A.getApplication(ew);
            if (null == eB || null == eq) return null;
            let eX = {
                page: eP.liQ.IN_APP
            };
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.PREMIUM_TIER_1,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => T.X(eB.id),
                    noticeType: eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                }), (0, r.jsx)(E.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: em.PC
                }), eg.intl.format(eg.t["g3MU/+"], {
                    applicationName: eq.name,
                    skuName: eB.name
                }), (0, r.jsx)(E.Z_L, {
                    noticeType: eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    onClick: () => (0, C.j)({
                        applicationId: eq.id,
                        skuId: eB.id,
                        openPremiumPaymentModal: () => {
                            (0, Z.A)({
                                initialPlanId: null,
                                subscriptionTier: eC.pe.TIER_2,
                                analyticsLocations: c,
                                analyticsObject: eX
                            })
                        },
                        analyticsLocations: c,
                        analyticsLocationObject: eX,
                        context: __OVERLAY__ ? eP.BRT.OVERLAY : eP.BRT.APP
                    }).then(() => T.X(eB.id)),
                    children: eg.intl.string(eg.t.KEwPYx)
                })]
            });
        case eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == s.metadata) return null;
            let {
                skuId: e,
                applicationId: t
            } = s.metadata, n = eI.A.get(e), i = U.A.getApplication(t);
            if (null == n || null == i) return null;
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.PREMIUM_TIER_1,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => ek(),
                    noticeType: eP.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                }), (0, r.jsx)(E.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: em.PC
                }), eg.intl.format(eg.t.LquIKC, {
                    applicationName: i.name,
                    skuName: n.name
                }), (0, r.jsx)(E.zr9, {
                    children: (0, r.jsx)(a.N_, {
                        onClick: () => ek(),
                        to: {
                            pathname: eP.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
                            state: {
                                scrollRestoration: !1
                            }
                        },
                        children: eg.intl.string(eg.t.hvVgAZ)
                    })
                })]
            })
        }
        case eP.kqX.SURVEY: {
            let e = s.metadata;
            if (null == e) return null;
            let {
                key: t,
                prompt: n,
                cta: i,
                url: l,
                embedded: o,
                id: a
            } = e;
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.CUSTOM,
                children: [(0, r.jsx)(E.PMB, {
                    noticeType: eP.kqX.SURVEY,
                    onClick: () => {
                        (0, P.pX)(t, !0)
                    }
                }), n, (0, r.jsx)(E.Z_L, {
                    noticeType: eP.kqX.SURVEY,
                    onClick: () => {
                        o ? (0, ee.K)(a) : window.open(l, "_blank"), (0, P.pX)(t, !1)
                    },
                    children: i
                })]
            })
        }
        case eP.kqX.CORRUPT_INSTALLATION:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [eg.intl.string(eg.t["ugxmk/"]), (0, r.jsx)(E.eCN, {
                    href: eR.A.getArticleURL(eP.MVz.CORRUPT_INSTALLATION),
                    target: "_blank",
                    noticeType: s.type,
                    children: eg.intl.string(eg.t["6ik4Xk"])
                })]
            });
        case eP.kqX.VIDEO_UNSUPPORTED_BROWSER:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => ek(),
                    noticeType: eP.kqX.VIDEO_UNSUPPORTED_BROWSER
                }), eg.intl.string(eg.t.wVjKGi), (0, r.jsx)(E.Z_L, {
                    noticeType: eP.kqX.VIDEO_UNSUPPORTED_BROWSER,
                    onClick: () => {
                        (0, E.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                            return t => (0, r.jsx)(e, eh({
                                source: "Video unsupported browser"
                            }, t))
                        })
                    },
                    children: eg.intl.string(eg.t["1WjMbC"])
                })]
            });
        case eP.kqX.DISPATCH_ERROR:
            if (null == s.metadata) return null;
            let {
                error: eV
            } = s.metadata;
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => ek(),
                    noticeType: eP.kqX.DISPATCH_ERROR
                }), null == eV ? void 0 : eV.displayMessage, (0, r.jsx)(E.Z_L, {
                    noticeType: eP.kqX.DISPATCH_ERROR,
                    onClick: () => (0, E.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("88014").then(n.bind(n, 627261));
                        return t => (0, r.jsx)(e, eh({}, t))
                    }),
                    children: eg.intl.string(eg.t.hvVgAZ)
                })]
            });
        case eP.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == s.metadata) return null;
            let {
                progress: eF, total: eH, name: eW
            } = s.metadata;
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DEFAULT,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => ek(),
                    noticeType: eP.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS
                }), (0, r.jsxs)(b.A, {
                    justify: b.A.Justify.CENTER,
                    children: [null != eW ? eg.intl.formatToPlainString(eg.t["pHj+z4"], {
                        name: "".concat(eW),
                        progress: eF,
                        total: eH
                    }) : eg.intl.formatToPlainString(eg.t["lHZn+A"], {
                        progress: eF,
                        total: eH
                    }), (0, r.jsx)(E.y$y, {
                        type: E.y$y.Type.PULSING_ELLIPSIS,
                        className: em.gO
                    })]
                })]
            });
        case eP.kqX.APPLICATION_TEST_MODE:
            if (null == s.metadata) return null;
            if (null != eO.A.testModeEmbeddedApplicationId) return (0, r.jsx)(E.$Td, {
                color: E.Hv$.WARNING,
                children: (0, r.jsxs)(b.A, {
                    justify: b.A.Justify.CENTER,
                    align: b.A.Align.CENTER,
                    children: [(0, r.jsx)("div", {
                        children: eg.intl.format(eg.t["1qxVe4"], {
                            applicationName: s.metadata.applicationName
                        })
                    }), (0, r.jsx)(E.PMB, {
                        onClick: y.cL,
                        noticeType: eP.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
            return (0, r.jsx)(E.$Td, {
                color: E.Hv$.WARNING,
                children: (0, r.jsxs)(b.A, {
                    justify: b.A.Justify.CENTER,
                    align: b.A.Align.CENTER,
                    children: [(0, r.jsx)("div", {
                        children: eg.intl.format(eg.t.Fv5HrE, {
                            applicationName: s.metadata.applicationName
                        })
                    }), (0, r.jsx)(f.A, {
                        dropdownSize: f.p.DropdownSizes.SMALL,
                        className: em.aV,
                        color: f.p.Colors.WHITE,
                        look: f.p.Looks.OUTLINED,
                        size: f.p.Sizes.MIN,
                        onSKUSelect: e => R.ct(e.id, {
                            analyticsSource: {
                                page: null,
                                section: eP.JJy.NOTIFICATION_BAR,
                                object: eP.ZSU.NAVIGATION_LINK
                            }
                        }),
                        applicationId: s.metadata.applicationId,
                        children: eg.intl.string(eg.t.Q5ZgpK)
                    }), (0, r.jsx)(E.PMB, {
                        onClick: y.cL,
                        noticeType: eP.kqX.APPLICATION_TEST_MODE
                    })]
                })
            });
        case eP.kqX.VIEWING_ROLES:
            return (0, r.jsx)(K.A, {});
        case eP.kqX.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(E.$Td, {
                color: eu === eC.PremiumTypes.TIER_1 ? E.Hv$.PREMIUM_TIER_1 : eu === eC.PremiumTypes.TIER_0 ? E.Hv$.PREMIUM_TIER_0 : E.Hv$.PREMIUM_TIER_2,
                children: [(0, r.jsx)(E.PMB, {
                    noticeType: eP.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        var e, t;
                        ek(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd)
                    }
                }), (0, r.jsx)(E.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: em.PC
                }), eu === eC.PremiumTypes.TIER_1 ? eg.intl.formatToPlainString(eg.t.fXv4wm, {
                    daysLeft: s.metadata.daysLeft
                }) : eu === eC.PremiumTypes.TIER_0 ? eg.intl.formatToPlainString(eg.t.ZOHZMr, {
                    daysLeft: s.metadata.daysLeft
                }) : eg.intl.formatToPlainString(eg.t.outyHh, {
                    daysLeft: s.metadata.daysLeft
                }), (0, r.jsx)(E.Z_L, {
                    noticeType: eP.kqX.PREMIUM_UNCANCEL,
                    onClick: () => {
                        var e, t;
                        ek(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), (0, E.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("62175"), n.e("14704"), n.e("1536")]).then(n.bind(n, 174705));
                            return t => {
                                var n, i;
                                return (0, r.jsx)(e, (n = eh({}, t), i = i = {
                                    daysLeft: s.metadata.daysLeft,
                                    premiumType: eu,
                                    analyticsSource: "Nag Bar",
                                    premiumSubscription: s.metadata.premiumSubscription
                                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r)
                                    }
                                    return n
                                })(Object(i)).forEach(function(e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                                }), n))
                            }
                        })
                    },
                    children: eu === eC.PremiumTypes.TIER_1 ? eg.intl.string(eg.t.BkbUPM) : eu === eC.PremiumTypes.TIER_0 ? eg.intl.string(eg.t.Px978X) : eg.intl.string(eg.t.LW5tCE)
                })]
            });
        case eP.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let {
                daysPastDue: eY, dismissUntil: eK
            } = s.metadata;
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, r.jsx)(E.PMB, {
                    noticeType: s.type,
                    onClick: () => {
                        ek(eK)
                    }
                }), eg.intl.format(eg.t.zxU0Kp, {
                    daysPastDue: eY
                }), (0, r.jsx)(E.Z_L, {
                    noticeType: eP.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                    onClick: () => {
                        ek(eK), (0, es.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, {
                            section: eP.nc_.SUBSCRIPTIONS
                        })
                    },
                    children: eg.intl.string(eg.t.q8rxeS)
                })]
            });
        case eP.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, r.jsx)(E.PMB, {
                    noticeType: eP.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        var e, t;
                        ek(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd)
                    }
                }), eg.intl.string(eg.t.LlZaoX), (0, r.jsx)(E.Z_L, {
                    noticeType: eP.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        var e, t;
                        ek(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), (0, es.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, {
                            section: eP.nc_.SUBSCRIPTIONS
                        })
                    },
                    children: eg.intl.string(eg.t["Zpd+Yq"])
                })]
            });
        case eP.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, r.jsx)(E.PMB, {
                    noticeType: eP.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        var e, t;
                        ek(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd)
                    }
                }), eg.intl.string(eg.t["30YfCr"]), (0, r.jsx)(E.Z_L, {
                    noticeType: eP.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        var e, t;
                        ek(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), (0, es.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, {
                            section: eP.nc_.SUBSCRIPTIONS
                        })
                    },
                    children: eg.intl.string(eg.t.U5pKWA)
                })]
            });
        case eP.kqX.PREMIUM_MISSING_PAYMENT:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, r.jsx)(E.PMB, {
                    noticeType: eP.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        var e, t;
                        ek(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd)
                    }
                }), eu === eC.PremiumTypes.TIER_1 ? eg.intl.formatToPlainString(eg.t.b6QUvf, {
                    daysLeft: s.metadata.daysLeft
                }) : eu === eC.PremiumTypes.TIER_0 ? eg.intl.formatToPlainString(eg.t["tURZ/M"], {
                    daysLeft: s.metadata.daysLeft
                }) : eg.intl.formatToPlainString(eg.t.AyC74I, {
                    daysLeft: s.metadata.daysLeft
                }), (0, r.jsx)(E.Z_L, {
                    noticeType: eP.kqX.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        var e, t;
                        ek(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), (0, es.openUserSettings)(ea.X.SUBSCRIPTIONS_PANEL, {
                            section: eP.nc_.SUBSCRIPTIONS
                        })
                    },
                    children: eu === eC.PremiumTypes.TIER_1 ? eg.intl.string(eg.t.lboF5O) : eu === eC.PremiumTypes.TIER_0 ? eg.intl.string(eg.t["4UPwOq"]) : eg.intl.string(eg.t["P/VvGb"])
                })]
            });
        case eP.kqX.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(W.y, {
                buttonText: null != (t = s.buttonText) ? t : eg.intl.string(eg.t["/g10LC"]),
                onGoBack: s.callback,
                onDismiss: () => ek(),
                showCloseButton: !0
            });
        case eP.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, r.jsx)(X.A, {
                guildId: o,
                analyticsLocations: c
            });
        case eP.kqX.QUARANTINED:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [eg.intl.string(eg.t.DVFJYf), (0, r.jsx)(E.eCN, {
                    href: ef.q,
                    target: "_blank",
                    noticeType: s.type,
                    children: eg.intl.string(eg.t.kvHdFN)
                }), (0, r.jsx)(E.MzZ, {
                    href: eR.A.getArticleURL(eP.MVz.QUARANTINE),
                    target: "_blank",
                    className: em.yw,
                    children: eg.intl.string(eg.t.hvVgAZ)
                })]
            });
        case eP.kqX.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [eg.intl.string(eg.t.Ugijzi), (0, r.jsx)(E.eCN, {
                    href: "".concat(eP.qF7.STATUS),
                    noticeType: s.type,
                    children: eg.intl.string(eg.t.hvVgAZ)
                }), (0, r.jsx)(E.PMB, {
                    onClick: () => ek(),
                    noticeType: eP.kqX.BLOCKED_BY_PROXY
                })]
            });
        case eP.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let {
                dismissUntil: e$, decisionId: ez
            } = s.metadata;
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.WARNING,
                children: [(0, r.jsx)(E.PMB, {
                    noticeType: eP.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                    onClick: () => {
                        null != o && (0, q.wu)(o), ek(e$)
                    }
                }), eg.intl.string(eg.t.B8ruyY), (0, r.jsx)(E.zr9, {
                    onClick: () => {
                        null != o && (0, q.W5)(o, ez, () => {
                            ek(e$), (0, q.wu)(o)
                        })
                    },
                    children: eg.intl.string(eg.t.oX14El)
                }), null != o ? (0, r.jsx)(E.zr9, {
                    onClick: () => Y.A.open(o, eP.BEX.GUILD_AUTOMOD, void 0, eP.nd0.AUTOMOD_MENTION_SPAM),
                    children: eg.intl.string(eg.t["1R7QIx"])
                }) : null]
            });
        case eP.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.BRAND,
                children: [(0, r.jsx)(E.PMB, {
                    noticeType: eP.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                    onClick: () => {
                        en.li(), ek()
                    }
                }), eg.intl.string(eg.t.I1nKfO), (0, r.jsx)(E.Z_L, {
                    noticeType: eP.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
                    onClick: () => {
                        (0, E.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("16833"), n.e("95095")]).then(n.bind(n, 156189));
                            return t => (0, r.jsx)(e, eh({}, t))
                        }), en.li(), ek()
                    },
                    children: eg.intl.string(eg.t.l5xYnH)
                })]
            });
        case eP.kqX.QUESTS_PROGRESS_INTERRUPTION:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.DANGER,
                children: [(0, r.jsx)(E.PMB, {
                    noticeType: eP.kqX.QUESTS_PROGRESS_INTERRUPTION,
                    onClick: () => {
                        var e;
                        (null == (e = s.metadata) ? void 0 : e.streamKey) != null && (0, et.lk)(s.metadata.streamKey)
                    }
                }), eg.intl.string(eg.t.rOx44m)]
            });
        case eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, r.jsxs)(E.$Td, {
                color: E.Hv$.BRAND,
                children: [(0, r.jsx)(E.PMB, {
                    onClick: () => {
                        var e;
                        ek(null == (e = s.metadata) ? void 0 : e.dismissUntil)
                    },
                    noticeType: eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR
                }), eg.intl.string(eg.t["0klLS7"]), (0, r.jsx)(E.Z_L, {
                    onClick: () => {
                        var e;
                        (0, ei.$)(), ek(null == (e = s.metadata) ? void 0 : e.dismissUntil)
                    },
                    noticeType: eP.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                    children: eg.intl.string(eg.t.e4y2VM)
                })]
            });
        case eP.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(er.A, {});
        case eP.kqX.SYSTEM_SERVICE_WARNING:
            return (0, r.jsx)(eo.A, {});
        default:
            return null
    }
}) : null;

function ev() {
    let {
        analyticsLocations: e
    } = (0, h.Ay)(m.A.NOTICE);
    return (0, r.jsx)(h.f5, {
        value: e,
        children: (0, r.jsx)(eL, {})
    })
}