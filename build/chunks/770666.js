/** chunk id: 770666 params = (module,exports,require) **/
"use strict";
t.d(n, {
    A: () => c
});
var i = t(311907),
    l = t(931991),
    r = t(808728),
    s = t(71393),
    a = t(576705),
    u = t(652215);

function c(e, n) {
    return (0, i.bG)([s.A, r.Ay, a.A], () => {
        let t = s.A.getGuild(e);
        if (a.A.can(u.xBc.ADMINISTRATOR, t) || a.A.can(u.xBc.CREATE_EVENTS, t)) return !0;
        for (let {
                channel: t
            }
            of r.Ay.getChannels(e)[r.vM])
            if (null == n || t.type === n) {
                let [e] = (0, l.p_)(t);
                if (a.A.can(e, t)) return !0
            } return !1
    }, [e, n])
}