/** chunk id: 709772 params = (module,exports,require) **/
"use strict";
r.d(t, {
    a: () => s
});
var n = r(627968);
r(64700);
var i = r(342393),
    a = r(71532),
    o = r(714126);
let s = e => {
    let {
        errorLabel: t,
        children: r,
        elementOptions: s
    } = e, l = Date.now();
    return (0, n.jsx)(o.W, {
        label: t,
        children: (0, n.jsx)(i.Elements, {
            stripe: (0, a.Cv)(),
            options: {
                mode: "setup",
                currency: "usd",
                setup_future_usage: "off_session",
                ...s
            },
            children: r
        })
    }, l)
}