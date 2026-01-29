/** Chunk was on 1113 **/
/** chunk id: 100449, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(717558),
    u = n(287809),
    d = n(562153),
    h = n(732777),
    p = n(806931),
    g = n(731854),
    f = n(334609);
let m = l.memo(function(e) {
    let {
        channel: t,
        participant: n
    } = e, i = (0, a.bG)([u.default], () => u.default.getUser(n.user.id), [n.user.id]), h = l.useMemo(() => {
        var e, r;
        return null != (e = null != (r = d.Ay.getNickname(t.guild_id, t.id, i)) ? r : null == i ? void 0 : i.globalName) ? e : n.userNick
    }, [t, i, n.userNick]), p = (0, c.A)({
        userId: n.user.id,
        context: g.x.DEFAULT
    });
    if (null == i) return null;
    let m = o._3J.SIZE_32,
        b = o.vCh[m].size,
        A = i.getAvatarURL(t.guild_id, b);
    return (0, r.jsxs)("div", {
        className: s()(f.vB, {
            [f.zY]: p
        }),
        children: [(0, r.jsx)(o.euF, {
            className: f.my,
            size: m,
            src: A,
            "aria-hidden": !0
        }), (0, r.jsx)("div", {
            className: f.Xh,
            children: (0, r.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: h
            })
        })]
    })
});

function b(e) {
    let {
        channel: t,
        participants: n
    } = e, i = (0, h.A)(t.id), s = l.useMemo(() => {
        if (null == i) return [];
        let e = new Set(i.participants.map(e => e.userId));
        return n.filter(t => !(!(0, p.Xw)(t) || e.has(t.user.id)))
    }, [n, i]);
    return 0 === s.length ? null : (0, r.jsx)("div", {
        className: f.kL,
        children: s.map(e => (0, p.Xw)(e) ? (0, r.jsx)(m, {
            channel: t,
            participant: e
        }, e.user.id) : null)
    })
}