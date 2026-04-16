/** chunk id: 706712 params = (module,exports,require) **/
n.d(t, {
    Ay: () => M,
    DQ: () => x,
    Dj: () => S,
    F5: () => _,
    Jc: () => A,
    L6: () => m,
    ZX: () => y,
    km: () => p
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(990078),
    u = n(397927),
    d = n(964486),
    c = n(142120),
    h = n(127819),
    g = n(505206);
let m = 1e3 / 60,
    f = 1e3 / 30,
    A = 5e3,
    I = 1e3 / 60 * 3,
    E = Math.ceil(3e3 / (1e3 / 60));

function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        i = r.useRef(null),
        l = r.useRef(null),
        s = r.useRef(null),
        a = r.useRef(n ?? window);
    r.useEffect(() => {
        a.current = n ?? window
    }, [n]);
    let o = r.useCallback(() => {
            null != i.current && a.current.clearInterval(i.current), null != l.current && a.current.cancelIdleCallback(l.current), null != s.current && a.current.cancelAnimationFrame(s.current)
        }, []),
        u = r.useCallback(() => {
            i.current = a.current.setTimeout(() => {
                l.current = a.current.requestIdleCallback(e), s.current = a.current.requestAnimationFrame(() => {
                    t(), u()
                })
            }, 12)
        }, [e, t]);
    return [r.useCallback(() => {
        o(), u()
    }, [o, u]), o]
}

function _(e) {
    let t = r.useRef(Array(E).fill(0)),
        n = r.useRef(performance.now()),
        i = r.useRef(0),
        l = r.useRef(0),
        s = r.useRef(0),
        a = e.dispatcher.getIsSchedulerBackgrounded(),
        o = r.useRef(a);
    o.current = a;
    let u = r.useRef(a ? performance.now() : 0);
    return r.useEffect(() => {
        e.dispatcher.getIsSchedulerBackgrounded() && (u.current = performance.now())
    }), [r.useCallback(function() {
        let e = performance.now(),
            r = e - n.current;
        n.current = e, o.current || (i.current -= t.current[s.current], t.current[s.current] = r, i.current += r, l.current < E && (l.current += 1), s.current = (s.current + 1) % E)
    }, []), (e, t) => {
        let n = l.current ?? 1;
        return Math.abs(e * t - i.current / n * n) / t
    }, () => {
        i.current = 0, l.current = 0, t.current.fill(0), n.current = performance.now(), s.current = 0
    }]
}

function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = r.useRef(Array(E).fill(0)),
        l = r.useRef(performance.now()),
        s = r.useRef(0),
        a = r.useRef(0),
        o = r.useRef(0),
        u = r.useRef(0),
        d = r.useRef(0),
        c = r.useRef(0),
        h = r.useCallback(() => {
            i.current.fill(0), s.current = 0, a.current = 0, u.current = 0, d.current = 0, l.current = performance.now(), o.current = 0
        }, []),
        g = r.useCallback(function() {
            let r = performance.now(),
                h = r - l.current;
            if (l.current = r, t.current && !n) return;
            if (a.current -= i.current[d.current], i.current[d.current] = h, a.current += h, u.current < E && (u.current += 1), d.current = (d.current + 1) % E, h > I) {
                let t = 0 === u.current ? m : a.current / u.current,
                    n = Math.min(2 * m, t),
                    i = Math.floor(h / (e ? n : m));
                i > 0 && (c.current = performance.now()), s.current += i
            }
            let g = 0 === u.current ? m : a.current / u.current;
            o.current += h / g
        }, [e, t, n]),
        f = 0 === u.current ? 0 : a.current / u.current;
    return {
        currentFPS: 0 === f ? 0 : m / f * 60,
        averageFrameTime: f,
        timeSinceLastDrop: (performance.now() - c.current) / 1e3,
        droppedFramesRef: s,
        bufferFramecountRef: u,
        renderedFrameCount: o,
        frameCheckerEffect: g,
        onResetFrameData: h
    }
}

function x(e) {
    let t = e.dispatcher.getIsSchedulerBackgrounded(),
        n = r.useRef(t);
    n.current = t;
    let i = r.useRef(t ? performance.now() : 0);
    return r.useEffect(() => {
        e.dispatcher.getIsSchedulerBackgrounded() && (i.current = performance.now())
    }), [n, i]
}

