/** chunk id: 702035, original params: e,n,l (module,exports,require) **/
l.r(n), l.d(n, {
    default: () => f
});
var t = l(627968),
    r = l(64700),
    a = l(311907),
    i = l(686956),
    s = l(456412),
    c = l(377045),
    o = l(49463),
    d = l(473529),
    u = l(117733),
    m = l(71393);
let h = (0, s.A)(u.A),
    f = function(e) {
        let {
            guildId: n
        } = e, l = (0, a.bG)([m.A], () => m.A.getGuild(n), [n]), s = (0, a.bG)([o.A], () => o.A.hasLoadedExperiments), u = (0, d.d)(n);
        return (r.useEffect(() => {
            if (s && !u) return void i.A.escapeToDefaultChannel(n)
        }, [n, s, u]), null != l && u) ? (0, t.jsx)(h, {
            guild: l
        }) : (0, t.jsx)(c.A, {
            channelId: void 0
        })
    }