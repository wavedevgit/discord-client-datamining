/** chunk id: 336589 params = (module,exports,require) **/
n.d(t, {
    I: () => f
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(732955),
    s = n(355622),
    o = n(148355),
    c = n(406704),
    d = n(696451),
    u = n(71393),
    _ = n(576705),
    A = n(287809),
    m = n(460350),
    E = n(167681),
    T = n(652215),
    I = n(985018),
    N = n(566675);
let g = e => {
        let {
            channel: t,
            message: n
        } = e, a = (0, E.dv)(n.id), c = l.useCallback(() => {
            (0, m.i)({
                type: s.oU.FORM,
                content: "",
                channel: t
            }).then(e => {
                let {
                    valid: i
                } = e;
                i && (0, E.S9)(t, n, a.id)
            })
        }, [t, n, a]);
        return (0, i.jsx)("div", {
            className: N.T,
            children: (0, i.jsx)(r.$nd, {
                icon: {
                    type: "sticker",
                    asset: a,
                    component: o.A
                },
                text: I.intl.string(I.t["7Tj6HT"]),
                onClick: c,
                variant: "secondary"
            })
        })
    },
    f = e => {
        let {
            message: t,
            channel: n
        } = e, l = n.getGuildId(), r = (0, a.bG)([A.default, _.A, u.A, d.Ay], () => {
            let e = A.default.getCurrentUser(),
                i = (0, c.UJ)(n),
                a = _.A.can(T.xBc.SEND_MESSAGES, n),
                r = null != l && null != e && d.Ay.getMember(l, e.id)?.isPending,
                s = t.author.bot,
                o = u.A.getGuild(l),
                m = null != o && (o.systemChannelFlags & T.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
            return a && !i && !r && !s && m
        });
        return null != l && r ? (0, i.jsx)(g, {
            message: t,
            channel: n
        }) : null
    }