function T(e) {
    let {
        socket: t,
        isAverageFrameTime: n
    } = e, [l, s] = x(t), {
        currentFPS: a,
        averageFrameTime: c,
        timeSinceLastDrop: g,
        onResetFrameData: f,
        droppedFramesRef: I,
        renderedFrameCount: E,
        bufferFramecountRef: T,
        frameCheckerEffect: C
    } = S(n, l), [N, v, y] = _(t), [M, b] = p(N, C), R = performance.now() - s.current < A, D = v(c, T.current);
    (0, d.Ay)(() => (M(), () => {
        b()
    }));
    let O = r.useCallback(() => {
        f(), y(), M()
    }, [f, y, M]);
    return (0, i.jsxs)("div", {
        className: h.st,
        children: [(0, i.jsxs)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: ["FPS (~3sec):", " ", (0, i.jsx)(u.Text, {
                tag: "span",
                variant: "text-md/bold",
                color: a < 30 ? "text-feedback-critical" : a < 45 ? "text-feedback-warning" : "text-strong",
                children: a.toFixed(2)
            })]
        }), (0, i.jsxs)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: ["Dropped Frames:", " ", (0, i.jsx)(u.Text, {
                tag: "span",
                variant: "text-md/bold",
                color: g < 2 ? "text-feedback-critical" : g < 5 ? "text-feedback-warning" : "text-strong",
                children: I.current
            }), (0, i.jsxs)(u.Text, {
                tag: "span",
                variant: "text-sm/normal",
                color: "text-muted",
                className: h.af,
                children: ["(Dropped: ", (I.current / E.current * 100).toFixed(4), "%)"]
            }), R && (0, i.jsx)(o.m, {
                position: "left",
                text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                asContainer: !0,
                children: (0, i.jsx)(u.Text, {
                    tag: "span",
                    variant: "text-xs/bold",
                    color: "text-feedback-critical",
                    className: h.af,
                    children: "(Backgrounded)"
                })
            })]
        }), (0, i.jsxs)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: ["Rendered Frames:", " ", (0, i.jsx)(u.Text, {
                tag: "span",
                variant: "text-md/semibold",
                color: "text-subtle",
                children: E.current.toFixed(0)
            })]
        }), (0, i.jsxs)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: ["Frame Times (~3sec):", " ", (0, i.jsxs)(u.Text, {
                tag: "span",
                variant: "text-md/semibold",
                color: c > 1.1 * m ? "text-feedback-warning" : "text-subtle",
                children: [c.toFixed(2), "ms"]
            })]
        }), (0, i.jsx)(o.m, {
            position: "left",
            text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
            asContainer: !0,
            children: (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: ["Idle Frame Delta (~3sec):", " ", (0, i.jsxs)(u.Text, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: D > 1 ? "text-feedback-critical" : "text-subtle",
                    children: [D.toFixed(2), "ms"]
                }), R && (0, i.jsx)(o.m, {
                    position: "left",
                    text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                    asContainer: !0,
                    children: (0, i.jsx)(u.Text, {
                        tag: "span",
                        variant: "text-xs/bold",
                        color: "text-feedback-critical",
                        className: h.af,
                        children: "(Backgrounded)"
                    })
                })]
            })
        }), (0, i.jsx)("div", {
            className: h.m8,
            children: (0, i.jsx)(u.Button, {
                variant: "primary",
                size: "sm",
                text: "Reset Frame Data",
                onClick: O
            })
        })]
    })
}

function C(e) {
    let {
        socket: t,
        isAverageFrameTime: n,
        onToggleAverageFrameTime: l
    } = e, [s, a] = r.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()), d = r.useRef(null);
    return r.useEffect(() => (d.current = setInterval(() => {
        a(t.dispatcher.getIsRequestIdleCallbackEnabled())
    }, f), () => {
        null != d.current && clearInterval(d.current)
    }), [t.dispatcher]), (0, i.jsxs)("div", {
        className: h.st,
        children: [(0, i.jsx)(o.m, {
            position: "left",
            text: "Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.",
            asContainer: !0,
            children: (0, i.jsx)(u.Checkbox, {
                label: "Use Average Frame Time",
                checked: n,
                onChange: () => l(!n)
            })
        }), (0, i.jsx)(u.Checkbox, {
            label: "Enable New Dispatch Scheduler (requestIdleCallback)",
            checked: s,
            onChange: () => {
                var e;
                return e = !s, void(t.dispatcher.toggleRequestIdleCallback(e), a(e))
            }
        })]
    })
}

