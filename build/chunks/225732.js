/** chunk id: 225732 params = (module,exports,require) **/
n.d(t, {
    default: () => eI
});
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(989349),
    o = n.n(s),
    c = n(110259),
    d = n(535185),
    u = n(792216),
    m = n(379834),
    f = n(311907),
    h = n(990078),
    x = n(521489),
    g = n(397927),
    p = n(964486),
    _ = n(359549),
    v = n(793574),
    A = n(688810),
    b = n(139286),
    E = n(362490),
    j = n(429913),
    I = n(590703),
    C = n(708197),
    N = n(583846),
    S = n(454908),
    T = n(928550),
    y = n(657331),
    L = n(773669),
    k = n(486020),
    R = n(541830),
    O = n(661191),
    M = n(240248),
    G = n(409626),
    w = n(880405),
    P = n(422069),
    V = n(476464),
    D = n(205184),
    W = n(939764),
    U = n(277089),
    F = n(611656),
    B = n(459746),
    Y = n(503364),
    H = n(305080),
    z = n(941568),
    K = n(814698),
    X = n(431040),
    J = n(976720),
    Z = n(313843),
    $ = n(286737),
    Q = n(839671),
    q = n(94836),
    ee = n(392332),
    et = n(639714),
    en = n(310721),
    el = n(922283),
    ea = n(588260),
    ei = n(582942),
    er = n(999450),
    es = n(285820),
    eo = n(771004),
    ec = n(424994),
    ed = n(985018),
    eu = n(141535),
    em = n(952311);
let ef = () => (0, l.jsxs)("div", {
    className: eu.uv,
    children: [(0, l.jsx)(g.Y3C, {
        size: "xxs"
    }), (0, l.jsx)(g.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: ed.intl.string(ed.t.kAlUsy)
    })]
});

function eh(e) {
    let {
        game: t,
        application: n,
        entries: i,
        trackAction: s
    } = e, c = a.useMemo(() => t?.genres.map(R.du).join(", "), [t]), [d] = a.useState(() => Math.random()), u = a.useMemo(() => {
        if (null == t) return "";
        if (null != t.bannerHash) return k.Ay.getGameAssetURL({
            id: t.id,
            hash: t.bannerHash,
            size: 2048,
            keepAspectRatio: !0
        }) ?? "";
        let e = t.getArtworkURLs(),
            n = t.screenshotUrls ?? [];
        if (e.length > 0) {
            let t = Math.floor(d * e.length);
            return e[t]
        }
        if (n.length > 0) {
            let e = Math.floor(d * n.length);
            return n[e]
        }
        return ""
    }, [t, d]), f = (0, M.uJ)(t.iconHash) ? n?.getIconURL(160, k.QB ? "webp" : "png") : k.Ay.getGameAssetURL({
        id: t.id,
        hash: t.iconHash,
        size: 160,
        format: k.QB ? "webp" : "png"
    }), h = O.default.extractTimestamp(n.id), x = 7 >= o()().diff(o()(h), "days"), p = i.some(e => (0, N.CZ)(e) === m.m.GLOBAL), _ = t.name ?? n?.name;
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
            className: eu.is,
            style: {
                backgroundImage: `url("${u}")`
            }
        }), (0, l.jsxs)("div", {
            className: r()(eu.Qs, eu.fi, eu.iH, eu.Se),
            children: [(0, l.jsxs)("div", {
                className: eu.xx,
                children: [(0, l.jsx)("div", {
                    className: eu.bb,
                    children: (0, l.jsx)(B.A, {
                        game: t,
                        application: n,
                        className: eu.wm,
                        size: B.w.LARGE
                    })
                }), (0, l.jsx)(Y.A, {
                    applicationId: n.id,
                    className: eu.Gg,
                    trackAction: s
                })]
            }), (0, l.jsx)("div", {
                className: r()(eu.nM, eu.Lc, eu.Z3),
                children: (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(g.Heading, {
                        variant: "heading-xl/bold",
                        children: _
                    }), (0, l.jsxs)("div", {
                        className: r()(eu.nM, eu.Lc),
                        children: [null != f && (0, l.jsx)("img", {
                            className: eu.Gt,
                            src: f,
                            height: 16,
                            alt: ed.intl.formatToPlainString(ed.t["nh+jWk"], {
                                game: _
                            })
                        }), (0, l.jsx)(g.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            children: c
                        }), x && (0, l.jsx)(g.Text, {
                            variant: "eyebrow",
                            className: eu.Ad,
                            children: ed.intl.string(ed.t.y2b7CA)
                        }), p && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(g.Text, {
                                variant: "text-sm/medium",
                                children: " \xb7 "
                            }), (0, l.jsx)(ef, {})]
                        })]
                    })]
                })
            })]
        })]
    })
}

