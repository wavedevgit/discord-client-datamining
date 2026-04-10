/** chunk id: 605694 params = (module,exports,require) **/
n.d(t, {
    A: () => er
});
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(485584),
    c = n(598748),
    o = n(205338),
    u = n(179771),
    d = n(87075),
    m = n(311907),
    p = n(397927),
    g = n(155718),
    h = n(793574),
    T = n(688810),
    y = n(362490),
    x = n(369374),
    E = n(531913),
    f = n(385771),
    v = n(789069),
    I = n(429913),
    j = n(409626),
    A = n(692969),
    _ = n(207963),
    R = n(953756),
    C = n(647901),
    D = n(371068),
    N = n(61266),
    b = n(731068),
    P = n(619517),
    L = n(339580),
    O = n(961350),
    X = n(760751),
    G = n(403362),
    S = n(183555),
    W = n(622543),
    k = n(466853),
    w = n(985018),
    F = n(414675);

function M(e) {
    let {
        trackUserProfileAction: t
    } = (0, S.NJ)(), {
        user: n,
        widget: i,
        cta: s
    } = e, c = (0, m.bG)([O.default], () => O.default.getId()) === n.id, o = (0, I.h)(i.applicationId), d = o?.getIconURL(16), g = (0, m.bG)([X.A], () => null != o ? X.A.getGameByApplication(o) : null), x = (0, A.A)({
        location: "UserProfileApplicationWidget",
        applicationId: g?.id,
        source: j.Ob.UserProfile,
        sourceUserId: n.id,
        trackEntryPointImpression: !0
    }), {
        fetched: E,
        hasAlreadyLinked: f,
        canStartAuthorization: v,
        startAuthorization: _,
        token: R
    } = (0, y.RD)(o), {
        analyticsLocations: C
    } = (0, T.Ay)(h.A.USER_PROFILE_APPLICATION_WIDGET), D = a.useCallback(() => {
        v && (t({
            action: f ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT" : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
            applicationId: i.applicationId
        }), _({
            analyticsLocations: C
        }))
    }, [v, f, _, t, i.applicationId, C]), N = null == s && E && !f && v, b = null == s && E && f && v && null != R && !R.scopes.includes(u.F.APPLICATION_IDENTITIES_WRITE) && !R.scopes.includes(u.F.SDK_SOCIAL_LAYER) && !R.scopes.includes(u.F.SDK_SOCIAL_LAYER_PRESENCE), P = (0, l.jsxs)(l.Fragment, {
        children: [null != d ? (0, l.jsx)("img", {
            className: F.Z2,
            src: d,
            width: 16,
            height: 16,
            alt: ""
        }) : (0, l.jsx)("span", {
            className: F.qP
        }), (0, l.jsx)(p.Text, {
            variant: "text-sm/medium",
            children: o?.name != null ? o.name : (0, l.jsx)("div", {
                className: F.jC
            })
        })]
    }), L = null == g ? (0, l.jsx)("div", {
        className: F.qd,
        children: P
    }) : (0, l.jsx)(p.DUT, {
        className: r()(F.qd, F.vk),
        onClick: x,
        children: P
    });
    return {
        isCurrentUser: c,
        game: g,
        openGameProfileModal: x,
        handleConnect: D,
        showConnectCta: N,
        showReconnectCta: b,
        headerTitle: L
    }
}

function U(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: a,
        showConnectCta: i,
        showReconnectCta: s,
        handleConnect: c,
        cta: o,
        v2: u = !1
    } = e;
    return t ? (0, l.jsxs)("div", {
        className: r()(F.qr, u && F.v2),
        children: [n || a || i || s ? null : (0, l.jsxs)("div", {
            className: F.o8,
            children: [(0, l.jsx)(p.Qfk, {
                size: "xxs"
            }), (0, l.jsx)(p.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: w.intl.string(w.t.z5K4Uv)
            })]
        }), i ? (0, l.jsx)(H, {
            heading: w.intl.string(w.t.UDPRLO),
            content: w.intl.string(w.t["OW/2al"]),
            buttons: (0, l.jsx)(p.Button, {
                text: w.intl.string(w.t.S0W8Z5),
                onClick: c
            })
        }) : s ? (0, l.jsx)(H, {
            heading: w.intl.string(w.t["9WarGY"]),
            content: w.intl.string(w.t.qgxnKe),
            buttons: (0, l.jsx)(p.Button, {
                text: w.intl.string(w.t.vD60Pv),
                onClick: c
            })
        }) : o]
    }) : null
}

