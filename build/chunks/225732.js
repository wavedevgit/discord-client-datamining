/** chunk id: 225732 params = (module,exports,require) **/
n.d(t, {
    default: () => eI
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(989349),
    o = n.n(s),
    c = n(110259),
    d = n(535185),
    u = n(792216),
    m = n(379834),
    x = n(311907),
    h = n(990078),
    f = n(521489),
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
    y = n(928550),
    T = n(657331),
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
    U = n(939764),
    W = n(277089),
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
    ea = n(922283),
    el = n(588260),
    ei = n(582942),
    er = n(999450),
    es = n(285820),
    eo = n(771004),
    ec = n(424994),
    ed = n(985018),
    eu = n(282063),
    em = n(213863);
let ex = () => (0, a.jsxs)("div", {
    className: eu.uv,
    children: [(0, a.jsx)(g.Y3C, {
        size: "xxs"
    }), (0, a.jsx)(g.Text, {
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
    } = e, c = l.useMemo(() => t?.genres.map(R.du).join(", "), [t]), [d] = l.useState(() => Math.random()), u = l.useMemo(() => {
        if (null == t) return "";
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
    }, [t, d]), x = (0, M.uJ)(t.iconHash) ? n?.getIconURL(160, k.QB ? "webp" : "png") : k.Ay.getGameAssetURL({
        id: t.id,
        hash: t.iconHash,
        size: 160,
        format: k.QB ? "webp" : "png"
    }), h = O.default.extractTimestamp(n.id), f = 7 >= o()().diff(o()(h), "days"), p = i.some(e => (0, N.CZ)(e) === m.m.GLOBAL), _ = t.name ?? n?.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
            className: eu.is,
            style: {
                backgroundImage: `url("${u}")`
            }
        }), (0, a.jsxs)("div", {
            className: r()(eu.Qs, eu.fi, eu.iH, eu.Se),
            children: [(0, a.jsxs)("div", {
                className: eu.xx,
                children: [(0, a.jsx)("div", {
                    className: eu.bb,
                    children: (0, a.jsx)(B.A, {
                        game: t,
                        application: n,
                        className: eu.wm,
                        size: B.w.LARGE
                    })
                }), (0, a.jsx)(Y.A, {
                    applicationId: n.id,
                    className: eu.Gg,
                    trackAction: s
                })]
            }), (0, a.jsx)("div", {
                className: r()(eu.nM, eu.Lc, eu.Z3),
                children: (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(g.Heading, {
                        variant: "heading-xl/bold",
                        children: _
                    }), (0, a.jsxs)("div", {
                        className: r()(eu.nM, eu.Lc),
                        children: [null != x && (0, a.jsx)("img", {
                            className: eu.Gt,
                            src: x,
                            height: 16,
                            alt: ed.intl.formatToPlainString(ed.t["nh+jWk"], {
                                game: _
                            })
                        }), (0, a.jsx)(g.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            children: c
                        }), f && (0, a.jsx)(g.Text, {
                            variant: "eyebrow",
                            className: eu.Ad,
                            children: ed.intl.string(ed.t.y2b7CA)
                        }), p && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(g.Text, {
                                variant: "text-sm/medium",
                                children: " \xb7 "
                            }), (0, a.jsx)(ex, {})]
                        })]
                    })]
                })
            })]
        })]
    })
}

