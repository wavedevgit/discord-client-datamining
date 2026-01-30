/** chunk id: 808124, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(517461),
    u = n(770178),
    d = n(418126),
    h = n(266626),
    p = n(998740),
    g = n(732777),
    f = n(709382),
    m = n(287245),
    b = n(615658),
    A = n(592044),
    y = n(100449),
    O = n(588703),
    _ = n(985018),
    j = n(185014);
let x = e => {
        let {
            channel: t,
            idle: n,
            className: i,
            participants: a
        } = e, h = (0, g.A)(t.id), [p, x] = l.useState(!1), v = l.useCallback(e => {
            d.Ay.update(t.id, {
                seat: e
            })
        }, [t.id]), [E, C] = (0, c.V)("haven-show-chat", !1);
        l.useEffect(() => {
            setTimeout(() => {
                x(!0)
            }, 2500)
        }, []);
        let [S, I] = l.useState(.65), [N, T] = l.useState(.65), [P, w] = l.useState(.65), [R, D] = l.useState({
            x: 0,
            y: 0
        }), [L, M] = l.useState(!1), [G, k] = l.useState(0), [U, V] = l.useState({
            x: 0,
            y: 0
        }), [B, H] = l.useState({
            x: 0,
            y: 0
        }), [F, K] = l.useState(!1), Y = l.useRef(null), [W, z] = l.useState(null), q = (0, u.w)(e => {
            let {
                contentRect: t,
                target: n
            } = e, r = n.getBoundingClientRect(), l = t.width, i = t.height, s = l / f.i.width * 1.5, a = i / f.i.height * 1.5, o = l / f.i.width * 1.1, c = i / f.i.height * 1.1;
            V({
                x: l / 2 + r.x,
                y: i / 2 + r.y
            });
            let u = Math.max(s, a);
            if (I(Math.max(o, c)), w(u), null != Y.current) {
                let e = Y.current.getBoundingClientRect();
                z({
                    x: e.left - r.left,
                    y: e.top - r.top
                })
            }
        }), X = l.useCallback(e => {
            var t;
            let n = Math.max(e, S),
                r = null == (t = q.current) ? void 0 : t.getBoundingClientRect();
            if (null == r) return;
            let l = {
                    x: 1156,
                    y: 1110
                },
                i = !0,
                s = 0,
                a = r.height / n;
            for (; i && s < 10;)(i = l.y + a / 2 > 1536) && (l.y -= 32), s++;
            let o = l.x * n,
                c = l.y * n,
                u = r.width / 2 - o,
                d = r.height / 2 - c;
            T(n), D({
                x: u,
                y: d
            })
        }, [q, S]);
        l.useEffect(() => {
            X(P)
        }, [P, X]);
        let J = l.useCallback(e => {
            var t;
            let n = null == (t = q.current) ? void 0 : t.getBoundingClientRect();
            if (null == n) return;
            let r = n.height / N,
                l = n.width / N,
                i = {
                    x: e.x / N,
                    y: e.y / N
                },
                s = e.y / N > 0,
                a = e.x / N > 0,
                o = i.y - r < -1536,
                c = i.x - l < -2180;
            o || s || a || c || D(e)
        }, [q, N]);
        return (0, r.jsx)(o.vN3, {
            children: (0, r.jsxs)("div", {
                ref: q,
                className: s()(j.km, i),
                onClick: () => {
                    k(0)
                },
                onMouseDown: () => M(Date.now()),
                onMouseUp: e => {
                    if (null != q.current) {
                        if (G < 2) {
                            let n = Date.now(),
                                r = q.current.getBoundingClientRect(),
                                l = {
                                    x: (e.pageX - r.x - R.x) / N,
                                    y: (e.pageY - r.y - R.y) / N
                                };
                            !1 !== L && n - L > 250 && d.Ay.update(t.id, {
                                position: l
                            })
                        }
                        M(!1)
                    }
                },
                onMouseMove: e => {
                    !1 !== L && (k(G + Math.abs(e.movementX) + Math.abs(e.movementY)), J({
                        x: R.x + e.movementX,
                        y: R.y + e.movementY
                    })), H({
                        x: e.pageX,
                        y: e.pageY
                    })
                },
                children: [(0, r.jsx)("div", {
                    className: j.VT,
                    style: {
                        transform: "translate(".concat(R.x, "px, ").concat(R.y, "px) scale(").concat(N, ") ")
                    },
                    children: (0, r.jsx)(f.A, {
                        roomSeats: h.seats,
                        roomParticipants: h.participants,
                        participants: a,
                        channel: t,
                        idle: n,
                        skipNewUserEducation: !p,
                        onSeatClick: v
                    })
                }), (0, r.jsxs)("div", {
                    className: s()(j.nM, j.vf),
                    children: [(0, r.jsxs)("div", {
                        className: s()(j.nM, {
                            [j.R]: n
                        }),
                        children: [(0, r.jsx)("div", {
                            ref: Y,
                            children: (0, r.jsx)(o.K0, {
                                variant: "icon-only",
                                "aria-label": _.intl.string(O.default.W7TAH4),
                                icon: o.T7G,
                                disabled: n,
                                onClick: e => {
                                    e.preventDefault(), e.stopPropagation(), K(!F)
                                }
                            })
                        }), (0, r.jsx)(o.K0, {
                            variant: "icon-only",
                            "aria-label": _.intl.string(O.default.O7EDNk),
                            icon: E ? o._mZ : o.oyn,
                            disabled: n,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), C(!E)
                            }
                        })]
                    }), (0, r.jsx)(m.A, {
                        channel: t,
                        idle: n,
                        showChat: null != E && E
                    }), (0, r.jsxs)("div", {
                        className: s()(j.nM, {
                            [j.R]: n
                        }),
                        children: [(0, r.jsx)(o.K0, {
                            variant: "icon-only",
                            "aria-label": "Zoom out Haven",
                            icon: o.V0_,
                            disabled: n,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), X(N - .05)
                            }
                        }), (0, r.jsx)(o.K0, {
                            variant: "icon-only",
                            "aria-label": "Zoom in Haven",
                            icon: o.r1u,
                            disabled: n,
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), X(N + .05)
                            }
                        })]
                    })]
                }), (0, r.jsx)(y.A, {
                    channel: t,
                    participants: a
                }), (0, r.jsx)(A.A, {
                    open: F,
                    close: () => K(!1),
                    triggerRef: Y,
                    style: null != W ? {
                        left: W.x,
                        top: W.y
                    } : void 0
                }), (0, r.jsx)(b.A, {}), (0, r.jsx)("div", {
                    className: s()(j.Lw, {
                        [j.FD]: p
                    }),
                    children: (0, r.jsx)("div", {
                        className: j.dH,
                        children: (0, r.jsx)(o.Text, {
                            variant: "display-lg",
                            children: "Welcome to Haven"
                        })
                    })
                })]
            })
        })
    },
    v = e => {
        let t = h.s.useConfig({
                location: "Haven"
            }).enabled,
            n = (0, a.bG)([p.A], () => p.A.isUserConnected(e.channel.id));
        return (l.useEffect(() => {
            !t || n || d.Ay.connect(e.channel.id)
        }, [e.channel.id, n, t]), t) ? (0, r.jsx)(x, function(e) {
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
        }({}, e)) : null
    }