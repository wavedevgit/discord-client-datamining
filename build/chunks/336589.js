/** chunk id: 336589 params = (module,exports,require) **/
"use strict";
n.d(t, {
    I: () => p
});
var i = n(627968),
    r = n(64700),
    s = n(311907),
    a = n(732955),
    l = n(355622),
    o = n(148355),
    c = n(406704),
    u = n(696451),
    d = n(71393),
    _ = n(576705),
    E = n(287809),
    A = n(460350),
    m = n(167681),
    I = n(652215),
    T = n(985018),
    N = n(914342);
let g = e => {
        let {
            channel: t,
            message: n
        } = e, s = (0, m.dv)(n.id), c = r.useCallback(() => {
            (0, A.i)({
                type: l.oU.FORM,
                content: "",
                channel: t
            }).then(e => {
                let {
                    valid: i
                } = e;
                i && (0, m.S9)(t, n, s.id)
            })
        }, [t, n, s]);
        return (0, i.jsx)("div", {
            className: N.T,
            children: (0, i.jsx)(a.$nd, {
                icon: {
                    type: "sticker",
                    asset: s,
                    component: o.A
                },
                text: T.intl.string(T.t["7Tj6HT"]),
                onClick: c,
                variant: "secondary"
            })
        })
    },
    p = e => {
        let {
            message: t,
            channel: n
        } = e, r = n.getGuildId(), a = (0, s.bG)([E.default, _.A, d.A, u.Ay], () => {
            let e = E.default.getCurrentUser(),
                i = (0, c.UJ)(n),
                s = _.A.can(I.xBc.SEND_MESSAGES, n),
                a = null != r && null != e && u.Ay.getMember(r, e.id)?.isPending,
                l = t.author.bot,
                o = d.A.getGuild(r),
                A = null != o && (o.systemChannelFlags & I.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
            return s && !i && !a && !l && A
        });
        return null != r && a ? (0, i.jsx)(g, {
            message: t,
            channel: n
        }) : null
    }