/** chunk id: 888987 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(964486),
    u = n(706712),
    _ = n(142120),
    h = n(87001),
    m = n(302614),
    f = n(321090),
    g = n(392164),
    p = n(165366);

function A(e) {
    let {
        locked: t,
        pinned: n,
        anchorLeft: r
    } = e, A = (0, s.bG)([_.A], () => _.A.getSocket()), E = (0, s.bG)([f.A], () => f.A.isGPUBoosted());
    (0, u.ZX)();
    let I = (0, s.bG)([h.A], () => h.A.getWindow(g.f)),
        [x, b] = (0, u.DQ)(A),
        {
            currentFPS: v,
            averageFrameTime: S,
            timeSinceLastDrop: C,
            onResetFrameData: T,
            droppedFramesRef: y,
            renderedFrameCount: N,
            bufferFramecountRef: w,
            frameCheckerEffect: L
        } = (0, u.Dj)(!0, x, !0),
        [O, j, P] = (0, u.F5)(A),
        [R, D] = (0, u.km)(O, L, I),
        M = performance.now() - b.current < u.Jc,
        k = j(S, w.current);
    (0, c.Ay)(() => (R(), () => {
        D()
    }));
    let G = a.useCallback(() => {
            T(), P(), R()
        }, [T, P, R]),
        [z, U] = a.useState(!0),
        [V, F] = a.useState(!0),
        [W, H] = a.useState(!0),
        [B, Y] = a.useState(!0),
        [X, Z] = a.useState(!0);
    return t && !n ? null : (0, i.jsxs)("div", {
        className: l()(p.st, !r && p.Hk),
        children: [(z || !t) && (0, i.jsxs)("div", {
            className: p.PG,
            children: [!t && (0, i.jsx)("div", {
                className: p.On,
                children: (0, i.jsx)(d.dOG, {
                    checked: z,
                    onChange: e => U(e)
                })
            }), (0, i.jsxs)(d.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: p.e0,
                children: ["FPS:", " ", (0, i.jsx)(d.Text, {
                    tag: "span",
                    variant: "code",
                    color: v < 30 ? "text-feedback-critical" : v < 45 ? "text-feedback-warning" : "text-strong",
                    children: v.toFixed(2)
                })]
            })]
        }), (V || !t) && (0, i.jsxs)("div", {
            className: p.PG,
            children: [!t && (0, i.jsx)("div", {
                className: p.On,
                children: (0, i.jsx)(d.dOG, {
                    checked: V,
                    onChange: e => F(e)
                })
            }), (0, i.jsxs)(d.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: p.e0,
                children: ["Frame Times:", " ", (0, i.jsxs)(d.Text, {
                    tag: "span",
                    variant: "code",
                    color: S > 1.1 * u.L6 ? "text-feedback-warning" : "text-strong",
                    children: [S.toFixed(2), "ms"]
                })]
            })]
        }), (W || !t) && (0, i.jsxs)("div", {
            className: p.PG,
            children: [!t && (0, i.jsx)("div", {
                className: p.On,
                children: (0, i.jsx)(d.dOG, {
                    checked: W,
                    onChange: e => H(e)
                })
            }), (0, i.jsxs)(d.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: p.e0,
                children: ["Dropped Frames:", " ", (0, i.jsx)(d.Text, {
                    tag: "span",
                    variant: "code",
                    color: C < 2 ? "text-feedback-critical" : C < 5 ? "text-feedback-warning" : "text-strong",
                    children: y.current
                }), (0, i.jsxs)(d.Text, {
                    tag: "span",
                    variant: "code",
                    color: "text-subtle",
                    className: p.af,
                    children: ["(", (y.current / N.current * 100).toFixed(3), "%)"]
                })]
            })]
        }), (B || !t) && (0, i.jsxs)("div", {
            className: p.PG,
            children: [!t && (0, i.jsx)("div", {
                className: p.On,
                children: (0, i.jsx)(d.dOG, {
                    checked: B,
                    onChange: e => Y(e)
                })
            }), (0, i.jsxs)(d.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                className: p.e0,
                children: ["Rendered Frames:", " ", (0, i.jsx)(d.Text, {
                    tag: "span",
                    variant: "code",
                    color: "text-strong",
                    children: N.current.toFixed(0)
                })]
            })]
        }), (X || !t) && (0, i.jsxs)("div", {
            className: p.PG,
            children: [!t && (0, i.jsx)("div", {
                className: p.On,
                children: (0, i.jsx)(d.dOG, {
                    checked: X,
                    onChange: e => Z(e)
                })
            }), (0, i.jsx)(o.m, {
                position: "left",
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                children: (0, i.jsx)("div", {
                    children: (0, i.jsxs)(d.Text, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        className: p.e0,
                        children: ["Idle Frame Delta:", " ", (0, i.jsxs)(d.Text, {
                            tag: "span",
                            variant: "code",
                            color: k > 1 ? "text-feedback-critical" : "text-strong",
                            children: [k.toFixed(2), "ms"]
                        })]
                    })
                })
            })]
        }), M && (0, i.jsx)(o.m, {
            position: "left",
            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
            children: (0, i.jsx)("span", {
                children: (0, i.jsx)(d.Text, {
                    tag: "span",
                    variant: "code",
                    color: "text-feedback-critical",
                    children: "(Main App Backgrounded)"
                })
            })
        }), E && (0, i.jsx)(d.Text, {
            tag: "span",
            variant: "code",
            color: "text-feedback-positive",
            children: "(Using GPU Priority - Realtime)"
        }), !t && (0, i.jsx)("div", {
            className: p.m8,
            children: (0, i.jsx)(m.A, {
                children: (0, i.jsx)(d.Button, {
                    variant: "primary",
                    text: "Reset Frame Data",
                    onClick: G
                })
            })
        })]
    })
}