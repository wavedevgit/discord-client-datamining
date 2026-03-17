/** chunk id: 701363 params = (module,exports,require) **/
n.d(t, {
    Ay: () => eE,
    th: () => eA,
    w_: () => eo,
    z9: () => em
});
var s = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(284009),
    o = n.n(r),
    u = n(936504),
    c = n(110259),
    d = n(837381),
    m = n(172218),
    A = n(612324),
    E = n(535185),
    f = n(148839),
    p = n(607399),
    h = n(311907),
    x = n(3026),
    N = n(435371),
    S = n(397927),
    g = n(308528),
    T = n(442433),
    _ = n(960076),
    v = n(397244),
    C = n(714114),
    I = n(729551),
    j = n(709066),
    M = n(262295),
    y = n(343328),
    b = n(209581),
    R = n(963027),
    L = n(571694),
    U = n(47167),
    D = n(432222),
    w = n(880714),
    O = n(824994),
    G = n(922301),
    Q = n(750112),
    k = n(570622),
    P = n(414808),
    F = n(954376),
    V = n(534400),
    q = n(111864),
    B = n(967054),
    z = n(226540),
    H = n(227),
    W = n(854627),
    K = n(616356),
    Y = n(290863),
    $ = n(222823),
    J = n(994500),
    Z = n(741961),
    X = n(543465),
    ee = n(287809),
    et = n(661191),
    en = n(837921),
    es = n(652215),
    el = n(985018),
    ea = n(45119);
