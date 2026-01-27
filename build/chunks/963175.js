/** Chunk was on 39048 **/
/** chunk id: 963175, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
}), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(915089),
    c = n(147925),
    d = n(710144),
    u = n(985018),
    g = n(238803);

function m(e) {
    let {
        intiallyExpanded: t = !1,
        title: n,
        description: l,
        children: m
    } = e, [p, f] = i.useState(t), h = () => f(e => !e), b = (0, o.GV)();
    return (0, r.jsxs)("div", {
        className: g.kL,
        children: [(0, r.jsx)(d.A, {
            className: s()(g.wx, {
                [g.OD]: p && null != l
            }),
            onClick: h,
            children: e => {
                let {
                    areaRef: t,
                    handleStopPropagation: i
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        children: n
                    }), (0, r.jsx)(a.DUT, {
                        onClick: i(h),
                        "aria-label": u.intl.string(u.t.e5eQOy),
                        "aria-controls": b,
                        "aria-expanded": p,
                        focusProps: {
                            ringTarget: t
                        },
                        children: (0, r.jsx)(c.A, {
                            className: g.OW,
                            direction: p ? c.A.Directions.UP : c.A.Directions.DOWN
                        })
                    })]
                })
            }
        }), p && (0, r.jsxs)("div", {
            id: b,
            children: [null != l && (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                className: g.h_,
                children: l
            }), (0, r.jsx)("div", {
                className: g.yF
            }), (0, r.jsx)("div", {
                className: g.Qs,
                children: m
            })]
        })]
    })
}