function H(e) {
    return (0, l.jsxs)(p.BJc, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: F.lO,
        children: [(0, l.jsxs)(p.BJc, {
            gap: 4,
            children: [e.showSuggestedForYou && (0, l.jsx)(p.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: w.intl.string(w.t.zMUr6Z)
            }), (0, l.jsx)(p.Heading, {
                variant: "heading-sm/medium",
                color: "text-default",
                children: e.heading
            }), (0, l.jsx)(p.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: e.content
            })]
        }), (0, l.jsx)(p.BJc, {
            direction: "horizontal",
            gap: 12,
            align: "center",
            justify: "end",
            fullWidth: !1,
            children: e.buttons
        })]
    })
}
let B = /{{(.*?)}}/g,
    Y = {
        [o.A.MARVEL_RIVALS]: [{
            type: "HERO",
            title: "{{username}}",
            image: "{{featured_played_character_image}}",
            body: [{
                type: "TEXT_WITH_IMAGE",
                content: "{{season}}: {{rank_name}}",
                image: "{{rank_image}}",
                imagePosition: "right"
            }, {
                type: "TEXT",
                content: "Top Hero: {{featured_played_character}}"
            }]
        }, {
            type: "SEPARATOR",
            divider: !1
        }, {
            type: "SEPARATOR",
            divider: !1
        }, {
            type: "GRID",
            children: [{
                type: "FIELD",
                value: {
                    type: "TEXT_WITH_IMAGE",
                    content: "**{{highest_rank}}**",
                    image: "{{highest_rank_image}}",
                    imagePosition: "right"
                },
                name: {
                    type: "TEXT",
                    content: "-# Highest Rank"
                }
            }, {
                type: "FIELD",
                value: {
                    type: "TEXT",
                    content: "**{{playtime_hours}} Hours**"
                },
                name: {
                    type: "TEXT",
                    content: "-# Time Played"
                }
            }, {
                type: "FIELD",
                value: {
                    type: "TEXT",
                    content: "**{{total_games}}**"
                },
                name: {
                    type: "TEXT",
                    content: "-# Matches Played"
                }
            }]
        }, {
            type: "SEPARATOR",
            divider: !1
        }, {
            type: "SEPARATOR",
            divider: !1
        }, {
            type: "GRID",
            children: [{
                type: "FIELD",
                value: {
                    type: "TEXT",
                    content: "**{{total_wins}}**"
                },
                name: {
                    type: "TEXT",
                    content: "-# Wins"
                }
            }, {
                type: "FIELD",
                value: {
                    type: "TEXT",
                    content: "**{{total_kills}}**"
                },
                name: {
                    type: "TEXT",
                    content: "-# KOs"
                }
            }, {
                type: "FIELD",
                value: {
                    type: "TEXT",
                    content: "**{{total_assists}}**"
                },
                name: {
                    type: "TEXT",
                    content: "-# Assists"
                }
            }]
        }],
        [o.A.WUTHERING_WAVES]: [{
            type: "HERO",
            title: "{{username}}",
            image: "{{featured_played_character_image}}",
            body: [{
                type: "TEXT",
                content: "Server: {{server_name}}"
            }]
        }, {
            type: "SEPARATOR",
            divider: !1
        }, {
            type: "SEPARATOR",
            divider: !1
        }, {
            type: "GRID",
            children: [{
                type: "FIELD",
                value: {
                    type: "TEXT",
                    content: "**{{union_level}}**"
                },
                name: {
                    type: "TEXT",
                    content: "-# Union Level"
                }
            }, {
                type: "FIELD",
                value: {
                    type: "TEXT",
                    content: "**{{total_resonators}}**"
                },
                name: {
                    type: "TEXT",
                    content: "-# Resonators"
                }
            }, {
                type: "FIELD",
                value: {
                    type: "TEXT",
                    content: "**{{total_achievements}}**"
                },
                name: {
                    type: "TEXT",
                    content: "-# Achievements"
                }
            }]
        }, {
            type: "SEPARATOR",
            divider: !1
        }, {
            type: "SEPARATOR",
            divider: !1
        }, {
            type: "GRID",
            children: [{
                type: "FIELD",
                value: {
                    type: "TEXT",
                    content: "**{{total_echoes}}**"
                },
                name: {
                    type: "TEXT",
                    content: "-# Echoes"
                }
            }, {
                type: "FIELD",
                value: {
                    type: "TEXT",
                    content: "**{{login_days}}**"
                },
                name: {
                    type: "TEXT",
                    content: "-# Login Days"
                }
            }, {
                type: "FIELD",
                value: {
                    type: "TEXT",
                    content: "**{{data_bank_level}}**"
                },
                name: {
                    type: "TEXT",
                    content: "-# Data Bank Level"
                }
            }]
        }]
    };

