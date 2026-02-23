/** chunk id: 278274, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => l
});
var a = n(627968);
n(64700);
var i = n(397927),
    s = n(520657);

function l(e) {
    let {
        isUploading: t,
        isSuccess: n,
        errorMessage: l,
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
        }), null != l && (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            className: s.qS,
            children: l
        }), n && (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-positive",
            className: s.qS,
            children: "Logs uploaded successfully"
        })]
    })
}