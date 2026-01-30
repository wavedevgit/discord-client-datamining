/** chunk id: 66535, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(387408),
    o = n(763754),
    d = n(491182),
    c = n(291812),
    u = n(643204),
    m = n(448368),
    p = n(538355),
    b = n(253932),
    _ = n(734057),
    g = n(838541),
    x = n(985018),
    h = n(205435);
let v = e => {
    let {
        message: t
    } = e, n = (0, o.Ay)(t), v = (0, i.bG)([_.A], () => _.A.getChannel(t.channel_id)), f = r.useMemo(() => (0, s.A)(t), [t]), {
        content: j
    } = (0, p.A)(f, {
        hideSimpleEmbedContent: !1
    }), A = b.hH.useSetting(), y = r.useCallback(() => {
        let {
            leadingIcon: e,
            trailingIcon: n
        } = (0, m.o)(t, j, !1, !1, "", {
            leadingIconClass: h.$r,
            trailingIconClass: h.$r,
            iconSize: g.eJ
        });
        return (0, l.jsxs)("div", {
            className: h.hQ,
            children: [e, (0, l.jsx)(c.Ay, {
                message: t,
                content: j,
                compact: A
            }), n]
        })
    }, [t, j, A]);
    return null == v ? null : (0, l.jsxs)("div", {
        className: h.kL,
        children: [(0, l.jsx)(a.Heading, {
            className: h.wx,
            variant: "heading-sm/semibold",
            children: x.intl.string(x.t.iouM3a)
        }), (0, l.jsx)(a.HOs, {
            className: h.PI,
            children: (0, l.jsx)(d.A, {
                childrenMessageContent: y(),
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