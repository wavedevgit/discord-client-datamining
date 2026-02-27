/** chunk id: 484612, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => U
}), n(321073), n(323874), n(14289), n(35956);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    o = n(311907),
    a = n(554146),
    u = n(397927),
    d = n(793574),
    c = n(932001),
    p = n(742589),
    m = n(976860),
    A = n(488803),
    _ = n(14081),
    f = n(843095),
    g = n(645619),
    x = n(489306),
    v = n(363487),
    h = n(884928),
    b = n(884684),
    j = n(983398),
    E = n(194867),
    I = n(149854),
    w = n(864450),
    S = n(697865),
    C = n(297407),
    N = n(271484),
    L = n(289642),
    y = n(915667),
    k = n(800007),
    T = n(568065),
    P = n(49999),
    G = n(333354),
    R = n(985018),
    O = n(377514);

function U(e) {
    let {
        guildId: t,
        powerupListingId: i
    } = e;
    (0, h.A)(t);
    let U = (0, A.C$)(t, "GuildPowerupsOverview");
    (0, x.Pq)(t);
    let D = (0, o.bG)([g.A], () => g.A.getStateForGuild(t)),
        M = (0, v.A)(t),
        V = l.useRef(!1),
        {
            shouldShow: B,
            modalConfig: W
        } = (0, L.A)(t, "GuildPowerupsOverview"),
        F = null == i && null != W,
        K = [];
    B && F && K.push(a.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [J, Y] = (0, c.kn)(K), z = (0, b.MO)(t, U), $ = z.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), X = (0, N.g)($, t);
    return (l.useEffect(() => {
        if (null != i && !V.current)
            for (let e of z)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === i) {
                        (0, y.A)(t, n.powerup), V.current = !0;
                        return
                    }
                    if ("multiPerk" === n.type && (n.group === i || n.powerups.some(e => e.skuId === i))) {
                        V.current = !0;
                        let e = X[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(T.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, m.bG)(t), V.current = !1
                            }
                        });
                        return
                    }
                    if ("gameServer" === n.type && i === k.W5) {
                        (0, f.A)({
                            guildId: t,
                            analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW
                        }), V.current = !0;
                        return
                    }
                }
    }, [t, i, z, X]), l.useEffect(() => {
        if (null != J && null != W) {
            let e = {
                onCloseCallback: () => {
                    Y(P.i.USER_DISMISS)
                },
                modalKey: `dismissible_content_${J}`
            };
            (0, u.mMO)(async () => {
                let {
                    default: e
                } = await n.e("86618").then(n.bind(n, 442241));
                return t => (0, r.jsx)(e, {
                    modalConfig: W,
                    markAsDismissed: Y,
                    ...t
                })
            }, e)
        }
    }, [t, J, Y, W]), D?.powerupCatalog == null) ? null : (0, r.jsxs)("div", {
        className: O.kL,
        children: [(0, r.jsxs)(p.A, {
            className: O.KE,
            hideSearch: !0,
            toolbar: (0, r.jsx)("div", {}),
            children: [(0, r.jsx)(p.A.Icon, {
                icon: u._Jp,
                "aria-label": ""
            }), (0, r.jsx)(p.A.Title, {
                children: R.intl.string(G.default.yv3DJJ)
            })]
        }), (0, r.jsxs)("div", {
            className: O.hQ,
            children: [(0, r.jsx)(u.IpV, {
                className: O.DO,
                children: z.map(e => {
                    let {
                        type: n,
                        listings: l
                    } = e, {
                        title: i,
                        description: o
                    } = function(e) {
                        switch (e) {
                            case T.o9.LEVEL:
                                return {
                                    title: R.intl.string(G.default["TXY/b0"]), description: R.intl.string(G.default.aJv4PB)
                                };
                            case T.o9.PERK:
                                return {
                                    title: R.intl.string(G.default.TV3Vm8), description: R.intl.string(G.default.STx9hp)
                                }
                        }
                    }(n), a = n === T.o9.LEVEL ? u.IpV : "div";
                    return (0, r.jsxs)("div", {
                        className: O.lt,
                        children: [(0, r.jsxs)("div", {
                            className: O.kn,
                            children: [(0, r.jsx)(u.Heading, {
                                color: "text-strong",
                                variant: "heading-lg/semibold",
                                children: i
                            }), (0, r.jsx)(u.Text, {
                                color: "text-muted",
                                variant: "text-sm/medium",
                                children: o
                            })]
                        }), (0, r.jsx)(a, {
                            orientation: "horizontal",
                            className: s()(O.qJ, O.kn, {
                                [O.dU]: n === T.o9.LEVEL
                            }),
                            fade: !0,
                            children: l.map((e, n) => {
                                switch (e.type) {
                                    case "singleLevel":
                                        return (0, r.jsx)(j.A, {
                                            guildId: t,
                                            index: n,
                                            powerup: e.powerup,
                                            nextPowerup: l[n + 1]?.powerup
                                        }, `powerup-${e.powerup.skuId}`);
                                    case "singlePerk":
                                        return (0, r.jsx)(I.A, {
                                            guildId: t,
                                            powerup: e.powerup
                                        }, `powerup-${e.powerup.skuId}`);
                                    case "multiPerk":
                                        return (0, r.jsx)(E.A, {
                                            guildId: t,
                                            group: e.group,
                                            powerups: e.powerups
                                        }, `powerup-group-${e.group}`);
                                    case "gameServer":
                                        return (0, r.jsx)(_.A, {
                                            guildId: t
                                        }, "powerup-game-server")
                                }
                            })
                        })]
                    }, `section-${n}`)
                })
            }), (0, r.jsxs)("div", {
                className: O.so,
                children: [M ? (0, r.jsx)(w.A, {
                    guildId: t
                }) : (0, r.jsx)(S.A, {
                    guildId: t
                }), (0, r.jsx)(C.A, {
                    guildId: t
                })]
            })]
        })]
    })
}