function z(e) {
    let {
        component: t
    } = e;
    if (Array.isArray(t)) return q(t);
    switch (t.type) {
        case "HERO":
            let {
                body: n, ...a
            } = t;
            return (0, l.jsx)(V, {
                ...a,
                body: q(n)
            });
        case "GRID":
            return (0, l.jsx)(J, {
                children: q(t.children)
            });
        case "FIELD":
            return (0, l.jsx)(Q, {
                value: K(t.value),
                name: K(t.name)
            });
        case "TEXT":
            return (0, l.jsx)(Z, {
                ...t
            });
        case "TEXT_WITH_IMAGE":
            return (0, l.jsx)($, {
                ...t
            });
        case "SEPARATOR":
            return (0, l.jsx)(ee, {
                ...t
            })
    }
}

function K(e, t) {
    return (0, l.jsx)(z, {
        component: e
    }, t)
}

function q(e) {
    return e.map((e, t) => K(e, t))
}

function V(e) {
    let {
        title: t,
        body: n,
        image: a,
        imagePlaceholder: i
    } = e;
    return (0, l.jsxs)("div", {
        className: F.mY,
        children: [(0, l.jsxs)("div", {
            className: F.TL,
            children: [(0, l.jsx)(p.Text, {
                variant: "text-lg/medium",
                className: F.ZY,
                children: null != t ? t : (0, l.jsx)("div", {
                    className: F.jC
                })
            }), (0, l.jsx)(C.x, {
                color: "muted",
                children: n
            })]
        }), (0, v.c)(a) ? (0, l.jsx)("div", {
            className: F.Xr,
            children: (0, l.jsx)(P.Ay, {
                src: a.proxyUrl,
                alt: "",
                width: a.width,
                height: a.height,
                responsive: !0,
                className: F.c8
            })
        }) : null != i ? (0, l.jsx)("div", {
            className: F.Xr,
            children: (0, l.jsx)("img", {
                src: i,
                alt: "",
                className: F.c8
            })
        }) : (0, l.jsx)("div", {
            className: F.Hi
        })]
    })
}

function J(e) {
    let {
        children: t
    } = e;
    return (0, l.jsx)("div", {
        className: F.Vg,
        children: t
    })
}

function Q(e) {
    let {
        name: t,
        value: n
    } = e;
    return (0, l.jsxs)("div", {
        children: [n, t]
    })
}

function Z(e) {
    let {
        content: t
    } = e, n = a.useId(), i = (0, C.X)();
    return null != t ? (0, l.jsx)(N.A, {
        type: g.I5.TEXT_DISPLAY,
        id: n,
        content: t,
        className: F.Qq
    }) : (0, l.jsx)("div", {
        className: r()(F.jC, i.className)
    })
}

