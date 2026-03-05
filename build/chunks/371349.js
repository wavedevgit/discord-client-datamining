/** chunk id: 371349 params = (module,exports,require) **/
r.d(t, {
    A: () => i
});
var n = r(627968),
    s = r(397927),
    l = r(704456),
    a = r(357195);

function i(e) {
    let {
        reminder: t,
        throttledNow: r
    } = e, {
        dueInText: i,
        isOverdue: o
    } = (0, l.Ce)({
        dueAt: t?.saveData.dueAt,
        now: r,
        type: l.kh.SHORT
    });
    if (null == t.saveData.dueAt) return null;
    let c = o ? "text-feedback-critical" : "text-default";
    return (0, n.jsxs)("div", {
        className: a.k,
        children: [(0, n.jsx)("div", {
            className: a.K,
            children: (0, n.jsx)(s.O4, {
                size: "xxs",
                color: "text-feedback-critical" === c ? s.LU0.colors.TEXT_FEEDBACK_CRITICAL : s.LU0.colors.INTERACTIVE_TEXT_ACTIVE
            })
        }), (0, n.jsx)(s.Heading, {
            variant: "text-md/semibold",
            color: c,
            children: i
        })]
    })
}