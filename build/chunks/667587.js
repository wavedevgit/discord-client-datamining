/** chunk id: 667587, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => B
});
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(73153),
    o = n(435183),
    c = n(398590),
    d = n(83257),
    u = n(361739),
    h = n(58149),
    g = n(47167),
    m = n(713654),
    p = n(414618),
    f = n(526132),
    b = n(97469),
    x = n(406704),
    j = n(544028),
    A = n(95701),
    y = n(291731),
    v = n(176360),
    O = n(863036),
    C = n(734057),
    N = n(576705),
    S = n(994500),
    E = n(287809),
    _ = n(203982),
    T = n(608226),
    w = n(654030),
    M = n(955941),
    R = n(865678),
    I = n(159495),
    L = n(652215),
    P = n(985018),
    D = n(175107);

function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.Ay.trackWithMetadata(L.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: n
    })
}
class G extends i.PureComponent {
    componentDidMount() {
        k(this.props.section, null, this.props.analyticsLocation)
    }
    componentWillUnmount() {
        a.h.wait(() => (0, o.VN)())
    }
    componentDidUpdate(e) {
        let {
            formState: t,
            section: n
        } = e, {
            formState: l,
            section: i,
            canManageRoles: r,
            canManageChannels: s,
            canManageWebhooks: a,
            canUnlinkChannel: o
        } = this.props;
        (s || r || a || o) && (l !== L.XlH.CLOSED || l === t) && (r || i !== L.p_A.PERMISSIONS) && (a || o || i !== L.p_A.INTEGRATIONS) ? i !== n && k(i, n): (0, c.jH)()
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            channel: i,
            category: r,
            canManageRoles: a,
            canManageChannels: h,
            canDeleteChannels: f,
            canManageWebhooks: b,
            canUnlinkChannel: x
        } = this.props;
        return null == i ? null : (0, l.jsx)(d.Ay, {
            theme: e,
            sidebarTheme: t,
            section: null != n ? n : L.p_A.OVERVIEW,
            onSetSection: o.c4,
            onClose: c.jH,
            sections: function(e) {
                let {
                    channel: t,
                    category: n,
                    canManageRoles: i,
                    canManageChannels: r,
                    canDeleteChannels: a,
                    canManageWebhooks: d,
                    canUnlinkChannel: h
                } = e, f = (0, m.gU)(t), {
                    GUILD_CATEGORY: b
                } = L.rbe, x = A.Le.has(t.type), j = t.type === b ? P.intl.string(P.t.ifbXnL) : x ? t.isForumPost() ? P.intl.string(P.t.nEOg1N) : P.intl.string(P.t.H7vTe2) : P.intl.string(P.t["8D8Rsb"]);
                return [{
                    section: u.Fq.HEADER,
                    label: null != t ? (0, l.jsxs)(l.Fragment, {
                        children: [null != f ? (0, l.jsx)(f, {
                            size: "xxs",
                            color: "currentColor",
                            className: D.p
                        }) : null, (0, g.m1)(t, E.default, S.A), null != n ? (0, l.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-xs/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            className: D.L,
                            children: (0, g.m1)(n, E.default, S.A)
                        }) : null]
                    }) : P.intl.string(P.t.XPDhcc)
                }, {
                    section: L.p_A.OVERVIEW,
                    label: P.intl.string(P.t["/dp6yY"]),
                    ariaLabel: P.intl.string(P.t["/dp6yY"]),
                    element: R.A,
                    notice: {
                        element: R.w,
                        stores: [O.A]
                    },
                    predicate: () => !t.isModeratorReportChannel()
                }, {
                    section: L.p_A.PERMISSIONS,
                    label: P.intl.string(P.t.xrmhRX),
                    element: p.A,
                    notice: {
                        element: I.$,
                        stores: [v.A]
                    },
                    predicate: () => i && !x
                }, {
                    section: L.p_A.INSTANT_INVITES,
                    label: P.intl.string(P.t["9F90ic"]),
                    element: M.A,
                    type: u.Py.CUSTOM,
                    predicate: () => t.type !== b && r && !x && !t.isModeratorReportChannel()
                }, {
                    section: L.p_A.INTEGRATIONS,
                    label: P.intl.string(P.t.s69NLF),
                    ariaLabel: P.intl.string(P.t.s69NLF),
                    element: w.A,
                    notice: {
                        stores: [y.A],
                        element: w.q
                    },
                    predicate: () => !(!d && !h || t.isModeratorReportChannel()) && A.oH.has(t.type)
                }, {
                    section: u.Fq.DIVIDER
                }, {
                    section: L.p_A.DELETE,
                    onClick() {
                        (0, T.O)(t, function() {
                            _._.subscribeOnce(L.jej.LAYER_POP_COMPLETE, () => {
                                (0, o.D3)(t.id)
                            }), (0, c.jH)()
                        })
                    },
                    label: j,
                    ariaLabel: j,
                    icon: (0, l.jsx)(s.ucK, {
                        size: "xs",
                        color: "currentColor"
                    }),
                    variant: "destructive",
                    predicate: () => a && !t.isModeratorReportChannel()
                }]
            }({
                channel: i,
                category: r,
                canManageRoles: a,
                canManageChannels: h,
                canDeleteChannels: f,
                canManageWebhooks: b,
                canUnlinkChannel: x
            })
        })
    }
}

function B() {
    let {
        channel: e,
        analyticsLocation: t
    } = (0, r.cf)([O.A], () => O.A.getProps()), n = (0, r.bG)([O.A], () => O.A.getFormState()), i = (0, r.bG)([O.A], () => O.A.getSection()), s = (0, r.bG)([j.A], () => j.A.theme), a = (0, b.NC)(), o = (0, x.NI)(e), c = (0, x.H_)(e), {
        canManageChannels: d,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: g
    } = (0, r.cf)([N.A], () => ({
        canManageChannels: N.A.can(L.xBc.MANAGE_CHANNELS, e),
        canManageRoles: null != e && N.A.can(L.xBc.MANAGE_ROLES, e),
        canManageWebhooks: null != e && N.A.can(L.xBc.MANAGE_WEBHOOKS, e),
        canUnlinkChannel: (0, f.n)(e, N.A)
    })), m = (0, r.bG)([C.A], () => C.A.getChannel(null == e ? void 0 : e.parent_id));
    return (0, l.jsx)(G, {
        channel: e,
        category: m,
        canManageChannels: (null == e ? void 0 : e.isThread()) ? o : d,
        canDeleteChannels: (null == e ? void 0 : e.isThread()) ? c : d,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: g,
        formState: n,
        theme: s,
        sidebarTheme: a,
        section: i,
        analyticsLocation: t
    })
}