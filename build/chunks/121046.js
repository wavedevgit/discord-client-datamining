/** chunk id: 121046, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    r = n(827343),
    l = n(961350),
    a = n(430452),
    o = n(652215),
    s = n(731854);

function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.x.DEFAULT,
        n = (0, i.bG)([l.default], () => l.default.getId()),
        d = (0, i.bG)([a.Ay], () => a.Ay.supports(s.O5.DISABLE_VIDEO)),
        u = (0, i.bG)([a.Ay], () => a.Ay.isLocalVideoDisabled(n, t), [n, t]);
    return [(null == e || e === n) && d, u, e => {
        let i = e ? o.bb8.DISABLED : o.bb8.MANUAL_ENABLED;
        r.A.setDisableLocalVideo(n, i, t)
    }]
}