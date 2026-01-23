/** Chunk was on web.js **/
/** chunk id: 351405, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    P: () => N
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(138175),
    l = n(99072),
    c = n(443795),
    u = n(961350),
    d = n(629016),
    f = n(375492),
    p = n(290863),
    _ = n(461213),
    h = n(287809),
    m = n(456060),
    g = n(850670),
    E = n(125017),
    y = n(104171),
    b = n(13403),
    O = n(536189),
    v = n(652215),
    A = n(272984),
    I = n(609653);
let S = 8;

function T(e) {
    let {
        partyMembers: t,
        partySize: n,
        maxPartySize: i,
        guildId: a,
        activityActionType: o
    } = e, l = Math.max(n, t.length), c = (0, m.SJ)({
        maxPartySize: i,
        partySize: l,
        activityActionType: o
    }), u = [...t];
    for (; u.length < n && u.length < S;) u.push(y.mt);
    for (; u.length < i && u.length < S;) u.push(null);
    return (0, r.jsxs)("div", {
        className: I.UF,
        children: [u.length > 0 && (0, r.jsx)(y.Ay, {
            guildId: a,
            users: u,
            max: i > 0 ? Math.min(i, S) : S,
            size: y.DN.SIZE_16,
            dimEmptyUsers: !0
        }), (0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: "none",
            children: c
        })]
    })
}

function C(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === v.xL.STREAM_REQUEST
}

function N(e) {
    var t, n;
    let {
        analyticsLocations: s,
        app: m,
        channel: I,
        message: S,
        hideParty: N,
        onView: w
    } = e, R = (0, o.b)(m), P = (0, a.bG)([u.default], () => u.default.getId()), D = (0, a.bG)([p.A], () => {
        if (null == S.application) return p.A.findActivity(S.author.id, e => e.type === v.$pd.LISTENING);
        {
            let e = S.author.id;
            return (0, g.v)(S) && (e = e === P && I.isPrivate() ? I.getRecipientId() : P), p.A.getApplicationActivity(e, S.application.id)
        }
    }, [S, I, P]), x = (0, a.bG)([f.A, _.A], () => {
        var e;
        return null != (e = f.A.getApplicationActivity(R.id)) ? e : _.A.getApplicationActivity(R.id, !0)
    }, [R.id]), L = (0, a.yK)([d.A], () => {
        var e;
        return null == D || null == D.party ? [] : Array.from(null != (e = d.A.getParty(D.party.id)) ? e : [])
    }, [D]), {
        partySize: j,
        maxPartySize: M
    } = (0, E._)(D), k = i.useMemo(() => L.map(e => {
        let t = h.default.getUser(e);
        return null != t ? t : y.mt
    }), [L]), U = i.useMemo(() => {
        var e;
        return (0, r.jsx)(T, {
            partyMembers: k,
            partySize: j,
            maxPartySize: M,
            guildId: I.guild_id,
            activityActionType: null == (e = S.activity) ? void 0 : e.type
        })
    }, [k, j, M, I.guild_id, null == (t = S.activity) ? void 0 : t.type]);
    return (0, A.pH)(null == D || null == (n = D.party) ? void 0 : n.id) || R.id === c.HT.id ? (0, r.jsx)(O.A, {
        application: R,
        currentUserPresenceActivity: x,
        hideParty: N,
        message: S,
        onView: w,
        partyStatusElement: U,
        presenceActivity: D,
        guildId: I.guild_id
    }) : C(S) ? (0, r.jsx)(l.A, {
        analyticsLocations: s,
        application: R,
        channel: I,
        currentUserId: P,
        message: S
    }) : (0, r.jsx)(b.A, {
        analyticsLocations: s,
        application: R,
        channel: I,
        currentUserId: P,
        currentUserPresenceActivity: x,
        hideParty: N,
        message: S,
        onView: w,
        partyStatusElement: U,
        presenceActivity: D
    })
}