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
    _ = n(985018),
    d = n(438536);

function g(e) {
    let {
        userId: t,
        guildId: n
    } = e, g = (0, a.bG)([s.Ay], () => s.Ay.getGuildSidebarState(n), [n]), {
        messagesCount: A,
        linksCount: T,
        mediaCount: I
    } = (0, u.u5)(t, n), O = new Intl.NumberFormat(_.intl.currentLocale).format(A), h = new Intl.NumberFormat(_.intl.currentLocale).format(T), N = new Intl.NumberFormat(_.intl.currentLocale).format(I), m = r.useCallback(async e => {
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
        label: _.intl.string(_.t.vCn2Tn),
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
                    children: _.intl.string(_.t.OIgYlQ)
                }),
                description: A === u.zu ? (0, l.jsx)(i.y$y, {
                    type: i.tVU.SPINNING_CIRCLE,
                    className: d.S
                }) : (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "interactive-text-default",
                    children: O
                }),
                onNavigate: A > 0 ? () => m(u.SA.MESSAGES) : void 0
            }), (0, l.jsx)(c.RU, {
                icon: (0, l.jsx)(i.qYV, {
                    size: "custom",
                    width: c.mb,
                    height: c.mb
                }),
                name: (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: _.intl.string(_.t.DFSvTt)
                }),
                description: T === u.zu ? (0, l.jsx)(i.y$y, {
                    type: i.tVU.SPINNING_CIRCLE,
                    className: d.S
                }) : (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "interactive-text-default",
                    children: h
                }),
                onNavigate: T > 0 ? () => m(u.SA.LINKS) : void 0
            }), (0, l.jsx)(c.RU, {
                icon: (0, l.jsx)(i.sYc, {
                    size: "custom",
                    width: c.mb,
                    height: c.mb
                }),
                name: (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: _.intl.string(_.t["Aw9+/M"])
                }),
                description: I === u.zu ? (0, l.jsx)(i.y$y, {
                    type: i.tVU.SPINNING_CIRCLE,
                    className: d.S
                }) : (0, l.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    color: "interactive-text-default",
                    children: N
                }),
                onNavigate: I > 0 ? () => m(u.SA.MEDIA) : void 0
            })]
        })
    })
}