let ei = en.Ay.getEnableHardwareAcceleration() ? S.JsQ : S.euF,
    er = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    eo = e => {
        let {
            nameplate: t,
            icon: n,
            forceShow: l = !1,
            reducedClickTarget: a = !1,
            visibleElementRef: r,
            ...o
        } = e, u = (0, B.K)(t);
        return (0, s.jsx)(S.DUT, {
            className: i()(ea.b, {
                [ea.DQ]: null != t,
                [ea.by]: l,
                [ea.wY]: a
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
            children: (0, s.jsx)("div", {
                ref: r,
                className: i()({
                    [ea.PJ]: null != t
                }),
                children: (0, s.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: i()(ea.ut, {
                        [ea.Uq]: null != t
                    })
                })
            })
        })
    },
    eu = e => {
        let {
            onClick: t,
            channelName: n,
            showNameplate: l
        } = e, {
            enabled: a
        } = b.A.useConfig({
            location: "Wave CTA"
        });
        return a ? (0, s.jsx)("div", {
            className: ea.KQ,
            children: (0, s.jsx)(N.m_, {
                text: el.intl.formatToPlainString(el.t.m0zYbV, {
                    username: n
                }),
                children: (0, s.jsx)(S.Button, {
                    size: "sm",
                    variant: l ? "overlay-secondary" : "secondary",
                    onClick: t,
                    text: el.intl.string(el.t.pVlP58)
                })
            })
        }) : null
    },
    ec = () => (0, s.jsx)(S.G3N, {
        size: "xs",
        color: "currentColor",
        className: ea.wB
    }),
    ed = () => (0, s.jsx)(S.KTN, {
        size: "xs",
        color: "currentColor",
        className: ea.wB
    }),
    em = e => {
        let {
            route: t,
            selected: n,
            icon: l,
            iconClassName: a,
            interactiveClassName: r,
            text: o,
            children: c,
            locationState: d,
            onClick: m,
            className: A,
            role: E,
            "aria-posinset": f,
            "aria-setsize": h,
            listItemRef: x,
            ...N
        } = e;
        return (0, s.jsx)(w.A, {
            className: i()(ea.Ix, {
                [ea.Ij]: p.Fr
            }, A),
            onClick: m,
            role: E,
            focusProps: {
                within: !0,
                ...er
            },
            "aria-posinset": f,
            "aria-setsize": h,
            ref: x,
            children: (0, s.jsx)(S.HG8, {
                as: "div",
                selected: n,
                className: i()(r, ea.bG, ea.$J, {
                    [ea.Q2]: n
                }),
                children: (0, s.jsxs)(u.N_, {
                    to: {
                        pathname: t,
                        state: d
                    },
                    className: ea.nf,
                    ...N,
                    children: [(0, s.jsx)(M.A, {
                        muted: !1,
                        avatar: (0, s.jsx)(l, {
                            size: "refresh_sm",
                            className: i()(ea.e_, a),
                            color: "currentColor"
                        }),
                        name: o,
                        innerClassName: ea.xx
                    }), c]
                })
            })
        })
    };

function eA(e) {
    let {
        channel: t,
        selected: a = !1,
        user: r,
        activities: p,
        applicationStream: N,
        voiceChannel: C,
        isTyping: q,
        status: B,
        isMobile: K,
        isVR: Y,
        nameplate: Z,
        ref: ee,
        "aria-posinset": et,
        "aria-setsize": en
    } = e, [em, eA] = l.useState(!1), [eE, ef] = l.useState(!1), [ep, eh] = l.useState(!1), ex = l.useRef(null), [eN, eS] = l.useState(!1), eg = (0, m.K)(l.useCallback(e => {
        eS(e)
    }, [])), eT = l.useRef(null), e_ = ee ?? eT, ev = (0, A.A)(e_, eg), {
        showMenuItemPopover: eC,
        markMenuItemPopoverAsDismissed: eI
    } = (0, k.z)({
        location: "PrivateChannel",
        isChannelSelected: !0 === a,
        isTargetInViewport: eN,
        channelType: t.type
    }), {
        avatarSrc: ej,
        avatarDecorationSrc: eM,
        eventHandlers: ey
    } = (0, W.A)({
        userId: r?.id,
        size: S._3J.SIZE_32,
        animateOnHover: !(a || em || eE || ep)
    }), [eb, eR] = l.useState({
        maskImage: "none"
    }), eL = l.useRef(null), eU = t.isMultiUserDM(), eD = t.isSystemDM(), ew = !eU && !eD && t.type === es.rbe.DM, eO = ew && r?.primaryGuild != null, eG = (0, h.bG)([X.Ay], () => X.Ay.isChannelMuted(t.getGuildId(), t.id)), {
        ignored: eQ,
        blocked: ek
    } = (0, h.cf)([J.A], () => ({
        ignored: J.A.isIgnored(t.getRecipientId()),
        blocked: J.A.isBlocked(t.getRecipientId())
    })), eP = ew && eQ, eF = ew && ek, eV = (eG || eP || eF) && !(a || em), eq = (0, h.bG)([$.Ay], () => $.Ay.getMentionCount(t.id) > 0), eB = (0, U.Ay)(t), ez = l.useRef(null), eH = null != Z && (a || em || ep), eW = () => {
        eA(!0)
    }, eK = () => {
        eA(!1)
    }, eY = () => {
        ef(!0)
    }, e$ = () => {
        ef(!1)
    }, eJ = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), g.A.closePrivateChannel(t.id, a, n)
    }, eZ = () => {
        g.A.preload(es.ME, t.id)
    }, eX = e => {
        e.stopPropagation()
    }, e0 = e => {
        e.target === e.currentTarget && ex.current?.click()
    }, e1 = e => {
        let l = "contextmenu" === e.type ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        eh(!0), t.isMultiUserDM() ? (0, T.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("60200"), n.e("91763")]).then(n.bind(n, 4027));
            return n => (0, s.jsx)(e, {
                ...n,
                channel: t,
                selected: a
            })
        }, {
            impressionName: l,
            noBlurEvent: !0,
            onClose: () => eh(!1)
        }) : (0, T.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("76779")]).then(n.bind(n, 385913));
            return n => (0, s.jsx)(e, {
                ...n,
                user: r,
                channel: t,
                channelSelected: a
            })
        }, {
            impressionName: l,
            onClose: () => eh(!1)
        })
    }, e2 = e => {
        e.preventDefault(), e.stopPropagation();
        let l = el.intl.formatToPlainString(el.t.hJ5Ap4, {
                name: eB
            }),
            a = el.intl.format(el.t.SSIVOu, {
                name: eB
            });
        t.isManaged() && (l = el.intl.formatToPlainString(el.t.hVGjEW, {
            name: eB
        }), a = el.intl.format(el.t.IK1Qvs, {
            name: eB
        })), (0, S.mMO)(async () => {
            let {
                default: e
            } = await n.e("37803").then(n.bind(n, 148166));
            return t => (0, s.jsx)(e, {
                title: l,
                body: a,
                onSubmit: eJ,
                ...t
            })
        })
    }, e9 = (0, s.jsx)(Q.A, {
        userName: eB,
        displayNameStyles: r?.displayNameStyles,
        effectDisplayType: em || a || ep ? G.G.ANIMATED : G.G.PLAIN,
        loop: em,
        boldFontOpacity: .9
    }), e6 = eO ? (0, s.jsxs)(s.Fragment, {
        children: [e9, (0, s.jsx)(V.Ay, {
            primaryGuild: r?.primaryGuild,
            userId: r?.id,
            inline: !0,
            disableGuildProfile: !0,
            className: i()(ea.fc, {
                [ea.Y_]: eV
            })
        })]
    }) : e9, e7 = l.useRef(null), e3 = (0, O.W)({
        location: "PrivateChannel"
    }) && r?.displayNameStyles != null, e4 = [(0, R.Ay)({
        channel: t,
        unread: eq
    }), (0, R.r2)({
        channel: t,
        muted: eG,
        userStatus: B
    })].filter(Boolean).join(", "), e5 = (0, h.bG)([$.Ay], () => $.Ay.lastMessageId(t.id)), {
        waveShouldShow: e8,
        wavePressed: te
    } = (0, D.A)(t, e5), {
        showClose: tt
    } = b.A.useConfig({
        location: "PrivateChannel"
    }), tn = (0, f.A)(() => {
        let e = eL.current?.getBoundingClientRect() ?? null,
            t = e7.current?.getBoundingClientRect() ?? null;
        if (null == t || null == e || e.width + 44 - t.width <= 0) return void eR({
            maskImage: "none"
        });
        let n = t.width - 16;
        eR({
            maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`
        })
    });
    return l.useLayoutEffect(tn, [em, tn]), (0, E.g)(e_, tn), (0, s.jsx)(d.tG, {
        id: t.id,
        children: e => {
            let {
                role: n,
                ...l
            } = e;
            return (0, s.jsxs)(w.A, {
                className: i()(ea.Ix, ea.dm),
                role: n,
                focusProps: {
                    ...er,
                    focusTarget: ex,
                    ringTarget: e_
                },
                ref: ev,
                onMouseEnter: eW,
                onMouseLeave: eK,
                onMouseDown: eZ,
                onFocus: eY,
                onBlur: e$,
                onContextMenu: e1,
                "aria-setsize": en,
                "aria-posinset": et,
                children: [eq ? (0, s.jsx)("div", {
                    className: i()(ea.dM, {
                        [ea.SU]: eV
                    })
                }) : null, (0, s.jsxs)(S.HG8, {
                    className: i()(ea.bG, {
                        [ea.Q2]: a || ep
                    }),
                    as: "div",
                    onClick: e0,
                    muted: eV,
                    selected: a,
                    children: [(0, s.jsx)(H.A, {
                        nameplate: eH ? Z : void 0,
                        selected: a,
                        hovered: em,
                        content: e7,
                        placement: z.u.CHANNEL
                    }), (0, s.jsx)("div", {
                        className: ea.lU,
                        ref: eL,
                        children: e6
                    }), (0, s.jsx)(u.N_, {
                        style: eb,
                        innerRef: ex,
                        to: es.BVt.CHANNEL(es.ME, t.id),
                        className: ea.nf,
                        "aria-label": e4,
                        ...l,
                        children: (0, s.jsx)(M.A, {
                            ref: e7,
                            avatar: (() => {
                                let e = S._3J.SIZE_32;
                                if (t.isMultiUserDM())
                                    if (t.recipients.length >= 2 && null == t.icon) return (0, s.jsx)(F.A, {
                                        "aria-hidden": !0,
                                        recipients: t.recipients,
                                        size: e,
                                        isTyping: q,
                                        status: B
                                    });
                                    else return (0, s.jsx)(ei, {
                                        ...ey,
                                        src: (0, L.Y)(t),
                                        "aria-hidden": !0,
                                        size: e,
                                        status: q ? es.clD.ONLINE : B,
                                        isTyping: q
                                    });
                                o()(null != r, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                                let n = null;
                                return r.isSystemUser() || (n = (0, _.A)(p) ? es.clD.STREAMING : B), (0, s.jsx)(ei, {
                                    ...ey,
                                    size: S._3J.SIZE_32,
                                    src: ej,
                                    avatarDecoration: eM,
                                    status: n,
                                    isMobile: K,
                                    isVR: Y,
                                    isTyping: q,
                                    "aria-label": r.username,
                                    statusTooltip: !0
                                })
                            })(),
                            highlighted: eq && !eV,
                            muted: eV,
                            subText: t.isSystemDM() ? (0, s.jsx)("div", {
                                className: ea.W$,
                                children: (0, y.A)(t.id) ? el.intl.string(el.t.FL5T01) : el.intl.string(el.t.NnY5lc)
                            }) : t.isMultiUserDM() ? (0, s.jsx)("div", {
                                className: ea.W$,
                                children: el.intl.format(el.t.CxSA5N, {
                                    members: t.recipients.length + 1
                                })
                            }) : (0, v.A)({
                                activities: p,
                                status: B,
                                applicationStream: N,
                                voiceChannel: C
                            }) ? (0, s.jsx)(I.A, {
                                user: r,
                                activities: p,
                                voiceChannel: C,
                                applicationStream: N,
                                animateEmoji: em || eE || ep,
                                textClassName: ea.XD,
                                iconClassName: eV ? ea.tG : void 0
                            }) : null,
                            name: (0, s.jsx)(x.A, {
                                className: i()(ea.uN, {
                                    [ea.e8]: e3
                                }),
                                children: e6
                            }),
                            decorators: t.isSystemDM() ? (0, s.jsx)(j.A, {
                                className: ea.G$,
                                type: j.A.Types.SYSTEM_DM,
                                verified: !0
                            }) : null,
                            withDisplayNameStyles: e3
                        })
                    }), (0, s.jsxs)("div", {
                        className: i()(ea._q, {
                            [ea.EY]: eH
                        }),
                        children: [eP ? (0, s.jsx)(ec, {}) : null, eF ? (0, s.jsx)(ed, {}) : null, e8 && null != eB ? (0, s.jsx)(eu, {
                            channelName: eB,
                            onClick: te,
                            showNameplate: eH
                        }) : null, tt || !e8 ? (0, s.jsx)(eo, {
                            icon: S.PGe,
                            "aria-label": eU ? el.intl.string(el.t["26C4oi"]) : el.intl.string(el.t.jsvgc3),
                            onClick: eU ? e2 : eJ,
                            onMouseDown: eX,
                            nameplate: Z,
                            reducedClickTarget: !0,
                            visibleElementRef: ez
                        }) : null]
                    })]
                }), eC && (0, s.jsx)(P.A, {
                    targetElementRef: e_,
                    markMenuItemPopoverAsDismissed: eI
                })]
            })
        }
    })
}
let eE = 21552 == n.j ? e => {
    let {
        channel: t,
        selected: n,
        ...l
    } = e, a = (0, h.bG)([ee.default], () => ee.default.getUser(t.getRecipientId())), i = a?.id, r = (0, h.cf)([Y.A, K.A], () => {
        let e;
        if (t.isMultiUserDM()) {
            let n = Y.A.getState().statuses;
            t.recipients.some(e => n[e] === es.clD.ONLINE) && (e = es.clD.ONLINE)
        } else null != i && (e = Y.A.getStatus(i));
        return {
            status: e,
            activities: null != i ? Y.A.getActivities(i) : null,
            applicationStream: null != i ? K.A.getAnyStreamForUser(i) : null,
            isMobile: null != i && Y.A.isMobileOnline(i),
            isVR: null != i && Y.A.isVROnline(i)
        }
    }, [t, i]), {
        voiceChannel: o
    } = (0, C.A)({
        userId: i
    }), u = (0, q.r)({
        user: a
    }), c = (0, h.bG)([ee.default, Z.A], () => t.isMultiUserDM() ? et.default.keys(Z.A.getTypingUsers(t.id)).some(e => e !== ee.default.getCurrentUser()?.id) : null != a && Z.A.isTyping(t.id, t.getRecipientId()), [t, a]);
    return t.isMultiUserDM() ? (0, s.jsx)(eA, {
        channel: t,
        selected: n,
        isTyping: c,
        status: r.status === es.clD.ONLINE ? es.clD.ONLINE : void 0,
        ...l
    }) : (0, s.jsx)(eA, {
        channel: t,
        selected: n,
        user: a,
        voiceChannel: o,
        isTyping: c,
        nameplate: u,
        ...l,
        ...r
    })
} : null