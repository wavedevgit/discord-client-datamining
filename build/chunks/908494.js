/** chunk id: 908494, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(827734),
    a = n(421380),
    o = n(397927),
    c = n(235986),
    u = n(302284);
let d = e => {
    let {
        className: t,
        icon: n,
        noticeText: i,
        buttonText: d,
        onClick: h,
        canSync: g
    } = e;
    return (0, l.jsx)(o.ZpM, {
        className: r()(t, u.N),
        children: (0, l.jsxs)(c.A, {
            justify: c.A.Justify.BETWEEN,
            align: c.A.Align.CENTER,
            children: [(0, l.jsx)(n, {
                width: 20,
                height: 20,
                size: "custom",
                color: s.A.unsafe_rawColors.YELLOW_300.css
            }), (0, l.jsx)("div", {
                className: u.P,
                children: (0, l.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: i
                })
            }), g && (0, l.jsx)(a.$n, {
                size: a.$n.Sizes.SMALL,
                color: a.$n.Colors.PRIMARY,
                onClick: h,
                children: d
            })]
        })
    })
}