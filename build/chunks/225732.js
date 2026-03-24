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
    f = n(397927),
    g = n(964486),
    _ = n(359549),
    p = n(793574),
    v = n(688810),
    A = n(139286),
    j = n(362490),
    E = n(429913),
    I = n(590703),
    C = n(708197),
    b = n(583846),
    N = n(885151),
    T = n(928550),
    S = n(657331),
    L = n(773669),
    k = n(486020),
    O = n(541830),
    y = n(661191),
    R = n(240248),
    G = n(409626),
    M = n(880405),
    P = n(422069),
    w = n(476464),
    D = n(205184),
    V = n(939764),
    F = n(277089),
    W = n(611656),
    Y = n(459746),
    U = n(503364),
    H = n(305080),
    B = n(941568),
    K = n(814698),
    z = n(431040),
    X = n(976720),
    J = n(313843),
    Z = n(286737),
    $ = n(839671),
    Q = n(94836),
    q = n(392332),
    ee = n(639714),
    et = n(310721),
    en = n(922283),
    ea = n(588260),
    el = n(582942),
    ei = n(999450),
    er = n(285820),
    es = n(771004),
    eo = n(424994),
    ec = n(985018),
    ed = n(851822),
    eu = n(146258);
let em = () => (0, a.jsxs)("div", {
    className: ed.uv,
    children: [(0, a.jsx)(f.Y3C, {
        size: "xxs"
    }), (0, a.jsx)(f.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: ec.intl.string(ec.t.kAlUsy)
    })]
});

function ex(e) {
    let {
        detectedGame: t,
        application: n,
        entries: i
    } = e, s = l.useMemo(() => t?.genres.map(O.du).join(", "), [t]), [c] = l.useState(() => Math.random()), d = l.useMemo(() => {
        if (null == t) return "";
        let {
            artwork: e,
            screenshots: n
        } = t;
        if (e.length > 0) {
            let t = Math.floor(c * e.length);
            return e[t]
        }
        if (n.length > 0) {
            let e = Math.floor(c * n.length);
            return n[e]
        }
        return ""
    }, [t, c]), u = (0, R.uJ)(t.iconHash) ? n?.getIconURL(160, k.QB ? "webp" : "png") : k.Ay.getGameAssetURL({
        id: t.applicationId,
        hash: t.iconHash,
        size: 160,
        format: k.QB ? "webp" : "png"
    }), x = y.default.extractTimestamp(n.id), h = 7 >= o()().diff(o()(x), "days"), g = i.some(e => (0, b.CZ)(e) === m.m.GLOBAL), _ = t.name ?? n?.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
            className: ed.is,
            style: {
                backgroundImage: `url("${d}")`
            }
        }), (0, a.jsxs)("div", {
            className: r()(ed.Qs, ed.fi, ed.iH, ed.Se),
            children: [(0, a.jsxs)("div", {
                className: ed.xx,
                children: [(0, a.jsx)("div", {
                    className: ed.bb,
                    children: (0, a.jsx)(Y.A, {
                        game: t,
                        application: n,
                        className: ed.wm,
                        size: Y.w.LARGE
                    })
                }), (0, a.jsx)(U.A, {
                    applicationId: n.id,
                    className: ed.Gg
                })]
            }), (0, a.jsx)("div", {
                className: r()(ed.nM, ed.Lc, ed.Z3),
                children: (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(f.Heading, {
                        variant: "heading-xl/bold",
                        children: _
                    }), (0, a.jsxs)("div", {
                        className: r()(ed.nM, ed.Lc),
                        children: [null != u && (0, a.jsx)("img", {
                            className: ed.Gt,
                            src: u,
                            height: 16,
                            alt: ec.intl.formatToPlainString(ec.t["nh+jWk"], {
                                game: _
                            })
                        }), (0, a.jsx)(f.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            children: s
                        }), h && (0, a.jsx)(f.Text, {
                            variant: "eyebrow",
                            className: ed.Ad,
                            children: ec.intl.string(ec.t.y2b7CA)
                        }), g && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(f.Text, {
                                variant: "text-sm/medium",
                                children: " \xb7 "
                            }), (0, a.jsx)(em, {})]
                        })]
                    })]
                })
            })]
        })]
    })
}

function eh(e) {
    let {
        detectedGame: t,
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
        className: ed.V0,
        children: [(0, a.jsx)(q.A, {
            entries: l,
            viewId: c,
            officialGuildId: i?.guild?.id,
            onClose: o,
            source: u
        }), (0, a.jsx)(Q.A, {
            detectedGame: t,
            trackAction: d
        }), (0, a.jsx)(el.A, {
            applicationId: n.id,
            onClose: o,
            trackAction: d,
            similarGames: r,
            similarGamesError: s
        })]
    })
}

