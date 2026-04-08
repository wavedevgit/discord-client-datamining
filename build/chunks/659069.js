/** chunk id: 659069 params = (module,exports,require) **/
t.d(n, {
    A: () => ei
});
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(311907),
    d = t(827734),
    c = t(582754),
    o = t(397927),
    u = t(334738),
    _ = t(241524),
    h = t(964486),
    x = t(736653),
    m = t(793574),
    g = t(562819),
    A = t(215689),
    C = t(164956),
    f = t(713804),
    p = t(676608),
    N = t(976860),
    j = t(950191),
    v = t(62199),
    b = t(576622),
    I = t(696451),
    E = t(317525),
    S = t(71393),
    w = t(222823),
    y = t(287809),
    O = t(403362),
    T = t(427262),
    L = t(837921),
    R = t(669953),
    D = t(817818),
    H = t(591552),
    M = t(961973),
    G = t(663915),
    B = t(218785),
    k = t(901434),
    P = t(724531),
    U = t(576977),
    V = t(164048),
    F = t(839447),
    W = t(539916),
    q = t(652215),
    K = t(746080),
    Z = t(790782),
    Y = t(985018),
    z = t(642723),
    J = t(513544),
    X = t(830684);
let Q = o._3J.SIZE_80,
    $ = "required";

function ee(e) {
    let {
        guild: n,
        user: t
    } = e, {
        avatarSrc: i,
        eventHandlers: s,
        isAvatarAnimating: d
    } = (0, v.A)({
        user: t,
        guildId: n.id,
        size: 120
    }), {
        avatarDecorationSrc: c
    } = (0, A.A)({
        user: t,
        size: (0, g.Te)(Q),
        onlyAnimateOnHoverOrFocus: !d
    }), u = (0, r.bG)([I.Ay], () => I.Ay.getSelfMember(n.id)), _ = (0, r.yK)([I.Ay], () => I.Ay.getMemberRoleWithPendingUpdates(n.id, t.id)), x = (0, r.bG)([E.A], () => E.A.getSortedRoles(n.id)), m = (0, p.Ay)(n.id, t.id), C = x.filter(e => _.includes(e.id)), N = (0, j.Ay)(t.id, n.id);
    (0, h.Ay)(() => {
        (0, b.A)(t.id, t.getAvatarURL(n.id, (0, o.FT9)(Q)), {
            guildId: n.id
        })
    });
    let S = (0, f.parseBioReact)(N?.bio),
        w = L.Ay.getEnableHardwareAcceleration() ? o.JsQ : o.euF;
    return (0, l.jsxs)("div", {
        className: z.ME,
        children: [(0, l.jsx)(o.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: Y.intl.string(Y.t.diTbF8)
        }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: Y.intl.string(Y.t["+8um3M"])
        }), (0, l.jsxs)("div", {
            className: z.Kq,
            children: [(0, l.jsx)("div", {
                ...s,
                children: (0, l.jsx)(w, {
                    src: i,
                    avatarDecoration: c,
                    size: Q,
                    "aria-label": t.username
                })
            }), (0, l.jsx)(o.Text, {
                variant: "text-lg/medium",
                color: "text-strong",
                className: z.Xh,
                children: u?.nick ?? T.Ay.getName(t)
            }), (0, l.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: a()(X.PT, z.z3),
                children: S
            }), null != C && C.length > 0 && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("hr", {
                    className: z.me
                }), (0, l.jsx)(o.Text, {
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    className: z.DD,
                    children: Y.intl.string(Y.t["LPJmL/"])
                }), (0, l.jsx)("div", {
                    className: z.Ot,
                    children: C?.map(e => (0, l.jsxs)("div", {
                        className: z.JC,
                        children: [(0, l.jsx)(o.RYH, {
                            color: e.colorString ?? q.TpD,
                            colors: m ? e.colorStrings : null,
                            className: z.m4
                        }), (0, l.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-strong",
                            children: e.name
                        })]
                    }, e.id))
                })]
            })]
        })]
    })
}

