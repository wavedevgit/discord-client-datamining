/** chunk id: 94836 params = (module,exports,require) **/
n.d(t, {
    A: () => C,
    a: () => N
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(311907),
    c = n(732955),
    o = n(397927),
    d = n(775602),
    u = n(720462),
    m = n(248643),
    x = n(256905),
    h = n(652176),
    f = n(371794),
    g = n(409626),
    _ = n(368546),
    p = n(985018),
    v = n(282063),
    A = n(426401),
    j = n(791129);

function C(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, l = i.useRef(null), r = i.useMemo(() => {
        let e = t.artwork.map(e => ({
            url: e,
            type: "IMAGE"
        }));
        return [...t.screenshots.map(e => ({
            url: e,
            type: "IMAGE"
        })), ...e]
    }, [t.artwork, t.screenshots]), s = r.length > 2;

    function c(e) {
        if (null == l.current) return;
        let t = l.current.getScrollerState().scrollLeft;
        l.current.scrollTo({
            to: t + 280 * e,
            animate: !0
        })
    }
    return 0 === r.length ? null : (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Heading, {
            className: v.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: p.intl.string(p.t.bNdK5x)
        }), (0, a.jsxs)("div", {
            className: s ? A.DA : A.pZ,
            children: [(0, a.jsx)(o.zCo, {
                ref: l,
                className: A.ec,
                orientation: "horizontal",
                children: r.map((e, t) => (0, a.jsx)(o.DUT, {
                    className: A.gw,
                    focusProps: {
                        offset: 4,
                        ringClassName: A.jR
                    },
                    onClick: () => {
                        n(g.Ws.ClickImage), (0, x.R)({
                            items: r,
                            startingIndex: t,
                            shouldHideMediaOptions: !0,
                            location: "GameProfileMedia"
                        })
                    },
                    children: (0, a.jsx)("img", {
                        src: e.url,
                        className: A.Zm,
                        alt: p.intl.formatToPlainString(p.t.COYYrn, {
                            game: name
                        })
                    })
                }, t))
            }), s && (0, a.jsxs)("div", {
                className: A.NA,
                children: [(0, a.jsx)("div", {
                    className: A.EJ
                }), (0, a.jsx)(o.DUT, {
                    className: A.G9,
                    onClick: () => c(-1),
                    children: (0, a.jsx)(o.rJJ, {
                        className: A.UE,
                        color: "currentColor"
                    })
                }), (0, a.jsx)("div", {
                    className: A.Pj
                }), (0, a.jsx)(o.DUT, {
                    className: A.G9,
                    onClick: () => c(1),
                    children: (0, a.jsx)(o.EdP, {
                        className: A.UE,
                        color: "currentColor"
                    })
                })]
            })]
        })]
    })
}
let E = i.memo(function(e) {
        let {
            item: t,
            index: n,
            isSelected: l,
            isPlaying: s,
            onSelect: d,
            gameName: u
        } = e, m = i.useCallback(() => d(n), [d, n]);
        return (0, a.jsx)(o.DUT, {
            className: r()(j.JS, l && j.Y4),
            onClick: m,
            children: (0, a.jsxs)("div", {
                className: j.ub,
                children: [(0, a.jsx)("img", {
                    src: "VIDEO" === t.type ? t.poster ?? t.url : t.url,
                    className: j.xn,
                    alt: p.intl.formatToPlainString(p.t.COYYrn, {
                        game: u
                    })
                }), "VIDEO" === t.type && (0, a.jsx)("div", {
                    className: j.UZ,
                    children: (0, a.jsx)(c.DMX, {
                        playing: l && s,
                        size: "sm"
                    })
                })]
            })
        })
    }),
    I = i.memo(function(e) {
        let {
            item: t,
            reducedMotion: n,
            videoRef: l,
            mediaPlayerRef: r,
            onPlay: s,
            onPause: c,
            onFullscreenChange: o
        } = e, d = i.useRef(null);
        return (0, _.A)({
            videoRef: l,
            canvasRef: d,
            enabled: !n
        }), (0, a.jsxs)(a.Fragment, {
            children: [!n && (0, a.jsx)("canvas", {
                ref: d,
                className: j.HW,
                "aria-hidden": "true"
            }), (0, a.jsx)(m.A, {
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
                renderLinkComponent: h.bU,
                onPlay: s,
                onPause: c,
                onFullscreenChange: o,
                mediaPlayerClassName: j.T9,
                videoRef: l,
                mediaPlayerRef: r
            })]
        })
    });

