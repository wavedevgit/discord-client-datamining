/** chunk id: 605694 params = (module,exports,require) **/
n.d(t, {
    A: () => er
});
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(485584),
    o = n(598748),
    c = n(205338),
    d = n(179771),
    u = n(87075),
    m = n(311907),
    h = n(397927),
    p = n(155718),
    g = n(793574),
    x = n(688810),
    f = n(362490),
    y = n(369374),
    v = n(531913),
    j = n(385771),
    T = n(789069),
    E = n(429913),
    A = n(409626),
    I = n(692969),
    N = n(207963),
    R = n(953756),
    _ = n(647901),
    C = n(371068),
    b = n(61266),
    w = n(731068),
    P = n(619517),
    D = n(339580),
    L = n(961350),
    O = n(760751),
    G = n(403362),
    W = n(183555),
    S = n(622543),
    X = n(466853),
    k = n(985018),
    F = n(484046);

function M(e) {
    let {
        trackUserProfileAction: t
    } = (0, W.NJ)(), {
        user: n,
        widget: a,
        cta: s
    } = e, o = (0, m.bG)([L.default], () => L.default.getId()) === n.id, c = (0, E.h)(a.applicationId), u = c?.getIconURL(16), p = (0, m.bG)([O.A], () => null != c ? O.A.getGameByApplication(c) : null), y = (0, I.A)({
        location: "UserProfileApplicationWidget",
        applicationId: p?.id,
        source: A.Ob.UserProfile,
        sourceUserId: n.id,
        trackEntryPointImpression: !0
    }), {
        fetched: v,
        hasAlreadyLinked: j,
        canStartAuthorization: T,
        startAuthorization: N,
        token: R
    } = (0, f.RD)(c), {
        analyticsLocations: _
    } = (0, x.Ay)(g.A.USER_PROFILE_APPLICATION_WIDGET), C = i.useCallback(() => {
        T && (t({
            action: j ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT" : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
            applicationId: a.applicationId
        }), N({
            analyticsLocations: _
        }))
    }, [T, j, N, t, a.applicationId, _]), b = null == s && v && !j && T, w = null == s && v && j && T && null != R && !R.scopes.includes(d.F.APPLICATION_IDENTITIES_WRITE) && !R.scopes.includes(d.F.SDK_SOCIAL_LAYER) && !R.scopes.includes(d.F.SDK_SOCIAL_LAYER_PRESENCE), P = (0, l.jsxs)(l.Fragment, {
        children: [null != u ? (0, l.jsx)("img", {
            className: F.Z2,
            src: u,
            width: 16,
            height: 16,
            alt: ""
        }) : (0, l.jsx)("span", {
            className: F.qP
        }), (0, l.jsx)(h.Text, {
            variant: "text-sm/medium",
            children: c?.name != null ? c.name : (0, l.jsx)("div", {
                className: F.jC
            })
        })]
    }), D = null == p ? (0, l.jsx)("div", {
        className: F.qd,
        children: P
    }) : (0, l.jsx)(h.DUT, {
        className: r()(F.qd, F.vk),
        onClick: y,
        children: P
    });
    return {
        isCurrentUser: o,
        game: p,
        openGameProfileModal: y,
        handleConnect: C,
        showConnectCta: b,
        showReconnectCta: w,
        headerTitle: D
    }
}

function U(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: i,
        showConnectCta: a,
        showReconnectCta: s,
        handleConnect: o,
        cta: c,
        v2: d = !1
    } = e;
    return t ? (0, l.jsxs)("div", {
        className: r()(F.qr, d && F.v2),
        children: [n || i || a || s ? null : (0, l.jsxs)("div", {
            className: F.o8,
            children: [(0, l.jsx)(h.Qfk, {
                size: "xxs"
            }), (0, l.jsx)(h.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: k.intl.string(k.t.z5K4Uv)
            })]
        }), a ? (0, l.jsx)(H, {
            heading: k.intl.string(k.t.UDPRLO),
            content: k.intl.string(k.t["OW/2al"]),
            buttons: (0, l.jsx)(h.Button, {
                text: k.intl.string(k.t.S0W8Z5),
                onClick: o
            })
        }) : s ? (0, l.jsx)(H, {
            heading: k.intl.string(k.t["9WarGY"]),
            content: k.intl.string(k.t.qgxnKe),
            buttons: (0, l.jsx)(h.Button, {
                text: k.intl.string(k.t.vD60Pv),
                onClick: o
            })
        }) : c]
    }) : null
}

