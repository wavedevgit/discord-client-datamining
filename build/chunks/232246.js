/** chunk id: 232246, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(321073);
var l = n(311907),
    r = n(233993),
    i = n(808728),
    a = n(576705);

function s(e) {
    var t;
    let n = null != (t = null == e ? void 0 : e.id) ? t : null;
    return (0, l.yK)([i.Ay, a.A], () => i.Ay.getChannels(n)[i.vM].reduce((e, t) => {
        let n = t.channel;
        return n.isGuildStageVoice() && function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A;
            return !!e.isGuildStageVoice() && t.can(r.QY, e)
        }(t.channel, a.A) && e.push(n), e
    }, []), [n])
}