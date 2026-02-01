/** chunk id: 605694, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => $
}), n(446912), n(896048), n(747238);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(205338),
    s = n(87075),
    c = n(311907),
    u = n(397927),
    d = n(155718),
    f = n(793574),
    p = n(688810),
    g = n(362490),
    m = n(385771),
    b = n(789069),
    y = n(429913),
    O = n(409626),
    j = n(692969),
    h = n(207963),
    x = n(953756),
    v = n(647901),
    _ = n(371068),
    I = n(61266),
    A = n(731068),
    w = n(619517),
    P = n(339580),
    E = n(961350),
    S = n(760751),
    T = n(403362),
    C = n(183555),
    N = n(622543),
    R = n(466853),
    k = n(985018),
    D = n(442716);

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

function G(e, t) {
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
let M = /{{(.*?)}}/g,
    U = {
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
            }, {
                type: "TEXT",
                content: "UID: {{user_id}}"
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

function F(e) {
    let {
        component: t
    } = e;
    if (Array.isArray(t)) return H(t);
    switch (t.type) {
        case "HERO":
            let {
                body: n
            } = t, l = function(e, t) {
                if (null == e) return {};
                var n, r, l, i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i
                }
                if (i = function(e, t) {
                        if (null == e) return {};
                        var n, r, l = {},
                            i = Object.getOwnPropertyNames(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                        return l
                    }(e, t), Object.getOwnPropertySymbols)
                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i
            }(t, ["body"]);
            return (0, r.jsx)(B, G(L({}, l), {
                body: H(n)
            }));
        case "GRID":
            return (0, r.jsx)(X, {
                children: H(t.children)
            });
        case "FIELD":
            return (0, r.jsx)(z, {
                value: W(t.value),
                name: W(t.name)
            });
        case "TEXT":
            return (0, r.jsx)(K, L({}, t));
        case "TEXT_WITH_IMAGE":
            return (0, r.jsx)(V, L({}, t));
        case "SEPARATOR":
            return (0, r.jsx)(Y, L({}, t))
    }
}

function W(e, t) {
    return (0, r.jsx)(F, {
        component: e
    }, t)
}

function H(e) {
    return e.map((e, t) => W(e, t))
}

function B(e) {
    let {
        title: t,
        body: n,
        image: l,
        imagePlaceholder: i
    } = e;
    return (0, r.jsxs)("div", {
        className: D.mY,
        children: [(0, r.jsxs)("div", {
            className: D.TL,
            children: [(0, r.jsx)(u.Text, {
                variant: "text-lg/medium",
                className: D.ZY,
                children: null != t ? t : (0, r.jsx)("div", {
                    className: D.jC
                })
            }), (0, r.jsx)(v.x, {
                color: "muted",
                children: n
            })]
        }), (0, b.c)(l) ? (0, r.jsx)("div", {
            className: D.Xr,
            children: (0, r.jsx)(w.Ay, {
                src: l.proxyUrl,
                alt: "",
                width: l.width,
                height: l.height,
                responsive: !0,
                className: D.c8
            })
        }) : null != i ? (0, r.jsx)("div", {
            className: D.Xr,
            children: (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: D.c8
            })
        }) : (0, r.jsx)("div", {
            className: D.Hi
        })]
    })
}

function X(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)("div", {
        className: D.Vg,
        children: t
    })
}

function z(e) {
    let {
        name: t,
        value: n
    } = e;
    return (0, r.jsxs)("div", {
        children: [n, t]
    })
}

function K(e) {
    let {
        content: t
    } = e, n = l.useId(), i = (0, v.X)();
    return null != t ? (0, r.jsx)(I.A, {
        type: d.I5.TEXT_DISPLAY,
        id: n,
        content: t,
        className: D.Qq
    }) : (0, r.jsx)("div", {
        className: a()(D.jC, i.className)
    })
}

function V(e) {
    let {
        content: t,
        image: n,
        imagePosition: l
    } = e, i = (0, v.X)(), o = (0, b.c)(n) ? (0, r.jsx)("div", {
        className: a()(D.Sl, i.className),
        "data-position": l,
        children: (0, r.jsx)(w.Ay, {
            src: n.proxyUrl,
            alt: "",
            width: n.width,
            height: n.height,
            responsive: !0
        })
    }) : null == t ? (0, r.jsx)("div", {
        className: a()(D.bc, i.className)
    }) : null;
    return (0, r.jsxs)("div", {
        className: D.rQ,
        children: [null != o && "left" === l ? (0, r.jsxs)(r.Fragment, {
            children: [o, " "]
        }) : null, (0, r.jsx)(K, {
            content: t
        }), null != o && "right" === l ? (0, r.jsxs)(r.Fragment, {
            children: [" ", o]
        }) : null]
    })
}

function Y(e) {
    let {
        size: t = "small",
        divider: n = !1
    } = e, i = l.useId();
    return (0, r.jsx)(_.A, {
        type: d.I5.SEPARATOR,
        id: i,
        divider: n,
        spacing: "large" === t ? d.C8.LARGE : d.C8.SMALL
    })
}

function q(e, t) {
    if (null == e) return null;
    let n = e.split(M);
    if (1 === n.length) return n[0];
    if ("skeleton" === t.mode) return null;
    let r = "";
    for (let e = 0; e < n.length; e++) {
        let l = n[e];
        if (e % 2 == 0) {
            r += l;
            continue
        }
        let i = t.variables[l];
        null == i ? r += "––" : "unfurled_media" === i.type ? r += i.media.url : "number" === i.type ? r += t.numberFormat.format(i.value) : "string" === i.type && (r += i.value)
    }
    return r
}

function Z(e, t) {
    var n, r;
    if (null == e || "skeleton" === t.mode) return null;
    let l = null == (r = e.match(M)) || null == (n = r[0]) ? void 0 : n.slice(2, -2);
    if (null == l) return null;
    let i = t.variables[l];
    return null == i || "unfurled_media" !== i.type ? null : i.media
}

function J(e) {
    let {
        children: t,
        widget: n
    } = e;
    return (0, r.jsx)(x.O7.Root, {
        containerInnerWidth: 396,
        children: (0, r.jsx)(h.f5, {
            applicationWidget: n,
            children: (0, r.jsx)(v.x, {
                size: "reduced",
                weight: "reduced",
                children: (0, r.jsx)("div", {
                    className: D.kL,
                    children: t
                })
            })
        })
    })
}

function Q(e) {
    return (0, r.jsxs)(u.BJc, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: D.lO,
        children: [(0, r.jsxs)(u.BJc, {
            gap: 4,
            children: [e.showSuggestedForYou && (0, r.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: k.intl.string(k.t.zMUr6Z)
            }), (0, r.jsx)(u.Heading, {
                variant: "heading-sm/medium",
                color: "text-default",
                children: e.heading
            }), (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: e.content
            })]
        }), (0, r.jsx)(u.BJc, {
            direction: "horizontal",
            gap: 12,
            align: "center",
            justify: "end",
            fullWidth: !1,
            children: e.buttons
        })]
    })
}
let $ = Object.assign(function(e) {
    var t, n;
    let i, o, d, b, h, {
            trackUserProfileAction: x
        } = (0, C.NJ)(),
        {
            user: v,
            widget: _,
            cta: I,
            subtle: w = !1
        } = e,
        M = (0, c.bG)([E.default], () => E.default.getId()) === v.id,
        W = (0, y.h)(_.applicationId),
        H = null == W ? void 0 : W.getIconURL(16),
        B = (0, c.bG)([S.A], () => null != W ? S.A.getGameByApplication(W) : null),
        X = (0, j.A)({
            location: "UserProfileApplicationWidget",
            applicationId: null == B ? void 0 : B.id,
            source: O.Ob.UserProfile,
            sourceUserId: v.id,
            trackEntryPointImpression: !0
        }),
        {
            fetched: z,
            hasAlreadyLinked: K,
            canStartAuthorization: V,
            startAuthorization: Y
        } = (0, g.RD)(W),
        {
            analyticsLocations: $
        } = (0, p.Ay)(f.A.USER_PROFILE_APPLICATION_WIDGET),
        ee = l.useCallback(() => {
            V && (x({
                action: "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                applicationId: _.applicationId
            }), Y({
                analyticsLocations: $
            }))
        }, [V, Y, x, _.applicationId, $]),
        et = null == I && z && !K && V,
        en = (0, r.jsxs)(r.Fragment, {
            children: [null != H ? (0, r.jsx)("img", {
                className: D.Z2,
                src: H,
                width: 16,
                height: 16,
                alt: ""
            }) : (0, r.jsx)("span", {
                className: D.qP
            }), (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: (null == W ? void 0 : W.name) != null ? W.name : (0, r.jsx)("div", {
                    className: D.jC
                })
            })]
        }),
        er = null == B ? (0, r.jsx)("div", {
            className: D.qd,
            children: en
        }) : (0, r.jsx)(u.DUT, {
            className: a()(D.qd, D.vk),
            onClick: X,
            children: en
        }),
        {
            isLoading: el,
            hasData: ei,
            components: ea
        } = (t = v.id, n = _.applicationId, i = (0, m.A)(), o = (0, c.bG)([P.A], () => P.A.getUserIdentityByApplication(t, n)), d = (0, c.bG)([N.A], () => N.A.getApplicationWidgetConfig(n)), b = (0, c.bG)([P.A, N.A], () => null == P.A.getUserIdentities(t) || null == N.A.applicationWidgetConfigs), h = l.useMemo(() => {
            var e, t, n, r, l, a, c, u, f;
            if (null == d) return null;
            let p = U[d.widgetTemplateId];
            if (null == p) return null;
            let g = (e = null != o ? o : null, t = null != d ? d : null, null == e ? {
                mode: "skeleton",
                config: t,
                numberFormat: i
            } : {
                mode: "from_data",
                variables: Object.fromEntries([...null != (n = null == (a = e.profile) || null == (l = a.data) || null == (r = l.dynamic) ? void 0 : r.map(e => e.type === s.f.STRING ? [e.name, {
                    type: "string",
                    value: e.value
                }] : e.type === s.f.NUMBER ? [e.name, {
                    type: "number",
                    value: e.value
                }] : e.type === s.f.MEDIA ? [e.name, {
                    type: "unfurled_media",
                    media: (0, A.Uv)(e.value)
                }] : (0, T.xb)(e))) ? n : [], ...Object.entries(L({
                    username: null == (c = e.profile) ? void 0 : c.username
                }, null == (f = e.profile) || null == (u = f.data) ? void 0 : u.primary)).filter(T.QE).map(e => {
                    let [t, n] = e;
                    if ("object" == typeof n) {
                        if ("url" in n && "proxy_url" in n && "loading_state" in n) return [t, {
                            type: "unfurled_media",
                            media: (0, A.Uv)(n)
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
                }).filter(T.Vq)]),
                config: t,
                numberFormat: i
            });
            return p.map(function e(t) {
                switch (t.type) {
                    case "HERO":
                        var n;
                        return {
                            type: "HERO", body: t.body.map(e), title: q(t.title, g), image: Z(t.image, g), imagePlaceholder: null == (n = g.config) ? void 0 : n.heroPlaceholderImage
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
                            type: "TEXT", content: q(t.content, g)
                        };
                    case "TEXT_WITH_IMAGE":
                        return {
                            type: "TEXT_WITH_IMAGE", content: q(t.content, g), image: Z(t.image, g), imagePosition: t.imagePosition
                        };
                    case "SEPARATOR":
                        return t
                }
            })
        }, [d, o, i]), {
            isLoading: b,
            hasData: null != o,
            components: h
        });
    return null == ea ? null : (0, r.jsxs)(R.A, G(L({}, e), {
        userId: v.id,
        widget: _,
        className: a()(D.Y5, w && D.aK),
        headerTitle: er,
        headerClassName: D.wx,
        additionalManageWidgetMenuItems: null != B ? (0, r.jsx)(u.Drp, {
            id: "view-game-profile",
            label: "View Game Profile",
            icon: u._xR,
            action: X
        }) : null,
        children: [(0, r.jsx)(J, {
            widget: _,
            children: (0, r.jsx)(F, {
                component: ea
            })
        }), M && (0, r.jsxs)("div", {
            className: D.qr,
            children: [el || ei || et ? null : (0, r.jsxs)("div", {
                className: D.o8,
                children: [(0, r.jsx)(u.Qfk, {
                    size: "xxs"
                }), (0, r.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: k.intl.string(k.t.z5K4Uv)
                })]
            }), et ? (0, r.jsx)(Q, {
                heading: k.intl.string(k.t.UDPRLO),
                content: k.intl.string(k.t["OW/2al"]),
                buttons: (0, r.jsx)(u.Button, {
                    text: k.intl.string(k.t.S0W8Z5),
                    onClick: ee
                })
            }) : I]
        })]
    }))
}, {
    Cta: Q
})