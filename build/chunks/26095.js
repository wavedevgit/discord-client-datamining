/** chunk id: 26095 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(627968);
n(64700);
var a = n(397927),
    o = n(73153);
let r = {
    open(e) {
        o.h.dispatch({
            type: "SAFETY_HUB_APPEAL_OPEN",
            classificationId: e
        }), (0, a.mMO)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("74327"), n.e("96722")]).then(n.bind(n, 355690));
            return n => (0, i.jsx)(t, {
                classificationId: e,
                ...n
            })
        })
    },
    close() {
        o.h.dispatch({
            type: "SAFETY_HUB_APPEAL_CLOSE"
        })
    }
}