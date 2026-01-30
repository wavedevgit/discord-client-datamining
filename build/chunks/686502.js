/** Chunk was on 1113 **/
/** chunk id: 686502, original params: e,t,n (module,exports,require) **/
n.d(t, {
    y: () => C
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(554146),
    o = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(964486),
    h = n(887700),
    p = n(855446),
    g = n(793574),
    f = n(688810),
    m = n(975412),
    b = n(392054),
    A = n(826673),
    y = n(757293),
    O = n(954571),
    _ = n(272812),
    j = n(652215),
    x = n(985018),
    v = n(89996),
    E = n(867010);

function C(e) {
    let {
        channel: t,
        guild: n,
        width: l,
        inPopout: i,
        handleClose: s,
        userParticipantCount: a
    } = e;
    return l < 250 ? (0, r.jsx)(S, {
        channel: t,
        guild: n,
        width: l,
        inPopout: i,
        handleClose: s,
        userParticipantCount: a
    }) : a > 1 ? (0, r.jsx)(N, {
        channel: t,
        guild: n,
        width: l,
        inPopout: i,
        handleClose: s,
        userParticipantCount: a
    }) : (0, r.jsx)(I, {
        channel: t,
        guild: n,
        width: l,
        inPopout: i
    })
}

function S(e) {
    let {
        channel: t,
        inPopout: n,
        handleClose: l
    } = e, {
        analyticsLocations: i,
        newestAnalyticsLocation: a
    } = (0, f.Ay)(g.A.VC_TILE_ACTIVITY_SHELF_BUTTON);
    return (0, r.jsx)(f.f5, {
        value: i,
        children: (0, r.jsxs)(_.A, {
            className: v.zr,
            children: [(0, r.jsx)(c.m, {
                asContainer: !0,
                text: x.intl.string(x.t.qJvTKQ),
                children: (0, r.jsx)(u.DUT, {
                    onClick: () => {
                        (0, m.A)({
                            context: null != t ? {
                                type: "channel",
                                channel: t
                            } : {
                                type: "contextless"
                            },
                            openInPopout: n,
                            analyticsLocation: a
                        })
                    },
                    className: v.F1,
                    children: (0, r.jsx)("div", {
                        className: v.zc,
                        children: (0, r.jsx)(u.k9F, {
                            size: "custom",
                            color: "currentColor",
                            width: 40,
                            height: 40
                        })
                    })
                })
            }), (0, r.jsx)(u.NPJ, {
                theme: j.NJ8.DARK,
                children: e => (0, r.jsx)(u.DUT, {
                    onClick: l,
                    className: s()(e, v.lg),
                    children: (0, r.jsx)(u.aXh, {
                        size: "md",
                        color: "currentColor",
                        className: v.yP,
                        secondaryColor: o.A.colors.INTERACTIVE_TEXT_DEFAULT.css
                    })
                })
            })]
        })
    })
}

function I(e) {
    let {
        channel: t,
        guild: i,
        inPopout: a
    } = e;
    l.useEffect(() => {
        O.default.track(j.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity invite",
            n_participants: 1
        })
    }, []);
    let {
        analyticsLocations: o,
        newestAnalyticsLocation: c
    } = (0, f.Ay)(g.A.VC_TILE_ACTIVITY_INVITE);

    function d() {
        (0, u.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(n.bind(n, 234355));
            return n => {
                var l, s;
                return (0, r.jsx)(e, (l = function(e) {
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
                }({}, n), s = s = {
                    guild: i,
                    channel: t,
                    source: j.PE1.ACTIVITY_ENTRY_POINT_TILE
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(s)).forEach(function(e) {
                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
                }), l))
            }
        }, {
            contextKey: a ? u.KX8 : u.SYi
        })
    }

    function h() {
        (0, m.A)({
            context: null != t ? {
                type: "channel",
                channel: t
            } : {
                type: "contextless"
            },
            openInPopout: a,
            analyticsLocation: c
        })
    }
    return (0, r.jsx)(f.f5, {
        value: o,
        children: (0, r.jsx)(u.NPJ, {
            disableAdaptiveTheme: !0,
            theme: j.NJ8.MIDNIGHT,
            children: e => (0, r.jsxs)(_.A, {
                className: s()(v.zr, v.co, e),
                children: [(0, r.jsx)("img", {
                    src: E,
                    className: v.Qw,
                    alt: ""
                }), (0, r.jsxs)(u.ButtonGroup, {
                    justify: "center",
                    align: "center",
                    children: [(0, r.jsx)(u.Button, {
                        variant: "secondary",
                        icon: u.Rvf,
                        text: x.intl.string(x.t["EE+P0H"]),
                        onClick: d
                    }), (0, r.jsx)(u.Button, {
                        variant: "secondary",
                        icon: u.k9F,
                        text: x.intl.string(x.t.qnFavR),
                        onClick: h
                    })]
                })]
            })
        })
    })
}

function N(e) {
    let {
        channel: t,
        guild: n,
        handleClose: i,
        width: o,
        userParticipantCount: c
    } = e;
    (0, d.Ay)(() => {
        O.default.track(j.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: "activity suggestion",
            n_participants: c
        })
    });
    let m = (0, h.A)({
            guildId: n.id
        }).slice(0, 3),
        {
            analyticsLocations: E
        } = (0, f.Ay)(g.A.VC_TILE_ACTIVITY_SUGGESTION),
        C = l.useMemo(() => ({
            channel: t,
            type: "channel"
        }), [t]);
    return (0, r.jsx)(f.f5, {
        value: E,
        children: (0, r.jsxs)(_.A, {
            className: v.zr,
            children: [o > 300 ? (0, r.jsx)(u.Text, {
                className: v.R_,
                variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
                children: x.intl.string(x.t["7BKMcG"])
            }) : null, (0, r.jsx)("div", {
                className: s()(v.Di, {
                    [v.qy]: o <= 300
                }),
                children: m.map(e => (0, r.jsx)(p.C, {
                    context: C,
                    activityItem: e,
                    aspectRatio: p.C.AspectRatio.SIXTEEN_BY_NINE,
                    animatedDivClass: v.KU,
                    commandOrigin: b.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS
                }, e.application.id))
            }), (0, r.jsxs)(u.DUT, {
                className: v.HI,
                onClick: function() {
                    O.default.track(j.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                        tile_type: "activity suggestion",
                        close_type: "permanent",
                        n_participants: c
                    }), (0, A.Dr)(a.M.VC_TILE_ACTIVITIES_ENTRY_POINT)
                },
                children: [(0, r.jsx)(y.A, {}), (0, r.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    children: x.intl.string(x.t["5E9SB9"])
                })]
            }), (0, r.jsx)(u.DUT, {
                className: v.cG,
                onClick: function() {
                    O.default.track(j.HAw.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                        tile_type: "activity suggestion",
                        close_type: "temporary",
                        n_participants: c
                    }), i()
                },
                children: (0, r.jsx)(u.PGe, {
                    size: "md",
                    color: "currentColor",
                    className: v.b
                })
            })]
        })
    })
}