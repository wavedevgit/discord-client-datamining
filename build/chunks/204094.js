/** chunk id: 204094, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    r: () => o
});
var r = l(627968);
l(64700);
var a = l(397927),
    n = l(206845),
    i = l(453854),
    s = l(985018);
let o = {
    name: "SkuPreview",
    id: "skupreview",
    component: e => {
        let {
            skuId: t
        } = e;
        return (0, r.jsxs)("div", {
            children: [(0, r.jsx)(i.A, {
                skuId: t
            }), (0, r.jsx)("hr", {}), (0, r.jsx)(a.Text, {
                variant: "text-md/bold",
                children: "Sample Skus:"
            }), (0, r.jsxs)(a.BJc, {
                direction: "horizontal",
                children: [(0, r.jsx)(a.Text, {
                    variant: "text-sm/bold",
                    children: "Avatar Decoration"
                }), (0, r.jsx)(n.A, {
                    text: s.intl.string(s.t.OpuAlK),
                    delay: 0,
                    "aria-label": !1,
                    copyValue: "1458472704192811088",
                    children: e => (0, r.jsx)(a.DUT, {
                        ...e,
                        style: {
                            cursor: "pointer"
                        },
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: "1458472704192811088"
                        })
                    })
                })]
            }), (0, r.jsxs)(a.BJc, {
                direction: "horizontal",
                children: [(0, r.jsx)(a.Text, {
                    variant: "text-sm/bold",
                    children: "Profile Effect"
                }), (0, r.jsx)(n.A, {
                    text: s.intl.string(s.t.OpuAlK),
                    delay: 0,
                    "aria-label": !1,
                    copyValue: "1458479739110166560",
                    children: e => (0, r.jsx)(a.DUT, {
                        ...e,
                        style: {
                            cursor: "pointer"
                        },
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: "1458479739110166560"
                        })
                    })
                })]
            }), (0, r.jsxs)(a.BJc, {
                direction: "horizontal",
                children: [(0, r.jsx)(a.Text, {
                    variant: "text-sm/bold",
                    children: "Nameplate"
                }), (0, r.jsx)(n.A, {
                    text: s.intl.string(s.t.OpuAlK),
                    delay: 0,
                    "aria-label": !1,
                    copyValue: "1458472704524156959",
                    children: e => (0, r.jsx)(a.DUT, {
                        ...e,
                        style: {
                            cursor: "pointer"
                        },
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: "1458472704524156959"
                        })
                    })
                })]
            })]
        })
    },
    controls: {
        skuId: {
            label: "SKU Id",
            type: "text",
            defaultValue: "1458472704192811088"
        }
    }
}