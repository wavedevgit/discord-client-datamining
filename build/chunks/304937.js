/** Chunk was on 64935 **/
/** chunk id: 304937, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(158954),
    s = n(212555),
    o = n(428855),
    c = n(880652),
    u = n(106181),
    d = n(206314);

function p(e) {
    var t;
    let {
        question: n,
        questionId: i,
        responses: p,
        onResponseChange: m
    } = e, f = (() => {
        var e, t;
        switch (n.QuestionType) {
            case c.SQ.TEXT_ENTRY:
                return (0, r.jsx)(o.A, {
                    question: n,
                    questionId: i,
                    value: null != (e = p[i]) ? e : "",
                    onValueChange: m
                });
            case c.SQ.MULTIPLE_CHOICE:
                return (0, r.jsx)(s.A, {
                    question: n,
                    questionId: i,
                    value: null != (t = p[i]) ? t : "",
                    onValueChange: m
                });
            case c.SQ.DESCRIPTIVE_BLOCK:
                return (0, r.jsx)("div", {});
            default:
                return null
        }
    })();
    return null == f ? null : (0, r.jsxs)("div", {
        className: l()(d.PT, u.k),
        children: [(0, r.jsx)(a.EYj, {
            variant: "text-lg/normal",
            color: "text-strong",
            children: (0, r.jsx)("div", {
                dangerouslySetInnerHTML: {
                    __html: null != (t = n.QuestionText_Unsafe) ? t : ""
                }
            })
        }), f]
    })
}