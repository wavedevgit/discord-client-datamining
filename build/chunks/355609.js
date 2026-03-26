/** chunk id: 355609 params = (module,exports,require) **/
n.d(t, {
    A: () => S,
    k: () => A
});
var a = n(627968),
    l = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(990078),
    d = n(397927),
    o = n(793574),
    c = n(801264),
    u = n(363487),
    m = n(397400),
    x = n(709255),
    v = n(895770),
    g = n(468946),
    f = n(27023),
    b = n(548392),
    j = n(800007),
    p = n(294726),
    h = n(985018),
    N = n(755782);

function A() {
    return (0, a.jsx)(c.A, {
        className: N.Bq,
        children: (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: h.intl.formatToPlainString(p.default.xta2U9, {
                maxInstances: j.ZI
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
        setGameServerInstance: c,
        setCurrentGame: S,
        onNext: I
    } = (0, f.bv)();
    (0, m.ft)(e, null == s ? "create" : "edit");
    let C = l.useCallback(e => {
            S(e), I()
        }, [S, I]),
        k = l.useCallback(e => {
            c(e), I()
        }, [c, I]),
        T = n.length >= j.ZI,
        y = n.length > 0,
        G = (0, u.A)(e);
    return 0 === Object.values(t).length ? (0, a.jsx)("div", {
        className: N.g4,
        children: (0, a.jsx)(d.y$y, {
            type: d.tVU.SPINNING_CIRCLE
        })
    }) : (0, a.jsxs)(a.Fragment, {
        children: [y && (0, a.jsxs)("div", {
            className: N.yn,
            children: [(0, a.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                children: h.intl.string(p.default.BOWmmT)
            }), (0, a.jsx)("div", {
                className: N.Hy,
                children: n.map((t, n) => (0, a.jsx)(x.A, {
                    guildId: e,
                    gameInstance: t,
                    onClick: k
                }, `instance-${t.id}-${n}`))
            }), T && (0, a.jsx)(A, {})]
        }), (0, a.jsxs)("div", {
            className: i()(N.yn, {
                [N.r9]: T
            }),
            children: [y && (0, a.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                children: h.intl.string(p.default.NIwDqW)
            }), (0, a.jsx)("div", {
                className: N.Y_,
                children: Object.values(t).map((t, n) => (0, a.jsx)(r.m, {
                    asContainer: !0,
                    text: t.disabled ? h.intl.formatToPlainString(p.default.uVpJYf, {
                        gameName: t.name
                    }) : null,
                    position: "top",
                    children: (0, a.jsx)(v.A, {
                        guildId: e,
                        game: t,
                        variant: T || !G || t.disabled ? v.e.DISABLED : v.e.CLICKABLE,
                        onClick: C,
                        location: o.A.GAME_SERVER_SETUP_MODAL
                    })
                }, `game-${t.id}-${n}`))
            })]
        }), (0, a.jsxs)(b.N4, {
            step: j.HS.SELECT_GAME,
            className: N.xQ,
            children: [(0, a.jsxs)("div", {
                className: N.UW,
                children: [(0, a.jsx)(d.mir, {
                    size: "sm"
                }), (0, a.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    children: h.intl.string(p.default["5DjxXm"])
                })]
            }), (0, a.jsx)(g.A, {})]
        })]
    })
}