/** chunk id: 442187 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(136722),
    l = n(311907),
    r = n(808728),
    a = n(576705),
    s = n(652215);

function o(e) {
    let t = (0, l.bG)([r.Ay], () => r.Ay.getChannels(e)[r.I6] ?? [], [e]);
    return 0 === t.length ? 0 : t.filter(e => {
        let {
            channel: t
        } = e;
        return a.A.can(i.kg(s.xBc.SEND_MESSAGES, s.xBc.VIEW_CHANNEL), t)
    }).length
}