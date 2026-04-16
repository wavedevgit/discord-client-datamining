/** chunk id: 121046 params = (module,exports,require) **/
n.d(e, {
    A: () => u
});
var i = n(311907),
    r = n(827343),
    l = n(961350),
    a = n(430452),
    o = n(652215),
    d = n(731854);

function u(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.x.DEFAULT,
        n = (0, i.bG)([l.default], () => l.default.getId()),
        u = (0, i.bG)([a.Ay], () => a.Ay.supports(d.O5.DISABLE_VIDEO)),
        s = (0, i.bG)([a.Ay], () => a.Ay.isLocalVideoDisabled(n, e), [n, e]);
    return [(null == t || t === n) && u, s, t => {
        let i = t ? o.bb8.DISABLED : o.bb8.MANUAL_ENABLED;
        r.A.setDisableLocalVideo(n, i, e)
    }]
}