/** Chunk was on 52390 **/
/** chunk id: 701363, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => eg,
    th: () => eb,
    w_: () => ed,
    z9: () => e_
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(308185),
    s = n(284009),
    u = n.n(s),
    c = n(758879),
    d = n(110259),
    p = n(837381),
    m = n(607399),
    f = n(311907),
    _ = n(3026),
    b = n(397927),
    g = n(308528),
    y = n(442433),
    x = n(960076),
    h = n(901517),
    A = n(397244),
    v = n(714114),
    S = n(729551),
    E = n(709066),
    O = n(262295),
    j = n(343328),
    T = n(963027),
    C = n(571694),
    N = n(47167),
    P = n(880714),
    I = n(824994),
    w = n(922301),
    M = n(750112),
    R = n(181079),
    D = n(954376),
    L = n(534400),
    U = n(461012),
    k = n(224415),
    G = n(208823),
    Q = n(111864),
    H = n(967054),
    F = n(226540),
    B = n(227),
    q = n(549973),
    W = n(820286),
    V = n(854627),
    z = n(616356),
    K = n(290863),
    Y = n(222823),
    X = n(994500),
    J = n(351906),
    $ = n(741961),
    Z = n(543465),
    ee = n(287809),
    et = n(661191),
    en = n(837921),
    er = n(652215),
    el = n(985018),
    ei = n(45119);

function ea(e) {
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

function eo(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function es(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }
    if (i = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
}
let eu = en.Ay.getEnableHardwareAcceleration() ? b.JsQ : b.euF,
    ec = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    ed = e => {
        let {
            nameplate: t,
            icon: n,
            forceShow: l = !1,
            reducedClickTarget: i = !1,
            visibleElementRef: o
        } = e, s = es(e, ["nameplate", "icon", "forceShow", "reducedClickTarget", "visibleElementRef"]), u = (0, H.K)(t);
        return (0, r.jsx)(b.DUT, eo(ea({
            className: a()(ei.b, {
                [ei.DQ]: null != t,
                [ei.by]: l,
                [ei.wY]: i
            }),
            style: u
        }, s), {
            focusProps: {
                offset: {
                    top: -2,
                    bottom: -2,
                    left: -2,
                    right: 6
                }
            },
            children: (0, r.jsx)("div", {
                ref: o,
                className: a()({
                    [ei.PJ]: null != t
                }),
                children: (0, r.jsx)(n, {
                    size: "sm",
                    color: "currentColor",
                    className: a()(ei.ut, {
                        [ei.Uq]: null != t
                    })
                })
            })
        }))
    },
    ep = () => (0, r.jsx)(b.Gg5, {
        size: "xs",
        color: "currentColor",
        className: ei.wB
    }),
    em = () => (0, r.jsx)(b.G3N, {
        size: "xs",
        color: "currentColor",
        className: ei.wB
    }),
    ef = () => (0, r.jsx)(b.KTN, {
        size: "xs",
        color: "currentColor",
        className: ei.wB
    }),
    e_ = e => {
        let {
            route: t,
            selected: n,
            icon: l,
            iconClassName: i,
            interactiveClassName: o,
            text: s,
            children: u,
            locationState: d,
            onClick: p,
            className: f,
            role: _,
            "aria-posinset": g,
            "aria-setsize": y,
            listItemRef: x
        } = e, h = es(e, ["route", "selected", "icon", "iconClassName", "interactiveClassName", "text", "children", "locationState", "onClick", "className", "role", "aria-posinset", "aria-setsize", "listItemRef"]);
        return (0, r.jsx)(P.A, {
            className: a()(ei.Ix, {
                [ei.Ij]: m.Fr
            }, f),
            onClick: p,
            role: _,
            focusProps: ea({
                within: !0
            }, ec),
            "aria-posinset": g,
            "aria-setsize": y,
            ref: x,
            children: (0, r.jsx)(b.HG8, {
                as: "div",
                selected: n,
                className: a()(o, ei.bG, ei.$J, {
                    [ei.Q2]: n
                }),
                children: (0, r.jsxs)(c.N_, eo(ea({
                    to: {
                        pathname: t,
                        state: d
                    },
                    className: ei.nf
                }, h), {
                    children: [(0, r.jsx)(O.A, {
                        muted: !1,
                        avatar: (0, r.jsx)(l, {
                            size: "refresh_sm",
                            className: a()(ei.e_, i),
                            color: "currentColor"
                        }),
                        name: s,
                        innerClassName: ei.xx
                    }), u]
                }))
            })
        })
    };

function eb(e) {
    let {
        channel: t,
        selected: i = !1,
        user: s,
        activities: m,
        applicationStream: h,
        voiceChannel: v,
        isTyping: Q,
        status: H,
        isMobile: z,
        nameplate: K,
        latestMessage: $,
        ref: ee,
        "aria-posinset": en,
        "aria-setsize": e_
    } = e, [eb, eg] = l.useState(!1), [ey, ex] = l.useState(!1), [eh, eA] = l.useState(!1), ev = l.useRef(null), eS = l.useRef(null), eE = null != ee ? ee : eS, {
        avatarSrc: eO,
        avatarDecorationSrc: ej,
        eventHandlers: eT
    } = (0, V.A)({
        userId: null == s ? void 0 : s.id,
        size: b._3J.SIZE_32,
        animateOnHover: !(i || eb || ey || eh)
    }), eC = t.isMultiUserDM(), eN = t.isSystemDM(), eP = !eC && !eN && t.type === er.rbe.DM, eI = eP && (null == s ? void 0 : s.primaryGuild) != null, ew = (0, f.bG)([Z.Ay], () => Z.Ay.isChannelMuted(t.getGuildId(), t.id)), {
        ignored: eM,
        blocked: eR
    } = (0, f.cf)([X.A], () => ({
        ignored: X.A.isIgnored(t.getRecipientId()),
        blocked: X.A.isBlocked(t.getRecipientId())
    })), eD = eP && eM, eL = eP && eR, eU = (ew || eD || eL) && !(i || eb), {
        hasUnreadMessages: ek,
        lastMessageId: eG
    } = (0, f.cf)([Y.Ay], () => ({
        hasUnreadMessages: Y.Ay.getMentionCount(t.id) > 0,
        lastMessageId: Y.Ay.lastMessageId(t.id)
    })), eQ = (0, N.Ay)(t), eH = (0, f.bG)([R.A], () => R.A.isFavorite(t.id)), {
        showMessagePreviews: eF,
        prioritizeOverStatus: eB
    } = G.t.useConfig({
        location: "PrivateChannel"
    }), eq = (0, f.bG)([J.A], () => J.A.hidePersonalInformation), eW = (0, k.r)(t.guild_id), eV = (0, q.e)({
        timestamp: et.default.extractTimestamp(null != eG ? eG : t.id)
    }), ez = l.useRef(null), eK = null != K && (i || eb || eh), eY = () => {
        eg(!0)
    }, eX = () => {
        eg(!1)
    }, eJ = () => {
        ex(!0)
    }, e$ = () => {
        ex(!1)
    }, eZ = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != e && (e.preventDefault(), e.stopPropagation()), g.A.closePrivateChannel(t.id, i, n)
    }, e0 = () => {
        g.A.preload(er.ME, t.id)
    }, e2 = e => {
        e.stopPropagation()
    }, e9 = e => {
        if (e.target === e.currentTarget) {
            var t;
            null == (t = ev.current) || t.click()
        }
    }, e7 = e => {
        let l = "contextmenu" === e.type ? d.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN : d.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
        eA(!0), t.isMultiUserDM() ? (0, y.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("99011"), n.e("60200"), n.e("48402")]).then(n.bind(n, 4027));
            return n => (0, r.jsx)(e, eo(ea({}, n), {
                channel: t,
                selected: i
            }))
        }, {
            impressionName: l,
            noBlurEvent: !0,
            onClose: () => eA(!1)
        }) : (0, y.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("99011"), n.e("29534"), n.e("33818"), n.e("39778"), n.e("71287")]).then(n.bind(n, 385913));
            return n => (0, r.jsx)(e, eo(ea({}, n), {
                user: s,
                channel: t,
                channelSelected: i
            }))
        }, {
            impressionName: l,
            onClose: () => eA(!1)
        })
    }, e1 = e => {
        e.preventDefault(), e.stopPropagation();
        let l = el.intl.formatToPlainString(el.t.hJ5Ap4, {
                name: eQ
            }),
            i = el.intl.format(el.t.SSIVOu, {
                name: eQ
            });
        t.isManaged() && (l = el.intl.formatToPlainString(el.t.hVGjEW, {
            name: eQ
        }), i = el.intl.format(el.t.IK1Qvs, {
            name: eQ
        })), (0, b.mMO)(async () => {
            let {
                default: e
            } = await n.e("37803").then(n.bind(n, 148166));
            return t => (0, r.jsx)(e, ea({
                header: l,
                body: i,
                onSubmit: eZ
            }, t))
        })
    }, e4 = (0, r.jsx)(M.A, {
        userName: eQ,
        displayNameStyles: null == s ? void 0 : s.displayNameStyles,
        effectDisplayType: eb || i || eh ? w.G.ANIMATED : w.G.PLAIN,
        loop: eb,
        boldFontOpacity: .9
    }), e6 = eI ? (0, r.jsxs)(r.Fragment, {
        children: [e4, (0, r.jsx)(L.Ay, {
            primaryGuild: null == s ? void 0 : s.primaryGuild,
            userId: null == s ? void 0 : s.id,
            inline: !0,
            disableGuildProfile: !0,
            className: a()(ei.fc, {
                [ei.Y_]: eU
            })
        })]
    }) : e4, e3 = l.useRef(null), e8 = (0, I.W)({
        location: "PrivateChannel"
    }) && (null == s ? void 0 : s.displayNameStyles) != null, e5 = [(0, T.Ay)({
        channel: t,
        unread: ek
    }), (0, T.r2)({
        channel: t,
        muted: ew,
        userStatus: H
    })].filter(Boolean).join(", "), te = (0, r.jsxs)(r.Fragment, {
        children: [eH && !eh ? (0, r.jsx)(ep, {}) : null, eD ? (0, r.jsx)(em, {}) : null, eL ? (0, r.jsx)(ef, {}) : null]
    }), tt = eF ? (0, r.jsxs)("div", {
        className: ei.Ym,
        children: [te, eW !== U.P.ALL || eq ? null : (0, r.jsx)(b.Text, {
            variant: "text-xs/normal",
            color: i ? "interactive-text-active" : ek ? "interactive-text-default" : "text-muted",
            className: ei.vE,
            children: eV
        })]
    }) : null;
    return (0, r.jsx)(p.tG, {
        id: t.id,
        children: e => {
            let n, l, d, {
                    role: p
                } = e,
                f = es(e, ["role"]);
            return (0, r.jsxs)(P.A, {
                className: a()(ei.Ix, ei.dm),
                role: p,
                focusProps: eo(ea({}, ec), {
                    focusTarget: ev,
                    ringTarget: eE
                }),
                ref: eE,
                onMouseEnter: eY,
                onMouseLeave: eX,
                onMouseDown: e0,
                onFocus: eJ,
                onBlur: e$,
                onContextMenu: e7,
                "aria-setsize": e_,
                "aria-posinset": en,
                children: [ek ? (0, r.jsx)("div", {
                    className: a()(ei.dM, {
                        [ei.SU]: eU
                    })
                }) : null, (0, r.jsxs)(b.HG8, {
                    className: a()(ei.bG, {
                        [ei.Q2]: i || eh
                    }),
                    as: "div",
                    onClick: e9,
                    muted: eU,
                    selected: i,
                    children: [(0, r.jsx)(B.A, {
                        nameplate: eK ? K : void 0,
                        selected: i,
                        hovered: eb,
                        content: e3,
                        placement: F.u.CHANNEL
                    }), (0, r.jsx)(c.N_, eo(ea({
                        innerRef: ev,
                        to: er.BVt.CHANNEL(er.ME, t.id),
                        className: ei.nf,
                        "aria-label": e5
                    }, f), {
                        children: (0, r.jsx)(O.A, {
                            ref: e3,
                            avatar: (() => {
                                let e = b._3J.SIZE_32;
                                if (t.isMultiUserDM())
                                    if (t.recipients.length >= 2 && null == t.icon) return (0, r.jsx)(D.A, {
                                        "aria-hidden": !0,
                                        recipients: t.recipients,
                                        size: e,
                                        isTyping: Q,
                                        status: H
                                    });
                                    else return (0, r.jsx)(eu, eo(ea({}, eT), {
                                        src: (0, C.Y)(t),
                                        "aria-hidden": !0,
                                        size: e,
                                        status: Q ? er.clD.ONLINE : H,
                                        isTyping: Q
                                    }));
                                u()(null != s, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                                let n = null;
                                return s.isSystemUser() || (n = (0, x.A)(m) ? er.clD.STREAMING : H), (0, r.jsx)(eu, eo(ea({}, eT), {
                                    size: b._3J.SIZE_32,
                                    src: eO,
                                    avatarDecoration: ej,
                                    status: n,
                                    isMobile: z,
                                    isTyping: Q,
                                    "aria-label": s.username,
                                    statusTooltip: !0
                                }))
                            })(),
                            highlighted: ek && !eU,
                            muted: eU,
                            subText: (n = (null == m ? void 0 : m.some(e => e.type !== er.$pd.CUSTOM_STATUS)) === !0, l = eF && null != $ && !eq ? (0, r.jsx)("div", {
                                className: ei.W$,
                                children: (0, r.jsx)(W.X, {
                                    channel: t,
                                    message: $
                                })
                            }) : null, d = null != $ && null != l && (1 > (0, o.A)(new Date, $.timestamp) || eB && !n || ek), t.isSystemDM() ? (0, r.jsx)("div", {
                                className: ei.W$,
                                children: (0, j.A)(t.id) ? el.intl.string(el.t.FL5T01) : el.intl.string(el.t.NnY5lc)
                            }) : t.isMultiUserDM() ? null != l ? l : (0, r.jsx)("div", {
                                className: ei.W$,
                                children: el.intl.format(el.t.CxSA5N, {
                                    members: t.recipients.length + 1
                                })
                            }) : !d && (0, A.A)({
                                activities: m,
                                status: H,
                                applicationStream: h,
                                voiceChannel: v
                            }) ? (0, r.jsx)(S.A, {
                                user: s,
                                activities: m,
                                voiceChannel: v,
                                applicationStream: h,
                                animateEmoji: eb || ey || eh,
                                textClassName: ei.XD,
                                iconClassName: eU ? ei.tG : void 0
                            }) : null != l ? l : null),
                            subtextClassName: a()(ei.PL, {
                                [ei.nF]: eK,
                                [ei.un]: eF
                            }),
                            nameClassName: ei.Xh,
                            name: (0, r.jsx)(_.A, {
                                className: a()(ei.uN, {
                                    [ei.e8]: e8
                                }),
                                children: e6
                            }),
                            decorators: t.isSystemDM() ? (0, r.jsx)(E.A, {
                                className: ei.G$,
                                type: E.A.Types.SYSTEM_DM,
                                verified: !0
                            }) : null,
                            rightDecorators: tt,
                            withDisplayNameStyles: e8
                        })
                    })), (0, r.jsxs)("div", {
                        className: a()(ei._q, {
                            [ei.EY]: eK && !eF
                        }),
                        children: [!eF && te, (0, r.jsx)(ed, {
                            icon: b.PGe,
                            "aria-label": eC ? el.intl.string(el.t["26C4oi"]) : el.intl.string(el.t.jsvgc3),
                            onClick: eC ? e1 : eZ,
                            onMouseDown: e2,
                            nameplate: K,
                            reducedClickTarget: !0,
                            visibleElementRef: ez
                        })]
                    })]
                })]
            })
        }
    })
}
let eg = 21552 == n.j ? e => {
    let {
        channel: t,
        selected: n
    } = e, l = es(e, ["channel", "selected"]), i = (0, f.bG)([ee.default], () => ee.default.getUser(t.getRecipientId())), a = null == i ? void 0 : i.id, o = (0, f.cf)([K.A, z.A], () => {
        let e;
        if (t.isMultiUserDM()) {
            let n = K.A.getState().statuses;
            t.recipients.some(e => n[e] === er.clD.ONLINE) && (e = er.clD.ONLINE)
        } else null != a && (e = K.A.getStatus(a));
        return {
            status: e,
            activities: null != a ? K.A.getActivities(a) : null,
            applicationStream: null != a ? z.A.getAnyStreamForUser(a) : null,
            isMobile: null != a && K.A.isMobileOnline(a)
        }
    }, [t, a]), {
        voiceActivityStatusEnabled: s
    } = (0, h.G)({
        location: "PrivateChannel"
    }), {
        voiceChannel: u
    } = (0, v.A)({
        userId: a
    }), c = (0, Q.r)({
        user: i
    }), d = (0, f.bG)([ee.default, $.A], () => t.isMultiUserDM() ? et.default.keys($.A.getTypingUsers(t.id)).some(e => {
        var t;
        return e !== (null == (t = ee.default.getCurrentUser()) ? void 0 : t.id)
    }) : null != i && $.A.isTyping(t.id, t.getRecipientId()), [t, i]), {
        showMessagePreviews: p
    } = G.t.useConfig({
        location: "PrivateChannel"
    }), m = (0, k.A)(t, {
        disabled: !p
    });
    return t.isMultiUserDM() ? (0, r.jsx)(eb, ea({
        channel: t,
        selected: n,
        isTyping: d,
        status: o.status === er.clD.ONLINE ? er.clD.ONLINE : void 0,
        latestMessage: m
    }, l)) : (0, r.jsx)(eb, ea({
        channel: t,
        selected: n,
        user: i,
        voiceChannel: s ? u : void 0,
        isTyping: d,
        nameplate: c,
        latestMessage: m
    }, l, o))
} : null