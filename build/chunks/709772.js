/** chunk id: 709772 params = (module,exports,require) **/
a.d(t, {
    a: () => c
});
var r = a(627968);
a(64700);
var n = a(342393),
    o = a(71532),
    i = a(714126);
let c = e => {
    let {
        errorLabel: t,
        children: a,
        elementOptions: c
    } = e, _ = Date.now();
    return (0, r.jsx)(i.W, {
        label: t,
        children: (0, r.jsx)(n.Elements, {
            stripe: (0, o.Cv)(),
            options: {
                mode: "setup",
                currency: "usd",
                setup_future_usage: "off_session",
                ...c
            },
            children: a
        })
    }, _)
}