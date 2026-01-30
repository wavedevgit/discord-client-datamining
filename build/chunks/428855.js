/** chunk id: 428855, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(880652),
    a = n(474071);

function s(e) {
    let {
        question: t,
        questionId: n,
        value: s,
        onValueChange: o
    } = e, c = t.Selector !== l.BO.SINGLE_LINE;
    return (0, r.jsx)("div", {
        className: a.k,
        children: c ? (0, r.jsx)(i.fs1, {
            value: s,
            onChange: e => o(n, e),
            placeholder: "Enter your response...",
            rows: 4
        }) : (0, r.jsx)(i.ksK, {
            value: s,
            onChange: e => o(n, e),
            placeholder: "Enter your response..."
        })
    })
}