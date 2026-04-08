/** chunk id: 667587 params = (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => P
});
var l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(73153),
    o = n(435183),
    d = n(398590),
    c = n(83257),
    u = n(361739),
    h = n(58149),
    g = n(47167),
    m = n(713654),
    x = n(414618),
    p = n(526132),
    A = n(97469),
    f = n(406704),
    C = n(544028),
    b = n(95701),
    j = n(291731),
    N = n(176360),
    v = n(863036),
    _ = n(734057),
    y = n(576705),
    T = n(994500),
    S = n(287809),
    E = n(203982),
    I = n(608226),
    M = n(654030),
    R = n(955941),
    L = n(865678),
    w = n(159495),
    O = n(652215),
    G = n(985018),
    k = n(312877);

function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.Ay.trackWithMetadata(O.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: n
    })
}
class B extends i.PureComponent {
    componentDidMount() {
        D(this.props.section, null, this.props.analyticsLocation)
    }
    componentWillUnmount() {
        r.h.wait(() => (0, o.VN)())
    }
    componentDidUpdate(e) {
        let {
            formState: t,
            section: n
        } = e, {
            formState: l,
            section: i,
            canManageRoles: s,
            canManageChannels: a,
            canManageWebhooks: r,
            canUnlinkChannel: o
        } = this.props;
        (a || s || r || o) && (l !== O.XlH.CLOSED || l === t) && (s || i !== O.p_A.PERMISSIONS) && (r || o || i !== O.p_A.INTEGRATIONS) ? i !== n && D(i, n): (0, d.jH)()
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            channel: i,
            category: s,
            canManageRoles: r,
            canManageChannels: h,
            canDeleteChannels: p,
            canManageWebhooks: A,
            canUnlinkChannel: f
        } = this.props;
        return null == i ? null : (0, l.jsx)(c.Ay, {
            theme: e,
            sidebarTheme: t,
            section: n ?? O.p_A.OVERVIEW,
            onSetSection: o.c4,
            onClose: d.jH,
            sections: function(e) {
                let {
                    channel: t,
                    category: n,
                    canManageRoles: i,
                    canManageChannels: s,
                    canDeleteChannels: r,
                    canManageWebhooks: c,
                    canUnlinkChannel: h
                } = e, p = (0, m.gU)(t), {
                    GUILD_CATEGORY: A
                } = O.rbe, f = b.Le.has(t.type), C = t.type === A ? G.intl.string(G.t.ifbXnL) : f ? t.isForumPost() ? G.intl.string(G.t.nEOg1N) : G.intl.string(G.t.H7vTe2) : G.intl.string(G.t["8D8Rsb"]);
                return [{
                    section: u.Fq.HEADER,
                    label: null != t ? (0, l.jsxs)(l.Fragment, {
                        children: [null != p ? (0, l.jsx)(p, {
                            size: "xxs",
                            color: "currentColor",
                            className: k.p
                        }) : null, (0, g.m1)(t, S.default, T.A), null != n ? (0, l.jsx)(a.Text, {
                            tag: "span",
                            variant: "text-xs/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: k.L,
                            children: (0, g.m1)(n, S.default, T.A)
                        }) : null]
                    }) : G.intl.string(G.t.XPDhcc)
                }, {
                    section: O.p_A.OVERVIEW,
                    label: G.intl.string(G.t["/dp6yY"]),
                    ariaLabel: G.intl.string(G.t["/dp6yY"]),
                    element: L.A,
                    notice: {
                        element: L.w,
                        stores: [v.A]
                    },
                    predicate: () => !t.isModeratorReportChannel()
                }, {
                    section: O.p_A.PERMISSIONS,
                    label: G.intl.string(G.t.xrmhRX),
                    element: x.A,
                    notice: {
                        element: w.$,
                        stores: [N.A]
                    },
                    predicate: () => i && !f
                }, {
                    section: O.p_A.INSTANT_INVITES,
                    label: G.intl.string(G.t["9F90ic"]),
                    element: R.A,
                    type: u.Py.CUSTOM,
                    predicate: () => t.type !== A && s && !f && !t.isModeratorReportChannel()
                }, {
                    section: O.p_A.INTEGRATIONS,
                    label: G.intl.string(G.t.s69NLF),
                    ariaLabel: G.intl.string(G.t.s69NLF),
                    element: M.A,
                    notice: {
                        stores: [j.A],
                        element: M.q
                    },
                    predicate: () => !(!c && !h || t.isModeratorReportChannel()) && b.oH.has(t.type)
                }, {
                    section: u.Fq.DIVIDER
                }, {
                    section: O.p_A.DELETE,
                    onClick() {
                        (0, I.O)(t, function() {
                            E._.subscribeOnce(O.jej.LAYER_POP_COMPLETE, () => {
                                (0, o.D3)(t.id)
                            }), (0, d.jH)()
                        })
                    },
                    label: C,
                    ariaLabel: C,
                    icon: (0, l.jsx)(a.ucK, {
                        size: "xs",
                        color: "currentColor"
                    }),
                    variant: "destructive",
                    predicate: () => r && !t.isModeratorReportChannel()
                }]
            }({
                channel: i,
                category: s,
                canManageRoles: r,
                canManageChannels: h,
                canDeleteChannels: p,
                canManageWebhooks: A,
                canUnlinkChannel: f
            })
        })
    }
}

function P() {
    let {
        channel: e,
        analyticsLocation: t
    } = (0, s.cf)([v.A], () => v.A.getProps()), n = (0, s.bG)([v.A], () => v.A.getFormState()), i = (0, s.bG)([v.A], () => v.A.getSection()), a = (0, s.bG)([C.A], () => C.A.theme), r = (0, A.NC)(), o = (0, f.NI)(e), d = (0, f.H_)(e), {
        canManageChannels: c,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: g
    } = (0, s.cf)([y.A], () => ({
        canManageChannels: y.A.can(O.xBc.MANAGE_CHANNELS, e),
        canManageRoles: null != e && y.A.can(O.xBc.MANAGE_ROLES, e),
        canManageWebhooks: null != e && y.A.can(O.xBc.MANAGE_WEBHOOKS, e),
        canUnlinkChannel: (0, p.n)(e, y.A)
    })), m = (0, s.bG)([_.A], () => _.A.getChannel(e?.parent_id));
    return (0, l.jsx)(B, {
        channel: e,
        category: m,
        canManageChannels: e?.isThread() ? o : c,
        canDeleteChannels: e?.isThread() ? d : c,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: g,
        formState: n,
        theme: a,
        sidebarTheme: r,
        section: i,
        analyticsLocation: t
    })
}