/** chunk id: 100449 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(717558),
    d = n(287809),
    u = n(562153),
    h = n(732777),
    A = n(806931),
    m = n(731854),
    p = n(334609);
let g = s.memo(function(e) {
    let {
        channel: t,
        participant: n
    } = e, l = (0, r.bG)([d.default], () => d.default.getUser(n.user.id), [n.user.id]), h = s.useMemo(() => u.Ay.getNickname(t.guild_id, t.id, l) ?? l?.globalName ?? n.userNick, [t, l, n.userNick]), A = (0, c.A)({
        userId: n.user.id,
        context: m.x.DEFAULT
    });
    if (null == l) return null;
    let g = o._3J.SIZE_32,
        _ = o.vCh[g].size,
        f = l.getAvatarURL(t.guild_id, _);
    return (0, i.jsxs)("div", {
        className: a()(p.vB, {
            [p.zY]: A
        }),
        children: [(0, i.jsx)(o.euF, {
            className: p.my,
            size: g,
            src: f,
            "aria-hidden": !0
        }), (0, i.jsx)("div", {
            className: p.Xh,
            children: (0, i.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: h
            })
        })]
    })
});

function _(e) {
    let {
        channel: t,
        participants: n
    } = e, l = (0, h.A)(t.id), a = s.useMemo(() => {
        if (null == l) return [];
        let e = new Set(l.participants.map(e => e.userId));
        return n.filter(t => !(!(0, A.Xw)(t) || e.has(t.user.id)))
    }, [n, l]);
    return 0 === a.length ? null : (0, i.jsx)("div", {
        className: p.kL,
        children: a.map(e => (0, A.Xw)(e) ? (0, i.jsx)(g, {
            channel: t,
            participant: e
        }, e.user.id) : null)
    })
}