/** chunk id: 94836 params = (module,exports,require) **/
n.d(t, {
    A: () => j,
    a: () => N
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(732955),
    c = n(397927),
    d = n(775602),
    u = n(951707),
    m = n(898736),
    x = n(248643),
    h = n(256905),
    f = n(652176),
    g = n(371794),
    p = n(409626),
    _ = n(368546),
    v = n(985018),
    A = n(282063),
    b = n(426401),
    E = n(791129);

function j(e) {
    let {
        game: t,
        trackAction: n
    } = e, i = l.useRef(null), r = (0, m._)(t), s = l.useMemo(() => {
        let e = r.map(e => ({
            url: e,
            type: "IMAGE"
        }));
        return [...(t.screenshotUrls ?? []).map(e => ({
            url: e,
            type: "IMAGE"
        })), ...e]
    }, [r, t.screenshotUrls]), o = s.length > 2;

    function d(e) {
        if (null == i.current) return;
        let t = i.current.getScrollerState().scrollLeft;
        i.current.scrollTo({
            to: t + 280 * e,
            animate: !0
        })
    }
    return 0 === s.length ? null : (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.Heading, {
            className: A.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: v.intl.string(v.t.bNdK5x)
        }), (0, a.jsxs)("div", {
            className: o ? b.DA : b.pZ,
            children: [(0, a.jsx)(c.zCo, {
                ref: i,
                className: b.ec,
                orientation: "horizontal",
                children: s.map((e, t) => (0, a.jsx)(c.DUT, {
                    className: b.gw,
                    focusProps: {
                        offset: 4,
                        ringClassName: b.jR
                    },
                    onClick: () => {
                        n(p.Ws.ClickImage), (0, h.R)({
                            items: s,
                            startingIndex: t,
                            shouldHideMediaOptions: !0,
                            location: "GameProfileMedia"
                        })
                    },
                    children: (0, a.jsx)("img", {
                        src: e.url,
                        className: b.Zm,
                        alt: v.intl.formatToPlainString(v.t.COYYrn, {
                            game: name
                        })
                    })
                }, t))
            }), o && (0, a.jsxs)("div", {
                className: b.NA,
                children: [(0, a.jsx)("div", {
                    className: b.EJ
                }), (0, a.jsx)(c.DUT, {
                    className: b.G9,
                    onClick: () => d(-1),
                    children: (0, a.jsx)(c.rJJ, {
                        className: b.UE,
                        color: "currentColor"
                    })
                }), (0, a.jsx)("div", {
                    className: b.Pj
                }), (0, a.jsx)(c.DUT, {
                    className: b.G9,
                    onClick: () => d(1),
                    children: (0, a.jsx)(c.EdP, {
                        className: b.UE,
                        color: "currentColor"
                    })
                })]
            })]
        })]
    })
}
let I = l.memo(function(e) {
        let {
            item: t,
            index: n,
            isSelected: i,
            isPlaying: s,
            onSelect: d,
            gameName: u
        } = e, m = l.useCallback(() => d(n), [d, n]);
        return (0, a.jsx)(c.DUT, {
            className: r()(E.JS, i && E.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: E.ub,
                children: [(0, a.jsx)("img", {
                    src: "VIDEO" === t.type ? t.poster ?? t.url : t.url,
                    className: E.xn,
                    alt: v.intl.formatToPlainString(v.t.COYYrn, {
                        game: u
                    }),
                    draggable: !1
                }), "VIDEO" === t.type && (0, a.jsx)("div", {
                    className: E.UZ,
                    children: (0, a.jsx)(o.DMX, {
                        playing: i && s,
                        size: "sm"
                    })
                })]
            })
        })
    }),
    C = l.memo(function(e) {
        let {
            item: t,
            reducedMotion: n,
            videoRef: i,
            mediaPlayerRef: r,
            onPlay: s,
            onPause: o,
            onFullscreenChange: c
        } = e, d = l.useRef(null);
        return (0, _.A)({
            videoRef: i,
            canvasRef: d,
            enabled: !n
        }), (0, a.jsxs)(a.Fragment, {
            children: [!n && (0, a.jsx)("canvas", {
                ref: d,
                className: E.HW,
                "aria-hidden": "true"
            }), (0, a.jsx)("div", {
                className: E.tN,
                children: (0, a.jsx)(x.A, {
                    src: t.url,
                    poster: t.poster ?? "",
                    width: t.width ?? 1920,
                    height: t.height ?? 1080,
                    naturalWidth: t.width ?? 1920,
                    naturalHeight: t.height ?? 1080,
                    maxWidth: 1 / 0,
                    maxHeight: 1 / 0,
                    autoPlay: !n,
                    autoMute: !0,
                    useFullWidth: !0,
                    responsive: !0,
                    renderLinkComponent: f.bU,
                    onPlay: s,
                    onPause: o,
                    onFullscreenChange: c,
                    mediaPlayerClassName: E.T9,
                    videoRef: i,
                    mediaPlayerRef: r
                })
            })]
        })
    });

