/** chunk id: 13437, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(110259),
    r = n(397927),
    l = n(139286),
    a = n(854378),
    o = n(970573),
    d = n(985018),
    c = n(286931);

function u(e) {
    let {
        onDismiss: t
    } = e;
    return (0, l.A)({
        type: s.ImpressionTypes.MODAL,
        name: s.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
    }), (0, i.jsxs)(a.Ay, {
        className: c.ci,
        children: [(0, i.jsx)(a.hE, {
            children: d.intl.string(d.t.bVbB63)
        }), (0, i.jsx)(r.Text, {
            className: c.PK,
            variant: "text-md/normal",
            color: "text-default",
            children: d.intl.string(d.t["0M5fN7"])
        }), (0, i.jsx)(o.A, {
            actionText: d.intl.string(d.t["DSN+hw"]),
            onAction: e => {
                e === o.X.LOGIN_REQUIRED && t()
            }
        }), (0, i.jsx)("div", {
            className: c.o1,
            children: (0, i.jsx)(r.QWc, {
                variant: "secondary",
                size: "md",
                textVariant: "text-sm/medium",
                text: d.intl.string(d.t["9g2mqT"]),
                onClick: t
            })
        })]
    })
}