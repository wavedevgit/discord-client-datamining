/** chunk id: 866001 params = (module,exports,require) **/
n.d(t, {
    A: () => P
}), n(172879);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(985623),
    o = n.n(r),
    d = n(989349),
    c = n.n(d),
    u = n(990078),
    m = n(421380),
    h = n(397927),
    x = n(73153),
    p = n(58736),
    g = n(379078),
    _ = n(704554),
    f = n(603349),
    v = n(957565),
    b = n(405269),
    j = n(231545),
    A = n(708403),
    C = n(260880),
    T = n(303054),
    E = n(231643),
    S = n(652215),
    y = n(84113),
    N = n(661251);

function I(e) {
    return parseFloat(e.toFixed(3))
}
let O = [{
    key: "store",
    cellClassName: y.lA,
    render(e) {
        let {
            trace: t
        } = e;
        return t.name
    }
}, {
    key: "time",
    cellClassName: y.i7,
    render(e) {
        let {
            trace: t
        } = e;
        return `${I(t.time)} ms`
    }
}];

function R(e) {
    let {
        actionLog: t
    } = e, n = i.useMemo(() => t.traces.map(e => ({
        key: e.name,
        trace: e
    })), [t]);
    return (0, a.jsx)(h.IpV, {
        children: (0, a.jsx)(T.A, {
            columns: O,
            data: n
        })
    })
}
let k = [{
    id: "action",
    name: "Action",
    group: E.fu.NONE,
    render(e) {
        let {
            actionLog: t
        } = e, n = c()(t.createdAt);
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)(A.OA, {
                className: y.mP,
                children: [(0, a.jsx)(A.mA, {
                    name: "Created at",
                    children: (0, a.jsx)("time", {
                        dateTime: t.createdAt?.toISOString(),
                        title: (0, b.i$)(n, "LLLL"),
                        children: (0, b.mk)(n)
                    })
                }), (0, a.jsxs)(A.mA, {
                    name: "Total Time",
                    children: [I(t.totalTime), " ms"]
                })]
            }), (0, a.jsx)(h.IpV, {
                className: y.Dx,
                children: (0, a.jsx)(j.A, {
                    data: t.action
                })
            })]
        })
    }
}, {
    id: "traces",
    name: "Store Handlers",
    group: E.fu.NONE,
    render(e) {
        let {
            actionLog: t
        } = e;
        return (0, a.jsx)(R, {
            actionLog: t
        })
    }
}];

function w(e) {
    let {
        actionLog: t,
        initialHeight: n
    } = e, s = i.useMemo(() => t.error ? [...k, {
        id: "error",
        name: (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(f.A, {
                className: y.ik
            }), "Error"]
        }),
        group: E.fu.NONE,
        render(e) {
            let {
                actionLog: t
            } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                    className: l()(y.u4, N.KE),
                    children: (0, a.jsx)("div", {
                        className: N.R5,
                        children: (0, a.jsx)(m.$n, {
                            className: N.Q$,
                            size: m.$n.Sizes.MIN,
                            onClick: () => console.error(t.error),
                            children: "Log to Console"
                        })
                    })
                }), (0, a.jsx)(h.IpV, {
                    className: y.Dx,
                    children: (0, a.jsx)(j.A, {
                        data: t.error
                    })
                })]
            })
        }
    }] : k, [t]), {
        TabBar: r,
        renderSelectedTab: o
    } = (0, E.Ay)({
        tabs: s
    }, [s]);
    return (0, a.jsxs)(C.A, {
        className: y.rf,
        minHeight: 100,
        initialHeight: n,
        children: [(0, a.jsx)(r, {}), (0, a.jsxs)(p.Ay, {
            className: l()(N.jr, y.nZ),
            children: [(0, a.jsx)(p.Ay.Icon, {
                icon: h.KBH,
                tooltip: t.name
            }), (0, a.jsx)(p.Ay.Title, {
                wrapperClassName: l()(N.qd, N.ZE),
                className: N.Pz,
                children: t.name
            }), (0, a.jsx)(p.Ay.Icon, {
                icon: h.TdU,
                tooltip: "Copy event data",
                onClick: () => {
                    var e;
                    let n = JSON.stringify(Object.keys(e = t.action).reduce((t, n) => {
                        var a;
                        return t[n] = (a = e[n], S.AKn.test(a) ? "REDACTED" : a), t
                    }, {}), null, 2);
                    (0, v.C)(n, () => (0, h.showToast)({
                        id: "copy-action-log-name",
                        type: h.ToastType.SUCCESS,
                        message: "Copied action log data to clipboard"
                    }))
                }
            })]
        }), o({
            actionLog: t
        })]
    })
}
let D = [{
        key: "action",
        cellClassName: y.lA,
        render(e) {
            let {
                actionLog: t
            } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [t.error && (0, a.jsx)(f.A, {
                    className: y.ik
                }), t.name]
            })
        }
    }, {
        key: "total time",
        cellClassName: y.i7,
        render(e) {
            let {
                actionLog: t
            } = e;
            return `${I(t.totalTime)} ms`
        }
    }, {
        key: "timestamp",
        cellClassName: y.i7,
        render(e) {
            let {
                actionLog: t
            } = e;
            return c()(t.createdAt).format("HH:mm:ss.SSS")
        }
    }],
    M = {
        searchType: g.n.REGEX,
        searchStringGenerator: e => {
            let {
                actionLog: t
            } = e;
            return t.name
        },
        throttleMs: 100
    };

function P() {
    let e = i.useRef(null),
        [t, n] = i.useState(""),
        s = function(e) {
            let [t, n] = i.useState(e.logs);
            return i.useEffect(() => {
                let t = o()(() => {
                    n([...e.logs])
                }, 500);
                return e.on("log", t), () => {
                    e.off("log", t)
                }
            }, [e]), t
        }(x.h.actionLogger),
        r = i.useMemo(() => s.map(e => ({
            key: e.id.toString(),
            actionLog: e
        })).toReversed(), [s]),
        [d, c] = i.useState(r),
        [m, p] = i.useState(r),
        [g, f] = i.useState(!1),
        [v, b] = i.useState(),
        j = i.useCallback(e => {
            p(e)
        }, []);
    (0, _.RT)(t, g ? d : r, j, M);
    let A = i.useCallback(e => {
            c(r), f(e)
        }, [r]),
        C = t.trim().length > 0,
        E = i.useMemo(() => C ? m : g ? d : r, [r, m, C, g, d]),
        S = g ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(N.nd, y.nd),
        children: [(0, a.jsxs)("div", {
            className: y.KE,
            children: [(0, a.jsx)(u.m, {
                text: S,
                children: (0, a.jsx)(h.K0, {
                    size: "sm",
                    variant: g ? "primary" : "active",
                    icon: g ? h.udU : h.E$n,
                    "aria-label": S,
                    onClick: () => A(!g)
                })
            }), (0, a.jsx)(h.IWV, {
                size: "sm",
                query: t,
                onChange: n,
                onClear: () => n(""),
                placeholder: "Search by action name"
            })]
        }), (0, a.jsx)(T.A, {
            columns: D,
            data: E,
            selectedRowKey: v?.id.toString(),
            onClickRow: e => b(e.actionLog)
        }), null != v && (0, a.jsx)(w, {
            actionLog: v,
            initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
        })]
    })
}