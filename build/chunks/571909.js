/** chunk id: 571909, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => f,
    ek: () => p,
    vI: () => _
});
var r = n(64700),
    i = n(353640),
    a = n(121894),
    o = n(311907),
    s = n(576705),
    l = n(309010),
    c = n(233993),
    u = n(505543);
let d = (0, i.v)(e => ({
        isOnStartStageScreen: !0
    })),
    f = d;

function p(e) {
    (0, a.r)(() => d.setState({
        isOnStartStageScreen: e
    }))
}

function _(e) {
    let t = (0, o.bG)([l.A], () => l.A.getVoiceChannelId() === e.id),
        n = (0, o.bG)([s.A], () => s.A.can(c.QY, e), [e]),
        i = (0, u.A)(e.id),
        a = n && !i;
    r.useEffect(() => {
        t ? a || p(!1) : p(a)
    }, [t, a])
}