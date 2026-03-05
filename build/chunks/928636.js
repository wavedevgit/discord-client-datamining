/** chunk id: 928636, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => eC
});
var i, r = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(110259),
    d = n(311907),
    c = n(554146),
    u = n(827734),
    A = n(990078),
    h = n(397927),
    _ = n(956793),
    m = n(492684),
    g = n(212245),
    p = n(573648),
    E = n(447031),
    I = n(908289),
    f = n(682261),
    C = n(672979),
    T = n(90644),
    N = n(960076),
    S = n(847177),
    x = n(359549),
    v = n(793574),
    y = n(688810),
    b = n(139286),
    O = n(627363),
    L = n(587895),
    R = n(47167),
    P = n(402216),
    j = n(939341),
    D = n(681827),
    M = n(755395),
    w = n(826673),
    U = n(609425),
    G = n(73392),
    k = n(769015),
    V = n(279250),
    B = n(607407),
    H = n(290987),
    F = n(928550),
    Y = n(594262),
    W = n(378570),
    q = n(345942),
    K = n(804980),
    z = n(260509),
    $ = n(961350),
    Q = n(734057),
    X = n(287809),
    Z = n(879945),
    J = n(266080),
    ee = n(139675),
    et = n(403362),
    en = n(427262),
    ei = n(281489),
    er = n(652215),
    el = n(985018),
    ea = n(270582);
let es = [14, 14, 12, 12, 10, 8, 6],
    eo = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, r.jsx)(h.Text, {
            className: s()(ea.P_, t),
            variant: "text-sm/semibold",
            children: e
        })
    },
    ed = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, r.jsx)(h.Text, {
            className: s()(ea.P_, t),
            variant: "text-xs/normal",
            color: "text-muted",
            children: e
        })
    },
    ec = (0, m.A)(e => {
        let {
            message: t
        } = e;
        return (0, r.jsx)("div", {
            className: ea.__invalid_timestamp,
            children: t
        })
    }),
    eu = e => {
        let {
            children: t
        } = e;
        return (0, r.jsx)("section", {
            className: ea.uW,
            children: t
        })
    },
    eA = e => {
        let {
            inset: t,
            className: n
        } = e;
        return (0, r.jsx)("div", {
            className: s()(ea.me, {
                [ea.C5]: t
            }, n)
        })
    },
    eh = e => {
        let {
            onCloudPlayClick: t,
            analyticsLocations: n
        } = e;
        return (0, b.A)({
            name: o.ImpressionNames.CLOUD_PLAY_CTA,
            type: o.ImpressionTypes.VIEW,
            properties: {
                location_stack: n
            }
        }), (0, r.jsx)(A.m, {
            text: el.intl.string(el.t.JVwWva),
            children: (0, r.jsx)(h.Button, {
                size: "sm",
                variant: "primary",
                icon: h.hpF,
                text: el.intl.string(el.t.YsIsPU),
                onClick: t
            })
        })
    },
    e_ = e => {
        let {
            activity: t,
            user: n
        } = e, i = (0, Y.l)({
            activity: t,
            user: n,
            supportsAskToJoin: !1
        }), r = null != i;
        return {
            isJoinActivityButtonShown: r,
            joinActivityButtonAction: i,
            hasButton: r
        }
    },
    em = e => {
        let {
            activity: t,
            user: n
        } = e, {
            joinActivityButtonAction: i,
            isJoinActivityButtonShown: l
        } = e_({
            activity: t,
            user: n
        });
        if (l && null != i) {
            let {
                isJoining: e,
                handleJoinRequest: t,
                buttonCTA: n,
                tooltip: l,
                isEnabled: a
            } = i;
            return (0, r.jsx)(A.m, {
                text: l,
                asContainer: !a,
                children: (0, r.jsx)(h.Button, {
                    size: "sm",
                    variant: "secondary",
                    icon: h._xR,
                    text: n,
                    disabled: !a,
                    loading: e,
                    onClick: e => {
                        e.stopPropagation(), t()
                    }
                })
            })
        }
        return null
    },
    eg = e => {
        let {
            activity: t,
            analyticsLocations: n
        } = e, {
            application_id: i,
            name: l
        } = t, {
            data: a
        } = (0, O.YY)(i), s = (0, x.A)({
            application: a,
            analyticsLocations: n
        }), o = (0, w.JZ)(c.M.CLOUD_PLAY_NEW_BADGE), d = (0, F.L)(i);
        return null == s || d ? null : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(eA, {
                className: ea.gi
            }), (0, r.jsxs)("div", {
                className: ea.DK,
                children: [(0, r.jsxs)("div", {
                    className: ea.tJ,
                    children: [o ? null : (0, r.jsx)(h.LpS, {
                        text: el.intl.string(el.t.y2b7CA),
                        color: u.A.colors.BACKGROUND_BRAND.css
                    }), (0, r.jsx)(h.Text, {
                        variant: "text-xs/medium",
                        children: el.intl.formatToPlainString(el.t.RmiYF3, {
                            gameName: l
                        })
                    })]
                }), (0, r.jsx)(eh, {
                    onCloudPlayClick: s,
                    analyticsLocations: n
                })]
            })]
        })
    };
var ep = ((i = ep || {}).XBOX = "XBOX", i.SPOTIFY = "SPOTIFY", i.MULTIPLE = "MULTIPLE", i);
let eE = e => {
    let t, {
        src: n,
        onClick: i,
        onContextMenu: l
    } = e;
    switch (n) {
        case "XBOX":
            t = (0, r.jsx)(J.A, {
                className: ea.nr,
                color: u.A.unsafe_rawColors.PRIMARY_300.css
            });
            break;
        case "SPOTIFY":
            t = (0, r.jsx)(Z.A, {
                className: ea.nr,
                color: u.A.unsafe_rawColors.SPOTIFY.css
            });
            break;
        case "MULTIPLE":
            t = (0, r.jsx)("div", {
                className: ea.XQ,
                children: (0, r.jsx)(h._xR, {
                    size: "md",
                    className: s()(ea.nr, ea.iY),
                    color: u.A.unsafe_rawColors.PRIMARY_300.css
                })
            });
            break;
        default:
            t = (0, r.jsx)("img", {
                src: n ?? void 0,
                alt: "",
                className: ea.nr
            })
    }
    return null != i || null != l ? (0, r.jsx)(h.DUT, {
        onClick: i,
        className: s()(null != i ? ea.vk : ""),
        onContextMenu: l,
        children: t
    }) : t
};
eE.Src = ep;
let eI = e => {
    let {
        priorityUser: t,
        title: n,
        subtitle: i,
        icon: l,
        onSubtitleClick: a,
        onIconClick: o,
        onContextMenu: d,
        guildId: c,
        displayNameFont: u
    } = e, A = (0, r.jsx)(h.Text, {
        className: ea.P_,
        variant: "text-sm/normal",
        color: "text-muted",
        children: i
    });
    return (0, r.jsxs)("header", {
        className: null != l ? ea.dI : ea.sk,
        children: [(0, r.jsx)(h.euF, {
            src: t.user.getAvatarURL(c, 32),
            "aria-label": t.user.username,
            size: h._3J.SIZE_32,
            className: ea.Nw,
            status: t.status,
            onContextMenu: d
        }), (0, r.jsxs)("div", {
            className: ea.__invalid_headerDetails,
            children: [(0, r.jsx)(h.Text, {
                className: s()(ea.P_, u),
                variant: "text-md/semibold",
                children: n
            }), null != a ? (0, r.jsx)(h.DUT, {
                className: ea.vk,
                onClick: a,
                children: A
            }) : A]
        }), null != l && null != o ? (0, r.jsx)(h.DUT, {
            className: ea.vk,
            onClick: o,
            children: l
        }) : l]
    })
};
eI.Icon = eE;
let ef = e => {
    let {
        children: t,
        className: n,
        ...i
    } = e;
    return (0, r.jsx)(h.vN3, {
        children: (0, r.jsx)(M.A, {
            noBackground: !0,
            className: s()(n, ea.iE),
            padded: !1,
            ...i,
            children: t
        })
    })
};
ef.Header = eI, ef.Body = e => {
    let {
        children: t
    } = e;
    return (0, r.jsx)(M.A, {
        inset: !0,
        padded: !1,
        className: ea.rf,
        children: t
    })
}, ef.Separator = eA, ef.VoiceSection = e => {
    let {
        guild: t,
        channel: n,
        partySize: i,
        members: a,
        onChannelContextMenu: o
    } = e, d = l.useRef(null), c = (0, R.Ay)(n, !0), u = (0, z.Iv)(t, 32), A = (0, z.Rb)(t);
    return (0, r.jsx)(eu, {
        children: (0, r.jsxs)("div", {
            className: ea.iO,
            ref: d,
            onContextMenu: e => o(e, n),
            children: [(0, r.jsx)(h.DUT, {
                onClick: () => (0, q.u)(t.id),
                "aria-hidden": !0,
                tabIndex: -1,
                children: (0, r.jsxs)("div", {
                    className: ea.J4,
                    children: [null != u ? (0, r.jsx)("img", {
                        alt: "",
                        src: u,
                        className: s()(ea.y8, ea.p8)
                    }) : (0, r.jsx)("div", {
                        className: ea.I,
                        children: (0, r.jsx)("div", {
                            className: ea.lB,
                            style: {
                                fontSize: es[A.length] ?? es[es.length - 1]
                            },
                            children: A
                        })
                    }), (0, r.jsx)("div", {
                        className: ea._s,
                        children: (0, r.jsx)(h.HKD, {
                            size: "md",
                            color: "currentColor",
                            className: ea.ZS
                        })
                    })]
                })
            }), (0, r.jsx)(h.DUT, {
                onClick: () => {
                    _.default.selectVoiceChannel(n.id), (0, W.iN)(n.id)
                },
                focusProps: {
                    ringTarget: d
                },
                children: (0, r.jsxs)("div", {
                    className: ea.U6,
                    children: [eo(t.name, ea.BJ), ed(c, ea.BJ)]
                })
            }), (0, r.jsx)(ei.A, {
                partySize: i,
                members: a,
                guildId: t.id
            })]
        })
    })
}, ef.GameSection = e => {
    let {
        icon: t,
        name: n,
        partySize: i,
        members: l,
        activity: a
    } = e, {
        analyticsLocations: s
    } = (0, y.Ay)(v.A.NOW_PLAYING_ITEM_GAME_SECTION);
    return (0, r.jsxs)(eu, {
        children: [(0, r.jsxs)("div", {
            className: ea.yn,
            children: [null != t ? (0, r.jsx)("img", {
                alt: "",
                src: t,
                className: ea.RZ
            }) : null, (0, r.jsxs)("div", {
                children: [eo(n), ed(el.intl.formatToPlainString(el.t.C4WXvc, {
                    memberCount: i.totalSize
                }))]
            }), (0, r.jsx)(ei.A, {
                partySize: i,
                members: l
            })]
        }), (0, r.jsx)(eg, {
            activity: a,
            analyticsLocations: s
        })]
    })
}, ef.RichPresenceSection = e => {
    let {
        activity: t,
        getAssetImage: i,
        user: l
    } = e, {
        analyticsLocations: a
    } = (0, y.Ay)(v.A.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION), {
        data: o
    } = (0, O.YY)(t.application_id), {
        assets: d,
        details: c,
        state: u,
        application_id: A
    } = t, {
        hasButton: h
    } = e_({
        activity: t,
        user: l
    }), _ = (0, j.C4)(o)?.src ?? n(960648), m = (0, x.A)({
        application: o,
        analyticsLocations: a
    });
    return null != t.assets || (0, f.A)(t) || null != m ? (0, r.jsxs)(eu, {
        children: [(0, r.jsxs)("div", {
            className: s()(ea.tL, {
                [ea._2]: h
            }),
            children: [null != d && 0 !== Object.keys(d).length ? (0, r.jsxs)("div", {
                className: ea.YY,
                children: [(0, r.jsx)("img", {
                    alt: d.large_text ?? "",
                    src: i(A, d.large_image, [160, 160]) ?? _,
                    className: s()(ea.nX, {
                        [ea.p8]: null != d.small_image
                    })
                }), null != d.small_image ? (0, r.jsx)("img", {
                    alt: d.small_text ?? "",
                    src: i(A, d.small_image, [64, 64]),
                    className: ea.rp
                }) : null]
            }) : (0, r.jsx)("div", {
                className: ea.YY,
                children: (0, r.jsx)("img", {
                    alt: "",
                    src: _,
                    className: ea.nX
                })
            }), (0, r.jsxs)("div", {
                className: ea.JD,
                children: [eo(null != c && "" !== c ? c : t.name), null != u ? ed(u) : null, (() => {
                    let {
                        timestamps: e
                    } = t;
                    return null == e || !(0, C.A)(t) || (0, T.A)(t) ? null : ed((0, f.A)(t) ? (0, r.jsx)(ec, {
                        timestamps: e
                    }) : (0, r.jsx)(H.Ay, {
                        start: e.start,
                        end: e.end,
                        location: H.Ay.Locations.USER_ACTIVITY,
                        className: ea.__invalid_playTime
                    }))
                })()]
            }), (0, r.jsx)(em, {
                activity: t,
                user: l
            })]
        }), (0, r.jsx)(eg, {
            activity: t,
            analyticsLocations: a
        })]
    }) : null
}, ef.XboxSection = e => {
    let {
        title: t
    } = e;
    return (0, r.jsx)(eu, {
        children: (0, r.jsxs)("div", {
            className: ea.oc,
            children: [(0, r.jsx)(J.A, {
                className: ea.Ai
            }), (0, r.jsxs)("div", {
                className: ea.__invalid_xboxSectionDetails,
                children: [eo(t), ed(el.intl.string(el.t["JG9r+9"]))]
            })]
        })
    })
}, ef.SpotifySection = e => {
    let {
        activity: {
            assets: t,
            details: n,
            state: i,
            application_id: l
        },
        partySize: a,
        members: o,
        isSolo: d,
        getAssetImage: c
    } = e;
    return (0, r.jsx)(eu, {
        children: (0, r.jsxs)("div", {
            className: ea.uy,
            children: [null != t ? (0, r.jsxs)("div", {
                className: ea.YY,
                children: [(0, r.jsx)("img", {
                    alt: t.large_text ?? "",
                    src: c(l, t.large_image, [160, 160]),
                    className: s()(ea.nX, ea.Dy, {
                        [ea.p8]: null != t.small_image
                    })
                }), d ? null : (0, r.jsx)(Z.A, {
                    className: ea.rp,
                    color: u.A.unsafe_rawColors.SPOTIFY.css
                })]
            }) : (0, r.jsx)("div", {}), (0, r.jsxs)("div", {
                children: [null != n ? eo(n) : null, null != i ? ed(i.replace(/; /g, ", ")) : null]
            }), (0, r.jsx)(ei.A, {
                minAvatarsShown: d ? 2 : 1,
                partySize: a,
                members: o
            })]
        })
    })
}, ef.TwitchSection = e => {
    let t, {
            activity: i,
            user: l,
            getAssetImage: a,
            guildId: o
        } = e,
        {
            name: d,
            details: c,
            assets: u,
            application_id: A
        } = i;
    return null != u && (0, N.A)(i) && (t = (0, r.jsx)(D.A, {
        className: ea.E6,
        aspectRatio: 16 / 9,
        children: (0, r.jsxs)(h.DUT, {
            href: (0, I.A)(i),
            tag: "a",
            target: "_blank",
            children: [(0, r.jsx)("img", {
                alt: u.large_text ?? "",
                src: a(A, u.large_image, [900, 500]),
                className: ea.ZB
            }), (0, r.jsx)("img", {
                src: n(606621),
                className: ea.vc,
                alt: ""
            })]
        })
    })), (0, r.jsxs)(eu, {
        children: [(0, r.jsxs)("div", {
            className: s()({
                [ea.x5]: null == l,
                [ea.Qh]: null != l
            }),
            children: [(0, r.jsx)("img", {
                alt: "",
                src: p.A.get(er.fg2.TWITCH).icon.lightSVG,
                className: ea.Gq
            }), (0, r.jsxs)("div", {
                children: [eo(d), null != c ? ed(c) : null]
            }), null != l ? (0, r.jsx)(h.euF, {
                src: l.getAvatarURL(o, 24),
                "aria-label": l.username,
                className: ea.AZ,
                size: h._3J.SIZE_24
            }) : null]
        }), t]
    })
}, ef.ApplicationStreamingSection = e => {
    let {
        activity: t,
        user: n,
        applicationStream: i,
        onPreviewClick: l,
        guildId: a
    } = e, s = (0, d.bG)([Q.A], () => Q.A.getChannel(i.channelId)), [o, c] = (0, V.zP)(s), u = (0, r.jsxs)(h.DUT, {
        onClick: o ? l : void 0,
        className: ea.q_,
        children: [(0, r.jsx)(B.A, {
            stream: i,
            className: ea.IN
        }), (0, r.jsx)(h.Text, {
            className: ea.Er,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, V.CT)(c)
        })]
    }), A = (0, S.A)(t, i)?.activityText ?? el.intl.string(el.t.eXan7B), _ = (0, U.A)({
        userId: n.id,
        guildId: a
    }), m = (0, G.a)({
        displayNameStyles: _
    });
    return (0, r.jsxs)(eu, {
        children: [(0, r.jsxs)("div", {
            className: ea.ME,
            children: [(0, r.jsx)(h.euF, {
                size: h._3J.SIZE_32,
                src: n.getAvatarURL(a, 32),
                "aria-label": n.username,
                className: ea.OL
            }), (0, r.jsxs)("div", {
                children: [eo(en.Ay.getName(n), m), ed(A)]
            }), (0, r.jsx)(P.Ay, {
                size: P.Ay.Sizes.SMALL
            })]
        }), u]
    })
}, ef.EmbeddedActivitySection = e => {
    let {
        activity: t,
        channel: n,
        guildId: i,
        participants: a
    } = e, [s, o] = l.useState(null), c = t.application_id;
    l.useEffect(() => {
        null != c && (0, ee.RG)(c, ["embedded_background"]).then(e => {
            let [t] = e;
            return o(t)
        })
    }, [c]);
    let u = (0, d.yK)([X.default, $.default], () => Array.from(a).map(e => $.default.getId() === e ? null : X.default.getUser(e)).filter(et.Vq)),
        A = (0, g.p)(),
        {
            analyticsLocations: _
        } = (0, y.Ay)();
    if (null == c) return null;
    let m = L.A.getApplication(c);
    if (null == m) return null;
    let p = null != t.created_at && t.created_at > 0 ? {
            start: t.created_at
        } : void 0,
        I = (0, ee.uD)(m.id, s, 300);
    return (0, r.jsxs)(eu, {
        children: [(0, r.jsxs)("div", {
            className: ea.h1,
            children: [(0, r.jsx)(k.A, {
                game: m,
                size: k.M.XSMALL,
                className: ea.VZ
            }), (0, r.jsx)("div", {
                className: ea.F0,
                children: (0, r.jsx)(h.Text, {
                    variant: "text-sm/semibold",
                    children: m.name
                })
            }), null != p ? (0, r.jsx)("div", {
                className: ea.T$,
                children: (0, r.jsx)(h.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: (0, r.jsx)(ec, {
                        timestamps: p
                    })
                })
            }) : null]
        }), (0, r.jsxs)("div", {
            className: ea.Kt,
            children: [null != I ? (0, r.jsx)("img", {
                src: I,
                alt: m.name,
                className: ea.pV
            }) : null, (0, r.jsxs)("div", {
                className: ea.d4,
                children: [(0, r.jsx)(K.LN, {
                    users: u,
                    guildId: i,
                    channelId: n.id
                }), (0, r.jsx)("div", {
                    className: ea.ZE,
                    children: (0, r.jsx)(h.Button, {
                        variant: "primary",
                        size: "sm",
                        text: el.intl.string(el.t.VJlc0S),
                        onClick: e => {
                            e.stopPropagation(), (0, E.A)({
                                applicationId: c,
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
let eC = ef