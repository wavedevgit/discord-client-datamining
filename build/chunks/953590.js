/** chunk id: 953590 params = (module,exports,require) **/
l.d(t, {
    A: () => E,
    B: () => A
});
var n = l(627968),
    a = l(64700),
    s = l(310784),
    i = l.n(s),
    r = l(503698),
    o = l.n(r),
    c = l(615300),
    d = l(397927),
    u = l(456412),
    _ = l(654107),
    m = l(871751),
    h = l(133296),
    x = l(848752),
    f = l(452282),
    p = l(619517),
    g = l(652176),
    b = l(203982),
    C = l(995393),
    j = l(652215),
    v = l(55607);
let A = 747,
    T = e => (0, g.$o)({
        ...e,
        className: v.tN,
        mediaPlayerClassName: v.yf
    }),
    N = e => (0, n.jsx)(p.Ay, {
        ...e
    });

function S(e) {
    let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [l, n] = (0, _.rh)(t, "#000000"),
        s = a.useMemo(() => {
            let e = i()(l).darken(1);
            return `radial-gradient(circle, ${e.alpha(.2).hex()} 0%, transparent 100%)`
        }, [l]);
    return null != t && "#000000" !== l ? s : void 0
}

function I(e) {
    let {
        item: t,
        onPlay: l,
        onEnded: a,
        onClick: s,
        playable: i,
        isMuted: r
    } = e, o = S(t), c = (0, n.jsx)(m.rr, {
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
        onPlay: l,
        onEnded: a,
        playable: i,
        className: v.Ki,
        volume: 1,
        autoMute: r,
        autoPlay: i,
        renderVideoComponent: T,
        renderImageComponent: N,
        renderLinkComponent: g.bU
    }, r ? "player-muted" : "player-unmuted"), u = {
        background: o
    };
    return i ? (0, n.jsx)("div", {
        className: v.AU,
        style: u,
        children: c
    }) : (0, n.jsx)(d.DUT, {
        className: v.AU,
        onClick: s,
        style: u,
        children: c
    })
}

