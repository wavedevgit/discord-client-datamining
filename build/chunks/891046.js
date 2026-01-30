/** chunk id: 891046, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => B
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(602137),
    o = n(311907),
    c = n(827734),
    d = n(397927),
    u = n(147192),
    m = n(810181),
    h = n(234914),
    g = n(930125),
    f = n(282108),
    x = n(77350),
    p = n(294520),
    b = n(863439),
    j = n(291812),
    v = n(652176),
    _ = n(253932),
    y = n(761640),
    A = n(734057),
    C = n(576705),
    O = n(994500),
    T = n(435470),
    S = n(473503),
    N = n(256265),
    w = n(710948),
    E = n(835369),
    I = n(414368),
    P = n(715493),
    R = n(313880),
    k = n(52933),
    M = n(848551),
    D = n(505234),
    L = n(253913),
    F = n(652215),
    U = n(985018),
    G = n(368964);

function z(e) {
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

function H(e, t) {
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
let B = l.memo(function(e) {
    let {
        id: t,
        threadId: n,
        goToThread: l,
        overrideMedia: i,
        className: a,
        coords: s,
        gridCoords: c,
        gridSectionBoundaries: d,
        observePostVisibilityAnalytics: u
    } = e, m = (0, o.bG)([A.A], () => A.A.getChannel(n));
    return null == m ? null : (0, r.jsx)(V, {
        id: t,
        channel: m,
        goToThread: l,
        overrideMedia: i,
        className: a,
        coords: s,
        gridCoords: c,
        observePostVisibilityAnalytics: u,
        gridSectionBoundaries: d
    })
});

function V(e) {
    let {
        id: t,
        channel: n,
        goToThread: i,
        overrideMedia: u,
        className: m,
        coords: h,
        gridCoords: g,
        gridSectionBoundaries: f,
        observePostVisibilityAnalytics: x
    } = e, p = n.id, b = l.useRef(null), j = (0, o.bG)([y.Ay], () => y.Ay.getCurrentSidebarChannelId(n.parent_id) === n.id), {
        firstMessage: v,
        loaded: _
    } = (0, S.OA)(n), {
        messageCountText: A
    } = (0, T.k6)(n), {
        isNew: C,
        hasUnreads: O
    } = (0, T.X5)(n), N = l.useRef(null), {
        handleLeftClick: w,
        handleRightClick: P
    } = (0, D.A)({
        facepileRef: N,
        goToThread: i,
        channel: n
    });
    l.useEffect(() => {
        null == x || x(b.current, p)
    }, [x, p]);
    let k = (0, T.Mw)(n, s.T.CREATION_DATE, L.EG.POSTED_DURATION_AGO),
        F = (0, E.hf)(n),
        H = (0, M.E)({
            id: t,
            row: g.row,
            column: g.column,
            section: g.section,
            boundaries: f
        }),
        {
            onFocus: B
        } = H,
        V = function(e, t) {
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
        }(H, ["onFocus"]);
    return (0, r.jsxs)("li", {
        ref: b,
        onClick: w,
        onFocus: B,
        onContextMenu: P,
        className: a()(G.kL, m, {
            [G.nT]: j
        }),
        style: z({}, h),
        children: [(0, r.jsx)(d.DUT, z({
            onClick: w,
            focusProps: {
                ringTarget: b
            },
            onContextMenu: P,
            "aria-label": U.intl.formatToPlainString(U.t.pgYN6c, {
                title: n.name,
                count: A
            }),
            className: G.Kv
        }, V)), (0, r.jsxs)("div", {
            className: G.wx,
            children: [(0, r.jsxs)("div", {
                className: G.Y6,
                children: [(0, r.jsxs)("div", {
                    className: G.wO,
                    children: [(0, r.jsx)(R.A, {
                        channel: n,
                        message: v
                    }), (0, r.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: G.SD,
                        children: k
                    })]
                }), C ? (0, r.jsx)(d.LpS, {
                    className: G.Ad,
                    color: c.A.unsafe_rawColors.BRAND_260.css,
                    text: U.intl.string(U.t.y2b7CA)
                }) : null]
            }), (0, r.jsx)(d.Fmo, {
                children: (0, r.jsx)(d.Heading, {
                    variant: "heading-md/extrabold",
                    className: G.DD,
                    color: O ? "text-strong" : "text-muted",
                    style: {
                        width: "".concat(h.width - 2 * I.qf, "px")
                    },
                    children: F
                })
            })]
        }), (0, r.jsx)("div", {
            className: G.PU,
            children: (0, r.jsx)(d.M1G, {
                children: (0, r.jsx)(K, {
                    channel: n,
                    firstMessage: v,
                    isFirstMessageLoaded: _,
                    overrideMedia: u,
                    coords: h
                })
            })
        }), (0, r.jsx)("div", {
            className: G.qr,
            children: (0, r.jsx)(d.M1G, {
                children: (0, r.jsx)(q, {
                    channel: n,
                    firstMessage: v,
                    facepileRef: N
                })
            })
        })]
    })
}

function K(e) {
    let {
        channel: t,
        firstMessage: n,
        isFirstMessageLoaded: l,
        overrideMedia: i,
        coords: a
    } = e, {
        isBlocked: s,
        isIgnored: c
    } = (0, o.cf)([O.A], () => ({
        isBlocked: null != n && O.A.isBlockedForMessage(n),
        isIgnored: null != n && O.A.isIgnoredForMessage(n)
    }));
    return s ? (0, r.jsx)($, {
        message: U.intl.string(U.t.Lkp2fB),
        containerWidth: a.width,
        channel: t
    }) : c ? (0, r.jsx)($, {
        message: U.intl.string(U.t.yWK7ZM),
        containerWidth: a.width,
        channel: t
    }) : (0, r.jsx)(W, {
        channel: t,
        firstMessage: n,
        isFirstMessageLoaded: l,
        overrideMedia: i,
        coords: a
    })
}

function W(e) {
    let {
        channel: t,
        firstMessage: n,
        isFirstMessageLoaded: l,
        overrideMedia: i,
        coords: a
    } = e, s = (0, o.bG)([A.A], () => A.A.getChannel(t.parent_id)), {
        firstMedia: c
    } = (0, T.gk)({
        firstMessage: n,
        formatInline: !1,
        noStyleAndInteraction: !1
    }), {
        hasUnreads: d
    } = (0, T.X5)(t), u = (0, o.bG)([C.A], () => C.A.can(F.xBc.MANAGE_MESSAGES, t)), m = _.kt.useSetting(), h = _.gs.useSetting(), g = (0, b.A)(h, u), f = (0, N.no)(n, s, !1), x = t.isMediaPost(), [p, j] = (0, I.tm)(a.width - 2 * I.IZ, x ? I.PL.SIXTEEN_BY_NINE : I.PL.THREE_BY_TWO);
    return (null == n ? void 0 : n.blocked) || null == (null != i ? i : c) ? (0, r.jsx)(Z, {
        channel: t,
        firstMessage: n,
        isFirstMessageLoaded: l,
        containerWidth: a.width,
        hasUnreads: d
    }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Q, {
            mediaAttachments: f,
            globalSpoilerRenderSetting: g,
            containerWidth: p,
            containerHeight: j,
            canAutoPlay: m,
            shouldMaintainAspectRatio: x
        }), (0, r.jsx)("div", {
            className: G.GA,
            children: (0, r.jsx)(k.Ay, {
                channel: t,
                tagsClassName: G.uU
            })
        })]
    })
}

function q(e) {
    let {
        channel: t,
        facepileRef: n,
        firstMessage: l
    } = e, i = (0, m.m)(t.id), a = (null == l ? void 0 : l.reactions) != null && l.reactions.length > 0;
    return (0, r.jsxs)("div", {
        className: G.GD,
        children: [(0, r.jsxs)("div", {
            className: G.QW,
            children: [(0, r.jsx)("div", {
                className: G.mz,
                children: (0, r.jsx)(E.$k, {
                    channel: t,
                    iconSize: 16,
                    showReadState: !0
                })
            }), i.length > 0 ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("span", {
                    className: G.xE,
                    children: "•"
                }), (0, r.jsxs)("div", {
                    className: G.IW,
                    children: [(0, r.jsx)(E.gL, {
                        channel: t,
                        userIds: i,
                        facepileRef: n
                    }), (0, r.jsx)("div", {
                        className: G.r$,
                        children: (0, r.jsx)(d.nvX, {
                            themed: !0,
                            dotRadius: 2
                        })
                    }), (0, r.jsx)(u.Ay, {
                        channel: t,
                        className: G.mD,
                        renderDots: !1
                    })]
                })]
            }) : null]
        }), (0, r.jsxs)("div", {
            className: G.QW,
            children: [a || null == l ? null : (0, r.jsx)(E.NA, {
                firstMessage: l,
                channel: t
            }), null == l ? null : (0, r.jsx)(E.cn, {
                firstMessage: l,
                channel: t
            })]
        })]
    })
}
let J = e => e.preventDefault(),
    X = l.memo(function(e) {
        return (0, r.jsx)(r.Fragment, {
            children: (0, v.LL)(H(z({}, e), {
                analyticsSource: "ForumPostMediaPreviewImage"
            }))
        })
    }),
    Q = l.memo(function(e) {
        let {
            mediaAttachments: t,
            globalSpoilerRenderSetting: n,
            containerWidth: i,
            containerHeight: s,
            canAutoPlay: o,
            shouldMaintainAspectRatio: c = !1
        } = e, {
            containsVideo: u,
            containsGif: m
        } = l.useMemo(() => (0, N.$2)(t), [t]), b = l.useMemo(() => t.slice(P.xA, P.lV), [t]), j = (0, P.eX)({
            numAttachments: b.length,
            containerWidth: i,
            containerHeight: s
        }), v = (0, P.p2)({
            imageContainerStyles: j,
            containerWidth: i,
            containerHeight: s
        }), _ = (0, f.O8)(g.v.GUILD), y = l.useMemo(() => b.map((e, t) => {
            var l;
            let [i, s] = (0, p.K6)(e, !n, _), g = (0, p.rx)(s), f = H(z({}, v[t]), {
                src: e.src,
                width: e.width,
                height: e.height,
                alt: null != e.alt && i ? g : e.alt,
                onClick: J,
                shouldRenderAccessory: !m && !u
            }), b = (0, x.ge)(e.src) ? "".concat(e.src, "?format=png") : e.src, y = o && !i ? e.src : b;
            return (0, r.jsxs)("div", {
                className: G.UV,
                style: j[t],
                children: [c ? (0, r.jsx)(h.A, H(z({}, f), {
                    src: y,
                    backgroundSrc: b,
                    aspectRatio: f.maxWidth / f.maxHeight,
                    alt: null != (l = f.alt) ? l : "",
                    className: a()(G.EN, {
                        [G.cd]: i
                    }),
                    imageChildClassName: G.Rp
                })) : e.src.startsWith("data:") ? (0, r.jsx)(d._V3, H(z({}, f), {
                    className: G.il,
                    imageClassName: a()(G.LW, {
                        [G.cd]: i
                    })
                })) : (0, r.jsx)(X, H(z({}, f), {
                    autoPlay: o && !i,
                    containerClassName: G.EK,
                    imageClassName: a()(G.rp, {
                        [G.cd]: i
                    }),
                    responsive: !0
                })), i && (0, r.jsx)("div", {
                    className: G.X,
                    children: (0, r.jsx)(w.A, {
                        obscureReason: s,
                        iconClassname: G.yo
                    })
                })]
            }, e.src)
        }), [o, m, u, n, j, v, b, c, _]);
        return (0, r.jsxs)("div", {
            className: G.pV,
            style: {
                width: i,
                height: s
            },
            children: [y, (m || u) && (0, r.jsxs)("div", {
                className: G.vz,
                children: [u && (0, r.jsx)(d.udU, {
                    color: "currentColor",
                    size: "custom",
                    width: 22,
                    height: 22,
                    className: G.cU
                }), m && (0, r.jsx)(d.Osp, {
                    size: "custom",
                    width: 29,
                    height: 29,
                    color: "currentColor",
                    className: G.cU
                })]
            }), t.length > P.Mm && (0, r.jsx)(Y, {
                text: (t.length - P.Mm).toString(),
                icon: d.xfq,
                pillClassName: G.v3,
                iconClassName: G.In,
                textClassName: G.EY
            })]
        })
    });

function Y(e) {
    let {
        text: t,
        icon: n,
        pillClassName: l,
        iconClassName: i,
        textClassName: a
    } = e;
    return (0, r.jsxs)("div", {
        className: l,
        children: [(0, r.jsx)(n, {
            className: i,
            color: "currentColor"
        }), (0, r.jsxs)(d.Text, {
            variant: "text-xs/medium",
            className: a,
            children: ["+", t]
        })]
    })
}

function Z(e) {
    let {
        channel: t,
        firstMessage: n,
        isFirstMessageLoaded: i,
        containerWidth: s,
        hasUnreads: o
    } = e, c = _.hH.useSetting(), [u, m] = (0, I.tm)(s - 2 * I.IZ), {
        content: h
    } = (0, T.gk)({
        firstMessage: n,
        formatInline: !1,
        noStyleAndInteraction: !0
    }), {
        shouldRenderTagsRow: g
    } = (0, k.BA)({
        channel: t,
        isNew: !1
    }), f = l.useMemo(() => ({
        width: u,
        height: m
    }), [u, m]), x = o ? G.kR : G.b8;
    return (0, r.jsxs)("div", {
        className: G.Cv,
        style: f,
        children: [(0, r.jsxs)("div", {
            className: G.Qs,
            children: [i && null == n && (0, r.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: o ? "text-default" : "text-muted",
                children: U.intl.string(U.t.mE3KJN)
            }), i && null != n && (0, r.jsx)(j.Ay, {
                message: n,
                content: h,
                className: x,
                compact: c
            })]
        }), (0, r.jsx)("div", {
            className: a()(G.kh, {
                [G.ZH]: !g
            }),
            children: g ? (0, r.jsx)(k.Ay, {
                channel: t,
                tagsClassName: G.uU
            }) : null
        })]
    })
}

function $(e) {
    let {
        message: t,
        containerWidth: n,
        channel: i
    } = e, [s, o] = (0, I.tm)(n - 2 * I.IZ), {
        shouldRenderTagsRow: c
    } = (0, k.BA)({
        channel: i,
        isNew: !1
    }), u = l.useMemo(() => ({
        width: s,
        height: o
    }), [s, o]);
    return (0, r.jsxs)("div", {
        className: G.Cv,
        style: u,
        children: [(0, r.jsx)("div", {
            className: G.Qs,
            children: (0, r.jsx)(d.Text, {
                className: G.Wv,
                variant: "text-sm/medium",
                color: "text-muted",
                children: t
            })
        }), (0, r.jsx)("div", {
            className: a()(G.kh, {
                [G.ZH]: !c
            }),
            children: c ? (0, r.jsx)(k.Ay, {
                channel: i,
                tagsClassName: G.uU
            }) : null
        })]
    })
}