/** chunk id: 175436 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(334595),
    a = n(837921),
    r = n(90924),
    l = n(629471);
let s = {
    [n(652215).e$_.ENCOURAGE_HW_ACCELERATION]: {
        validation: e => (0, l.A)(e),
        handler(e) {
            let {
                socket: t
            } = e;
            (0, r.lG)(t.transport);
            let n = t.application.id;
            if (null != n) return (0, i.A)(n), {
                enabled: a.Ay.getEnableHardwareAcceleration()
            }
        }
    }
}