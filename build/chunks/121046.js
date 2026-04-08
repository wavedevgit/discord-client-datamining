/** chunk id: 121046 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(311907),
    i = n(827343),
    r = n(961350),
    a = n(430452),
    s = n(652215),
    d = n(731854);

function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.x.DEFAULT,
        n = (0, l.bG)([r.default], () => r.default.getId()),
        o = (0, l.bG)([a.Ay], () => a.Ay.supports(d.O5.DISABLE_VIDEO)),
        u = (0, l.bG)([a.Ay], () => a.Ay.isLocalVideoDisabled(n, t), [n, t]);
    return [(null == e || e === n) && o, u, e => {
        let l = e ? s.bb8.DISABLED : s.bb8.MANUAL_ENABLED;
        i.A.setDisableLocalVideo(n, l, t)
    }]
}