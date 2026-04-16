/** chunk id: 888987 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(990078),
    u = n(397927),
    d = n(964486),
    c = n(706712),
    h = n(142120),
    g = n(87001),
    m = n(302614),
    f = n(321090),
    A = n(392164),
    I = n(548934);

function E(e) {
    let {
        locked: t,
        pinned: n,
        anchorLeft: l
    } = e, E = (0, a.bG)([h.A], () => h.A.getSocket()), p = (0, a.bG)([f.A], () => f.A.isGPUBoosted());
    (0, c.ZX)();
    let _ = (0, a.bG)([g.A], () => g.A.getWindow(A.f)),
        [S, x] = (0, c.DQ)(E),
        {
            currentFPS: T,
            averageFrameTime: C,
            timeSinceLastDrop: N,
            onResetFrameData: v,
            droppedFramesRef: y,
            renderedFrameCount: M,
            bufferFramecountRef: b,
            frameCheckerEffect: R
        } = (0, c.Dj)(!0, S, !0),
        [D, O, w] = (0, c.F5)(E),
        [j, k] = (0, c.km)(D, R, _),
        U = performance.now() - x.current < c.Jc,
        L = O(C, b.current);
    (0, d.Ay)(() => (j(), () => {
        k()
    }));
    let G = r.useCallback(() => {
            v(), w(), j()
        }, [v, w, j]),
        [P, F] = r.useState(!0),
        [V, z] = r.useState(!0),
        [H, Y] = r.useState(!0),
        [W, B] = r.useState(!0),
        [Z, X] = r.useState(!0);
    return t && !n ? null : (0, i.jsxs)("div", {
        className: s()(I.st, !l && I.Hk),
        children: [(P || !t) && (0, i.jsxs)("div", {
            className: I.PG,
            children: [!t && (0, i.jsx)("div", {
                className: I.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: P,
                    onChange: e => F(e)
                })
            }), (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: I.e0,
                children: ["FPS:", " ", (0, i.jsx)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: T < 30 ? "text-feedback-critical" : T < 45 ? "text-feedback-warning" : "text-strong",
                    children: T.toFixed(2)
                })]
            })]
        }), (V || !t) && (0, i.jsxs)("div", {
            className: I.PG,
            children: [!t && (0, i.jsx)("div", {
                className: I.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: V,
                    onChange: e => z(e)
                })
            }), (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: I.e0,
                children: ["Frame Times:", " ", (0, i.jsxs)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: C > 1.1 * c.L6 ? "text-feedback-warning" : "text-strong",
                    children: [C.toFixed(2), "ms"]
                })]
            })]
        }), (H || !t) && (0, i.jsxs)("div", {
            className: I.PG,
            children: [!t && (0, i.jsx)("div", {
                className: I.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: H,
                    onChange: e => Y(e)
                })
            }), (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: I.e0,
                children: ["Dropped Frames:", " ", (0, i.jsx)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: N < 2 ? "text-feedback-critical" : N < 5 ? "text-feedback-warning" : "text-strong",
                    children: y.current
                }), (0, i.jsxs)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: "text-subtle",
                    className: I.af,
                    children: ["(", (y.current / M.current * 100).toFixed(3), "%)"]
                })]
            })]
        }), (W || !t) && (0, i.jsxs)("div", {
            className: I.PG,
            children: [!t && (0, i.jsx)("div", {
                className: I.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: W,
                    onChange: e => B(e)
                })
            }), (0, i.jsxs)(u.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: I.e0,
                children: ["Rendered Frames:", " ", (0, i.jsx)(u.Text, {
                    tag: "span",
                    variant: "code",
                    color: "text-strong",
                    children: M.current.toFixed(0)
                })]
            })]
        }), (Z || !t) && (0, i.jsxs)("div", {
            className: I.PG,
            children: [!t && (0, i.jsx)("div", {
                className: I.On,
                children: (0, i.jsx)(u.dOG, {
                    checked: Z,
                    onChange: e => X(e)
                })
            }), (0, i.jsx)(o.m, {
                position: "left",
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                children: (0, i.jsx)("div", {
                    children: (0, i.jsxs)(u.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: I.e0,
                        children: ["Idle Frame Delta:", " ", (0, i.jsxs)(u.Text, {
                            tag: "span",
                            variant: "code",
                            color: L > 1 ? "text-feedback-critical" : "text-strong",
                            children: [L.toFixed(2), "ms"]
                        })]
                    })
                })
            })]
        }), U && (0, i.jsx)(o.m, {
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
        }), p && (0, i.jsx)(u.Text, {
            tag: "span",
            variant: "code",
            color: "text-feedback-positive",
            children: "(Using GPU Priority - Realtime)"
        }), !t && (0, i.jsx)("div", {
            className: I.m8,
            children: (0, i.jsx)(m.A, {
                children: (0, i.jsx)(u.Button, {
                    variant: "primary",
                    text: "Reset Frame Data",
                    onClick: G
                })
            })
        })]
    })
}