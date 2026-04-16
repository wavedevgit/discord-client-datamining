/** chunk id: 359378 params = (module,exports,require) **/
s.d(t, {
    A: () => d
});
var i = s(627968);
s(64700);
var l = s(503698),
    n = s.n(l),
    a = s(837381),
    r = s(397927),
    u = s(680507);

function d(e) {
    let {
        listItemId: t,
        icon: s,
        label: l,
        subLabel: d,
        selected: o,
        disabled: c,
        onPress: m,
        "aria-setsize": h,
        "aria-posinset": f,
        className: b
    } = e, x = (0, a.rm)(t);
    return (0, i.jsx)(r.vN3, {
        offset: {
            right: 4
        },
        children: (0, i.jsxs)(r.DUT, {
            className: n()(u.HP, b, {
                [u.r9]: c
            }),
            onClick: c ? void 0 : m,
            "aria-selected": o,
            "aria-disabled": c,
            "aria-setsize": h,
            "aria-posinset": f,
            ...x,
            children: [(0, i.jsxs)("div", {
                className: u.D_,
                children: [(0, i.jsx)("div", {
                    className: u.P0,
                    children: s
                }), (0, i.jsxs)("div", {
                    className: u.WD,
                    children: [(0, i.jsx)(r.Text, {
                        tag: "strong",
                        color: c ? "text-muted" : void 0,
                        variant: "text-md/semibold",
                        lineClamp: 1,
                        children: l
                    }), null != d ? (0, i.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: d
                    }) : null]
                })]
            }), (0, i.jsx)("div", {
                className: u.kv,
                children: (0, i.jsx)(r.P7L, {
                    checked: !!o,
                    disabled: c
                })
            })]
        })
    })
}