function N(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, [l, r] = i.useState(0), [c, m] = i.useState(t.artwork), [h, _] = i.useState(t.screenshots), v = i.useRef(null), A = i.useRef(null), C = (0, s.bG)([d.A], () => d.A.useReducedMotion);
    (c !== t.artwork || h !== t.screenshots) && (m(t.artwork), _(t.screenshots), r(0));
    let N = i.useMemo(() => {
            let e = (t.trailers ?? []).map(e => {
                    let t = (0, f.YE)(e.application_id, e.id, e.width, "mp4");
                    return {
                        url: t,
                        proxyUrl: t,
                        poster: (0, f.YE)(e.application_id, e.id, e.width, "webp"),
                        type: "VIDEO",
                        width: e.width,
                        height: e.height
                    }
                }),
                n = t.artwork.map(e => ({
                    url: e,
                    type: "IMAGE"
                }));
            return [...e, ...t.screenshots.map(e => ({
                url: e,
                type: "IMAGE"
            })), ...n]
        }, [t.trailers, t.artwork, t.screenshots]),
        b = N.length > 0 ? Math.min(l, N.length - 1) : 0,
        S = N[b],
        T = S?.type === "VIDEO",
        [k, L] = i.useState(!1),
        y = i.useRef(null),
        O = i.useCallback(() => {
            n(T ? g.Ws.ClickTrailer : g.Ws.ClickImage);
            let e = v.current,
                t = y.current,
                a = null != e && !e.paused,
                i = e?.muted ?? !0,
                l = e?.currentTime ?? 0;
            t?.setPlay(!1);
            let s = N.map((e, t) => {
                if ("VIDEO" === e.type) {
                    let n = t === b;
                    return {
                        ...e,
                        autoPlay: !!n && a,
                        autoMute: !n || i,
                        initialTimeSec: n ? l : void 0,
                        videoRef: A
                    }
                }
                return e
            });
            (0, x.R)({
                items: s,
                startingIndex: b,
                shouldHideMediaOptions: !0,
                location: "GameProfileMedia",
                onIndexChange: r,
                onClose: () => {
                    let e = A.current,
                        t = y.current,
                        n = null != e ? !e.paused : a;
                    e?.pause(), null != t && null != e ? (t.setTime(e.currentTime, !1), n && t.setPlay(!0), t.setMuted(e.muted)) : n && t?.setPlay(!0), L(n)
                }
            })
        }, [n, N, b, T]),
        R = i.useCallback(() => L(!0), []),
        G = i.useCallback(() => L(!1), []),
        M = i.useCallback(e => {
            e && O()
        }, [O]);
    return 0 === N.length ? null : (0, a.jsxs)("div", {
        className: j.kL,
        children: [T ? (0, a.jsx)("div", {
            className: j.ND,
            children: (0, a.jsx)(I, {
                item: S,
                reducedMotion: C,
                videoRef: v,
                mediaPlayerRef: y,
                onPlay: R,
                onPause: G,
                onFullscreenChange: M
            }, `${b}-${S.url}`)
        }) : (0, a.jsx)(o.DUT, {
            className: j.gv,
            onClick: O,
            children: (0, a.jsx)("img", {
                src: S.url,
                className: j.c8,
                alt: p.intl.formatToPlainString(p.t.COYYrn, {
                    game: t.name
                })
            })
        }), (0, a.jsx)(u.A, {
            gap: "xs",
            iconButtonSize: "sm",
            children: N.map((e, n) => (0, a.jsx)(E, {
                item: e,
                index: n,
                isPlaying: k,
                isSelected: n === b,
                onSelect: r,
                gameName: t.name
            }, `${n}-${e.url}`))
        })]
    })
}