function k(e) {
    let {
        item: t,
        setHasInteracted: l,
        onSetItem: a,
        isCurrentItem: s,
        itemIndex: i
    } = e, r = {
        background: S(t)
    };
    return s ? (0, n.jsx)(d.DUT, {
        onClick: () => l(!0),
        className: v.AU,
        style: r,
        children: (0, n.jsx)("img", {
            src: t.src,
            alt: "",
            className: v.NP
        })
    }) : (0, n.jsx)(d.DUT, {
        onClick: () => a(i),
        className: v.AU,
        style: r,
        children: (0, n.jsx)("img", {
            alt: "",
            className: v.tv,
            src: t.src,
            draggable: !1
        })
    })
}
let E = (0, u.A)(e => {
    let {
        items: t,
        className: l,
        paused: s = !1,
        autoplayInterval: i = 8e3,
        onItemChange: r,
        isMuted: d = !0,
        onTrackClick: u
    } = e, _ = (0, a.useRef)(0), [m, p] = (0, a.useState)(0), [g, T] = (0, a.useState)(0), N = (0, a.useRef)(0), S = (0, a.useRef)(t.length), [E, y] = (0, a.useState)(!0), [R, O] = (0, a.useState)(!1), [U, L] = (0, a.useState)(!1), [B, P] = (0, a.useState)(!1), [w, D] = (0, a.useState)(!1), M = (0, a.useCallback)((e, l) => {
        let n = t[e]?.backgroundSrc,
            a = l.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
                extrapolate: c.A.Extrapolate.CLAMP
            });
        return {
            opacity: l.interpolate({
                inputRange: [0, 1],
                outputRange: [.3, 1],
                extrapolate: c.A.Extrapolate.CLAMP
            }),
            filter: c.A.template`grayscale(${a})`,
            backgroundImage: null != n ? `url(${n})` : void 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }
    }, [t]), H = (0, a.useCallback)(function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        O(!1), L(t);
        let l = S.current,
            n = (0, f.U3)(N.current, l),
            a = (0, f.U3)(e, l);
        N.current = a, T(a), _.current++, p(_.current), y(1 === Math.abs(a - n) || a === l - 1 && 0 === n || 0 === a && n === l - 1)
    }, []), F = (0, a.useCallback)(() => {
        H(N.current + 1, !1)
    }, [H]), G = (0, a.useCallback)(() => {
        u?.(C.Jq.CAROUSEL_NEXT), H(N.current + 1)
    }, [H, u]), W = (0, a.useCallback)(() => {
        u?.(C.Jq.CAROUSEL_PREV), H(N.current - 1)
    }, [H, u]), Y = (0, a.useCallback)(e => {
        O(!0), L(!e)
    }, []), q = (0, a.useCallback)(() => {
        U || F()
    }, [U, F]), X = (0, a.useCallback)(e => {
        let t = N.current;
        e < t ? P(!0) : e > t && D(!0)
    }, []), V = (0, a.useCallback)(() => {
        P(!1), D(!1)
    }, []), J = (0, a.useCallback)((e, t, l) => (0, n.jsx)(k, {
        item: e,
        itemIndex: t,
        isCurrentItem: l,
        onSetItem: e => {
            u?.(C.Jq.CAROUSEL_ITEM), H(e)
        },
        setHasInteracted: L
    }), [H, u]), z = (0, a.useCallback)((e, l, a) => {
        let s = l === (0, f.U3)(g, t.length);
        return (0, n.jsx)(c.A.div, {
            className: o()(v.AS, {
                [v.Xt]: s
            }),
            style: null != a ? M(l, a) : null,
            onMouseEnter: s ? null : () => X(l),
            onMouseLeave: s ? null : V,
            children: "video" === e.type ? (0, n.jsx)(I, {
                item: e,
                onPlay: Y,
                onEnded: q,
                playable: s,
                isMuted: d,
                onClick: () => {
                    u?.(C.Jq.CAROUSEL_ITEM), H(l)
                }
            }, m) : J(e, l, s)
        })
    }, [g, t.length, M, X, V, Y, q, H, J, d, u, m]), $ = (0, a.useCallback)(() => {
        let e = (0, n.jsx)(f.Ay, {
            className: v.Dk,
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
        return t.length <= 1 ? e : (0, n.jsxs)("div", {
            className: v.HY,
            children: [e, (0, n.jsx)(x.Q8, {
                onClick: W,
                className: o()(v.UE, {
                    [v.h_]: B
                })
            }), (0, n.jsx)(x.Oj, {
                onClick: G,
                className: o()(v.UE, {
                    [v.h_]: w
                })
            })]
        })
    }, [t, z, g, E, W, G, B, w]), K = (0, a.useCallback)((e, t) => {
        let l = g === t;
        return (0, n.jsx)("div", {
            className: o()(v.Yw, l ? v.sM : v.N7),
            children: (0, n.jsx)("img", {
                alt: "",
                className: v.Pr,
                src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : void 0,
                draggable: !1
            })
        }, `page-${t}`)
    }, [g]);
    (0, a.useEffect)(() => (b._.subscribe(j.jej.CAROUSEL_PREV, W), b._.subscribe(j.jej.CAROUSEL_NEXT, G), () => {
        b._.unsubscribe(j.jej.CAROUSEL_PREV, W), b._.unsubscribe(j.jej.CAROUSEL_NEXT, G)
    }), [W, G]), (0, a.useEffect)(() => {
        S.current = t.length
    }, [t]), (0, a.useEffect)(() => {
        r?.(t[g], g)
    }, [g, t, r]);
    let Q = (0, a.useCallback)(e => {
        u?.(C.Jq.CAROUSEL_ITEM), H(e)
    }, [H, u]);
    return (0, n.jsxs)(h.A, {
        pauseOnHover: !0,
        onInterval: F,
        interval: i,
        className: l,
        disable: R || U || s,
        children: [$(), (0, n.jsx)("div", {
            className: v.X$,
            children: (0, n.jsx)(x.Ay, {
                renderItem: K,
                scrollToPadding: 40,
                items: t,
                selectedIndex: g,
                onSetItem: Q,
                paginationContainerClass: v.XG,
                align: x.Ay.Align.CENTER
            })
        })]
    })
})