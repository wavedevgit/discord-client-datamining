/** chunk id: 52416 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var a = n(877624),
    l = n(342494),
    r = n(732955),
    s = n(975571),
    o = n(549996),
    d = n(498470),
    c = n(807098),
    u = n(49999),
    A = n(985018);

function h(e) {
    let {
        children: t,
        targetElementRef: n,
        dismissPopover: h
    } = e, _ = (0, o.c)(a.C.PREMIUM_TAB_POPOVER), m = null != _ && "premiumTabPopover" === _.properties.properties.oneofKind ? _.properties.properties.premiumTabPopover : null, g = (0, c.T)(m?.asset);
    if (null == m) return t;
    let p = m.button?.copy != null ? [{
        text: m.button.copy,
        variant: "expressive",
        onClick: (0, d.h)({
            buttonAction: m.button.buttonAction,
            onClose: () => h(u.i.USER_DISMISS)
        }),
        icon: r.tvc
    }] : void 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            children: t
        }), (0, i.jsx)(l.AM, {
            targetElementRef: n,
            title: m.header,
            body: m.body,
            textLink: "" !== m.helpArticleId ? {
                text: A.intl.string(A.t["sBp+u0"]),
                link: s.A.getArticleURL(m.helpArticleId)
            } : void 0,
            graphic: null != g ? {
                type: "image",
                src: g
            } : void 0,
            size: "md",
            align: "top",
            alignmentStrategy: "edge",
            position: "right",
            caretConfig: {
                align: "start"
            },
            actions: p,
            onRequestClose: () => h(u.i.USER_DISMISS),
            gradientColor: "nitro-pink"
        })]
    })
}