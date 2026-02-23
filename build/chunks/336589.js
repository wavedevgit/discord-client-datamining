/** chunk id: 336589, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => x
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
    m = n(576705),
    _ = n(287809),
    A = n(460350),
    h = n(167681),
    f = n(652215),
    E = n(985018),
    g = n(182777);
let p = e => {
        let {
            channel: t,
            message: n
        } = e, a = (0, h.dv)(n.id), c = l.useCallback(() => {
            (0, A.i)({
                type: s.oU.FORM,
                content: "",
                channel: t
            }).then(e => {
                let {
                    valid: i
                } = e;
                i && (0, h.S9)(t, n, a.id)
            })
        }, [t, n, a]);
        return (0, i.jsx)("div", {
            className: g.T,
            children: (0, i.jsx)(r.$nd, {
                icon: {
                    type: "sticker",
                    asset: a,
                    component: o.A
                },
                text: E.intl.string(E.t["7Tj6HT"]),
                onClick: c,
                variant: "secondary"
            })
        })
    },
    x = e => {
        let {
            message: t,
            channel: n
        } = e, l = n.getGuildId(), r = (0, a.bG)([_.default, m.A, u.A, d.Ay], () => {
            let e = _.default.getCurrentUser(),
                i = (0, c.UJ)(n),
                a = m.A.can(f.xBc.SEND_MESSAGES, n),
                r = null != l && null != e && d.Ay.getMember(l, e.id)?.isPending,
                s = t.author.bot,
                o = u.A.getGuild(l),
                A = null != o && (o.systemChannelFlags & f.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
            return a && !i && !r && !s && A
        });
        return null != l && r ? (0, i.jsx)(p, {
            message: t,
            channel: n
        }) : null
    }