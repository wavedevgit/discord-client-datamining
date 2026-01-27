/** Chunk was on 70104 **/
/** chunk id: 423090, original params: t,e,r (module,exports,require) **/
r.d(e, {
    M: () => o,
    v: () => c
});
var n = r(627968);
r(64700);
var l = r(855522),
    s = r(158954),
    i = r(827734),
    a = r(477540);

function o(t) {
    let {
        type: e
    } = t;
    return (0, n.jsx)(c, {
        icon: "user" === e ? (0, n.jsx)(s.nys, {
            size: "xxs",
            color: i.A.colors.INTERACTIVE_TEXT_DEFAULT
        }) : (0, n.jsx)(s.RR9, {
            size: "xxs",
            color: i.A.colors.INTERACTIVE_TEXT_DEFAULT
        }),
        text: "user" === e ? l.A.Messages.STOREFRONT_USER_SUBSCRIPTION : l.A.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    })
}

function c(t) {
    let {
        icon: e,
        text: r
    } = t;
    return (0, n.jsxs)("div", {
        className: a.k,
        children: [e, (0, n.jsx)(s.EYj, {
            color: "text-strong",
            variant: "text-sm/medium",
            children: r
        })]
    })
}