/** chunk id: 442187 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(136722),
    a = n(311907),
    r = n(808728),
    l = n(576705),
    s = n(652215);

function o(e) {
    let t = (0, a.bG)([r.Ay], () => r.Ay.getChannels(e)[r.I6] ?? [], [e]);
    return 0 === t.length ? 0 : t.filter(e => {
        let {
            channel: t
        } = e;
        return l.A.can(i.kg(s.xBc.SEND_MESSAGES, s.xBc.VIEW_CHANNEL), t)
    }).length
}