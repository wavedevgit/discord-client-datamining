/** chunk id: 121046 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(311907),
    i = n(827343),
    r = n(961350),
    a = n(430452),
    o = n(652215),
    s = n(731854);

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.x.DEFAULT,
        n = (0, l.bG)([r.default], () => r.default.getId()),
        u = (0, l.bG)([a.Ay], () => a.Ay.supports(s.O5.DISABLE_VIDEO)),
        d = (0, l.bG)([a.Ay], () => a.Ay.isLocalVideoDisabled(n, t), [n, t]);
    return [(null == e || e === n) && u, d, e => {
        let l = e ? o.bb8.DISABLED : o.bb8.MANUAL_ENABLED;
        i.A.setDisableLocalVideo(n, l, t)
    }]
}