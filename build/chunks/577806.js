/** Chunk was on 5606 **/
/** chunk id: 577806, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => a
});
var r = n(627968),
    i = n(158954),
    l = n(397927),
    s = n(50900);

function a(e) {
    let {
        title: t,
        titleTrailingIcon: n,
        subtitle: a,
        type: o = "primary"
    } = e;
    return "secondary" === o ? (0, r.jsxs)(i.BJc, {
        gap: 8,
        padding: {
            left: 12,
            right: 12
        },
        direction: "horizontal",
        align: "center",
        children: [(0, r.jsx)(i.DZT, {
            variant: "heading-md/semibold",
            color: "text-subtle",
            children: t
        }), null != n ? (0, r.jsx)(n, {
            color: l.LU0.colors.INTERACTIVE_ICON_DEFAULT,
            size: "md"
        }) : null]
    }) : (0, r.jsxs)(i.BJc, {
        gap: 8,
        padding: {
            left: 12,
            right: 12,
            bottom: 24
        },
        children: [(0, r.jsxs)("div", {
            className: s.q,
            children: [(0, r.jsx)(i.DZT, {
                variant: "heading-xl/normal",
                color: "text-strong",
                children: t
            }), null != n ? (0, r.jsx)(n, {
                color: l.LU0.colors.INTERACTIVE_ICON_DEFAULT,
                size: "md"
            }) : null]
        }), null != a && (0, r.jsx)(i.EYj, {
            variant: "text-md/normal",
            color: "text-subtle",
            children: a
        })]
    })
}