/** Chunk was on 47841 **/
/** chunk id: 327427, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var r = n(627968),
    i = n(397927),
    l = n(501592),
    s = n(580630),
    a = n(300233),
    o = n(599941),
    c = n(11351),
    d = n(456058),
    u = n(520057),
    g = n(27591),
    m = n(317547),
    p = n(196827),
    f = n(595303),
    b = n(781289),
    h = n(652215),
    x = n(985018),
    j = n(367571);

function _(e) {
    let {
        payoutsByPeriod: t,
        team: n
    } = e, l = (0, c.gN)() ? null : x.intl.format(x.t.d1sCiW, {
        url: null != n ? h.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null
    });
    return 0 === t.length ? (0, r.jsxs)(i.Text, {
        variant: "text-sm/medium",
        children: [x.intl.string(x.t.RrtXuy), " ", l]
    }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(i.Text, {
            variant: "text-sm/medium",
            children: [x.intl.string(x.t["9Ub4KY"]), " ", l]
        }), (0, r.jsx)(i.hKd, {
            size: 16
        }), (0, r.jsx)(m.Ay, {
            payoutsByPeriod: t
        })]
    })
}

function O(e) {
    let {
        guildId: t,
        totalPayoutsForPeriod: n
    } = e, i = (0, o.uP)(t, {
        includeSoftDeleted: !0
    });
    return null == n && 0 === i.length ? null : (0, r.jsx)(g.A, {
        totalPayoutsForPeriod: n,
        guildId: t,
        className: j.fV
    })
}
let v = e => {
    var t, n;
    let {
        guildId: a,
        application: o
    } = e, {
        loading: g,
        team: m,
        currentPeriod: v,
        allPeriods: y,
        metrics: A
    } = (0, d.A)(a, o), E = (0, u.w)(a), N = (0, c.gN)();
    return g ? (0, r.jsx)(i.y$y, {}) : (0, r.jsxs)(r.Fragment, {
        children: [E && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.A, {
                children: x.intl.format(x.t["2raBCT"], {
                    insightsURL: h.X7G.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(a)
                })
            }), (0, r.jsx)(i.hKd, {
                size: 32
            })]
        }), (0, r.jsxs)(i.nVY, {
            label: x.intl.string(x.t.ofmOzb),
            className: j.gy,
            children: [(0, r.jsx)(i.hKd, {
                size: 8
            }), (0, r.jsxs)("div", {
                className: j.Zs,
                children: [(0, r.jsx)(p.A, {
                    label: x.intl.string(x.t.iY1jW3),
                    value: (0, s.$g)(null != (t = A.revenue) ? t : 0, h.Yri.USD),
                    additionalContent: (0, r.jsx)(p.u, {
                        value: A.revenuePctChange,
                        isPercent: !0
                    })
                }), (0, r.jsx)(p.A, {
                    label: x.intl.string(x.t["cXyw2/"]),
                    value: (0, r.jsxs)(r.Fragment, {
                        children: [null != (n = A.subscribers) ? n : "-", " ", (0, r.jsx)(i.nys, {
                            size: "md",
                            color: "currentColor",
                            className: j.D9,
                            "aria-hidden": !0
                        })]
                    }),
                    additionalContent: (0, r.jsx)(p.u, {
                        value: A.subscriberChange
                    })
                })]
            }), (0, r.jsx)(O, {
                guildId: a,
                totalPayoutsForPeriod: v
            })]
        }), (0, r.jsx)(i.nVY, {
            label: x.intl.string(x.t["+5Rmhl"]),
            className: j.gy,
            children: (0, r.jsx)(_, {
                payoutsByPeriod: y,
                team: m
            })
        }), (0, r.jsx)(i.nVY, {
            label: x.intl.string(x.t.O8cDAJ),
            className: j.gy,
            disabled: N,
            children: (0, r.jsx)(f.A, {
                guildId: a,
                application: o
            })
        }), (0, r.jsx)(i.nVY, {
            label: x.intl.string(x.t["0n7R2X"]),
            className: j.gy,
            children: (0, r.jsx)(b.A, {
                guildId: a,
                allPeriods: y
            })
        })]
    })
};

function y(e) {
    return (0, r.jsx)(a.H, {
        guildId: e.guildId,
        children: (0, r.jsx)(v, function(e) {
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
        }({}, e))
    })
}