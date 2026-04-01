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
    d = n(205338),
    c = n(179771),
    u = n(87075),
    g = n(311907),
    m = n(397927),
    x = n(155718),
    p = n(793574),
    f = n(688810),
    h = n(362490),
    _ = n(369374),
    A = n(531913),
    I = n(385771),
    j = n(789069),
    v = n(429913),
    T = n(409626),
    E = n(692969),
    b = n(207963),
    C = n(953756),
    N = n(647901),
    S = n(371068),
    y = n(61266),
    R = n(731068),
    k = n(619517),
    O = n(339580),
    w = n(961350),
    L = n(760751),
    P = n(403362),
    D = n(183555),
    G = n(622543),
    M = n(466853),
    U = n(985018),
    F = n(414675);

function W(e) {
    let {
        trackUserProfileAction: t
    } = (0, D.NJ)(), {
        user: n,
        widget: a,
        cta: r
    } = e, o = (0, g.bG)([w.default], () => w.default.getId()) === n.id, d = (0, v.h)(a.applicationId), u = d?.getIconURL(16), x = (0, g.bG)([L.A], () => null != d ? L.A.getGameByApplication(d) : null), _ = (0, E.A)({
        location: "UserProfileApplicationWidget",
        applicationId: x?.id,
        source: T.Ob.UserProfile,
        sourceUserId: n.id,
        trackEntryPointImpression: !0
    }), {
        fetched: A,
        hasAlreadyLinked: I,
        canStartAuthorization: j,
        startAuthorization: b,
        token: C
    } = (0, h.RD)(d), {
        analyticsLocations: N
    } = (0, f.Ay)(p.A.USER_PROFILE_APPLICATION_WIDGET), S = l.useCallback(() => {
        j && (t({
            action: I ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT" : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
            applicationId: a.applicationId
        }), b({
            analyticsLocations: N
        }))
    }, [j, I, b, t, a.applicationId, N]), y = null == r && A && !I && j, R = null == r && A && I && j && null != C && !C.scopes.includes(c.F.APPLICATION_IDENTITIES_WRITE) && !C.scopes.includes(c.F.SDK_SOCIAL_LAYER) && !C.scopes.includes(c.F.SDK_SOCIAL_LAYER_PRESENCE), k = (0, i.jsxs)(i.Fragment, {
        children: [null != u ? (0, i.jsx)("img", {
            className: F.Z2,
            src: u,
            width: 16,
            height: 16,
            alt: ""
        }) : (0, i.jsx)("span", {
            className: F.qP
        }), (0, i.jsx)(m.Text, {
            variant: "text-sm/medium",
            children: d?.name != null ? d.name : (0, i.jsx)("div", {
                className: F.jC
            })
        })]
    }), O = null == x ? (0, i.jsx)("div", {
        className: F.qd,
        children: k
    }) : (0, i.jsx)(m.DUT, {
        className: s()(F.qd, F.vk),
        onClick: _,
        children: k
    });
    return {
        isCurrentUser: o,
        game: x,
        openGameProfileModal: _,
        handleConnect: S,
        showConnectCta: y,
        showReconnectCta: R,
        headerTitle: O
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
        cta: d,
        v2: c = !1
    } = e;
    return t ? (0, i.jsxs)("div", {
        className: s()(F.qr, c && F.v2),
        children: [n || l || a || r ? null : (0, i.jsxs)("div", {
            className: F.o8,
            children: [(0, i.jsx)(m.Qfk, {
                size: "xxs"
            }), (0, i.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: U.intl.string(U.t.z5K4Uv)
            })]
        }), a ? (0, i.jsx)(B, {
            heading: U.intl.string(U.t.UDPRLO),
            content: U.intl.string(U.t["OW/2al"]),
            buttons: (0, i.jsx)(m.Button, {
                text: U.intl.string(U.t.S0W8Z5),
                onClick: o
            })
        }) : r ? (0, i.jsx)(B, {
            heading: U.intl.string(U.t["9WarGY"]),
            content: U.intl.string(U.t.qgxnKe),
            buttons: (0, i.jsx)(m.Button, {
                text: U.intl.string(U.t.vD60Pv),
                onClick: o
            })
        }) : d]
    }) : null
}

