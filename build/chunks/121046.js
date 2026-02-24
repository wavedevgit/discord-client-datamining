/** chunk id: 121046, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => o
});
var i = t(311907),
    l = t(827343),
    r = t(961350),
    a = t(430452),
    s = t(652215),
    d = t(731854);

function o(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.x.DEFAULT,
        t = (0, i.bG)([r.default], () => r.default.getId()),
        o = (0, i.bG)([a.Ay], () => a.Ay.supports(d.O5.DISABLE_VIDEO)),
        c = (0, i.bG)([a.Ay], () => a.Ay.isLocalVideoDisabled(t, n), [t, n]);
    return [(null == e || e === t) && o, c, e => {
        let i = e ? s.bb8.DISABLED : s.bb8.MANUAL_ENABLED;
        l.A.setDisableLocalVideo(t, i, n)
    }]
}