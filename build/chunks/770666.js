/** chunk id: 770666, original params: e,n,t (module,exports,require) **/
"use strict";
t.d(n, {
    A: () => s
}), t(896048);
var i = t(311907),
    l = t(931991),
    r = t(808728),
    u = t(71393),
    a = t(576705),
    o = t(652215);

function s(e, n) {
    return (0, i.bG)([u.A, r.Ay, a.A], () => {
        let t = u.A.getGuild(e);
        if (a.A.can(o.xBc.ADMINISTRATOR, t) || a.A.can(o.xBc.CREATE_EVENTS, t)) return !0;
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