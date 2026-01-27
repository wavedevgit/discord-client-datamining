/** Chunk was on 52199 **/
/** chunk id: 371349, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => i
});
var n = r(627968),
    l = r(397927),
    s = r(704456),
    a = r(252645);

function i(e) {
    let {
        reminder: t,
        throttledNow: r
    } = e, {
        dueInText: i,
        isOverdue: o
    } = (0, s.Ce)({
        dueAt: null == t ? void 0 : t.saveData.dueAt,
        now: r,
        type: s.kh.SHORT
    });
    if (null == t.saveData.dueAt) return null;
    let c = o ? "text-feedback-critical" : "text-default";
    return (0, n.jsxs)("div", {
        className: a.k,
        children: [(0, n.jsx)("div", {
            className: a.K,
            children: (0, n.jsx)(l.O4, {
                size: "xxs",
                color: "text-feedback-critical" === c ? l.LU0.colors.TEXT_FEEDBACK_CRITICAL : l.LU0.colors.INTERACTIVE_TEXT_ACTIVE
            })
        }), (0, n.jsx)(l.Heading, {
            variant: "text-md/semibold",
            color: c,
            children: i
        })]
    })
}