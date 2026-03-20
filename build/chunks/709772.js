/** chunk id: 709772 params = (module,exports,require) **/
n.d(t, {
    a: () => i
});
var r = n(627968);
n(64700);
var a = n(342393),
    o = n(71532),
    _ = n(714126);
let i = e => {
    let {
        errorLabel: t,
        children: n,
        elementOptions: i
    } = e, d = Date.now();
    return (0, r.jsx)(_.W, {
        label: t,
        children: (0, r.jsx)(a.Elements, {
            stripe: (0, o.Cv)(),
            options: {
                mode: "setup",
                currency: "usd",
                setup_future_usage: "off_session",
                ...i
            },
            children: n
        })
    }, d)
}