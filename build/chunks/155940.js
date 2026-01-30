/** chunk id: 155940, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(397927),
    c = n(775602),
    u = n(169909),
    d = n(457806);

function f(e) {
    let {
        look: t = u.r0.LARGE_BANNER
    } = e, n = (0, s.bG)([c.A], () => c.A.useReducedMotion), {
        styleLarge: a,
        styleSmall: f
    } = i.useMemo(() => ({
        styleLarge: {
            width: "".concat(10 + 50 * Math.random(), "%")
        },
        styleSmall: {
            width: "".concat(30 + 60 * Math.random(), "%")
        }
    }), []);
    return (0, r.jsxs)("div", {
        className: o()(d.kL, d.NX, {
            [d.cb]: n,
            [d.uS]: t !== u.r0.ROW,
            [d.qd]: t === u.r0.ROW
        }),
        children: [(0, r.jsx)("div", {
            className: o()(d._e, {
                [d.i2]: t === u.r0.MEDIUM_BANNER,
                [d.ir]: t === u.r0.LARGE_BANNER
            })
        }), (0, r.jsxs)("div", {
            className: o()(d.TD, {
                [d.Ne]: t === u.r0.ROW
            }),
            children: [(0, r.jsx)("div", {
                className: o()(d.Pz, {
                    [d.Lu]: t === u.r0.ROW
                })
            }), (0, r.jsxs)("div", {
                className: d.FS,
                children: [(0, r.jsx)("div", {
                    className: d.jC,
                    style: a,
                    children: (0, r.jsx)(l.Heading, {
                        className: d.R,
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: "_"
                    })
                }), (0, r.jsx)("div", {
                    className: d.jC,
                    style: f,
                    children: (0, r.jsx)(l.Text, {
                        className: d.R,
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        children: "_"
                    })
                })]
            }), t === u.r0.ROW && (0, r.jsx)("div", {
                className: d.ek
            })]
        })]
    })
}