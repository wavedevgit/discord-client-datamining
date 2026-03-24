/** chunk id: 629721 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(934551),
    s = n(158954),
    l = n(827734),
    o = n(371028),
    a = n(37725);

function u(e) {
    let {
        guildId: t,
        powerupNames: n,
        warnings: u
    } = e, {
        shouldShow: d,
        title: c,
        description: p
    } = (0, o.A)(t, n);
    return d ? (0, r.jsxs)("div", {
        className: a.kL,
        children: [(0, r.jsx)(i.CircleErrorIcon, {
            color: l.A.colors.TEXT_FEEDBACK_WARNING,
            className: a.Kk
        }), (0, r.jsx)(s.EYj, {
            variant: "text-md/semibold",
            color: "text-feedback-warning",
            children: c
        }), (0, r.jsxs)(s.EYj, {
            variant: "text-sm/medium",
            children: [p, u?.map((e, t) => (0, r.jsx)(s.EYj, {
                variant: "text-sm/medium",
                color: "text-feedback-warning",
                className: a.$e,
                children: e
            }, `warning-${t}`))]
        })]
    }) : null
}