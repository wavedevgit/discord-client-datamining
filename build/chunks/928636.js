/** chunk id: 928636 params = (module,exports,require) **/
n.d(t, {
    A: () => eN
});
var i, a = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(110259),
    d = n(141628),
    c = n(311907),
    u = n(554146),
    A = n(827734),
    _ = n(990078),
    h = n(397927),
    m = n(956793),
    g = n(492684),
    p = n(212245),
    E = n(573648),
    I = n(447031),
    f = n(908289),
    C = n(682261),
    T = n(672979),
    N = n(90644),
    S = n(960076),
    x = n(847177),
    v = n(359549),
    b = n(793574),
    y = n(688810),
    O = n(139286),
    L = n(362490),
    R = n(627363),
    P = n(587895),
    D = n(47167),
    j = n(402216),
    M = n(939341),
    w = n(681827),
    U = n(755395),
    G = n(826673),
    k = n(609425),
    V = n(73392),
    B = n(769015),
    H = n(279250),
    F = n(607407),
    Y = n(290987),
    W = n(928550),
    K = n(594262),
    q = n(378570),
    z = n(345942),
    $ = n(804980),
    Q = n(260509),
    X = n(961350),
    Z = n(734057),
    J = n(287809),
    ee = n(879945),
    et = n(266080),
    en = n(139675),
    ei = n(403362),
    ea = n(427262),
    er = n(281489),
    el = n(652215),
    es = n(985018),
    eo = n(630968);
let ed = [14, 14, 12, 12, 10, 8, 6],
    ec = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, a.jsx)(h.Text, {
            className: s()(eo.P_, t),
            variant: "text-sm/semibold",
            children: e
        })
    },
    eu = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, a.jsx)(h.Text, {
            className: s()(eo.P_, t),
            variant: "text-xs/normal",
            color: "text-muted",
            children: e
        })
    },
    eA = (0, g.A)(e => {
        let {
            message: t
        } = e;
        return (0, a.jsx)("div", {
            className: eo.__invalid_timestamp,
            children: t
        })
    }),
    e_ = e => {
        let {
            children: t
        } = e;
        return (0, a.jsx)("section", {
            className: eo.uW,
            children: t
        })
    },
    eh = e => {
        let {
            inset: t,
            className: n
        } = e;
        return (0, a.jsx)("div", {
            className: s()(eo.me, {
                [eo.C5]: t
            }, n)
        })
    },
    em = e => {
        let {
            onCloudPlayClick: t,
            analyticsLocations: n
        } = e;
        return (0, O.A)({
            name: o.ImpressionNames.CLOUD_PLAY_CTA,
            type: o.ImpressionTypes.VIEW,
            properties: {
                location_stack: n
            }
        }), (0, a.jsx)(_.m, {
            text: es.intl.string(es.t.JVwWva),
            children: (0, a.jsx)(h.Button, {
                size: "sm",
                variant: "primary",
                icon: h.hpF,
                text: es.intl.string(es.t.YsIsPU),
                onClick: t
            })
        })
    },
    eg = e => {
        let {
            activity: t,
            user: n
        } = e, i = (0, K.l)({
            activity: t,
            user: n,
            supportsAskToJoin: !1
        }), a = null != i, {
            data: r
        } = (0, R.YY)(t.application_id), {
            fetched: l,
            hasAlreadyLinked: s,
            canStartAuthorization: o,
            startAuthorization: d
        } = (0, L.RD)(r), c = !a && l && o && !s;
        return {
            isJoinActivityButtonShown: a,
            joinActivityButtonAction: i,
            isLinkAccountButtonShown: c,
            startAuthorization: d,
            hasButton: a || c
        }
    },
    ep = e => {
        let {
            activity: t,
            user: n
        } = e, {
            joinActivityButtonAction: i,
            isJoinActivityButtonShown: r,
            isLinkAccountButtonShown: l,
            startAuthorization: s
        } = eg({
            activity: t,
            user: n
        }), {
            newestAnalyticsLocation: o
        } = (0, y.Ay)();
        if (r && null != i) {
            let {
                isJoining: e,
                handleJoinRequest: t,
                buttonCTA: n,
                tooltip: r,
                isEnabled: l
            } = i;
            return (0, a.jsx)(_.m, {
                text: r,
                asContainer: !l,
                children: (0, a.jsx)(h.Button, {
                    size: "sm",
                    variant: "secondary",
                    icon: h._xR,
                    text: n,
                    disabled: !l,
                    loading: e,
                    onClick: e => {
                        e.stopPropagation(), t()
                    }
                })
            })
        }
        return l ? (0, a.jsx)(h.Button, {
            size: "sm",
            variant: "secondary",
            icon: d.A,
            text: es.intl.string(es.t.sbdnpw),
            onClick: e => {
                e.stopPropagation(), s({
                    analyticsLocations: [o]
                })
            }
        }) : null
    },
    eE = e => {
        let {
            activity: t,
            analyticsLocations: n
        } = e, {
            application_id: i,
            name: r
        } = t, {
            data: l
        } = (0, R.YY)(i), s = (0, v.A)({
            application: l,
            analyticsLocations: n
        }), o = (0, G.JZ)(u.M.CLOUD_PLAY_NEW_BADGE), d = (0, W.L)(i);
        return null == s || d ? null : (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(eh, {
                className: eo.gi
            }), (0, a.jsxs)("div", {
                className: eo.DK,
                children: [(0, a.jsxs)("div", {
                    className: eo.tJ,
                    children: [o ? null : (0, a.jsx)(h.LpS, {
                        text: es.intl.string(es.t.y2b7CA),
                        color: A.A.colors.BACKGROUND_BRAND.css
                    }), (0, a.jsx)(h.Text, {
                        variant: "text-xs/medium",
                        children: es.intl.formatToPlainString(es.t.RmiYF3, {
                            gameName: r
                        })
                    })]
                }), (0, a.jsx)(em, {
                    onCloudPlayClick: s,
                    analyticsLocations: n
                })]
            })]
        })
    };
