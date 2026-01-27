/** Chunk was on 20941 **/
/** chunk id: 16293, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(158954),
    o = n(311907),
    c = n(499979),
    u = n(397927),
    d = n(263063),
    m = n(71393),
    f = n(854987),
    p = n(719718),
    h = n(57882),
    b = n(927989),
    g = n(155286),
    x = n(573138),
    y = n(877272),
    v = n(398225),
    j = n(532294),
    C = n(622865),
    _ = n(985018),
    A = n(308021),
    O = n(80577);

function E(e) {
    let {
        guild: t,
        checkpointGuild: n,
        primaryColor: l
    } = e, a = (0, v.vy)(), {
        unit: s,
        duration: o
    } = (0, h.oO)(n.numVoiceMinutes);
    return (0, r.jsx)(v.vw, {
        className: i()(O.bo, O.dl),
        spring: a,
        children: (0, r.jsxs)(b.A, {
            innerClassName: O.lm,
            useTopRightClipPath: !0,
            children: [(0, r.jsxs)("div", {
                className: O.OA,
                children: [(0, r.jsx)(d.A, {
                    guild: t,
                    size: d.A.Sizes.LARGER,
                    className: O.$f
                }), (0, r.jsx)(y.A, {
                    className: O.J5,
                    variant: "heading-xl/medium",
                    children: t.name
                })]
            }), (0, r.jsx)("div", {
                className: O.Tm,
                style: {
                    backgroundColor: l
                },
                children: (0, r.jsx)(y.A, {
                    variant: "text-lg/normal",
                    className: A.sH,
                    children: "#1"
                })
            }), (0, r.jsxs)("div", {
                className: O.dX,
                children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsx)(y.A, {
                        variant: "eyebrow",
                        children: _.intl.string(C.default.wWKySP)
                    }), (0, r.jsx)(y.A, {
                        variant: "heading-xxl/normal",
                        className: A.sH,
                        children: n.numMessagesSent
                    })]
                }), (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(y.A, {
                        variant: "eyebrow",
                        children: s === c.pJ.HOURS ? _.intl.format(C.default.Xu0QsX, {
                            numHours: o
                        }) : _.intl.string(C.default.RmVTph)
                    }), (0, r.jsx)(y.A, {
                        variant: "heading-xxl/normal",
                        className: A.sH,
                        children: o
                    })]
                })]
            })]
        })
    }, t.id)
}

function S(e) {
    let {
        guild: t,
        rank: n,
        primaryColor: l
    } = e, a = (0, v.vy)();
    return (0, r.jsx)(v.vw, {
        className: O.bo,
        spring: a,
        children: (0, r.jsxs)(b.A, {
            innerClassName: O.oQ,
            useTopRightClipPath: !0,
            children: [(0, r.jsxs)("div", {
                className: O.OA,
                children: [(0, r.jsx)(d.A, {
                    guild: t,
                    size: d.A.Sizes.LARGER,
                    className: O.$f
                }), (0, r.jsx)(y.A, {
                    className: O.J5,
                    variant: "heading-xl/medium",
                    children: t.name
                })]
            }), (0, r.jsx)("div", {
                className: O.Tm,
                style: {
                    backgroundColor: l
                },
                children: (0, r.jsxs)(y.A, {
                    variant: "text-lg/normal",
                    className: A.sH,
                    children: ["#", n]
                })
            })]
        })
    }, t.id)
}

function N() {
    let e = (0, l.useContext)(f.P),
        t = (0, u.rdh)(e.primaryColor).hex(),
        {
            guilds: {
                guilds: n
            } = {
                guilds: []
            }
        } = (0, o.bG)([p.A], () => p.A.getCheckpointData()),
        a = (0, l.useMemo)(() => n.map(e => {
            let {
                guild: t,
                numMessagesSent: n,
                numVoiceMinutes: r
            } = e;
            return {
                guild: m.A.getGuild(t.id),
                numMessagesSent: n,
                numVoiceMinutes: r
            }
        }).filter(e => {
            let {
                guild: t
            } = e;
            return null != t
        }), [n]),
        i = a.length > 0 ? a[0].guild : null;
    return (0, r.jsx)(x.A, {
        verticalFlow: !0,
        children: (0, r.jsxs)("div", {
            className: O.kL,
            children: [(0, r.jsxs)("div", {
                className: A.DD,
                children: [(0, r.jsx)(s.RR9, {
                    size: "refresh_sm",
                    color: t,
                    colorClass: A.d7
                }), (0, r.jsx)(y.A, {
                    variant: "eyebrow",
                    className: A.UP,
                    children: _.intl.string(C.default.mAroeJ)
                })]
            }), (0, r.jsxs)("div", {
                className: O.wx,
                children: [(0, r.jsx)(y.A, {
                    variant: "display-lg",
                    className: O.Vy,
                    children: _.intl.string(_.t["7hB4kg"])
                }), (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(y.A, {
                        variant: "heading-xxl/medium",
                        className: O.VA,
                        children: _.intl.string(C.default.Q0EMOP)
                    }), (0, r.jsx)(g.e, {
                        slide: j.P7.GUILDS
                    })]
                })]
            }), null != i && (0, r.jsx)(E, {
                guild: i,
                checkpointGuild: a[0],
                primaryColor: t
            }), (0, r.jsx)("div", {
                className: O.Pl,
                children: a.map((e, n) => {
                    let {
                        guild: l
                    } = e;
                    return 0 === n ? null : (0, r.jsx)(S, {
                        guild: l,
                        rank: n + 1,
                        primaryColor: t
                    }, l.id)
                })
            })]
        })
    })
}