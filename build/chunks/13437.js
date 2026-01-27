/** Chunk was on 86142 **/
/** chunk id: 13437, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(110259),
    s = n(397927),
    l = n(139286),
    a = n(854378),
    o = n(970573),
    c = n(985018),
    d = n(777409);

function u(e) {
    let {
        onDismiss: t
    } = e;
    return (0, l.A)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
    }), (0, r.jsxs)(a.Ay, {
        className: d.ci,
        children: [(0, r.jsx)(a.hE, {
            children: c.intl.string(c.t.bVbB63)
        }), (0, r.jsx)(s.Text, {
            className: d.PK,
            variant: "text-md/normal",
            color: "text-default",
            children: c.intl.string(c.t["0M5fN7"])
        }), (0, r.jsx)(o.A, {
            actionText: c.intl.string(c.t["DSN+hw"]),
            onAction: e => {
                e === o.X.LOGIN_REQUIRED && t()
            }
        }), (0, r.jsx)("div", {
            className: d.o1,
            children: (0, r.jsx)(s.QWc, {
                variant: "secondary",
                size: "md",
                textVariant: "text-sm/medium",
                text: c.intl.string(c.t["9g2mqT"]),
                onClick: t
            })
        })]
    })
}