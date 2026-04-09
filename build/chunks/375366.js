/** chunk id: 375366 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(397927),
    o = n(25911),
    c = n(985018),
    d = n(37859);

function u(e) {
    let {
        className: t
    } = e;
    return (0, i.jsxs)("svg", {
        className: t,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        children: [(0, i.jsx)("g", {
            filter: "url(#a)",
            children: (0, i.jsx)("path", {
                d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                fill: "currentColor"
            })
        }), (0, i.jsx)("defs", {
            children: (0, i.jsxs)("filter", {
                id: "a",
                x: "0",
                y: "0",
                width: "48",
                height: "48",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [(0, i.jsx)("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix"
                }), (0, i.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), (0, i.jsx)("feOffset", {
                    dy: "8"
                }), (0, i.jsx)("feGaussianBlur", {
                    stdDeviation: "8"
                }), (0, i.jsx)("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                }), (0, i.jsx)("feBlend", {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_605_72103"
                }), (0, i.jsx)("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_605_72103",
                    result: "shape"
                })]
            })
        })]
    })
}
let h = [{
        x: .5,
        y: .05
    }, {
        x: .95,
        y: .2
    }, {
        x: 1,
        y: .5
    }, {
        x: .95,
        y: .8
    }, {
        x: .5,
        y: .95
    }, {
        x: .05,
        y: .8
    }, {
        x: 0,
        y: .5
    }, {
        x: .05,
        y: .2
    }],
    m = h.length;

function A(e, t, n) {
    let i = e * t;
    return e > .5 ? i - n : e < .5 ? i : i - n / 2
}
let g = l.memo(function(e) {
    let {
        wheelWidth: t,
        wheelHeight: n,
        itemWidth: g,
        itemHeight: p,
        showDeadZoneIndicator: _,
        activeItem: f,
        onItemSelect: E,
        onItemAction: x,
        interactive: C = !0,
        onClose: S,
        children: I
    } = e, T = l.useRef(null), N = l.useRef([]), v = l.useRef(!1), y = l.useRef(null), [b, j] = l.useState(0), [R, M] = l.useState({
        x: 0,
        y: 0
    }), D = Math.abs(R.x) + Math.abs(R.y) > 0, O = l.useMemo(() => a().chunk(I, m), [I]), L = l.useCallback((e, t) => {
        null == N.current[b] ? N.current[b] = [] : N.current[b][t] = e
    }, [b]), P = l.useCallback((e, t) => {
        y.current = t, E(m * e + t)
    }, [E]), k = l.useCallback(() => {
        y.current = null, E(null)
    }, [E]), w = l.useCallback(e => {
        k(), v.current = e
    }, [k]), U = l.useCallback((e, t, n) => {
        let i, l, s;
        if (v.current) return void M({
            x: 0,
            y: 0
        });
        let a = {
                x: e.x - t.x,
                y: e.y - t.y
            },
            r = a.x < 0,
            o = a.y < 0,
            c = (i = Math.abs(a.x), l = 180 / Math.PI * Math.atan2(Math.abs(a.y), i), {
                x: Math.max((s = n / 2 - 28.8) * Math.cos(2 * Math.PI * l / 360), 0),
                y: Math.max(s * Math.sin(2 * Math.PI * l / 360), 0)
            });
        M({
            x: (r ? Math.max(a.x, -c.x) : Math.min(a.x, c.x)) / 2,
            y: (o ? Math.max(a.y, -c.y) : Math.min(a.y, c.y)) / 2
        })
    }, []), G = l.useCallback(e => {
        null != y.current && (e.preventDefault(), e.stopPropagation(), x?.(m * b + y.current))
    }, [x, b]), F = l.useMemo(() => (0, s.throttle)(e => {
        if (null == T.current) return;
        let i = T.current.getBoundingClientRect(),
            l = {
                x: i.left + i.width / 2,
                y: i.top + i.height / 2
            },
            s = {
                x: e.clientX,
                y: e.clientY
            };
        if (U(s, l, Math.max(t, n)), v.current) {
            null != f && k();
            return
        }
        let a = (0, o.wf)(l, s, Math.max(t, n));
        for (let e = 0; e < N.current[b].length; e++) {
            let t = N.current[b][e];
            if (null == t) continue;
            let n = t.getBoundingClientRect();
            if ((0, o.lw)(l, a, n)) return void P(b, e)
        }
        k()
    }, 16), [f, U, k, P, b, n, t]), B = l.useCallback(e => {
        if (!C) return;
        let t = b + (e.deltaY > 0 ? 1 : -1);
        t >= 0 && t < O.length && (null != y.current && (O[t].length > y.current ? P(t, y.current) : k()), j(t))
    }, [C, b, O, P, k]), H = l.useMemo(() => O[b].map((e, l) => {
        let s = h[l];
        if (null == s) throw Error(`Too many items supplied ${I.length} expected max of ${h.length}`);
        let a = A(s.x, t, g),
            r = A(s.y, n, p);
        return (0, i.jsx)("div", {
            ref: e => L(e, l),
            className: d.Tj,
            style: {
                left: a,
                top: r,
                width: g,
                height: p
            },
            children: e
        }, l)
    }), [O, b, t, g, n, p, I.length, L]);
    return (0, i.jsx)(r.DUT, {
        className: d.Pw,
        onMouseMove: F,
        onWheel: B,
        onClick: G,
        children: (0, i.jsxs)("div", {
            ref: T,
            className: d._$,
            style: {
                width: t,
                height: n
            },
            children: [(0, i.jsxs)("svg", {
                className: d.cA,
                viewBox: "0 0 288 288",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsxs)("filter", {
                    id: "soundboard-wheel-background-shadow",
                    x: "0",
                    y: "0",
                    width: "288",
                    height: "288",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [(0, i.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix"
                    }), (0, i.jsx)("feColorMatrix", {
                        in: "SourceAlpha",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha"
                    }), (0, i.jsx)("feOffset", {
                        dy: "8"
                    }), (0, i.jsx)("feGaussianBlur", {
                        stdDeviation: "8"
                    }), (0, i.jsx)("feColorMatrix", {
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                    }), (0, i.jsx)("feBlend", {
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_489_60382"
                    }), (0, i.jsx)("feBlend", {
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_489_60382",
                        result: "shape"
                    })]
                }), (0, i.jsxs)("g", {
                    filter: "url(#soundboard-wheel-background-shadow)",
                    children: [(0, i.jsx)("circle", {
                        className: d.cA,
                        cx: "144",
                        cy: "144",
                        r: "103.68",
                        strokeWidth: "40.32"
                    }), _ && (0, i.jsx)("circle", {
                        className: d.u1,
                        onMouseEnter: () => w(!0),
                        onMouseLeave: () => w(!1),
                        cx: 144,
                        cy: 144,
                        r: 28.8
                    }), D && (0, i.jsx)("circle", {
                        className: d.JV,
                        cx: 144 + R.x,
                        cy: 144 + R.y,
                        r: 28.8
                    })]
                }), _ && (0, i.jsx)("circle", {
                    className: d.u1,
                    onMouseEnter: () => w(!0),
                    onMouseLeave: () => w(!1),
                    cx: 144,
                    cy: 144,
                    r: 28.8,
                    stroke: "none"
                })]
            }), (0, i.jsxs)("div", {
                className: d.gx,
                children: [_ && (0, i.jsx)(r.DUT, {
                    className: d.$2,
                    onClick: S,
                    children: (0, i.jsx)(u, {
                        className: d.$2
                    })
                }), C && O.length > 1 ? (0, i.jsx)("div", {
                    className: d.YB,
                    children: c.intl.string(c.t["Xy+S02"])
                }) : null]
            }), H]
        })
    })
})