function ex(e) {
    let {
        game: t,
        application: n,
        entries: a,
        officialGuildInvite: i,
        similarGames: r,
        similarGamesError: s,
        onClose: o,
        viewId: c,
        trackAction: d,
        source: u
    } = e;
    return (0, l.jsxs)("div", {
        className: eu.V0,
        children: [(0, l.jsx)(ee.A, {
            entries: a,
            viewId: c,
            officialGuildId: i?.guild?.id,
            onClose: o,
            source: u
        }), (0, l.jsx)(q.A, {
            game: t,
            trackAction: d
        }), (0, l.jsx)(ei.A, {
            applicationId: n.id,
            onClose: o,
            similarGames: r,
            similarGamesError: s,
            trackAction: d
        })]
    })
}

function eg(e) {
    let {
        game: t,
        trackAction: n,
        closeModal: a
    } = e;
    return (0, l.jsxs)("div", {
        className: em.oC,
        children: [(0, l.jsxs)("div", {
            className: em.lM,
            children: [(0, l.jsx)(q.a, {
                game: t,
                trackAction: n
            }), (0, l.jsx)(eo.A, {
                game: t,
                trackAction: n
            })]
        }), (0, l.jsx)(z.A, {
            gameId: t.id,
            trackAction: n
        }), (0, l.jsx)(er.A, {
            trackAction: n
        }), (0, l.jsx)(ea.A, {
            game: t,
            closeModal: a,
            trackAction: n
        })]
    })
}

function ep(e) {
    let {
        game: t,
        trackAction: n,
        application: a,
        analyticsLocations: i
    } = e, r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED, {
        closeModal: s
    } = (0, H.c)();
    return (0, l.jsxs)("div", {
        className: eu.V0,
        children: [(0, l.jsx)(q.a, {
            game: t,
            trackAction: n
        }), (0, l.jsxs)("div", {
            className: em.gr,
            children: [(0, l.jsx)(Z.QT, {
                game: t,
                application: a,
                isTwoColumn: !1
            }), (0, l.jsxs)("div", {
                className: em.E1,
                children: [(0, l.jsx)(es.A, {
                    game: t,
                    trackAction: n
                }), (0, l.jsx)(eo.A, {
                    game: t,
                    trackAction: n
                })]
            })]
        }), (0, l.jsx)($.A, {
            analyticsLocations: i,
            trackAction: n
        }), (0, l.jsx)(et.o, {
            closeModal: s,
            trackAction: n
        }), (0, l.jsx)(z.A, {
            gameId: t.id,
            trackAction: n
        }), (0, l.jsx)(er.A, {
            trackAction: n
        }), (0, l.jsx)(ea.A, {
            game: t,
            closeModal: s,
            trackAction: n
        }), r && (0, l.jsx)(el.A, {
            game: t,
            trackAction: n
        }), (0, l.jsx)(X.A, {
            application: a,
            game: t,
            trackAction: n
        })]
    })
}

function e_(e) {
    let {
        onClose: t,
        onCloudPlayClick: n,
        analyticsLocations: i,
        trackAction: r
    } = e;
    (0, b.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: {
            location_stack: i
        }
    });
    let s = a.useCallback(() => {
        r(G.Ws.CloudPlay), t(), n()
    }, [t, n, r]);
    return (0, l.jsx)(h.m, {
        text: ed.intl.string(ed.t.JVwWva),
        position: "top",
        children: (0, l.jsx)(g.Button, {
            icon: g.hpF,
            text: ed.intl.string(ed.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: s,
            fullWidth: !0
        })
    })
}