function ef(e) {
    let {
        game: t,
        trackAction: n,
        closeModal: l
    } = e;
    return null == t.supplementalData ? null : (0, a.jsxs)("div", {
        className: eu.oC,
        children: [(0, a.jsxs)("div", {
            className: eu.lM,
            children: [(0, a.jsx)(Q.a, {
                detectedGame: t.supplementalData,
                trackAction: n
            }), (0, a.jsx)(es.A, {
                detectedGame: t.supplementalData,
                trackAction: n
            })]
        }), (0, a.jsx)(B.A, {
            detectedGame: t.supplementalData
        }), (0, a.jsx)(ei.A, {}), (0, a.jsx)(ea.A, {
            detectedGame: t.supplementalData,
            closeModal: l,
            trackAction: n
        })]
    })
}

function eg(e) {
    let {
        game: t,
        trackAction: n,
        application: l
    } = e, i = t.supplementalData?.steamReleaseStatus !== u.Y.RETIRED_ABANDONED, {
        closeModal: r
    } = (0, H.c)();
    return null == t.supplementalData ? null : (0, a.jsxs)("div", {
        className: ed.V0,
        children: [(0, a.jsx)(Q.a, {
            detectedGame: t.supplementalData,
            trackAction: n
        }), (0, a.jsxs)("div", {
            className: eu.gr,
            children: [(0, a.jsx)(J.Q, {
                game: t,
                application: l,
                isTwoColumn: !1
            }), (0, a.jsxs)("div", {
                className: eu.E1,
                children: [(0, a.jsx)(er.A, {
                    detectedGame: t.supplementalData,
                    trackAction: n
                }), (0, a.jsx)(es.A, {
                    detectedGame: t.supplementalData,
                    trackAction: n
                })]
            })]
        }), (0, a.jsx)(Z.A, {
            trackAction: n
        }), (0, a.jsx)(ee.o, {
            trackClick: n,
            closeModal: r
        }), (0, a.jsx)(B.A, {
            detectedGame: t.supplementalData
        }), (0, a.jsx)(ei.A, {}), (0, a.jsx)(ea.A, {
            detectedGame: t.supplementalData,
            closeModal: r,
            trackAction: n
        }), i && (0, a.jsx)(en.A, {
            detectedGame: t.supplementalData
        }), (0, a.jsx)(z.A, {
            application: l,
            detectedGame: t.supplementalData,
            trackAction: n
        })]
    })
}

function e_(e) {
    let {
        onClose: t,
        onCloudPlayClick: n,
        analyticsLocations: l
    } = e;
    return (0, A.A)({
        name: c.ImpressionNames.CLOUD_PLAY_CTA,
        type: c.ImpressionTypes.VIEW,
        properties: {
            location_stack: l
        }
    }), (0, a.jsx)(h.m, {
        text: ec.intl.string(ec.t.JVwWva),
        position: "top",
        children: (0, a.jsx)(f.Button, {
            icon: f.hpF,
            text: ec.intl.string(ec.t["jaYS/h"]),
            variant: "overlay-secondary",
            onClick: () => {
                t(), n()
            },
            fullWidth: !0
        })
    })
}

function ep(e) {
    let {
        applicationId: t,
        analyticsLocations: n
    } = e, a = (0, E.h)(t), l = (0, _.A)({
        application: a,
        analyticsLocations: n
    });
    return {
        onCloudPlayClick: l,
        isCloudPlayButtonShown: !(0, T.L)(t) && null != l
    }
}

function ev(e) {
    let {
        detectedGame: t,
        onSetOfficialGuildInvite: n,
        officialGuildInvite: i,
        trackAction: s,
        onClose: o,
        application: c
    } = e, d = l.useCallback(() => {
        o(), (0, S.closeUserProfileModal)()
    }, [o]), {
        analyticsLocations: u
    } = (0, v.Ay)(p.A.GAME_PROFILE), {
        isCloudPlayButtonShown: m,
        onCloudPlayClick: x
    } = ep({
        applicationId: c.id,
        analyticsLocations: u
    });
    return (0, a.jsxs)("div", {
        className: r()(ed.pz, ed.fi, ed.iH),
        children: [(0, a.jsxs)("div", {
            className: ed.NC,
            children: [(0, a.jsx)(X.A, {
                invite: i,
                trackClick: s,
                closeModal: d
            }), m && null != x && (0, a.jsx)(e_, {
                onClose: d,
                onCloudPlayClick: x,
                analyticsLocations: u
            })]
        }), (0, a.jsx)(f.Heading, {
            variant: "heading-md/bold",
            children: ec.intl.string(ec.t.CI0vSJ)
        }), (0, a.jsxs)("div", {
            className: ed.V0,
            children: [(0, a.jsx)(es.h, {
                detectedGame: t,
                trackAction: s
            }), (0, a.jsx)(ee.A, {
                detectedGame: t,
                trackClick: s,
                onInviteResolved: n,
                closeModal: d
            }), (0, a.jsx)($.A, {
                detectedGame: t,
                trackClick: s
            }), (0, a.jsx)(et.A, {
                detectedGame: t
            }), (0, a.jsx)(K.A, {
                application: c,
                trackAction: s
            }), (0, a.jsx)(f.Text, {
                variant: "text-xxs/normal",
                children: ec.intl.format(ec.t.pch2Jw, {
                    igdbLink: eo.s8
                })
            })]
        })]
    })
}

