/** chunk id: 343991 params = (module,exports,require) **/
n.d(t, {
    D: () => s,
    default: () => l
});
var a = n(627968);
n(64700);
var i = n(158954);
let s = "UPLOAD_ERROR_MODAL_KEY",
    l = e => {
        let {
            title: t,
            help: n,
            transitionState: s,
            onClose: l
        } = e;
        return (0, a.jsx)(i.Modal, {
            title: t,
            subtitle: n,
            transitionState: s,
            actions: [{
                variant: "critical-secondary",
                text: "Close",
                onClick: l
            }],
            onClose: l
        })
    }