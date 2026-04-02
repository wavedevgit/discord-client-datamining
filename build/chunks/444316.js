/** chunk id: 444316 params = (module,exports,require) **/
t.d(i, {
    A: () => h
});
var l = t(627968),
    s = t(64700),
    a = t(503698),
    n = t.n(a),
    r = t(417597),
    o = t(397927),
    d = t(966327),
    c = t(287809),
    u = t(260451),
    m = t(985018),
    _ = t(383499);

function h(e) {
    let {
        friendMemberIds: i,
        className: t,
        avatarSize: a = o._3J.SIZE_16
    } = e, h = (0, r.yK)([c.default], () => i.slice(0, 3).map(e => c.default.getUser(e)).filter(e => null != e)), {
        enabled: x
    } = u.SH.useConfig({
        location: "InviteFriendMembers"
    }), g = s.useCallback((e, i) => (0, l.jsx)(o.Text, {
        tag: "span",
        variant: "text-sm/medium",
        color: "text-subtle",
        children: e
    }, i), []);
    if (0 === h.length) return null;
    let p = h[0],
        A = {
            count: i.length - 1,
            username: p.username,
            username2: 2 === i.length && h.length >= 2 ? h[1].username : ""
        },
        E = x ? m.intl.format(m.t.qnYumI, {
            usernameHook: g,
            ...A
        }) : m.intl.format(m.t["5NHEPu"], A);
    return (0, l.jsxs)("div", {
        className: n()(_.kL, t),
        children: [(0, l.jsx)("div", {
            className: _.yA,
            style: {
                maxHeight: `${(0,o.FT9)(a)}px`
            },
            children: h.map((e, i) => (0, l.jsx)("div", {
                className: _.R3,
                style: {
                    zIndex: h.length - i
                },
                children: (0, l.jsx)(d.A, {
                    user: e,
                    size: a
                })
            }, e.id))
        }), (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: E
        })]
    })
}