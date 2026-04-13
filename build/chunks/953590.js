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
    b = n(848752),
    p = n(452282),
    f = n(619517),
    g = n(652176),
    C = n(203982),
    x = n(995393),
    A = n(652215),
    T = n(133639);
let v = 747,
    E = e => (0, g.$o)({
        ...e,
        className: T.tN,
        mediaPlayerClassName: T.yf
    }),
    I = e => (0, a.jsx)(f.Ay, {
        ...e
    });

function j(e) {
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
    } = e, o = j(t), d = (0, a.jsx)(m.rr, {
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
        renderVideoComponent: E,
        renderImageComponent: I,
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
        background: j(t)
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
    } = e, _ = (0, l.useRef)(0), [m, f] = (0, l.useState)(0), [g, E] = (0, l.useState)(0), I = (0, l.useRef)(0), j = (0, l.useRef)(t.length), [k, y] = (0, l.useState)(!0), [R, O] = (0, l.useState)(!1), [U, L] = (0, l.useState)(!1), [P, w] = (0, l.useState)(!1), [B, D] = (0, l.useState)(!1), M = (0, l.useCallback)((e, n) => {
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
        O(!1), L(t);
        let n = j.current,
            a = (0, p.U3)(I.current, n),
            l = (0, p.U3)(e, n);
        I.current = l, E(l), _.current++, f(_.current), y(1 === Math.abs(l - a) || l === n - 1 && 0 === a || 0 === l && a === n - 1)
    }, []), H = (0, l.useCallback)(() => {
        F(I.current + 1, !1)
    }, [F]), G = (0, l.useCallback)(() => {
        u?.(x.Jq.CAROUSEL_NEXT), F(I.current + 1)
    }, [F, u]), W = (0, l.useCallback)(() => {
        u?.(x.Jq.CAROUSEL_PREV), F(I.current - 1)
    }, [F, u]), Y = (0, l.useCallback)(e => {
        O(!0), L(!e)
    }, []), q = (0, l.useCallback)(() => {
        U || H()
    }, [U, H]), V = (0, l.useCallback)(e => {
        let t = I.current;
        e < t ? w(!0) : e > t && D(!0)
    }, []), X = (0, l.useCallback)(() => {
        w(!1), D(!1)
    }, []), $ = (0, l.useCallback)((e, t, n) => (0, a.jsx)(S, {
        item: e,
        itemIndex: t,
        isCurrentItem: n,
        onSetItem: e => {
            u?.(x.Jq.CAROUSEL_ITEM), F(e)
        },
        setHasInteracted: L
    }), [F, u]), J = (0, l.useCallback)((e, n, l) => {
        let i = n === (0, p.U3)(g, t.length);
        return (0, a.jsx)(d.A.div, {
            className: o()(T.AS, {
                [T.Xt]: i
            }),
            style: null != l ? M(n, l) : null,
            onMouseEnter: i ? null : () => V(n),
            onMouseLeave: i ? null : X,
            children: "video" === e.type ? (0, a.jsx)(N, {
                item: e,
                onPlay: Y,
                onEnded: q,
                playable: i,
                isMuted: c,
                onClick: () => {
                    u?.(x.Jq.CAROUSEL_ITEM), F(n)
                }
            }, m) : $(e, n, i)
        })
    }, [g, t.length, M, V, X, Y, q, F, $, c, u, m]), z = (0, l.useCallback)(() => {
        let e = (0, a.jsx)(p.Ay, {
            className: T.Dk,
            items: t,
            itemSize: {
                width: v,
                margin: 0
            },
            renderItem: J,
            currentIndex: g,
            animate: k,
            edgeItems: 2
        });
        return t.length <= 1 ? e : (0, a.jsxs)("div", {
            className: T.HY,
            children: [e, (0, a.jsx)(b.Q8, {
                onClick: W,
                className: o()(T.UE, {
                    [T.h_]: P
                })
            }), (0, a.jsx)(b.Oj, {
                onClick: G,
                className: o()(T.UE, {
                    [T.h_]: B
                })
            })]
        })
    }, [t, J, g, k, W, G, P, B]), K = (0, l.useCallback)((e, t) => {
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
    (0, l.useEffect)(() => (C._.subscribe(A.jej.CAROUSEL_PREV, W), C._.subscribe(A.jej.CAROUSEL_NEXT, G), () => {
        C._.unsubscribe(A.jej.CAROUSEL_PREV, W), C._.unsubscribe(A.jej.CAROUSEL_NEXT, G)
    }), [W, G]), (0, l.useEffect)(() => {
        j.current = t.length
    }, [t]), (0, l.useEffect)(() => {
        r?.(t[g], g)
    }, [g, t, r]);
    let Q = (0, l.useCallback)(e => {
        u?.(x.Jq.CAROUSEL_ITEM), F(e)
    }, [F, u]);
    return (0, a.jsxs)(h.A, {
        pauseOnHover: !0,
        onInterval: H,
        interval: s,
        className: n,
        disable: R || U || i,
        children: [z(), (0, a.jsx)("div", {
            className: T.X$,
            children: (0, a.jsx)(b.Ay, {
                renderItem: K,
                scrollToPadding: 40,
                items: t,
                selectedIndex: g,
                onSetItem: Q,
                paginationContainerClass: T.XG,
                align: b.Ay.Align.CENTER
            })
        })]
    })
})