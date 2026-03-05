/** chunk id: 102817 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(627968);
n(64700);
var l = n(990078),
    s = n(397927);

function a(e) {
    let {
        text: t,
        icon: n,
        onClick: a,
        disabled: r,
        submitting: o
    } = e;
    return (0, i.jsx)(l.m, {
        __unsupportedReactNodeAsText: t ?? void 0,
        children: (0, i.jsx)(s.K0, {
            icon: n,
            variant: "secondary",
            onClick: a,
            disabled: r,
            loading: o,
            "aria-label": t,
            size: "sm"
        })
    })
}