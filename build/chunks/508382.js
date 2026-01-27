/** Chunk was on web.js **/
/** chunk id: 508382, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $Y: () => v,
    IP: () => y,
    Ow: () => b,
    Pv: () => O
}), n(321073), n(747238);
var r = n(627968),
    i = n(64700),
    a = n(879821),
    o = n(862019),
    s = n(193439),
    l = n(503698),
    c = n.n(l),
    u = n(426333),
    d = n(337836),
    f = n(11212);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            p(e, t, n[t])
        })
    }
    return e
}

function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function m(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let g = 8,
    E = 100,
    y = "data-popover-layer";

function b(e) {
    var t;
    let n, {
            ownerDocument: l = document,
            open: p,
            onOpenChange: h,
            id: b,
            className: O,
            reference: v,
            overrideTargetRect: A,
            placement: I = "bottom",
            spacing: S = 8,
            autoFlip: T = !0,
            crossAccessFlip: C = !0,
            autoShift: N = !0,
            strategy: w = "fixed",
            portal: R = !0,
            blockPointerEvents: P = !1,
            children: D,
            renderLayer: L,
            viewportPadding: x = g,
            maxHeight: M,
            trigger: j = "click",
            hoverDelay: k = E
        } = e,
        U = i.useRef(null),
        G = i.useMemo(() => {
            let e = [(0, a.cY)(S)];
            return T && e.push((0, a.UU)({
                crossAxis: C,
                padding: x,
                boundary: l.body
            })), N && e.push((0, a.BN)({
                padding: x,
                limiter: (0, a.ER)(),
                boundary: l.body
            })), e.push((0, a.jD)({
                strategy: "referenceHidden"
            })), null != M && e.push((0, a.Ej)({
                padding: x,
                boundary: l.body,
                apply(e) {
                    let {
                        availableHeight: t,
                        elements: n
                    } = e, r = Math.min(M, t);
                    n.floating.style.setProperty("--custom-floating-layer-max-height", "".concat(r, "px"))
                }
            })), e
        }, [S, T, N, x, C, l, M]);
    null != A ? n = {
        reference: {
            getBoundingClientRect: () => A
        }
    } : null != v && (n = {
        reference: v
    });
    let {
        refs: F,
        floatingStyles: V,
        placement: B,
        middlewareData: H,
        update: Y,
        context: W
    } = (0, o.we)({
        placement: I,
        open: p,
        onOpenChange: h,
        strategy: w,
        middleware: G,
        whileElementsMounted: s.ll,
        elements: n
    }), K = (0, o.s9)(W), z = (0, o.Mk)(W, {
        restMs: k,
        delay: {
            open: k,
            close: 0
        },
        enabled: "hover" === j,
        handleClose: (0, o.iB)({
            blockPointerEvents: !0
        })
    }), {
        getReferenceProps: q,
        getFloatingProps: Z
    } = (0, o.bv)([K, z]), Q = (null == (t = H.hide) ? void 0 : t.referenceHidden) ? "hidden" : "visible", X = R ? d.sM : i.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [D({
            ref: F.setReference,
            props: q()
        }), p && (0, r.jsxs)(X, {
            ownerDocument: l,
            children: [P ? (0, r.jsx)(o.zR, {}) : null, (0, r.jsx)("div", m(_({
                id: b,
                className: c()(O, f.q),
                [y]: !0,
                style: m(_({}, V), {
                    visibility: Q
                }),
                ref: F.setFloating
            }, Z()), {
                children: (0, r.jsx)(u.xp, {
                    containerRef: U,
                    children: L({
                        placement: B,
                        update: Y,
                        hidden: "hidden" === Q,
                        shift: H.shift
                    })
                })
            }))]
        })]
    })
}

function O(e, t) {
    switch (e) {
        case "center":
        case "window_center":
        default:
            return "top";
        case "top":
        case "bottom":
            if ("left" === t) return "".concat(e, "-start");
            if ("right" === t) return "".concat(e, "-end");
            return e;
        case "left":
        case "right":
            if ("top" === t) return "".concat(e, "-start");
            if ("bottom" === t) return "".concat(e, "-end");
            return e
    }
}

function v(e) {
    let t = e.split("-")[0];
    switch (t) {
        case "top":
        case "bottom":
        case "left":
        case "right":
            return t;
        default:
            return "top"
    }
}