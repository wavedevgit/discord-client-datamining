/** chunk id: 961022, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => s
});
var l = t(311907),
    r = t(113783),
    i = t(69407),
    a = t(446600),
    o = t(734057),
    c = t(71393);

function s(e) {
    let {
        id: n,
        data: {
            guild: t,
            instance: s,
            speakers: u,
            participantCount: d
        },
        context: g
    } = e, p = (0, l.bG)([c.A, o.A], () => {
        var e;
        return c.A.getGuild(null == (e = o.A.getChannel(n)) ? void 0 : e.getGuildId())
    }, [n]), m = (0, l.bG)([a.A], () => a.A.getStageInstanceByChannel(n), [n]), v = (0, r.E5)(n, i.ip.SPEAKER), f = (0, r.zy)(n), h = null != m ? v : u, b = (null != m ? f : d) - h.length;
    return {
        channelId: n,
        guild: null != p ? p : t,
        stage: null != m ? m : s,
        speakers: h,
        audienceCount: b,
        context: g
    }
}