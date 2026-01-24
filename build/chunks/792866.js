/** Chunk was on 11487 **/
/** chunk id: 792866, original params: t,a,i (module,exports,require) **/
i.d(a, {
    default: () => e
});
var n = i(627968);
i(64700);
var s = i(158954);

function e(t) {
    let {
        transitionState: a,
        header: i,
        body: e,
        confirmText: r,
        onClose: l,
        onConfirm: o
    } = t;
    return (0, n.jsx)(s.Modal, {
        title: i,
        subtitle: e,
        transitionState: a,
        onClose: l,
        actions: [{
            text: r,
            onClick: () => {
                l(), null == o || o()
            },
            variant: "primary"
        }]
    })
}