var eI = ((i = eI || {}).XBOX = "XBOX", i.SPOTIFY = "SPOTIFY", i.MULTIPLE = "MULTIPLE", i);
let ef = e => {
    let t, {
        src: n,
        onClick: i,
        onContextMenu: r
    } = e;
    switch (n) {
        case "XBOX":
            t = (0, a.jsx)(et.A, {
                className: eo.nr,
                color: A.A.unsafe_rawColors.PRIMARY_300.css
            });
            break;
        case "SPOTIFY":
            t = (0, a.jsx)(ee.A, {
                className: eo.nr,
                color: A.A.unsafe_rawColors.SPOTIFY.css
            });
            break;
        case "MULTIPLE":
            t = (0, a.jsx)("div", {
                className: eo.XQ,
                children: (0, a.jsx)(h._xR, {
                    size: "md",
                    className: s()(eo.nr, eo.iY),
                    color: A.A.unsafe_rawColors.PRIMARY_300.css
                })
            });
            break;
        default:
            t = (0, a.jsx)("img", {
                src: n ?? void 0,
                alt: "",
                className: eo.nr
            })
    }
    return null != i || null != r ? (0, a.jsx)(h.DUT, {
        onClick: i,
        className: s()(null != i ? eo.vk : ""),
        onContextMenu: r,
        children: t
    }) : t
};
ef.Src = eI;
let eC = e => {
    let {
        priorityUser: t,
        title: n,
        subtitle: i,
        icon: r,
        onSubtitleClick: l,
        onIconClick: o,
        onContextMenu: d,
        guildId: c,
        displayNameFont: u
    } = e, A = (0, a.jsx)(h.Text, {
        className: eo.P_,
        variant: "text-sm/normal",
        color: "text-muted",
        children: i
    });
    return (0, a.jsxs)("header", {
        className: null != r ? eo.dI : eo.sk,
        children: [(0, a.jsx)(h.euF, {
            src: t.user.getAvatarURL(c, 32),
            "aria-label": t.user.username,
            size: h._3J.SIZE_32,
            className: eo.Nw,
            status: t.status,
            onContextMenu: d
        }), (0, a.jsxs)("div", {
            className: eo.__invalid_headerDetails,
            children: [(0, a.jsx)(h.Text, {
                className: s()(eo.P_, u),
                variant: "text-md/semibold",
                children: n
            }), null != l ? (0, a.jsx)(h.DUT, {
                className: eo.vk,
                onClick: l,
                children: A
            }) : A]
        }), null != r && null != o ? (0, a.jsx)(h.DUT, {
            className: eo.vk,
            onClick: o,
            children: r
        }) : r]
    })
};
eC.Icon = ef;
let eT = e => {
    let {
        children: t,
        className: n,
        ...i
    } = e;
    return (0, a.jsx)(h.vN3, {
        children: (0, a.jsx)(U.A, {
            noBackground: !0,
            className: s()(n, eo.iE),
            padded: !1,
            ...i,
            children: t
        })
    })
};
eT.Header = eC, eT.Body = e => {
    let {
        children: t
    } = e;
    return (0, a.jsx)(U.A, {
        inset: !0,
        padded: !1,
        className: eo.rf,
        children: t
    })
}, eT.Separator = eh, eT.VoiceSection = e => {
    let {
        guild: t,
        channel: n,
        partySize: i,
        members: l,
        onChannelContextMenu: o
    } = e, d = r.useRef(null), c = (0, D.Ay)(n, !0), u = (0, Q.Iv)(t, 32), A = (0, Q.Rb)(t);
    return (0, a.jsx)(e_, {
        children: (0, a.jsxs)("div", {
            className: eo.iO,
            ref: d,
            onContextMenu: e => o(e, n),
            children: [(0, a.jsx)(h.DUT, {
                onClick: () => (0, z.u)(t.id),
                "aria-hidden": !0,
                tabIndex: -1,
                children: (0, a.jsxs)("div", {
                    className: eo.J4,
                    children: [null != u ? (0, a.jsx)("img", {
                        alt: "",
                        src: u,
                        className: s()(eo.y8, eo.p8)
                    }) : (0, a.jsx)("div", {
                        className: eo.I,
                        children: (0, a.jsx)("div", {
                            className: eo.lB,
                            style: {
                                fontSize: ed[A.length] ?? ed[ed.length - 1]
                            },
                            children: A
                        })
                    }), (0, a.jsx)("div", {
                        className: eo._s,
                        children: (0, a.jsx)(h.HKD, {
                            size: "md",
                            color: "currentColor",
                            className: eo.ZS
                        })
                    })]
                })
            }), (0, a.jsx)(h.DUT, {
                onClick: () => {
                    m.default.selectVoiceChannel(n.id), (0, q.iN)(n.id)
                },
                focusProps: {
                    ringTarget: d
                },
                children: (0, a.jsxs)("div", {
                    className: eo.U6,
                    children: [ec(t.name, eo.BJ), eu(c, eo.BJ)]
                })
            }), (0, a.jsx)(er.A, {
                partySize: i,
                members: l,
                guildId: t.id
            })]
        })
    })
}, eT.GameSection = e => {
    let {
        icon: t,
        name: n,
        partySize: i,
        members: r,
        activity: l
    } = e, {
        analyticsLocations: s
    } = (0, y.Ay)(b.A.NOW_PLAYING_ITEM_GAME_SECTION);
    return (0, a.jsxs)(e_, {
        children: [(0, a.jsxs)("div", {
            className: eo.yn,
            children: [null != t ? (0, a.jsx)("img", {
                alt: "",
                src: t,
                className: eo.RZ
            }) : null, (0, a.jsxs)("div", {
                children: [ec(n), eu(es.intl.formatToPlainString(es.t.C4WXvc, {
                    memberCount: i.totalSize
                }))]
            }), (0, a.jsx)(er.A, {
                partySize: i,
                members: r
            })]
        }), (0, a.jsx)(eE, {
            activity: l,
            analyticsLocations: s
        })]
    })
}, eT.RichPresenceSection = e => {
    let {
        activity: t,
        getAssetImage: i,
        user: r
    } = e, {
        analyticsLocations: l
    } = (0, y.Ay)(b.A.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION), {
        data: o
    } = (0, R.YY)(t.application_id), {
        assets: d,
        details: c,
        state: u,
        application_id: A
    } = t, {
        hasButton: _
    } = eg({
        activity: t,
        user: r
    }), h = (0, M.C4)(o)?.src ?? n(960648), m = (0, v.A)({
        application: o,
        analyticsLocations: l
    });
    return null != t.assets || (0, C.A)(t) || null != m ? (0, a.jsxs)(e_, {
        children: [(0, a.jsxs)("div", {
            className: s()(eo.tL, {
                [eo._2]: _
            }),
            children: [null != d && 0 !== Object.keys(d).length ? (0, a.jsxs)("div", {
                className: eo.YY,
                children: [(0, a.jsx)("img", {
                    alt: d.large_text ?? "",
                    src: i(A, d.large_image, [160, 160]) ?? h,
                    className: s()(eo.nX, {
                        [eo.p8]: null != d.small_image
                    })
                }), null != d.small_image ? (0, a.jsx)("img", {
                    alt: d.small_text ?? "",
                    src: i(A, d.small_image, [64, 64]),
                    className: eo.rp
                }) : null]
            }) : (0, a.jsx)("div", {
                className: eo.YY,
                children: (0, a.jsx)("img", {
                    alt: "",
                    src: h,
                    className: eo.nX
                })
            }), (0, a.jsxs)("div", {
                className: eo.JD,
                children: [ec(null != c && "" !== c ? c : t.name), null != u ? eu(u) : null, (() => {
                    let {
                        timestamps: e
                    } = t;
                    return null == e || !(0, T.A)(t) || (0, N.A)(t) ? null : eu((0, C.A)(t) ? (0, a.jsx)(eA, {
                        timestamps: e
                    }) : (0, a.jsx)(Y.Ay, {
                        start: e.start,
                        end: e.end,
                        location: Y.Ay.Locations.USER_ACTIVITY,
                        className: eo.__invalid_playTime
                    }))
                })()]
            }), (0, a.jsx)(ep, {
                activity: t,
                user: r
            })]
        }), (0, a.jsx)(eE, {
            activity: t,
            analyticsLocations: l
        })]
    }) : null
}, eT.XboxSection = e => {
    let {
        title: t
    } = e;
    return (0, a.jsx)(e_, {
        children: (0, a.jsxs)("div", {
            className: eo.oc,
            children: [(0, a.jsx)(et.A, {
                className: eo.Ai
            }), (0, a.jsxs)("div", {
                className: eo.__invalid_xboxSectionDetails,
                children: [ec(t), eu(es.intl.string(es.t["JG9r+9"]))]
            })]
        })
    })
}, eT.SpotifySection = e => {
    let {
        activity: {
            assets: t,
            details: n,
            state: i,
            application_id: r
        },
        partySize: l,
        members: o,
        isSolo: d,
        getAssetImage: c
    } = e;
    return (0, a.jsx)(e_, {
        children: (0, a.jsxs)("div", {
            className: eo.uy,
            children: [null != t ? (0, a.jsxs)("div", {
                className: eo.YY,
                children: [(0, a.jsx)("img", {
                    alt: t.large_text ?? "",
                    src: c(r, t.large_image, [160, 160]),
                    className: s()(eo.nX, eo.Dy, {
                        [eo.p8]: null != t.small_image
                    })
                }), d ? null : (0, a.jsx)(ee.A, {
                    className: eo.rp,
                    color: A.A.unsafe_rawColors.SPOTIFY.css
                })]
            }) : (0, a.jsx)("div", {}), (0, a.jsxs)("div", {
                children: [null != n ? ec(n) : null, null != i ? eu(i.replace(/; /g, ", ")) : null]
            }), (0, a.jsx)(er.A, {
                minAvatarsShown: d ? 2 : 1,
                partySize: l,
                members: o
            })]
        })
    })
}, eT.TwitchSection = e => {
    let t, {
            activity: i,
            user: r,
            getAssetImage: l,
            guildId: o
        } = e,
        {
            name: d,
            details: c,
            assets: u,
            application_id: A
        } = i;
    return null != u && (0, S.A)(i) && (t = (0, a.jsx)(w.A, {
        className: eo.E6,
        aspectRatio: 16 / 9,
        children: (0, a.jsxs)(h.DUT, {
            href: (0, f.A)(i),
            tag: "a",
            target: "_blank",
            children: [(0, a.jsx)("img", {
                alt: u.large_text ?? "",
                src: l(A, u.large_image, [900, 500]),
                className: eo.ZB
            }), (0, a.jsx)("img", {
                src: n(606621),
                className: eo.vc,
                alt: ""
            })]
        })
    })), (0, a.jsxs)(e_, {
        children: [(0, a.jsxs)("div", {
            className: s()({
                [eo.x5]: null == r,
                [eo.Qh]: null != r
            }),
            children: [(0, a.jsx)("img", {
                alt: "",
                src: E.A.get(el.fg2.TWITCH).icon.lightSVG,
                className: eo.Gq
            }), (0, a.jsxs)("div", {
                children: [ec(d), null != c ? eu(c) : null]
            }), null != r ? (0, a.jsx)(h.euF, {
                src: r.getAvatarURL(o, 24),
                "aria-label": r.username,
                className: eo.AZ,
                size: h._3J.SIZE_24
            }) : null]
        }), t]
    })
}, eT.ApplicationStreamingSection = e => {
    let {
        activity: t,
        user: n,
        applicationStream: i,
        onPreviewClick: r,
        guildId: l
    } = e, s = (0, c.bG)([Z.A], () => Z.A.getChannel(i.channelId)), [o, d] = (0, H.zP)(s), u = (0, a.jsxs)(h.DUT, {
        onClick: o ? r : void 0,
        className: eo.q_,
        children: [(0, a.jsx)(F.A, {
            stream: i,
            className: eo.IN
        }), (0, a.jsx)(h.Text, {
            className: eo.Er,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, H.CT)(d)
        })]
    }), A = (0, x.A)(t, i)?.activityText ?? es.intl.string(es.t.eXan7B), _ = (0, k.A)({
        userId: n.id,
        guildId: l
    }), m = (0, V.a)({
        displayNameStyles: _
    });
    return (0, a.jsxs)(e_, {
        children: [(0, a.jsxs)("div", {
            className: eo.ME,
            children: [(0, a.jsx)(h.euF, {
                size: h._3J.SIZE_32,
                src: n.getAvatarURL(l, 32),
                "aria-label": n.username,
                className: eo.OL
            }), (0, a.jsxs)("div", {
                children: [ec(ea.Ay.getName(n), m), eu(A)]
            }), (0, a.jsx)(j.Ay, {
                size: j.Ay.Sizes.SMALL
            })]
        }), u]
    })
}, eT.EmbeddedActivitySection = e => {
    let {
        activity: t,
        channel: n,
        guildId: i,
        participants: l
    } = e, [s, o] = r.useState(null), d = t.application_id;
    r.useEffect(() => {
        null != d && (0, en.RG)(d, ["embedded_background"]).then(e => {
            let [t] = e;
            return o(t)
        })
    }, [d]);
    let u = (0, c.yK)([J.default, X.default], () => Array.from(l).map(e => X.default.getId() === e ? null : J.default.getUser(e)).filter(ei.Vq)),
        A = (0, p.p)(),
        {
            analyticsLocations: _
        } = (0, y.Ay)();
    if (null == d) return null;
    let m = P.A.getApplication(d);
    if (null == m) return null;
    let g = null != t.created_at && t.created_at > 0 ? {
            start: t.created_at
        } : void 0,
        E = (0, en.uD)(m.id, s, 300);
    return (0, a.jsxs)(e_, {
        children: [(0, a.jsxs)("div", {
            className: eo.h1,
            children: [(0, a.jsx)(B.A, {
                game: m,
                size: B.M.XSMALL,
                className: eo.VZ
            }), (0, a.jsx)("div", {
                className: eo.F0,
                children: (0, a.jsx)(h.Text, {
                    variant: "text-sm/semibold",
                    children: m.name
                })
            }), null != g ? (0, a.jsx)("div", {
                className: eo.T$,
                children: (0, a.jsx)(h.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: (0, a.jsx)(eA, {
                        timestamps: g
                    })
                })
            }) : null]
        }), (0, a.jsxs)("div", {
            className: eo.Kt,
            children: [null != E ? (0, a.jsx)("img", {
                src: E,
                alt: m.name,
                className: eo.pV
            }) : null, (0, a.jsxs)("div", {
                className: eo.d4,
                children: [(0, a.jsx)($.LN, {
                    users: u,
                    guildId: i,
                    channelId: n.id
                }), (0, a.jsx)("div", {
                    className: eo.ZE,
                    children: (0, a.jsx)(h.Button, {
                        variant: "primary",
                        size: "sm",
                        text: es.intl.string(es.t.VJlc0S),
                        onClick: e => {
                            e.stopPropagation(), (0, I.A)({
                                applicationId: d,
                                activityChannelId: n.id,
                                locationObject: A.location,
                                analyticsLocations: _
                            })
                        }
                    })
                })]
            })]
        })]
    })
};
let eN = eT