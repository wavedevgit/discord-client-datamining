/** chunk id: 166444, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => B,
    IC: () => G,
    Pk: () => H,
    gm: () => U
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i);
if (21552 == n.j) var s = n(837381);
var o = n(311907),
    u = n(3026),
    c = n(990078),
    d = n(397927),
    h = n(25639),
    f = n(186369),
    g = n(571694),
    p = n(148719),
    m = n(47167),
    b = n(970812),
    y = n(713654),
    v = n(945096),
    O = n(922301),
    E = n(750112),
    N = n(584682),
    j = n(255266),
    A = n(95035),
    x = n(71393),
    S = n(290863),
    T = n(741961),
    D = n(287809),
    w = n(977997),
    P = n(837921),
    R = n(652215),
    C = n(790782),
    I = n(728444),
    M = n(811094);
let _ = {
    SELECTED: M.J1,
    CONNECTED: M.d4,
    UNREAD_IMPORTANT: M.V2,
    UNREAD_LESS_IMPORTANT: M.modeUnreadLessImportant,
    MUTED: M.F4,
    LOCKED: M.yg,
    HOISTING_NOT_CONNECTED: M.oh
};

function L(e) {
    e.preventDefault(), e.stopPropagation()
}
let k = P.Ay.getEnableHardwareAcceleration() ? d.JsQ : d.euF;

function G(e) {
    let {
        channel: t,
        size: n = d._3J.SIZE_20
    } = e;
    return (0, l.jsx)(k, {
        src: (0, g.Y)(t),
        "aria-hidden": !0,
        size: n
    })
}

function H(e) {
    let {
        channel: t,
        size: n = d._3J.SIZE_20
    } = e, r = (0, o.bG)([D.default], () => D.default.getUser(null == t ? void 0 : t.recipients[0])), i = (0, o.bG)([T.A], () => !(null == r || null == t || t.isMultiUserDM()) && null != T.A.getTypingUsers(null == t ? void 0 : t.id)[null == r ? void 0 : r.id]), {
        status: a,
        isMobile: s
    } = (0, o.cf)([S.A], () => null == r || null == t || t.isMultiUserDM() ? {
        status: null,
        isMobile: !1
    } : {
        status: S.A.getStatus(r.id),
        isMobile: S.A.isMobileOnline(r.id)
    });
    return (0, l.jsx)(k, {
        size: n,
        src: null == r ? void 0 : r.getAvatarURL(void 0, 40),
        status: a,
        isMobile: s,
        isTyping: i,
        "aria-label": null == r ? void 0 : r.username,
        statusTooltip: !0
    })
}
let U = r.memo(function(e) {
        let {
            className: t,
            containerClassName: n,
            channel: r,
            locked: i,
            hasActiveThreads: s,
            hasUsersInVoiceChannel: u,
            withGuildIcon: d
        } = e, g = (0, o.bG)([x.A], () => x.A.getGuild(r.guild_id), [r.guild_id]), m = r.type === R.rbe.DM || r.type === R.rbe.GROUP_DM, {
            enableWaveformIcon: v
        } = (0, f.b)(r.guild_id, "ChannelItemIcon"), O = (0, o.bG)([h.A], () => h.A.getAnimationStyle(r.id), [r.id]), E = r.type === R.rbe.GUILD_VOICE, N = v && E && !i && u, A = null;
        if (d && null != g && !m) A = (0, l.jsx)(j.A, {
            size: j.q.SMALL_32,
            className: M.h5,
            iconClassName: M.Is,
            channel: r,
            guild: g,
            locked: i,
            hasActiveThreads: s
        });
        else if (N) A = (0, l.jsx)(b.A, {
            color: "currentColor",
            className: a()(M.Kk, t),
            animationStyle: O,
            locked: (0, p.A)(r)
        });
        else {
            let e = function(e, t, n) {
                switch (e.type) {
                    case R.rbe.DM:
                        return function() {
                            return (0, l.jsx)(H, {
                                channel: e
                            })
                        };
                    case R.rbe.GROUP_DM:
                        return function() {
                            return (0, l.jsx)(G, {
                                channel: e
                            })
                        };
                    default:
                        return (0, y.gU)(e, t, n)
                }
            }(r, g, {
                locked: i,
                hasActiveThreads: s
            });
            if (null == e) return null;
            A = (0, l.jsx)(e, {
                color: "currentColor",
                className: a()(M.Kk, t)
            })
        }
        let S = d ? null == g ? void 0 : g.name : (0, y.Bq)(r, g, i, s),
            T = d && null != g ? "".concat(g.name, " - ").concat(S, " icon") : "".concat(S, " icon");
        return (0, l.jsx)(c.m, {
            text: S,
            delay: 500,
            children: (0, l.jsx)("div", {
                role: "img",
                "aria-label": T,
                className: a()(M.zc, n),
                children: A
            })
        })
    }),
    B = 21552 == n.j ? r.forwardRef(function(e, t) {
        var n, i, c;
        let {
            channel: h,
            name: g,
            muted: p,
            selected: b,
            connected: y,
            unread: v,
            locked: O,
            hasActiveThreads: E,
            onClick: j,
            onMouseDown: x,
            onMouseUp: S,
            onContextMenu: T,
            connectDragPreview: D,
            className: P,
            iconClassName: k,
            subtitle: G,
            subtitleColor: H,
            channel: {
                type: B
            },
            onMouseEnter: z,
            onMouseLeave: K,
            "aria-label": V,
            children: q,
            guild: W,
            channelTypeOverride: Z,
            forceInteractable: Y,
            mentionCount: J,
            resolvedUnreadSetting: X,
            isFavoriteSuggestion: Q,
            withGuildIcon: $,
            hasActiveEvent: ee = !1
        } = e, et = X === C.e.ALL_MESSAGES || null != J && J > 0, {
            enableWaveformIcon: en,
            enableHighlight: el
        } = (0, f.b)(h.guild_id, "ChannelItem"), er = en || el, ei = (0, o.bG)([w.A], () => Object.values(w.A.getVoiceStatesForChannel(h.id)).length > 0, [h.id]), ea = er && h.isGuildVocal() && ei, es = el && h.isGuildVocal() && ei, eo = (0, s.rm)(h.id), {
            role: eu
        } = eo, ec = function(e, t) {
            if (null == e) return {};
            var n, l, r, i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
                return i
            }
            if (i = function(e, t) {
                    if (null == e) return {};
                    var n, l, r = {},
                        i = Object.getOwnPropertyNames(e);
                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r
                }(e, t), Object.getOwnPropertySymbols)
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i
        }(eo, ["role"]), ed = r.useRef(null), eh = r.useRef(null), ef = (0, N.A)(h), eg = R.BVt.CHANNEL(ef, h.id), ep = (0, m.Ay)(h), em = h.isGuildVocal(), eb = (0, l.jsx)("div", {
            className: a()({
                [M.ow]: Q
            }),
            ref: eh,
            children: (0, l.jsxs)(A.A, (i = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), l.forEach(function(t) {
                        var l;
                        l = n[t], t in e ? Object.defineProperty(e, t, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = l
                    })
                }
                return e
            }({
                role: em && !y ? "button" : "link",
                href: em ? void 0 : eg,
                target: "_blank",
                ref: ed,
                className: M.nf,
                onClick: () => null == j ? void 0 : j(h)
            }, ec), c = c = {
                "aria-label": V,
                focusProps: {
                    enabled: !1
                },
                children: [(0, l.jsxs)("div", {
                    className: M.Y5,
                    children: [(0, l.jsx)(U, {
                        className: k,
                        channel: h,
                        guild: W,
                        hasUsersInVoiceChannel: ei,
                        hasActiveThreads: E,
                        locked: O,
                        withGuildIcon: $
                    }), (0, l.jsx)(u.A, {
                        className: a()(M.UU, {
                            [M.NW]: ee
                        }),
                        "aria-hidden": !0,
                        children: (0, l.jsx)(F, {
                            channel: h,
                            name: null != g ? g : ep
                        })
                    }), r.Children.count(q) > 0 ? (0, l.jsx)("div", {
                        onClick: L,
                        className: M.Y_,
                        children: q
                    }) : null]
                }), null != G ? (0, l.jsx)("div", {
                    className: a()(M.MA, {
                        [M.lY]: $
                    }),
                    children: (0, l.jsx)(d.Text, {
                        color: null != H ? H : "text-muted",
                        variant: "text-xs/medium",
                        className: M.VA,
                        children: G
                    })
                }) : null]
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, l)
                }
                return n
            })(Object(c)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e))
            }), i))
        });
        return (0, l.jsx)(d.vN3, {
            focusTarget: ed,
            ringTarget: eh,
            offset: {
                top: 2,
                bottom: 2,
                right: 4
            },
            children: (0, l.jsxs)("div", {
                ref: t,
                className: a()(P, null != j || null != S || null != x || Y ? M.iE : M.IA, (() => {
                    if (b) return a()(I.rM, _.SELECTED);
                    if (y) return a()(I.rM, _.CONNECTED);
                    if (O) return _.LOCKED;
                    if (p) return _.MUTED;
                    if (er && !y && ea) return _.HOISTING_NOT_CONNECTED;
                    if (v)
                        if (et) return _.UNREAD_IMPORTANT;
                        else return _.UNREAD_LESS_IMPORTANT;
                    return null
                })(), function(e) {
                    switch (e) {
                        case R.rbe.GUILD_STAGE_VOICE:
                        case R.rbe.GUILD_VOICE:
                            return M.typeVoice;
                        case R.rbe.ANNOUNCEMENT_THREAD:
                        case R.rbe.PUBLIC_THREAD:
                        case R.rbe.PRIVATE_THREAD:
                            return M.ZS;
                        case R.rbe.GUILD_ANNOUNCEMENT:
                        case R.rbe.GUILD_TEXT:
                        case R.rbe.GUILD_STORE:
                        case R.rbe.GUILD_FORUM:
                        case R.rbe.GUILD_MEDIA:
                        default:
                            return M.typeDefault
                    }
                }(null != Z ? Z : B)),
                onMouseUp: e => null == S ? void 0 : S(e, h),
                onMouseDown: e => null == x ? void 0 : x(e, h),
                onContextMenu: e => null == T ? void 0 : T(e, h),
                onMouseEnter: z,
                onMouseLeave: K,
                children: [!es && v && !p && (0, l.jsx)("div", {
                    className: a()(M.gy, et ? M.WS : void 0)
                }), null != (n = null == D ? void 0 : D(eb)) ? n : eb]
            })
        })
    }) : null;

function F(e) {
    var t, n, i;
    let {
        channel: a,
        name: s
    } = e, o = a.isPrivate() && 1 === (null != (t = a.rawRecipients) ? t : []).length, u = null == (i = a.rawRecipients) || null == (n = i[0]) ? void 0 : n.display_name_styles, c = r.useMemo(() => o ? (0, v.mT)(u) : null, [o, u]);
    return null != c ? (0, l.jsx)(E.A, {
        userName: s,
        displayNameStyles: c,
        effectDisplayType: O.G.PLAIN,
        boldFontOpacity: .9
    }) : s
}