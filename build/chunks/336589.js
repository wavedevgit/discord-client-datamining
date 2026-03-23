/** chunk id: 336589 params = (module,exports,require) **/
n.d(t, {
    I: () => C
});
var i = n(627968),
    a = n(64700),
    l = n(311907),
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
    f = n(182777);
let N = e => {
        let {
            channel: t,
            message: n
        } = e, l = (0, E.dv)(n.id), c = a.useCallback(() => {
            (0, A.i)({
                type: s.oU.FORM,
                content: "",
                channel: t
            }).then(e => {
                let {
                    valid: i
                } = e;
                i && (0, E.S9)(t, n, l.id)
            })
        }, [t, n, l]);
        return (0, i.jsx)("div", {
            className: f.T,
            children: (0, i.jsx)(r.$nd, {
                icon: {
                    type: "sticker",
                    asset: l,
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
        } = e, a = n.getGuildId(), r = (0, l.bG)([m.default, _.A, u.A, d.Ay], () => {
            let e = m.default.getCurrentUser(),
                i = (0, c.UJ)(n),
                l = _.A.can(I.xBc.SEND_MESSAGES, n),
                r = null != a && null != e && d.Ay.getMember(a, e.id)?.isPending,
                s = t.author.bot,
                o = u.A.getGuild(a),
                A = null != o && (o.systemChannelFlags & I.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
            return l && !i && !r && !s && A
        });
        return null != a && r ? (0, i.jsx)(N, {
            message: t,
            channel: n
        }) : null
    }