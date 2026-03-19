/** chunk id: 278274 params = (module,exports,require) **/
n.d(t, {
    q: () => s
});
var a = n(627968);
n(64700);
var i = n(397927),
    l = n(959224);

function s(e) {
    let {
        isUploading: t,
        isSuccess: n,
        errorMessage: s,
        onClick: r,
        title: o
    } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: r,
            loading: t,
            disabled: t,
            text: t ? "Uploading…" : o
        }), null != s && (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            className: l.qS,
            children: s
        }), n && (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-positive",
            className: l.qS,
            children: "Logs uploaded successfully"
        })]
    })
}