/** chunk id: 572946 params = (module,exports,require) **/
n.d(t, {
    g: () => s
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(587895),
    r = n(851907);

function s(e) {
    let {
        applicationId: t,
        channelId: s,
        mediaUrl: o
    } = e, d = a.A.getApplication(t), c = null != (0, r.Ay)({
        application: d,
        channelId: s
    }) ? l.KX8 : l.SYi;
    (0, l.mMO)(async () => {
        let {
            default: e
        } = await Promise.all([n.e("21743"), n.e("50628")]).then(n.bind(n, 190930));
        return n => (0, i.jsx)(e, {
            applicationId: t,
            mediaUrl: o,
            ...n
        })
    }, {
        modalKey: "activity-share-moment-modal",
        contextKey: c
    })
}