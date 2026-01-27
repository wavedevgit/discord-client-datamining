/** Chunk was on web.js **/
/** chunk id: 771887, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $: () => c,
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(732955),
    a = n(397927),
    o = n(235986),
    s = n(985018),
    l = n(678863);
let c = e => {
        let {
            className: t,
            isEmailResent: n,
            resendEmail: i
        } = e;
        return (0, r.jsx)("div", {
            className: t,
            children: (0, r.jsxs)("div", {
                className: l.a,
                children: [(0, r.jsx)(a.Heading, {
                    variant: "heading-xl/bold",
                    children: s.intl.string(s.t.Q03WWV)
                }), (0, r.jsxs)("p", {
                    children: [(0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: s.intl.string(s.t.BxPxhI)
                    }), (0, r.jsx)("br", {}), (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: s.intl.string(s.t.Y3fdOp)
                    }), (0, r.jsx)("br", {}), (0, r.jsxs)(a.Text, {
                        variant: "text-md/normal",
                        children: [s.intl.string(s.t.Paa4v4), "\xa0", n ? s.intl.string(s.t.StGVvC) : (0, r.jsx)(a.MzZ, {
                            onClick: i,
                            children: s.intl.string(s.t.Ex7sk9)
                        })]
                    })]
                })]
            })
        })
    },
    u = () => (0, r.jsx)("div", {
        children: (0, r.jsx)(a.jlY, {
            justify: o.A.Justify.BETWEEN,
            align: o.A.Align.CENTER,
            "data-migration-pending": !0,
            children: (0, r.jsx)(i.$nd, {
                "data-testid": "continue",
                variant: "primary",
                disabled: !0,
                text: s.intl.string(s.t.g8vPzy)
            })
        })
    })