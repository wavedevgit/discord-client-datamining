/** chunk id: 706712, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Ay: () => E,
    DQ: () => w,
    Dj: () => v,
    F5: () => j,
    Jc: () => g,
    L6: () => h,
    ZX: () => F,
    km: () => k
});
var n = r(627968),
    a = r(64700),
    c = r(503698),
    l = r.n(c),
    s = r(311907),
    u = r(990078),
    i = r(397927),
    o = r(964486),
    d = r(142120),
    m = r(132262),
    x = r(661251);
let h = 1e3 / 60,
    f = 1e3 / 30,
    g = 5e3,
    p = 1e3 / 60 * 3,
    b = Math.ceil(3e3 / (1e3 / 60));

function k(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        n = a.useRef(null),
        c = a.useRef(null),
        l = a.useRef(null),
        s = a.useRef(r ?? window);
    a.useEffect(() => {
        s.current = r ?? window
    }, [r]);
    let u = a.useCallback(() => {
            null != n.current && s.current.clearInterval(n.current), null != c.current && s.current.cancelIdleCallback(c.current), null != l.current && s.current.cancelAnimationFrame(l.current)
        }, []),
        i = a.useCallback(() => {
            n.current = s.current.setTimeout(() => {
                c.current = s.current.requestIdleCallback(e), l.current = s.current.requestAnimationFrame(() => {
                    t(), i()
                })
            }, 12)
        }, [e, t]);
    return [a.useCallback(() => {
        u(), i()
    }, [u, i]), u]
}

function j(e) {
    let t = a.useRef(Array(b).fill(0)),
        r = a.useRef(performance.now()),
        n = a.useRef(0),
        c = a.useRef(0),
        l = a.useRef(0),
        s = e.dispatcher.getIsSchedulerBackgrounded(),
        u = a.useRef(s);
    u.current = s;
    let i = a.useRef(s ? performance.now() : 0);
    return a.useEffect(() => {
        e.dispatcher.getIsSchedulerBackgrounded() && (i.current = performance.now())
    }), [a.useCallback(function() {
        let e = performance.now(),
            a = e - r.current;
        r.current = e, u.current || (n.current -= t.current[l.current], t.current[l.current] = a, n.current += a, c.current < b && (c.current += 1), l.current = (l.current + 1) % b)
    }, []), (e, t) => {
        let r = c.current ?? 1;
        return Math.abs(e * t - n.current / r * r) / t
    }, () => {
        n.current = 0, c.current = 0, t.current.fill(0), r.current = performance.now(), l.current = 0
    }]
}

function v(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = a.useRef(Array(b).fill(0)),
        c = a.useRef(performance.now()),
        l = a.useRef(0),
        s = a.useRef(0),
        u = a.useRef(0),
        i = a.useRef(0),
        o = a.useRef(0),
        d = a.useRef(0),
        m = a.useCallback(() => {
            n.current.fill(0), l.current = 0, s.current = 0, i.current = 0, o.current = 0, c.current = performance.now(), u.current = 0
        }, []),
        x = a.useCallback(function() {
            let a = performance.now(),
                m = a - c.current;
            if (c.current = a, t.current && !r) return;
            if (s.current -= n.current[o.current], n.current[o.current] = m, s.current += m, i.current < b && (i.current += 1), o.current = (o.current + 1) % b, m > p) {
                let t = 0 === i.current ? h : s.current / i.current,
                    r = Math.min(2 * h, t),
                    n = Math.floor(m / (e ? r : h));
                n > 0 && (d.current = performance.now()), l.current += n
            }
            let x = 0 === i.current ? h : s.current / i.current;
            u.current += m / x
        }, [e, t, r]),
        f = 0 === i.current ? 0 : s.current / i.current;
    return {
        currentFPS: 0 === f ? 0 : h / f * 60,
        averageFrameTime: f,
        timeSinceLastDrop: (performance.now() - d.current) / 1e3,
        droppedFramesRef: l,
        bufferFramecountRef: i,
        renderedFrameCount: u,
        frameCheckerEffect: x,
        onResetFrameData: m
    }
}

function w(e) {
    let t = e.dispatcher.getIsSchedulerBackgrounded(),
        r = a.useRef(t);
    r.current = t;
    let n = a.useRef(t ? performance.now() : 0);
    return a.useEffect(() => {
        e.dispatcher.getIsSchedulerBackgrounded() && (n.current = performance.now())
    }), [r, n]
}

function T(e) {
    let {
        socket: t,
        isAverageFrameTime: r
    } = e, [c, l] = w(t), {
        currentFPS: s,
        averageFrameTime: d,
        timeSinceLastDrop: x,
        onResetFrameData: f,
        droppedFramesRef: p,
        renderedFrameCount: b,
        bufferFramecountRef: T,
        frameCheckerEffect: R
    } = v(r, c), [C, S, F] = j(t), [E, I] = k(C, R), N = performance.now() - l.current < g, y = S(d, T.current);
    (0, o.Ay)(() => (E(), () => {
        I()
    }));
    let A = a.useCallback(() => {
        f(), F(), E()
    }, [f, F, E]);
    return (0, n.jsxs)("div", {
        className: m.st,
        children: [(0, n.jsxs)(i.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: ["FPS (~3sec):", " ", (0, n.jsx)(i.Text, {
                tag: "span",
                variant: "text-md/bold",
                color: s < 30 ? "text-feedback-critical" : s < 45 ? "text-feedback-warning" : "text-strong",
                children: s.toFixed(2)
            })]
        }), (0, n.jsxs)(i.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: ["Dropped Frames:", " ", (0, n.jsx)(i.Text, {
                tag: "span",
                variant: "text-md/bold",
                color: x < 2 ? "text-feedback-critical" : x < 5 ? "text-feedback-warning" : "text-strong",
                children: p.current
            }), (0, n.jsxs)(i.Text, {
                tag: "span",
                variant: "text-sm/normal",
                color: "text-muted",
                className: m.af,
                children: ["(Dropped: ", (p.current / b.current * 100).toFixed(4), "%)"]
            }), N && (0, n.jsx)(u.m, {
                position: "left",
                text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                asContainer: !0,
                children: (0, n.jsx)(i.Text, {
                    tag: "span",
                    variant: "text-xs/bold",
                    color: "text-feedback-critical",
                    className: m.af,
                    children: "(Backgrounded)"
                })
            })]
        }), (0, n.jsxs)(i.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: ["Rendered Frames:", " ", (0, n.jsx)(i.Text, {
                tag: "span",
                variant: "text-md/semibold",
                color: "text-subtle",
                children: b.current.toFixed(0)
            })]
        }), (0, n.jsxs)(i.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: ["Frame Times (~3sec):", " ", (0, n.jsxs)(i.Text, {
                tag: "span",
                variant: "text-md/semibold",
                color: d > 1.1 * h ? "text-feedback-warning" : "text-subtle",
                children: [d.toFixed(2), "ms"]
            })]
        }), (0, n.jsx)(u.m, {
            position: "left",
            text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
            asContainer: !0,
            children: (0, n.jsxs)(i.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: ["Idle Frame Delta (~3sec):", " ", (0, n.jsxs)(i.Text, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: y > 1 ? "text-feedback-critical" : "text-subtle",
                    children: [y.toFixed(2), "ms"]
                }), N && (0, n.jsx)(u.m, {
                    position: "left",
                    text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                    asContainer: !0,
                    children: (0, n.jsx)(i.Text, {
                        tag: "span",
                        variant: "text-xs/bold",
                        color: "text-feedback-critical",
                        className: m.af,
                        children: "(Backgrounded)"
                    })
                })]
            })
        }), (0, n.jsx)("div", {
            className: m.m8,
            children: (0, n.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                text: "Reset Frame Data",
                onClick: A
            })
        })]
    })
}

function R(e) {
    let {
        socket: t,
        isAverageFrameTime: r,
        onToggleAverageFrameTime: c
    } = e, [l, s] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()), o = a.useRef(null);
    return a.useEffect(() => (o.current = setInterval(() => {
        s(t.dispatcher.getIsRequestIdleCallbackEnabled())
    }, f), () => {
        null != o.current && clearInterval(o.current)
    }), [t.dispatcher]), (0, n.jsxs)("div", {
        className: m.st,
        children: [(0, n.jsx)(u.m, {
            position: "left",
            text: "Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.",
            asContainer: !0,
            children: (0, n.jsx)(i.Checkbox, {
                label: "Use Average Frame Time",
                checked: r,
                onChange: () => c(!r)
            })
        }), (0, n.jsx)(i.Checkbox, {
            label: "Enable New Dispatch Scheduler (requestIdleCallback)",
            checked: l,
            onChange: () => {
                var e;
                return e = !l, void(t.dispatcher.toggleRequestIdleCallback(e), s(e))
            }
        })]
    })
}

function C(e) {
    let {
        socket: t
    } = e, r = t.dispatcher.getDispatchTimings(), [c, s] = a.useState(!1);
    return (0, n.jsxs)("div", {
        className: m.st,
        children: [(0, n.jsx)("div", {
            className: l()(c && m.Mq),
            children: (0, n.jsx)(i.Checkbox, {
                label: "Show Dispatch Timings",
                checked: c,
                onChange: () => s(e => !e)
            })
        }), c ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(i.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                children: "Gateway Dispatch Timings:"
            }), (0, n.jsx)("table", {
                cellPadding: 4,
                children: Object.entries(r).map(e => {
                    let [t, [r, a]] = e;
                    return (0, n.jsxs)("tr", {
                        children: [(0, n.jsx)("td", {
                            children: (0, n.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: t
                            })
                        }), (0, n.jsx)("td", {
                            children: (0, n.jsxs)(i.Text, {
                                tag: "span",
                                variant: "text-xs/bold",
                                color: "text-default",
                                children: [r.toFixed(2), "ms"]
                            })
                        }), (0, n.jsx)("td", {
                            children: (0, n.jsxs)(i.Text, {
                                tag: "span",
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ["(count: ", a, ")"]
                            })
                        })]
                    }, t)
                })
            })]
        }) : null]
    })
}

function S(e) {
    let {
        socket: t
    } = e, r = t.dispatcher.getSchedulerTelemetry(), [c, s] = a.useState(r.isTelemetryEnabled), [u, o] = a.useState(r.isTelemetryEnabled), d = e => {
        o(e), r.toggleTelemetry(e)
    };
    return (0, n.jsxs)("div", {
        className: m.st,
        children: [(0, n.jsx)(i.Checkbox, {
            label: "Enable Dispatch Telemetry",
            checked: u,
            onChange: () => d(!u)
        }), (0, n.jsx)("div", {
            className: l()(c && m.Mq),
            children: (0, n.jsx)(i.Checkbox, {
                label: "Show Dispatch Scheduler Telemetry",
                checked: c,
                onChange: () => {
                    s(e => {
                        let t = !e;
                        return t && d(!0), t
                    })
                }
            })
        }), c ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(i.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                children: "Dispatch Scheduler Telemetry:"
            }), (0, n.jsx)("table", {
                cellPadding: 4,
                children: Object.entries(r.generateTelemetry()).map(e => {
                    let [t, r] = e;
                    return (0, n.jsxs)("tr", {
                        children: [(0, n.jsx)("td", {
                            children: (0, n.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: t
                            })
                        }), (0, n.jsx)("td", {
                            children: (0, n.jsx)(i.Text, {
                                tag: "span",
                                variant: "text-xs/bold",
                                color: "text-default",
                                children: r
                            })
                        })]
                    }, t)
                })
            }), (0, n.jsx)("div", {
                className: m.m8,
                children: (0, n.jsx)(i.Button, {
                    variant: "primary",
                    size: "sm",
                    text: "Reset Scheduler Telemetry",
                    onClick: () => {
                        r.reset()
                    }
                })
            })]
        }) : null]
    })
}

function F() {
    let [, e] = a.useState({});
    a.useEffect(() => {
        let t = setInterval(() => {
            e({})
        }, f);
        return () => {
            clearInterval(t)
        }
    }, [])
}

function E() {
    let e = (0, s.bG)([d.A], () => d.A.getSocket()),
        [t, r] = a.useState(!1);
    return F(), (0, n.jsx)("div", {
        className: l()(x.nd, m.nd),
        children: (0, n.jsxs)(i.IpV, {
            className: m.nd,
            children: [(0, n.jsx)(T, {
                socket: e,
                isAverageFrameTime: t
            }), (0, n.jsx)(R, {
                socket: e,
                isAverageFrameTime: t,
                onToggleAverageFrameTime: r
            }), (0, n.jsx)(C, {
                socket: e
            }), (0, n.jsx)(S, {
                socket: e
            })]
        })
    })
}