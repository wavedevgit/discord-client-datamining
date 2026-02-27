/** chunk id: 953590, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S,
    B: () => v
});
var l = n(627968),
    a = n(64700),
    r = n(310784),
    s = n.n(r),
    i = n(503698),
    o = n.n(i),
    c = n(615300),
    d = n(397927),
    u = n(456412),
    _ = n(654107),
    m = n(871751),
    h = n(133296),
    b = n(848752),
    p = n(452282),
    g = n(619517),
    f = n(652176),
    x = n(203982),
    C = n(995393),
    A = n(652215),
    I = n(863876);
let v = 747,
    j = e => (0, f.$o)({
        ...e,
        className: I.tN,
        mediaPlayerClassName: I.yf
    }),
    k = e => (0, l.jsx)(g.Ay, {
        ...e
    });

function N(e) {
    let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [n, l] = (0, _.rh)(t, "#000000"),
        r = a.useMemo(() => {
            let e = s()(n).darken(1);
            return `radial-gradient(circle, ${e.alpha(.2).hex()} 0%, transparent 100%)`
        }, [n]);
    return null != t && "#000000" !== n ? r : void 0
}

function E(e) {
    let {
        item: t,
        onPlay: n,
        onEnded: a,
        onClick: r,
        playable: s,
        isMuted: i
    } = e, o = N(t), c = (0, l.jsx)(m.rr, {
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
        onEnded: a,
        playable: s,
        className: I.Ki,
        volume: 1,
        autoMute: i,
        autoPlay: s,
        renderVideoComponent: j,
        renderImageComponent: k,
        renderLinkComponent: f.bU
    }, i ? "player-muted" : "player-unmuted"), u = {
        background: o
    };
    return s ? (0, l.jsx)("div", {
        className: I.AU,
        style: u,
        children: c
    }) : (0, l.jsx)(d.DUT, {
        className: I.AU,
        onClick: r,
        style: u,
        children: c
    })
}

function y(e) {
    let {
        item: t,
        setHasInteracted: n,
        onSetItem: a,
        isCurrentItem: r,
        itemIndex: s
    } = e, i = {
        background: N(t)
    };
    return r ? (0, l.jsx)(d.DUT, {
        onClick: () => n(!0),
        className: I.AU,
        style: i,
        children: (0, l.jsx)("img", {
            src: t.src,
            alt: "",
            className: I.NP
        })
    }) : (0, l.jsx)(d.DUT, {
        onClick: () => a(s),
        className: I.AU,
        style: i,
        children: (0, l.jsx)("img", {
            alt: "",
            className: I.tv,
            src: t.src,
            draggable: !1
        })
    })
}
let S = (0, u.A)(e => {
    let {
        items: t,
        className: n,
        paused: r = !1,
        autoplayInterval: s = 8e3,
        onItemChange: i,
        isMuted: d = !0,
        onTrackClick: u
    } = e, _ = (0, a.useRef)(0), [m, g] = (0, a.useState)(0), [f, j] = (0, a.useState)(0), k = (0, a.useRef)(0), N = (0, a.useRef)(t.length), [S, T] = (0, a.useState)(!0), [P, R] = (0, a.useState)(!1), [w, U] = (0, a.useState)(!1), [L, O] = (0, a.useState)(!1), [D, B] = (0, a.useState)(!1), M = (0, a.useCallback)((e, n) => {
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
    }, [t]), F = (0, a.useCallback)(function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        R(!1), U(t);
        let n = N.current,
            l = (0, p.U3)(k.current, n),
            a = (0, p.U3)(e, n);
        k.current = a, j(a), _.current++, g(_.current), T(1 === Math.abs(a - l) || a === n - 1 && 0 === l || 0 === a && l === n - 1)
    }, []), G = (0, a.useCallback)(() => {
        F(k.current + 1, !1)
    }, [F]), H = (0, a.useCallback)(() => {
        u?.(C.Jq.CAROUSEL_NEXT), F(k.current + 1)
    }, [F, u]), Y = (0, a.useCallback)(() => {
        u?.(C.Jq.CAROUSEL_PREV), F(k.current - 1)
    }, [F, u]), V = (0, a.useCallback)(e => {
        R(!0), U(!e)
    }, []), q = (0, a.useCallback)(() => {
        w || G()
    }, [w, G]), X = (0, a.useCallback)(e => {
        let t = k.current;
        e < t ? O(!0) : e > t && B(!0)
    }, []), W = (0, a.useCallback)(() => {
        O(!1), B(!1)
    }, []), $ = (0, a.useCallback)((e, t, n) => (0, l.jsx)(y, {
        item: e,
        itemIndex: t,
        isCurrentItem: n,
        onSetItem: e => {
            u?.(C.Jq.CAROUSEL_ITEM), F(e)
        },
        setHasInteracted: U
    }), [F, u]), z = (0, a.useCallback)((e, n, a) => {
        let r = n === (0, p.U3)(f, t.length);
        return (0, l.jsx)(c.A.div, {
            className: o()(I.AS, {
                [I.Xt]: r
            }),
            style: null != a ? M(n, a) : null,
            onMouseEnter: r ? null : () => X(n),
            onMouseLeave: r ? null : W,
            children: "video" === e.type ? (0, l.jsx)(E, {
                item: e,
                onPlay: V,
                onEnded: q,
                playable: r,
                isMuted: d,
                onClick: () => {
                    u?.(C.Jq.CAROUSEL_ITEM), F(n)
                }
            }, m) : $(e, n, r)
        })
    }, [f, t.length, M, X, W, V, q, F, $, d, u, m]), J = (0, a.useCallback)(() => {
        let e = (0, l.jsx)(p.Ay, {
            className: I.Dk,
            items: t,
            itemSize: {
                width: v,
                margin: 0
            },
            renderItem: z,
            currentIndex: f,
            animate: S,
            edgeItems: 2
        });
        return t.length <= 1 ? e : (0, l.jsxs)("div", {
            className: I.HY,
            children: [e, (0, l.jsx)(b.Q8, {
                onClick: Y,
                className: o()(I.UE, {
                    [I.h_]: L
                })
            }), (0, l.jsx)(b.Oj, {
                onClick: H,
                className: o()(I.UE, {
                    [I.h_]: D
                })
            })]
        })
    }, [t, z, f, S, Y, H, L, D]), Q = (0, a.useCallback)((e, t) => {
        let n = f === t;
        return (0, l.jsx)("div", {
            className: o()(I.Yw, n ? I.sM : I.N7),
            children: (0, l.jsx)("img", {
                alt: "",
                className: I.Pr,
                src: null != e.thumbnailSrc ? e.thumbnailSrc : "image" === e.type ? e.src : "video" === e.type ? e.videoThumbnailSrc : void 0,
                draggable: !1
            })
        }, `page-${t}`)
    }, [f]);
    (0, a.useEffect)(() => (x._.subscribe(A.jej.CAROUSEL_PREV, Y), x._.subscribe(A.jej.CAROUSEL_NEXT, H), () => {
        x._.unsubscribe(A.jej.CAROUSEL_PREV, Y), x._.unsubscribe(A.jej.CAROUSEL_NEXT, H)
    }), [Y, H]), (0, a.useEffect)(() => {
        N.current = t.length
    }, [t]), (0, a.useEffect)(() => {
        i?.(t[f], f)
    }, [f, t, i]);
    let K = (0, a.useCallback)(e => {
        u?.(C.Jq.CAROUSEL_ITEM), F(e)
    }, [F, u]);
    return (0, l.jsxs)(h.A, {
        pauseOnHover: !0,
        onInterval: G,
        interval: s,
        className: n,
        disable: P || w || r,
        children: [J(), (0, l.jsx)("div", {
            className: I.X$,
            children: (0, l.jsx)(b.Ay, {
                renderItem: Q,
                scrollToPadding: 40,
                items: t,
                selectedIndex: f,
                onSetItem: K,
                paginationContainerClass: I.XG,
                align: b.Ay.Align.CENTER
            })
        })]
    })
})