/** chunk id: 66535 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(397927),
    s = n(387408),
    d = n(763754),
    o = n(491182),
    c = n(291812),
    u = n(643204),
    _ = n(448368),
    m = n(538355),
    x = n(253932),
    p = n(734057),
    g = n(838541),
    h = n(985018),
    A = n(366073);
let b = e => {
    let {
        message: t
    } = e, n = (0, d.Ay)(t), b = (0, i.bG)([p.A], () => p.A.getChannel(t.channel_id)), v = a.useMemo(() => (0, s.A)(t), [t]), {
        content: f
    } = (0, m.A)(v, {
        hideSimpleEmbedContent: !1
    }), T = x.hH.useSetting(), C = a.useCallback(() => {
        let {
            leadingIcon: e,
            trailingIcon: n
        } = (0, _.o)(t, f, !1, !1, "", {
            leadingIconClass: A.$r,
            trailingIconClass: A.$r,
            iconSize: g.eJ
        });
        return (0, l.jsxs)("div", {
            className: A.hQ,
            children: [e, (0, l.jsx)(c.Ay, {
                message: t,
                content: f,
                compact: T
            }), n]
        })
    }, [t, f, T]);
    return null == b ? null : (0, l.jsxs)("div", {
        className: A.kL,
        children: [(0, l.jsx)(r.Heading, {
            className: A.wx,
            variant: "heading-sm/semibold",
            children: h.intl.string(h.t.iouM3a)
        }), (0, l.jsx)(r.HOs, {
            className: A.PI,
            children: (0, l.jsx)(o.A, {
                childrenMessageContent: C(),
                childrenHeader: (0, l.jsx)(u.Ay, {
                    message: t,
                    channel: b,
                    author: n,
                    guildId: b.guild_id
                }),
                disableInteraction: !0,
                author: n
            })
        })]
    })
}