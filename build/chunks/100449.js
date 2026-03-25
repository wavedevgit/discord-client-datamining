/** chunk id: 100449 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(717558),
    d = n(287809),
    u = n(562153),
    h = n(732777),
    A = n(806931),
    m = n(731854),
    _ = n(334609);
let p = s.memo(function(e) {
    let {
        channel: t,
        participant: n
    } = e, l = (0, a.bG)([d.default], () => d.default.getUser(n.user.id), [n.user.id]), h = s.useMemo(() => u.Ay.getNickname(t.guild_id, t.id, l) ?? l?.globalName ?? n.userNick, [t, l, n.userNick]), A = (0, c.A)({
        userId: n.user.id,
        context: m.x.DEFAULT
    });
    if (null == l) return null;
    let p = o._3J.SIZE_32,
        g = o.vCh[p].size,
        f = l.getAvatarURL(t.guild_id, g);
    return (0, i.jsxs)("div", {
        className: r()(_.vB, {
            [_.zY]: A
        }),
        children: [(0, i.jsx)(o.euF, {
            className: _.my,
            size: p,
            src: f,
            "aria-hidden": !0
        }), (0, i.jsx)("div", {
            className: _.Xh,
            children: (0, i.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: h
            })
        })]
    })
});

function g(e) {
    let {
        channel: t,
        participants: n
    } = e, l = (0, h.A)(t.id), r = s.useMemo(() => {
        if (null == l) return [];
        let e = new Set(l.participants.map(e => e.userId));
        return n.filter(t => !(!(0, A.Xw)(t) || e.has(t.user.id)))
    }, [n, l]);
    return 0 === r.length ? null : (0, i.jsx)("div", {
        className: _.kL,
        children: r.map(e => (0, A.Xw)(e) ? (0, i.jsx)(p, {
            channel: t,
            participant: e
        }, e.user.id) : null)
    })
}