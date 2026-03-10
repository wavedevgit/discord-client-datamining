/** chunk id: 821241 params = (module,exports,require) **/
n.d(t, {
    A: () => T
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
    _ = n(809115),
    A = n(888675),
    m = n(705751),
    E = n(985018),
    I = n(234054);

function T(e) {
    let {
        message: t,
        compact: n,
        usernameHook: l,
        channel: T
    } = e, f = (0, r.bG)([c.A], () => c.A.getGuild(T.guild_id)), N = (0, d.Ay)(t), C = l(N), {
        avatarSrc: g,
        eventHandlers: {
            onMouseEnter: h,
            onMouseLeave: p
        }
    } = (0, _.a)(!0);
    return (0, i.jsx)("div", {
        onMouseEnter: h,
        onMouseLeave: p,
        children: (0, i.jsx)(A.A, {
            className: a()(I.rs, {
                [I.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(_.l, {
                src: g
            }),
            iconContainerClassName: I.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(I.Qs, {
                    [I.oE]: n
                }),
                children: [(0, i.jsx)(u.ix, {
                    message: t,
                    messageClassname: I.he,
                    className: a()(I.QV, I.he, {
                        [I.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: I.he,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: I.Xh,
                            children: E.intl.string(E.t.hG1StD)
                        }), (0, i.jsx)(o.A, {
                            type: m.nu.SYSTEM_DM,
                            className: I.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: a()(I.__invalid_messageContent, {
                        [I.oE]: n
                    }),
                    children: E.intl.format(E.t.W0UBI3, {
                        username: N.nick,
                        usernameHook: C,
                        guildName: f?.name ?? ""
                    })
                })]
            })
        })
    })
}