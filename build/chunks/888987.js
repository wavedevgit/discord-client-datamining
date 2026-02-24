/** chunk id: 888987, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(990078),
    u = n(397927),
    d = n(964486),
    c = n(706712),
    h = n(142120),
    m = n(87001),
    g = n(302614),
    p = n(321090),
    A = n(392164),
    f = n(621720);

function x(e) {
    let {
        locked: t,
        pinned: n,
        anchorLeft: r
    } = e, x = (0, a.bG)([h.A], () => h.A.getSocket()), E = (0, a.bG)([p.A], () => p.A.isGPUBoosted());
    (0, c.ZX)();
    let S = (0, a.bG)([m.A], () => m.A.getWindow(A.f)),
        [v, C] = (0, c.DQ)(x),
        {
            currentFPS: I,
            averageFrameTime: T,
            timeSinceLastDrop: _,
            onResetFrameData: y,
            droppedFramesRef: j,
            renderedFrameCount: b,
            bufferFramecountRef: w,
            frameCheckerEffect: O
        } = (0, c.Dj)(!0, v, !0),
        [N, M, R] = (0, c.F5)(x),
        [k, L] = (0, c.km)(N, O, S),
        D = performance.now() - C.current < c.Jc,
        z = M(T, w.current);
    (0, d.Ay)(() => (k(), () => {
        L()
    }));
    let P = l.useCallback(() => {
            y(), R(), k()
        }, [y, R, k]),
        [G, V] = l.useState(!0),
        [U, H] = l.useState(!0),
        [Y, F] = l.useState(!0),
        [Z, W] = l.useState(!0),
        [X, K] = l.useState(!0);
    return t && !n ? null : (0, i.jsxs)("div", {
        className: s()(f.st, !r && f.Hk),
        children: [(G || !t) && (0, i.jsxs)("div", {
            className: f.PG,
            children: [!t && (0, i.jsx)("div", {
                className: f.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: G,
                    onChange: e => V(e)
                })
            }), (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: f.e0,
                children: ["FPS:", " ", (0, i.jsx)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: I < 30 ? "text-feedback-critical" : I < 45 ? "text-feedback-warning" : "text-strong",
                    children: I.toFixed(2)
                })]
            })]
        }), (U || !t) && (0, i.jsxs)("div", {
            className: f.PG,
            children: [!t && (0, i.jsx)("div", {
                className: f.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: U,
                    onChange: e => H(e)
                })
            }), (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: f.e0,
                children: ["Frame Times:", " ", (0, i.jsxs)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: T > 1.1 * c.L6 ? "text-feedback-warning" : "text-strong",
                    children: [T.toFixed(2), "ms"]
                })]
            })]
        }), (Y || !t) && (0, i.jsxs)("div", {
            className: f.PG,
            children: [!t && (0, i.jsx)("div", {
                className: f.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: Y,
                    onChange: e => F(e)
                })
            }), (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: f.e0,
                children: ["Dropped Frames:", " ", (0, i.jsx)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: _ < 2 ? "text-feedback-critical" : _ < 5 ? "text-feedback-warning" : "text-strong",
                    children: j.current
                }), (0, i.jsxs)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: "text-subtle",
                    className: f.af,
                    children: ["(", (j.current / b.current * 100).toFixed(3), "%)"]
                })]
            })]
        }), (Z || !t) && (0, i.jsxs)("div", {
            className: f.PG,
            children: [!t && (0, i.jsx)("div", {
                className: f.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: Z,
                    onChange: e => W(e)
                })
            }), (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: f.e0,
                children: ["Rendered Frames:", " ", (0, i.jsx)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: "text-strong",
                    children: b.current.toFixed(0)
                })]
            })]
        }), (X || !t) && (0, i.jsxs)("div", {
            className: f.PG,
            children: [!t && (0, i.jsx)("div", {
                className: f.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: X,
                    onChange: e => K(e)
                })
            }), (0, i.jsx)(o.m, {
                position: "left",
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                children: (0, i.jsx)("div", {
                    children: (0, i.jsxs)(u.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: f.e0,
                        children: ["Idle Frame Delta:", " ", (0, i.jsxs)(u.Text, {
                            tag: "span",
                            variant: "code",
                            color: z > 1 ? "text-feedback-critical" : "text-strong",
                            children: [z.toFixed(2), "ms"]
                        })]
                    })
                })
            })]
        }), D && (0, i.jsx)(o.m, {
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
        }), E && (0, i.jsx)(u.Text, {
            tag: "span",
            variant: "code",
            color: "text-feedback-positive",
            children: "(Using GPU Priority - Realtime)"
        }), !t && (0, i.jsx)("div", {
            className: f.m8,
            children: (0, i.jsx)(g.A, {
                children: (0, i.jsx)(u.Button, {
                    variant: "primary",
                    text: "Reset Frame Data",
                    onClick: P
                })
            })
        })]
    })
}