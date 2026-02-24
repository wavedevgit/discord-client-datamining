/** chunk id: 317940, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(158954),
    r = n(732955),
    l = n(397927),
    a = n(854378),
    o = n(350368);

function d(e) {
    let {
        title: t,
        subtitle: n,
        buttonText: d,
        image: c,
        onButtonClick: u,
        loading: h
    } = e;
    return (0, i.jsx)(a.Ay, {
        className: o.kL,
        children: (0, i.jsxs)(s.BJc, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [(0, i.jsxs)(s.BJc, {
                gap: 8,
                align: "center",
                children: [(0, i.jsxs)(s.BJc, {
                    gap: 24,
                    align: "center",
                    children: [null != c && (0, i.jsx)(s.BJc, {
                        align: "center",
                        justify: "center",
                        className: o.Sl,
                        children: c
                    }), h && (0, i.jsx)(l.y$y, {
                        type: l.y$y.Type.SPINNING_CIRCLE
                    }), (0, i.jsx)(s.DZT, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: t
                    })]
                }), null != n && "" !== n && (0, i.jsx)(s.EYj, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: o.VA,
                    children: n
                })]
            }), !h && (0, i.jsx)(r.$nd, {
                onClick: u,
                text: d,
                variant: "overlay-primary"
            })]
        })
    })
}