function ef(e) {
    let {
        game: t,
        application: n,
        entries: l,
        officialGuildInvite: i,
        similarGames: r,
        similarGamesError: s,
        onClose: o,
        viewId: c,
        trackAction: d,
        source: u
    } = e;
    return (0, a.jsxs)("div", {
        className: eu.V0,
        children: [(0, a.jsx)(ee.A, {
            entries: l,
            viewId: c,
            officialGuildId: i?.guild?.id,
            onClose: o,
            source: u
        }), (0, a.jsx)(q.A, {
            game: t,
            trackAction: d
        }), (0, a.jsx)(ei.A, {
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
        closeModal: l
    } = e;
    return (0, a.jsxs)("div", {
        className: em.oC,
        children: [(0, a.jsxs)("div", {
            className: em.lM,
            children: [(0, a.jsx)(q.a, {
                game: t,
                trackAction: n
            }), (0, a.jsx)(eo.A, {
                game: t,
                trackAction: n
            })]
        }), (0, a.jsx)(z.A, {
            gameId: t.id,
            trackAction: n
        }), (0, a.jsx)(er.A, {
            trackAction: n
        }), (0, a.jsx)(el.A, {
            game: t,
            closeModal: l,
            trackAction: n
        })]
    })
}

function ep(e) {
    let {
        game: t,
        trackAction: n,
        application: l,
        analyticsLocations: i
    } = e, r = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED, {
        closeModal: s
    } = (0, H.c)();
    return (0, a.jsxs)("div", {
        className: eu.V0,
        children: [(0, a.jsx)(q.a, {
            game: t,
            trackAction: n
        }), (0, a.jsxs)("div", {
            className: em.gr,
            children: [(0, a.jsx)(Z.QT, {
                game: t,
                application: l,
                isTwoColumn: !1
            }), (0, a.jsxs)("div", {
                className: em.E1,
                children: [(0, a.jsx)(es.A, {
                    game: t,
                    trackAction: n
                }), (0, a.jsx)(eo.A, {
                    game: t,
                    trackAction: n
                })]
            })]
        }), (0, a.jsx)($.A, {
            analyticsLocations: i,
            trackAction: n
        }), (0, a.jsx)(et.o, {
            closeModal: s,
            trackAction: n
        }), (0, a.jsx)(z.A, {
            gameId: t.id,
            trackAction: n
        }), (0, a.jsx)(er.A, {
            trackAction: n
        }), (0, a.jsx)(el.A, {
            game: t,
            closeModal: s,
            trackAction: n
        }), r && (0, a.jsx)(ea.A, {
            game: t,
            trackAction: n
        }), (0, a.jsx)(X.A, {
            application: l,
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
    let s = l.useCallback(() => {
        r(G.Ws.CloudPlay), t(), n()
    }, [t, n, r]);
    return (0, a.jsx)(h.m, {
        text: ed.intl.string(ed.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(g.Button, {
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
    } = e, a = (0, j.h)(t), l = (0, _.A)({
        application: a,
        analyticsLocations: n
    });
    return {
        onCloudPlayClick: l,
        isCloudPlayButtonShown: !(0, y.L)(t) && null != l
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
    } = e, u = l.useCallback(() => {
        o(), (0, T.closeUserProfileModal)()
    }, [o]), {
        isCloudPlayButtonShown: m,
        onCloudPlayClick: x
    } = ev({
        applicationId: c.id,
        analyticsLocations: d
    });
    return (0, a.jsxs)("div", {
        className: r()(eu.pz, eu.fi, eu.iH),
        children: [(0, a.jsxs)("div", {
            className: eu.NC,
            children: [(0, a.jsx)(J.A, {
                invite: i,
                closeModal: u,
                trackAction: s
            }), m && null != x && (0, a.jsx)(e_, {
                onClose: u,
                onCloudPlayClick: x,
                analyticsLocations: d,
                trackAction: s
            })]
        }), (0, a.jsx)(g.Heading, {
            variant: "heading-md/bold",
            children: ed.intl.string(ed.t.CI0vSJ)
        }), (0, a.jsxs)("div", {
            className: eu.V0,
            children: [(0, a.jsx)(eo.h, {
                game: t,
                trackAction: s
            }), (0, a.jsx)(et.A, {
                game: t,
                onInviteResolved: n,
                closeModal: u,
                trackAction: s
            }), (0, a.jsx)(Q.A, {
                game: t,
                trackAction: s
            }), (0, a.jsx)(en.A, {
                game: t
            }), (0, a.jsx)(K.A, {
                application: c,
                trackAction: s
            }), (0, a.jsx)(g.Text, {
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
        application: l,
        analyticsLocations: i
    } = e, {
        closeModal: s
    } = (0, H.c)(), {
        isCloudPlayButtonShown: o,
        onCloudPlayClick: c
    } = ev({
        applicationId: l.id,
        analyticsLocations: i
    }), {
        showsStoreLinks: d
    } = (0, es.D)(t), m = t.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: r()(em.Pn, eu.fi, eu.iH, d ? em.sV : em.gF),
        children: [o && null != c ? (0, a.jsx)("div", {
            className: eu.NC,
            children: (0, a.jsx)(e_, {
                onClose: s,
                onCloudPlayClick: c,
                analyticsLocations: i,
                trackAction: n
            })
        }) : null, (0, a.jsxs)("div", {
            className: eu.V0,
            children: [(0, a.jsx)(es.A, {
                game: t,
                trackAction: n
            }), (0, a.jsx)($.A, {
                analyticsLocations: i,
                trackAction: n
            }), (0, a.jsx)(et.o, {
                closeModal: s,
                trackAction: n
            }), m && (0, a.jsx)(ea.A, {
                game: t,
                trackAction: n
            }), (0, a.jsx)(X.A, {
                application: l,
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
    } = (0, I.Ay)(), m = (0, x.bG)([L.default], () => L.default.locale), {
        analyticsLocations: h
    } = (0, A.Ay)(v.A.GAME_PROFILE), f = l.useMemo(() => (0, G.u9)(), []), _ = (0, x.yK)([P.A], () => (P.A.getSimilarGames(t) ?? []).slice(0, 25)), [b, E] = l.useState(null), y = (0, D.s)(t), [T, k] = l.useState(null), R = (0, j.h)(t), {
        data: O,
        refetch: M
    } = (0, S.I)(t), V = O?.name ?? R?.name, U = (e, a) => {
        (0, G.Tn)({
            gameName: V ?? "",
            applicationId: t,
            action: e,
            similarGameId: a,
            viewId: f,
            officialGuildId: T?.guild?.id,
            source: n
        })
    };
    return ((0, p.Ay)(() => {
        (0, G.rw)({
            source: n,
            viewId: f,
            applicationId: t,
            gameName: V ?? "",
            authorId: i,
            profileType: G.HV.FullProfile
        }), (0, C.He)()
    }), (0, j.A)(_), l.useEffect(() => {
        m.startsWith("en") || O?.summaryLocalized != null || M()
    }, [t, O?.summaryLocalized, m, M]), l.useEffect(() => {
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
            n = y.map(t => {
                let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, m);
                return JSON.stringify({
                    item_id: t.id,
                    trait: t.traits,
                    time_played: n
                })
            });
        (0, G.V_)({
            viewId: f,
            applicationId: t,
            gameName: V ?? "",
            playedFriendIds: y.map(e => e.author_id),
            playedFriendsData: n,
            similarGames: _.filter(F.oS).slice(0, 5),
            officialGuildId: T?.guild?.id
        })
    }), null == O || null == R) ? null : (0, a.jsx)(A.f5, {
        value: h,
        children: (0, a.jsx)(g.dWK, {
            transitionState: s,
            onClose: o,
            size: "xl",
            children: (0, a.jsx)("div", {
                className: r()(u, eu.fn),
                children: (0, a.jsxs)(g.HOs, {
                    orientation: "auto",
                    children: [(0, a.jsx)(eh, {
                        game: O,
                        application: R,
                        entries: y,
                        trackAction: U
                    }), (0, a.jsx)(g.Fmo, {
                        children: (0, a.jsxs)("div", {
                            className: r()(eu.Qs, eu.rb),
                            children: [(0, a.jsx)(ef, {
                                game: O,
                                application: R,
                                entries: y,
                                officialGuildInvite: T,
                                similarGames: _,
                                similarGamesError: b,
                                onClose: o,
                                viewId: f,
                                source: n,
                                trackAction: U
                            }), (0, a.jsx)(eA, {
                                game: O,
                                onSetOfficialGuildInvite: k,
                                officialGuildInvite: T,
                                onClose: o,
                                appContext: c,
                                application: R,
                                source: n,
                                trackExternalAction: d,
                                trackAction: U,
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
        trackExternalAction: u
    } = e, [m, h] = l.useState(!0), [_, b] = l.useState(null), {
        clientThemesClassName: y
    } = (0, I.Ay)(), k = (0, x.bG)([L.default], () => L.default.locale), R = l.useMemo(() => (0, G.u9)(), []), {
        analyticsLocations: O
    } = (0, A.Ay)(v.A.GAME_PROFILE), M = (0, j.h)(t), w = (0, D.s)(t), {
        data: P
    } = (0, S.I)(t), V = P?.name ?? M?.name ?? "", {
        hasAlreadyLinked: F,
        canStartAuthorization: B,
        fetched: Y,
        startAuthorization: z,
        connectionApp: K
    } = (0, E.RD)(M), {
        invite: X,
        isMember: J
    } = (0, W.A)(P, b), {
        socialLayerStorefrontRecommendationsData: $
    } = (0, U.V)(M ?? null), Q = (e, a) => {
        (0, G.Tn)({
            gameName: V,
            applicationId: t,
            action: e,
            similarGameId: a,
            viewId: R,
            officialGuildId: _?.guild?.id,
            source: n
        })
    };
    (0, p.Ay)(() => {
        (0, G.rw)({
            source: n,
            viewId: R,
            applicationId: t,
            gameName: V,
            authorId: i,
            profileType: G.HV.FullProfile
        }), (0, C.He)()
    }), (0, p.Ay)(() => () => {
        let e = Date.now(),
            n = w.map(t => {
                let n = (0, N.JM)(t) ? (0, N.W6)(t, e) : (0, N.aJ)(t, k);
                return JSON.stringify({
                    item_id: t.id,
                    trait: t.traits,
                    time_played: n
                })
            });
        (0, G.V_)({
            viewId: R,
            applicationId: t,
            gameName: V,
            playedFriendIds: w.map(e => e.author_id),
            playedFriendsData: n,
            similarGames: [],
            officialGuildId: _?.guild?.id
        })
    });
    let q = l.useCallback(e => {
            h(e.contentRect.width >= 800)
        }, []),
        ee = (0, d.w)(q, [], {
            fireOnMount: !0
        }),
        et = l.useCallback(() => {
            o(), (0, T.closeUserProfileModal)()
        }, [o]),
        en = l.useMemo(() => ({
            application: M,
            isTwoColumn: m,
            canStartAuthorization: B,
            hasAlreadyLinked: F,
            fetchedAuthorization: Y,
            startAuthorization: z,
            connectionApp: K,
            officialInvite: X,
            isMember: J,
            socialLayerStorefrontRecommendationsData: $,
            closeModal: et
        }), [M, m, B, F, Y, z, K, X, J, $, et]),
        ea = l.useCallback(() => {
            o(), (0, T.closeUserProfileModal)()
        }, [o]),
        [el, ei] = l.useState(!1),
        [er, es] = l.useState(150),
        eo = l.useRef(null),
        ec = l.useCallback(e => {
            let t = e.currentTarget.scrollTop;
            if (null != eo.current) {
                let e = Math.max(0, 1 - t / 150);
                eo.current.style.opacity = String(e)
            }
            ei(t >= er)
        }, [er]);
    return null == P || null == M ? null : (0, a.jsx)(A.f5, {
        value: O,
        children: (0, a.jsx)(f.N, {
            transitionState: s,
            onClose: o,
            children: (0, a.jsx)(H.D.Provider, {
                value: en,
                children: (0, a.jsxs)("div", {
                    className: r()(y, em.kL),
                    ref: ee,
                    children: [(0, a.jsx)(Z.j5, {
                        game: P,
                        ref: eo
                    }), (0, a.jsx)(Z._R, {
                        game: P,
                        application: M,
                        show: el,
                        onClose: ea,
                        trackAction: Q
                    }), (0, a.jsx)(Z.Iv, {
                        show: el
                    }), (0, a.jsxs)(g.ChK, {
                        onScroll: ec,
                        children: [(0, a.jsx)(Z.Ay, {
                            game: P,
                            application: M,
                            onSetCompactBarScrollThreshold: es,
                            showCompactBar: el
                        }), (0, a.jsx)(g.Fmo, {
                            children: m ? (0, a.jsxs)("div", {
                                className: em.jC,
                                children: [(0, a.jsx)(eg, {
                                    game: P,
                                    closeModal: ea,
                                    trackAction: Q
                                }), (0, a.jsx)(eb, {
                                    game: P,
                                    application: M,
                                    appContext: c,
                                    source: n,
                                    trackExternalAction: u,
                                    trackAction: Q,
                                    analyticsLocations: O
                                })]
                            }) : (0, a.jsx)("div", {
                                className: em.b9,
                                children: (0, a.jsx)(ep, {
                                    game: P,
                                    application: M,
                                    trackAction: Q,
                                    analyticsLocations: O
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
    return e.forceV2 || t ? (0, a.jsx)(ej, {
        ...e
    }) : (0, a.jsx)(eE, {
        ...e
    })
}