/** chunk id: 516094 params = (module,exports,require) **/
l.d(t, {
    A: () => M
}), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(735438),
    d = l(417597),
    o = l(459192),
    c = l(990078),
    u = l(397927),
    m = l(565645),
    h = l(765671),
    p = l(607470),
    x = l(287809),
    f = l(531685),
    g = l(427262),
    v = l(372684),
    j = l(335494),
    b = l(584794),
    C = l(429364),
    y = l(696016),
    N = l(985018),
    A = l(961432),
    E = l(236911);

function k(e) {
    let {
        eventType: t,
        importance: l,
        style: i,
        title: s,
        description: r
    } = e, d = a.useMemo(() => 0 === l ? 16 : .5 === l ? 20 : 1 === l ? 24 : 16, [l]), m = a.useMemo(() => {
        switch (t) {
            case v.rb.KILL:
                return (0, n.jsx)(u.gXB, {
                    size: "custom",
                    width: d,
                    height: d,
                    color: u.LU0.colors.ICON_STRONG
                });
            case v.rb.MULTIKILL:
                return (0, n.jsx)(u.Gg5, {
                    size: "custom",
                    width: d,
                    height: d,
                    color: u.LU0.colors.ICON_STRONG
                });
            case v.rb.DEATH:
                return (0, n.jsx)(u.VPb, {
                    size: "custom",
                    width: d,
                    height: d,
                    color: u.LU0.colors.ICON_STRONG
                });
            case v.rb.ASSIST:
                return (0, n.jsx)(u.E7M, {
                    size: "custom",
                    width: d,
                    height: d,
                    color: u.LU0.colors.ICON_STRONG
                });
            case v.rb.ITEM:
                return (0, n.jsx)(u.Gg5, {
                    size: "custom",
                    width: d,
                    height: d,
                    color: u.LU0.colors.ICON_STRONG
                });
            case v.rb.VICTORY:
                return (0, n.jsx)(u.OR, {
                    size: "custom",
                    width: d,
                    height: d,
                    color: u.LU0.colors.ICON_STRONG
                });
            case v.rb.DEFEAT:
                return (0, n.jsx)(u.iFK, {
                    size: "custom",
                    width: d,
                    height: d,
                    color: u.LU0.colors.ICON_STRONG
                });
            case v.rb.LEVEL_UP:
                return (0, n.jsx)(u.TIR, {
                    size: "custom",
                    width: d,
                    height: d,
                    color: u.LU0.colors.ICON_STRONG
                });
            case v.rb.TREASURE:
                return (0, n.jsx)(u.BZI, {
                    size: "custom",
                    width: d,
                    height: d,
                    color: u.LU0.colors.ICON_STRONG
                });
            case v.rb.OBJECTIVE_KILL:
                return (0, n.jsx)(u.wI0, {
                    size: "custom",
                    width: d,
                    height: d,
                    color: u.LU0.colors.ICON_STRONG
                });
            default:
                return null
        }
    }, [t, d]);
    if (null == m) return null;
    let h = (0, n.jsx)("div", {
        className: E.HS,
        style: i,
        children: m
    });
    return null != s || null != r ? null == s || null == r ? (0, n.jsx)(c.m, {
        text: s ?? r,
        position: "top",
        children: h
    }) : (0, n.jsx)(o.u, {
        title: s,
        body: r ?? "",
        position: "top",
        children: h
    }) : h
}

function I(e) {
    let {
        videoLength: t,
        clip: l,
        onMouseDown: i
    } = e, {
        timeNotches: s,
        subNotches: r
    } = a.useMemo(() => {
        let e;
        if (null == t || t <= 0) return {
            timeNotches: [],
            subNotches: []
        };
        let l = [],
            n = t / 6;
        e = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : n <= 10 ? 10 : n <= 15 ? 15 : n <= 20 ? 20 : n <= 30 ? 30 : 10 * Math.round(n / 10);
        for (let n = 0; n <= t; n += e) {
            let e = n / t * 100;
            l.push({
                time: n,
                position: e
            })
        }(0 === l.length || l[l.length - 1].time < t - 2) && l.push({
            time: t,
            position: 100
        });
        let a = [],
            i = e / 5;
        for (let e = i; e < t; e += i)
            if (!l.some(t => .01 > Math.abs(t.time - e))) {
                let l = e / t * 100;
                a.push({
                    position: l
                })
            } return {
            timeNotches: l,
            subNotches: a
        }
    }, [t]);
    return (0, n.jsx)("div", {
        className: E.ZX,
        onMouseDown: i,
        children: (0, n.jsxs)("div", {
            className: E.QY,
            children: [r.map((e, t) => (0, n.jsx)("div", {
                className: E.MJ,
                style: {
                    left: `${e.position}%`
                },
                children: (0, n.jsx)("div", {
                    className: E.p
                })
            }, `sub-${t}`)), s.map((e, t) => (0, n.jsxs)("div", {
                className: E.Cv,
                style: {
                    left: `${e.position}%`
                },
                children: [(0, n.jsx)("div", {
                    className: E.d9
                }), (0, n.jsxs)(u.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    className: E.Mz,
                    children: [Math.round(e.time), "s"]
                })]
            }, t)), (0, n.jsx)(S, {
                clip: l,
                videoLength: t
            }), (0, n.jsx)(w, {
                clip: l,
                videoLength: t
            }), (0, n.jsx)(L, {
                clip: l,
                videoLength: t
            })]
        })
    })
}

