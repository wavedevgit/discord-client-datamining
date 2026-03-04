/** chunk id: 701363, original params: e,t,s (module,exports,require) **/
s.d(t, {
    Ay: () => ec,
    th: () => eu,
    w_: () => en,
    z9: () => eo
});
var l = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    r = s(284009),
    o = s.n(r),
    u = s(936504),
    c = s(110259),
    d = s(837381),
    m = s(535185),
    A = s(148839),
    x = s(607399),
    h = s(311907),
    p = s(3026),
    f = s(435371),
    E = s(397927),
    N = s(308528),
    S = s(442433),
    T = s(960076),
    g = s(397244),
    v = s(714114),
    C = s(729551),
    _ = s(709066),
    j = s(262295),
    y = s(343328),
    M = s(209581),
    b = s(963027),
    I = s(571694),
    L = s(47167),
    R = s(432222),
    U = s(880714),
    D = s(824994),
    w = s(922301),
    Q = s(750112),
    G = s(954376),
    O = s(534400),
    k = s(111864),
    P = s(967054),
    F = s(226540),
    V = s(227),
    q = s(854627),
    B = s(616356),
    H = s(290863),
    z = s(222823),
    W = s(994500),
    K = s(741961),
    $ = s(543465),
    Y = s(287809),
    J = s(661191),
    X = s(837921),
    Z = s(652215),
    ee = s(985018),
    et = s(45119);
let es = X.Ay.getEnableHardwareAcceleration() ? E.JsQ : E.euF,
    el = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    en = e => {
        let {
            nameplate: t,
            icon: s,
            forceShow: n = !1,
            reducedClickTarget: a = !1,
            visibleElementRef: r,
            ...o
        } = e, u = (0, P.K)(t);
        return (0, l.jsx)(E.DUT, {
            className: i()(et.b, {
                [et.DQ]: null != t,
                [et.by]: n,
                [et.wY]: a
            }),
            style: u,
            ...o,
            focusProps: {
                offset: {
                    top: -2,
                    bottom: -2,
                    left: -2,
                    right: 6
                }
            },
            children: (0, l.jsx)("div", {
                ref: r,
                className: i()({
                    [et.PJ]: null != t
                }),
                children: (0, l.jsx)(s, {
                    size: "sm",
                    color: "currentColor",
                    className: i()(et.ut, {
                        [et.Uq]: null != t
                    })
                })
            })
        })
    },
    ea = e => {
        let {
            onClick: t,
            channelName: s,
            showNameplate: n
        } = e, {
            enabled: a
        } = M.A.useConfig({
            location: "Wave CTA"
        });
        return a ? (0, l.jsx)("div", {
            className: et.KQ,
            children: (0, l.jsx)(f.m_, {
                text: ee.intl.formatToPlainString(ee.t.m0zYbV, {
                    username: s
                }),
                children: (0, l.jsx)(E.Button, {
                    size: "sm",
                    variant: n ? "overlay-secondary" : "secondary",
                    onClick: t,
                    text: ee.intl.string(ee.t.pVlP58)
                })
            })
        }) : null
    },
    ei = () => (0, l.jsx)(E.G3N, {
        size: "xs",
        color: "currentColor",
        className: et.wB
    }),
    er = () => (0, l.jsx)(E.KTN, {
        size: "xs",
        color: "currentColor",
        className: et.wB
    }),
    eo = e => {
        let {
            route: t,
            selected: s,
            icon: n,
            iconClassName: a,
            interactiveClassName: r,
            text: o,
            children: c,
            locationState: d,
            onClick: m,
            className: A,
            role: h,
            "aria-posinset": p,
            "aria-setsize": f,
            listItemRef: N,
            ...S
        } = e;
        return (0, l.jsx)(U.A, {
            className: i()(et.Ix, {
                [et.Ij]: x.Fr
            }, A),
            onClick: m,
            role: h,
            focusProps: {
                within: !0,
                ...el
            },
            "aria-posinset": p,
            "aria-setsize": f,
            ref: N,
            children: (0, l.jsx)(E.HG8, {
                as: "div",
                selected: s,
                className: i()(r, et.bG, et.$J, {
                    [et.Q2]: s
                }),
                children: (0, l.jsxs)(u.N_, {
                    to: {
                        pathname: t,
                        state: d
                    },
                    className: et.nf,
                    ...S,
                    children: [(0, l.jsx)(j.A, {
                        muted: !1,
                        avatar: (0, l.jsx)(n, {
                            size: "refresh_sm",
                            className: i()(et.e_, a),
                            color: "currentColor"
                        }),
                        name: o,
                        innerClassName: et.xx
                    }), c]
                })
            })
        })
    };

