/** chunk id: 605694 params = (module,exports,require) **/
n.d(t, {
    A: () => es
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(485584),
    o = n(598748),
    c = n(205338),
    d = n(179771),
    u = n(87075),
    m = n(311907),
    g = n(397927),
    f = n(155718),
    x = n(793574),
    p = n(688810),
    _ = n(362490),
    I = n(369374),
    h = n(531913),
    A = n(385771),
    E = n(789069),
    T = n(429913),
    v = n(409626),
    j = n(692969),
    C = n(207963),
    N = n(953756),
    y = n(647901),
    b = n(371068),
    R = n(61266),
    O = n(731068),
    S = n(619517),
    k = n(339580),
    D = n(961350),
    P = n(760751),
    L = n(403362),
    G = n(183555),
    w = n(622543),
    U = n(466853),
    M = n(985018),
    F = n(484046);

function W(e) {
    let {
        trackUserProfileAction: t
    } = (0, G.NJ)(), {
        user: n,
        widget: a,
        cta: r
    } = e, o = (0, m.bG)([D.default], () => D.default.getId()) === n.id, c = (0, T.h)(a.applicationId), u = c?.getIconURL(16), f = (0, m.bG)([P.A], () => null != c ? P.A.getGameByApplication(c) : null), I = (0, j.A)({
        location: "UserProfileApplicationWidget",
        applicationId: f?.id,
        source: v.Ob.UserProfile,
        sourceUserId: n.id,
        trackEntryPointImpression: !0
    }), {
        fetched: h,
        hasAlreadyLinked: A,
        canStartAuthorization: E,
        startAuthorization: C,
        token: N
    } = (0, _.RD)(c), {
        analyticsLocations: y
    } = (0, p.Ay)(x.A.USER_PROFILE_APPLICATION_WIDGET), b = l.useCallback(() => {
        E && (t({
            action: A ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT" : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
            applicationId: a.applicationId
        }), C({
            analyticsLocations: y
        }))
    }, [E, A, C, t, a.applicationId, y]), R = null == r && h && !A && E, O = null == r && h && A && E && null != N && !N.scopes.includes(d.F.APPLICATION_IDENTITIES_WRITE) && !N.scopes.includes(d.F.SDK_SOCIAL_LAYER) && !N.scopes.includes(d.F.SDK_SOCIAL_LAYER_PRESENCE), S = (0, i.jsxs)(i.Fragment, {
        children: [null != u ? (0, i.jsx)("img", {
            className: F.Z2,
            src: u,
            width: 16,
            height: 16,
            alt: ""
        }) : (0, i.jsx)("span", {
            className: F.qP
        }), (0, i.jsx)(g.Text, {
            variant: "text-sm/medium",
            children: c?.name != null ? c.name : (0, i.jsx)("div", {
                className: F.jC
            })
        })]
    }), k = null == f ? (0, i.jsx)("div", {
        className: F.qd,
        children: S
    }) : (0, i.jsx)(g.DUT, {
        className: s()(F.qd, F.vk),
        onClick: I,
        children: S
    });
    return {
        isCurrentUser: o,
        game: f,
        openGameProfileModal: I,
        handleConnect: b,
        showConnectCta: R,
        showReconnectCta: O,
        headerTitle: k
    }
}

function H(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: l,
        showConnectCta: a,
        showReconnectCta: r,
        handleConnect: o,
        cta: c,
        v2: d = !1
    } = e;
    return t ? (0, i.jsxs)("div", {
        className: s()(F.qr, d && F.v2),
        children: [n || l || a || r ? null : (0, i.jsxs)("div", {
            className: F.o8,
            children: [(0, i.jsx)(g.Qfk, {
                size: "xxs"
            }), (0, i.jsx)(g.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: M.intl.string(M.t.z5K4Uv)
            })]
        }), a ? (0, i.jsx)(X, {
            heading: M.intl.string(M.t.UDPRLO),
            content: M.intl.string(M.t["OW/2al"]),
            buttons: (0, i.jsx)(g.Button, {
                text: M.intl.string(M.t.S0W8Z5),
                onClick: o
            })
        }) : r ? (0, i.jsx)(X, {
            heading: M.intl.string(M.t["9WarGY"]),
            content: M.intl.string(M.t.qgxnKe),
            buttons: (0, i.jsx)(g.Button, {
                text: M.intl.string(M.t.vD60Pv),
                onClick: o
            })
        }) : c]
    }) : null
}

