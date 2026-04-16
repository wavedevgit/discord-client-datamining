/** chunk id: 423090 params = (module,exports,require) **/
l.d(e, {
    M: () => o,
    v: () => c
});
var n = l(627968);
l(64700);
var s = l(855522),
    r = l(158954),
    a = l(827734),
    i = l(323517);

function o(t) {
    let {
        type: e
    } = t;
    return (0, n.jsx)(c, {
        icon: "user" === e ? (0, n.jsx)(r.nys, {
            size: "xxs",
            color: a.A.colors.INTERACTIVE_TEXT_DEFAULT
        }) : (0, n.jsx)(r.RR9, {
            size: "xxs",
            color: a.A.colors.INTERACTIVE_TEXT_DEFAULT
        }),
        text: "user" === e ? s.A.Messages.STOREFRONT_USER_SUBSCRIPTION : s.A.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    })
}

function c(t) {
    let {
        icon: e,
        text: l
    } = t;
    return (0, n.jsxs)("div", {
        className: i.k,
        children: [e, (0, n.jsx)(r.EYj, {
            color: "text-strong",
            variant: "text-sm/medium",
            children: l
        })]
    })
}