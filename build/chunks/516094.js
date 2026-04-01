/** chunk id: 516094 params = (module,exports,require) **/
a.d(t, {
    A: () => I
}), a(321073);
var l = a(627968),
    n = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(735438),
    o = a(417597),
    u = a(459192),
    c = a(990078),
    d = a(397927),
    m = a(565645),
    h = a(765671),
    p = a(607470),
    f = a(287809),
    g = a(531685),
    v = a(427262),
    x = a(372684),
    b = a(335494),
    j = a(584794),
    _ = a(429364),
    C = a(696016),
    k = a(985018),
    N = a(236911);

function y(e) {
    let {
        eventType: t,
        importance: a,
        style: i,
        title: s,
        description: r
    } = e, o = n.useMemo(() => 0 === a ? 16 : .5 === a ? 20 : 1 === a ? 24 : 16, [a]), m = n.useMemo(() => {
        switch (t) {
            case x.rb.KILL:
                return (0, l.jsx)(d.gXB, {
                    size: "custom",
                    width: o,
                    height: o,
                    color: d.LU0.colors.ICON_STRONG
                });
            case x.rb.MULTIKILL:
                return (0, l.jsx)(d.Gg5, {
                    size: "custom",
                    width: o,
                    height: o,
                    color: d.LU0.colors.ICON_STRONG
                });
            case x.rb.DEATH:
                return (0, l.jsx)(d.VPb, {
                    size: "custom",
                    width: o,
                    height: o,
                    color: d.LU0.colors.ICON_STRONG
                });
            case x.rb.ASSIST:
                return (0, l.jsx)(d.E7M, {
                    size: "custom",
                    width: o,
                    height: o,
                    color: d.LU0.colors.ICON_STRONG
                });
            case x.rb.ITEM:
                return (0, l.jsx)(d.Gg5, {
                    size: "custom",
                    width: o,
                    height: o,
                    color: d.LU0.colors.ICON_STRONG
                });
            case x.rb.VICTORY:
                return (0, l.jsx)(d.OR, {
                    size: "custom",
                    width: o,
                    height: o,
                    color: d.LU0.colors.ICON_STRONG
                });
            case x.rb.DEFEAT:
                return (0, l.jsx)(d.iFK, {
                    size: "custom",
                    width: o,
                    height: o,
                    color: d.LU0.colors.ICON_STRONG
                });
            case x.rb.LEVEL_UP:
                return (0, l.jsx)(d.TIR, {
                    size: "custom",
                    width: o,
                    height: o,
                    color: d.LU0.colors.ICON_STRONG
                });
            case x.rb.TREASURE:
                return (0, l.jsx)(d.BZI, {
                    size: "custom",
                    width: o,
                    height: o,
                    color: d.LU0.colors.ICON_STRONG
                });
            case x.rb.OBJECTIVE_KILL:
                return (0, l.jsx)(d.wI0, {
                    size: "custom",
                    width: o,
                    height: o,
                    color: d.LU0.colors.ICON_STRONG
                });
            default:
                return null
        }
    }, [t, o]);
    if (null == m) return null;
    let h = (0, l.jsx)("div", {
        className: N.HS,
        style: i,
        children: m
    });
    return null != s || null != r ? null == s || null == r ? (0, l.jsx)(c.m, {
        text: s ?? r,
        position: "top",
        children: h
    }) : (0, l.jsx)(u.u, {
        title: s,
        body: r ?? "",
        position: "top",
        children: h
    }) : h
}

