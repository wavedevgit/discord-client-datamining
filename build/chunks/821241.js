/** chunk id: 821241 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(311907),
    s = n(397927),
    o = n(709066),
    c = n(71393),
    u = n(763754),
    d = n(643204),
    _ = n(809115),
    A = n(888675),
    m = n(705751),
    E = n(985018),
    T = n(240775);

function I(e) {
    let {
        message: t,
        compact: n,
        usernameHook: l,
        channel: I
    } = e, N = (0, r.bG)([c.A], () => c.A.getGuild(I.guild_id)), g = (0, u.Ay)(t), f = l(g), {
        avatarSrc: C,
        eventHandlers: {
            onMouseEnter: h,
            onMouseLeave: p
        }
    } = (0, _.a)(!0);
    return (0, i.jsx)("div", {
        onMouseEnter: h,
        onMouseLeave: p,
        children: (0, i.jsx)(A.A, {
            className: a()(T.rs, {
                [T.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(_.l, {
                src: C
            }),
            iconContainerClassName: T.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(T.Qs, {
                    [T.oE]: n
                }),
                children: [(0, i.jsx)(d.ix, {
                    message: t,
                    messageClassname: T.he,
                    className: a()(T.QV, T.he, {
                        [T.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: T.he,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: T.Xh,
                            children: E.intl.string(E.t.hG1StD)
                        }), (0, i.jsx)(o.A, {
                            type: m.nu.SYSTEM_DM,
                            className: T.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: a()(T.__invalid_messageContent, {
                        [T.oE]: n
                    }),
                    children: E.intl.format(E.t.W0UBI3, {
                        username: g.nick,
                        usernameHook: f,
                        guildName: N?.name ?? ""
                    })
                })]
            })
        })
    })
}