function N(e) {
    let {
        game: t,
        trackAction: n
    } = e, [i, r] = l.useState(0), [o, m] = l.useState(null), [x, f] = l.useState(t.screenshotUrls), _ = l.useRef(null), A = l.useRef(null), b = (0, s.bG)([d.A], () => d.A.useReducedMotion);
    x !== t.screenshotUrls && (f(t.screenshotUrls), r(0));
    let j = l.useMemo(() => [...(t.trailers ?? []).map(e => {
            let t = (0, g.YE)(e.application_id, e.id, e.width, "mp4");
            return {
                url: t,
                proxyUrl: t,
                poster: (0, g.YE)(e.application_id, e.id, e.width, "webp"),
                type: "VIDEO",
                width: e.width,
                height: e.height
            }
        }), ...(t.screenshotUrls ?? []).map(e => ({
            url: e,
            type: "IMAGE"
        }))], [t.trailers, t.screenshotUrls]),
        N = j.length > 0 ? Math.min(i, j.length - 1) : 0,
        S = j[N],
        y = S?.type === "VIDEO",
        T = l.useCallback(e => {
            let t = j[N],
                n = j[e];
            t?.type === "IMAGE" && n?.type === "IMAGE" && t.url !== n.url ? m(t.url) : m(null), r(e)
        }, [j, N]),
        [L, k] = l.useState(!1),
        R = l.useRef(null),
        O = l.useCallback(() => {
            n(y ? p.Ws.ClickTrailer : p.Ws.ClickImage);
            let e = _.current,
                t = R.current,
                a = null != e && !e.paused,
                l = e?.muted ?? !0,
                i = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = j.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === N;
                    return {
                        ...e,
                        autoPlay: !!n && a,
                        autoMute: !n || l,
                        initialTimeSec: n ? i : void 0,
                        videoRef: A
                    }
                }
                return e
            });
            (0, h.R)({
                items: s,
                startingIndex: N,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: r,
                onClose: () => {
                    let e = A.current,
                        t = R.current,
                        n = null != e ? !e.paused : a;
                    e?.pause(), null != t && null != e ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted)) : n && t?.setPlay(!0), k(n)
                }
            })
        }, [n, j, N, y]),
        M = l.useCallback(() => k(!0), []),
        G = l.useCallback(() => k(!1), []),
        w = l.useCallback(() => m(null), []),
        P = l.useCallback(e => {
            e && O()
        }, [O]);
    return 0 === j.length ? null : (0, a.jsxs)("div", {
        className: E.kL,
        children: [y ? (0, a.jsx)("div", {
            className: E.ND,
            children: (0, a.jsx)(C, {
                item: S,
                reducedMotion: b,
                videoRef: _,
                mediaPlayerRef: R,
                onPlay: M,
                onPause: G,
                onFullscreenChange: P
            }, `${N}-${S.url}`)
        }) : (0, a.jsxs)("div", {
            className: E.wp,
            children: [null != o && !b && (0, a.jsx)("div", {
                className: E.Jy,
                onAnimationEnd: w,
                children: (0, a.jsx)("img", {
                    src: o,
                    className: E.Db,
                    alt: ""
                })
            }, o), (0, a.jsx)("div", {
                className: E.QN
            }), (0, a.jsx)(c.DUT, {
                className: E.gv,
                onClick: O,
                children: (0, a.jsx)("img", {
                    src: S.url,
                    className: E.c8,
                    alt: v.intl.formatToPlainString(v.t.COYYrn, {
                        game: t.name
                    })
                }, S.url)
            })]
        }), (0, a.jsx)(u.A, {
            gap: "xs",
            iconButtonSize: "sm",
            children: j.map((e, n) => (0, a.jsx)(I, {
                item: e,
                index: n,
                isPlaying: L,
                isSelected: n === N,
                onSelect: T,
                gameName: t.name
            }, `${n}-${e.url}`))
        })]
    })
}