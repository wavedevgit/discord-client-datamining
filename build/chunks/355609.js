/** chunk id: 355609, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A,
    k: () => S
});
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(990078),
    d = n(397927),
    o = n(793574),
    c = n(801264),
    u = n(363487),
    m = n(397400),
    x = n(709255),
    g = n(895770),
    v = n(468946),
    f = n(27023),
    j = n(548392),
    p = n(800007),
    b = n(294726),
    h = n(985018),
    N = n(453729);

function S() {
    return (0, a.jsx)(c.A, {
        className: N.Bq,
        children: (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: h.intl.formatToPlainString(b.default.xta2U9, {
                maxInstances: p.ZI
            })
        })
    })
}

function A() {
    let {
        guildId: e,
        gameServerGames: t,
        instances: n,
        gameServerInstance: i,
        setGameServerInstance: c,
        setCurrentGame: A,
        onNext: I
    } = (0, f.bv)();
    (0, m.ft)(e, null == i ? "create" : "edit");
    let k = s.useCallback(e => {
            A(e), I()
        }, [A, I]),
        T = s.useCallback(e => {
            c(e), I()
        }, [c, I]),
        C = n.length >= p.ZI,
        y = n.length > 0,
        _ = (0, u.A)(e);
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
                children: h.intl.string(b.default.BOWmmT)
            }), (0, a.jsx)("div", {
                className: N.Hy,
                children: n.map((t, n) => (0, a.jsx)(x.A, {
                    guildId: e,
                    gameInstance: t,
                    onClick: T
                }, `instance-${t.id}-${n}`))
            }), C && (0, a.jsx)(S, {})]
        }), (0, a.jsxs)("div", {
            className: l()(N.yn, {
                [N.r9]: C
            }),
            children: [y && (0, a.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                children: h.intl.string(b.default.NIwDqW)
            }), (0, a.jsx)("div", {
                className: N.Y_,
                children: Object.values(t).map((t, n) => (0, a.jsx)(r.m, {
                    asContainer: !0,
                    text: t.disabled ? h.intl.formatToPlainString(b.default.uVpJYf, {
                        gameName: t.name
                    }) : null,
                    position: "top",
                    children: (0, a.jsx)(g.A, {
                        guildId: e,
                        game: t,
                        disabled: C || !_ || t.disabled,
                        onClick: k,
                        location: o.A.GAME_SERVER_SETUP_MODAL
                    })
                }, `game-${t.id}-${n}`))
            })]
        }), (0, a.jsxs)(j.N4, {
            step: p.HS.SELECT_GAME,
            className: N.xQ,
            children: [(0, a.jsxs)("div", {
                className: N.UW,
                children: [(0, a.jsx)(d.mir, {
                    size: "sm"
                }), (0, a.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    children: h.intl.string(b.default["5DjxXm"])
                })]
            }), (0, a.jsx)(v.A, {})]
        })]
    })
}