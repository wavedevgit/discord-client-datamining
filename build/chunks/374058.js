/** chunk id: 374058 params = (module,exports,require) **/
n.d(t, {
    A: () => M
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(989349),
    o = n.n(r),
    d = n(311907),
    c = n(421380),
    u = n(397927),
    m = n(297413),
    h = n(58736),
    x = n(379078),
    p = n(704554),
    g = n(287809),
    f = n(957565),
    v = n(405269),
    _ = n(967954),
    b = n(538064),
    j = n(708403),
    A = n(260880),
    C = n(303054),
    y = n(231643),
    S = n(985018),
    E = n(683426),
    T = n(793877);
let N = [{
    key: "event",
    cellClassName: E.Hz,
    render(e) {
        let {
            event: t
        } = e;
        return t
    }
}, {
    key: "location",
    cellClassName: E.QN,
    render(e) {
        let {
            properties: t
        } = e;
        return null == t.location ? null : t.location
    }
}];

function I(e) {
    let {
        children: t
    } = e;
    return (0, a.jsx)(u.IpV, {
        className: E._D,
        children: (0, a.jsx)("dl", {
            children: t
        })
    })
}

function k(e) {
    let {
        name: t,
        children: n,
        copyValue: s
    } = e, [l, r] = i.useState(!1);
    return i.useEffect(() => {
        if (l) {
            let e = setTimeout(() => r(!1), 1e3);
            return () => clearTimeout(e)
        }
    }, [l]), (0, a.jsxs)("div", {
        className: E.fY,
        children: [(0, a.jsx)("dt", {
            className: E.m2,
            children: t
        }), (0, a.jsx)("dd", {
            children: n
        }), (0, a.jsx)(u.DUT, {
            tag: "span",
            className: E.nH,
            onClick: () => (0, f.C)(JSON.stringify(s), () => r(!0)),
            children: l ? (0, a.jsx)(u.Uzd, {
                color: "currentColor",
                size: "sm"
            }) : (0, a.jsx)(u.TdU, {
                color: "currentColor",
                size: "sm"
            })
        })]
    })
}
let O = new Set(["client_performance_cpu", "client_performance_memory"]),
    R = [{
        id: "details",
        name: "Details",
        group: y.fu.NONE,
        render: e => {
            let {
                loggedEvent: {
                    event: t,
                    properties: n,
                    timestamp: i,
                    fingerprint: s
                },
                onClose: r,
                filteredEvents: d
            } = e, c = g.default.getUser(s), x = o()(i);
            return (0, a.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [(0, a.jsxs)(h.Ay, {
                    className: l()(T.jr, E.nZ),
                    children: [(0, a.jsx)(h.Ay.Icon, {
                        icon: u.Uy2,
                        tooltip: t
                    }), (0, a.jsxs)(h.Ay.Title, {
                        wrapperClassName: E.qd,
                        children: [t, (0, a.jsx)(u.DUT, {
                            tag: "span",
                            className: E.KE,
                            onClick: () => (0, f.C)(t),
                            children: (0, a.jsx)(u.TdU, {
                                color: "currentColor",
                                size: "sm"
                            })
                        })]
                    }), (0, a.jsx)(h.Ay.Icon, {
                        icon: u.TdU,
                        tooltip: "Copy all properties",
                        onClick: () => {
                            (0, f.C)(JSON.stringify({
                                event: t,
                                timestamp: i,
                                fingerprint: s,
                                user: c?.id,
                                ...n
                            }, (e, t) => void 0 === t ? null : t, 2))
                        }
                    }), (0, a.jsx)(h.Ay.Icon, {
                        icon: u.aXh,
                        tooltip: "Close",
                        onClick: r
                    })]
                }), (0, a.jsxs)(j.OA, {
                    className: E.ZK,
                    children: [(0, a.jsx)(j.mA, {
                        name: "Timestamp (local)",
                        copyValue: i.toISOString(),
                        children: (0, a.jsxs)("time", {
                            dateTime: i.toISOString(),
                            title: (0, v.i$)(x, "LLLL"),
                            children: ["(", o().locale(), ") ", (0, v.mk)(x)]
                        })
                    }), null != c && (0, a.jsx)(j.mA, {
                        name: "User",
                        copyValue: c.id,
                        children: (0, a.jsx)(m.A, {
                            user: c
                        })
                    }), (0, a.jsx)(j.mA, {
                        name: "Fingerprint",
                        copyValue: s,
                        children: (0, a.jsx)("code", {
                            children: s
                        })
                    })]
                }), (0, a.jsx)(I, {
                    children: Object.entries(n).map(e => {
                        let [n, i] = e, s = O.has(n) ? ((e, t, n) => {
                            let a = e.filter(e => e.event === t);
                            if (0 === a.length) return {
                                average: null,
                                count: 0
                            };
                            let i = null,
                                s = 0;
                            for (let e of a) {
                                let t = e.properties[n];
                                "number" == typeof t && (s += 1, null == i ? i = t : i += t)
                            }
                            return {
                                average: null !== i ? i / a.length : null,
                                count: s
                            }
                        })(d, t, n) : null;
                        return (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(k, {
                                name: `${n}:`,
                                copyValue: {
                                    [n]: i || null
                                },
                                children: null != i ? (0, a.jsx)("code", {
                                    children: JSON.stringify(i)
                                }) : (0, a.jsx)("code", {
                                    className: E.HO,
                                    children: "null"
                                })
                            }, n), null !== s && null !== s.average && (0, a.jsx)(k, {
                                name: `${n}_avg:`,
                                copyValue: {
                                    [n]: i || null
                                },
                                children: (0, a.jsxs)("code", {
                                    children: [s.average.toFixed(3), " (", s.count, ")"]
                                })
                            }, `${n}_avg`)]
                        }, `${n}_container`)
                    })
                })]
            })
        }
    }],
    w = {
        events: {
            label: "Events",
            filter: e => Object.entries(w).filter(e => {
                let [t] = e;
                return "events" !== t
            }).map(t => {
                let [n, {
                    filter: a
                }] = t;
                return !a(e)
            }).every(e => e)
        },
        experiments: {
            label: "Experiments",
            filter: e => ["experiment_user_triggered", "experiment_guild_triggered"].includes(e.event)
        },
        impressions: {
            label: "Impressions",
            filter: e => e.event.startsWith("impression_")
        },
        networkActions: {
            label: "Network",
            filter: e => e.event.startsWith("network_action")
        }
    },
    D = {
        searchType: x.n.REGEX,
        searchStringGenerator: e => {
            let {
                event: t,
                properties: n
            } = e;
            return null != n.location ? [t, n.location] : t
        },
        throttleMs: 100
    };