function eu(e) {
    let {
        channel: t,
        selected: a = !1,
        user: r,
        activities: x,
        applicationStream: f,
        voiceChannel: v,
        isTyping: k,
        status: P,
        isMobile: B,
        isVR: H,
        nameplate: K,
        ref: Y,
        "aria-posinset": J,
        "aria-setsize": X
    } = e, [eo, eu] = n.useState(!1), [ec, ed] = n.useState(!1), [em, eA] = n.useState(!1), ex = n.useRef(null), eh = n.useRef(null), ep = Y ?? eh, {
        avatarSrc: ef,
        avatarDecorationSrc: eE,
        eventHandlers: eN
    } = (0, q.A)({
        userId: r?.id,
        size: E._3J.SIZE_32,
        animateOnHover: !(a || eo || ec || em)
    }), [eS, eT] = n.useState({
        maskImage: "none"
    }), eg = n.useRef(null), ev = t.isMultiUserDM(), eC = t.isSystemDM(), e_ = !ev && !eC && t.type === Z.rbe.DM, ej = e_ && r?.primaryGuild != null, ey = (0, h.bG)([$.Ay], () => $.Ay.isChannelMuted(t.getGuildId(), t.id)), {
        ignored: eM,
        blocked: eb
    } = (0, h.cf)([W.A], () => ({
        ignored: W.A.isIgnored(t.getRecipientId()),
        blocked: W.A.isBlocked(t.getRecipientId())
    })), eI = e_ && eM, eL = e_ && eb, eR = (ey || eI || eL) && !(a || eo), eU = (0, h.bG)([z.Ay], () => z.Ay.getMentionCount(t.id) > 0), eD = (0, L.Ay)(t), ew = n.useRef(null), eQ = null != K && (a || eo || em), eG = () => {
        eu(!0)
    }, eO = () => {
        eu(!1)
    }, ek = () => {
        ed(!0)
    }, eP = () => {
        ed(!1)
    }, eF = function(e) {
        let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), N.A.closePrivateChannel(t.id, a, s)
    }, eV = () => {
        N.A.preload(Z.ME, t.id)
    }, eq = e => {
        e.stopPropagation()
    }, eB = e => {
        e.target === e.currentTarget && ex.current?.click()
    }, eH = e => {
        let n = "contextmenu" === e.type ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        eA(!0), t.isMultiUserDM() ? (0, S.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([s.e("97262"), s.e("60200")]).then(s.bind(s, 4027));
            return s => (0, l.jsx)(e, {
                ...s,
                channel: t,
                selected: a
            })
        }, {
            impressionName: n,
            noBlurEvent: !0,
            onClose: () => eA(!1)
        }) : (0, S.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([s.e("97262"), s.e("42128"), s.e("39778"), s.e("56890")]).then(s.bind(s, 385913));
            return s => (0, l.jsx)(e, {
                ...s,
                user: r,
                channel: t,
                channelSelected: a
            })
        }, {
            impressionName: n,
            onClose: () => eA(!1)
        })
    }, ez = e => {
        e.preventDefault(), e.stopPropagation();
        let n = ee.intl.formatToPlainString(ee.t.hJ5Ap4, {
                name: eD
            }),
            a = ee.intl.format(ee.t.SSIVOu, {
                name: eD
            });
        t.isManaged() && (n = ee.intl.formatToPlainString(ee.t.hVGjEW, {
            name: eD
        }), a = ee.intl.format(ee.t.IK1Qvs, {
            name: eD
        })), (0, E.mMO)(async () => {
            let {
                default: e
            } = await s.e("37803").then(s.bind(s, 148166));
            return t => (0, l.jsx)(e, {
                title: n,
                body: a,
                onSubmit: eF,
                ...t
            })
        })
    }, eW = (0, l.jsx)(Q.A, {
        userName: eD,
        displayNameStyles: r?.displayNameStyles,
        effectDisplayType: eo || a || em ? w.G.ANIMATED : w.G.PLAIN,
        loop: eo,
        boldFontOpacity: .9
    }), eK = ej ? (0, l.jsxs)(l.Fragment, {
        children: [eW, (0, l.jsx)(O.Ay, {
            primaryGuild: r?.primaryGuild,
            userId: r?.id,
            inline: !0,
            disableGuildProfile: !0,
            className: i()(et.fc, {
                [et.Y_]: eR
            })
        })]
    }) : eW, e$ = n.useRef(null), eY = (0, D.W)({
        location: "PrivateChannel"
    }) && r?.displayNameStyles != null, eJ = [(0, b.Ay)({
        channel: t,
        unread: eU
    }), (0, b.r2)({
        channel: t,
        muted: ey,
        userStatus: P
    })].filter(Boolean).join(", "), eX = (0, h.bG)([z.Ay], () => z.Ay.lastMessageId(t.id)), {
        waveShouldShow: eZ,
        wavePressed: e0
    } = (0, R.A)(t, eX), {
        showClose: e1
    } = M.A.useConfig({
        location: "PrivateChannel"
    }), e2 = (0, A.A)(() => {
        let e = eg.current?.getBoundingClientRect() ?? null,
            t = e$.current?.getBoundingClientRect() ?? null;
        if (null == t || null == e || e.width + 44 - t.width <= 0) return void eT({
            maskImage: "none"
        });
        let s = t.width - 16;
        eT({
            maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${s}px, rgba(0, 0, 0, 0))`
        })
    });
    return n.useLayoutEffect(e2, [eo, e2]), (0, m.g)(ep, e2), (0, l.jsx)(d.tG, {
        id: t.id,
        children: e => {
            let {
                role: s,
                ...n
            } = e;
            return (0, l.jsxs)(U.A, {
                className: i()(et.Ix, et.dm),
                role: s,
                focusProps: {
                    ...el,
                    focusTarget: ex,
                    ringTarget: ep
                },
                ref: ep,
                onMouseEnter: eG,
                onMouseLeave: eO,
                onMouseDown: eV,
                onFocus: ek,
                onBlur: eP,
                onContextMenu: eH,
                "aria-setsize": X,
                "aria-posinset": J,
                children: [eU ? (0, l.jsx)("div", {
                    className: i()(et.dM, {
                        [et.SU]: eR
                    })
                }) : null, (0, l.jsxs)(E.HG8, {
                    className: i()(et.bG, {
                        [et.Q2]: a || em
                    }),
                    as: "div",
                    onClick: eB,
                    muted: eR,
                    selected: a,
                    children: [(0, l.jsx)(V.A, {
                        nameplate: eQ ? K : void 0,
                        selected: a,
                        hovered: eo,
                        content: e$,
                        placement: F.u.CHANNEL
                    }), (0, l.jsx)("div", {
                        className: et.lU,
                        ref: eg,
                        children: eK
                    }), (0, l.jsx)(u.N_, {
                        style: eS,
                        innerRef: ex,
                        to: Z.BVt.CHANNEL(Z.ME, t.id),
                        className: et.nf,
                        "aria-label": eJ,
                        ...n,
                        children: (0, l.jsx)(j.A, {
                            ref: e$,
                            avatar: (() => {
                                let e = E._3J.SIZE_32;
                                if (t.isMultiUserDM())
                                    if (t.recipients.length >= 2 && null == t.icon) return (0, l.jsx)(G.A, {
                                        "aria-hidden": !0,
                                        recipients: t.recipients,
                                        size: e,
                                        isTyping: k,
                                        status: P
                                    });
                                    else return (0, l.jsx)(es, {
                                        ...eN,
                                        src: (0, I.Y)(t),
                                        "aria-hidden": !0,
                                        size: e,
                                        status: k ? Z.clD.ONLINE : P,
                                        isTyping: k
                                    });
                                o()(null != r, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                                let s = null;
                                return r.isSystemUser() || (s = (0, T.A)(x) ? Z.clD.STREAMING : P), (0, l.jsx)(es, {
                                    ...eN,
                                    size: E._3J.SIZE_32,
                                    src: ef,
                                    avatarDecoration: eE,
                                    status: s,
                                    isMobile: B,
                                    isVR: H,
                                    isTyping: k,
                                    "aria-label": r.username,
                                    statusTooltip: !0
                                })
                            })(),
                            highlighted: eU && !eR,
                            muted: eR,
                            subText: t.isSystemDM() ? (0, l.jsx)("div", {
                                className: et.W$,
                                children: (0, y.A)(t.id) ? ee.intl.string(ee.t.FL5T01) : ee.intl.string(ee.t.NnY5lc)
                            }) : t.isMultiUserDM() ? (0, l.jsx)("div", {
                                className: et.W$,
                                children: ee.intl.format(ee.t.CxSA5N, {
                                    members: t.recipients.length + 1
                                })
                            }) : (0, g.A)({
                                activities: x,
                                status: P,
                                applicationStream: f,
                                voiceChannel: v
                            }) ? (0, l.jsx)(C.A, {
                                user: r,
                                activities: x,
                                voiceChannel: v,
                                applicationStream: f,
                                animateEmoji: eo || ec || em,
                                textClassName: et.XD,
                                iconClassName: eR ? et.tG : void 0
                            }) : null,
                            name: (0, l.jsx)(p.A, {
                                className: i()(et.uN, {
                                    [et.e8]: eY
                                }),
                                children: eK
                            }),
                            decorators: t.isSystemDM() ? (0, l.jsx)(_.A, {
                                className: et.G$,
                                type: _.A.Types.SYSTEM_DM,
                                verified: !0
                            }) : null,
                            withDisplayNameStyles: eY
                        })
                    }), (0, l.jsxs)("div", {
                        className: i()(et._q, {
                            [et.EY]: eQ
                        }),
                        children: [eI ? (0, l.jsx)(ei, {}) : null, eL ? (0, l.jsx)(er, {}) : null, eZ && null != eD ? (0, l.jsx)(ea, {
                            channelName: eD,
                            onClick: e0,
                            showNameplate: eQ
                        }) : null, e1 || !eZ ? (0, l.jsx)(en, {
                            icon: E.PGe,
                            "aria-label": ev ? ee.intl.string(ee.t["26C4oi"]) : ee.intl.string(ee.t.jsvgc3),
                            onClick: ev ? ez : eF,
                            onMouseDown: eq,
                            nameplate: K,
                            reducedClickTarget: !0,
                            visibleElementRef: ew
                        }) : null]
                    })]
                })]
            })
        }
    })
}
let ec = 21552 == s.j ? e => {
    let {
        channel: t,
        selected: s,
        ...n
    } = e, a = (0, h.bG)([Y.default], () => Y.default.getUser(t.getRecipientId())), i = a?.id, r = (0, h.cf)([H.A, B.A], () => {
        let e;
        if (t.isMultiUserDM()) {
            let s = H.A.getState().statuses;
            t.recipients.some(e => s[e] === Z.clD.ONLINE) && (e = Z.clD.ONLINE)
        } else null != i && (e = H.A.getStatus(i));
        return {
            status: e,
            activities: null != i ? H.A.getActivities(i) : null,
            applicationStream: null != i ? B.A.getAnyStreamForUser(i) : null,
            isMobile: null != i && H.A.isMobileOnline(i),
            isVR: null != i && H.A.isVROnline(i)
        }
    }, [t, i]), {
        voiceChannel: o
    } = (0, v.A)({
        userId: i
    }), u = (0, k.r)({
        user: a
    }), c = (0, h.bG)([Y.default, K.A], () => t.isMultiUserDM() ? J.default.keys(K.A.getTypingUsers(t.id)).some(e => e !== Y.default.getCurrentUser()?.id) : null != a && K.A.isTyping(t.id, t.getRecipientId()), [t, a]);
    return t.isMultiUserDM() ? (0, l.jsx)(eu, {
        channel: t,
        selected: s,
        isTyping: c,
        status: r.status === Z.clD.ONLINE ? Z.clD.ONLINE : void 0,
        ...n
    }) : (0, l.jsx)(eu, {
        channel: t,
        selected: s,
        user: a,
        voiceChannel: o,
        isTyping: c,
        nameplate: u,
        ...n,
        ...r
    })
} : null