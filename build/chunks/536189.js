/** chunk id: 536189 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    a = n(64700),
    r = n(172710),
    l = n(456060),
    s = n(659051),
    o = n(798899),
    d = n(829963);

function c(e) {
    let {
        application: t,
        currentUserPresenceActivity: n,
        hideParty: c,
        message: u,
        onView: _,
        partyStatusElement: m,
        presenceActivity: h,
        guildId: p
    } = e, g = !(0, s.A)(h, u, t.id), A = (0, l.n$)(t.name, u.activity?.type, g), x = a.useMemo(() => {
        if (null != h) return () => (0, r.Mp)(h)
    }, [h]);
    return g ? (0, i.jsx)(o.A, {
        application: t,
        message: u,
        header: A,
        onClickContent: x,
        onView: _,
        guildId: p
    }) : (0, i.jsx)(d.A, {
        application: t,
        message: u,
        header: A,
        presenceActivity: h,
        hideParty: c,
        partyStatusElement: m,
        currentUserPresenceActivity: n,
        onClickContent: x,
        onView: _,
        guildId: p
    })
}