/** chunk id: 293588 params = (module,exports,require) **/
n.d(t, {
    C: () => l,
    m: () => a
});
var i = n(627968);
n(64700);
var r = n(397927);
let l = "command-share-modal";

function a(e) {
    let {
        applicationId: t,
        channel: a,
        command: s,
        previewMessage: o,
        requireLaunchChannel: d,
        contextKey: c,
        onShareResult: u
    } = e;
    (0, r.mMO)(async () => {
        let {
            ApplicationCommandShareModal: e
        } = await n.e("33885").then(n.bind(n, 962156));
        return n => (0, i.jsx)(e, {
            applicationId: t,
            channel: a,
            command: s,
            previewMessage: o,
            onShareResult: u,
            requireLaunchChannel: d,
            ...n
        })
    }, {
        modalKey: l,
        contextKey: c,
        onCloseCallback: () => {
            u(!1)
        }
    })
}