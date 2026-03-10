/** chunk id: 770666 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var a = n(311907),
    i = n(931991),
    r = n(808728),
    c = n(71393),
    o = n(576705),
    s = n(652215);

function l(e, t) {
    return (0, a.bG)([c.A, r.Ay, o.A], () => {
        let n = c.A.getGuild(e);
        if (o.A.can(s.xBc.ADMINISTRATOR, n) || o.A.can(s.xBc.CREATE_EVENTS, n)) return !0;
        for (let {
                channel: n
            }
            of r.Ay.getChannels(e)[r.vM])
            if (null == t || n.type === t) {
                let [e] = (0, i.p_)(n);
                if (o.A.can(e, n)) return !0
            } return !1
    }, [e, t])
}