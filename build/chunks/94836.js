/** chunk id: 94836 params = (module,exports,require) **/
n.d(t, {
    A: () => j,
    a: () => E
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(775602),
    d = n(435582),
    u = n(607470),
    m = n(720462),
    x = n(256905),
    h = n(409626),
    f = n(368546),
    g = n(985018),
    _ = n(851822),
    p = n(351886),
    v = n(947570),
    A = n(1309);

function j(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, i = l.useRef(null), r = l.useMemo(() => {
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
        if (null == i.current) return;
        let t = i.current.getScrollerState().scrollLeft;
        i.current.scrollTo({
            to: t + 280 * e,
            animate: !0
        })
    }
    return 0 === r.length ? null : (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Heading, {
            className: _.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: g.intl.string(g.t.bNdK5x)
        }), (0, a.jsxs)("div", {
            className: s ? p.DA : p.pZ,
            children: [(0, a.jsx)(o.zCo, {
                ref: i,
                className: p.ec,
                orientation: "horizontal",
                children: r.map((e, t) => (0, a.jsx)(o.DUT, {
                    className: p.gw,
                    focusProps: {
                        offset: 4,
                        ringClassName: p.jR
                    },
                    onClick: () => {
                        n(h.Ws.ClickImage), (0, x.R)({
                            items: r,
                            startingIndex: t,
                            shouldHideMediaOptions: !0,
                            location: "GameProfileMedia"
                        })
                    },
                    children: (0, a.jsx)("img", {
                        src: e.url,
                        className: p.Zm,
                        alt: g.intl.formatToPlainString(g.t.COYYrn, {
                            game: name
                        })
                    })
                }, t))
            }), s && (0, a.jsxs)("div", {
                className: p.NA,
                children: [(0, a.jsx)("div", {
                    className: p.EJ
                }), (0, a.jsx)(o.DUT, {
                    className: p.G9,
                    onClick: () => c(-1),
                    children: (0, a.jsx)(o.rJJ, {
                        className: p.UE,
                        color: "currentColor"
                    })
                }), (0, a.jsx)("div", {
                    className: p.Pj
                }), (0, a.jsx)(o.DUT, {
                    className: p.G9,
                    onClick: () => c(1),
                    children: (0, a.jsx)(o.EdP, {
                        className: p.UE,
                        color: "currentColor"
                    })
                })]
            })]
        })]
    })
}

function E(e) {
    let {
        detectedGame: t
    } = e, [n, i] = l.useState(0), [h, _] = l.useState(t.artwork), [p, j] = l.useState(t.screenshots), E = l.useRef(null), I = l.useRef(null), C = (0, s.bG)([c.A], () => c.A.useReducedMotion);
    (h !== t.artwork || p !== t.screenshots) && (_(t.artwork), j(t.screenshots), i(0));
    let b = l.useMemo(() => {
            let e = (t.trailers ?? []).map(e => ({
                    url: (0, d.A)(e.application_id, e.id),
                    type: "VIDEO"
                })),
                n = t.artwork.map(e => ({
                    url: e,
                    type: "IMAGE"
                }));
            return [...e, ...t.screenshots.map(e => ({
                url: e,
                type: "IMAGE"
            })), ...n]
        }, [t.trailers, t.artwork, t.screenshots]),
        N = b.length > 0 ? Math.min(n, b.length - 1) : 0,
        T = b[N],
        S = T?.type === "VIDEO";
    return ((0, f.A)({
        videoRef: E,
        canvasRef: I,
        enabled: S && !C
    }), 0 === b.length) ? null : (0, a.jsxs)("div", {
        className: v.kL,
        children: [S ? (0, a.jsxs)("div", {
            className: A.ND,
            children: [!C && (0, a.jsx)("canvas", {
                ref: I,
                className: A.HW,
                "aria-hidden": "true"
            }), (0, a.jsx)(u.A, {
                ref: E,
                className: A.dj,
                src: T.url,
                controls: !0,
                playsInline: !0
            })]
        }) : (0, a.jsx)(o.DUT, {
            className: v.gv,
            onClick: () => {
                let e = b.filter(e => "IMAGE" === e.type),
                    t = e.indexOf(T);
                (0, x.R)({
                    items: e,
                    startingIndex: Math.max(0, t),
                    shouldHideMediaOptions: !0,
                    location: "GameProfileMedia"
                })
            },
            children: (0, a.jsx)("img", {
                src: T.url,
                className: v.c8,
                alt: g.intl.formatToPlainString(g.t.COYYrn, {
                    game: t.name
                })
            })
        }), (0, a.jsx)(m.A, {
            gap: "xs",
            children: b.map((e, n) => (0, a.jsx)(o.DUT, {
                className: r()(v.JS, n === N && v.Y4),
                onClick: () => i(n),
                children: (0, a.jsx)("img", {
                    src: e.url,
                    className: v.xn,
                    alt: g.intl.formatToPlainString(g.t.COYYrn, {
                        game: t.name
                    })
                })
            }, `${n}-${e.url}`))
        })]
    })
}