function $(e) {
    let {
        content: t,
        image: n,
        imagePosition: a
    } = e, i = (0, C.X)(), s = (0, v.c)(n) ? (0, l.jsx)("div", {
        className: r()(F.Sl, i.className),
        "data-position": a,
        children: (0, l.jsx)(P.Ay, {
            src: n.proxyUrl,
            alt: "",
            width: n.width,
            height: n.height,
            responsive: !0
        })
    }) : null == t ? (0, l.jsx)("div", {
        className: r()(F.bc, i.className)
    }) : null;
    return (0, l.jsxs)("div", {
        className: F.rQ,
        children: [null != s && "left" === a ? (0, l.jsxs)(l.Fragment, {
            children: [s, " "]
        }) : null, (0, l.jsx)(Z, {
            content: t
        }), null != s && "right" === a ? (0, l.jsxs)(l.Fragment, {
            children: [" ", s]
        }) : null]
    })
}

function ee(e) {
    let {
        size: t = "small",
        divider: n = !1
    } = e, i = a.useId();
    return (0, l.jsx)(D.A, {
        type: g.I5.SEPARATOR,
        id: i,
        divider: n,
        spacing: "large" === t ? g.C8.LARGE : g.C8.SMALL
    })
}

function et(e, t) {
    if (null == e) return null;
    let n = e.split(B);
    if (1 === n.length) return n[0];
    if ("skeleton" === t.mode) return null;
    let l = "";
    for (let e = 0; e < n.length; e++) {
        let a = n[e];
        if (e % 2 == 0) {
            l += a;
            continue
        }
        let i = t.variables[a];
        null == i ? l += "––" : "unfurled_media" === i.type ? l += i.media.url : "number" === i.type ? l += t.numberFormat.format(i.value) : "string" === i.type && (l += i.value)
    }
    return l
}

function en(e, t) {
    if (null == e || "skeleton" === t.mode) return null;
    let n = e.match(B)?.[0]?.slice(2, -2);
    if (null == n) return null;
    let l = t.variables[n];
    return null == l || "unfurled_media" !== l.type ? null : l.media
}

function el(e) {
    let {
        children: t,
        widget: n
    } = e;
    return (0, l.jsx)(R.O7.Root, {
        containerInnerWidth: 396,
        children: (0, l.jsx)(_.f5, {
            applicationWidget: n,
            children: (0, l.jsx)(C.x, {
                size: "reduced",
                weight: "reduced",
                children: (0, l.jsx)("div", {
                    className: F.kL,
                    children: t
                })
            })
        })
    })
}

