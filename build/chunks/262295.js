/** chunk id: 262295, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(948651);
let l = i.forwardRef((e, t) => {
    let {
        muted: n = !1,
        highlighted: i = !1,
        avatar: a,
        decorators: l,
        rightDecorators: c,
        name: u,
        subText: d,
        avatarClassName: f,
        innerClassName: p,
        nameClassName: _,
        subtextClassName: h,
        withDisplayNameStyles: m = !1
    } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: o()(s.Zp, p, {
            [s.SU]: n,
            [s.mr]: i,
            [s.Ij]: null != c
        }),
        children: [(0, r.jsx)("div", {
            className: o()(s.my, f),
            children: a
        }), (0, r.jsxs)("div", {
            className: o()(s.Qs, {
                [s.e8]: m
            }),
            children: [(0, r.jsxs)("div", {
                className: s.BG,
                children: [(0, r.jsxs)("div", {
                    className: s.R1,
                    children: [(0, r.jsx)("div", {
                        className: o()(s.UU, _),
                        children: u
                    }), l]
                }), c]
            }), null != d ? (0, r.jsx)("div", {
                className: o()(s.Sv, h),
                children: d
            }) : null]
        })]
    })
});
l.displayName = "AvatarWithText";
let c = l