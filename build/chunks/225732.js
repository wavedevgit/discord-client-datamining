/** chunk id: 225732, original params: e,t,i (module,exports,require) **/
i.d(t, {
    default: () => eh
});
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(989349),
    c = i.n(r),
    o = i(110259),
    d = i(535185),
    u = i(792216),
    m = i(379834),
    x = i(311907),
    g = i(990078),
    h = i(397927),
    f = i(544420),
    j = i(964486),
    v = i(359549),
    p = i(793574),
    A = i(688810),
    I = i(139286),
    _ = i(429913),
    N = i(590703),
    E = i(708197),
    S = i(583846),
    T = i(524799),
    C = i(928550),
    b = i(657331),
    G = i(773669),
    w = i(486020),
    L = i(541830),
    O = i(661191),
    R = i(240248),
    k = i(409626),
    y = i(880405),
    M = i(422069),
    P = i(476464),
    D = i(205184),
    Y = i(611656),
    V = i(459746),
    W = i(503364),
    U = i(976720),
    H = i(839671),
    z = i(94836),
    F = i(392332),
    B = i(639714),
    X = i(310721),
    J = i(922283),
    K = i(582942),
    Z = i(771004),
    Q = i(424994),
    $ = i(985018),
    q = i(851822),
    ee = i(146258);
let et = () => (0, n.jsxs)("div", {
        className: q.uv,
        children: [(0, n.jsx)(h.Y3C, {
            size: "xxs"
        }), (0, n.jsx)(h.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: $.intl.string($.t.kAlUsy)
        })]
    }),
    ei = l.createContext(void 0);

function en(e) {
    let {
        detectedGame: t,
        application: i,
        entries: a
    } = e, r = l.useMemo(() => t?.genres.map(L.du).join(", "), [t]), [o] = l.useState(() => Math.random()), d = l.useMemo(() => {
        if (null == t) return "";
        let {
            artwork: e,
            screenshots: i
        } = t;
        if (e.length > 0) {
            let t = Math.floor(o * e.length);
            return e[t]
        }
        if (i.length > 0) {
            let e = Math.floor(o * i.length);
            return i[e]
        }
        return ""
    }, [t, o]), u = (0, R.uJ)(t.iconHash) ? i?.getIconURL(160, w.QB ? "webp" : "png") : w.Ay.getGameAssetURL({
        id: t.applicationId,
        hash: t.iconHash,
        size: 160,
        format: w.QB ? "webp" : "png"
    }), x = O.default.extractTimestamp(i.id), g = 7 >= c()().diff(c()(x), "days"), f = a.some(e => (0, S.CZ)(e) === m.m.GLOBAL), j = t.name ?? i?.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
            className: q.is,
            style: {
                backgroundImage: `url("${d}")`
            }
        }), (0, n.jsxs)("div", {
            className: s()(q.Qs, q.fi, q.iH, q.Se),
            children: [(0, n.jsxs)("div", {
                className: q.xx,
                children: [(0, n.jsx)("div", {
                    className: q.bb,
                    children: (0, n.jsx)(V.A, {
                        game: t,
                        application: i,
                        className: q.wm,
                        size: V.w.LARGE
                    })
                }), (0, n.jsx)(W.A, {
                    applicationId: i.id,
                    className: q.Gg
                })]
            }), (0, n.jsx)("div", {
                className: s()(q.nM, q.Lc, q.Z3),
                children: (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(h.Heading, {
                        variant: "heading-xl/bold",
                        children: j
                    }), (0, n.jsxs)("div", {
                        className: s()(q.nM, q.Lc),
                        children: [null != u && (0, n.jsx)("img", {
                            className: q.Gt,
                            src: u,
                            height: 16,
                            alt: $.intl.formatToPlainString($.t["nh+jWk"], {
                                game: j
                            })
                        }), (0, n.jsx)(h.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            children: r
                        }), g && (0, n.jsx)(h.Text, {
                            variant: "eyebrow",
                            className: q.Ad,
                            children: $.intl.string($.t.y2b7CA)
                        }), f && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(h.Text, {
                                variant: "text-sm/medium",
                                children: " \xb7 "
                            }), (0, n.jsx)(et, {})]
                        })]
                    })]
                })
            })]
        })]
    })
}