function S(e) {
    let {
        clip: t,
        videoLength: l
    } = e, i = a.useMemo(() => null == t.timeline || t.decision?.timestamp == null ? [] : t.timeline.filter(e => e.signal.type === v.Gy.GAME_EVENT), [t.timeline, t.decision?.timestamp]), s = a.useCallback(e => {
        if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
        let n = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return n < 0 || n > l ? null : n / l * 100
    }, [l, t.decision?.timestamp, t.length]);
    return (0, n.jsx)(n.Fragment, {
        children: i.map((e, t) => {
            let l = s(e.timestamp);
            return null == l ? null : (0, n.jsx)(k, {
                eventType: e.signal.eventType,
                importance: e.signal.importance ?? 0,
                title: e.signal.title,
                description: e.signal.description,
                style: {
                    left: `${l}%`
                }
            }, `${e.timestamp}-${t}`)
        })
    })
}

function w(e) {
    let {
        clip: t,
        videoLength: l
    } = e, i = a.useMemo(() => null == t.timeline || t.decision?.timestamp == null ? [] : t.timeline.filter(e => e.signal.type === v.Gy.SOUNDBOARD && !0 === e.signal.playing), [t.timeline, t.decision?.timestamp]), s = a.useCallback(e => {
        if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
        let n = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return n < 0 || n > l ? null : n / l * 100
    }, [l, t.decision?.timestamp, t.length]);
    return (0, n.jsx)(n.Fragment, {
        children: i.map((e, t) => {
            let l = s(e.timestamp);
            if (null == l || null == e.signal.emojiId && null == e.signal.emojiName) return null;
            let a = x.default.getUser(e.signal.userId),
                i = (0, g.mG)(a);
            return (0, n.jsx)(o.u, {
                title: e.signal.name,
                body: i ?? "",
                position: "top",
                children: (0, n.jsx)("div", {
                    className: E.HS,
                    style: {
                        left: `${l}%`
                    },
                    children: (0, n.jsx)(m.A, {
                        emojiId: e.signal.emojiId ?? null,
                        emojiName: e.signal.emojiName ?? null,
                        animated: e.signal.emojiAnimated,
                        size: "reaction"
                    })
                })
            }, `${e.timestamp}-${t}`)
        })
    })
}