function eA(e) {
    let {
        game: t,
        trackAction: n,
        application: l
    } = e, {
        closeModal: i
    } = (0, H.c)(), {
        analyticsLocations: s
    } = (0, v.Ay)(p.A.GAME_PROFILE), {
        isCloudPlayButtonShown: o,
        onCloudPlayClick: c
    } = ep({
        applicationId: l.id,
        analyticsLocations: s
    });
    if (null == t.supplementalData) return null;
    let d = t.supplementalData.steamReleaseStatus !== u.Y.RETIRED_ABANDONED;
    return (0, a.jsxs)("div", {
        className: r()(eu.Pn, ed.fi, ed.iH),
        children: [(0, a.jsx)("div", {
            className: ed.NC,
            children: o && null != c && (0, a.jsx)(e_, {
                onClose: i,
                onCloudPlayClick: c,
                analyticsLocations: s
            })
        }), (0, a.jsxs)("div", {
            className: ed.V0,
            children: [(0, a.jsx)(er.A, {
                detectedGame: t.supplementalData,
                trackAction: n
            }), (0, a.jsx)(Z.A, {
                trackAction: n
            }), (0, a.jsx)(ee.o, {
                trackClick: n,
                closeModal: i
            }), d && (0, a.jsx)(en.A, {
                detectedGame: t.supplementalData
            }), (0, a.jsx)(z.A, {
                application: l,
                detectedGame: t.supplementalData,
                trackAction: n
            })]
        })]
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
        trackExternalAction: d
    } = e, {
        clientThemesClassName: u
    } = (0, I.Ay)(), m = (0, x.bG)([L.default], () => L.default.locale), h = l.useMemo(() => (0, G.u9)(), []), _ = (0, x.yK)([P.A], () => (P.A.getSimilarGames(t) ?? []).slice(0, 25)), [p, v] = l.useState(null), A = (0, D.s)(t), [j, T] = l.useState(null), S = (0, E.h)(t), {
        data: k,
        refetch: O
    } = (0, N.k)(t), y = k?.supplementalData ?? null, R = y?.name ?? S?.name, w = (e, a) => {
        (0, G.Tn)({
            gameName: R ?? "",
            applicationId: t,
            action: e,
            similarGameId: a,
            viewId: h,
            officialGuildId: j?.guild?.id,
            source: n
        })
    };
    return ((0, g.Ay)(() => {
        (0, G.rw)({
            source: n,
            viewId: h,
            applicationId: t,
            gameName: R ?? "",
            authorId: i,
            profileType: G.HV.FullProfile
        }), (0, C.He)()
    }), (0, E.A)(_), l.useEffect(() => {
        m.startsWith("en") || y?.summaryLocalized != null || O()
    }, [t, y?.summaryLocalized, m, O]), l.useEffect(() => {
        (async () => {
            if (0 === _.length) {
                v(null);
                try {
                    await (0, M.N)(t)
                } catch (e) {
                    v(e)
                }
            }
        })()
    }, [t, _]), (0, g.Ay)(() => () => {
        let e = Date.now(),
            n = A.map(t => {
                let n = (0, b.JM)(t) ? (0, b.W6)(t, e) : (0, b.aJ)(t, m);
                return JSON.stringify({
                    item_id: t.id,
                    trait: t.traits,
                    time_played: n
                })
            });
        (0, G.V_)({
            viewId: h,
            applicationId: t,
            gameName: R ?? "",
            playedFriendIds: A.map(e => e.author_id),
            playedFriendsData: n,
            similarGames: _.filter(W.oS).slice(0, 5),
            officialGuildId: j?.guild?.id
        })
    }), null == k || null == y || null == S) ? null : (0, a.jsx)(f.dWK, {
        transitionState: s,
        onClose: o,
        size: "xl",
        children: (0, a.jsx)("div", {
            className: r()(u, ed.fn),
            children: (0, a.jsxs)(f.HOs, {
                orientation: "auto",
                children: [(0, a.jsx)(ex, {
                    detectedGame: y,
                    application: S,
                    entries: A,
                    trackAction: w
                }), (0, a.jsx)(f.Fmo, {
                    children: (0, a.jsxs)("div", {
                        className: r()(ed.Qs, ed.rb),
                        children: [(0, a.jsx)(eh, {
                            detectedGame: y,
                            application: S,
                            entries: A,
                            officialGuildInvite: j,
                            similarGames: _,
                            similarGamesError: p,
                            onClose: o,
                            viewId: h,
                            trackAction: w,
                            source: n
                        }), (0, a.jsx)(ev, {
                            detectedGame: y,
                            onSetOfficialGuildInvite: T,
                            officialGuildInvite: j,
                            trackAction: w,
                            onClose: o,
                            appContext: c,
                            application: S,
                            source: n,
                            trackExternalAction: d
                        })]
                    })
                })]
            })
        })
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
        trackExternalAction: u
    } = e, [m, h] = l.useState(!0), [_, p] = l.useState(null), {
        clientThemesClassName: v
    } = (0, I.Ay)(), A = (0, x.bG)([L.default], () => L.default.locale), T = l.useMemo(() => (0, G.u9)(), []), k = (0, E.h)(t), O = (0, D.s)(t), {
        data: y
    } = (0, N.k)(t), R = y?.supplementalData ?? null, M = R?.name ?? y?.name ?? k?.name ?? "", {
        hasAlreadyLinked: P,
        canStartAuthorization: w,
        fetched: W,
        startAuthorization: Y,
        connectionApp: U
    } = (0, j.RD)(k), {
        invite: B,
        isMember: K
    } = (0, F.A)(R, p), {
        socialLayerStorefrontRecommendationsData: z
    } = (0, V.V)(k ?? null), X = (e, a) => {
        (0, G.Tn)({
            gameName: M,
            applicationId: t,
            action: e,
            similarGameId: a,
            viewId: T,
            officialGuildId: _?.guild?.id,
            source: n
        })
    };
    (0, g.Ay)(() => {
        (0, G.rw)({
            source: n,
            viewId: T,
            applicationId: t,
            gameName: M,
            authorId: i,
            profileType: G.HV.FullProfile
        }), (0, C.He)()
    }), (0, g.Ay)(() => () => {
        let e = Date.now(),
            n = O.map(t => {
                let n = (0, b.JM)(t) ? (0, b.W6)(t, e) : (0, b.aJ)(t, A);
                return JSON.stringify({
                    item_id: t.id,
                    trait: t.traits,
                    time_played: n
                })
            });
        (0, G.V_)({
            viewId: T,
            applicationId: t,
            gameName: M,
            playedFriendIds: O.map(e => e.author_id),
            playedFriendsData: n,
            similarGames: [],
            officialGuildId: _?.guild?.id
        })
    });
    let Z = l.useCallback(e => {
            h(e.contentRect.width >= 800)
        }, []),
        $ = (0, d.w)(Z, [], {
            fireOnMount: !0
        }),
        Q = l.useCallback(() => {
            o(), (0, S.closeUserProfileModal)()
        }, [o]),
        q = l.useMemo(() => ({
            application: k,
            isTwoColumn: m,
            canStartAuthorization: w,
            hasAlreadyLinked: P,
            fetchedAuthorization: W,
            startAuthorization: Y,
            connectionApp: U,
            officialInvite: B,
            isMember: K,
            socialLayerStorefrontRecommendationsData: z,
            closeModal: Q
        }), [k, m, w, P, W, Y, U, B, K, z, Q]),
        ee = l.useCallback(() => {
            o(), (0, S.closeUserProfileModal)()
        }, [o]);
    return null == y || null == R || null == k ? null : (0, a.jsx)(f.dWK, {
        transitionState: s,
        onClose: o,
        size: "xxl",
        children: (0, a.jsx)(H.D.Provider, {
            value: q,
            children: (0, a.jsx)("div", {
                className: r()(v, eu.kL),
                ref: $,
                children: (0, a.jsxs)(f.HOs, {
                    orientation: "auto",
                    children: [(0, a.jsx)(J.A, {
                        game: y,
                        application: k,
                        onClose: o
                    }), (0, a.jsx)(f.Fmo, {
                        children: m ? (0, a.jsxs)("div", {
                            className: eu.jC,
                            children: [(0, a.jsx)(ef, {
                                game: y,
                                trackAction: X,
                                closeModal: ee
                            }), (0, a.jsx)(eA, {
                                game: y,
                                application: k,
                                trackAction: X,
                                appContext: c,
                                source: n,
                                trackExternalAction: u
                            })]
                        }) : (0, a.jsx)("div", {
                            className: eu.b9,
                            children: (0, a.jsx)(eg, {
                                game: y,
                                trackAction: X,
                                application: k
                            })
                        })
                    })]
                })
            })
        })
    })
}
let eI = function(e) {
    return (0, w._)("GameProfileModal") ? (0, a.jsx)(eE, {
        ...e
    }) : (0, a.jsx)(ej, {
        ...e
    })
}