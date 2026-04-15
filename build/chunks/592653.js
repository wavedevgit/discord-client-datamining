/** chunk id: 592653 params = (module,exports,require) **/
n.d(t, {
    WW: () => h,
    Y$: () => A,
    t$: () => _
});
var i = n(735438),
    l = n.n(i),
    a = n(933958),
    r = n(969151),
    s = n(287809),
    o = n(403362),
    d = n(562153),
    c = n(639621),
    u = n(613057);

function A() {
    let e = a.Ay.getCurrentEmbeddedActivity();
    if (null == e) return {
        participants: []
    };
    let t = (0, r.D)(e.location),
        n = (0, r.H)(e.location);
    return {
        participants: Array.from(e.userIds, e => {
            let i = s.default.getUser(e);
            if (null == i) return;
            let l = (0, d.tJ)(t, n, i);
            return {
                ...(0, c.A)(i),
                nickname: l ?? void 0
            }
        }).filter(o.Vq)
    }
}
let h = {
        [u.sm.ANY]: [u.VH]
    },
    _ = {
        scope: h,
        handler: () => e => {
            let {
                prevState: t,
                dispatch: n
            } = e, i = A();
            return l().isEqual(i, t) || n(i), i
        }
    }