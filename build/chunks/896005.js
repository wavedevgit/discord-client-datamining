/** chunk id: 896005 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(641324),
    d = n(702421);

function c(e) {
    let {
        title: t,
        subtitle: n,
        isHiddenVisually: s
    } = e;
    return null == t || "" === t ? null : s ? (0, i.jsx)(r.AC4, {
        tag: "legend",
        children: t
    }) : (0, i.jsx)(r.Text, {
        tag: "legend",
        variant: "text-md/semibold",
        color: "text-strong",
        className: a()(d.DD, {
            [d.h0]: null != n && "" !== n
        }),
        children: t
    })
}
let u = s.memo(function(e) {
    let {
        node: t
    } = e, {
        useTitle: n,
        useSubtitle: l,
        layout: a,
        variant: u = "default",
        isTitleHiddenVisually: m
    } = t, _ = n(), g = l?.(), A = s.useId(), x = null != _ && "" !== _, p = null != g && "" !== g, h = function(e) {
        switch (e) {
            case "default":
                return "md";
            case "compact":
                return "xs"
        }
    }(u);
    return (0, i.jsxs)("fieldset", {
        "aria-describedby": p ? A : void 0,
        children: [(0, i.jsx)(c, {
            title: _,
            subtitle: g,
            isHiddenVisually: m
        }), p ? (0, i.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            id: A,
            className: d.VA,
            children: g
        }) : null, (0, i.jsx)(r.BJc, {
            gap: h,
            padding: {
                top: x && !m ? 16 : 0
            },
            children: a.map(e => (0, i.jsx)(o.A, {
                node: e
            }, e.key))
        })]
    })
})