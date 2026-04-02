/** chunk id: 953590 params = (module,exports,require) **/
n.d(t, {
    A: () => k,
    B: () => v
});
var a = n(627968),
    l = n(64700),
    i = n(310784),
    s = n.n(i),
    r = n(503698),
    o = n.n(r),
    d = n(615300),
    c = n(397927),
    u = n(456412),
    _ = n(654107),
    m = n(871751),
    h = n(133296),
    p = n(848752),
    b = n(452282),
    f = n(619517),
    g = n(652176),
    x = n(203982),
    C = n(995393),
    A = n(652215),
    T = n(133639);
let v = 747,
    j = e => (0, g.$o)({
        ...e,
        className: T.tN,
        mediaPlayerClassName: T.yf
    }),
    E = e => (0, a.jsx)(f.Ay, {
        ...e
    });

function I(e) {
    let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [n, a] = (0, _.rh)(t, "#000000"),
        i = l.useMemo(() => {
            let e = s()(n).darken(1);
            return `radial-gradient(circle, ${e.alpha(.2).hex()} 0%, transparent 100%)`
        }, [n]);
    return null != t && "#000000" !== n ? i : void 0
}

function N(e) {
    let {
        item: t,
        onPlay: n,
        onEnded: l,
        onClick: i,
        playable: s,
        isMuted: r
    } = e, o = I(t), d = (0, a.jsx)(m.rr, {
        href: null,
        thumbnail: {
            url: t.videoThumbnailSrc,
            width: v,
            height: 560
        },
        video: {
            url: t.src,
            proxyURL: t.src,
            width: v,
            height: 560
        },
        provider: void 0,
        allowFullScreen: !0,
        maxHeight: 560,
        maxWidth: v,
        onPlay: n,
        onEnded: l,
        playable: s,
        className: T.Ki,
        volume: 1,
        autoMute: r,
        autoPlay: s,
        renderVideoComponent: j,
        renderImageComponent: E,
        renderLinkComponent: g.bU
    }, r ? "player-muted" : "player-unmuted"), u = {
        background: o
    };
    return s ? (0, a.jsx)("div", {
        className: T.AU,
        style: u,
        children: d
    }) : (0, a.jsx)(c.DUT, {
        className: T.AU,
        onClick: i,
        style: u,
        children: d
    })
}

