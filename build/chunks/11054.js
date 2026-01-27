/** Chunk was on web.js **/
/** chunk id: 11054, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    M: () => b
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    o = n.n(a),
    s = n(732955),
    l = n(397927),
    c = n(688810),
    u = n(937008),
    d = n(156312),
    f = n(482132),
    p = n(921925),
    _ = n(592362),
    h = n(510022),
    m = n(317560),
    g = n(366523),
    E = n(985018),
    y = n(552696);

function b(e) {
    var t;
    let {
        handleClose: n
    } = e, {
        analyticsLocations: a
    } = (0, c.Ay)(), {
        skusById: b,
        selectedSkuId: O,
        application: v
    } = (0, d.P5)(), {
        isGift: A,
        giftRecipient: I
    } = (0, u.Pv)();
    o()(null != O, "Expected selectedSkuId"), o()(null != v, "Expected application");
    let S = b[O];
    return (o()(null != S, "Expected sku"), i.useEffect(() => {
        A || ((0, m.j)(), n(), (0, h.n)({
            sku: S,
            application: v,
            analyticsLocations: a
        }))
    }, [A, S, v, n, a]), A) ? (0, r.jsxs)(f.dZ, {
        children: [(0, r.jsx)(_.A, {}), (0, r.jsx)(p.A, {}), (0, r.jsxs)("div", {
            className: y.EL,
            children: [(0, r.jsx)(g.e, {
                sku: S,
                shape: "square",
                containerClassName: y.LC
            }), (0, r.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                className: y.RS,
                children: E.intl.string(E.t["5glWta"])
            }), (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                className: y.Kz,
                children: E.intl.formatToPlainString(E.t["2VjPTw"], {
                    itemName: S.name,
                    giftRecipient: null != (t = null == I ? void 0 : I.username) ? t : "your recipient"
                })
            }), (0, r.jsx)(s.$nd, {
                onClick: n,
                text: E.intl.string(E.t.cpT0Cq),
                fullWidth: !0
            })]
        })]
    }) : null
}