function N(e) {
    let {
        socket: t
    } = e, n = t.dispatcher.getDispatchTimings(), [l, a] = r.useState(!1);
    return (0, i.jsxs)("div", {
        className: h.st,
        children: [(0, i.jsx)("div", {
            className: s()(l && h.Mq),
            children: (0, i.jsx)(u.Checkbox, {
                label: "Show Dispatch Timings",
                checked: l,
                onChange: () => a(e => !e)
            })
        }), l ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                children: "Gateway Dispatch Timings:"
            }), (0, i.jsx)("table", {
                cellPadding: 4,
                children: Object.entries(n).map(e => {
                    let [t, [n, r]] = e;
                    return (0, i.jsxs)("tr", {
                        children: [(0, i.jsx)("td", {
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: t
                            })
                        }), (0, i.jsx)("td", {
                            children: (0, i.jsxs)(u.Text, {
                                tag: "span",
                                variant: "text-xs/bold",
                                color: "text-default",
                                children: [n.toFixed(2), "ms"]
                            })
                        }), (0, i.jsx)("td", {
                            children: (0, i.jsxs)(u.Text, {
                                tag: "span",
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ["(count: ", r, ")"]
                            })
                        })]
                    }, t)
                })
            })]
        }) : null]
    })
}

function v(e) {
    let {
        socket: t
    } = e, n = t.dispatcher.getSchedulerTelemetry(), [l, a] = r.useState(n.isTelemetryEnabled), [o, d] = r.useState(n.isTelemetryEnabled), c = e => {
        d(e), n.toggleTelemetry(e)
    };
    return (0, i.jsxs)("div", {
        className: h.st,
        children: [(0, i.jsx)(u.Checkbox, {
            label: "Enable Dispatch Telemetry",
            checked: o,
            onChange: () => c(!o)
        }), (0, i.jsx)("div", {
            className: s()(l && h.Mq),
            children: (0, i.jsx)(u.Checkbox, {
                label: "Show Dispatch Scheduler Telemetry",
                checked: l,
                onChange: () => {
                    a(e => {
                        let t = !e;
                        return t && c(!0), t
                    })
                }
            })
        }), l ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                children: "Dispatch Scheduler Telemetry:"
            }), (0, i.jsx)("table", {
                cellPadding: 4,
                children: Object.entries(n.generateTelemetry()).map(e => {
                    let [t, n] = e;
                    return (0, i.jsxs)("tr", {
                        children: [(0, i.jsx)("td", {
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: t
                            })
                        }), (0, i.jsx)("td", {
                            children: (0, i.jsx)(u.Text, {
                                tag: "span",
                                variant: "text-xs/bold",
                                color: "text-default",
                                children: n
                            })
                        })]
                    }, t)
                })
            }), (0, i.jsx)("div", {
                className: h.m8,
                children: (0, i.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Reset Scheduler Telemetry",
                    onClick: () => {
                        n.reset()
                    }
                })
            })]
        }) : null]
    })
}

function y() {
    let [, e] = r.useState({});
    r.useEffect(() => {
        let t = setInterval(() => {
            e({})
        }, f);
        return () => {
            clearInterval(t)
        }
    }, [])
}

function M() {
    let e = (0, a.bG)([c.A], () => c.A.getSocket()),
        [t, n] = r.useState(!1);
    return y(), (0, i.jsx)("div", {
        className: s()(g.nd, h.nd),
        children: (0, i.jsxs)(u.IpV, {
            className: h.nd,
            children: [(0, i.jsx)(T, {
                socket: e,
                isAverageFrameTime: t
            }), (0, i.jsx)(C, {
                socket: e,
                isAverageFrameTime: t,
                onToggleAverageFrameTime: n
            }), (0, i.jsx)(N, {
                socket: e
            }), (0, i.jsx)(v, {
                socket: e
            })]
        })
    })
}