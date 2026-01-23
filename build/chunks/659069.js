/** Chunk was on 72165 **/
/** chunk id: 659069, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => ei
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(827734),
    c = n(582754),
    d = n(397927),
    u = n(334738),
    h = n(241524),
    p = n(964486),
    f = n(736653),
    _ = n(793574),
    m = n(954921),
    g = n(278539),
    x = n(164956),
    b = n(713804),
    A = n(676608),
    C = n(976860),
    j = n(950191),
    O = n(62199),
    v = n(576622),
    y = n(696451),
    N = n(317525),
    w = n(71393),
    I = n(222823),
    S = n(287809),
    E = n(403362),
    P = n(427262),
    D = n(837921),
    R = n(669953),
    T = n(817818),
    L = n(591552),
    k = n(961973),
    H = n(663915),
    M = n(218785),
    G = n(901434),
    B = n(724531),
    U = n(576977),
    V = n(164048),
    F = n(839447),
    W = n(539916),
    q = n(652215),
    K = n(746080),
    Z = n(790782),
    Y = n(985018),
    z = n(713273),
    J = n(638990),
    X = n(206314);

function Q(e) {
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
}
let $ = d._3J.SIZE_80,
    ee = "required";

function et(e) {
    var t, n, r;
    let {
        guild: i,
        user: o
    } = e, {
        avatarSrc: c,
        eventHandlers: u,
        isAvatarAnimating: h
    } = (0, O.A)({
        user: o,
        guildId: i.id,
        size: 120
    }), {
        avatarDecorationSrc: f
    } = (0, g.A)({
        user: o,
        size: (0, m.Te)($),
        onlyAnimateOnHoverOrFocus: !h
    }), _ = (0, s.bG)([y.Ay], () => y.Ay.getSelfMember(i.id)), x = (0, s.yK)([y.Ay], () => y.Ay.getMemberRoleWithPendingUpdates(i.id, o.id)), C = (0, s.bG)([N.A], () => N.A.getSortedRoles(i.id)), w = (0, A.Ay)(i.id, o.id), I = C.filter(e => x.includes(e.id)), S = (0, j.Ay)(o.id, i.id);
    (0, p.Ay)(() => {
        (0, v.A)(o.id, o.getAvatarURL(i.id, (0, d.FT9)($)), {
            guildId: i.id
        })
    });
    let E = (0, b.parseBioReact)(null == S ? void 0 : S.bio),
        R = D.Ay.getEnableHardwareAcceleration() ? d.JsQ : d.euF;
    return (0, l.jsxs)("div", {
        className: z.ME,
        children: [(0, l.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: Y.intl.string(Y.t.diTbF8)
        }), (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: Y.intl.string(Y.t["+8um3M"])
        }), (0, l.jsxs)("div", {
            className: z.Kq,
            children: [(0, l.jsx)("div", (n = Q({}, u), r = r = {
                children: (0, l.jsx)(R, {
                    src: c,
                    avatarDecoration: f,
                    size: $,
                    "aria-label": o.username
                })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, l)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }), n)), (0, l.jsx)(d.Text, {
                variant: "text-lg/medium",
                color: "text-strong",
                className: z.Xh,
                children: null != (t = null == _ ? void 0 : _.nick) ? t : P.Ay.getName(o)
            }), (0, l.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: a()(X.PT, z.z3),
                children: E
            }), null != I && I.length > 0 && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("hr", {
                    className: z.me
                }), (0, l.jsx)(d.Text, {
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    className: z.DD,
                    children: Y.intl.string(Y.t["LPJmL/"])
                }), (0, l.jsx)("div", {
                    className: z.Ot,
                    children: null == I ? void 0 : I.map(e => {
                        var t;
                        return (0, l.jsxs)("div", {
                            className: z.JC,
                            children: [(0, l.jsx)(d.RYH, {
                                color: null != (t = e.colorString) ? t : q.TpD,
                                colors: w ? e.colorStrings : null,
                                className: z.m4
                            }), (0, l.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "text-strong",
                                children: e.name
                            })]
                        }, e.id)
                    })
                })]
            })]
        })]
    })
}

function en(e) {
    var t;
    let {
        prompt: n,
        guild: i
    } = e, [c, u] = r.useState(null), [h, p] = r.useState(new Set), f = null == n || null == (t = n.options) ? void 0 : t.filter(e => h.has(e.id)), _ = (0, k.a)(f), m = (0, k.vV)(f), g = (0, s.yK)([L.A], () => L.A.getOnboardingResponsesForPrompt(i.id, n.id)), {
        helpText: x,
        helpTextAdditional: b
    } = (0, M.W)({
        guild: i,
        prompt: n,
        selectedRoleIds: _,
        selectedChannelIds: m,
        itemHook: (e, t) => (0, l.jsx)(d.Text, {
            variant: "text-xs/medium",
            color: "text-strong",
            children: e
        }, t)
    }), {
        handleSelectOption: A
    } = (0, H.A)(i.id), C = n.options.map(e => Q({
        value: e.id
    }, e)), j = n.options.filter(e => g.includes(e.id)).map(e => e.id);
    return (0, l.jsxs)("div", {
        className: z.J1,
        "data-new": n.isNew,
        children: [n.isNew && (0, l.jsx)(d.LpS, {
            color: o.A.unsafe_rawColors.BRAND_260.css,
            text: Y.intl.string(Y.t.y2b7CA),
            className: z.Ad
        }), (0, l.jsxs)(d.Heading, {
            className: z.Hi,
            variant: "heading-md/semibold",
            color: "text-strong",
            children: [n.title, n.required ? (0, l.jsx)("span", {
                className: a()(z.mw, {
                    [z.So]: (null == c ? void 0 : c.type) === ee
                }),
                children: "*"
            }) : null]
        }), (0, l.jsx)(F.A, {
            options: C,
            value: j,
            onChange: e => {
                let t = e.find(e => !g.includes(e.id)),
                    l = e.map(e => e.id);
                if (null != t) A(n, t, !0), n.singleSelect && n.options.forEach(e => h.delete(e.id)), h.add(t.id);
                else {
                    let e = g.filter(e => !l.includes(e)),
                        t = n.options.filter(t => e.includes(t.id));
                    if (g.length <= t.length && n.required) return void u({
                        type: ee
                    });
                    t.forEach(e => {
                        A(n, e, !1), h.delete(e.id)
                    })
                }
                p(new Set(h)), u(null)
            },
            canBeNew: !n.isNew
        }), (0, l.jsxs)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: z.BK,
            children: [x, " ", b]
        })]
    })
}

function el(e) {
    let {
        guild: t
    } = e, n = (0, s.bG)([L.A], () => L.A.getConnections(t.id));
    return 0 === n.length ? null : (0, l.jsxs)("div", {
        className: z.J1,
        children: [(0, l.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: Y.intl.string(Y.t.eDVMrA)
        }), (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: Y.intl.string(Y.t.BozOXu)
        }), (0, l.jsx)("div", {
            className: z.lA,
            children: n.map((e, n) => (0, l.jsx)(B.A, {
                connection: e,
                guildId: t.id,
                location: _.A.CHANNELS_AND_ROLES
            }, n))
        })]
    })
}

function er(e) {
    var t;
    let {
        prompt: n,
        guild: i
    } = e, [c, u] = r.useState(null), [h, p] = r.useState(new Set), f = null == n || null == (t = n.options) ? void 0 : t.filter(e => h.has(e.id)), _ = (0, k.a)(f), m = (0, k.vV)(f), g = (0, s.yK)([L.A], () => L.A.getOnboardingResponsesForPrompt(i.id, n.id)), {
        helpText: x,
        helpTextAdditional: b
    } = (0, M.W)({
        guild: i,
        prompt: n,
        selectedRoleIds: _,
        selectedChannelIds: m,
        itemHook: (e, t) => (0, l.jsx)(d.Text, {
            variant: "text-xs/medium",
            color: "text-strong",
            children: e
        }, t)
    }), {
        handleSelectOption: A
    } = (0, H.A)(i.id);
    return (0, l.jsxs)("div", {
        className: z.J1,
        "data-new": n.isNew,
        children: [n.isNew && (0, l.jsx)(d.LpS, {
            color: o.A.unsafe_rawColors.BRAND_260.css,
            text: Y.intl.string(Y.t.y2b7CA),
            className: z.Ad
        }), (0, l.jsxs)(d.Heading, {
            className: z.Hi,
            variant: "heading-md/semibold",
            color: "text-strong",
            children: [n.title, n.required ? (0, l.jsx)("span", {
                className: a()(z.mw, {
                    [z.So]: (null == c ? void 0 : c.type) === ee
                }),
                children: "*"
            }) : null]
        }), (0, l.jsx)("div", {
            className: z.vS,
            children: n.options.map(e => (0, l.jsx)(V.A, {
                hideMemberCount: !0,
                guildId: i.id,
                option: e,
                onSelect: t => {
                    !t && 1 === g.length && n.required ? u({
                        type: ee
                    }) : (A(n, e, null != t && t), n.singleSelect && t && n.options.forEach(e => h.delete(e.id)), t ? h.add(e.id) : h.delete(e.id), p(new Set(h)), u(null))
                },
                selected: g.includes(e.id),
                canBeNew: !n.isNew
            }, e.id))
        }), (0, l.jsxs)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: z.BK,
            children: [x, " ", b]
        })]
    })
}

function ei(e) {
    let {
        guildId: t,
        onBrowseChannels: n
    } = e, i = (0, c.Mw)((0, f.Ay)()), p = (0, s.bG)([w.A], () => w.A.getGuild(t)), _ = (0, s.bG)([S.default], () => S.default.getCurrentUser()), m = (0, h.A)("(min-width: 1344px)") && null != _, g = r.useCallback(() => {
        (0, C.pX)(q.BVt.CHANNEL(t, K.VV.CHANNEL_BROWSER)), null == n || n()
    }, [t, n]), b = (0, s.bG)([I.Ay], () => I.Ay.hasUnread(t, Z.P.GUILD_ONBOARDING_QUESTION)), A = null == p ? void 0 : p.latestOnboardingQuestionId, {
        onboardingPromptsRaw: j,
        newOnboardingPrompts: O,
        onboardingPromptsWithNewAnswers: v,
        newAnswersCount: y,
        onboardingPrompts: N
    } = (0, G.A)(t);
    r.useEffect(() => {
        (null == p ? void 0 : p.id) == null || !x.A.isFullServerPreview(p.id) && (L.A.shouldFetchPrompts(p.id) || b) && (0, T.jx)(p.id)
    }, [null == p ? void 0 : p.id, b, A]), r.useEffect(() => {
        if ((null == p ? void 0 : p.id) != null && !x.A.isFullServerPreview(p.id)) return () => {
            (0, u.hK)(p.id, Z.P.GUILD_ONBOARDING_QUESTION, L.A.ackIdForGuild(p.id)), R.A.updateOnboardingResponses(p.id)
        }
    }, [null == p ? void 0 : p.id]);
    let P = r.useCallback(e => {
        if (null == p) return null;
        switch (e.type) {
            case W.ME.MULTIPLE_CHOICE:
                return (0, l.jsx)(er, {
                    prompt: e,
                    guild: p
                }, e.id);
            case W.ME.DROPDOWN:
                return (0, l.jsx)(en, {
                    prompt: e,
                    guild: p
                }, e.id);
            default:
                (0, E.xb)(e.type)
        }
    }, [p]);
    if (null == p) return null;
    if (0 === j.length) {
        let e = i ? o.A.unsafe_rawColors.PRIMARY_300.css : o.A.unsafe_rawColors.PRIMARY_500.css,
            t = i ? o.A.unsafe_rawColors.PRIMARY_700.css : o.A.unsafe_rawColors.PRIMARY_230.css;
        return (0, l.jsx)("div", {
            className: a()(J.Qs, z.Zc),
            children: (0, l.jsxs)("div", {
                className: z.do,
                children: [(0, l.jsx)(U.A, {
                    className: z.Dw,
                    foregroundColor: e,
                    backgroundColor: t
                }), (0, l.jsx)(d.Heading, {
                    className: z.jU,
                    variant: "heading-md/semibold",
                    children: Y.intl.string(Y.t.leKHQz)
                }), (0, l.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    children: Y.intl.format(Y.t["jH+ktB"], {
                        onBrowseChannels: g
                    })
                })]
            })
        })
    }
    return (0, l.jsxs)(d.T7Y, {
        className: z.XG,
        fade: !0,
        children: [(0, l.jsxs)("div", {
            className: z.kw,
            children: [(O.length > 0 || v.length > 0) && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("div", {
                    children: (0, l.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: Y.intl.format(Y.t.iB5Gqe, {
                            count: O.length + y
                        })
                    })
                }), O.map(P), v.map(P), (0, l.jsx)("div", {
                    className: z.DY
                })]
            }), N.length > 0 && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsxs)("div", {
                    children: [(0, l.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: Y.intl.format(Y.t["8IV8K9"], {
                            count: N.length
                        })
                    }), (0, l.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: Y.intl.string(Y.t.Ecz7T9)
                    })]
                }), N.map(P)]
            }), (0, l.jsx)(el, {
                guild: p
            })]
        }), m && (0, l.jsx)(et, {
            guild: p,
            user: _
        })]
    })
}