/** chunk id: 855446 params = (module,exports,require) **/
n.d(t, {
    C: () => C
});
var i, l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(687498),
    d = n(696292),
    c = n(397927),
    u = n(932413),
    h = n(849269),
    A = n(881343),
    _ = n(697675),
    m = n(869003),
    p = n(652215),
    g = n(985018),
    f = n(488893);
let x = ["embedded_cover"],
    E = {
        tension: 800,
        friction: 24
    };
var I = ((i = I || {})[i.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", i[i.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", i);

function C(e) {
    let {
        context: t,
        activityItem: n,
        onClick: i,
        aspectRatio: a = 0,
        animatedDivClass: I,
        commandOrigin: C
    } = e, {
        onActivityItemSelected: N,
        imageBackground: T,
        activityAction: S,
        labelType: b
    } = (0, h.Ay)({
        context: t,
        activityItem: n,
        guildId: t.channel.getGuildId() ?? void 0,
        locationObject: {},
        onActivityItemSelected: i,
        embeddedActivitiesManager: m.A,
        assetNames: x,
        commandOrigin: C
    }), [y, v] = s.useState(!1), j = s.useCallback(() => {
        v(!0)
    }, [v]), R = s.useCallback(() => {
        v(!1)
    }, [v]), O = s.useMemo(() => (0, l.jsx)("div", {
        className: f.Gz,
        children: (0, l.jsx)("div", {
            className: f.fC,
            children: (0, l.jsx)(_.A, {
                labelType: b
            })
        })
    }), [b]), L = s.useMemo(() => {
        switch (S) {
            case h.o6.JOIN:
                return (0, l.jsx)("div", {
                    className: f.m9,
                    children: (0, l.jsx)("div", {
                        className: f.aF,
                        children: (0, l.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: g.intl.string(g.t.VJlc0S)
                        })
                    })
                });
            case h.o6.LEAVE:
                return (0, l.jsx)("div", {
                    className: f.m9,
                    children: (0, l.jsx)("div", {
                        className: r()(f.aF, f.pS),
                        children: (0, l.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: g.intl.string(g.t["wH/wDO"])
                        })
                    })
                });
            case h.o6.START:
            default:
                return null
        }
    }, [S]);
    return (0, l.jsx)(c.DUT, {
        onClick: N,
        onFocus: j,
        onBlur: R,
        onMouseEnter: j,
        onMouseLeave: R,
        className: f.XA,
        children: (0, l.jsx)(c.c7X, {
            config: E,
            from: {
                value: 0
            },
            to: {
                value: +!!y
            },
            children: e => {
                let {
                    value: t
                } = e;
                return (0, l.jsx)(c.NPJ, {
                    theme: p.NJ8.DARK,
                    children: e => (0, l.jsx)(u.A, {
                        applicationId: n.application.id,
                        questContent: d.u.ACTIVITY_SUGGESTION,
                        children: i => (0, l.jsxs)(o.animated.div, {
                            ref: i,
                            className: r()(e, f.LM, I, {
                                [f.$g]: 0 === a,
                                [f.J3]: 1 === a
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to(e => `scale(${e})`)
                            },
                            children: [(0, l.jsx)(A.A, {
                                imageBackground: T,
                                applicationName: n.application.name,
                                imageClassName: f.jj,
                                imageNotFoundClassName: f.v_
                            }), O, L]
                        })
                    })
                })
            }
        })
    })
}
C.AspectRatio = I