function X(e) {
    return (0, i.jsxs)(g.BJc, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: F.lO,
        children: [(0, i.jsxs)(g.BJc, {
            gap: 4,
            children: [e.showSuggestedForYou && (0, i.jsx)(g.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: M.intl.string(M.t.zMUr6Z)
            }), (0, i.jsx)(g.Heading, {
                variant: "heading-sm/medium",
                color: "text-default",
                children: e.heading
            }), (0, i.jsx)(g.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: e.content
            })]
        }), (0, i.jsx)(g.BJc, {
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
    V = {
        [c.A.MARVEL_RIVALS]: [{
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
        [c.A.WUTHERING_WAVES]: [{
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

function K(e) {
    let {
        component: t
    } = e;
    if (Array.isArray(t)) return z(t);
    switch (t.type) {
        case "HERO":
            let {
                body: n, ...l
            } = t;
            return (0, i.jsx)(q, {
                ...l,
                body: z(n)
            });
        case "GRID":
            return (0, i.jsx)(J, {
                children: z(t.children)
            });
        case "FIELD":
            return (0, i.jsx)(Q, {
                value: Y(t.value),
                name: Y(t.name)
            });
        case "TEXT":
            return (0, i.jsx)(Z, {
                ...t
            });
        case "TEXT_WITH_IMAGE":
            return (0, i.jsx)($, {
                ...t
            });
        case "SEPARATOR":
            return (0, i.jsx)(ee, {
                ...t
            })
    }
}

function Y(e, t) {
    return (0, i.jsx)(K, {
        component: e
    }, t)
}

function z(e) {
    return e.map((e, t) => Y(e, t))
}

function q(e) {
    let {
        title: t,
        body: n,
        image: l,
        imagePlaceholder: a
    } = e;
    return (0, i.jsxs)("div", {
        className: F.mY,
        children: [(0, i.jsxs)("div", {
            className: F.TL,
            children: [(0, i.jsx)(g.Text, {
                variant: "text-lg/medium",
                className: F.ZY,
                children: null != t ? t : (0, i.jsx)("div", {
                    className: F.jC
                })
            }), (0, i.jsx)(y.x, {
                color: "muted",
                children: n
            })]
        }), (0, E.c)(l) ? (0, i.jsx)("div", {
            className: F.Xr,
            children: (0, i.jsx)(S.Ay, {
                src: l.proxyUrl,
                alt: "",
                width: l.width,
                height: l.height,
                responsive: !0,
                className: F.c8
            })
        }) : null != a ? (0, i.jsx)("div", {
            className: F.Xr,
            children: (0, i.jsx)("img", {
                src: a,
                alt: "",
                className: F.c8
            })
        }) : (0, i.jsx)("div", {
            className: F.Hi
        })]
    })
}

function J(e) {
    let {
        children: t
    } = e;
    return (0, i.jsx)("div", {
        className: F.Vg,
        children: t
    })
}

function Q(e) {
    let {
        name: t,
        value: n
    } = e;
    return (0, i.jsxs)("div", {
        children: [n, t]
    })
}

function Z(e) {
    let {
        content: t
    } = e, n = l.useId(), a = (0, y.X)();
    return null != t ? (0, i.jsx)(R.A, {
        type: f.I5.TEXT_DISPLAY,
        id: n,
        content: t,
        className: F.Qq
    }) : (0, i.jsx)("div", {
        className: s()(F.jC, a.className)
    })
}

function $(e) {
    let {
        content: t,
        image: n,
        imagePosition: l
    } = e, a = (0, y.X)(), r = (0, E.c)(n) ? (0, i.jsx)("div", {
        className: s()(F.Sl, a.className),
        "data-position": l,
        children: (0, i.jsx)(S.Ay, {
            src: n.proxyUrl,
            alt: "",
            width: n.width,
            height: n.height,
            responsive: !0
        })
    }) : null == t ? (0, i.jsx)("div", {
        className: s()(F.bc, a.className)
    }) : null;
    return (0, i.jsxs)("div", {
        className: F.rQ,
        children: [null != r && "left" === l ? (0, i.jsxs)(i.Fragment, {
            children: [r, " "]
        }) : null, (0, i.jsx)(Z, {
            content: t
        }), null != r && "right" === l ? (0, i.jsxs)(i.Fragment, {
            children: [" ", r]
        }) : null]
    })
}

function ee(e) {
    let {
        size: t = "small",
        divider: n = !1
    } = e, a = l.useId();
    return (0, i.jsx)(b.A, {
        type: f.I5.SEPARATOR,
        id: a,
        divider: n,
        spacing: "large" === t ? f.C8.LARGE : f.C8.SMALL
    })
}

function et(e, t) {
    if (null == e) return null;
    let n = e.split(B);
    if (1 === n.length) return n[0];
    if ("skeleton" === t.mode) return null;
    let i = "";
    for (let e = 0; e < n.length; e++) {
        let l = n[e];
        if (e % 2 == 0) {
            i += l;
            continue
        }
        let a = t.variables[l];
        null == a ? i += "––" : "unfurled_media" === a.type ? i += a.media.url : "number" === a.type ? i += t.numberFormat.format(a.value) : "string" === a.type && (i += a.value)
    }
    return i
}

function en(e, t) {
    if (null == e || "skeleton" === t.mode) return null;
    let n = e.match(B)?.[0]?.slice(2, -2);
    if (null == n) return null;
    let i = t.variables[n];
    return null == i || "unfurled_media" !== i.type ? null : i.media
}

function ei(e) {
    let {
        children: t,
        widget: n
    } = e;
    return (0, i.jsx)(N.O7.Root, {
        containerInnerWidth: 396,
        children: (0, i.jsx)(C.f5, {
            applicationWidget: n,
            children: (0, i.jsx)(y.x, {
                size: "reduced",
                weight: "reduced",
                children: (0, i.jsx)("div", {
                    className: F.kL,
                    children: t
                })
            })
        })
    })
}

function el(e) {
    var t, n;
    let a, r, o, c, d, {
            user: f,
            widget: x,
            cta: p,
            subtle: _ = !1,
            embedded: I = !1
        } = e,
        h = W(e),
        {
            isLoading: E,
            hasData: T,
            components: v
        } = (t = f.id, n = x.applicationId, a = (0, A.A)(), r = (0, m.bG)([k.A], () => k.A.getUserIdentityByApplication(t, n)), o = (0, m.bG)([w.A], () => w.A.getApplicationWidgetConfig(n)), c = (0, m.bG)([k.A, w.A], () => null == k.A.getUserIdentities(t) || null == w.A.applicationWidgetConfigs), d = l.useMemo(() => {
            var e, t;
            if (null == o) return null;
            let n = V[o.widgetTemplateId];
            if (null == n) return null;
            let i = (e = r ?? null, t = o ?? null, null == e ? {
                mode: "skeleton",
                config: t,
                numberFormat: a
            } : {
                mode: "from_data",
                variables: Object.fromEntries([...e.profile?.data?.dynamic?.map(e => e.type === u.f.STRING ? [e.name, {
                    type: "string",
                    value: e.value
                }] : e.type === u.f.NUMBER ? [e.name, {
                    type: "number",
                    value: e.value
                }] : e.type === u.f.MEDIA ? [e.name, {
                    type: "unfurled_media",
                    media: (0, O.Uv)(e.value)
                }] : (0, L.xb)(e)) ?? [], ...Object.entries({
                    username: e.profile?.username,
                    ...e.profile?.data?.primary
                }).filter(L.QE).map(e => {
                    let [t, n] = e;
                    if ("object" == typeof n) {
                        if ("url" in n && "proxy_url" in n && "loading_state" in n) return [t, {
                            type: "unfurled_media",
                            media: (0, O.Uv)(n)
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
                }).filter(L.Vq)]),
                config: t,
                numberFormat: a
            });
            return n.map(function e(t) {
                switch (t.type) {
                    case "HERO":
                        return {
                            type: "HERO", body: t.body.map(e), title: et(t.title, i), image: en(t.image, i), imagePlaceholder: i.config?.heroPlaceholderImage
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
                            type: "TEXT", content: et(t.content, i)
                        };
                    case "TEXT_WITH_IMAGE":
                        return {
                            type: "TEXT_WITH_IMAGE", content: et(t.content, i), image: en(t.image, i), imagePosition: t.imagePosition
                        };
                    case "SEPARATOR":
                        return t
                }
            })
        }, [o, r, a]), {
            isLoading: c,
            hasData: null != r,
            components: d
        });
    return null == v ? null : (0, i.jsxs)(U.A, {
        ...e,
        userId: f.id,
        widget: x,
        className: s()(F.Y5, {
            [F.aK]: _,
            [F.F9]: I
        }),
        headerTitle: h.headerTitle,
        headerClassName: F.wx,
        additionalManageWidgetMenuItems: null != h.game ? (0, i.jsx)(g.Drp, {
            id: "view-game-profile",
            label: "View Game Profile",
            icon: g._xR,
            action: h.openGameProfileModal
        }) : null,
        children: [(0, i.jsx)(ei, {
            widget: x,
            children: (0, i.jsx)(K, {
                component: v
            })
        }), (0, i.jsx)(H, {
            isCurrentUser: h.isCurrentUser,
            isLoading: E,
            hasData: T,
            showConnectCta: h.showConnectCta,
            showReconnectCta: h.showReconnectCta,
            handleConnect: h.handleConnect,
            cta: p
        })]
    })
}

function ea(e) {
    let {
        user: t,
        widget: n,
        cta: l,
        subtle: a = !1,
        embedded: c = !1
    } = e, d = W(e), u = (0, h.A)(t.id, n.applicationId), m = u.surfaceConfigs[o.m.WIDGET_TOP], f = u.surfaceConfigs[o.m.WIDGET_BOTTOM];
    return null == m || null == f ? null : (0, i.jsxs)(U.A, {
        ...e,
        userId: t.id,
        widget: n,
        className: s()(F.Y5, F.v2, {
            [F.aK]: a,
            [F.F9]: c
        }),
        headerClassName: F.vX,
        additionalManageWidgetMenuItems: null != d.game ? (0, i.jsx)(g.Drp, {
            id: "view-game-profile",
            label: "View Game Profile",
            icon: g._xR,
            action: d.openGameProfileModal
        }) : null,
        children: [(0, i.jsx)(r.kH, {
            ...u,
            surface: o.m.WIDGET_TOP,
            surfaceConfig: m,
            header: d.headerTitle
        }), (0, i.jsx)(g.cGx, {}), (0, i.jsx)(r.kH, {
            ...u,
            surface: o.m.WIDGET_BOTTOM,
            surfaceConfig: f
        }), (0, i.jsx)(H, {
            isCurrentUser: d.isCurrentUser,
            isLoading: u.isLoading,
            hasData: u.hasIdentity,
            showConnectCta: d.showConnectCta,
            showReconnectCta: d.showReconnectCta,
            handleConnect: d.handleConnect,
            cta: l,
            v2: !0
        })]
    })
}
let es = Object.assign(function(e) {
    let {
        enabled: t
    } = I.A.useConfig({
        location: "UserProfileApplicationWidget"
    });
    return t ? (0, i.jsx)(ea, {
        ...e
    }) : (0, i.jsx)(el, {
        ...e
    })
}, {
    Cta: X
})