/** chunk id: 213279, original params: e,t,r (module,exports,require) **/
r.d(t, {
    p: () => n
});
var s = r(627968);
r(64700);
var i = r(397927);
let n = e => {
    let {
        analyticsLocation: t,
        onClose: n
    } = e;
    (0, i.mMO)(async () => {
        let {
            default: e
        } = await r.e("18630").then(r.bind(r, 826789));
        return r => (0, s.jsx)(e, {
            ...r,
            analyticsSource: t,
            onClose: () => (n?.(), r.onClose?.())
        })
    })
}