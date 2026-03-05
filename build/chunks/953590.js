/** chunk id: 953590, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k,
    B: () => I
});
var a = n(627968),
    l = n(64700),
    s = n(310784),
    r = n.n(s),
    i = n(503698),
    o = n.n(i),
    c = n(615300),
    d = n(397927),
    u = n(456412),
    _ = n(654107),
    m = n(871751),
    h = n(133296),
    p = n(848752),
    b = n(452282),
    f = n(619517),
    g = n(652176),
    A = n(203982),
    C = n(995393),
    x = n(652215),
    T = n(910758);
let I = 747,
    E = e => (0, g.$o)({
        ...e,
        className: T.tN,
        mediaPlayerClassName: T.yf
    }),
    v = e => (0, a.jsx)(f.Ay, {
        ...e
    });

function N(e) {
    let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [n, a] = (0, _.rh)(t, "#000000"),
        s = l.useMemo(() => {
            let e = r()(n).darken(1);
            return `radial-gradient(circle, ${e.alpha(.2).hex()} 0%, transparent 100%)`
        }, [n]);
    return null != t && "#000000" !== n ? s : void 0
}

function S(e) {
    let {
        item: t,
        onPlay: n,
        onEnded: l,
        onClick: s,
        playable: r,
        isMuted: i
    } = e, o = N(t), c = (0, a.jsx)(m.rr, {
        href: null,
        thumbnail: {
            url: t.videoThumbnailSrc,
            width: I,
            height: 560
        },
        video: {
            url: t.src,
            proxyURL: t.src,
            width: I,
            height: 560
        },
        provider: void 0,
        allowFullScreen: !0,
        maxHeight: 560,
        maxWidth: I,
        onPlay: n,
        onEnded: l,
        playable: r,
        className: T.Ki,
        volume: 1,
        autoMute: i,
        autoPlay: r,
        renderVideoComponent: E,
        renderImageComponent: v,
        renderLinkComponent: g.bU
    }, i ? "player-muted" : "player-unmuted"), u = {
        background: o
    };
    return r ? (0, a.jsx)("div", {
        className: T.AU,
        style: u,
        children: c
    }) : (0, a.jsx)(d.DUT, {
        className: T.AU,
        onClick: s,
        style: u,
        children: c
    })
}

function y(e) {
    let {
        item: t,
        setHasInteracted: n,
        onSetItem: l,
        isCurrentItem: s,
        itemIndex: r
    } = e, i = {
        background: N(t)
    };
    return s ? (0, a.jsx)(d.DUT, {
        onClick: () => n(!0),
        className: T.AU,
        style: i,
        children: (0, a.jsx)("img", {
            src: t.src,
            alt: "",
            className: T.NP
        })
    }) : (0, a.jsx)(d.DUT, {
        onClick: () => l(r),
        className: T.AU,
        style: i,
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
        paused: s = !1,
        autoplayInterval: r = 8e3,
        onItemChange: i,
        isMuted: d = !0,
        onTrackClick: u
    } = e, _ = (0, l.useRef)(0), [m, f] = (0, l.useState)(0), [g, E] = (0, l.useState)(0), v = (0, l.useRef)(0), N = (0, l.useRef)(t.length), [k, j] = (0, l.useState)(!0), [R, O] = (0, l.useState)(!1), [P, U] = (0, l.useState)(!1), [w, L] = (0, l.useState)(!1), [D, M] = (0, l.useState)(!1), F = (0, l.useCallback)((e, n) => {
        let a = t[e]?.backgroundSrc,
            l = n.interpolate({
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
            filter: c.A.template`grayscale(${l})`,
            backgroundImage: null != a ? `url(${a})` : void 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }
    }, [t]), B = (0, l.useCallback)(function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        O(!1), U(t);
        let n = N.current,
            a = (0, b.U3)(v.current, n),
            l = (0, b.U3)(e, n);
        v.current = l, E(l), _.current++, f(_.current), j(1 === Math.abs(l - a) || l === n - 1 && 0 === a || 0 === l && a === n - 1)
    }, []), H = (0, l.useCallback)(() => {
        B(v.current + 1, !1)
    }, [B]), G = (0, l.useCallback)(() => {
        u?.(C.Jq.CAROUSEL_NEXT), B(v.current + 1)
    }, [B, u]), W = (0, l.useCallback)(() => {
        u?.(C.Jq.CAROUSEL_PREV), B(v.current - 1)
    }, [B, u]), V = (0, l.useCallback)(e => {
        O(!0), U(!e)
    }, []), Y = (0, l.useCallback)(() => {
        P || H()
    }, [P, H]), q = (0, l.useCallback)(e => {
        let t = v.current;
        e < t ? L(!0) : e > t && M(!0)
    }, []), X = (0, l.useCallback)(() => {
        L(!1), M(!1)
    }, []), $ = (0, l.useCallback)((e, t, n) => (0, a.jsx)(y, {
        item: e,
        itemIndex: t,
        isCurrentItem: n,
        onSetItem: e => {
            u?.(C.Jq.CAROUSEL_ITEM), B(e)
        },
        setHasInteracted: U
    }), [B, u]), z = (0, l.useCallback)((e, n, l) => {
        let s = n === (0, b.U3)(g, t.length);
        return (0, a.jsx)(c.A.div, {
            className: o()(T.AS, {
                [T.Xt]: s
            }),
            style: null != l ? F(n, l) : null,
            onMouseEnter: s ? null : () => q(n),
            onMouseLeave: s ? null : X,
            children: "video" === e.type ? (0, a.jsx)(S, {
                item: e,
                onPlay: V,
                onEnded: Y,
                playable: s,
                isMuted: d,
                onClick: () => {
                    u?.(C.Jq.CAROUSEL_ITEM), B(n)
                }
            }, m) : $(e, n, s)
        })
    }, [g, t.length, F, q, X, V, Y, B, $, d, u, m]), J = (0, l.useCallback)(() => {
        let e = (0, a.jsx)(b.Ay, {
            className: T.Dk,
            items: t,
            itemSize: {
                width: I,
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
                    [T.h_]: w
                })
            }), (0, a.jsx)(p.Oj, {
                onClick: G,
                className: o()(T.UE, {
                    [T.h_]: D
                })
            })]
        })
    }, [t, z, g, k, W, G, w, D]), K = (0, l.useCallback)((e, t) => {
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
    (0, l.useEffect)(() => (A._.subscribe(x.jej.CAROUSEL_PREV, W), A._.subscribe(x.jej.CAROUSEL_NEXT, G), () => {
        A._.unsubscribe(x.jej.CAROUSEL_PREV, W), A._.unsubscribe(x.jej.CAROUSEL_NEXT, G)
    }), [W, G]), (0, l.useEffect)(() => {
        N.current = t.length
    }, [t]), (0, l.useEffect)(() => {
        i?.(t[g], g)
    }, [g, t, i]);
    let Q = (0, l.useCallback)(e => {
        u?.(C.Jq.CAROUSEL_ITEM), B(e)
    }, [B, u]);
    return (0, a.jsxs)(h.A, {
        pauseOnHover: !0,
        onInterval: H,
        interval: r,
        className: n,
        disable: R || P || s,
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