/** Chunk was on 64935 **/
/** chunk id: 821241, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(311907),
    s = n(397927),
    o = n(709066),
    c = n(71393),
    u = n(763754),
    d = n(643204),
    p = n(809115),
    m = n(888675),
    f = n(705751),
    g = n(985018),
    _ = n(234054);

function h(e) {
    var t;
    let {
        message: n,
        compact: i,
        usernameHook: h,
        channel: b
    } = e, A = (0, a.bG)([c.A], () => c.A.getGuild(b.guild_id)), y = (0, u.Ay)(n), v = h(y), {
        avatarSrc: x,
        eventHandlers: {
            onMouseEnter: O,
            onMouseLeave: E
        }
    } = (0, p.a)(!0);
    return (0, r.jsx)("div", {
        onMouseEnter: O,
        onMouseLeave: E,
        children: (0, r.jsx)(m.A, {
            className: l()(_.rs, {
                [_.oE]: i
            }),
            iconNode: i ? null : (0, r.jsx)(p.l, {
                src: x
            }),
            iconContainerClassName: _.zc,
            compact: i,
            children: (0, r.jsxs)("div", {
                className: l()(_.Qs, {
                    [_.oE]: i
                }),
                children: [(0, r.jsx)(d.ix, {
                    message: n,
                    messageClassname: _.he,
                    className: l()(_.QV, _.he, {
                        [_.oE]: i
                    }),
                    username: (0, r.jsxs)("div", {
                        className: _.he,
                        children: [(0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: _.Xh,
                            children: g.intl.string(g.t.hG1StD)
                        }), (0, r.jsx)(o.A, {
                            type: f.nu.SYSTEM_DM,
                            className: _.Al
                        })]
                    }),
                    compact: i,
                    showTimestamp: !0
                }), (0, r.jsx)("div", {
                    className: l()(_.__invalid_messageContent, {
                        [_.oE]: i
                    }),
                    children: g.intl.format(g.t.W0UBI3, {
                        username: y.nick,
                        usernameHook: v,
                        guildName: null != (t = null == A ? void 0 : A.name) ? t : ""
                    })
                })]
            })
        })
    })
}