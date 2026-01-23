/** Chunk was on web.js **/
/** chunk id: 110574, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => Q,
    b: () => B
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(319060),
    c = n(397927),
    u = n(960076),
    d = n(901517),
    f = n(397244),
    p = n(714114),
    _ = n(729551),
    h = n(709066),
    m = n(295160),
    g = n(193663),
    E = n(490427),
    y = n(609425),
    b = n(922301),
    O = n(750112),
    v = n(73392),
    A = n(534400),
    I = n(835759),
    S = n(967144),
    T = n(890687),
    C = n(198525),
    N = n(854627),
    w = n(240248),
    R = n(427262),
    P = n(652215),
    D = n(705751),
    x = n(31408),
    L = n(985018),
    j = n(645576);

function M(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            M(e, t, n[t])
        })
    }
    return e
}

function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function G(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function V(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = F(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function F(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let B = (0, w.xI)(l.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    H = 3,
    Y = i.memo(function(e) {
        let {
            isOwner: t,
            lostPermissionTooltipText: n,
            ownerTooltipText: i
        } = e;
        return null != t && t && null == n ? (0, r.jsx)(o.m, {
            __unsupportedReactNodeAsText: null != i ? i : L.intl.string(L.t.pclUFJ),
            children: (0, r.jsx)(c.pw5, {
                size: "md",
                color: "currentColor",
                className: j.Dd
            })
        }) : null
    }),
    W = i.memo(function(e) {
        let {
            premiumSince: t,
            onClickPremiumGuildIcon: n
        } = e;
        return null == t ? null : (0, r.jsx)(o.m, {
            text: L.intl.formatToPlainString(L.t.IWkAq7, {
                date: t
            }),
            asContainer: !0,
            children: (0, r.jsx)(c.DUT, {
                onClick: n,
                tabIndex: -1,
                children: (0, r.jsx)(c._Jp, {
                    color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    className: j.PC
                })
            })
        })
    }),
    K = i.memo(function(e) {
        let {
            user: t
        } = e;
        if (null == t || !t.bot) return null;
        let n = D.nu.BOT;
        return (0, r.jsx)(h.A, {
            className: j.AO,
            type: n,
            verified: t.isVerifiedBot()
        })
    }),
    z = i.memo(function(e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: i,
            ownerTooltipText: a,
            premiumSince: s,
            onClickPremiumGuildIcon: o
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(K, {
                user: t
            }), (0, r.jsx)(Y, {
                isOwner: n,
                lostPermissionTooltipText: i,
                ownerTooltipText: a
            }), (0, r.jsx)(W, {
                premiumSince: s,
                onClickPremiumGuildIcon: o
            })]
        })
    }),
    q = i.memo(function(e) {
        let {
            colorRoleName: t,
            colorString: n,
            colorStrings: i,
            name: a,
            hideClanTag: s,
            user: o,
            guildId: l,
            isHovering: u
        } = e, d = (0, y.A)({
            userId: null == o ? void 0 : o.id,
            guildId: l
        }), f = (0, v.a)({
            displayNameStyles: d
        }), p = null == l && null != d;
        return (0, r.jsxs)(r.Fragment, {
            children: [p ? (0, r.jsx)(O.A, {
                userName: null != a ? a : "",
                displayNameStyles: d,
                effectDisplayType: u ? b.G.ANIMATED : b.G.STATIC,
                loop: !0
            }) : (0, r.jsx)(c.gyj, {
                roleName: t,
                colorString: n,
                colorStrings: i,
                name: a,
                className: j.UU,
                displayNameStylesFont: f,
                animateRoleGradient: u
            }), !s && (0, r.jsx)(A.Ay, {
                primaryGuild: null == o ? void 0 : o.primaryGuild,
                userId: null == o ? void 0 : o.id,
                contextGuildId: l,
                disableGuildProfile: !0,
                className: j.fc
            })]
        })
    }),
    Z = i.memo(function(e) {
        let {
            user: t,
            shouldAnimateStatus: n,
            activities: i,
            status: a,
            eventHandlers: s,
            avatarSrc: o,
            isMobile: l,
            isTyping: d,
            avatarDecorationSrc: f,
            handleSetTypingRef: p,
            typingRef: _,
            currentUser: h
        } = e, m = a === P.clD.OFFLINE, g = n ? c.JsQ : c.euF, E = (0, u.A)(i) ? P.clD.STREAMING : a;
        return E = m ? void 0 : E, (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(g, G(k({}, s), {
                size: c._3J.SIZE_32,
                src: o,
                isMobile: l,
                isTyping: d,
                status: E,
                "aria-label": t.username,
                statusTooltip: !0,
                avatarDecoration: f,
                typingIndicatorRef: p
            })), (0, r.jsx)(I.A, {
                confettiSpawnRef: _,
                shouldFire: d && null != h && t.id !== h.id,
                confettiLocation: x.k.MEMBER_USER
            })]
        })
    }),
    X = i.memo(function(e) {
        let {
            hideSubtext: t,
            hideTooltip: n = !1,
            activities: a,
            status: s,
            applicationStream: o,
            voiceStatusChannel: l,
            user: c,
            channel: u,
            isHoveringOrFocusing: d,
            quest: p
        } = e, h = i.useMemo(() => (0, f.A)({
            activities: a,
            status: s,
            applicationStream: o,
            voiceChannel: l
        }), [a, s, o, l]), m = i.useMemo(() => !(0, E.A)({
            activity: null == a ? void 0 : a.find(e => {
                let {
                    type: t
                } = e;
                return t === P.$pd.CUSTOM_STATUS
            }),
            user: c,
            channel: u
        }), [a, c, u]);
        return t || !h ? null : (0, r.jsx)(_.A, {
            user: c,
            activities: a,
            applicationStream: o,
            voiceChannel: l,
            animateEmoji: d,
            hideEmoji: m,
            hasQuest: null != p,
            hideTooltip: n
        })
    }),
    Q = i.memo(function(e) {
        let {
            selected: t = !1,
            colorString: n,
            colorStrings: a,
            colorRoleName: l,
            isOwner: u,
            ownerTooltipText: f,
            lostPermissionTooltipText: _,
            isTyping: h = !1,
            nick: E,
            user: y,
            currentUser: b,
            activities: O,
            applicationStream: v,
            status: A,
            shouldAnimateStatus: I = !1,
            isMobile: w,
            premiumSince: D,
            channel: x,
            guildId: L,
            className: M,
            nameplate: U,
            hideClanTag: F = !1,
            hideSubtext: B = !1,
            hideTooltip: Y = !1,
            onMouseDown: W,
            onKeyDown: K,
            onClick: Q,
            onContextMenu: J,
            onClickPremiumGuildIcon: $,
            "aria-controls": ee,
            "aria-expanded": et,
            "aria-posinset": en,
            "aria-setsize": er,
            id: ei,
            tabIndex: ea,
            itemProps: es,
            ref: eo
        } = e, el = null == y ? void 0 : y.id, ec = R.Ay.useName(y), eu = i.useRef(null), ed = null != eo ? eo : eu, [ef, ep] = i.useState(!1), [e_, eh] = i.useState(!1), [em, eg] = i.useState(null), {
            voiceChannel: eE
        } = (0, p.A)({
            userId: el,
            guildId: L
        }), {
            voiceActivityStatusEnabled: ey
        } = (0, d.G)({
            location: "MemberListItem"
        }), eb = ey ? eE : void 0, {
            avatarDecorationSrc: eO,
            avatarSrc: ev,
            eventHandlers: eA
        } = (0, N.A)({
            userId: el,
            size: c._3J.SIZE_32,
            animateOnHover: !(t || ef),
            guildId: L
        }), eI = null != es ? es : {}, {
            onFocus: eS
        } = eI, eT = V(eI, ["onFocus"]), eC = (0, S.gn)(L, el, null != a ? a : null), [eN, ew] = i.useState(!1);
        i.useEffect(() => {
            t && ew(!1)
        }, [t]);
        let eR = (0, T.YW)(O),
            eP = (0, T.Yl)(eR, v, el) && t && !eN,
            eD = i.useCallback(() => {
                ep(!0)
            }, []),
            ex = i.useCallback(() => {
                ep(!1)
            }, []),
            eL = i.useCallback(() => {
                eh(!0), null == eS || eS()
            }, [eS]),
            ej = i.useCallback(() => {
                eh(!1)
            }, []),
            eM = i.useCallback(e => {
                eg(e)
            }, []),
            ek = i.useCallback(e => null == eR ? null : (0, r.jsx)(C.A, G(k({
                name: null != E ? E : ec,
                quest: eR,
                memberListItemRef: ed,
                applicationStream: v
            }, e), {
                closePopout: () => ew(!0)
            })), [eR, ed, v, E, ec]);
        return null == y ? (0, r.jsx)(m.A, {
            avatarSize: c._3J.SIZE_32,
            className: j.qf
        }) : (0, r.jsx)(c.YNO, {
            targetElementRef: ed,
            renderPopout: ek,
            position: "bottom",
            shouldShow: eP,
            nudgeAlignIntoViewport: !1,
            useRawTargetDimensions: !0,
            animation: c.YNO.Animation.NONE,
            spacing: -H,
            children: () => (0, r.jsx)(g.A, k({
                ref: ed,
                selected: t,
                className: s()(j.Dc, M, {
                    [j.WK]: A === P.clD.OFFLINE && !t,
                    [j.PJ]: eP
                }),
                innerClassName: j.Hz,
                onClick: Q,
                onKeyDown: K,
                onMouseDown: W,
                onContextMenu: J,
                onMouseEnter: eD,
                onMouseLeave: ex,
                onBlur: ej,
                hovered: ef,
                name: null == _ ? (0, r.jsx)("span", {
                    className: j.Xh,
                    children: (0, r.jsx)(q, {
                        colorRoleName: l,
                        colorString: null != n ? n : null,
                        name: null != E ? E : ec,
                        colorStrings: eC,
                        hideClanTag: F,
                        user: y,
                        guildId: L,
                        isHovering: ef
                    })
                }) : (0, r.jsx)(o.m, {
                    text: _,
                    children: (0, r.jsx)("span", {
                        className: s()(j.Xh, j.oj),
                        children: (0, r.jsx)(q, {
                            colorRoleName: l,
                            colorString: null != n ? n : null,
                            name: null != E ? E : ec,
                            colorStrings: eC,
                            hideClanTag: F,
                            user: y,
                            guildId: L,
                            isHovering: ef
                        })
                    })
                }),
                avatar: (0, r.jsx)(Z, {
                    user: y,
                    shouldAnimateStatus: I,
                    activities: O,
                    status: A,
                    eventHandlers: eA,
                    avatarSrc: ev,
                    isMobile: w,
                    isTyping: h,
                    avatarDecorationSrc: eO,
                    handleSetTypingRef: eM,
                    typingRef: em,
                    currentUser: b
                }),
                nameplate: U,
                subText: (0, r.jsx)(X, {
                    hideSubtext: B,
                    activities: O,
                    status: A,
                    applicationStream: v,
                    voiceStatusChannel: eb,
                    user: y,
                    channel: x,
                    isHoveringOrFocusing: ef || e_,
                    quest: eR,
                    hideTooltip: Y
                }),
                decorators: (0, r.jsx)(z, {
                    user: y,
                    isOwner: u,
                    lostPermissionTooltipText: _,
                    ownerTooltipText: f,
                    premiumSince: D,
                    onClickPremiumGuildIcon: $
                }),
                "aria-controls": ee,
                "aria-expanded": et,
                "aria-setsize": er,
                "aria-posinset": en,
                id: ei,
                tabIndex: ea,
                onFocus: eL,
                focusProps: {
                    offset: {
                        top: 4,
                        bottom: 4,
                        left: 4,
                        right: 4
                    }
                }
            }, eT))
        })
    })