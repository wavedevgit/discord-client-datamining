/** Chunk was on 92917 **/
/** chunk id: 821241, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
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
    h = n(234054);

function _(e) {
    var t;
    let {
        message: n,
        compact: i,
        usernameHook: _,
        channel: b
    } = e, A = (0, a.bG)([c.A], () => c.A.getGuild(b.guild_id)), y = (0, u.Ay)(n), v = _(y), {
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
            className: l()(h.rs, {
                [h.oE]: i
            }),
            iconNode: i ? null : (0, r.jsx)(p.l, {
                src: x
            }),
            iconContainerClassName: h.zc,
            compact: i,
            children: (0, r.jsxs)("div", {
                className: l()(h.Qs, {
                    [h.oE]: i
                }),
                children: [(0, r.jsx)(d.ix, {
                    message: n,
                    messageClassname: h.he,
                    className: l()(h.QV, h.he, {
                        [h.oE]: i
                    }),
                    username: (0, r.jsxs)("div", {
                        className: h.he,
                        children: [(0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: h.Xh,
                            children: g.intl.string(g.t.hG1StD)
                        }), (0, r.jsx)(o.A, {
                            type: f.nu.SYSTEM_DM,
                            className: h.Al
                        })]
                    }),
                    compact: i,
                    showTimestamp: !0
                }), (0, r.jsx)("div", {
                    className: l()(h.__invalid_messageContent, {
                        [h.oE]: i
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