function en(e) {
    let {
        prompt: n,
        guild: t
    } = e, [s, c] = i.useState(null), [u, _] = i.useState(new Set), h = n?.options?.filter(e => u.has(e.id)), x = (0, M.a)(h), m = (0, M.vV)(h), g = (0, r.yK)([H.A], () => H.A.getOnboardingResponsesForPrompt(t.id, n.id)), {
        helpText: A,
        helpTextAdditional: C
    } = (0, B.W)({
        guild: t,
        prompt: n,
        selectedRoleIds: x,
        selectedChannelIds: m,
        itemHook: (e, n) => (0, l.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-strong",
            children: e
        }, n)
    }), {
        handleSelectOption: f
    } = (0, G.A)(t.id), p = n.options.map(e => ({
        value: e.id,
        ...e
    })), N = n.options.filter(e => g.includes(e.id)).map(e => e.id);
    return (0, l.jsxs)("div", {
        className: z.J1,
        "data-new": n.isNew,
        children: [n.isNew && (0, l.jsx)(o.LpS, {
            color: d.A.unsafe_rawColors.BRAND_260.css,
            text: Y.intl.string(Y.t.y2b7CA),
            className: z.Ad
        }), (0, l.jsxs)(o.Heading, {
            className: z.Hi,
            variant: "heading-md/semibold",
            color: "text-strong",
            children: [n.title, n.required ? (0, l.jsx)("span", {
                className: a()(z.mw, {
                    [z.So]: s?.type === $
                }),
                children: "*"
            }) : null]
        }), (0, l.jsx)(F.A, {
            options: p,
            value: N,
            onChange: e => {
                let t = e.find(e => !g.includes(e.id)),
                    l = e.map(e => e.id);
                if (null != t) f(n, t, !0), n.singleSelect && n.options.forEach(e => u.delete(e.id)), u.add(t.id);
                else {
                    let e = g.filter(e => !l.includes(e)),
                        t = n.options.filter(n => e.includes(n.id));
                    if (g.length <= t.length && n.required) return void c({
                        type: $
                    });
                    t.forEach(e => {
                        f(n, e, !1), u.delete(e.id)
                    })
                }
                _(new Set(u)), c(null)
            },
            canBeNew: !n.isNew
        }), (0, l.jsxs)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: z.BK,
            children: [A, " ", C]
        })]
    })
}

function et(e) {
    let {
        guild: n
    } = e, t = (0, r.bG)([H.A], () => H.A.getConnections(n.id));
    return 0 === t.length ? null : (0, l.jsxs)("div", {
        className: z.J1,
        children: [(0, l.jsx)(o.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: Y.intl.string(Y.t.eDVMrA)
        }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: Y.intl.string(Y.t.BozOXu)
        }), (0, l.jsx)("div", {
            className: z.lA,
            children: t.map((e, t) => (0, l.jsx)(P.A, {
                connection: e,
                guildId: n.id,
                location: m.A.CHANNELS_AND_ROLES
            }, t))
        })]
    })
}

function el(e) {
    let {
        prompt: n,
        guild: t
    } = e, [s, c] = i.useState(null), [u, _] = i.useState(new Set), h = n?.options?.filter(e => u.has(e.id)), x = (0, M.a)(h), m = (0, M.vV)(h), g = (0, r.yK)([H.A], () => H.A.getOnboardingResponsesForPrompt(t.id, n.id)), {
        helpText: A,
        helpTextAdditional: C
    } = (0, B.W)({
        guild: t,
        prompt: n,
        selectedRoleIds: x,
        selectedChannelIds: m,
        itemHook: (e, n) => (0, l.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-strong",
            children: e
        }, n)
    }), {
        handleSelectOption: f
    } = (0, G.A)(t.id);
    return (0, l.jsxs)("div", {
        className: z.J1,
        "data-new": n.isNew,
        children: [n.isNew && (0, l.jsx)(o.LpS, {
            color: d.A.unsafe_rawColors.BRAND_260.css,
            text: Y.intl.string(Y.t.y2b7CA),
            className: z.Ad
        }), (0, l.jsxs)(o.Heading, {
            className: z.Hi,
            variant: "heading-md/semibold",
            color: "text-strong",
            children: [n.title, n.required ? (0, l.jsx)("span", {
                className: a()(z.mw, {
                    [z.So]: s?.type === $
                }),
                children: "*"
            }) : null]
        }), (0, l.jsx)("div", {
            className: z.vS,
            children: n.options.map(e => (0, l.jsx)(V.A, {
                hideMemberCount: !0,
                guildId: t.id,
                option: e,
                onSelect: t => {
                    !t && 1 === g.length && n.required ? c({
                        type: $
                    }) : (f(n, e, t ?? !1), n.singleSelect && t && n.options.forEach(e => u.delete(e.id)), t ? u.add(e.id) : u.delete(e.id), _(new Set(u)), c(null))
                },
                selected: g.includes(e.id),
                canBeNew: !n.isNew
            }, e.id))
        }), (0, l.jsxs)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: z.BK,
            children: [A, " ", C]
        })]
    })
}

