/** chunk id: 608226, original params: t,n,e (module,exports,require) **/
e.d(n, {
    O: () => r
});
var i = e(627968);
e(64700);
var l = e(397927);

function r(t, n) {
    return (0, l.mMO)(async () => {
        let {
            default: l
        } = await e.e("33372").then(e.bind(e, 58935));
        return e => (0, i.jsx)(l, {
            ...e,
            onConfirm: () => {
                e.onClose(), n()
            },
            channel: t
        })
    })
}