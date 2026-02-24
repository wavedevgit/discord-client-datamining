/** chunk id: 700475, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => s
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(587895),
    a = n(851907);

function s(e) {
    let {
        applicationId: t,
        customId: s,
        linkId: o,
        message: d,
        onShare: c
    } = e, u = l.A.getApplication(t);
    if (null == u) return void c(!1, !1);
    let A = null != (0, a.LU)({
            applicationId: u.id
        }) ? r.KX8 : r.SYi,
        h = !1;

    function _(e) {
        c(e, h)
    }

    function m() {
        h = !0
    }(0, r.mMO)(async () => {
        let {
            default: e
        } = await n.e("48587").then(n.bind(n, 824774));
        return n => (0, i.jsx)(e, {
            applicationId: t,
            customId: s,
            linkId: o,
            message: d,
            onCopyLink: m,
            onShare: _,
            ...n
        })
    }, {
        modalKey: "activity-share-moment-modal",
        contextKey: A,
        onCloseCallback: () => {
            c(!1, h)
        }
    })
}