/** chunk id: 888987, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(990078),
    u = n(397927),
    c = n(964486),
    d = n(706712),
    h = n(142120),
    p = n(87001),
    f = n(302614),
    g = n(321090),
    m = n(392164),
    y = n(621720);

function A(e) {
    let {
        locked: t,
        pinned: n,
        anchorLeft: l
    } = e, A = (0, s.bG)([h.A], () => h.A.getSocket()), v = (0, s.bG)([g.A], () => g.A.isGPUBoosted());
    (0, d.ZX)();
    let b = (0, s.bG)([p.A], () => p.A.getWindow(m.f)),
        [E, O] = (0, d.DQ)(A),
        {
            currentFPS: x,
            averageFrameTime: _,
            timeSinceLastDrop: S,
            onResetFrameData: I,
            droppedFramesRef: j,
            renderedFrameCount: T,
            bufferFramecountRef: C,
            frameCheckerEffect: N
        } = (0, d.Dj)(!0, E, !0),
        [w, P, D] = (0, d.F5)(A),
        [R, k] = (0, d.km)(w, N, b),
        M = performance.now() - O.current < d.Jc,
        L = P(_, C.current);
    (0, c.Ay)(() => (R(), () => {
        k()
    }));
    let U = r.useCallback(() => {
            I(), D(), R()
        }, [I, D, R]),
        [G, V] = r.useState(!0),
        [z, F] = r.useState(!0),
        [H, Y] = r.useState(!0),
        [K, W] = r.useState(!0),
        [B, Z] = r.useState(!0);
    return t && !n ? null : (0, i.jsxs)("div", {
        className: a()(y.st, !l && y.Hk),
        children: [(G || !t) && (0, i.jsxs)("div", {
            className: y.PG,
            children: [!t && (0, i.jsx)("div", {
                className: y.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: G,
                    onChange: e => V(e)
                })
            }), (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: y.e0,
                children: ["FPS:", " ", (0, i.jsx)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: x < 30 ? "text-feedback-critical" : x < 45 ? "text-feedback-warning" : "text-strong",
                    children: x.toFixed(2)
                })]
            })]
        }), (z || !t) && (0, i.jsxs)("div", {
            className: y.PG,
            children: [!t && (0, i.jsx)("div", {
                className: y.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: z,
                    onChange: e => F(e)
                })
            }), (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: y.e0,
                children: ["Frame Times:", " ", (0, i.jsxs)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: _ > 1.1 * d.L6 ? "text-feedback-warning" : "text-strong",
                    children: [_.toFixed(2), "ms"]
                })]
            })]
        }), (H || !t) && (0, i.jsxs)("div", {
            className: y.PG,
            children: [!t && (0, i.jsx)("div", {
                className: y.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: H,
                    onChange: e => Y(e)
                })
            }), (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: y.e0,
                children: ["Dropped Frames:", " ", (0, i.jsx)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: S < 2 ? "text-feedback-critical" : S < 5 ? "text-feedback-warning" : "text-strong",
                    children: j.current
                }), (0, i.jsxs)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: "text-subtle",
                    className: y.af,
                    children: ["(", (j.current / T.current * 100).toFixed(3), "%)"]
                })]
            })]
        }), (K || !t) && (0, i.jsxs)("div", {
            className: y.PG,
            children: [!t && (0, i.jsx)("div", {
                className: y.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: K,
                    onChange: e => W(e)
                })
            }), (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: y.e0,
                children: ["Rendered Frames:", " ", (0, i.jsx)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: "text-strong",
                    children: T.current.toFixed(0)
                })]
            })]
        }), (B || !t) && (0, i.jsxs)("div", {
            className: y.PG,
            children: [!t && (0, i.jsx)("div", {
                className: y.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: B,
                    onChange: e => Z(e)
                })
            }), (0, i.jsx)(o.m, {
                position: "left",
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                children: (0, i.jsx)("div", {
                    children: (0, i.jsxs)(u.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: y.e0,
                        children: ["Idle Frame Delta:", " ", (0, i.jsxs)(u.Text, {
                            tag: "span",
                            variant: "code",
                            color: L > 1 ? "text-feedback-critical" : "text-strong",
                            children: [L.toFixed(2), "ms"]
                        })]
                    })
                })
            })]
        }), M && (0, i.jsx)(o.m, {
            position: "left",
            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
            children: (0, i.jsx)("span", {
                children: (0, i.jsx)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: "text-feedback-critical",
                    children: "(Main App Backgrounded)"
                })
            })
        }), v && (0, i.jsx)(u.Text, {
            tag: "span",
            variant: "code",
            color: "text-feedback-positive",
            children: "(Using GPU Priority - Realtime)"
        }), !t && (0, i.jsx)("div", {
            className: y.m8,
            children: (0, i.jsx)(f.A, {
                children: (0, i.jsx)(u.Button, {
                    variant: "primary",
                    text: "Reset Frame Data",
                    onClick: U
                })
            })
        })]
    })
}