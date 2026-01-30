/** chunk id: 316076, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(397927),
    s = n(761640),
    o = n(706752),
    u = n(744432),
    c = n(829887),
    E = n(486974),
    d = n(985018),
    _ = n(438536);

function g(e) {
    let {
        userId: t,
        guildId: n
    } = e, g = (0, a.bG)([s.Ay], () => s.Ay.getGuildSidebarState(n), [n]), {
        messagesCount: A,
        linksCount: T,
        mediaCount: h
    } = (0, u.u5)(t, n), I = new Intl.NumberFormat(d.intl.currentLocale).format(A), O = new Intl.NumberFormat(d.intl.currentLocale).format(T), m = new Intl.NumberFormat(d.intl.currentLocale).format(h), N = r.useCallback(async e => {
        if (null == g) return;
        let l = (0, u.ry)(t, e, {
            include_nsfw: !0
        });
        await (0, o.z)(n, t, g.baseChannelId, {
            modViewPanel: E.g.MESSAGE_HISTORY,
            additionalSearchQuery: l
        })
    }, [n, g, t]);
    return (0, l.jsx)(i.D0$, {
        label: d.intl.string(d.t.vCn2Tn),
        children: (0, l.jsxs)(c.SQ, {
            children: [(0, l.jsx)(c.RU, {
                icon: (0, l.jsx)(i.oyn, {
                    size: "custom",
                    color: "currentColor",
                    width: c.mb,
                    height: c.mb
                }),
                name: (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: d.intl.string(d.t.OIgYlQ)
                }),
                description: A === u.zu ? (0, l.jsx)(i.y$y, {
                    type: i.tVU.SPINNING_CIRCLE,
                    className: _.S
                }) : (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "interactive-text-default",
                    children: I
                }),
                onNavigate: A > 0 ? () => N(u.SA.MESSAGES) : void 0
            }), (0, l.jsx)(c.RU, {
                icon: (0, l.jsx)(i.qYV, {
                    size: "custom",
                    width: c.mb,
                    height: c.mb
                }),
                name: (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: d.intl.string(d.t.DFSvTt)
                }),
                description: T === u.zu ? (0, l.jsx)(i.y$y, {
                    type: i.tVU.SPINNING_CIRCLE,
                    className: _.S
                }) : (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "interactive-text-default",
                    children: O
                }),
                onNavigate: T > 0 ? () => N(u.SA.LINKS) : void 0
            }), (0, l.jsx)(c.RU, {
                icon: (0, l.jsx)(i.sYc, {
                    size: "custom",
                    width: c.mb,
                    height: c.mb
                }),
                name: (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: d.intl.string(d.t["Aw9+/M"])
                }),
                description: h === u.zu ? (0, l.jsx)(i.y$y, {
                    type: i.tVU.SPINNING_CIRCLE,
                    className: _.S
                }) : (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "interactive-text-default",
                    children: m
                }),
                onNavigate: h > 0 ? () => N(u.SA.MEDIA) : void 0
            })]
        })
    })
}