/** Chunk was on 64935 **/
/** chunk id: 536189, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(64700),
    l = n(172710),
    a = n(456060),
    s = n(659051),
    o = n(798899),
    c = n(829963);

function u(e) {
    var t;
    let {
        application: n,
        currentUserPresenceActivity: u,
        hideParty: d,
        message: p,
        onView: m,
        partyStatusElement: f,
        presenceActivity: g,
        guildId: _
    } = e, h = !(0, s.A)(g, p, n.id), b = (0, a.n$)(n.name, null == (t = p.activity) ? void 0 : t.type, h), A = i.useMemo(() => {
        if (null != g) return () => (0, l.Mp)(g)
    }, [g]);
    return h ? (0, r.jsx)(o.A, {
        application: n,
        message: p,
        header: b,
        onClickContent: A,
        onView: m,
        guildId: _
    }) : (0, r.jsx)(c.A, {
        application: n,
        message: p,
        header: b,
        presenceActivity: g,
        hideParty: d,
        partyStatusElement: f,
        currentUserPresenceActivity: u,
        onClickContent: A,
        onView: m,
        guildId: _
    })
}