function ev(e) {
    let {
        applicationId: t,
        analyticsLocations: n
    } = e, l = (0, j.h)(t), a = (0, _.A)({
        application: l,
        analyticsLocations: n
    });
    return {
        onCloudPlayClick: a,
        isCloudPlayButtonShown: !(0, T.L)(t) && null != a
    }
}

function eA(e) {
    let {
        game: t,
        onSetOfficialGuildInvite: n,
        officialGuildInvite: i,
        trackAction: s,
        onClose: o,
        application: c,
        analyticsLocations: d
    } = e, u = a.useCallback(() => {
        o(), (0, y.closeUserProfileModal)()
    }, [o]), {
        isCloudPlayButtonShown: m,
        onCloudPlayClick: f
    } = ev({
        applicationId: c.id,
        analyticsLocations: d
    });
    return (0, l.jsxs)("div", {
        className: r()(eu.pz, eu.fi, eu.iH),
        children: [(0, l.jsxs)("div", {
            className: eu.NC,
            children: [(0, l.jsx)(J.A, {
                invite: i,
                closeModal: u,
                trackAction: s
            }), m && null != f && (0, l.jsx)(e_, {
                onClose: u,
                onCloudPlayClick: f,
                analyticsLocations: d,
                trackAction: s
            })]
        }), (0, l.jsx)(g.Heading, {
            variant: "heading-md/bold",
            children: ed.intl.string(ed.t.CI0vSJ)
        }), (0, l.jsxs)("div", {
            className: eu.V0,
            children: [(0, l.jsx)(eo.h, {
                game: t,
                trackAction: s
            }), (0, l.jsx)(et.A, {
                game: t,
                onInviteResolved: n,
                closeModal: u,
                trackAction: s
            }), (0, l.jsx)(Q.A, {
                game: t,
                trackAction: s
            }), (0, l.jsx)(en.A, {
                game: t
            }), (0, l.jsx)(K.A, {
                application: c,
                trackAction: s
            }), (0, l.jsx)(g.Text, {
                variant: "text-xxs/normal",
                children: ed.intl.format(ed.t.pch2Jw, {
                    igdbLink: ec.s8
                })
            })]
        })]
    })
}

function eb(e) {
    let {
        game: t,
        trackAction: n,
        application: a,
        analyticsLocations: i
    } = e, {
        closeModal: s
    } = (0, H.c)(), {
        isCloudPlayButtonShown: o,
        onCloudPlayClick: c
    } = ev({
        applicationId: a.id,
        analyticsLocations: i
    }), {
        showsStoreLinks: d
    } = (0, es.D)(t), m = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, l.jsxs)("div", {
        className: r()(em.Pn, eu.fi, eu.iH, d ? em.sV : em.gF),
        children: [o && null != c ? (0, l.jsx)("div", {
            className: eu.NC,
            children: (0, l.jsx)(e_, {
                onClose: s,
                onCloudPlayClick: c,
                analyticsLocations: i,
                trackAction: n
            })
        }) : null, (0, l.jsxs)("div", {
            className: eu.V0,
            children: [(0, l.jsx)(es.A, {
                game: t,
                trackAction: n
            }), (0, l.jsx)($.A, {
                analyticsLocations: i,
                trackAction: n
            }), (0, l.jsx)(et.o, {
                closeModal: s,
                trackAction: n
            }), m && (0, l.jsx)(el.A, {
                game: t,
                trackAction: n
            }), (0, l.jsx)(X.A, {
                application: a,
                game: t,
                trackAction: n
            })]
        })]
    })
}