function L(e) {
    let {
        clip: t,
        videoLength: l
    } = e, i = a.useMemo(() => null == t.timeline || t.decision?.timestamp == null ? [] : t.timeline.filter(e => e.signal.type === v.Gy.PHRASE), [t.timeline, t.decision?.timestamp]), s = a.useCallback(e => {
        if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
        let n = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return n < 0 || n > l ? null : n / l * 100
    }, [l, t.decision?.timestamp, t.length]);
    return (0, n.jsx)(n.Fragment, {
        children: i.map((e, t) => {
            let l = s(e.timestamp);
            return null == l ? null : (0, n.jsx)(o.u, {
                title: N.intl.string(N.t.mIkeS2),
                body: e.signal.text,
                position: "top",
                children: (0, n.jsx)("div", {
                    className: E.HS,
                    style: {
                        left: `${l}%`
                    },
                    children: (0, n.jsx)(u.oyn, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: u.LU0.colors.ICON_STRONG
                    })
                })
            }, `${e.timestamp}-${t}`)
        })
    })
}
let M = function(e) {
    let {
        sourceURL: t,
        clip: l,
        voiceAudioTracks: i,
        transitionState: o
    } = e, {
        useCurrentTime: c,
        duration: m,
        isPlaying: x,
        cropStart: g,
        cropEnd: v,
        cropDuration: k,
        setCropStart: S,
        setCropEnd: w,
        play: L,
        pause: M,
        subscribe: D,
        seek: O
    } = (0, C.T)(), P = c(), U = a.useRef(null), [G, V] = a.useState(!1), [H, z] = a.useState(null), $ = a.useRef(null), _ = a.useRef(null), [K, B] = a.useState(!1), [F, Y] = a.useState(null);
    a.useEffect(() => D({
        onPlay: () => {
            z(null), B(!1)
        }
    }), [D]);
    let {
        ref: X,
        width: Q = 0,
        height: q = 0
    } = (0, h.Ay)(), W = (0, d.bG)([f.A], () => f.A.windowSize());
    a.useMemo(() => {
        W.width, W.height;
        let e = X.current;
        null != e && Y(e.getBoundingClientRect())
    }, [W.width, W.height, Q, X, o]);
    let Z = a.useRef(null),
        J = a.useRef({}),
        ee = a.useCallback((e, t) => {
            if (null == m) return;
            if (null == F) return null;
            let l = ((0, r.clamp)(e, F.left, F.right) - F.left) / F.width * m,
                n = (0, r.clamp)(l, 0, m),
                a = H;
            null == a && t && (a = n <= g ? "start" : n >= v ? "end" : "playhead", x && (M(), B(!0)), z(a)), "start" === a ? S(n) : "end" === a ? w(n) : "playhead" === a && O((0, r.clamp)(n, g, v))
        }, [m, F, H, g, v, x, M, S, w, O]),
        et = a.useCallback(e => {
            if (null == m) return;
            let t = (0, b.A)(m, e.shiftKey),
                l = !1;
            switch (e.key) {
                case "ArrowLeft":
                    l = !0, S(g - t);
                    break;
                case "ArrowRight":
                    l = !0, S(g + t)
            }
            l && (e.stopPropagation(), e.preventDefault())
        }, [m, S, g]),
        el = a.useCallback(e => {
            if (null == m) return;
            let t = (0, b.A)(m, e.shiftKey),
                l = !1;
            switch (e.key) {
                case "ArrowLeft":
                    l = !0, w(v - t);
                    break;
                case "ArrowRight":
                    l = !0, w(v + t)
            }
            l && (e.stopPropagation(), e.preventDefault())
        }, [m, w, v]),
        en = a.useCallback(e => {
            ee(e.clientX, !0)
        }, [ee]),
        ea = a.useCallback(e => {
            ee(e.clientX, !1)
        }, [ee]),
        ei = a.useCallback(() => {
            K && L(), B(!1), z(null)
        }, [K, L]);
    a.useEffect(() => (document.addEventListener("mousemove", ea), document.addEventListener("mouseup", ei), () => {
        document.removeEventListener("mousemove", ea), document.removeEventListener("mouseup", ei)
    }), [ea, ei]), a.useEffect(() => {
        !async function() {
            let e = X.current,
                t = U.current;
            if (null == e || null == t || !G) return;
            e.height = q, e.width = Q;
            let l = e.getContext("2d");
            if (null == l) return;
            l.fillStyle = "transparent", l.fillRect(0, 0, Q, q);
            let n = Math.ceil(q * (t.videoWidth / t.videoHeight)),
                a = Math.ceil(Q / n),
                i = Z.current;
            if (null == i) return;
            i.width = n, i.height = q;
            let s = i?.getContext("2d", {
                willReadFrequently: !0
            });
            if (null == s) return;
            let r = J.current;
            if (r[a]?.length === a) {
                for (let e = 0; e < a; e++) l.putImageData(r[a][e], n * e, 0);
                return
            }
            for (let e = 0; e < a; e++) await new Promise(i => {
                t.onseeked = () => {
                    l.drawImage(t, n * e, 0, n, q), s.drawImage(t, 0, 0, n, q);
                    let d = s.getImageData(0, 0, n, q);
                    null == r[a] && (r[a] = []), r[a][e] = d, i()
                }, t.currentTime = n / Q * m * e
            })
        }()
    }, [Q, q, X, m, Z, G]);
    let es = P - g,
        er = a.useCallback(() => {
            O(Math.max(g, P - 10))
        }, [g, P, O]),
        ed = a.useCallback(() => {
            O(Math.min(v, P + 10))
        }, [v, P, O]),
        eo = a.useCallback(() => {
            x ? M() : L()
        }, [x, L, M]),
        ec = a.useCallback(() => V(!0), []),
        eu = g / m * 100,
        em = (1 - (m - v) / m) * 100,
        eh = {
            background: `linear-gradient(to right, var(--black-500) ${eu}%, transparent ${eu}%, transparent ${em}%, var(--black-500) ${em}%)`
        };
    return (0, n.jsx)("div", {
        className: E.f4,
        children: (0, n.jsxs)("div", {
            className: E.fL,
            children: [(0, n.jsxs)("div", {
                className: E.lx,
                children: [(0, n.jsx)("div", {
                    className: E.k2,
                    children: (0, n.jsx)("div", {
                        ref: _,
                        className: E.re,
                        children: (0, n.jsxs)(u.Text, {
                            variant: "text-sm/normal",
                            className: E.g7,
                            color: "text-muted",
                            children: [T(es), (0, n.jsx)("span", {
                                className: E.xW,
                                children: " / "
                            }), T(k)]
                        })
                    })
                }), (0, n.jsxs)("div", {
                    className: E.s2,
                    children: [(0, n.jsx)(u.K0, {
                        size: "md",
                        variant: "secondary",
                        icon: u.qN$,
                        onClick: er,
                        "aria-label": N.intl.string(A.default["dRVF+Z"])
                    }), (0, n.jsx)(u.K0, {
                        size: "md",
                        icon: x ? u.E$n : u.udU,
                        onClick: eo,
                        "aria-label": N.intl.string(x ? N.t.ZcgDJX : N.t.RscU7I)
                    }), (0, n.jsx)(u.K0, {
                        size: "md",
                        variant: "secondary",
                        icon: u.i76,
                        onClick: ed,
                        "aria-label": N.intl.string(A.default.yV2FLL)
                    })]
                })]
            }), (0, n.jsx)(j.A, {
                onMouseDown: en,
                voiceAudioTracks: i,
                clipId: l.id,
                className: E.ou
            }), (0, n.jsx)(I, {
                onMouseDown: en,
                videoLength: m,
                clip: l
            }), (0, n.jsx)("div", {
                className: E.PH,
                children: (0, n.jsxs)("div", {
                    className: s()(E.IO, {
                        [E.Dg]: null != H
                    }),
                    onMouseDown: en,
                    children: [(0, n.jsx)("canvas", {
                        className: E.zj,
                        ref: Z
                    }), (0, n.jsx)("canvas", {
                        className: E.Ay,
                        ref: X
                    }), (0, n.jsx)(u.vN3, {
                        children: (0, n.jsx)("div", {
                            tabIndex: 0,
                            ref: $,
                            className: E.lG
                        })
                    }), (0, n.jsx)(p.A, {
                        preload: "auto",
                        className: E.Fi,
                        ref: U,
                        src: t,
                        muted: !0,
                        onLoadedMetadata: ec
                    }), (0, n.jsx)("div", {
                        className: E.QT,
                        style: eh
                    }), (0, n.jsxs)("div", {
                        className: E.Ws,
                        style: {
                            left: null != m ? `${g/m*100}%` : "0",
                            right: null != m ? `${(m-v)/m*100}%` : "0"
                        },
                        children: [(0, n.jsx)(u.vN3, {
                            children: (0, n.jsx)("button", {
                                className: s()(E.uI, {
                                    [E.cB]: "start" === H
                                }),
                                onMouseDown: en,
                                onKeyDown: et,
                                role: "slider",
                                tabIndex: 0,
                                "aria-valuemin": 0,
                                "aria-valuenow": g,
                                "aria-valuetext": R(g),
                                "aria-valuemax": v - y.zj,
                                "aria-label": N.intl.string(N.t["+BTvw8"]),
                                children: (0, n.jsx)("div", {
                                    className: E.FV
                                })
                            })
                        }), (0, n.jsx)(u.vN3, {
                            children: (0, n.jsx)("button", {
                                className: s()(E.H1, {
                                    [E.cB]: "end" === H
                                }),
                                onMouseDown: en,
                                onKeyDown: el,
                                role: "slider",
                                tabIndex: 0,
                                "aria-valuemin": g + y.zj,
                                "aria-valuenow": v,
                                "aria-valuetext": R(v),
                                "aria-valuemax": m,
                                "aria-label": N.intl.string(N.t.bBgBYo),
                                children: (0, n.jsx)("div", {
                                    className: E.kn
                                })
                            })
                        })]
                    })]
                })
            })]
        })
    })
};

function T(e) {
    ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        n = Math.floor(e % 1 * 100);
    return t = t < 10 ? "0" + t : t, l = l < 10 ? "0" + l : l, n = n < 10 ? "0" + n : n, `${t}:${l}.${n}`
}

function R(e) {
    let t = Math.floor(e / 60),
        l = N.intl.formatToPlainString(N.t.iXLF9W, {
            minutes: t
        }),
        n = N.intl.formatToPlainString(N.t.geSp4K, {
            seconds: e % 60
        });
    return `${l} ${n}`
}