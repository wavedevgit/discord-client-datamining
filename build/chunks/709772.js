/** chunk id: 709772 params = (module,exports,require) **/
"use strict";
r.d(t, {
    a: () => l
});
var n = r(627968);
r(64700);
var a = r(342393),
    s = r(71532),
    i = r(714126);
let l = e => {
    let {
        errorLabel: t,
        children: r,
        elementOptions: l
    } = e, o = Date.now();
    return (0, n.jsx)(i.W, {
        label: t,
        children: (0, n.jsx)(a.Elements, {
            stripe: (0, s.Cv)(),
            options: {
                mode: "setup",
                currency: "usd",
                setup_future_usage: "off_session",
                ...l
            },
            children: r
        })
    }, o)
}