function E(e) {
    let {
        videoLength: t,
        clip: a,
        onMouseDown: i
    } = e, {
        timeNotches: s,
        subNotches: r
    } = n.useMemo(() => {
        let e;
        if (null == t || t <= 0) return {
            timeNotches: [],
            subNotches: []
        };
        let a = [],
            l = t / 6;
        e = l <= 1 ? 1 : l <= 2 ? 2 : l <= 5 ? 5 : l <= 10 ? 10 : l <= 15 ? 15 : l <= 20 ? 20 : l <= 30 ? 30 : 10 * Math.round(l / 10);
        for (let l = 0; l <= t; l += e) {
            let e = l / t * 100;
            a.push({
                time: l,
                position: e
            })
        }(0 === a.length || a[a.length - 1].time < t - 2) && a.push({
            time: t,
            position: 100
        });
        let n = [],
            i = e / 5;
        for (let e = i; e < t; e += i)
            if (!a.some(t => .01 > Math.abs(t.time - e))) {
                let a = e / t * 100;
                n.push({
                    position: a
                })
            } return {
            timeNotches: a,
            subNotches: n
        }
    }, [t]);
    return (0, l.jsx)("div", {
        className: N.ZX,
        onMouseDown: i,
        children: (0, l.jsxs)("div", {
            className: N.QY,
            children: [r.map((e, t) => (0, l.jsx)("div", {
                className: N.MJ,
                style: {
                    left: `${e.position}%`
                },
                children: (0, l.jsx)("div", {
                    className: N.p
                })
            }, `sub-${t}`)), s.map((e, t) => (0, l.jsxs)("div", {
                className: N.Cv,
                style: {
                    left: `${e.position}%`
                },
                children: [(0, l.jsx)("div", {
                    className: N.d9
                }), (0, l.jsxs)(d.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    className: N.Mz,
                    children: [Math.round(e.time), "s"]
                })]
            }, t)), (0, l.jsx)(A, {
                clip: a,
                videoLength: t
            }), (0, l.jsx)(S, {
                clip: a,
                videoLength: t
            }), (0, l.jsx)(w, {
                clip: a,
                videoLength: t
            })]
        })
    })
}

function A(e) {
    let {
        clip: t,
        videoLength: a
    } = e, i = n.useMemo(() => null == t.timeline || t.decision?.timestamp == null ? [] : t.timeline.filter(e => e.signal.type === x.Gy.GAME_EVENT), [t.timeline, t.decision?.timestamp]), s = n.useCallback(e => {
        if (null == a || a <= 0 || t.decision?.timestamp == null) return null;
        let l = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return l < 0 || l > a ? null : l / a * 100
    }, [a, t.decision?.timestamp, t.length]);
    return (0, l.jsx)(l.Fragment, {
        children: i.map((e, t) => {
            let a = s(e.timestamp);
            return null == a ? null : (0, l.jsx)(y, {
                eventType: e.signal.eventType,
                importance: e.signal.importance ?? 0,
                title: e.signal.title,
                description: e.signal.description,
                style: {
                    left: `${a}%`
                }
            }, `${e.timestamp}-${t}`)
        })
    })
}

