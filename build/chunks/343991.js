/** chunk id: 343991 params = (module,exports,require) **/
n.d(t, {
    D: () => l,
    default: () => s
});
var a = n(627968);
n(64700);
var i = n(158954);
let l = "UPLOAD_ERROR_MODAL_KEY",
    s = e => {
        let {
            title: t,
            help: n,
            transitionState: l,
            onClose: s
        } = e;
        return (0, a.jsx)(i.Modal, {
            title: t,
            subtitle: n,
            transitionState: l,
            actions: [{
                variant: "critical-secondary",
                text: "Close",
                onClick: s
            }],
            onClose: s
        })
    }