function S(e) {
    let {
        item: t,
        setHasInteracted: n,
        onSetItem: l,
        isCurrentItem: i,
        itemIndex: s
    } = e, r = {
        background: I(t)
    };
    return i ? (0, a.jsx)(c.DUT, {
        onClick: () => n(!0),
        className: T.AU,
        style: r,
        children: (0, a.jsx)("img", {
            src: t.src,
            alt: "",
            className: T.NP
        })
    }) : (0, a.jsx)(c.DUT, {
        onClick: () => l(s),
        className: T.AU,
        style: r,
        children: (0, a.jsx)("img", {
            alt: "",
            className: T.tv,
            src: t.src,
            draggable: !1
        })
    })
}
let k = (0, u.A)(e => {
    let {
        items: t,
        className: n,
        paused: i = !1,
        autoplayInterval: s = 8e3,
        onItemChange: r,
        isMuted: c = !0,
        onTrackClick: u
    } = e, _ = (0, l.useRef)(0), [m, f] = (0, l.useState)(0), [g, j] = (0, l.useState)(0), E = (0, l.useRef)(0), I = (0, l.useRef)(t.length), [k, y] = (0, l.useState)(!0), [R, U] = (0, l.useState)(!1), [O, w] = (0, l.useState)(!1), [P, L] = (0, l.useState)(!1), [D, M] = (0, l.useState)(!1), B = (0, l.useCallback)((e, n) => {
        let a = t[e]?.backgroundSrc,
            l = n.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
                extrapolate: d.A.Extrapolate.CLAMP
            });
        return {
            opacity: n.interpolate({
                inputRange: [0, 1],
                outputRange: [.3, 1],
                extrapolate: d.A.Extrapolate.CLAMP
            }),
            filter: d.A.template`grayscale(${l})`,
            backgroundImage: null != a ? `url(${a})` : void 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }
    }, [t]), F = (0, l.useCallback)(function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        U(!1), w(t);
        let n = I.current,
            a = (0, b.U3)(E.current, n),
            l = (0, b.U3)(e, n);
        E.current = l, j(l), _.current++, f(_.current), y(1 === Math.abs(l - a) || l === n - 1 && 0 === a || 0 === l && a === n - 1)
    }, []), H = (0, l.useCallback)(() => {
        F(E.current + 1, !1)
    }, [F]), G = (0, l.useCallback)(() => {
        u?.(C.Jq.CAROUSEL_NEXT), F(E.current + 1)
    }, [F, u]), W = (0, l.useCallback)(() => {
        u?.(C.Jq.CAROUSEL_PREV), F(E.current - 1)
    }, [F, u]), Y = (0, l.useCallback)(e => {
        U(!0), w(!e)
    }, []), q = (0, l.useCallback)(() => {
        O || H()
    }, [O, H]), V = (0, l.useCallback)(e => {
        let t = E.current;
        e < t ? L(!0) : e > t && M(!0)
    }, []), X = (0, l.useCallback)(() => {
        L(!1), M(!1)
    }, []), $ = (0, l.useCallback)((e, t, n) => (0, a.jsx)(S, {
        item: e,
        itemIndex: t,
        isCurrentItem: n,
        onSetItem: e => {
            u?.(C.Jq.CAROUSEL_ITEM), F(e)
        },
        setHasInteracted: w
    }), [F, u]), z = (0, l.useCallback)((e, n, l) => {
        let i = n === (0, b.U3)(g, t.length);
        return (0, a.jsx)(d.A.div, {
            className: o()(T.AS, {
                [T.Xt]: i
            }),
            style: null != l ? B(n, l) : null,
            onMouseEnter: i ? null : () => V(n),
            onMouseLeave: i ? null : X,
            children: "video" === e.type ? (0, a.jsx)(N, {
                item: e,
                onPlay: Y,
                onEnded: q,
                playable: i,
                isMuted: c,
                onClick: () => {
                    u?.(C.Jq.CAROUSEL_ITEM), F(n)
                }
            }, m) : $(e, n, i)
        })
    }, [g, t.length, B, V, X, Y, q, F, $, c, u, m]), J = (0, l.useCallback)(() => {
        let e = (0, a.jsx)(b.Ay, {
            className: T.Dk,
            items: t,
            itemSize: {
                width: v,
                margin: 0
            },
            renderItem: z,
            currentIndex: g,
            animate: k,
            edgeItems: 2
        });
        return t.length <= 1 ? e : (0, a.jsxs)("div", {
            className: T.HY,
            children: [e, (0, a.jsx)(p.Q8, {
                onClick: W,
                className: o()(T.UE, {
                    [T.h_]: P
                })
            }), (0, a.jsx)(p.Oj, {
                onClick: G,
                className: o()(T.UE, {
                    [T.h_]: D
                })
            })]
        })
    }, [t, z, g, k, W, G, P, D]), K = (0, l.useCallback)((e, t) => {
        let n = g === t;
        return (0, a.jsx)("div", {
            className: o()(T.Yw, n ? T.sM : T.N7),
            children: (0, a.jsx)("img", {
                alt: "",
                className: T.Pr,
                src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : void 0,
                draggable: !1
            })
        }, `page-${t}`)
    }, [g]);
    (0, l.useEffect)(() => (x._.subscribe(A.jej.CAROUSEL_PREV, W), x._.subscribe(A.jej.CAROUSEL_NEXT, G), () => {
        x._.unsubscribe(A.jej.CAROUSEL_PREV, W), x._.unsubscribe(A.jej.CAROUSEL_NEXT, G)
    }), [W, G]), (0, l.useEffect)(() => {
        I.current = t.length
    }, [t]), (0, l.useEffect)(() => {
        r?.(t[g], g)
    }, [g, t, r]);
    let Q = (0, l.useCallback)(e => {
        u?.(C.Jq.CAROUSEL_ITEM), F(e)
    }, [F, u]);
    return (0, a.jsxs)(h.A, {
        pauseOnHover: !0,
        onInterval: H,
        interval: s,
        className: n,
        disable: R || O || i,
        children: [J(), (0, a.jsx)("div", {
            className: T.X$,
            children: (0, a.jsx)(p.Ay, {
                renderItem: K,
                scrollToPadding: 40,
                items: t,
                selectedIndex: g,
                onSetItem: Q,
                paginationContainerClass: T.XG,
                align: p.Ay.Align.CENTER
            })
        })]
    })
})