function el(e) {
    let {
        detectedGame: t,
        application: i,
        entries: a
    } = e, r = l.useMemo(() => t?.genres.map(L.du).join(", "), [t]), [o] = l.useState(() => Math.random()), d = l.useMemo(() => {
        if (null == t) return "";
        let {
            artwork: e,
            screenshots: i
        } = t;
        if (e.length > 0) {
            let t = Math.floor(o * e.length);
            return e[t]
        }
        if (i.length > 0) {
            let e = Math.floor(o * i.length);
            return i[e]
        }
        return ""
    }, [t, o]), u = (0, R.uJ)(t.iconHash) ? i?.getIconURL(160, w.QB ? "webp" : "png") : w.Ay.getGameAssetURL({
        id: t.applicationId,
        hash: t.iconHash,
        size: 160,
        format: w.QB ? "webp" : "png"
    }), x = O.default.extractTimestamp(i.id), g = 7 >= c()().diff(c()(x), "days"), f = a.some(e => (0, S.CZ)(e) === m.m.GLOBAL), j = t.name ?? i?.name;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
            className: q.is,
            style: {
                backgroundImage: `url("${d}")`
            }
        }), (0, n.jsxs)("div", {
            className: s()(q.Qs, q.fi, q.iH, q.Se),
            children: [(0, n.jsxs)("div", {
                className: q.xx,
                children: [(0, n.jsx)("div", {
                    className: q.bb,
                    children: (0, n.jsx)(V.A, {
                        game: t,
                        application: i,
                        className: q.wm,
                        size: V.w.LARGE
                    })
                }), (0, n.jsx)(W.N, {
                    applicationId: i.id,
                    className: q.Gg
                })]
            }), (0, n.jsx)("div", {
                className: s()(q.nM, q.Lc, q.Z3),
                children: (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(h.Heading, {
                        variant: "heading-xl/bold",
                        children: j
                    }), (0, n.jsxs)("div", {
                        className: s()(q.nM, q.Lc),
                        children: [null != u && (0, n.jsx)("img", {
                            className: q.Gt,
                            src: u,
                            height: 16,
                            alt: $.intl.formatToPlainString($.t["nh+jWk"], {
                                game: j
                            })
                        }), (0, n.jsx)(h.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            children: r
                        }), g && (0, n.jsx)(h.Text, {
                            variant: "eyebrow",
                            className: q.Ad,
                            children: $.intl.string($.t.y2b7CA)
                        }), f && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(h.Text, {
                                variant: "text-sm/medium",
                                children: " \xb7 "
                            }), (0, n.jsx)(et, {})]
                        })]
                    })]
                })
            })]
        })]
    })
}

function ea(e) {
    let {
        detectedGame: t,
        application: i,
        entries: l,
        officialGuildInvite: a,
        similarGames: s,
        similarGamesError: r,
        onClose: c,
        viewId: o,
        trackAction: d,
        source: u
    } = e;
    return (0, n.jsxs)("div", {
        className: q.V0,
        children: [(0, n.jsx)(F.A, {
            entries: l,
            viewId: o,
            officialGuildId: a?.guild?.id,
            onClose: c,
            source: u
        }), (0, n.jsx)(z.A, {
            detectedGame: t,
            trackAction: d
        }), (0, n.jsx)(K.A, {
            applicationId: i.id,
            onClose: c,
            trackAction: d,
            similarGames: s,
            similarGamesError: r
        })]
    })
}

function es(e) {
    let {
        detectedGame: t,
        trackAction: i
    } = e;
    return (0, n.jsx)("div", {
        className: q.V0,
        children: (0, n.jsx)(z.a, {
            detectedGame: t,
            trackAction: i
        })
    })
}

function er(e) {
    let {
        detectedGame: t,
        trackAction: i
    } = e, l = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, n.jsxs)("div", {
        className: q.V0,
        children: [(0, n.jsx)(z.a, {
            detectedGame: t,
            trackAction: i
        }), l && (0, n.jsx)(J.A, {
            websites: t.websites,
            reviews: t.reviews
        })]
    })
}