function S(e) {
    let {
        clip: t,
        videoLength: a
    } = e, i = n.useMemo(() => null == t.timeline || t.decision?.timestamp == null ? [] : t.timeline.filter(e => e.signal.type === x.Gy.SOUNDBOARD && !0 === e.signal.playing), [t.timeline, t.decision?.timestamp]), s = n.useCallback(e => {
        if (null == a || a <= 0 || t.decision?.timestamp == null) return null;
        let l = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return l < 0 || l > a ? null : l / a * 100
    }, [a, t.decision?.timestamp, t.length]);
    return (0, l.jsx)(l.Fragment, {
        children: i.map((e, t) => {
            let a = s(e.timestamp);
            if (null == a || null == e.signal.emojiId && null == e.signal.emojiName) return null;
            let n = f.default.getUser(e.signal.userId),
                i = (0, v.mG)(n);
            return (0, l.jsx)(u.u, {
                title: e.signal.name,
                body: i ?? "",
                position: "top",
                children: (0, l.jsx)("div", {
                    className: N.HS,
                    style: {
                        left: `${a}%`
                    },
                    children: (0, l.jsx)(m.A, {
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

function w(e) {
    let {
        clip: t,
        videoLength: a
    } = e, i = n.useMemo(() => null == t.timeline || t.decision?.timestamp == null ? [] : t.timeline.filter(e => e.signal.type === x.Gy.PHRASE), [t.timeline, t.decision?.timestamp]), s = n.useCallback(e => {
        if (null == a || a <= 0 || t.decision?.timestamp == null) return null;
        let l = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return l < 0 || l > a ? null : l / a * 100
    }, [a, t.decision?.timestamp, t.length]);
    return (0, l.jsx)(l.Fragment, {
        children: i.map((e, t) => {
            let a = s(e.timestamp);
            return null == a ? null : (0, l.jsx)(u.u, {
                title: k.intl.string(k.t.mIkeS2),
                body: e.signal.text,
                position: "top",
                children: (0, l.jsx)("div", {
                    className: N.HS,
                    style: {
                        left: `${a}%`
                    },
                    children: (0, l.jsx)(d.oyn, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: d.LU0.colors.ICON_STRONG
                    })
                })
            }, `${e.timestamp}-${t}`)
        })
    })
}
let I = function(e) {
    let {
        sourceURL: t,
        clip: a,
        voiceAudioTracks: i
    } = e, {
        useCurrentTime: u,
        duration: c,
        isPlaying: m,
        cropStart: f,
        cropEnd: v,
        cropDuration: x,
        setCropStart: y,
        setCropEnd: A,
        play: S,
        pause: w,
        subscribe: I,
        seek: R
    } = (0, _.T)(), M = u(), O = n.useRef(null), [U, D] = n.useState(!1), [P, z] = n.useState(null), $ = n.useRef(null), G = n.useRef(null), [B, V] = n.useState(!1), [F, K] = n.useState(null);
    n.useEffect(() => I({
        onPlay: () => {
            z(null), V(!1)
        }
    }), [I]);
    let {
        ref: H,
        width: W = 0,
        height: J = 0
    } = (0, h.Ay)(), X = (0, o.bG)([g.A], () => g.A.windowSize());
    n.useMemo(() => {
        X.width, X.height;
        let e = H.current;
        null != e && K(e.getBoundingClientRect())
    }, [X.width, X.height, W, H]);
    let q = n.useRef(null),
        Q = n.useRef({}),
        Y = n.useCallback((e, t) => {
            if (null == c) return;
            if (null == F) return null;
            let a = ((0, r.clamp)(e, F.left, F.right) - F.left) / F.width * c,
                l = (0, r.clamp)(a, 0, c),
                n = P;
            null == n && t && (n = l <= f ? "start" : l >= v ? "end" : "playhead", m && (w(), V(!0)), z(n)), "start" === n ? y(l) : "end" === n ? A(l) : "playhead" === n && R((0, r.clamp)(l, f, v))
        }, [c, F, P, f, v, m, w, y, A, R]),
        Z = n.useCallback(e => {
            if (null == c) return;
            let t = (0, j.A)(c, e.shiftKey),
                a = !1;
            switch (e.key) {
                case "ArrowLeft":
                    a = !0, y(f - t);
                    break;
                case "ArrowRight":
                    a = !0, y(f + t)
            }
            a && (e.stopPropagation(), e.preventDefault())
        }, [c, y, f]),
        ee = n.useCallback(e => {
            if (null == c) return;
            let t = (0, j.A)(c, e.shiftKey),
                a = !1;
            switch (e.key) {
                case "ArrowLeft":
                    a = !0, A(v - t);
                    break;
                case "ArrowRight":
                    a = !0, A(v + t)
            }
            a && (e.stopPropagation(), e.preventDefault())
        }, [c, A, v]),
        et = n.useCallback(e => {
            Y(e.clientX, !0)
        }, [Y]),
        ea = n.useCallback(e => {
            Y(e.clientX, !1)
        }, [Y]),
        el = n.useCallback(() => {
            B && S(), V(!1), z(null)
        }, [B, S]);
    n.useEffect(() => (document.addEventListener("mousemove", ea), document.addEventListener("mouseup", el), () => {
        document.removeEventListener("mousemove", ea), document.removeEventListener("mouseup", el)
    }), [ea, el]), n.useEffect(() => {
        !async function() {
            let e = H.current,
                t = O.current;
            if (null == e || null == t || !U) return;
            e.height = J, e.width = W;
            let a = e.getContext("2d");
            if (null == a) return;
            a.fillStyle = "#000", a.fillRect(0, 0, W, J);
            let l = Math.ceil(J * (t.videoWidth / t.videoHeight)),
                n = Math.ceil(W / l),
                i = q.current;
            if (null == i) return;
            i.width = l, i.height = J;
            let s = i?.getContext("2d", {
                willReadFrequently: !0
            });
            if (null == s) return;
            let r = Q.current;
            if (r[n]?.length === n) {
                for (let e = 0; e < n; e++) a.putImageData(r[n][e], l * e, 0);
                return
            }
            for (let e = 0; e < n; e++) await new Promise(i => {
                t.onseeked = () => {
                    a.drawImage(t, l * e, 0, l, J), s.drawImage(t, 0, 0, l, J);
                    let o = s.getImageData(0, 0, l, J);
                    null == r[n] && (r[n] = []), r[n][e] = o, i()
                }, t.currentTime = l / W * c * e
            })
        }()
    }, [W, J, H, c, q, U]);
    let en = M - f,
        ei = n.useCallback(() => {
            R(Math.max(f, M - 10))
        }, [f, M, R]),
        es = n.useCallback(() => {
            R(Math.min(v, M + 10))
        }, [v, M, R]),
        er = n.useCallback(() => {
            m ? w() : S()
        }, [m, S, w]),
        eo = n.useCallback(() => D(!0), []);
    return (0, l.jsx)("div", {
        className: N.f4,
        children: (0, l.jsxs)("div", {
            className: N.fL,
            children: [(0, l.jsxs)("div", {
                className: N.lx,
                children: [(0, l.jsx)("div", {
                    className: N.k2,
                    children: (0, l.jsx)("div", {
                        ref: G,
                        className: N.re,
                        children: (0, l.jsxs)(d.Text, {
                            variant: "text-sm/normal",
                            className: N.g7,
                            color: "text-muted",
                            children: [T(en), (0, l.jsx)("span", {
                                className: N.xW,
                                children: " / "
                            }), T(x)]
                        })
                    })
                }), (0, l.jsxs)("div", {
                    className: N.s2,
                    children: [(0, l.jsx)(d.K0, {
                        size: "md",
                        variant: "secondary",
                        icon: d.qN$,
                        onClick: ei,
                        "aria-label": k.intl.string(k.t.r9s3Uv)
                    }), (0, l.jsx)(d.K0, {
                        size: "md",
                        icon: m ? d.E$n : d.udU,
                        onClick: er,
                        "aria-label": k.intl.string(m ? k.t.ZcgDJX : k.t.RscU7I)
                    }), (0, l.jsx)(d.K0, {
                        size: "md",
                        variant: "secondary",
                        icon: d.i76,
                        onClick: es,
                        "aria-label": k.intl.string(k.t.zWDcNP)
                    })]
                })]
            }), (0, l.jsx)(b.A, {
                onMouseDown: et,
                voiceAudioTracks: i,
                clipId: a.id,
                className: N.ou
            }), (0, l.jsx)(E, {
                onMouseDown: et,
                videoLength: c,
                clip: a
            }), (0, l.jsx)("div", {
                className: N.PH,
                children: (0, l.jsxs)("div", {
                    className: s()(N.IO, {
                        [N.Dg]: null != P
                    }),
                    onMouseDown: et,
                    children: [(0, l.jsx)("canvas", {
                        className: N.zj,
                        ref: q
                    }), (0, l.jsx)("canvas", {
                        className: N.Ay,
                        ref: H
                    }), (0, l.jsx)(d.vN3, {
                        children: (0, l.jsx)("div", {
                            tabIndex: 0,
                            ref: $,
                            className: N.lG,
                            style: {
                                left: null != c && c > 0 ? `${M/c*100}%` : 0
                            }
                        })
                    }), (0, l.jsx)(p.A, {
                        preload: "auto",
                        className: N.Fi,
                        ref: O,
                        src: t,
                        muted: !0,
                        onLoadedMetadata: eo
                    }), (0, l.jsxs)("div", {
                        className: N.Ws,
                        style: {
                            left: null != c ? `${f/c*100}%` : "0",
                            right: null != c ? `${(c-v)/c*100}%` : "0"
                        },
                        children: [(0, l.jsx)(d.vN3, {
                            children: (0, l.jsx)("button", {
                                className: s()(N.uI, {
                                    [N.cB]: "start" === P
                                }),
                                onMouseDown: et,
                                onKeyDown: Z,
                                role: "slider",
                                tabIndex: 0,
                                "aria-valuemin": 0,
                                "aria-valuenow": f,
                                "aria-valuetext": L(f),
                                "aria-valuemax": v - C.zj,
                                "aria-label": k.intl.string(k.t["+BTvw8"]),
                                children: (0, l.jsx)("div", {
                                    className: N.FV
                                })
                            })
                        }), (0, l.jsx)(d.vN3, {
                            children: (0, l.jsx)("button", {
                                className: s()(N.H1, {
                                    [N.cB]: "end" === P
                                }),
                                onMouseDown: et,
                                onKeyDown: ee,
                                role: "slider",
                                tabIndex: 0,
                                "aria-valuemin": f + C.zj,
                                "aria-valuenow": v,
                                "aria-valuetext": L(v),
                                "aria-valuemax": c,
                                "aria-label": k.intl.string(k.t.bBgBYo),
                                children: (0, l.jsx)("div", {
                                    className: N.kn
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
        a = Math.floor(e % 60),
        l = Math.floor(e % 1 * 100);
    return t = t < 10 ? "0" + t : t, a = a < 10 ? "0" + a : a, l = l < 10 ? "0" + l : l, `${t}:${a}.${l}`
}

function L(e) {
    let t = Math.floor(e / 60),
        a = k.intl.formatToPlainString(k.t.iXLF9W, {
            minutes: t
        }),
        l = k.intl.formatToPlainString(k.t.geSp4K, {
            seconds: e % 60
        });
    return `${a} ${l}`
}