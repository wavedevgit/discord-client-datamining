/** chunk id: 87533 params = (module,exports,require) **/
n.d(e, {
    A: () => d
});
var l = n(627968);
n(64700);
var i = n(397927),
    s = n(333672),
    a = n(652215),
    r = n(985018),
    o = n(788937);
let c = {
    type: "rive",
    rive: i.DSM,
    aspectRatio: "16/9"
};

function d(t) {
    let {
        transitionState: e,
        guild: n,
        slotCount: d,
        canceledCount: u,
        isModifyingSubscription: m,
        error: x,
        expressiveCta: h,
        onConfirm: g,
        onClose: p
    } = t, f = [{
        variant: h ? "expressive" : "primary",
        text: r.intl.formatToPlainString(r.t.ZU5x5w, {
            slotCount: d
        }),
        onClick: g,
        loading: m,
        disabled: m
    }];
    return (0, l.jsxs)(i.kpP, {
        transitionState: e,
        onClose: p,
        graphic: c,
        title: r.intl.string(r.t["7KP/fI"]),
        actions: f,
        children: [(0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            children: r.intl.string(r.t.yTlZV0)
        }), (0, l.jsx)(s.Ay, {
            className: o.g,
            guild: n,
            subscriptionChange: d
        }), (0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            className: o.$,
            children: r.intl.formatToPlainString(r.t.KPnDlu, {
                days: a.FI6,
                slotCount: d
            })
        }), u > 0 ? (0, l.jsx)(s.ti, {
            canceledCount: u
        }) : null, null != x && (0, l.jsx)(i.Text, {
            color: "text-feedback-critical",
            variant: "text-sm/semibold",
            children: x.message
        })]
    })
}