function H(e) {
    return (0, l.jsxs)(h.BJc, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: F.lO,
        children: [(0, l.jsxs)(h.BJc, {
            gap: 4,
            children: [e.showSuggestedForYou && (0, l.jsx)(h.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: k.intl.string(k.t.zMUr6Z)
            }), (0, l.jsx)(h.Heading, {
                variant: "heading-sm/medium",
                color: "text-default",
                children: e.heading
            }), (0, l.jsx)(h.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: e.content
            })]
        }), (0, l.jsx)(h.BJc, {
            direction: "horizontal",
            gap: 12,
            align: "center",
            justify: "end",
            fullWidth: !1,
            children: e.buttons
        })]
    })
}
let z = /{{(.*?)}}/g,
    K = {
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

function B(e) {
    let {
        component: t
    } = e;
    if (Array.isArray(t)) return Y(t);
    switch (t.type) {
        case "HERO":
            let {
                body: n, ...i
            } = t;
            return (0, l.jsx)(q, {
                ...i,
                body: Y(n)
            });
        case "GRID":
            return (0, l.jsx)(J, {
                children: Y(t.children)
            });
        case "FIELD":
            return (0, l.jsx)(Z, {
                value: V(t.value),
                name: V(t.name)
            });
        case "TEXT":
            return (0, l.jsx)(Q, {
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

function V(e, t) {
    return (0, l.jsx)(B, {
        component: e
    }, t)
}

function Y(e) {
    return e.map((e, t) => V(e, t))
}

function q(e) {
    let {
        title: t,
        body: n,
        image: i,
        imagePlaceholder: a
    } = e;
    return (0, l.jsxs)("div", {
        className: F.mY,
        children: [(0, l.jsxs)("div", {
            className: F.TL,
            children: [(0, l.jsx)(h.Text, {
                variant: "text-lg/medium",
                className: F.ZY,
                children: null != t ? t : (0, l.jsx)("div", {
                    className: F.jC
                })
            }), (0, l.jsx)(_.x, {
                color: "muted",
                children: n
            })]
        }), (0, T.c)(i) ? (0, l.jsx)("div", {
            className: F.Xr,
            children: (0, l.jsx)(P.Ay, {
                src: i.proxyUrl,
                alt: "",
                width: i.width,
                height: i.height,
                responsive: !0,
                className: F.c8
            })
        }) : null != a ? (0, l.jsx)("div", {
            className: F.Xr,
            children: (0, l.jsx)("img", {
                src: a,
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

function Z(e) {
    let {
        name: t,
        value: n
    } = e;
    return (0, l.jsxs)("div", {
        children: [n, t]
    })
}

function Q(e) {
    let {
        content: t
    } = e, n = i.useId(), a = (0, _.X)();
    return null != t ? (0, l.jsx)(b.A, {
        type: p.I5.TEXT_DISPLAY,
        id: n,
        content: t,
        className: F.Qq
    }) : (0, l.jsx)("div", {
        className: r()(F.jC, a.className)
    })
}

function $(e) {
    let {
        content: t,
        image: n,
        imagePosition: i
    } = e, a = (0, _.X)(), s = (0, T.c)(n) ? (0, l.jsx)("div", {
        className: r()(F.Sl, a.className),
        "data-position": i,
        children: (0, l.jsx)(P.Ay, {
            src: n.proxyUrl,
            alt: "",
            width: n.width,
            height: n.height,
            responsive: !0
        })
    }) : null == t ? (0, l.jsx)("div", {
        className: r()(F.bc, a.className)
    }) : null;
    return (0, l.jsxs)("div", {
        className: F.rQ,
        children: [null != s && "left" === i ? (0, l.jsxs)(l.Fragment, {
            children: [s, " "]
        }) : null, (0, l.jsx)(Q, {
            content: t
        }), null != s && "right" === i ? (0, l.jsxs)(l.Fragment, {
            children: [" ", s]
        }) : null]
    })
}

function ee(e) {
    let {
        size: t = "small",
        divider: n = !1
    } = e, a = i.useId();
    return (0, l.jsx)(C.A, {
        type: p.I5.SEPARATOR,
        id: a,
        divider: n,
        spacing: "large" === t ? p.C8.LARGE : p.C8.SMALL
    })
}

function et(e, t) {
    if (null == e) return null;
    let n = e.split(z);
    if (1 === n.length) return n[0];
    if ("skeleton" === t.mode) return null;
    let l = "";
    for (let e = 0; e < n.length; e++) {
        let i = n[e];
        if (e % 2 == 0) {
            l += i;
            continue
        }
        let a = t.variables[i];
        null == a ? l += "––" : "unfurled_media" === a.type ? l += a.media.url : "number" === a.type ? l += t.numberFormat.format(a.value) : "string" === a.type && (l += a.value)
    }
    return l
}

function en(e, t) {
    if (null == e || "skeleton" === t.mode) return null;
    let n = e.match(z)?.[0]?.slice(2, -2);
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
        children: (0, l.jsx)(N.f5, {
            applicationWidget: n,
            children: (0, l.jsx)(_.x, {
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

function ei(e) {
    var t, n;
    let a, s, o, c, d, {
            user: p,
            widget: g,
            cta: x,
            subtle: f = !1,
            embedded: y = !1
        } = e,
        v = M(e),
        {
            isLoading: T,
            hasData: E,
            components: A
        } = (t = p.id, n = g.applicationId, a = (0, j.A)(), s = (0, m.bG)([D.A], () => D.A.getUserIdentityByApplication(t, n)), o = (0, m.bG)([S.A], () => S.A.getApplicationWidgetConfig(n)), c = (0, m.bG)([D.A, S.A], () => null == D.A.getUserIdentities(t) || null == S.A.applicationWidgetConfigs), d = i.useMemo(() => {
            var e, t;
            if (null == o) return null;
            let n = K[o.widgetTemplateId];
            if (null == n) return null;
            let l = (e = s ?? null, t = o ?? null, null == e ? {
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
                    media: (0, w.Uv)(e.value)
                }] : (0, G.xb)(e)) ?? [], ...Object.entries({
                    username: e.profile?.username,
                    ...e.profile?.data?.primary
                }).filter(G.QE).map(e => {
                    let [t, n] = e;
                    if ("object" == typeof n) {
                        if ("url" in n && "proxy_url" in n && "loading_state" in n) return [t, {
                            type: "unfurled_media",
                            media: (0, w.Uv)(n)
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
                numberFormat: a
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
        }, [o, s, a]), {
            isLoading: c,
            hasData: null != s,
            components: d
        });
    return null == A ? null : (0, l.jsxs)(X.A, {
        ...e,
        userId: p.id,
        widget: g,
        className: r()(F.Y5, {
            [F.aK]: f,
            [F.F9]: y
        }),
        headerTitle: v.headerTitle,
        headerClassName: F.wx,
        additionalManageWidgetMenuItems: null != v.game ? (0, l.jsx)(h.Drp, {
            id: "view-game-profile",
            label: "View Game Profile",
            icon: h._xR,
            action: v.openGameProfileModal
        }) : null,
        children: [(0, l.jsx)(el, {
            widget: g,
            children: (0, l.jsx)(B, {
                component: A
            })
        }), (0, l.jsx)(U, {
            isCurrentUser: v.isCurrentUser,
            isLoading: T,
            hasData: E,
            showConnectCta: v.showConnectCta,
            showReconnectCta: v.showReconnectCta,
            handleConnect: v.handleConnect,
            cta: x
        })]
    })
}

function ea(e) {
    let {
        user: t,
        widget: n,
        cta: i,
        subtle: a = !1,
        embedded: c = !1
    } = e, d = M(e), u = (0, v.A)(t.id, n.applicationId), m = u.surfaceConfigs[o.m.WIDGET_TOP], p = u.surfaceConfigs[o.m.WIDGET_BOTTOM];
    return null == m || null == p ? null : (0, l.jsxs)(X.A, {
        ...e,
        userId: t.id,
        widget: n,
        className: r()(F.Y5, F.v2, {
            [F.aK]: a,
            [F.F9]: c
        }),
        headerClassName: F.vX,
        additionalManageWidgetMenuItems: null != d.game ? (0, l.jsx)(h.Drp, {
            id: "view-game-profile",
            label: "View Game Profile",
            icon: h._xR,
            action: d.openGameProfileModal
        }) : null,
        children: [(0, l.jsx)(s.kH, {
            ...u,
            surface: o.m.WIDGET_TOP,
            surfaceConfig: m,
            header: d.headerTitle
        }), (0, l.jsx)(h.cGx, {}), (0, l.jsx)(s.kH, {
            ...u,
            surface: o.m.WIDGET_BOTTOM,
            surfaceConfig: p
        }), (0, l.jsx)(U, {
            isCurrentUser: d.isCurrentUser,
            isLoading: u.isLoading,
            hasData: u.hasIdentity,
            showConnectCta: d.showConnectCta,
            showReconnectCta: d.showReconnectCta,
            handleConnect: d.handleConnect,
            cta: i,
            v2: !0
        })]
    })
}
let er = Object.assign(function(e) {
    let {
        enabled: t
    } = y.A.useConfig({
        location: "UserProfileApplicationWidget"
    });
    return t ? (0, l.jsx)(ea, {
        ...e
    }) : (0, l.jsx)(ei, {
        ...e
    })
}, {
    Cta: H
})