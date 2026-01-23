/** Chunk was on 78238 **/
/** chunk id: 121046, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => u
});
var n = r(311907),
    o = r(827343),
    i = r(961350),
    l = r(430452),
    a = r(652215),
    c = r(731854);

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x.DEFAULT,
        r = (0, n.bG)([i.default], () => i.default.getId()),
        u = (0, n.bG)([l.A], () => l.A.supports(c.O5.DISABLE_VIDEO)),
        s = (0, n.bG)([l.A], () => l.A.isLocalVideoDisabled(r, t), [r, t]);
    return [(null == e || e === r) && u, s, e => {
        let n = e ? a.bb8.DISABLED : a.bb8.MANUAL_ENABLED;
        o.A.setDisableLocalVideo(r, n, t)
    }]
}