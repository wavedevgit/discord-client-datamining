/** chunk id: 355609, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S,
    k: () => h
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(990078),
    d = n(397927),
    c = n(793574),
    o = n(801264),
    u = n(363487),
    m = n(397400),
    g = n(709255),
    f = n(895770),
    v = n(468946),
    x = n(27023),
    _ = n(548392),
    p = n(800007),
    j = n(738072),
    b = n(985018),
    A = n(804775);

function h() {
    return (0, a.jsx)(o.A, {
        className: A.Bq,
        children: (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: b.intl.formatToPlainString(j.default.xta2U9, {
                maxInstances: p.ZI
            })
        })
    })
}

function S() {
    let {
        guildId: e,
        gameServerGames: t,
        instances: n,
        gameServerInstance: s,
        setGameServerInstance: o,
        setCurrentGame: S,
        onNext: N
    } = (0, x.bv)();
    (0, m.ft)(e, null == s ? "create" : "edit");
    let E = i.useCallback(e => {
            S(e), N()
        }, [S, N]),
        I = i.useCallback(e => {
            o(e), N()
        }, [o, N]),
        k = n.length >= p.ZI,
        T = n.length > 0,
        C = (0, u.A)(e);
    return 0 === Object.values(t).length ? (0, a.jsx)("div", {
        className: A.g4,
        children: (0, a.jsx)(d.y$y, {
            type: d.tVU.SPINNING_CIRCLE
        })
    }) : (0, a.jsxs)(a.Fragment, {
        children: [T && (0, a.jsxs)("div", {
            className: A.yn,
            children: [(0, a.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                children: b.intl.string(j.default.BOWmmT)
            }), (0, a.jsx)("div", {
                className: A.Hy,
                children: n.map((t, n) => (0, a.jsx)(g.A, {
                    guildId: e,
                    gameInstance: t,
                    onClick: I
                }, `instance-${t.id}-${n}`))
            }), k && (0, a.jsx)(h, {})]
        }), (0, a.jsxs)("div", {
            className: l()(A.yn, {
                [A.r9]: k
            }),
            children: [T && (0, a.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                children: b.intl.string(j.default.NIwDqW)
            }), (0, a.jsx)("div", {
                className: A.Y_,
                children: Object.values(t).map((t, n) => (0, a.jsx)(r.m, {
                    asContainer: !0,
                    text: t.disabled ? b.intl.formatToPlainString(j.default.uVpJYf, {
                        gameName: t.name
                    }) : null,
                    position: "top",
                    children: (0, a.jsx)(f.A, {
                        guildId: e,
                        game: t,
                        disabled: k || !C || t.disabled,
                        onClick: E,
                        location: c.A.GAME_SERVER_SETUP_MODAL
                    })
                }, `game-${t.id}-${n}`))
            })]
        }), (0, a.jsxs)(_.N4, {
            step: p.HS.SELECT_GAME,
            className: A.xQ,
            children: [(0, a.jsxs)("div", {
                className: A.UW,
                children: [(0, a.jsx)(d.mir, {
                    size: "sm"
                }), (0, a.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    children: b.intl.string(j.default["5DjxXm"])
                })]
            }), (0, a.jsx)(v.A, {})]
        })]
    })
}