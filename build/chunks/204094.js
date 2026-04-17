/** chunk id: 204094 params = (module,exports,require) **/
l.d(t, {
    r: () => o
});
var a = l(627968);
l(64700);
var r = l(397927),
    n = l(206845),
    s = l(453854),
    i = l(985018);
let o = {
    name: "SkuPreview",
    id: "skupreview",
    component: e => {
        let {
            skuId: t
        } = e;
        return (0, a.jsxs)("div", {
            children: [(0, a.jsx)(s.A, {
                skuId: t
            }), (0, a.jsx)("hr", {}), (0, a.jsx)(r.Text, {
                variant: "text-md/bold",
                children: "Sample Skus:"
            }), (0, a.jsxs)(r.BJc, {
                direction: "horizontal",
                children: [(0, a.jsx)(r.Text, {
                    variant: "text-sm/bold",
                    children: "Avatar Decoration"
                }), (0, a.jsx)(n.A, {
                    text: i.intl.string(i.t.OpuAlK),
                    delay: 0,
                    "aria-label": !1,
                    copyValue: "1458472704192811088",
                    children: e => (0, a.jsx)(r.DUT, {
                        ...e,
                        style: {
                            cursor: "pointer"
                        },
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: "1458472704192811088"
                        })
                    })
                })]
            }), (0, a.jsxs)(r.BJc, {
                direction: "horizontal",
                children: [(0, a.jsx)(r.Text, {
                    variant: "text-sm/bold",
                    children: "Profile Effect"
                }), (0, a.jsx)(n.A, {
                    text: i.intl.string(i.t.OpuAlK),
                    delay: 0,
                    "aria-label": !1,
                    copyValue: "1458479739110166560",
                    children: e => (0, a.jsx)(r.DUT, {
                        ...e,
                        style: {
                            cursor: "pointer"
                        },
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: "1458479739110166560"
                        })
                    })
                })]
            }), (0, a.jsxs)(r.BJc, {
                direction: "horizontal",
                children: [(0, a.jsx)(r.Text, {
                    variant: "text-sm/bold",
                    children: "Nameplate"
                }), (0, a.jsx)(n.A, {
                    text: i.intl.string(i.t.OpuAlK),
                    delay: 0,
                    "aria-label": !1,
                    copyValue: "1458472704524156959",
                    children: e => (0, a.jsx)(r.DUT, {
                        ...e,
                        style: {
                            cursor: "pointer"
                        },
                        children: (0, a.jsx)(r.Text, {
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