/** chunk id: 391836 params = (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(938796), n(321073);
var i = n(179771),
    l = n(136722),
    r = n(420970),
    a = n(994500),
    s = n(287809),
    o = n(636401),
    d = n(90924),
    c = n(613057),
    u = n(652215);
let A = {
    [u.e$_.GET_RELATIONSHIPS]: (0, r.T)(u.e$_.GET_RELATIONSHIPS, {
        scope: {
            [c.sm.ANY]: [i.F.RELATIONSHIPS_READ]
        },
        handler(e) {
            if (l.zy(l.iu(e.socket.application.flags ?? 0), l.iu(u.gfo.DISABLE_RELATIONSHIPS_ACCESS))) throw new o.A({
                errorCode: u.Lw6.INVALID_PERMISSIONS
            }, "Missing Permissions");
            let t = [];
            for (let [n, i] of a.A.getMutableRelationships().entries()) {
                if (i === u.eA$.NONE) continue;
                let l = s.default.getUser(n);
                if (null == l) continue;
                let r = (0, d.Gc)(i, l);
                t.push((0, d.LP)(r, e.socket.application.id))
            }
            return {
                relationships: t
            }
        }
    })
}