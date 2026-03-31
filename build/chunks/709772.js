/** chunk id: 709772 params = (module,exports,require) **/
a.d(t, {
    a: () => i
});
var _ = a(627968);
a(64700);
var n = a(342393),
    o = a(71532),
    r = a(714126);
let i = e => {
    let {
        errorLabel: t,
        children: a,
        elementOptions: i
    } = e, s = Date.now();
    return (0, _.jsx)(r.W, {
        label: t,
        children: (0, _.jsx)(n.Elements, {
            stripe: (0, o.Cv)(),
            options: {
                mode: "setup",
                currency: "usd",
                setup_future_usage: "off_session",
                ...i
            },
            children: a
        })
    }, s)
}