/** chunk id: 336589 params = (module,exports,require) **/
n.d(t, {
    I: () => C
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
    m = n(287809),
    A = n(460350),
    E = n(167681),
    I = n(652215),
    T = n(985018),
    f = n(453302);
let N = e => {
        let {
            channel: t,
            message: n
        } = e, a = (0, E.dv)(n.id), c = l.useCallback(() => {
            (0, A.i)({
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
            className: f.T,
            children: (0, i.jsx)(r.$nd, {
                icon: {
                    type: "sticker",
                    asset: a,
                    component: o.A
                },
                text: T.intl.string(T.t["7Tj6HT"]),
                onClick: c,
                variant: "secondary"
            })
        })
    },
    C = e => {
        let {
            message: t,
            channel: n
        } = e, l = n.getGuildId(), r = (0, a.bG)([m.default, _.A, u.A, d.Ay], () => {
            let e = m.default.getCurrentUser(),
                i = (0, c.UJ)(n),
                a = _.A.can(I.xBc.SEND_MESSAGES, n),
                r = null != l && null != e && d.Ay.getMember(l, e.id)?.isPending,
                s = t.author.bot,
                o = u.A.getGuild(l),
                A = null != o && (o.systemChannelFlags & I.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
            return a && !i && !r && !s && A
        });
        return null != l && r ? (0, i.jsx)(N, {
            message: t,
            channel: n
        }) : null
    }