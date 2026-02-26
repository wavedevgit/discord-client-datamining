/** chunk id: 709772, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    a: () => i
});
var r = l(627968);
l(64700);
var a = l(342393),
    n = l(71532),
    s = l(714126);
let i = e => {
    let {
        errorLabel: t,
        children: l,
        elementOptions: i
    } = e, o = Date.now();
    return (0, r.jsx)(s.W, {
        label: t,
        children: (0, r.jsx)(a.Elements, {
            stripe: (0, n.Cv)(),
            options: {
                mode: "setup",
                currency: "usd",
                setup_future_usage: "off_session",
                ...i
            },
            children: l
        })
    }, o)
}