function ec(e) {
    let {
        onClose: t,
        onCloudPlayClick: i,
        analyticsLocations: l
    } = e;
    return (0, I.A)({
        name: o.ImpressionNames.CLOUD_PLAY_CTA,
        type: o.ImpressionTypes.VIEW,
        properties: {
            location_stack: l
        }
    }), (0, n.jsx)(g.m, {
        text: $.intl.string($.t.JVwWva),
        position: "top",
        children: (0, n.jsx)(h.Button, {
            icon: h.hpF,
            text: $.intl.string($.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: () => {
                t(), i()
            },
            fullWidth: !0
        })
    })
}

function eo(e) {
    let {
        applicationId: t,
        analyticsLocations: i
    } = e, n = (0, _.h)(t), l = (0, v.A)({
        application: n,
        analyticsLocations: i
    });
    return {
        onCloudPlayClick: l,
        isCloudPlayButtonShown: !(0, C.L)(t) && null != l
    }
}

function ed(e) {
    let {
        detectedGame: t,
        onSetOfficialGuildInvite: i,
        officialGuildInvite: a,
        trackAction: r,
        onClose: c,
        applicationId: o
    } = e, d = l.useCallback(() => {
        c(), (0, b.closeUserProfileModal)()
    }, [c]), {
        analyticsLocations: u
    } = (0, A.Ay)(p.A.GAME_PROFILE), {
        isCloudPlayButtonShown: m,
        onCloudPlayClick: x
    } = eo({
        applicationId: o,
        analyticsLocations: u
    });
    return (0, n.jsxs)("div", {
        className: s()(q.pz, q.fi, q.iH),
        children: [(0, n.jsxs)("div", {
            className: q.NC,
            children: [(0, n.jsx)(U.A, {
                invite: a,
                trackClick: r,
                closeModal: d
            }), m && null != x && (0, n.jsx)(ec, {
                onClose: d,
                onCloudPlayClick: x,
                analyticsLocations: u
            })]
        }), (0, n.jsx)(h.Heading, {
            variant: "heading-md/bold",
            children: $.intl.string($.t.CI0vSJ)
        }), (0, n.jsxs)("div", {
            className: q.V0,
            children: [(0, n.jsx)(Z.h, {
                detectedGame: t,
                trackAction: r
            }), (0, n.jsx)(B.A, {
                detectedGame: t,
                trackClick: r,
                onInviteResolved: i,
                closeModal: d
            }), (0, n.jsx)(H.A, {
                detectedGame: t,
                trackClick: r
            }), (0, n.jsx)(X.A, {
                detectedGame: t
            }), (0, n.jsx)(h.Text, {
                variant: "text-xxs/normal",
                children: $.intl.format($.t.pch2Jw, {
                    igdbLink: Q.s8
                })
            })]
        })]
    })
}

function eu(e) {
    let {
        detectedGame: t,
        onSetOfficialGuildInvite: i,
        officialGuildInvite: a,
        trackAction: r,
        onClose: c,
        applicationId: o
    } = e, d = l.useCallback(() => {
        c(), (0, b.closeUserProfileModal)()
    }, [c]), {
        analyticsLocations: m
    } = (0, A.Ay)(p.A.GAME_PROFILE), {
        isCloudPlayButtonShown: x,
        onCloudPlayClick: g
    } = eo({
        applicationId: o,
        analyticsLocations: m
    }), f = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, n.jsxs)("div", {
        className: s()(ee.Pn, q.fi, q.iH),
        children: [(0, n.jsxs)("div", {
            className: q.NC,
            children: [(0, n.jsx)(U.Y, {
                invite: a,
                trackClick: r,
                closeModal: d
            }), x && null != g && (0, n.jsx)(ec, {
                onClose: d,
                onCloudPlayClick: g,
                analyticsLocations: m
            })]
        }), (0, n.jsx)(h.Heading, {
            variant: "heading-md/bold",
            children: $.intl.string($.t.CI0vSJ)
        }), (0, n.jsxs)("div", {
            className: q.V0,
            children: [(0, n.jsx)(Z.A, {
                detectedGame: t,
                trackAction: r
            }), f && (0, n.jsx)(J.A, {
                websites: t.websites,
                reviews: t.reviews
            }), (0, n.jsx)(B.o, {
                detectedGame: t,
                trackClick: r,
                onInviteResolved: i,
                closeModal: d
            }), (0, n.jsx)(H.R, {
                detectedGame: t,
                trackClick: r
            }), (0, n.jsx)(X.v, {
                detectedGame: t
            }), (0, n.jsx)(h.Text, {
                variant: "text-xxs/normal",
                children: $.intl.format($.t.pch2Jw, {
                    igdbLink: Q.s8
                })
            })]
        })]
    })
}

