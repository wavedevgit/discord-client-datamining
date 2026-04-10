/** chunk id: 121046 params = (module,exports,require) **/
n.d(e, {
    A: () => d
});
var i = n(311907),
    l = n(827343),
    r = n(961350),
    a = n(430452),
    o = n(652215),
    u = n(731854);

function d(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.x.DEFAULT,
        n = (0, i.bG)([r.default], () => r.default.getId()),
        d = (0, i.bG)([a.Ay], () => a.Ay.supports(u.O5.DISABLE_VIDEO)),
        s = (0, i.bG)([a.Ay], () => a.Ay.isLocalVideoDisabled(n, e), [n, e]);
    return [(null == t || t === n) && d, s, t => {
        let i = t ? o.bb8.DISABLED : o.bb8.MANUAL_ENABLED;
        l.A.setDisableLocalVideo(n, i, e)
    }]
}