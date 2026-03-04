/** chunk id: 770666, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var a = n(311907),
    i = n(931991),
    r = n(808728),
    o = n(71393),
    l = n(576705),
    c = n(652215);

function s(e, t) {
    return (0, a.bG)([o.A, r.Ay, l.A], () => {
        let n = o.A.getGuild(e);
        if (l.A.can(c.xBc.ADMINISTRATOR, n) || l.A.can(c.xBc.CREATE_EVENTS, n)) return !0;
        for (let {
                channel: n
            }
            of r.Ay.getChannels(e)[r.vM])
            if (null == t || n.type === t) {
                let [e] = (0, i.p_)(n);
                if (l.A.can(e, n)) return !0
            } return !1
    }, [e, t])
}