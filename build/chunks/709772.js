/** chunk id: 709772 params = (module,exports,require) **/
a.d(t, {
    a: () => s
});
var l = a(627968);
a(64700);
var r = a(342393),
    n = a(71532),
    o = a(714126);
let s = e => {
    let {
        errorLabel: t,
        children: a,
        elementOptions: s
    } = e, d = Date.now();
    return (0, l.jsx)(o.W, {
        label: t,
        children: (0, l.jsx)(r.Elements, {
            stripe: (0, n.Cv)(),
            options: {
                mode: "setup",
                currency: "usd",
                setup_future_usage: "off_session",
                ...s
            },
            children: a
        })
    }, d)
}