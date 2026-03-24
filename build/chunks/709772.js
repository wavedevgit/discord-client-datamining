/** chunk id: 709772 params = (module,exports,require) **/
a.d(t, {
    a: () => i
});
var l = a(627968);
a(64700);
var n = a(342393),
    r = a(71532),
    s = a(714126);
let i = e => {
    let {
        errorLabel: t,
        children: a,
        elementOptions: i
    } = e, d = Date.now();
    return (0, l.jsx)(s.W, {
        label: t,
        children: (0, l.jsx)(n.Elements, {
            stripe: (0, r.Cv)(),
            options: {
                mode: "setup",
                currency: "usd",
                setup_future_usage: "off_session",
                ...i
            },
            children: a
        })
    }, d)
}