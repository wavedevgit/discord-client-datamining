/** Chunk was on 88615 **/
/** chunk id: 484612, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(321073), n(896048), n(114821), n(339614), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(747238), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    o = n.n(i),
    s = n(311907),
    a = n(554146),
    u = n(397927),
    d = n(793574),
    c = n(379848),
    p = n(742589),
    m = n(976860),
    f = n(488803),
    v = n(14081),
    g = n(843095),
    A = n(645619),
    _ = n(489306),
    x = n(363487),
    h = n(884928),
    b = n(884684),
    j = n(983398),
    E = n(194867),
    w = n(149854),
    y = n(864450),
    I = n(697865),
    S = n(297407),
    C = n(271484),
    N = n(289642),
    O = n(915667),
    L = n(800007),
    P = n(568065),
    k = n(49999),
    T = n(333354),
    G = n(985018),
    R = n(377514);

function D(e) {
    let {
        guildId: t,
        powerupListingId: i
    } = e;
    (0, h.A)(t);
    let D = (0, f.C$)(t, "GuildPowerupsOverview");
    (0, _.c2)(t);
    let U = (0, s.bG)([A.A], () => A.A.getStateForGuild(t)),
        M = (0, x.A)(t),
        V = l.useRef(!1),
        {
            shouldShow: B,
            modalConfig: W
        } = (0, N.A)(t, "GuildPowerupsOverview"),
        F = null == i && null != W,
        K = [];
    B && F && K.push(a.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [J, Y] = (0, c.kn)(K), z = (0, b.MO)(t, D), X = z.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), H = (0, C.g)(X, t);
    return (l.useEffect(() => {
        if (null != i && !V.current)
            for (let e of z)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === i) {
                        (0, O.A)(t, n.powerup), V.current = !0;
                        return
                    }
                    if ("multiPerk" === n.type && (n.group === i || n.powerups.some(e => e.skuId === i))) {
                        V.current = !0;
                        let e = H[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(P.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, m.bG)(t), V.current = !1
                            }
                        });
                        return
                    }
                    if ("gameServer" === n.type && i === L.W5) {
                        (0, g.A)({
                            guildId: t,
                            analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW
                        }), V.current = !0;
                        return
                    }
                }
    }, [t, i, z, H]), l.useEffect(() => {
        null != J && null != W && (0, u.mMO)(async () => {
            let {
                default: e
            } = await n.e("86618").then(n.bind(n, 442241));
            return t => (0, r.jsx)(e, function(e) {
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
            }({
                modalConfig: W,
                markAsDismissed: Y
            }, t))
        }, {
            onCloseCallback: () => {
                Y(k.i.USER_DISMISS)
            },
            modalKey: "dismissible_content_".concat(J)
        })
    }, [t, J, Y, W]), (null == U ? void 0 : U.powerupCatalog) == null) ? null : (0, r.jsxs)("div", {
        className: R.kL,
        children: [(0, r.jsxs)(p.A, {
            className: R.KE,
            hideSearch: !0,
            toolbar: (0, r.jsx)("div", {}),
            children: [(0, r.jsx)(p.A.Icon, {
                icon: u._Jp,
                "aria-label": ""
            }), (0, r.jsx)(p.A.Title, {
                children: G.intl.string(T.default.yv3DJJ)
            })]
        }), (0, r.jsxs)("div", {
            className: R.hQ,
            children: [(0, r.jsx)(u.IpV, {
                className: R.DO,
                children: z.map(e => {
                    let {
                        type: n,
                        listings: l
                    } = e, {
                        title: i,
                        description: s
                    } = function(e) {
                        switch (e) {
                            case P.o9.LEVEL:
                                return {
                                    title: G.intl.string(T.default["TXY/b0"]), description: G.intl.string(T.default.aJv4PB)
                                };
                            case P.o9.PERK:
                                return {
                                    title: G.intl.string(T.default.TV3Vm8), description: G.intl.string(T.default.STx9hp)
                                }
                        }
                    }(n), a = n === P.o9.LEVEL ? u.IpV : "div";
                    return (0, r.jsxs)("div", {
                        className: R.lt,
                        children: [(0, r.jsxs)("div", {
                            className: R.kn,
                            children: [(0, r.jsx)(u.Heading, {
                                color: "text-strong",
                                variant: "heading-lg/semibold",
                                children: i
                            }), (0, r.jsx)(u.Text, {
                                color: "text-muted",
                                variant: "text-sm/medium",
                                children: s
                            })]
                        }), (0, r.jsx)(a, {
                            orientation: "horizontal",
                            className: o()(R.qJ, R.kn, {
                                [R.dU]: n === P.o9.LEVEL
                            }),
                            fade: !0,
                            children: l.map((e, n) => {
                                switch (e.type) {
                                    case "singleLevel":
                                        var i;
                                        return (0, r.jsx)(j.A, {
                                            guildId: t,
                                            index: n,
                                            powerup: e.powerup,
                                            nextPowerup: null == (i = l[n + 1]) ? void 0 : i.powerup
                                        }, "powerup-".concat(e.powerup.skuId));
                                    case "singlePerk":
                                        return (0, r.jsx)(w.A, {
                                            guildId: t,
                                            powerup: e.powerup
                                        }, "powerup-".concat(e.powerup.skuId));
                                    case "multiPerk":
                                        return (0, r.jsx)(E.A, {
                                            guildId: t,
                                            group: e.group,
                                            powerups: e.powerups
                                        }, "powerup-group-".concat(e.group));
                                    case "gameServer":
                                        return (0, r.jsx)(v.A, {
                                            guildId: t
                                        }, "powerup-game-server")
                                }
                            })
                        })]
                    }, "section-".concat(n))
                })
            }), (0, r.jsxs)("div", {
                className: R.so,
                children: [M ? (0, r.jsx)(y.A, {
                    guildId: t
                }) : (0, r.jsx)(I.A, {
                    guildId: t
                }), (0, r.jsx)(S.A, {
                    guildId: t
                })]
            })]
        })]
    })
}