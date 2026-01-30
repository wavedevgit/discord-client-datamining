/** chunk id: 526132, original params: e,n,t (module,exports,require) **/
t.d(n, {
    e: () => l,
    n: () => c
});
var r = t(311907),
    i = t(576705),
    a = t(652215);

function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
    return null != e && null != e.linkedLobby && n.can(a.xBc.MANAGE_CHANNELS, e) && n.can(a.xBc.VIEW_CHANNEL, e) && n.can(a.xBc.SEND_MESSAGES, e)
}

function l(e) {
    return (0, r.bG)([i.A], () => c(e, i.A))
}