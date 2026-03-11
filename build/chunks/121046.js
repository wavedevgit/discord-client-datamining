/** chunk id: 121046 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    l = n(827343),
    r = n(961350),
    a = n(430452),
    s = n(652215),
    o = n(731854);

function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.x.DEFAULT,
        n = (0, i.bG)([r.default], () => r.default.getId()),
        d = (0, i.bG)([a.Ay], () => a.Ay.supports(o.O5.DISABLE_VIDEO)),
        c = (0, i.bG)([a.Ay], () => a.Ay.isLocalVideoDisabled(n, t), [n, t]);
    return [(null == e || e === n) && d, c, e => {
        let i = e ? s.bb8.DISABLED : s.bb8.MANUAL_ENABLED;
        l.A.setDisableLocalVideo(n, i, t)
    }]
}