function em(e) {
    let {
        applicationId: t,
        source: i,
        sourceUserId: a,
        transitionState: r,
        onClose: c,
        appContext: o,
        trackExternalAction: d
    } = e, {
        clientThemesClassName: u
    } = (0, N.Ay)(), m = (0, x.bG)([G.default], () => G.default.locale), g = l.useMemo(() => (0, k.u9)(), []), v = (0, x.yK)([M.A], () => (M.A.getSimilarGames(t) ?? []).slice(0, 25)), [p, A] = l.useState(null), I = (0, D.s)(t), [C, b] = l.useState(null), w = (0, _.h)(t), L = (0, x.bG)([T.A], () => T.A.getGame(t)), O = L?.name ?? w?.name, R = (e, n) => {
        (0, k.Tn)({
            gameName: O ?? "",
            applicationId: t,
            action: e,
            similarGameId: n,
            viewId: g,
            officialGuildId: C?.guild?.id,
            source: i
        })
    };
    return ((0, j.Ay)(() => {
        (0, k.rw)({
            source: i,
            viewId: g,
            applicationId: t,
            gameName: O ?? "",
            authorId: a,
            profileType: k.HV.FullProfile
        }), (0, E.He)()
    }), (0, _.A)(v), l.useEffect(() => {
        m.startsWith("en") || L?.summaryLocalized != null || f.A.getDetectableGamesSupplemental([t], {
            forceFetch: !0
        })
    }, [t, L?.summaryLocalized, m]), l.useEffect(() => {
        (async () => {
            if (0 === v.length) {
                A(null);
                try {
                    await (0, y.N)(t)
                } catch (e) {
                    A(e)
                }
            }
        })()
    }, [t, v]), (0, j.Ay)(() => () => {
        let e = Date.now(),
            i = I.map(t => {
                let i = (0, S.JM)(t) ? (0, S.W6)(t, e) : (0, S.aJ)(t, m);
                return JSON.stringify({
                    item_id: t.id,
                    trait: t.traits,
                    time_played: i
                })
            });
        (0, k.V_)({
            viewId: g,
            applicationId: t,
            gameName: O ?? "",
            playedFriendIds: I.map(e => e.author_id),
            playedFriendsData: i,
            similarGames: v.filter(Y.oS).slice(0, 5),
            officialGuildId: C?.guild?.id
        })
    }), null == L || null == w) ? null : (0, n.jsx)(h.dWK, {
        transitionState: r,
        onClose: c,
        size: "xl",
        children: (0, n.jsxs)("div", {
            className: s()(u, q.fn),
            children: [(0, n.jsxs)(h.HOs, {
                orientation: "auto",
                children: [(0, n.jsx)(en, {
                    detectedGame: L,
                    application: w,
                    entries: I,
                    trackAction: R
                }), (0, n.jsx)(h.Fmo, {
                    children: (0, n.jsxs)("div", {
                        className: s()(q.Qs, q.rb),
                        children: [(0, n.jsx)(ea, {
                            detectedGame: L,
                            application: w,
                            entries: I,
                            officialGuildInvite: C,
                            similarGames: v,
                            similarGamesError: p,
                            onClose: c,
                            viewId: g,
                            trackAction: R,
                            source: i
                        }), (0, n.jsx)(ed, {
                            detectedGame: L,
                            onSetOfficialGuildInvite: b,
                            officialGuildInvite: C,
                            trackAction: R,
                            onClose: c,
                            appContext: o,
                            applicationId: t,
                            source: i,
                            trackExternalAction: d
                        })]
                    })
                })]
            }), (0, n.jsx)(eg, {})]
        })
    })
}

