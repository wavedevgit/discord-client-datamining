/** chunk id: 351405, original params: e,t,n (module,exports,require) **/
n.d(t, {
    P: () => C
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(138175),
    o = n(99072),
    c = n(443795),
    u = n(961350),
    d = n(629016),
    p = n(375492),
    m = n(290863),
    f = n(461213),
    g = n(287809),
    _ = n(456060),
    h = n(850670),
    b = n(125017),
    y = n(104171),
    A = n(13403),
    v = n(536189),
    O = n(652215),
    x = n(272984),
    E = n(609653);

function j(e) {
    let {
        partyMembers: t,
        partySize: n,
        maxPartySize: i,
        guildId: l,
        activityActionType: s
    } = e, o = Math.max(n, t.length), c = (0, _.SJ)({
        maxPartySize: i,
        partySize: o,
        activityActionType: s
    }), u = [...t];
    for (; u.length < n && u.length < 8;) u.push(y.mt);
    for (; u.length < i && u.length < 8;) u.push(null);
    return (0, r.jsxs)("div", {
        className: E.UF,
        children: [u.length > 0 && (0, r.jsx)(y.Ay, {
            guildId: l,
            users: u,
            max: i > 0 ? Math.min(i, 8) : 8,
            size: y.DN.SIZE_16,
            dimEmptyUsers: !0
        }), (0, r.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: "none",
            children: c
        })]
    })
}

function C(e) {
    var t, n, a;
    let {
        analyticsLocations: _,
        app: E,
        channel: C,
        message: I,
        hideParty: S,
        onView: T
    } = e, N = (0, s.b)(E), P = (0, l.bG)([u.default], () => u.default.getId()), w = (0, l.bG)([m.A], () => {
        if (null == I.application) return m.A.findActivity(I.author.id, e => e.type === O.$pd.LISTENING);
        {
            let e = I.author.id;
            return (0, h.v)(I) && (e = e === P && C.isPrivate() ? C.getRecipientId() : P), m.A.getApplicationActivity(e, I.application.id)
        }
    }, [I, C, P]), R = (0, l.bG)([p.A, f.A], () => {
        var e;
        return null != (e = p.A.getApplicationActivity(N.id)) ? e : f.A.getApplicationActivity(N.id, !0)
    }, [N.id]), D = (0, l.yK)([d.A], () => {
        var e;
        return null == w || null == w.party ? [] : Array.from(null != (e = d.A.getParty(w.party.id)) ? e : [])
    }, [w]), {
        partySize: L,
        maxPartySize: M
    } = (0, b._)(w), k = i.useMemo(() => D.map(e => {
        let t = g.default.getUser(e);
        return null != t ? t : y.mt
    }), [D]), U = i.useMemo(() => {
        var e;
        return (0, r.jsx)(j, {
            partyMembers: k,
            partySize: L,
            maxPartySize: M,
            guildId: C.guild_id,
            activityActionType: null == (e = I.activity) ? void 0 : e.type
        })
    }, [k, L, M, C.guild_id, null == (t = I.activity) ? void 0 : t.type]);
    return (0, x.pH)(null == w || null == (n = w.party) ? void 0 : n.id) || N.id === c.HT.id ? (0, r.jsx)(v.A, {
        application: N,
        currentUserPresenceActivity: R,
        hideParty: S,
        message: I,
        onView: T,
        partyStatusElement: U,
        presenceActivity: w,
        guildId: C.guild_id
    }) : (null == (a = I.activity) ? void 0 : a.type) === O.xL.STREAM_REQUEST ? (0, r.jsx)(o.A, {
        analyticsLocations: _,
        application: N,
        channel: C,
        currentUserId: P,
        message: I
    }) : (0, r.jsx)(A.A, {
        analyticsLocations: _,
        application: N,
        channel: C,
        currentUserId: P,
        currentUserPresenceActivity: R,
        hideParty: S,
        message: I,
        onView: T,
        partyStatusElement: U,
        presenceActivity: w
    })
}