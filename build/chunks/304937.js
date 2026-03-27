/** chunk id: 304937 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    r = n(158954),
    s = n(212555),
    o = n(428855),
    c = n(880652),
    d = n(373847),
    u = n(830684);

function _(e) {
    let {
        question: t,
        questionId: n,
        responses: a,
        onResponseChange: _
    } = e, m = (() => {
        switch (t.QuestionType) {
            case c.SQ.TEXT_ENTRY:
                return (0, i.jsx)(o.A, {
                    question: t,
                    questionId: n,
                    value: a[n] ?? "",
                    onValueChange: _
                });
            case c.SQ.MULTIPLE_CHOICE:
                return (0, i.jsx)(s.A, {
                    question: t,
                    questionId: n,
                    value: a[n] ?? "",
                    onValueChange: _
                });
            case c.SQ.DESCRIPTIVE_BLOCK:
                return (0, i.jsx)("div", {});
            default:
                return null
        }
    })();
    return null == m ? null : (0, i.jsxs)("div", {
        className: l()(u.PT, d.k),
        children: [(0, i.jsx)(r.EYj, {
            variant: "text-lg/normal",
            color: "text-strong",
            children: (0, i.jsx)("div", {
                dangerouslySetInnerHTML: {
                    __html: t.QuestionText_Unsafe ?? ""
                }
            })
        }), m]
    })
}