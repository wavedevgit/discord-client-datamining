/** Chunk was on 47841 **/
/** chunk id: 92911, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => B
}), n(896048), n(228524), n(733351), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(812729),
    o = n.n(a),
    c = n(131346),
    d = n(522437),
    u = n(311907),
    g = n(397927),
    m = n(442433),
    p = n(565645),
    f = n(964486),
    b = n(775602),
    h = n(47167),
    x = n(713654),
    j = n(508675),
    _ = n(263063),
    O = n(714991),
    v = n(95035),
    y = n(447696),
    A = n(861410),
    E = n(734057),
    N = n(603349),
    S = n(954571),
    I = n(488926),
    T = n(997509),
    C = n(694012),
    P = n(652215),
    w = n(818348),
    R = n(650583),
    D = n(985018),
    G = n(134599);

function L(e) {
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

function k(e, t) {
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
let M = "WELCOME_CHANNEL",
    U = e => {
        var t;
        let l, {
                guildId: a,
                welcomeChannel: o,
                onEdit: f,
                onChannelReorder: b,
                isDropHovered: _,
                index: O
            } = e,
            v = i.useRef(null),
            y = (0, u.bG)([E.A], () => E.A.getChannel(o.channel_id)),
            A = (0, u.bG)([j.Ay], () => null != o.emoji_id ? j.Ay.getUsableCustomEmojiById(o.emoji_id) : null),
            S = null != y && I.MJ(P.xBc.VIEW_CHANNEL, y),
            T = null != (t = (0, x.gU)(y)) ? t : g.N$i,
            C = (0, h.Ay)(y, !1),
            R = () => {
                (0, g.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("40971").then(n.bind(n, 825894));
                    return t => (0, r.jsx)(e, k(L({}, t), {
                        onConfirm: () => {
                            f(), t.onClose()
                        },
                        channelId: o.channel_id
                    }))
                }, {
                    onCloseRequest: () => w.FX
                })
            },
            [, U] = (0, c.i)({
                type: M,
                item: {
                    channel: o,
                    index: O
                },
                end: (e, t) => {
                    null == e || t.didDrop() || b(e.channel, null, !0)
                }
            }),
            [, B] = (0, d.H)({
                accept: M,
                hover: e => {
                    b(e.channel, O, !1)
                },
                drop: e => {
                    b(e.channel, O, !0)
                }
            });
        return i.useLayoutEffect(() => (U(B(v)), () => {
            U(null), B(null)
        }), [U, B]), l = S ? null != A || null != o.emoji_name ? (0, r.jsx)(p.A, {
            emojiId: null == A ? void 0 : A.id,
            emojiName: null != A ? A.name : o.emoji_name,
            animated: !!(null == A ? void 0 : A.animated)
        }) : (0, r.jsx)(T, {
            size: "md",
            color: "currentColor",
            className: G.p
        }) : (0, r.jsx)(N.A, {
            width: 24,
            height: 24,
            className: G.QW
        }), (0, r.jsxs)("div", {
            className: s()(G.w8, {
                [G.cB]: _
            }),
            ref: v,
            "data-dnd-name": o.description,
            onContextMenu: e => {
                (0, m.L3)(e, async () => {
                    let {
                        default: e
                    } = await n.e("84913").then(n.bind(n, 36456));
                    return t => (0, r.jsx)(e, k(L({}, t), {
                        guildId: a,
                        welcomeChannel: o,
                        onChannelReorder: b,
                        onShowDeleteModal: R,
                        index: O
                    }))
                })
            },
            children: [l, (0, r.jsxs)("div", {
                className: G.X3,
                children: [(0, r.jsx)(g.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: o.description
                }), (0, r.jsxs)(g.Text, {
                    className: S ? void 0 : G.op,
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: [(0, r.jsx)(T, {
                        className: G.nO,
                        size: "xxs",
                        color: "currentColor"
                    }), (0, r.jsx)("span", {
                        children: S ? C : D.intl.string(D.t.zFuCsF)
                    })]
                })]
            }), (0, r.jsx)(g.K0, {
                variant: "icon-only",
                icon: g.ucK,
                "aria-label": D.intl.string(D.t.JYBc3K),
                onClick: R
            })]
        })
    },
    B = e => {
        let {
            guild: t
        } = e, {
            welcomeSettings: l,
            originalWelcomeSettings: s
        } = (0, u.bG)([A.A], () => A.A.getSettingsProps()), a = (0, u.bG)([b.A], () => b.A.useReducedMotion), [c, d] = i.useState(null), [m, p] = i.useState(!1), [h, x] = i.useState(!1), {
            description: j,
            channels: E,
            enabled: I
        } = l, w = e => {
            null == t || o()(e, s.channels) || ((0, y.i4)(t.id, {
                channels: e
            }), p(!0))
        }, M = e => {
            null == t || e !== s.enabled && ((0, y.i4)(t.id, {
                enabled: e
            }), x(!a), p(!0))
        }, B = (e, t, n) => {
            if (null == E) return;
            let r = E.indexOf(e),
                i = [...E];
            null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), (0, y.Xx)({
                channels: i
            })), n ? (w(i), d(null)) : d(t)
        }, F = i.useRef(!1);
        (0, f.Ay)(() => () => {
            F.current = !0
        }), i.useEffect(() => () => {
            if (F.current && m) {
                let e = [],
                    n = [],
                    r = !1;
                null == E || E.forEach(t => {
                    e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (r = !0)
                }), S.default.track(P.HAw.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                    guild_id: null == t ? void 0 : t.id,
                    options: e,
                    options_channel_ids: n,
                    guild_description: j,
                    has_custom_emojis: r,
                    is_enabled: I
                })
            }
        }, [m, E, j, I, t]), i.useEffect(() => () => (0, y.Vv)(), []);
        let H = i.useCallback(() => {
            null != t && T.A.open(t.id, P.BEX.ONBOARDING)
        }, [t]);
        return null == t ? null : (0, r.jsxs)("div", {
            children: [(0, r.jsx)(g.Heading, {
                variant: "heading-lg/semibold",
                children: D.intl.string(D.t["2rkmDr"])
            }), (0, r.jsx)("div", {
                className: G.lm,
                children: (0, r.jsxs)(g.Text, {
                    variant: "text-md/normal",
                    children: [(0, r.jsx)(N.A, {
                        className: G.EP
                    }), D.intl.format(D.t["oj2vi+"], {
                        onboardingLink: e => (0, r.jsx)(v.A, {
                            onClick: H,
                            children: e
                        })
                    })]
                })
            }), (0, r.jsx)(g.Text, {
                variant: "text-sm/normal",
                children: D.intl.string(D.t.w2d74x)
            }), (0, r.jsx)(C.A, {
                enabled: I,
                onPreview: (null == E ? void 0 : E.length) === 0 ? void 0 : () => {
                    null != t && (0, g.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("98063").then(n.bind(n, 143154));
                        return n => (0, r.jsx)(e, k(L({}, n), {
                            guildId: t.id,
                            isPreview: !0
                        }))
                    })
                },
                onToggle: I || (null == E ? void 0 : E.length) !== 0 ? () => {
                    M(!I)
                } : void 0,
                animateStatus: h,
                firstLine: I ? D.intl.string(D.t.JbB7Ql) : D.intl.string(D.t["/bd0Qv"]),
                secondLine: I ? D.intl.string(D.t.TA1g7z) : D.intl.string(D.t.nc6r1B)
            }), (0, r.jsxs)("div", {
                className: G.i1,
                children: [(0, r.jsxs)("div", {
                    className: G.eB,
                    children: [(0, r.jsx)(_.A, {
                        size: _.A.Sizes.LARGER,
                        className: G.Kk,
                        guild: t,
                        animate: !0,
                        tabIndex: -1
                    }), (0, r.jsx)(g.Heading, {
                        className: G.re,
                        variant: "heading-xl/semibold",
                        children: D.intl.format(D.t["0aydCN"], {
                            guildName: t.name,
                            guildNameHook: (e, n) => (0, r.jsxs)("span", {
                                children: [(0, r.jsx)(O.A, {
                                    guild: t,
                                    className: G.eZ,
                                    flowerStarClassName: G.mP
                                }), (0, r.jsx)("strong", {
                                    children: e
                                })]
                            }, n)
                        })
                    }), (0, r.jsx)("div", {
                        className: G.Wi,
                        children: (0, r.jsx)(g.fs1, {
                            placeholder: D.intl.string(D.t.qzZHaX),
                            onChange: e => {
                                (0, y.Xx)({
                                    description: e
                                })
                            },
                            onBlur: () => {
                                null == t || j !== s.description && ((0, y.i4)(t.id, {
                                    description: null == j ? void 0 : j.trim()
                                }), p(!0))
                            },
                            onKeyDown: e => {
                                e.key === R.dh.ENTER && e.preventDefault()
                            },
                            value: j,
                            maxLength: 140,
                            disabled: !0
                        })
                    })]
                }), (0, r.jsx)(g.cGx, {
                    className: G.yF
                }), (0, r.jsx)("div", {
                    className: G.f6,
                    children: (0, r.jsx)(g.D0$, {
                        label: D.intl.string(D.t.euJXzT),
                        description: D.intl.string(D.t.VOnnnz),
                        children: null == E ? void 0 : E.map((e, n) => (0, r.jsx)(U, {
                            guildId: t.id,
                            welcomeChannel: e,
                            onEdit: e => {
                                let t = [...null != E ? E : []];
                                null == e ? t.splice(n, 1) : t[n] = e, (0, y.Xx)({
                                    channels: t
                                }), w(t), 0 === t.length && I && ((0, y.Xx)({
                                    enabled: !1
                                }), M(!1))
                            },
                            onChannelReorder: B,
                            isDropHovered: n === c,
                            index: n
                        }, n))
                    })
                })]
            })]
        })
    }