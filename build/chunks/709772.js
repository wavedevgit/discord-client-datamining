/** chunk id: 709772 params = (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => l
});
var r = n(627968);
n(64700);
var a = n(342393),
    s = n(71532),
    i = n(714126);
let l = e => {
    let {
        errorLabel: t,
        children: n,
        elementOptions: l
    } = e, o = Date.now();
    return (0, r.jsx)(i.W, {
        label: t,
        children: (0, r.jsx)(a.Elements, {
            stripe: (0, s.Cv)(),
            options: {
                mode: "setup",
                currency: "usd",
                setup_future_usage: "off_session",
                ...l
            },
            children: n
        })
    }, o)
}