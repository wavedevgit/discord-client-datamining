/** chunk id: 121046, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(311907),
    i = n(827343),
    a = n(961350),
    l = n(430452),
    o = n(652215),
    d = n(731854);

function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.x.DEFAULT,
        n = (0, r.bG)([a.default], () => a.default.getId()),
        c = (0, r.bG)([l.A], () => l.A.supports(d.O5.DISABLE_VIDEO)),
        u = (0, r.bG)([l.A], () => l.A.isLocalVideoDisabled(n, t), [n, t]);
    return [(null == e || e === n) && c, u, e => {
        let r = e ? o.bb8.DISABLED : o.bb8.MANUAL_ENABLED;
        i.A.setDisableLocalVideo(n, r, t)
    }]
}