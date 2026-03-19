/** chunk id: 928636 params = (module,exports,require) **/
n.d(t, {
    A: () => eC
});
var i, a = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
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
    y = n(793574),
    v = n(688810),
    b = n(139286),
    O = n(627363),
    L = n(587895),
    R = n(47167),
    P = n(402216),
    D = n(939341),
    M = n(681827),
    j = n(755395),
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
    K = n(345942),
    q = n(804980),
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
    ea = n(652215),
    er = n(985018),
    el = n(785352);
let es = [14, 14, 12, 12, 10, 8, 6],
    eo = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, a.jsx)(h.Text, {
            className: s()(el.P_, t),
            variant: "text-sm/semibold",
            children: e
        })
    },
    ed = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, a.jsx)(h.Text, {
            className: s()(el.P_, t),
            variant: "text-xs/normal",
            color: "text-muted",
            children: e
        })
    },
    ec = (0, m.A)(e => {
        let {
            message: t
        } = e;
        return (0, a.jsx)("div", {
            className: el.__invalid_timestamp,
            children: t
        })
    }),
    eu = e => {
        let {
            children: t
        } = e;
        return (0, a.jsx)("section", {
            className: el.uW,
            children: t
        })
    },
    eA = e => {
        let {
            inset: t,
            className: n
        } = e;
        return (0, a.jsx)("div", {
            className: s()(el.me, {
                [el.C5]: t
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
        }), (0, a.jsx)(A.m, {
            text: er.intl.string(er.t.JVwWva),
            children: (0, a.jsx)(h.Button, {
                size: "sm",
                variant: "primary",
                icon: h.hpF,
                text: er.intl.string(er.t.YsIsPU),
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
        }), a = null != i;
        return {
            isJoinActivityButtonShown: a,
            joinActivityButtonAction: i,
            hasButton: a
        }
    },
    em = e => {
        let {
            activity: t,
            user: n
        } = e, {
            joinActivityButtonAction: i,
            isJoinActivityButtonShown: r
        } = e_({
            activity: t,
            user: n
        });
        if (r && null != i) {
            let {
                isJoining: e,
                handleJoinRequest: t,
                buttonCTA: n,
                tooltip: r,
                isEnabled: l
            } = i;
            return (0, a.jsx)(A.m, {
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
        return null
    },
    eg = e => {
        let {
            activity: t,
            analyticsLocations: n
        } = e, {
            application_id: i,
            name: r
        } = t, {
            data: l
        } = (0, O.YY)(i), s = (0, x.A)({
            application: l,
            analyticsLocations: n
        }), o = (0, w.JZ)(c.M.CLOUD_PLAY_NEW_BADGE), d = (0, F.L)(i);
        return null == s || d ? null : (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(eA, {
                className: el.gi
            }), (0, a.jsxs)("div", {
                className: el.DK,
                children: [(0, a.jsxs)("div", {
                    className: el.tJ,
                    children: [o ? null : (0, a.jsx)(h.LpS, {
                        text: er.intl.string(er.t.y2b7CA),
                        color: u.A.colors.BACKGROUND_BRAND.css
                    }), (0, a.jsx)(h.Text, {
                        variant: "text-xs/medium",
                        children: er.intl.formatToPlainString(er.t.RmiYF3, {
                            gameName: r
                        })
                    })]
                }), (0, a.jsx)(eh, {
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
        onContextMenu: r
    } = e;
    switch (n) {
        case "XBOX":
            t = (0, a.jsx)(J.A, {
                className: el.nr,
                color: u.A.unsafe_rawColors.PRIMARY_300.css
            });
            break;
        case "SPOTIFY":
            t = (0, a.jsx)(Z.A, {
                className: el.nr,
                color: u.A.unsafe_rawColors.SPOTIFY.css
            });
            break;
        case "MULTIPLE":
            t = (0, a.jsx)("div", {
                className: el.XQ,
                children: (0, a.jsx)(h._xR, {
                    size: "md",
                    className: s()(el.nr, el.iY),
                    color: u.A.unsafe_rawColors.PRIMARY_300.css
                })
            });
            break;
        default:
            t = (0, a.jsx)("img", {
                src: n ?? void 0,
                alt: "",
                className: el.nr
            })
    }
    return null != i || null != r ? (0, a.jsx)(h.DUT, {
        onClick: i,
        className: s()(null != i ? el.vk : ""),
        onContextMenu: r,
        children: t
    }) : t
};
eE.Src = ep;
let eI = e => {
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
        className: el.P_,
        variant: "text-sm/normal",
        color: "text-muted",
        children: i
    });
    return (0, a.jsxs)("header", {
        className: null != r ? el.dI : el.sk,
        children: [(0, a.jsx)(h.euF, {
            src: t.user.getAvatarURL(c, 32),
            "aria-label": t.user.username,
            size: h._3J.SIZE_32,
            className: el.Nw,
            status: t.status,
            onContextMenu: d
        }), (0, a.jsxs)("div", {
            className: el.__invalid_headerDetails,
            children: [(0, a.jsx)(h.Text, {
                className: s()(el.P_, u),
                variant: "text-md/semibold",
                children: n
            }), null != l ? (0, a.jsx)(h.DUT, {
                className: el.vk,
                onClick: l,
                children: A
            }) : A]
        }), null != r && null != o ? (0, a.jsx)(h.DUT, {
            className: el.vk,
            onClick: o,
            children: r
        }) : r]
    })
};
eI.Icon = eE;
let ef = e => {
    let {
        children: t,
        className: n,
        ...i
    } = e;
    return (0, a.jsx)(h.vN3, {
        children: (0, a.jsx)(j.A, {
            noBackground: !0,
            className: s()(n, el.iE),
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
    return (0, a.jsx)(j.A, {
        inset: !0,
        padded: !1,
        className: el.rf,
        children: t
    })
}, ef.Separator = eA, ef.VoiceSection = e => {
    let {
        guild: t,
        channel: n,
        partySize: i,
        members: l,
        onChannelContextMenu: o
    } = e, d = r.useRef(null), c = (0, R.Ay)(n, !0), u = (0, z.Iv)(t, 32), A = (0, z.Rb)(t);
    return (0, a.jsx)(eu, {
        children: (0, a.jsxs)("div", {
            className: el.iO,
            ref: d,
            onContextMenu: e => o(e, n),
            children: [(0, a.jsx)(h.DUT, {
                onClick: () => (0, K.u)(t.id),
                "aria-hidden": !0,
                tabIndex: -1,
                children: (0, a.jsxs)("div", {
                    className: el.J4,
                    children: [null != u ? (0, a.jsx)("img", {
                        alt: "",
                        src: u,
                        className: s()(el.y8, el.p8)
                    }) : (0, a.jsx)("div", {
                        className: el.I,
                        children: (0, a.jsx)("div", {
                            className: el.lB,
                            style: {
                                fontSize: es[A.length] ?? es[es.length - 1]
                            },
                            children: A
                        })
                    }), (0, a.jsx)("div", {
                        className: el._s,
                        children: (0, a.jsx)(h.HKD, {
                            size: "md",
                            color: "currentColor",
                            className: el.ZS
                        })
                    })]
                })
            }), (0, a.jsx)(h.DUT, {
                onClick: () => {
                    _.default.selectVoiceChannel(n.id), (0, W.iN)(n.id)
                },
                focusProps: {
                    ringTarget: d
                },
                children: (0, a.jsxs)("div", {
                    className: el.U6,
                    children: [eo(t.name, el.BJ), ed(c, el.BJ)]
                })
            }), (0, a.jsx)(ei.A, {
                partySize: i,
                members: l,
                guildId: t.id
            })]
        })
    })
}, ef.GameSection = e => {
    let {
        icon: t,
        name: n,
        partySize: i,
        members: r,
        activity: l
    } = e, {
        analyticsLocations: s
    } = (0, v.Ay)(y.A.NOW_PLAYING_ITEM_GAME_SECTION);
    return (0, a.jsxs)(eu, {
        children: [(0, a.jsxs)("div", {
            className: el.yn,
            children: [null != t ? (0, a.jsx)("img", {
                alt: "",
                src: t,
                className: el.RZ
            }) : null, (0, a.jsxs)("div", {
                children: [eo(n), ed(er.intl.formatToPlainString(er.t.C4WXvc, {
                    memberCount: i.totalSize
                }))]
            }), (0, a.jsx)(ei.A, {
                partySize: i,
                members: r
            })]
        }), (0, a.jsx)(eg, {
            activity: l,
            analyticsLocations: s
        })]
    })
}, ef.RichPresenceSection = e => {
    let {
        activity: t,
        getAssetImage: i,
        user: r
    } = e, {
        analyticsLocations: l
    } = (0, v.Ay)(y.A.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION), {
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
        user: r
    }), _ = (0, D.C4)(o)?.src ?? n(960648), m = (0, x.A)({
        application: o,
        analyticsLocations: l
    });
    return null != t.assets || (0, f.A)(t) || null != m ? (0, a.jsxs)(eu, {
        children: [(0, a.jsxs)("div", {
            className: s()(el.tL, {
                [el._2]: h
            }),
            children: [null != d && 0 !== Object.keys(d).length ? (0, a.jsxs)("div", {
                className: el.YY,
                children: [(0, a.jsx)("img", {
                    alt: d.large_text ?? "",
                    src: i(A, d.large_image, [160, 160]) ?? _,
                    className: s()(el.nX, {
                        [el.p8]: null != d.small_image
                    })
                }), null != d.small_image ? (0, a.jsx)("img", {
                    alt: d.small_text ?? "",
                    src: i(A, d.small_image, [64, 64]),
                    className: el.rp
                }) : null]
            }) : (0, a.jsx)("div", {
                className: el.YY,
                children: (0, a.jsx)("img", {
                    alt: "",
                    src: _,
                    className: el.nX
                })
            }), (0, a.jsxs)("div", {
                className: el.JD,
                children: [eo(null != c && "" !== c ? c : t.name), null != u ? ed(u) : null, (() => {
                    let {
                        timestamps: e
                    } = t;
                    return null == e || !(0, C.A)(t) || (0, T.A)(t) ? null : ed((0, f.A)(t) ? (0, a.jsx)(ec, {
                        timestamps: e
                    }) : (0, a.jsx)(H.Ay, {
                        start: e.start,
                        end: e.end,
                        location: H.Ay.Locations.USER_ACTIVITY,
                        className: el.__invalid_playTime
                    }))
                })()]
            }), (0, a.jsx)(em, {
                activity: t,
                user: r
            })]
        }), (0, a.jsx)(eg, {
            activity: t,
            analyticsLocations: l
        })]
    }) : null
}, ef.XboxSection = e => {
    let {
        title: t
    } = e;
    return (0, a.jsx)(eu, {
        children: (0, a.jsxs)("div", {
            className: el.oc,
            children: [(0, a.jsx)(J.A, {
                className: el.Ai
            }), (0, a.jsxs)("div", {
                className: el.__invalid_xboxSectionDetails,
                children: [eo(t), ed(er.intl.string(er.t["JG9r+9"]))]
            })]
        })
    })
}, ef.SpotifySection = e => {
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
    return (0, a.jsx)(eu, {
        children: (0, a.jsxs)("div", {
            className: el.uy,
            children: [null != t ? (0, a.jsxs)("div", {
                className: el.YY,
                children: [(0, a.jsx)("img", {
                    alt: t.large_text ?? "",
                    src: c(r, t.large_image, [160, 160]),
                    className: s()(el.nX, el.Dy, {
                        [el.p8]: null != t.small_image
                    })
                }), d ? null : (0, a.jsx)(Z.A, {
                    className: el.rp,
                    color: u.A.unsafe_rawColors.SPOTIFY.css
                })]
            }) : (0, a.jsx)("div", {}), (0, a.jsxs)("div", {
                children: [null != n ? eo(n) : null, null != i ? ed(i.replace(/; /g, ", ")) : null]
            }), (0, a.jsx)(ei.A, {
                minAvatarsShown: d ? 2 : 1,
                partySize: l,
                members: o
            })]
        })
    })
}, ef.TwitchSection = e => {
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
    return null != u && (0, N.A)(i) && (t = (0, a.jsx)(M.A, {
        className: el.E6,
        aspectRatio: 16 / 9,
        children: (0, a.jsxs)(h.DUT, {
            href: (0, I.A)(i),
            tag: "a",
            target: "_blank",
            children: [(0, a.jsx)("img", {
                alt: u.large_text ?? "",
                src: l(A, u.large_image, [900, 500]),
                className: el.ZB
            }), (0, a.jsx)("img", {
                src: n(606621),
                className: el.vc,
                alt: ""
            })]
        })
    })), (0, a.jsxs)(eu, {
        children: [(0, a.jsxs)("div", {
            className: s()({
                [el.x5]: null == r,
                [el.Qh]: null != r
            }),
            children: [(0, a.jsx)("img", {
                alt: "",
                src: p.A.get(ea.fg2.TWITCH).icon.lightSVG,
                className: el.Gq
            }), (0, a.jsxs)("div", {
                children: [eo(d), null != c ? ed(c) : null]
            }), null != r ? (0, a.jsx)(h.euF, {
                src: r.getAvatarURL(o, 24),
                "aria-label": r.username,
                className: el.AZ,
                size: h._3J.SIZE_24
            }) : null]
        }), t]
    })
}, ef.ApplicationStreamingSection = e => {
    let {
        activity: t,
        user: n,
        applicationStream: i,
        onPreviewClick: r,
        guildId: l
    } = e, s = (0, d.bG)([Q.A], () => Q.A.getChannel(i.channelId)), [o, c] = (0, V.zP)(s), u = (0, a.jsxs)(h.DUT, {
        onClick: o ? r : void 0,
        className: el.q_,
        children: [(0, a.jsx)(B.A, {
            stream: i,
            className: el.IN
        }), (0, a.jsx)(h.Text, {
            className: el.Er,
            variant: "text-sm/medium",
            color: "always-white",
            children: (0, V.CT)(c)
        })]
    }), A = (0, S.A)(t, i)?.activityText ?? er.intl.string(er.t.eXan7B), _ = (0, U.A)({
        userId: n.id,
        guildId: l
    }), m = (0, G.a)({
        displayNameStyles: _
    });
    return (0, a.jsxs)(eu, {
        children: [(0, a.jsxs)("div", {
            className: el.ME,
            children: [(0, a.jsx)(h.euF, {
                size: h._3J.SIZE_32,
                src: n.getAvatarURL(l, 32),
                "aria-label": n.username,
                className: el.OL
            }), (0, a.jsxs)("div", {
                children: [eo(en.Ay.getName(n), m), ed(A)]
            }), (0, a.jsx)(P.Ay, {
                size: P.Ay.Sizes.SMALL
            })]
        }), u]
    })
}, ef.EmbeddedActivitySection = e => {
    let {
        activity: t,
        channel: n,
        guildId: i,
        participants: l
    } = e, [s, o] = r.useState(null), c = t.application_id;
    r.useEffect(() => {
        null != c && (0, ee.RG)(c, ["embedded_background"]).then(e => {
            let [t] = e;
            return o(t)
        })
    }, [c]);
    let u = (0, d.yK)([X.default, $.default], () => Array.from(l).map(e => $.default.getId() === e ? null : X.default.getUser(e)).filter(et.Vq)),
        A = (0, g.p)(),
        {
            analyticsLocations: _
        } = (0, v.Ay)();
    if (null == c) return null;
    let m = L.A.getApplication(c);
    if (null == m) return null;
    let p = null != t.created_at && t.created_at > 0 ? {
            start: t.created_at
        } : void 0,
        I = (0, ee.uD)(m.id, s, 300);
    return (0, a.jsxs)(eu, {
        children: [(0, a.jsxs)("div", {
            className: el.h1,
            children: [(0, a.jsx)(k.A, {
                game: m,
                size: k.M.XSMALL,
                className: el.VZ
            }), (0, a.jsx)("div", {
                className: el.F0,
                children: (0, a.jsx)(h.Text, {
                    variant: "text-sm/semibold",
                    children: m.name
                })
            }), null != p ? (0, a.jsx)("div", {
                className: el.T$,
                children: (0, a.jsx)(h.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: (0, a.jsx)(ec, {
                        timestamps: p
                    })
                })
            }) : null]
        }), (0, a.jsxs)("div", {
            className: el.Kt,
            children: [null != I ? (0, a.jsx)("img", {
                src: I,
                alt: m.name,
                className: el.pV
            }) : null, (0, a.jsxs)("div", {
                className: el.d4,
                children: [(0, a.jsx)(q.LN, {
                    users: u,
                    guildId: i,
                    channelId: n.id
                }), (0, a.jsx)("div", {
                    className: el.ZE,
                    children: (0, a.jsx)(h.Button, {
                        variant: "primary",
                        size: "sm",
                        text: er.intl.string(er.t.VJlc0S),
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