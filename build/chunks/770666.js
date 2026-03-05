/** chunk id: 770666, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(311907),
    s = n(931991),
    l = n(808728),
    a = n(71393),
    r = n(576705),
    o = n(652215);

function c(e, t) {
    return (0, i.bG)([a.A, l.Ay, r.A], () => {
        let n = a.A.getGuild(e);
        if (r.A.can(o.xBc.ADMINISTRATOR, n) || r.A.can(o.xBc.CREATE_EVENTS, n)) return !0;
        for (let {
                channel: n
            }
            of l.Ay.getChannels(e)[l.vM])
            if (null == t || n.type === t) {
                let [e] = (0, s.p_)(n);
                if (r.A.can(e, n)) return !0
            } return !1
    }, [e, t])
}