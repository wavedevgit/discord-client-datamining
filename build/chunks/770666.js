/** chunk id: 770666, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048);
var i = n(311907),
    r = n(931991),
    l = n(808728),
    a = n(71393),
    o = n(576705),
    s = n(652215);

function c(e, t) {
    return (0, i.bG)([a.A, l.Ay, o.A], () => {
        let n = a.A.getGuild(e);
        if (o.A.can(s.xBc.ADMINISTRATOR, n) || o.A.can(s.xBc.CREATE_EVENTS, n)) return !0;
        for (let {
                channel: n
            }
            of l.Ay.getChannels(e)[l.vM])
            if (null == t || n.type === t) {
                let [e] = (0, r.p_)(n);
                if (o.A.can(e, n)) return !0
            } return !1
    }, [e, t])
}