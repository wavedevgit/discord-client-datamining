/** Chunk was on 87557 **/
/** chunk id: 343991, original params: e,t,n (module,exports,require) **/
n.d(t, {
    D: () => r,
    default: () => i
});
var a = n(627968);
n(64700);
var l = n(158954);
let r = "UPLOAD_ERROR_MODAL_KEY",
    i = e => {
        let {
            title: t,
            help: n,
            transitionState: r,
            onClose: i
        } = e;
        return (0, a.jsx)(l.Modal, {
            title: t,
            subtitle: n,
            transitionState: r,
            actions: [{
                variant: "critical-secondary",
                text: "Close",
                onClick: i
            }],
            onClose: i
        })
    }