function B(e) {
    return (0, i.jsxs)(m.BJc, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: F.lO,
        children: [(0, i.jsxs)(m.BJc, {
            gap: 4,
            children: [e.showSuggestedForYou && (0, i.jsx)(m.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: U.intl.string(U.t.zMUr6Z)
            }), (0, i.jsx)(m.Heading, {
                variant: "heading-sm/medium",
                color: "text-default",
                children: e.heading
            }), (0, i.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: e.content
            })]
        }), (0, i.jsx)(m.BJc, {
            direction: "horizontal",
            gap: 12,
            align: "center",
            justify: "end",
            fullWidth: !1,
            children: e.buttons
        })]
    })
}
let X = /{{(.*?)}}/g,
    V = {
        [d.A.MARVEL_RIVALS]: [{
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
        [d.A.WUTHERING_WAVES]: [{
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
    if (Array.isArray(t)) return K(t);
    switch (t.type) {
        case "HERO":
            let {
                body: n, ...l
            } = t;
            return (0, i.jsx)(q, {
                ...l,
                body: K(n)
            });
        case "GRID":
            return (0, i.jsx)(J, {
                children: K(t.children)
            });
        case "FIELD":
            return (0, i.jsx)(Z, {
                value: Y(t.value),
                name: Y(t.name)
            });
        case "TEXT":
            return (0, i.jsx)(Q, {
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
    return (0, i.jsx)(z, {
        component: e
    }, t)
}

function K(e) {
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
            children: [(0, i.jsx)(m.Text, {
                variant: "text-lg/medium",
                className: F.ZY,
                children: null != t ? t : (0, i.jsx)("div", {
                    className: F.jC
                })
            }), (0, i.jsx)(N.x, {
                color: "muted",
                children: n
            })]
        }), (0, j.c)(l) ? (0, i.jsx)("div", {
            className: F.Xr,
            children: (0, i.jsx)(k.Ay, {
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

function Z(e) {
    let {
        name: t,
        value: n
    } = e;
    return (0, i.jsxs)("div", {
        children: [n, t]
    })
}

function Q(e) {
    let {
        content: t
    } = e, n = l.useId(), a = (0, N.X)();
    return null != t ? (0, i.jsx)(y.A, {
        type: x.I5.TEXT_DISPLAY,
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
    } = e, a = (0, N.X)(), r = (0, j.c)(n) ? (0, i.jsx)("div", {
        className: s()(F.Sl, a.className),
        "data-position": l,
        children: (0, i.jsx)(k.Ay, {
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
        }) : null, (0, i.jsx)(Q, {
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
    return (0, i.jsx)(S.A, {
        type: x.I5.SEPARATOR,
        id: a,
        divider: n,
        spacing: "large" === t ? x.C8.LARGE : x.C8.SMALL
    })
}

function et(e, t) {
    if (null == e) return null;
    let n = e.split(X);
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
    let n = e.match(X)?.[0]?.slice(2, -2);
    if (null == n) return null;
    let i = t.variables[n];
    return null == i || "unfurled_media" !== i.type ? null : i.media
}

function ei(e) {
    let {
        children: t,
        widget: n
    } = e;
    return (0, i.jsx)(C.O7.Root, {
        containerInnerWidth: 396,
        children: (0, i.jsx)(b.f5, {
            applicationWidget: n,
            children: (0, i.jsx)(N.x, {
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
    let a, r, o, d, c, {
            user: x,
            widget: p,
            cta: f,
            subtle: h = !1
        } = e,
        _ = W(e),
        {
            isLoading: A,
            hasData: j,
            components: v
        } = (t = x.id, n = p.applicationId, a = (0, I.A)(), r = (0, g.bG)([O.A], () => O.A.getUserIdentityByApplication(t, n)), o = (0, g.bG)([G.A], () => G.A.getApplicationWidgetConfig(n)), d = (0, g.bG)([O.A, G.A], () => null == O.A.getUserIdentities(t) || null == G.A.applicationWidgetConfigs), c = l.useMemo(() => {
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
                    media: (0, R.Uv)(e.value)
                }] : (0, P.xb)(e)) ?? [], ...Object.entries({
                    username: e.profile?.username,
                    ...e.profile?.data?.primary
                }).filter(P.QE).map(e => {
                    let [t, n] = e;
                    if ("object" == typeof n) {
                        if ("url" in n && "proxy_url" in n && "loading_state" in n) return [t, {
                            type: "unfurled_media",
                            media: (0, R.Uv)(n)
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
                }).filter(P.Vq)]),
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
            isLoading: d,
            hasData: null != r,
            components: c
        });
    return null == v ? null : (0, i.jsxs)(M.A, {
        ...e,
        userId: x.id,
        widget: p,
        className: s()(F.Y5, h && F.aK),
        headerTitle: _.headerTitle,
        headerClassName: F.wx,
        additionalManageWidgetMenuItems: null != _.game ? (0, i.jsx)(m.Drp, {
            id: "view-game-profile",
            label: "View Game Profile",
            icon: m._xR,
            action: _.openGameProfileModal
        }) : null,
        children: [(0, i.jsx)(ei, {
            widget: p,
            children: (0, i.jsx)(z, {
                component: v
            })
        }), (0, i.jsx)(H, {
            isCurrentUser: _.isCurrentUser,
            isLoading: A,
            hasData: j,
            showConnectCta: _.showConnectCta,
            showReconnectCta: _.showReconnectCta,
            handleConnect: _.handleConnect,
            cta: f
        })]
    })
}

function ea(e) {
    let {
        user: t,
        widget: n,
        cta: l,
        subtle: a = !1
    } = e, d = W(e), c = (0, A.A)(t.id, n.applicationId), u = c.surfaceConfigs[o.m.WIDGET_TOP], g = c.surfaceConfigs[o.m.WIDGET_BOTTOM];
    return null == u || null == g ? null : (0, i.jsxs)(M.A, {
        ...e,
        userId: t.id,
        widget: n,
        className: s()(F.Y5, F.v2, a && F.aK),
        headerClassName: F.vX,
        additionalManageWidgetMenuItems: null != d.game ? (0, i.jsx)(m.Drp, {
            id: "view-game-profile",
            label: "View Game Profile",
            icon: m._xR,
            action: d.openGameProfileModal
        }) : null,
        children: [(0, i.jsx)(r.kH, {
            surface: o.m.WIDGET_TOP,
            surfaceConfig: u,
            header: d.headerTitle,
            data: c.data,
            locale: c.locale,
            applicationAssets: c.applicationAssets,
            localizedStrings: c.localizedStrings
        }), (0, i.jsx)(m.cGx, {}), (0, i.jsx)(r.kH, {
            surface: o.m.WIDGET_BOTTOM,
            surfaceConfig: g,
            data: c.data,
            locale: c.locale,
            applicationAssets: c.applicationAssets,
            localizedStrings: c.localizedStrings
        }), (0, i.jsx)(H, {
            isCurrentUser: d.isCurrentUser,
            isLoading: c.isLoading,
            hasData: c.hasIdentity,
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
    } = _.A.useConfig({
        location: "UserProfileApplicationWidget"
    });
    return t ? (0, i.jsx)(ea, {
        ...e
    }) : (0, i.jsx)(el, {
        ...e
    })
}, {
    Cta: B
})