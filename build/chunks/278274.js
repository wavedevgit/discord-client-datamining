/** Chunk was on 36054 **/
/** chunk id: 278274, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => i
});
var a = n(627968);
n(64700);
var l = n(397927),
    r = n(520657);

function i(e) {
    let {
        isUploading: t,
        isSuccess: n,
        errorMessage: i,
        onClick: s,
        title: o
    } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(l.Button, {
            variant: "primary",
            onClick: s,
            loading: t,
            disabled: t,
            text: t ? "Uploading…" : o
        }), null != i && (0, a.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            className: r.qS,
            children: i
        }), n && (0, a.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-positive",
            className: r.qS,
            children: "Logs uploaded successfully"
        })]
    })
}