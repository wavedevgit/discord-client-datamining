/** chunk id: 180185, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(934551),
    l = n(158954),
    s = n(827734),
    a = n(49999),
    o = n(985018),
    d = n(538409);

function u(e) {
    let {
        notificationConfig: t,
        markAsDismissed: n
    } = e;
    return (0, r.jsxs)("div", {
        className: d.kL,
        children: [(0, r.jsx)("div", {
            className: d.VN,
            children: (0, r.jsx)(l.K0, {
                variant: "icon-only",
                size: "md",
                "aria-label": o.intl.string(o.t.cpT0Cq),
                onClick: () => {
                    n(a.i.USER_DISMISS)
                },
                icon: i.XLargeIcon
            })
        }), (0, r.jsx)(i.CircleErrorIcon, {
            color: s.A.colors.TEXT_FEEDBACK_WARNING,
            className: d.Kk
        }), (0, r.jsx)(l.EYj, {
            variant: "text-md/semibold",
            color: "text-feedback-warning",
            children: t.title
        }), (0, r.jsx)(l.EYj, {
            variant: "text-sm/medium",
            children: t.description
        })]
    })
}