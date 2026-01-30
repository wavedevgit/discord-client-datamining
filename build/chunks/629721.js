/** chunk id: 629721, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(228524);
var r = n(627968);
n(64700);
var l = n(934551),
    i = n(158954),
    o = n(827734),
    s = n(371028),
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
    } = (0, s.A)(t, n);
    return d ? (0, r.jsxs)("div", {
        className: a.kL,
        children: [(0, r.jsx)(l.CircleErrorIcon, {
            color: o.A.colors.TEXT_FEEDBACK_WARNING,
            className: a.Kk
        }), (0, r.jsx)(i.EYj, {
            variant: "text-md/semibold",
            color: "text-feedback-warning",
            children: c
        }), (0, r.jsxs)(i.EYj, {
            variant: "text-sm/medium",
            children: [p, null == u ? void 0 : u.map((e, t) => (0, r.jsx)(i.EYj, {
                variant: "text-sm/medium",
                color: "text-feedback-warning",
                className: a.$e,
                children: e
            }, "warning-".concat(t)))]
        })]
    }) : null
}