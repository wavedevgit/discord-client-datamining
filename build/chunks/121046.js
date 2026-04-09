/** chunk id: 121046 params = (module,exports,require) **/
i.d(e, {
    A: () => s
});
var n = i(311907),
    a = i(827343),
    l = i(961350),
    r = i(430452),
    o = i(652215),
    d = i(731854);

function s(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.x.DEFAULT,
        i = (0, n.bG)([l.default], () => l.default.getId()),
        s = (0, n.bG)([r.Ay], () => r.Ay.supports(d.O5.DISABLE_VIDEO)),
        c = (0, n.bG)([r.Ay], () => r.Ay.isLocalVideoDisabled(i, e), [i, e]);
    return [(null == t || t === i) && s, c, t => {
        let n = t ? o.bb8.DISABLED : o.bb8.MANUAL_ENABLED;
        a.A.setDisableLocalVideo(i, n, e)
    }]
}