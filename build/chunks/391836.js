/** chunk id: 391836 params = (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(938796), n(321073);
var i = n(179771),
    a = n(136722),
    l = n(420970),
    r = n(994500),
    s = n(287809),
    o = n(636401),
    d = n(90924),
    c = n(613057),
    u = n(652215);
let A = {
    [u.e$_.GET_RELATIONSHIPS]: (0, l.T)(u.e$_.GET_RELATIONSHIPS, {
        scope: {
            [c.sm.ANY]: [i.F.RELATIONSHIPS_READ]
        },
        handler(e) {
            if (a.zy(a.iu(e.socket.application.flags ?? 0), a.iu(u.gfo.DISABLE_RELATIONSHIPS_ACCESS))) throw new o.A({
                errorCode: u.Lw6.INVALID_PERMISSIONS
            }, "Missing Permissions");
            let t = [];
            for (let [n, i] of r.A.getMutableRelationships().entries()) {
                if (i === u.eA$.NONE) continue;
                let a = s.default.getUser(n);
                if (null == a) continue;
                let l = (0, d.Gc)(i, a);
                t.push((0, d.LP)(l, e.socket.application.id))
            }
            return {
                relationships: t
            }
        }
    })
}