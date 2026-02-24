/** chunk id: 608226, original params: t,n,e (module,exports,require) **/
e.d(n, {
    O: () => l
});
var i = e(627968);
e(64700);
var a = e(397927);

function l(t, n) {
    return (0, a.mMO)(async () => {
        let {
            default: a
        } = await e.e("33372").then(e.bind(e, 58935));
        return e => (0, i.jsx)(a, {
            ...e,
            onConfirm: () => {
                e.onClose(), n()
            },
            channel: t
        })
    })
}