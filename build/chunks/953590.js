/** chunk id: 953590 params = (module,exports,require) **/
n.d(t, {
    A: () => E,
    B: () => A
});
var l = n(627968),
    a = n(64700),
    s = n(310784),
    i = n.n(s),
    r = n(503698),
    o = n.n(r),
    c = n(615300),
    d = n(397927),
    u = n(456412),
    _ = n(654107),
    m = n(871751),
    h = n(133296),
    x = n(848752),
    f = n(452282),
    p = n(619517),
    g = n(652176),
    b = n(203982),
    C = n(995393),
    j = n(652215),
    T = n(55607);
let A = 747,
    v = e => (0, g.$o)({
        ...e,
        className: T.tN,
        mediaPlayerClassName: T.yf
    }),
    N = e => (0, l.jsx)(p.Ay, {
        ...e
    });

function S(e) {
    let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [n, l] = (0, _.rh)(t, "#000000"),
        s = a.useMemo(() => {
            let e = i()(n).darken(1);
            return `radial-gradient(circle, ${e.alpha(.2).hex()} 0%, transparent 100%)`
        }, [n]);
    return null != t && "#000000" !== n ? s : void 0
}

function k(e) {
    let {
        item: t,
        onPlay: n,
        onEnded: a,
        onClick: s,
        playable: i,
        isMuted: r
    } = e, o = S(t), c = (0, l.jsx)(m.rr, {
        href: null,
        thumbnail: {
            url: t.videoThumbnailSrc,
            width: A,
            height: 560
        },
        video: {
            url: t.src,
            proxyURL: t.src,
            width: A,
            height: 560
        },
        provider: void 0,
        allowFullScreen: !0,
        maxHeight: 560,
        maxWidth: A,
        onPlay: n,
        onEnded: a,
        playable: i,
        className: T.Ki,
        volume: 1,
        autoMute: r,
        autoPlay: i,
        renderVideoComponent: v,
        renderImageComponent: N,
        renderLinkComponent: g.bU
    }, r ? "player-muted" : "player-unmuted"), u = {
        background: o
    };
    return i ? (0, l.jsx)("div", {
        className: T.AU,
        style: u,
        children: c
    }) : (0, l.jsx)(d.DUT, {
        className: T.AU,
        onClick: s,
        style: u,
        children: c
    })
}