function M() {
    let e = i.useRef(null),
        [t, n] = i.useState(""),
        s = (0, d.bG)([_.A], () => _.A.loggedEventsVersion),
        [r, o] = i.useState(() => Object.keys(w)),
        [m, h] = i.useState(_.A.loggedEvents),
        x = i.useCallback(e => {
            h(e)
        }, []);
    (0, p.RT)(t, _.A.loggedEvents, x, D, [s]);
    let g = m.filter(e => {
            for (let t of r)
                if (w[t].filter(e)) return !0;
            return !1
        }),
        [f, v] = i.useState(void 0),
        j = g.find(e => e.key === f),
        {
            TabBar: I,
            renderSelectedTab: k
        } = (0, y.Ay)({
            tabs: R
        }, []);
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(T.nd, E.nd),
        children: [(0, a.jsxs)("div", {
            className: E.rh,
            children: [(0, a.jsx)(c.$n, {
                className: E.Q$,
                look: c.$n.Looks.BLANK,
                size: c.$n.Sizes.ICON,
                onClick: b.eY,
                children: (0, a.jsx)("span", {
                    title: S.intl.string(S.t.VkKicb),
                    children: (0, a.jsx)(u.ucK, {
                        size: "md",
                        color: "currentColor",
                        "aria-label": S.intl.string(S.t.VkKicb)
                    })
                })
            }), (0, a.jsx)("div", {
                className: E.Bi
            }), (0, a.jsx)("div", {
                className: E.uW,
                children: Object.entries(w).map(e => {
                    let [t, n] = e;
                    return (0, a.jsx)(u.DUT, {
                        className: l()(E.pb, r.includes(t) && E.bx),
                        onClick: () => {
                            o(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
                        },
                        children: n.label
                    }, t)
                })
            })]
        }), (0, a.jsx)("div", {
            className: E.rh,
            children: (0, a.jsx)(u.IWV, {
                size: "sm",
                query: t,
                onChange: n,
                onClear: () => n(""),
                placeholder: "Search by event name"
            })
        }), (0, a.jsx)(C.A, {
            columns: N,
            data: g,
            selectedRowKey: f,
            onClickRow: e => v(e.key)
        }), null != j && (0, a.jsxs)(A.A, {
            className: E.rf,
            minHeight: 100,
            initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
            children: [(0, a.jsx)(I, {}), k({
                loggedEvent: j,
                onClose: () => v(void 0),
                filteredEvents: g
            })]
        })]
    })
}