function eE(e) {
    let {
        applicationId: t,
        source: n,
        sourceUserId: i,
        transitionState: s,
        onClose: o,
        appContext: c,
        trackExternalAction: d
    } = e, {
        clientThemesClassName: u
    } = (0, I.Ay)(), m = (0, f.bG)([L.default], () => L.default.locale), {
        analyticsLocations: h
    } = (0, A.Ay)(v.A.GAME_PROFILE), x = a.useMemo(() => (0, G.u9)(), []), _ = (0, f.yK)([P.A], () => (P.A.getSimilarGames(t) ?? []).slice(0, 25)), [b, E] = a.useState(null), T = (0, D.s)(t), [y, k] = a.useState(null), R = (0, j.h)(t), {
        data: O,
        refetch: M
    } = (0, S.I)(t), V = O?.name ?? R?.name, W = (e, l) => {
        (0, G.Tn)({
            gameName: V ?? "",
            applicationId: t,
            action: e,
            similarGameId: l,
            viewId: x,
            officialGuildId: y?.guild?.id,
            source: n
        })
    };
    return ((0, p.Ay)(() => {
        (0, G.rw)({
            source: n,
            viewId: x,
            applicationId: t,
            gameName: V ?? "",
            authorId: i,
            profileType: G.HV.FullProfile
        }), (0, C.He)()
    }), (0, j.A)(_), a.useEffect(() => {
        m.startsWith("en") || O?.summaryLocalized != null || M()
    }, [t, O?.summaryLocalized, m, M]), a.useEffect(() => {
        (async () => {
            if (0 === _.length) {
                E(null);
                try {
                    await (0, w.NP)(t)
                } catch (e) {
                    E(e)
                }
            }
        })()
    }, [t, _]), (0, p.Ay)(() => () => {
        let e = Date.now(),
            n = T.map(t => {
                let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, m);
                return JSON.stringify({
                    item_id: t.id,
                    trait: t.traits,
                    time_played: n
                })
            });
        (0, G.V_)({
            viewId: x,
            applicationId: t,
            gameName: V ?? "",
            playedFriendIds: T.map(e => e.author_id),
            playedFriendsData: n,
            similarGames: _.filter(F.oS).slice(0, 5),
            officialGuildId: y?.guild?.id
        })
    }), null == O || null == R) ? null : (0, l.jsx)(A.f5, {
        value: h,
        children: (0, l.jsx)(g.dWK, {
            transitionState: s,
            onClose: o,
            size: "xl",
            children: (0, l.jsx)("div", {
                className: r()(u, eu.fn),
                children: (0, l.jsxs)(g.HOs, {
                    orientation: "auto",
                    children: [(0, l.jsx)(eh, {
                        game: O,
                        application: R,
                        entries: T,
                        trackAction: W
                    }), (0, l.jsx)(g.Fmo, {
                        children: (0, l.jsxs)("div", {
                            className: r()(eu.Qs, eu.rb),
                            children: [(0, l.jsx)(ex, {
                                game: O,
                                application: R,
                                entries: T,
                                officialGuildInvite: y,
                                similarGames: _,
                                similarGamesError: b,
                                onClose: o,
                                viewId: x,
                                source: n,
                                trackAction: W
                            }), (0, l.jsx)(eA, {
                                game: O,
                                onSetOfficialGuildInvite: k,
                                officialGuildInvite: y,
                                onClose: o,
                                appContext: c,
                                application: R,
                                source: n,
                                trackExternalAction: d,
                                trackAction: W,
                                analyticsLocations: h
                            })]
                        })
                    })]
                })
            })
        })
    })
}