function I(e) {
    let {
        item: t,
        setHasInteracted: n,
        onSetItem: a,
        isCurrentItem: s,
        itemIndex: i
    } = e, r = {
        background: S(t)
    };
    return s ? (0, l.jsx)(d.DUT, {
        onClick: () => n(!0),
        className: T.AU,
        style: r,
        children: (0, l.jsx)("img", {
            src: t.src,
            alt: "",
            className: T.NP
        })
    }) : (0, l.jsx)(d.DUT, {
        onClick: () => a(i),
        className: T.AU,
        style: r,
        children: (0, l.jsx)("img", {
            alt: "",
            className: T.tv,
            src: t.src,
            draggable: !1
        })
    })
}
let E = (0, u.A)(e => {
    let {
        items: t,
        className: n,
        paused: s = !1,
        autoplayInterval: i = 8e3,
        onItemChange: r,
        isMuted: d = !0,
        onTrackClick: u
    } = e, _ = (0, a.useRef)(0), [m, p] = (0, a.useState)(0), [g, v] = (0, a.useState)(0), N = (0, a.useRef)(0), S = (0, a.useRef)(t.length), [E, y] = (0, a.useState)(!0), [R, O] = (0, a.useState)(!1), [U, L] = (0, a.useState)(!1), [P, B] = (0, a.useState)(!1), [D, w] = (0, a.useState)(!1), M = (0, a.useCallback)((e, n) => {
        let l = t[e]?.backgroundSrc,
            a = n.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
                extrapolate: c.A.Extrapolate.CLAMP
            });
        return {
            opacity: n.interpolate({
                inputRange: [0, 1],
                outputRange: [.3, 1],
                extrapolate: c.A.Extrapolate.CLAMP
            }),
            filter: c.A.template`grayscale(${a})`,
            backgroundImage: null != l ? `url(${l})` : void 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }
    }, [t]), H = (0, a.useCallback)(function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        O(!1), L(t);
        let n = S.current,
            l = (0, f.U3)(N.current, n),
            a = (0, f.U3)(e, n);
        N.current = a, v(a), _.current++, p(_.current), y(1 === Math.abs(a - l) || a === n - 1 && 0 === l || 0 === a && l === n - 1)
    }, []), F = (0, a.useCallback)(() => {
        H(N.current + 1, !1)
    }, [H]), Y = (0, a.useCallback)(() => {
        u?.(C.Jq.CAROUSEL_NEXT), H(N.current + 1)
    }, [H, u]), G = (0, a.useCallback)(() => {
        u?.(C.Jq.CAROUSEL_PREV), H(N.current - 1)
    }, [H, u]), W = (0, a.useCallback)(e => {
        O(!0), L(!e)
    }, []), q = (0, a.useCallback)(() => {
        U || F()
    }, [U, F]), X = (0, a.useCallback)(e => {
        let t = N.current;
        e < t ? B(!0) : e > t && w(!0)
    }, []), J = (0, a.useCallback)(() => {
        B(!1), w(!1)
    }, []), V = (0, a.useCallback)((e, t, n) => (0, l.jsx)(I, {
        item: e,
        itemIndex: t,
        isCurrentItem: n,
        onSetItem: e => {
            u?.(C.Jq.CAROUSEL_ITEM), H(e)
        },
        setHasInteracted: L
    }), [H, u]), z = (0, a.useCallback)((e, n, a) => {
        let s = n === (0, f.U3)(g, t.length);
        return (0, l.jsx)(c.A.div, {
            className: o()(T.AS, {
                [T.Xt]: s
            }),
            style: null != a ? M(n, a) : null,
            onMouseEnter: s ? null : () => X(n),
            onMouseLeave: s ? null : J,
            children: "video" === e.type ? (0, l.jsx)(k, {
                item: e,
                onPlay: W,
                onEnded: q,
                playable: s,
                isMuted: d,
                onClick: () => {
                    u?.(C.Jq.CAROUSEL_ITEM), H(n)
                }
            }, m) : V(e, n, s)
        })
    }, [g, t.length, M, X, J, W, q, H, V, d, u, m]), $ = (0, a.useCallback)(() => {
        let e = (0, l.jsx)(f.Ay, {
            className: T.Dk,
            items: t,
            itemSize: {
                width: A,
                margin: 0
            },
            renderItem: z,
            currentIndex: g,
            animate: E,
            edgeItems: 2
        });
        return t.length <= 1 ? e : (0, l.jsxs)("div", {
            className: T.HY,
            children: [e, (0, l.jsx)(x.Q8, {
                onClick: G,
                className: o()(T.UE, {
                    [T.h_]: P
                })
            }), (0, l.jsx)(x.Oj, {
                onClick: Y,
                className: o()(T.UE, {
                    [T.h_]: D
                })
            })]
        })
    }, [t, z, g, E, G, Y, P, D]), K = (0, a.useCallback)((e, t) => {
        let n = g === t;
        return (0, l.jsx)("div", {
            className: o()(T.Yw, n ? T.sM : T.N7),
            children: (0, l.jsx)("img", {
                alt: "",
                className: T.Pr,
                src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : void 0,
                draggable: !1
            })
        }, `page-${t}`)
    }, [g]);
    (0, a.useEffect)(() => (b._.subscribe(j.jej.CAROUSEL_PREV, G), b._.subscribe(j.jej.CAROUSEL_NEXT, Y), () => {
        b._.unsubscribe(j.jej.CAROUSEL_PREV, G), b._.unsubscribe(j.jej.CAROUSEL_NEXT, Y)
    }), [G, Y]), (0, a.useEffect)(() => {
        S.current = t.length
    }, [t]), (0, a.useEffect)(() => {
        r?.(t[g], g)
    }, [g, t, r]);
    let Q = (0, a.useCallback)(e => {
        u?.(C.Jq.CAROUSEL_ITEM), H(e)
    }, [H, u]);
    return (0, l.jsxs)(h.A, {
        pauseOnHover: !0,
        onInterval: F,
        interval: i,
        className: n,
        disable: R || U || s,
        children: [$(), (0, l.jsx)("div", {
            className: T.X$,
            children: (0, l.jsx)(x.Ay, {
                renderItem: K,
                scrollToPadding: 40,
                items: t,
                selectedIndex: g,
                onSetItem: Q,
                paginationContainerClass: T.XG,
                align: x.Ay.Align.CENTER
            })
        })]
    })
})