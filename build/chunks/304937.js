/** chunk id: 304937, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(158954),
    s = n(212555),
    o = n(428855),
    c = n(880652),
    d = n(106181),
    u = n(206314);

function m(e) {
    let {
        question: t,
        questionId: n,
        responses: l,
        onResponseChange: m
    } = e, _ = (() => {
        switch (t.QuestionType) {
            case c.SQ.TEXT_ENTRY:
                return (0, i.jsx)(o.A, {
                    question: t,
                    questionId: n,
                    value: l[n] ?? "",
                    onValueChange: m
                });
            case c.SQ.MULTIPLE_CHOICE:
                return (0, i.jsx)(s.A, {
                    question: t,
                    questionId: n,
                    value: l[n] ?? "",
                    onValueChange: m
                });
            case c.SQ.DESCRIPTIVE_BLOCK:
                return (0, i.jsx)("div", {});
            default:
                return null
        }
    })();
    return null == _ ? null : (0, i.jsxs)("div", {
        className: a()(u.PT, d.k),
        children: [(0, i.jsx)(r.EYj, {
            variant: "text-lg/normal",
            color: "text-strong",
            children: (0, i.jsx)("div", {
                dangerouslySetInnerHTML: {
                    __html: t.QuestionText_Unsafe ?? ""
                }
            })
        }), _]
    })
}