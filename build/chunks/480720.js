/** chunk id: 480720, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(64700),
    l = n(734057),
    i = n(309010),
    s = n(203982),
    a = n(969151),
    o = n(108959),
    c = n(90804),
    u = n(748975),
    d = n(652215);

function h(e) {
    let {
        onTransition: t
    } = e;
    r.useEffect(() => {
        async function e(e) {
            let {
                location: n
            } = e, r = (0, a.H)(n);
            if (null == r || !(0, o.A)(r)) return;
            i.A.getVoiceChannelId() !== r && await (0, c.A)({
                channelId: r
            });
            let s = l.A.getChannel(r),
                d = null == s ? void 0 : s.guild_id;
            setTimeout(() => {
                (0, u.A)(d, n), null == t || t()
            }, 0)
        }
        return s._.subscribe(d.jej.OPEN_EMBEDDED_ACTIVITY, e), () => {
            s._.unsubscribe(d.jej.OPEN_EMBEDDED_ACTIVITY, e)
        }
    }, [t])
}