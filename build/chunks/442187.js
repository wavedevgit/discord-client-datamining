/** chunk id: 442187 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(136722),
    a = n(311907),
    l = n(808728),
    r = n(576705),
    s = n(652215);

function o(e) {
    let t = (0, a.bG)([l.Ay], () => l.Ay.getChannels(e)[l.I6] ?? [], [e]);
    return 0 === t.length ? 0 : t.filter(e => {
        let {
            channel: t
        } = e;
        return r.A.can(i.kg(s.xBc.SEND_MESSAGES, s.xBc.VIEW_CHANNEL), t)
    }).length
}