function ex(e) {
    let {
        applicationId: t,
        source: i,
        sourceUserId: a,
        transitionState: r,
        onClose: c,
        appContext: o,
        trackExternalAction: u
    } = e, {
        clientThemesClassName: m
    } = (0, N.Ay)(), g = (0, x.bG)([G.default], () => G.default.locale), v = l.useMemo(() => (0, k.u9)(), []), p = (0, D.s)(t), [A, I] = l.useState(null), C = (0, _.h)(t), b = (0, x.bG)([T.A], () => T.A.getGame(t)), w = b?.name ?? C?.name, L = (e, n) => {
        (0, k.Tn)({
            gameName: w ?? "",
            applicationId: t,
            action: e,
            similarGameId: n,
            viewId: v,
            officialGuildId: A?.guild?.id,
            source: i
        })
    };
    (0, j.Ay)(() => {
        (0, k.rw)({
            source: i,
            viewId: v,
            applicationId: t,
            gameName: w ?? "",
            authorId: a,
            profileType: k.HV.FullProfile
        }), (0, E.He)()
    }), l.useEffect(() => {
        g.startsWith("en") || b?.summaryLocalized != null || f.A.getDetectableGamesSupplemental([t], {
            forceFetch: !0
        })
    }, [t, b?.summaryLocalized, g]), (0, j.Ay)(() => () => {
        let e = Date.now(),
            i = p.map(t => {
                let i = (0, S.JM)(t) ? (0, S.W6)(t, e) : (0, S.aJ)(t, g);
                return JSON.stringify({
                    item_id: t.id,
                    trait: t.traits,
                    time_played: i
                })
            });
        (0, k.V_)({
            viewId: v,
            applicationId: t,
            gameName: w ?? "",
            playedFriendIds: p.map(e => e.author_id),
            playedFriendsData: i,
            similarGames: [],
            officialGuildId: A?.guild?.id
        })
    });
    let [O, R] = l.useState("two-column"), y = l.useCallback(e => {
        e.contentRect.width < 800 ? R("one-column") : R("two-column")
    }, []), M = (0, d.w)(y, [], {
        fireOnMount: !0
    });
    return null == b || null == C ? null : (0, n.jsx)(h.dWK, {
        transitionState: r,
        onClose: c,
        size: "xxl",
        children: (0, n.jsxs)("div", {
            className: s()(m, "two-column" === O ? ee.bo : ee.Rm),
            ref: M,
            children: [(0, n.jsxs)(h.HOs, {
                orientation: "auto",
                children: [(0, n.jsx)(el, {
                    detectedGame: b,
                    application: C,
                    entries: p,
                    trackAction: L
                }), (0, n.jsx)(h.Fmo, {
                    children: "two-column" === O ? (0, n.jsxs)("div", {
                        className: s()(ee.Qs, ee.jC),
                        children: [(0, n.jsx)(es, {
                            detectedGame: b,
                            trackAction: L
                        }), (0, n.jsx)(eu, {
                            detectedGame: b,
                            onSetOfficialGuildInvite: I,
                            officialGuildInvite: A,
                            trackAction: L,
                            onClose: c,
                            appContext: o,
                            applicationId: t,
                            source: i,
                            trackExternalAction: u
                        })]
                    }) : (0, n.jsx)("div", {
                        className: s()(ee.Qs, ee.b9),
                        children: (0, n.jsx)(er, {
                            detectedGame: b,
                            trackAction: L
                        })
                    })
                })]
            }), (0, n.jsx)(eg, {})]
        })
    })
}

function eg() {
    let {
        enabled: e,
        canToggle: t
    } = P.z.useConfig({
        location: "GameProfileModal"
    }), i = l.useContext(ei);
    return null != i && e && t ? (0, n.jsx)("div", {
        style: {
            position: "absolute",
            top: 0,
            left: 0,
            transform: "scale(0.5) translate(-50%, -50%)"
        },
        children: (0, n.jsx)(h.Button, {
            variant: "primary",
            onClick: () => i.setIsShowingGameProfileV2(e => !e),
            text: "Toggle Game Profile V1 and V2"
        })
    }) : null
}
let eh = function(e) {
    let {
        enabled: t
    } = P.z.useConfig({
        location: "GameProfileModal"
    }), [i, a] = l.useState(t);
    return (0, n.jsx)(ei.Provider, {
        value: {
            setIsShowingGameProfileV2: a
        },
        children: i ? (0, n.jsx)(ex, {
            ...e
        }) : (0, n.jsx)(em, {
            ...e
        })
    })
}