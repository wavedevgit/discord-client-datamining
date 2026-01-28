/** Chunk was on 78528 **/
/** chunk id: 808124, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
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
    p = n(266626),
    h = n(998740),
    f = n(732777),
    g = n(709382),
    m = n(287245),
    b = n(615658),
    A = n(592044),
    y = n(100449),
    _ = n(588703),
    O = n(985018),
    j = n(185014);
let v = e => {
        let {
            channel: t,
            idle: n,
            className: i,
            participants: a
        } = e, p = (0, f.A)(t.id), [h, v] = l.useState(!1), x = l.useCallback(e => {
            d.Ay.update(t.id, {
                seat: e
            })
        }, [t.id]), [E, C] = (0, c.V)("haven-show-chat", !1);
        l.useEffect(() => {
            setTimeout(() => {
                v(!0)
            }, 2500)
        }, []);
        let [S, I] = l.useState(.65), [N, T] = l.useState(.65), [P, w] = l.useState(.65), [R, D] = l.useState({
            x: 0,
            y: 0
        }), [M, L] = l.useState(!1), [k, U] = l.useState(0), [G, B] = l.useState({
            x: 0,
            y: 0
        }), [V, F] = l.useState({
            x: 0,
            y: 0
        }), [H, K] = l.useState(!1), W = l.useRef(null), [z, Y] = l.useState(null), q = (0, u.w)(e => {
            let {
                contentRect: t,
                target: n
            } = e, r = n.getBoundingClientRect(), l = t.width, i = t.height, s = l / g.i.width * 1.5, a = i / g.i.height * 1.5, o = l / g.i.width * 1.1, c = i / g.i.height * 1.1;
            B({
                x: l / 2 + r.x,
                y: i / 2 + r.y
            });
            let u = Math.max(s, a);
            if (I(Math.max(o, c)), w(u), null != W.current) {
                let e = W.current.getBoundingClientRect();
                Y({
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
                    U(0)
                },
                onMouseDown: () => L(Date.now()),
                onMouseUp: e => {
                    if (null != q.current) {
                        if (k < 2) {
                            let n = Date.now(),
                                r = q.current.getBoundingClientRect(),
                                l = {
                                    x: (e.pageX - r.x - R.x) / N,
                                    y: (e.pageY - r.y - R.y) / N
                                };
                            !1 !== M && n - M > 250 && d.Ay.update(t.id, {
                                position: l
                            })
                        }
                        L(!1)
                    }
                },
                onMouseMove: e => {
                    !1 !== M && (U(k + Math.abs(e.movementX) + Math.abs(e.movementY)), J({
                        x: R.x + e.movementX,
                        y: R.y + e.movementY
                    })), F({
                        x: e.pageX,
                        y: e.pageY
                    })
                },
                children: [(0, r.jsx)("div", {
                    className: j.VT,
                    style: {
                        transform: "translate(".concat(R.x, "px, ").concat(R.y, "px) scale(").concat(N, ") ")
                    },
                    children: (0, r.jsx)(g.A, {
                        roomSeats: p.seats,
                        roomParticipants: p.participants,
                        participants: a,
                        channel: t,
                        idle: n,
                        skipNewUserEducation: !h,
                        onSeatClick: x
                    })
                }), (0, r.jsxs)("div", {
                    className: s()(j.nM, j.vf),
                    children: [(0, r.jsxs)("div", {
                        className: s()(j.nM, {
                            [j.R]: n
                        }),
                        children: [(0, r.jsx)("div", {
                            ref: W,
                            children: (0, r.jsx)(o.K0, {
                                variant: "icon-only",
                                "aria-label": O.intl.string(_.default.W7TAH4),
                                icon: o.T7G,
                                disabled: n,
                                onClick: e => {
                                    e.preventDefault(), e.stopPropagation(), K(!H)
                                }
                            })
                        }), (0, r.jsx)(o.K0, {
                            variant: "icon-only",
                            "aria-label": O.intl.string(_.default.O7EDNk),
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
                    open: H,
                    close: () => K(!1),
                    triggerRef: W,
                    style: null != z ? {
                        left: z.x,
                        top: z.y
                    } : void 0
                }), (0, r.jsx)(b.A, {}), (0, r.jsx)("div", {
                    className: s()(j.Lw, {
                        [j.FD]: h
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
    x = e => {
        let t = p.s.useConfig({
                location: "Haven"
            }).enabled,
            n = (0, a.bG)([h.A], () => h.A.isUserConnected(e.channel.id));
        return (l.useEffect(() => {
            !t || n || d.Ay.connect(e.channel.id)
        }, [e.channel.id, n, t]), t) ? (0, r.jsx)(v, function(e) {
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