/** Chunk was on 16864 **/
/** chunk id: 810669, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    e: () => m
}), r(747238), r(896048);
var n = r(627968),
    a = r(64700),
    s = r(397927),
    i = r(414121),
    l = r(203736),
    o = r(652215),
    c = r(985018),
    d = r(120509);
let u = r(196390),
    p = r(906118),
    f = "".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1]).concat(o.BVt.ACTIVATE),
    h = "".concat(location.protocol, "//").concat(f);

function x(e) {
    let {
        text: t = ""
    } = e, [r, l] = a.useState(!1);
    return a.useEffect(() => {
        let e = new Image;
        e.src = p, e.onload = () => l(!0), e.onerror = () => l(!0)
    }, [p]), "" !== t && r ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.Ay, {
            size: 288,
            text: t
        }), (0, n.jsx)("div", {
            className: d.xi,
            children: (0, n.jsx)("img", {
                src: p,
                alt: ""
            })
        })]
    }) : (0, n.jsx)("div", {
        className: d.Yp,
        children: (0, n.jsx)(s.y$y, {
            type: s.y$y.Type.WANDERING_CUBES
        })
    })
}
let m = e => {
    var t;
    let {
        code: r
    } = e, {
        width: a,
        height: i
    } = (0, l.A)();
    return null == r || 0 === r.length ? null : (0, n.jsxs)("div", {
        className: d.nd,
        style: {
            zoom: Math.min(a / 1460, i / 1080, 1)
        },
        children: [(0, n.jsx)("div", {
            className: d.Iv,
            children: (0, n.jsx)("div", {
                className: d.wm
            })
        }), (0, n.jsxs)("div", {
            className: d.SV,
            children: [(0, n.jsxs)("div", {
                className: d._c,
                children: [(0, n.jsx)("div", {
                    className: d.fn,
                    children: (0, n.jsx)(x, {
                        text: "".concat(h, "?user_code=").concat(encodeURIComponent(r))
                    })
                }), (0, n.jsxs)("div", {
                    className: d.E7,
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        className: d.MM,
                        children: c.intl.string(c.t.llDCid)
                    }), (0, n.jsx)(s.Heading, {
                        variant: "heading-xxl/normal",
                        color: "text-default",
                        children: c.intl.string(c.t.JfHzXG)
                    })]
                })]
            }), (0, n.jsxs)("div", {
                className: d.$G,
                children: [(0, n.jsx)("div", {
                    className: d.yF
                }), (0, n.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: d.Bw,
                    children: c.intl.string(c.t.arEHn4)
                }), (0, n.jsx)("div", {
                    className: d.yF
                })]
            }), (0, n.jsxs)("div", {
                className: d.Y7,
                children: [(0, n.jsxs)("div", {
                    className: d.WX,
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        className: d.GP,
                        children: c.intl.string(c.t["Eu8rJ/"])
                    }), (0, n.jsx)(s.Heading, {
                        variant: "heading-xxl/normal",
                        color: "text-default",
                        children: c.intl.string(c.t.BkEMJ1)
                    })]
                }), (0, n.jsxs)("div", {
                    className: d.u5,
                    children: [(0, n.jsx)(s.Heading, {
                        variant: "heading-xxl/semibold",
                        color: "text-strong",
                        className: d.GP,
                        children: f
                    }), (0, n.jsxs)("div", {
                        className: d.WX,
                        children: [(0, n.jsx)(s.Heading, {
                            variant: "heading-xxl/normal",
                            color: "text-default",
                            children: c.intl.string(c.t.RyDxBX)
                        }), (0, n.jsx)(s.Heading, {
                            variant: "heading-xxl/bold",
                            color: "text-strong",
                            className: d.H$,
                            children: null == (t = r.match(/.{1,4}/g)) ? void 0 : t.join(" ")
                        })]
                    })]
                })]
            }), (0, n.jsx)("img", {
                className: d.kX,
                src: u,
                alt: ""
            })]
        })]
    })
}