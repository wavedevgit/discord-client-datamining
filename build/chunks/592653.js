/** chunk id: 592653 params = (module,exports,require) **/
n.d(t, {
    WW: () => _,
    Y$: () => A,
    t$: () => h
});
var i = n(735438),
    a = n.n(i),
    r = n(933958),
    l = n(969151),
    s = n(287809),
    o = n(403362),
    d = n(562153),
    c = n(639621),
    u = n(613057);

function A() {
    let e = r.Ay.getCurrentEmbeddedActivity();
    if (null == e) return {
        participants: []
    };
    let t = (0, l.D)(e.location),
        n = (0, l.H)(e.location);
    return {
        participants: Array.from(e.userIds, e => {
            let i = s.default.getUser(e);
            if (null == i) return;
            let a = (0, d.tJ)(t, n, i);
            return {
                ...(0, c.A)(i),
                nickname: a ?? void 0
            }
        }).filter(o.Vq)
    }
}
let _ = {
        [u.sm.ANY]: [u.VH]
    },
    h = {
        scope: _,
        handler: () => e => {
            let {
                prevState: t,
                dispatch: n
            } = e, i = A();
            return a().isEqual(i, t) || n(i), i
        }
    }