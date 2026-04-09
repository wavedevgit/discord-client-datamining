/** chunk id: 907430 params = (module,exports,require) **/
n.d(t, {
    d: () => m,
    o: () => u
});
var i = n(627968),
    l = n(409626),
    a = n(692969),
    s = n(562153),
    r = n(415043),
    o = n(617086),
    c = n(985018),
    d = n(34519);

function u(e) {
    let {
        applicationId: t,
        ...n
    } = e, l = (0, o.A)(t);
    return l.length > 0 ? (0, i.jsx)(r.A, {
        label: c.intl.formatToPlainString(c.t.ujhJdG, {
            numFriends: l.length
        }),
        users: l,
        maxUsers: 4,
        ...n
    }) : null
}

function m(e) {
    var t, n, u;
    let m, {
            userId: g,
            applicationId: f,
            guildId: x,
            channelId: p,
            className: _
        } = e,
        I = (0, o.A)(f),
        h = I.length > 0,
        A = (t = I, n = x, u = p, m = t.slice(0, 3).map(e => s.Ay.getName(n, u, e)), 1 === t.length ? c.intl.formatToPlainString(c.t.FURqTU, {
            name: m[0]
        }) : 2 === t.length ? c.intl.formatToPlainString(c.t["08Usu/"], {
            name1: m[0],
            name2: m[1]
        }) : 3 === t.length ? c.intl.formatToPlainString(c.t.NTYHag, {
            name1: m[0],
            name2: m[1],
            name3: m[2]
        }) : c.intl.formatToPlainString(c.t["i/5oAn"], {
            name1: m[0],
            name2: m[1],
            name3: m[2],
            numPeople: t.length - 3
        })),
        E = (0, a.A)({
            location: "SocialProofButton",
            applicationId: f,
            source: l.Ob.UserProfile,
            sourceUserId: g,
            trackEntryPointImpression: !0
        });
    return h && null != E ? (0, i.jsx)(r.H, {
        users: I,
        label: A,
        className: _,
        onClick: E,
        guildId: x,
        channelId: p,
        "aria-label": A,
        overflowCountColor: "text-strong",
        overflowCountClassName: d.L
    }) : null
}