/** chunk id: 423090 params = (module,exports,require) **/
l.d(e, {
    M: () => o,
    v: () => c
});
var s = l(627968);
l(64700);
var r = l(855522),
    n = l(158954),
    i = l(827734),
    a = l(255402);

function o(t) {
    let {
        type: e
    } = t;
    return (0, s.jsx)(c, {
        icon: "user" === e ? (0, s.jsx)(n.nys, {
            size: "xxs",
            color: i.A.colors.INTERACTIVE_TEXT_DEFAULT
        }) : (0, s.jsx)(n.RR9, {
            size: "xxs",
            color: i.A.colors.INTERACTIVE_TEXT_DEFAULT
        }),
        text: "user" === e ? r.A.Messages.STOREFRONT_USER_SUBSCRIPTION : r.A.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    })
}

function c(t) {
    let {
        icon: e,
        text: l
    } = t;
    return (0, s.jsxs)("div", {
        className: a.k,
        children: [e, (0, s.jsx)(n.EYj, {
            color: "text-strong",
            variant: "text-sm/medium",
            children: l
        })]
    })
}