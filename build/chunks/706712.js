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
    l = n(64700),
    r = n(503698),
    s = n.n(r),
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
        i = l.useRef(null),
        r = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(n ?? window);
    l.useEffect(() => {
        a.current = n ?? window
    }, [n]);
    let o = l.useCallback(() => {
            null != i.current && a.current.clearInterval(i.current), null != r.current && a.current.cancelIdleCallback(r.current), null != s.current && a.current.cancelAnimationFrame(s.current)
        }, []),
        u = l.useCallback(() => {
            i.current = a.current.setTimeout(() => {
                r.current = a.current.requestIdleCallback(e), s.current = a.current.requestAnimationFrame(() => {
                    t(), u()
                })
            }, 12)
        }, [e, t]);
    return [l.useCallback(() => {
        o(), u()
    }, [o, u]), o]
}

function _(e) {
    let t = l.useRef(Array(E).fill(0)),
        n = l.useRef(performance.now()),
        i = l.useRef(0),
        r = l.useRef(0),
        s = l.useRef(0),
        a = e.dispatcher.getIsSchedulerBackgrounded(),
        o = l.useRef(a);
    o.current = a;
    let u = l.useRef(a ? performance.now() : 0);
    return l.useEffect(() => {
        e.dispatcher.getIsSchedulerBackgrounded() && (u.current = performance.now())
    }), [l.useCallback(function() {
        let e = performance.now(),
            l = e - n.current;
        n.current = e, o.current || (i.current -= t.current[s.current], t.current[s.current] = l, i.current += l, r.current < E && (r.current += 1), s.current = (s.current + 1) % E)
    }, []), (e, t) => {
        let n = r.current ?? 1;
        return Math.abs(e * t - i.current / n * n) / t
    }, () => {
        i.current = 0, r.current = 0, t.current.fill(0), n.current = performance.now(), s.current = 0
    }]
}

function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = l.useRef(Array(E).fill(0)),
        r = l.useRef(performance.now()),
        s = l.useRef(0),
        a = l.useRef(0),
        o = l.useRef(0),
        u = l.useRef(0),
        d = l.useRef(0),
        c = l.useRef(0),
        h = l.useCallback(() => {
            i.current.fill(0), s.current = 0, a.current = 0, u.current = 0, d.current = 0, r.current = performance.now(), o.current = 0
        }, []),
        g = l.useCallback(function() {
            let l = performance.now(),
                h = l - r.current;
            if (r.current = l, t.current && !n) return;
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
        n = l.useRef(t);
    n.current = t;
    let i = l.useRef(t ? performance.now() : 0);
    return l.useEffect(() => {
        e.dispatcher.getIsSchedulerBackgrounded() && (i.current = performance.now())
    }), [n, i]
}

function T(e) {
    let {
        socket: t,
        isAverageFrameTime: n
    } = e, [r, s] = x(t), {
        currentFPS: a,
        averageFrameTime: c,
        timeSinceLastDrop: g,
        onResetFrameData: f,
        droppedFramesRef: I,
        renderedFrameCount: E,
        bufferFramecountRef: T,
        frameCheckerEffect: N
    } = S(n, r), [C, v, y] = _(t), [M, R] = p(C, N), D = performance.now() - s.current < A, b = v(c, T.current);
    (0, d.Ay)(() => (M(), () => {
        R()
    }));
    let O = l.useCallback(() => {
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
            }), D && (0, i.jsx)(o.m, {
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
                    color: b > 1 ? "text-feedback-critical" : "text-subtle",
                    children: [b.toFixed(2), "ms"]
                }), D && (0, i.jsx)(o.m, {
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

function N(e) {
    let {
        socket: t,
        isAverageFrameTime: n,
        onToggleAverageFrameTime: r
    } = e, [s, a] = l.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()), d = l.useRef(null);
    return l.useEffect(() => (d.current = setInterval(() => {
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
                onChange: () => r(!n)
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

function C(e) {
    let {
        socket: t
    } = e, n = t.dispatcher.getDispatchTimings(), [r, a] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: h.st,
        children: [(0, i.jsx)("div", {
            className: s()(r && h.Mq),
            children: (0, i.jsx)(u.Checkbox, {
                label: "Show Dispatch Timings",
                checked: r,
                onChange: () => a(e => !e)
            })
        }), r ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                children: "Gateway Dispatch Timings:"
            }), (0, i.jsx)("table", {
                cellPadding: 4,
                children: Object.entries(n).map(e => {
                    let [t, [n, l]] = e;
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
                                children: ["(count: ", l, ")"]
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
    } = e, n = t.dispatcher.getSchedulerTelemetry(), [r, a] = l.useState(n.isTelemetryEnabled), [o, d] = l.useState(n.isTelemetryEnabled), c = e => {
        d(e), n.toggleTelemetry(e)
    };
    return (0, i.jsxs)("div", {
        className: h.st,
        children: [(0, i.jsx)(u.Checkbox, {
            label: "Enable Dispatch Telemetry",
            checked: o,
            onChange: () => c(!o)
        }), (0, i.jsx)("div", {
            className: s()(r && h.Mq),
            children: (0, i.jsx)(u.Checkbox, {
                label: "Show Dispatch Scheduler Telemetry",
                checked: r,
                onChange: () => {
                    a(e => {
                        let t = !e;
                        return t && c(!0), t
                    })
                }
            })
        }), r ? (0, i.jsxs)(i.Fragment, {
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
    let [, e] = l.useState({});
    l.useEffect(() => {
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
        [t, n] = l.useState(!1);
    return y(), (0, i.jsx)("div", {
        className: s()(g.nd, h.nd),
        children: (0, i.jsxs)(u.IpV, {
            className: h.nd,
            children: [(0, i.jsx)(T, {
                socket: e,
                isAverageFrameTime: t
            }), (0, i.jsx)(N, {
                socket: e,
                isAverageFrameTime: t,
                onToggleAverageFrameTime: n
            }), (0, i.jsx)(C, {
                socket: e
            }), (0, i.jsx)(v, {
                socket: e
            })]
        })
    })
}