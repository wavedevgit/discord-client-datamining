/** chunk id: 709772, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    a: () => s
});
var n = a(627968);
a(64700);
var r = a(342393),
    i = a(71532),
    o = a(714126);
let s = e => {
    let {
        errorLabel: t,
        children: a,
        elementOptions: s
    } = e, l = Date.now();
    return (0, n.jsx)(o.W, {
        label: t,
        children: (0, n.jsx)(r.Elements, {
            stripe: (0, i.Cv)(),
            options: {
                mode: "setup",
                currency: "usd",
                setup_future_usage: "off_session",
                ...s
            },
            children: a
        })
    }, l)
}