/** chunk id: 821241 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(311907),
    s = n(397927),
    o = n(709066),
    c = n(71393),
    d = n(763754),
    u = n(643204),
    m = n(809115),
    _ = n(888675),
    A = n(705751),
    f = n(985018),
    E = n(684532);

function h(e) {
    let {
        message: t,
        compact: n,
        usernameHook: l,
        channel: h
    } = e, g = (0, r.bG)([c.A], () => c.A.getGuild(h.guild_id)), p = (0, d.Ay)(t), x = l(p), {
        avatarSrc: C,
        eventHandlers: {
            onMouseEnter: I,
            onMouseLeave: T
        }
    } = (0, m.a)(!0);
    return (0, i.jsx)("div", {
        onMouseEnter: I,
        onMouseLeave: T,
        children: (0, i.jsx)(_.A, {
            className: a()(E.rs, {
                [E.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(m.l, {
                src: C
            }),
            iconContainerClassName: E.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(E.Qs, {
                    [E.oE]: n
                }),
                children: [(0, i.jsx)(u.ix, {
                    message: t,
                    messageClassname: E.he,
                    className: a()(E.QV, E.he, {
                        [E.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: E.he,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: E.Xh,
                            children: f.intl.string(f.t.hG1StD)
                        }), (0, i.jsx)(o.A, {
                            type: A.nu.SYSTEM_DM,
                            className: E.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: a()(E.__invalid_messageContent, {
                        [E.oE]: n
                    }),
                    children: f.intl.format(f.t.W0UBI3, {
                        username: p.nick,
                        usernameHook: x,
                        guildName: g?.name ?? ""
                    })
                })]
            })
        })
    })
}