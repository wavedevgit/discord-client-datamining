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
    A = n(526132),
    p = n(97469),
    f = n(406704),
    b = n(544028),
    C = n(95701),
    j = n(291731),
    v = n(176360),
    N = n(863036),
    _ = n(734057),
    y = n(576705),
    S = n(994500),
    E = n(287809),
    T = n(203982),
    M = n(608226),
    I = n(654030),
    R = n(955941),
    L = n(865678),
    w = n(159495),
    O = n(652215),
    G = n(985018),
    k = n(175107);

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
            canDeleteChannels: A,
            canManageWebhooks: p,
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
                } = e, A = (0, m.gU)(t), {
                    GUILD_CATEGORY: p
                } = O.rbe, f = C.Le.has(t.type), b = t.type === p ? G.intl.string(G.t.ifbXnL) : f ? t.isForumPost() ? G.intl.string(G.t.nEOg1N) : G.intl.string(G.t.H7vTe2) : G.intl.string(G.t["8D8Rsb"]);
                return [{
                    section: u.Fq.HEADER,
                    label: null != t ? (0, l.jsxs)(l.Fragment, {
                        children: [null != A ? (0, l.jsx)(A, {
                            size: "xxs",
                            color: "currentColor",
                            className: k.p
                        }) : null, (0, g.m1)(t, E.default, S.A), null != n ? (0, l.jsx)(a.Text, {
                            tag: "span",
                            variant: "text-xs/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: k.L,
                            children: (0, g.m1)(n, E.default, S.A)
                        }) : null]
                    }) : G.intl.string(G.t.XPDhcc)
                }, {
                    section: O.p_A.OVERVIEW,
                    label: G.intl.string(G.t["/dp6yY"]),
                    ariaLabel: G.intl.string(G.t["/dp6yY"]),
                    element: L.A,
                    notice: {
                        element: L.w,
                        stores: [N.A]
                    },
                    predicate: () => !t.isModeratorReportChannel()
                }, {
                    section: O.p_A.PERMISSIONS,
                    label: G.intl.string(G.t.xrmhRX),
                    element: x.A,
                    notice: {
                        element: w.$,
                        stores: [v.A]
                    },
                    predicate: () => i && !f
                }, {
                    section: O.p_A.INSTANT_INVITES,
                    label: G.intl.string(G.t["9F90ic"]),
                    element: R.A,
                    type: u.Py.CUSTOM,
                    predicate: () => t.type !== p && s && !f && !t.isModeratorReportChannel()
                }, {
                    section: O.p_A.INTEGRATIONS,
                    label: G.intl.string(G.t.s69NLF),
                    ariaLabel: G.intl.string(G.t.s69NLF),
                    element: I.A,
                    notice: {
                        stores: [j.A],
                        element: I.q
                    },
                    predicate: () => !(!c && !h || t.isModeratorReportChannel()) && C.oH.has(t.type)
                }, {
                    section: u.Fq.DIVIDER
                }, {
                    section: O.p_A.DELETE,
                    onClick() {
                        (0, M.O)(t, function() {
                            T._.subscribeOnce(O.jej.LAYER_POP_COMPLETE, () => {
                                (0, o.D3)(t.id)
                            }), (0, d.jH)()
                        })
                    },
                    label: b,
                    ariaLabel: b,
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
                canDeleteChannels: A,
                canManageWebhooks: p,
                canUnlinkChannel: f
            })
        })
    }
}

function P() {
    let {
        channel: e,
        analyticsLocation: t
    } = (0, s.cf)([N.A], () => N.A.getProps()), n = (0, s.bG)([N.A], () => N.A.getFormState()), i = (0, s.bG)([N.A], () => N.A.getSection()), a = (0, s.bG)([b.A], () => b.A.theme), r = (0, p.NC)(), o = (0, f.NI)(e), d = (0, f.H_)(e), {
        canManageChannels: c,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: g
    } = (0, s.cf)([y.A], () => ({
        canManageChannels: y.A.can(O.xBc.MANAGE_CHANNELS, e),
        canManageRoles: null != e && y.A.can(O.xBc.MANAGE_ROLES, e),
        canManageWebhooks: null != e && y.A.can(O.xBc.MANAGE_WEBHOOKS, e),
        canUnlinkChannel: (0, A.n)(e, y.A)
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