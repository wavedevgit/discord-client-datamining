/** Chunk was on 92917 **/
/** chunk id: 336589, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I: () => y
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(732955),
    s = n(355622),
    o = n(148355),
    c = n(406704),
    u = n(696451),
    d = n(71393),
    p = n(576705),
    m = n(287809),
    f = n(460350),
    g = n(167681),
    h = n(652215),
    _ = n(985018),
    b = n(182777);
let A = e => {
        let {
            channel: t,
            message: n
        } = e, l = (0, g.dv)(n.id), c = i.useCallback(() => {
            (0, f.i)({
                type: s.oU.FORM,
                content: "",
                channel: t
            }).then(e => {
                let {
                    valid: r
                } = e;
                r && (0, g.S9)(t, n, l.id)
            })
        }, [t, n, l]);
        return (0, r.jsx)("div", {
            className: b.T,
            children: (0, r.jsx)(a.$nd, {
                icon: {
                    type: "sticker",
                    asset: l,
                    component: o.A
                },
                text: _.intl.string(_.t["7Tj6HT"]),
                onClick: c,
                variant: "secondary"
            })
        })
    },
    y = e => {
        let {
            message: t,
            channel: n
        } = e, i = n.getGuildId(), a = (0, l.bG)([m.default, p.A, d.A, u.Ay], () => {
            var e;
            let r = m.default.getCurrentUser(),
                l = (0, c.UJ)(n),
                a = p.A.can(h.xBc.SEND_MESSAGES, n),
                s = null != i && null != r && (null == (e = u.Ay.getMember(i, r.id)) ? void 0 : e.isPending),
                o = t.author.bot,
                f = d.A.getGuild(i),
                g = null != f && (f.systemChannelFlags & h.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
            return a && !l && !s && !o && g
        });
        return null != i && a ? (0, r.jsx)(A, {
            message: t,
            channel: n
        }) : null
    }