function ei(e) {
    let {
        guildId: n,
        onBrowseChannels: t
    } = e, s = (0, c.Mw)((0, x.Ay)()), h = (0, r.bG)([S.A], () => S.A.getGuild(n)), m = (0, r.bG)([y.default], () => y.default.getCurrentUser()), g = (0, _.A)("(min-width: 1344px)") && null != m, A = i.useCallback(() => {
        (0, N.pX)(q.BVt.CHANNEL(n, K.VV.CHANNEL_BROWSER)), t?.()
    }, [n, t]), f = (0, r.bG)([w.Ay], () => w.Ay.hasUnread(n, Z.P.GUILD_ONBOARDING_QUESTION)), p = h?.latestOnboardingQuestionId, {
        onboardingPromptsRaw: j,
        newOnboardingPrompts: v,
        onboardingPromptsWithNewAnswers: b,
        newAnswersCount: I,
        onboardingPrompts: E
    } = (0, k.A)(n);
    i.useEffect(() => {
        h?.id == null || !C.A.isFullServerPreview(h.id) && (H.A.shouldFetchPrompts(h.id) || f) && (0, D.jx)(h.id)
    }, [h?.id, f, p]), i.useEffect(() => {
        if (h?.id != null && !C.A.isFullServerPreview(h.id)) return () => {
            (0, u.hK)(h.id, Z.P.GUILD_ONBOARDING_QUESTION, H.A.ackIdForGuild(h.id)), R.A.updateOnboardingResponses(h.id)
        }
    }, [h?.id]);
    let T = i.useCallback(e => {
        if (null == h) return null;
        switch (e.type) {
            case W.ME.MULTIPLE_CHOICE:
                return (0, l.jsx)(el, {
                    prompt: e,
                    guild: h
                }, e.id);
            case W.ME.DROPDOWN:
                return (0, l.jsx)(en, {
                    prompt: e,
                    guild: h
                }, e.id);
            default:
                (0, O.xb)(e.type)
        }
    }, [h]);
    if (null == h) return null;
    if (0 === j.length) {
        let e = s ? d.A.unsafe_rawColors.PRIMARY_300.css : d.A.unsafe_rawColors.PRIMARY_500.css,
            n = s ? d.A.unsafe_rawColors.PRIMARY_700.css : d.A.unsafe_rawColors.PRIMARY_230.css;
        return (0, l.jsx)("div", {
            className: a()(J.Qs, z.Zc),
            children: (0, l.jsxs)("div", {
                className: z.do,
                children: [(0, l.jsx)(U.A, {
                    className: z.Dw,
                    foregroundColor: e,
                    backgroundColor: n
                }), (0, l.jsx)(o.Heading, {
                    className: z.jU,
                    variant: "heading-md/semibold",
                    children: Y.intl.string(Y.t.leKHQz)
                }), (0, l.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    children: Y.intl.format(Y.t["jH+ktB"], {
                        onBrowseChannels: A
                    })
                })]
            })
        })
    }
    return (0, l.jsxs)(o.T7Y, {
        className: z.XG,
        fade: !0,
        children: [(0, l.jsxs)("div", {
            className: z.kw,
            children: [(v.length > 0 || b.length > 0) && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("div", {
                    children: (0, l.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: Y.intl.format(Y.t.iB5Gqe, {
                            count: v.length + I
                        })
                    })
                }), v.map(T), b.map(T), (0, l.jsx)("div", {
                    className: z.DY
                })]
            }), E.length > 0 && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsxs)("div", {
                    children: [(0, l.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: Y.intl.format(Y.t["8IV8K9"], {
                            count: E.length
                        })
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: Y.intl.string(Y.t.Ecz7T9)
                    })]
                }), E.map(T)]
            }), (0, l.jsx)(et, {
                guild: h
            })]
        }), g && (0, l.jsx)(ee, {
            guild: h,
            user: m
        })]
    })
}