function ea(e) {
    var t, n;
    let i, s, c, o, u, {
            user: g,
            widget: h,
            cta: T,
            subtle: y = !1,
            embedded: x = !1
        } = e,
        E = M(e),
        {
            isLoading: v,
            hasData: I,
            components: j
        } = (t = g.id, n = h.applicationId, i = (0, f.A)(), s = (0, m.bG)([L.A], () => L.A.getUserIdentityByApplication(t, n)), c = (0, m.bG)([W.A], () => W.A.getApplicationWidgetConfig(n)), o = (0, m.bG)([L.A, W.A], () => null == L.A.getUserIdentities(t) || null == W.A.applicationWidgetConfigs), u = a.useMemo(() => {
            var e, t;
            if (null == c) return null;
            let n = Y[c.widgetTemplateId];
            if (null == n) return null;
            let l = (e = s ?? null, t = c ?? null, null == e ? {
                mode: "skeleton",
                config: t,
                numberFormat: i
            } : {
                mode: "from_data",
                variables: Object.fromEntries([...e.profile?.data?.dynamic?.map(e => e.type === d.f.STRING ? [e.name, {
                    type: "string",
                    value: e.value
                }] : e.type === d.f.NUMBER ? [e.name, {
                    type: "number",
                    value: e.value
                }] : e.type === d.f.MEDIA ? [e.name, {
                    type: "unfurled_media",
                    media: (0, b.Uv)(e.value)
                }] : (0, G.xb)(e)) ?? [], ...Object.entries({
                    username: e.profile?.username,
                    ...e.profile?.data?.primary
                }).filter(G.QE).map(e => {
                    let [t, n] = e;
                    if ("object" == typeof n) {
                        if ("url" in n && "proxy_url" in n && "loading_state" in n) return [t, {
                            type: "unfurled_media",
                            media: (0, b.Uv)(n)
                        }]
                    } else if ("string" == typeof n) return [t, {
                        type: "string",
                        value: n
                    }];
                    else if ("number" == typeof n) return [t, {
                        type: "number",
                        value: n
                    }];
                    return null
                }).filter(G.Vq)]),
                config: t,
                numberFormat: i
            });
            return n.map(function e(t) {
                switch (t.type) {
                    case "HERO":
                        return {
                            type: "HERO", body: t.body.map(e), title: et(t.title, l), image: en(t.image, l), imagePlaceholder: l.config?.heroPlaceholderImage
                        };
                    case "GRID":
                        return {
                            type: "GRID", children: t.children.map(e)
                        };
                    case "FIELD":
                        return {
                            type: "FIELD", name: e(t.name), value: e(t.value)
                        };
                    case "TEXT":
                        return {
                            type: "TEXT", content: et(t.content, l)
                        };
                    case "TEXT_WITH_IMAGE":
                        return {
                            type: "TEXT_WITH_IMAGE", content: et(t.content, l), image: en(t.image, l), imagePosition: t.imagePosition
                        };
                    case "SEPARATOR":
                        return t
                }
            })
        }, [c, s, i]), {
            isLoading: o,
            hasData: null != s,
            components: u
        });
    return null == j ? null : (0, l.jsxs)(k.A, {
        ...e,
        userId: g.id,
        widget: h,
        className: r()(F.Y5, {
            [F.aK]: y,
            [F.F9]: x
        }),
        headerTitle: E.headerTitle,
        headerClassName: F.wx,
        additionalManageWidgetMenuItems: null != E.game ? (0, l.jsx)(p.Drp, {
            id: "view-game-profile",
            label: "View Game Profile",
            icon: p._xR,
            action: E.openGameProfileModal
        }) : null,
        children: [(0, l.jsx)(el, {
            widget: h,
            children: (0, l.jsx)(z, {
                component: j
            })
        }), (0, l.jsx)(U, {
            isCurrentUser: E.isCurrentUser,
            isLoading: v,
            hasData: I,
            showConnectCta: E.showConnectCta,
            showReconnectCta: E.showReconnectCta,
            handleConnect: E.handleConnect,
            cta: T
        })]
    })
}

function ei(e) {
    let {
        user: t,
        widget: n,
        cta: a,
        subtle: i = !1,
        embedded: o = !1
    } = e, u = M(e), d = (0, E.A)(t.id, n.applicationId), m = d.surfaceConfigs[c.m.WIDGET_TOP], g = d.surfaceConfigs[c.m.WIDGET_BOTTOM];
    return null == m || null == g ? null : (0, l.jsxs)(k.A, {
        ...e,
        userId: t.id,
        widget: n,
        className: r()(F.Y5, F.v2, {
            [F.aK]: i,
            [F.F9]: o
        }),
        headerClassName: F.vX,
        additionalManageWidgetMenuItems: null != u.game ? (0, l.jsx)(p.Drp, {
            id: "view-game-profile",
            label: "View Game Profile",
            icon: p._xR,
            action: u.openGameProfileModal
        }) : null,
        children: [(0, l.jsx)(s.kH, {
            ...d,
            surface: c.m.WIDGET_TOP,
            surfaceConfig: m,
            header: u.headerTitle
        }), (0, l.jsx)(p.cGx, {}), (0, l.jsx)(s.kH, {
            ...d,
            surface: c.m.WIDGET_BOTTOM,
            surfaceConfig: g
        }), (0, l.jsx)(U, {
            isCurrentUser: u.isCurrentUser,
            isLoading: d.isLoading,
            hasData: d.hasIdentity,
            showConnectCta: u.showConnectCta,
            showReconnectCta: u.showReconnectCta,
            handleConnect: u.handleConnect,
            cta: a,
            v2: !0
        })]
    })
}
let er = Object.assign(function(e) {
    let {
        enabled: t
    } = x.A.useConfig({
        location: "UserProfileApplicationWidget"
    });
    return t ? (0, l.jsx)(ei, {
        ...e
    }) : (0, l.jsx)(ea, {
        ...e
    })
}, {
    Cta: H
})