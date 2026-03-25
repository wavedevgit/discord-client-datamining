/** chunk id: 484612 params = (module,exports,require) **/
n.d(t, {
    A: () => M
}), n(321073), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(311907),
    a = n(554146),
    d = n(397927),
    u = n(793574),
    c = n(932001),
    m = n(742589),
    p = n(976860),
    _ = n(488803),
    f = n(14081),
    g = n(843095),
    x = n(645619),
    A = n(929250),
    v = n(489306),
    h = n(363487),
    E = n(884928),
    j = n(884684),
    b = n(182859),
    I = n(983398),
    S = n(194867),
    C = n(149854),
    w = n(864450),
    N = n(697865),
    L = n(297407),
    y = n(436207),
    k = n(271484),
    R = n(915667),
    T = n(800007),
    G = n(568065),
    P = n(652215),
    O = n(49999),
    D = n(333354),
    U = n(985018),
    V = n(377514);

function M(e) {
    let {
        guildId: t,
        powerupListingId: s
    } = e;
    (0, E.A)(t);
    let M = (0, _.C$)(t, "GuildPowerupsOverview");
    (0, v.Pq)(t);
    let W = (0, o.bG)([x.A], () => x.A.getStateForGuild(t)),
        B = (0, h.A)(t),
        F = (0, A.h)("GuildPowerupsOverview"),
        J = i.useRef(!1),
        {
            shouldShow: K,
            modalConfig: z
        } = (0, y.A)(t, "GuildPowerupsOverview"),
        Y = null == s && null != z,
        $ = [];
    K && Y && $.push(a.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [X, q] = (0, c.kn)($), H = (0, j.MO)(t, M), Q = H.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), Z = (0, k.g)(Q, t);
    return (i.useEffect(() => {
        if (null != s && !J.current)
            for (let e of H)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === s) {
                        (0, R.A)(t, n.powerup), J.current = !0;
                        return
                    }
                    if ("multiPerk" === n.type && (n.group === s || n.powerups.some(e => e.skuId === s))) {
                        J.current = !0;
                        let e = Z[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(G.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, p.bG)(t), J.current = !1
                            }
                        });
                        return
                    }
                    if ("gameServer" === n.type && s === T.W5) {
                        (0, g.A)({
                            guildId: t,
                            analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW
                        }), J.current = !0;
                        return
                    }
                }
    }, [t, s, H, Z]), i.useEffect(() => {
        if (null != X && null != z) {
            let e = {
                onCloseCallback: () => {
                    q(O.i.USER_DISMISS)
                },
                modalKey: `dismissible_content_${X}`
            };
            (0, d.mMO)(async () => {
                let {
                    default: e
                } = await n.e("86618").then(n.bind(n, 442241));
                return t => (0, r.jsx)(e, {
                    modalConfig: z,
                    markAsDismissed: q,
                    ...t
                })
            }, e)
        }
    }, [t, X, q, z]), W?.powerupCatalog == null) ? null : (0, r.jsxs)("div", {
        className: V.kL,
        children: [(0, r.jsxs)(m.A, {
            className: V.KE,
            hideSearch: !0,
            toolbar: (0, r.jsx)("div", {}),
            children: [(0, r.jsx)(m.A.Icon, {
                icon: d._Jp,
                "aria-label": ""
            }), (0, r.jsx)(m.A.Title, {
                children: U.intl.string(D.default.yv3DJJ)
            })]
        }), (0, r.jsxs)("div", {
            className: V.hQ,
            children: [(0, r.jsx)(d.IpV, {
                className: V.DO,
                children: H.map(e => {
                    let {
                        type: n,
                        listings: i
                    } = e, {
                        title: s,
                        description: o
                    } = function(e) {
                        switch (e) {
                            case G.o9.LEVEL:
                                return {
                                    title: U.intl.string(D.default["TXY/b0"]), description: U.intl.string(D.default.aJv4PB)
                                };
                            case G.o9.PERK:
                                return {
                                    title: U.intl.string(D.default.TV3Vm8), description: U.intl.string(D.default.STx9hp)
                                }
                        }
                    }(n), a = n === G.o9.LEVEL ? d.IpV : "div";
                    return (0, r.jsxs)("div", {
                        className: V.lt,
                        children: [(0, r.jsxs)("div", {
                            className: V.kn,
                            children: [(0, r.jsx)(d.Heading, {
                                color: "text-strong",
                                variant: "heading-lg/semibold",
                                children: s
                            }), (0, r.jsx)(d.Text, {
                                color: "text-muted",
                                variant: "text-sm/medium",
                                children: o
                            })]
                        }), (0, r.jsx)(a, {
                            orientation: "horizontal",
                            className: l()(V.qJ, V.kn, {
                                [V.dU]: n === G.o9.LEVEL
                            }),
                            fade: !0,
                            children: i.map((e, n) => {
                                switch (e.type) {
                                    case "singleLevel":
                                        return (0, r.jsx)(I.A, {
                                            guildId: t,
                                            index: n,
                                            powerup: e.powerup,
                                            nextPowerup: i[n + 1]?.powerup
                                        }, `powerup-${e.powerup.skuId}`);
                                    case "singlePerk":
                                        return (0, r.jsx)(C.A, {
                                            guildId: t,
                                            powerup: e.powerup
                                        }, `powerup-${e.powerup.skuId}`);
                                    case "multiPerk":
                                        return (0, r.jsx)(S.A, {
                                            guildId: t,
                                            group: e.group,
                                            powerups: e.powerups
                                        }, `powerup-group-${e.group}`);
                                    case "gameServer":
                                        return (0, r.jsx)(f.A, {
                                            guildId: t
                                        }, "powerup-game-server")
                                }
                            })
                        })]
                    }, `section-${n}`)
                })
            }), (0, r.jsxs)("div", {
                className: V.so,
                children: [B ? (0, r.jsx)(w.A, {
                    guildId: t,
                    showVideoCard: F
                }) : F ? (0, r.jsxs)("div", {
                    className: V.CG,
                    children: [(0, r.jsx)(b.A, {
                        guildId: t,
                        variant: "member",
                        analyticsLocation: {
                            page: P.liQ.GUILD_POWERUPS_OVERVIEW,
                            section: P.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                            object: P.ZSU.CARD
                        }
                    }), (0, r.jsx)(N.A, {
                        guildId: t,
                        showVideoCard: !0
                    })]
                }) : (0, r.jsx)(N.A, {
                    guildId: t
                }), (0, r.jsx)(L.A, {
                    guildId: t
                })]
            })]
        })]
    })
}