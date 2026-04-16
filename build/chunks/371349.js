/** chunk id: 371349 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(627968),
    l = n(397927),
    s = n(704456),
    a = n(953424);

function r(e) {
    let {
        reminder: t,
        throttledNow: n
    } = e, {
        dueInText: r,
        isOverdue: o
    } = (0, s.Ce)({
        dueAt: t?.saveData.dueAt,
        now: n,
        type: s.kh.SHORT
    });
    if (null == t.saveData.dueAt) return null;
    let d = o ? "text-feedback-critical" : "text-default";
    return (0, i.jsxs)("div", {
        className: a.k,
        children: [(0, i.jsx)("div", {
            className: a.K,
            children: (0, i.jsx)(l.O4, {
                size: "xxs",
                color: "text-feedback-critical" === d ? l.LU0.colors.TEXT_FEEDBACK_CRITICAL : l.LU0.colors.INTERACTIVE_TEXT_ACTIVE
            })
        }), (0, i.jsx)(l.Heading, {
            variant: "text-md/semibold",
            color: d,
            children: r
        })]
    })
}