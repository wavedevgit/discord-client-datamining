/** chunk id: 351405 params = (module,exports,require) **/
n.d(t, {
    P: () => S
}), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(311907),
    s = n(397927),
    r = n(138175),
    o = n(99072),
    d = n(443795),
    c = n(961350),
    u = n(629016),
    _ = n(375492),
    m = n(290863),
    h = n(461213),
    p = n(287809),
    g = n(456060),
    A = n(454292),
    x = n(850670),
    f = n(125017),
    C = n(104171),
    E = n(13403),
    I = n(536189),
    v = n(652215),
    b = n(272984),
    T = n(193018);

function y(e) {
    let {
        partyMembers: t,
        partySize: n,
        maxPartySize: a,
        guildId: l,
        activityActionType: r
    } = e, o = Math.max(n, t.length), d = (0, g.SJ)({
        maxPartySize: a,
        partySize: o,
        activityActionType: r
    }), c = [...t];
    for (; c.length < n && c.length < 8;) c.push(C.mt);
    for (; c.length < a && c.length < 8;) c.push(null);
    return (0, i.jsxs)("div", {
        className: T.UF,
        children: [c.length > 0 && (0, i.jsx)(C.Ay, {
            guildId: l,
            users: c,
            max: a > 0 ? Math.min(a, 8) : 8,
            size: C.DN.SIZE_16,
            dimEmptyUsers: !0
        }), (0, i.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: "none",
            children: d
        })]
    })
}

function S(e) {
    let {
        analyticsLocations: t,
        app: n,
        channel: s,
        message: g,
        hideParty: T,
        onView: S
    } = e, N = (0, r.b)(n), j = (0, l.bG)([c.default], () => c.default.getId()), L = (0, l.bG)([m.A], () => {
        if (null == g.application) return m.A.findActivity(g.author.id, e => e.type === v.$pd.LISTENING);
        {
            let e = g.author.id;
            return (0, x.v)(g) && (e = e === j && s.isPrivate() ? s.getRecipientId() : j), m.A.getApplicationActivity(e, g.application.id)
        }
    }, [g, s, j]), R = (0, l.bG)([_.A, h.A], () => (0, A.A)(_.A, h.A, N.id), [N.id]), P = (0, l.yK)([u.A], () => null == L || null == L.party ? [] : Array.from(u.A.getParty(L.party.id) ?? []), [L]), {
        partySize: w,
        maxPartySize: M
    } = (0, f._)(L), D = a.useMemo(() => P.map(e => {
        let t = p.default.getUser(e);
        return null != t ? t : C.mt
    }), [P]), k = a.useMemo(() => (0, i.jsx)(y, {
        partyMembers: D,
        partySize: w,
        maxPartySize: M,
        guildId: s.guild_id,
        activityActionType: g.activity?.type
    }), [D, w, M, s.guild_id, g.activity?.type]);
    return (0, b.pH)(L?.party?.id) || N.id === d.HT.id ? (0, i.jsx)(I.A, {
        application: N,
        currentUserPresenceActivity: R,
        hideParty: T,
        message: g,
        onView: S,
        partyStatusElement: k,
        presenceActivity: L,
        guildId: s.guild_id
    }) : g.activity?.type === v.xL.STREAM_REQUEST ? (0, i.jsx)(o.A, {
        analyticsLocations: t,
        application: N,
        channel: s,
        currentUserId: j,
        message: g
    }) : (0, i.jsx)(E.A, {
        analyticsLocations: t,
        application: N,
        channel: s,
        currentUserId: j,
        currentUserPresenceActivity: R,
        hideParty: T,
        message: g,
        onView: S,
        partyStatusElement: k,
        presenceActivity: L
    })
}