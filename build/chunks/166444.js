/** chunk id: 166444 params = (module,exports,require) **/
n.d(t, {
    Ay: () => H,
    IC: () => w,
    Pk: () => W,
    gm: () => B
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a);
if (21552 == n.j) var s = n(837381);
var o = n(311907),
    u = n(3026),
    d = n(990078),
    c = n(397927),
    A = n(25639),
    h = n(186369),
    f = n(571694),
    E = n(148719),
    _ = n(47167),
    g = n(970812),
    m = n(713654),
    I = n(945096),
    N = n(922301),
    C = n(750112),
    L = n(93055),
    T = n(584682),
    x = n(598104),
    S = n(95035),
    b = n(71393),
    v = n(290863),
    D = n(741961),
    p = n(287809),
    y = n(977997),
    G = n(837921),
    j = n(66933),
    O = n(652215),
    P = n(790782),
    F = n(907305),
    M = n(645591);
let R = {
    SELECTED: M.J1,
    CONNECTED: M.d4,
    UNREAD_IMPORTANT: M.V2,
    UNREAD_LESS_IMPORTANT: M.modeUnreadLessImportant,
    MUTED: M.F4,
    LOCKED: M.yg
};

function k(e) {
    e.preventDefault(), e.stopPropagation()
}
let U = G.Ay.getEnableHardwareAcceleration() ? c.JsQ : c.euF;

function w(e) {
    let {
        channel: t,
        size: n = c._3J.SIZE_20,
        className: l,
        useDynamicFacepile: a = !1
    } = e;
    return a ? (0, i.jsx)(x.A, {
        className: l,
        channel: t,
        "aria-hidden": !0,
        size: n
    }) : (0, i.jsx)(U, {
        className: l,
        src: (0, f.Y)(t),
        "aria-hidden": !0,
        size: n
    })
}

function W(e) {
    let {
        channel: t,
        size: n = c._3J.SIZE_20,
        className: l
    } = e, a = (0, o.bG)([p.default], () => p.default.getUser(t?.recipients[0])), r = (0, o.bG)([D.A], () => !(null == a || null == t || t.isMultiUserDM()) && null != D.A.getTypingUsers(t?.id)[a?.id]), {
        status: s,
        isMobile: u,
        isVR: d
    } = (0, o.cf)([v.A], () => null == a || null == t || t.isMultiUserDM() ? {
        status: null,
        isMobile: !1,
        isVR: !1
    } : {
        status: v.A.getStatus(a.id),
        isMobile: v.A.isMobileOnline(a.id),
        isVR: v.A.isVROnline(a.id)
    });
    return (0, i.jsx)(U, {
        className: l,
        size: n,
        src: a?.getAvatarURL(void 0, 40),
        status: s,
        isMobile: u,
        isVR: d,
        isTyping: r,
        "aria-label": a?.username,
        statusTooltip: !0
    })
}
let B = l.memo(function(e) {
        let {
            className: t,
            containerClassName: n,
            channel: l,
            locked: a,
            hasActiveThreads: s,
            hasUsersInVoiceChannel: u
        } = e, f = (0, o.bG)([b.A], () => b.A.getGuild(l.guild_id), [l.guild_id]), _ = l.type === O.rbe.DM || l.type === O.rbe.GROUP_DM, I = (0, L.DZ)(), N = I && _, {
            enableWaveformIcon: C
        } = (0, h.b)(l.guild_id, "ChannelItemIcon"), T = (0, o.bG)([A.A], () => A.A.getAnimationStyle(l.id), [l.id]), x = l.type === O.rbe.GUILD_VOICE, S = null;
        if (C && x && !a && u) S = (0, i.jsx)(g.A, {
            color: "currentColor",
            className: r()(M.Kk, t),
            animationStyle: T,
            locked: (0, E.A)(l)
        });
        else {
            let e = function(e, t, n, l, a) {
                let r = l ? c._3J.SIZE_24 : c._3J.SIZE_20;
                switch (e.type) {
                    case O.rbe.DM:
                        return function(t) {
                            let {
                                className: n
                            } = t;
                            return (0, i.jsx)(W, {
                                channel: e,
                                size: r,
                                className: n
                            })
                        };
                    case O.rbe.GROUP_DM:
                        return function(t) {
                            let {
                                className: n
                            } = t;
                            return (0, i.jsx)(w, {
                                channel: e,
                                size: r,
                                className: n,
                                useDynamicFacepile: a
                            })
                        };
                    default:
                        return (0, m.gU)(e, t, n)
                }
            }(l, f, {
                locked: a,
                hasActiveThreads: s
            }, N, N);
            if (null == e) return null;
            S = (0, i.jsx)(e, {
                color: "currentColor",
                className: r()(M.Kk, t)
            })
        }
        let v = (0, m.Bq)(l, f, a, s),
            D = `${v} icon`;
        return (0, i.jsx)(d.m, {
            text: v,
            delay: 500,
            children: (0, i.jsx)("div", {
                role: "img",
                "aria-label": D,
                className: r()(M.zc, n),
                children: I ? (0, i.jsx)("div", {
                    className: M.QO,
                    children: S
                }) : S
            })
        })
    }),
    H = 21552 == n.j ? l.forwardRef(function(e, t) {
        let {
            channel: n,
            name: a,
            muted: d,
            selected: A,
            connected: h,
            unread: f,
            locked: E,
            hasActiveThreads: g,
            onClick: m,
            onMouseDown: I,
            onMouseUp: N,
            onContextMenu: C,
            connectDragPreview: L,
            className: x,
            iconClassName: b,
            subtitle: v,
            subtitleColor: D,
            channel: {
                type: p
            },
            onMouseEnter: G,
            onMouseLeave: U,
            "aria-label": w,
            children: W,
            guild: H,
            channelTypeOverride: K,
            forceInteractable: J,
            mentionCount: V,
            resolvedUnreadSetting: Z,
            isFavoriteSuggestion: Y,
            hasActiveEvent: $ = !1,
            transitionExtras: q
        } = e, X = Z === P.e.ALL_MESSAGES || null != V && V > 0, Q = (0, o.bG)([y.A], () => Object.values(y.A.getVoiceStatesForChannel(n.id)).length > 0, [n.id]), {
            role: ee,
            ...et
        } = (0, s.rm)(n.id), en = l.useRef(null), ei = l.useRef(null), el = (0, T.A)(n);
        null != el && j.A.getConfig({
            guildId: el,
            location: "channel_item"
        });
        let ea = O.BVt.CHANNEL(el, n.id),
            er = (0, _.Ay)(n),
            es = n.isGuildVocal(),
            eo = null != m || null != N || null != I || J,
            eu = (0, i.jsx)("div", {
                className: r()({
                    [M.ow]: Y
                }),
                ref: ei,
                children: (0, i.jsxs)(S.A, {
                    role: es && !h ? "button" : "link",
                    href: es ? void 0 : ea,
                    target: "_blank",
                    ref: en,
                    className: M.nf,
                    onClick: () => m?.(n),
                    transitionExtras: q,
                    ...et,
                    "aria-label": w,
                    "aria-current": A ? "page" : void 0,
                    focusProps: {
                        enabled: !1
                    },
                    children: [(0, i.jsxs)("div", {
                        className: M.Y5,
                        children: [(0, i.jsx)(B, {
                            className: b,
                            channel: n,
                            guild: H,
                            hasUsersInVoiceChannel: Q,
                            hasActiveThreads: g,
                            locked: E
                        }), (0, i.jsx)(u.A, {
                            className: r()(M.UU, {
                                [M.NW]: $
                            }),
                            "aria-hidden": !0,
                            children: (0, i.jsx)(z, {
                                channel: n,
                                name: null != a ? a : er
                            })
                        }), l.Children.count(W) > 0 ? (0, i.jsx)("div", {
                            onClick: k,
                            onKeyPress: k,
                            className: M.Y_,
                            children: W
                        }) : null]
                    }), null != v ? (0, i.jsx)("div", {
                        className: M.MA,
                        children: (0, i.jsx)(c.Text, {
                            color: D ?? "text-muted",
                            variant: "text-xs/medium",
                            className: M.VA,
                            children: v
                        })
                    }) : null]
                })
            });
        return (0, i.jsx)(c.vN3, {
            focusTarget: en,
            ringTarget: ei,
            offset: {
                top: 2,
                bottom: 2,
                right: 4
            },
            children: (0, i.jsxs)("div", {
                ref: t,
                className: r()(x, eo ? M.iE : M.IA, (() => {
                    if (A) return r()(F.rM, R.SELECTED);
                    if (h) return r()(F.rM, R.CONNECTED);
                    if (E) return R.LOCKED;
                    if (d) return R.MUTED;
                    if (f)
                        if (X) return R.UNREAD_IMPORTANT;
                        else return R.UNREAD_LESS_IMPORTANT;
                    return null
                })(), function(e) {
                    switch (e) {
                        case O.rbe.GUILD_STAGE_VOICE:
                        case O.rbe.GUILD_VOICE:
                            return M.typeVoice;
                        case O.rbe.ANNOUNCEMENT_THREAD:
                        case O.rbe.PUBLIC_THREAD:
                        case O.rbe.PRIVATE_THREAD:
                            return M.ZS;
                        case O.rbe.GUILD_ANNOUNCEMENT:
                        case O.rbe.GUILD_TEXT:
                        case O.rbe.GUILD_STORE:
                        case O.rbe.GUILD_FORUM:
                        case O.rbe.GUILD_MEDIA:
                        default:
                            return M.typeDefault
                    }
                }(K ?? p)),
                onMouseUp: e => N?.(e, n),
                onMouseDown: e => I?.(e, n),
                onContextMenu: e => C?.(e, n),
                onMouseEnter: G,
                onMouseLeave: U,
                children: [d || !f ? null : (0, i.jsx)("div", {
                    className: r()(M.gy, X ? M.WS : void 0)
                }), L?.(eu) ?? eu]
            })
        })
    }) : null;

function z(e) {
    let {
        channel: t,
        name: n
    } = e, a = t.isPrivate() && 1 === (t.rawRecipients ?? []).length, r = t.rawRecipients?.[0]?.display_name_styles, s = l.useMemo(() => a ? (0, I.mT)(r) : null, [a, r]);
    return null != s ? (0, i.jsx)(C.A, {
        userName: n,
        displayNameStyles: s,
        effectDisplayType: N.G.PLAIN,
        boldFontOpacity: .9
    }) : n
}