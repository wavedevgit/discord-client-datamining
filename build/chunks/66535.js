/** chunk id: 66535 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var l = n(627968),
    a = n(64700),
    r = n(311907),
    i = n(397927),
    s = n(387408),
    d = n(763754),
    o = n(491182),
    c = n(291812),
    u = n(643204),
    _ = n(448368),
    m = n(538355),
    x = n(253932),
    p = n(734057),
    h = n(838541),
    g = n(985018),
    A = n(366073);
let v = e => {
    let {
        message: t
    } = e, n = (0, d.Ay)(t), v = (0, r.bG)([p.A], () => p.A.getChannel(t.channel_id)), f = a.useMemo(() => (0, s.A)(t), [t]), {
        content: b
    } = (0, m.A)(f, {
        hideSimpleEmbedContent: !1
    }), C = x.hH.useSetting(), T = a.useCallback(() => {
        let {
            leadingIcon: e,
            trailingIcon: n
        } = (0, _.o)(t, b, !1, !1, "", {
            leadingIconClass: A.$r,
            trailingIconClass: A.$r,
            iconSize: h.eJ
        });
        return (0, l.jsxs)("div", {
            className: A.hQ,
            children: [e, (0, l.jsx)(c.Ay, {
                message: t,
                content: b,
                compact: C
            }), n]
        })
    }, [t, b, C]);
    return null == v ? null : (0, l.jsxs)("div", {
        className: A.kL,
        children: [(0, l.jsx)(i.Heading, {
            className: A.wx,
            variant: "heading-sm/semibold",
            children: g.intl.string(g.t.iouM3a)
        }), (0, l.jsx)(i.HOs, {
            className: A.PI,
            children: (0, l.jsx)(o.A, {
                childrenMessageContent: T(),
                childrenHeader: (0, l.jsx)(u.Ay, {
                    message: t,
                    channel: v,
                    author: n,
                    guildId: v.guild_id
                }),
                disableInteraction: !0,
                author: n
            })
        })]
    })
}