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
    E = n(985018),
    f = n(234054);

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
            className: a()(f.rs, {
                [f.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(m.l, {
                src: C
            }),
            iconContainerClassName: f.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(f.Qs, {
                    [f.oE]: n
                }),
                children: [(0, i.jsx)(u.ix, {
                    message: t,
                    messageClassname: f.he,
                    className: a()(f.QV, f.he, {
                        [f.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: f.he,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: f.Xh,
                            children: E.intl.string(E.t.hG1StD)
                        }), (0, i.jsx)(o.A, {
                            type: A.nu.SYSTEM_DM,
                            className: f.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: a()(f.__invalid_messageContent, {
                        [f.oE]: n
                    }),
                    children: E.intl.format(E.t.W0UBI3, {
                        username: p.nick,
                        usernameHook: x,
                        guildName: g?.name ?? ""
                    })
                })]
            })
        })
    })
}