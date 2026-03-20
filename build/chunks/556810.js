/** chunk id: 556810 params = (module,exports,require) **/
a.d(t, {
    l: () => r
});
var l = a(627968);
a(64700);
var n = a(954644);
let r = {
    name: "ShopProductCard",
    id: "shopProduct-card",
    component: e => {
        let {
            skuId: t
        } = e;
        return (0, l.jsx)("div", {
            children: (0, l.jsx)(n.A, {
                skuId: t
            })
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