function ej(e) {
    let {
        applicationId: t,
        source: n,
        sourceUserId: i,
        transitionState: s,
        onClose: o,
        appContext: c,
        trackExternalAction: u,
        initialScrollOffset: m
    } = e, [h, _] = a.useState(!0), [b, T] = a.useState(null), {
        clientThemesClassName: k
    } = (0, I.Ay)(), R = (0, f.bG)([L.default], () => L.default.locale), O = a.useMemo(() => (0, G.u9)(), []), {
        analyticsLocations: M
    } = (0, A.Ay)(v.A.GAME_PROFILE), w = (0, j.h)(t), P = (0, D.s)(t), {
        data: V
    } = (0, S.I)(t), F = V?.name ?? w?.name ?? "", {
        hasAlreadyLinked: B,
        canStartAuthorization: Y,
        fetched: z,
        startAuthorization: K,
        connectionApp: X
    } = (0, E.RD)(w), {
        invite: J,
        isMember: $
    } = (0, U.A)(V, T), {
        socialLayerStorefrontRecommendationsData: Q
    } = (0, W.V)(w ?? null), q = (e, l) => {
        (0, G.Tn)({
            gameName: F,
            applicationId: t,
            action: e,
            similarGameId: l,
            viewId: O,
            officialGuildId: b?.guild?.id,
            source: n
        })
    };
    (0, p.Ay)(() => {
        (0, G.rw)({
            source: n,
            viewId: O,
            applicationId: t,
            gameName: F,
            authorId: i,
            profileType: G.HV.FullProfile
        }), (0, C.He)()
    }), (0, p.Ay)(() => () => {
        let e = Date.now(),
            n = P.map(t => {
                let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, R);
                return JSON.stringify({
                    item_id: t.id,
                    trait: t.traits,
                    time_played: n
                })
            });
        (0, G.V_)({
            viewId: O,
            applicationId: t,
            gameName: F,
            playedFriendIds: P.map(e => e.author_id),
            playedFriendsData: n,
            similarGames: [],
            officialGuildId: b?.guild?.id
        })
    });
    let ee = a.useCallback(e => {
            _(e.contentRect.width >= 800)
        }, []),
        et = (0, d.w)(ee, [], {
            fireOnMount: !0
        }),
        en = a.useCallback(() => {
            o(), (0, y.closeUserProfileModal)()
        }, [o]),
        el = a.useRef(null),
        ea = a.useCallback(() => el.current?.getScrollerNode()?.scrollTop ?? 0, []),
        ei = a.useMemo(() => ({
            application: w,
            isTwoColumn: h,
            canStartAuthorization: Y,
            hasAlreadyLinked: B,
            fetchedAuthorization: z,
            startAuthorization: K,
            connectionApp: X,
            officialInvite: J,
            isMember: $,
            socialLayerStorefrontRecommendationsData: Q,
            closeModal: en,
            getScrollOffset: ea
        }), [w, h, Y, B, z, K, X, J, $, Q, en, ea]),
        er = a.useCallback(() => {
            o(), (0, y.closeUserProfileModal)()
        }, [o]),
        [es, eo] = a.useState(!1),
        [ec, ed] = a.useState(150),
        eu = a.useRef(null);
    a.useEffect(() => {
        null != m && m > 0 && el.current?.getScrollerNode()?.scrollTo({
            top: m,
            behavior: "instant"
        })
    }, []);
    let ef = a.useCallback(e => {
        let t = e.currentTarget.scrollTop;
        if (null != eu.current) {
            let e = Math.max(0, 1 - t / 150);
            eu.current.style.opacity = String(e)
        }
        eo(t >= ec)
    }, [ec]);
    return null == V || null == w ? null : (0, l.jsx)(A.f5, {
        value: M,
        children: (0, l.jsx)(x.N, {
            transitionState: s,
            onClose: o,
            children: (0, l.jsx)(H.D.Provider, {
                value: ei,
                children: (0, l.jsxs)("div", {
                    className: r()(k, em.kL),
                    ref: et,
                    children: [(0, l.jsx)(Z.j5, {
                        game: V,
                        ref: eu
                    }), (0, l.jsx)(Z._R, {
                        game: V,
                        application: w,
                        show: es,
                        onClose: er,
                        trackAction: q
                    }), (0, l.jsx)(Z.Iv, {
                        show: es
                    }), (0, l.jsxs)(g.ChK, {
                        ref: el,
                        onScroll: ef,
                        children: [(0, l.jsx)(Z.Ay, {
                            game: V,
                            application: w,
                            onSetCompactBarScrollThreshold: ed,
                            showCompactBar: es
                        }), (0, l.jsx)(g.Fmo, {
                            children: h ? (0, l.jsxs)("div", {
                                className: em.jC,
                                children: [(0, l.jsx)(eg, {
                                    game: V,
                                    closeModal: er,
                                    trackAction: q
                                }), (0, l.jsx)(eb, {
                                    game: V,
                                    application: w,
                                    appContext: c,
                                    source: n,
                                    trackExternalAction: u,
                                    trackAction: q,
                                    analyticsLocations: M
                                })]
                            }) : (0, l.jsx)("div", {
                                className: em.b9,
                                children: (0, l.jsx)(ep, {
                                    game: V,
                                    application: w,
                                    trackAction: q,
                                    analyticsLocations: M
                                })
                            })
                        })]
                    })]
                })
            })
        })
    })
}
let eI = function(e) {
    let t = (0, V._)("GameProfileModal");
    return e.forceV2 || t ? (0, l.jsx)(ej, {
        ...e
    }) : (0, l.jsx)(eE, {
        ...e
    })
}