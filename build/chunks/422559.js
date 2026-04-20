/** chunk id: 422559 params = (module,exports,require) **/
t.r(n), t.d(n, {
    default: () => P
});
var l = t(627968),
    i = t(64700),
    s = t(311907),
    a = t(398590),
    r = t(83257),
    c = t(793574),
    u = t(58149),
    o = t(688810),
    E = t(460760),
    _ = t(817818),
    A = t(591552),
    S = t(225142),
    d = t(292572),
    I = t(122906),
    N = t(475723),
    G = t(887501),
    T = t(97469),
    g = t(544028),
    h = t(225315),
    D = t(684407),
    C = t(808728),
    O = t(498642),
    M = t(576705),
    f = t(997509),
    m = t(555337),
    U = t(287479),
    R = t(110807),
    b = t(595818),
    L = t(652215),
    p = t(985018);

function w(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    u.Ay.trackWithMetadata(L.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t
    })
}
let B = {
    canManageGuild: !1,
    canManageChannels: !1,
    canManageRoles: !1,
    canManageBans: !1,
    canManageNicknames: !1,
    canManageGuildExpressions: !1,
    canViewAuditLog: !1,
    canManageWebhooks: !1,
    canAccessMembersPage: !1,
    canViewGuildAnalytics: !1,
    isOwner: !1,
    isOwnerWithRequiredMfaLevel: !1,
    isGuildAdmin: !1
};
class y extends i.PureComponent {
    componentDidMount() {
        w(this.props.section, null, this.props.analyticsLocation)
    }
    componentWillUnmount() {
        f.A.close()
    }
    componentDidUpdate(e) {
        let {
            section: n
        } = e, {
            section: t,
            isGuildAdmin: l,
            canManageGuild: i,
            canManageRoles: s,
            canManageBans: r,
            canManageNicknames: c,
            canManageGuildExpressions: u,
            canViewAuditLog: o,
            canManageWebhooks: E,
            canUnlinkChannels: _,
            canAccessMembersPage: A,
            canViewGuildAnalytics: S
        } = this.props;
        t !== n && w(t, n), (l || i || s || r || c || u || o || A || E || _ || S) && (o || t !== L.BEX.AUDIT_LOG) && (s || t !== L.BEX.ROLES) && (u || t !== L.BEX.EMOJI) && (u || t !== L.BEX.STICKERS) && (u || t !== L.BEX.SOUNDBOARD) && (r || t !== L.BEX.BANS) && (A || t !== L.BEX.MEMBERS) || (0, a.jH)()
    }
    render() {
        let {
            theme: e,
            sidebarTheme: n,
            section: t,
            guild: i,
            isGuildAdmin: s,
            canManageGuild: c,
            canViewAuditLog: u,
            canManageRoles: o,
            canManageGuildExpressions: E,
            canManageWebhooks: _,
            canUnlinkChannels: A,
            canManageBans: S,
            canAccessMembersPage: d,
            canViewGuildAnalytics: I,
            isOwner: G,
            isOwnerWithRequiredMfaLevel: T,
            showDirtyGuildTemplateIndicator: g,
            memberCount: h,
            onboardingStep: D,
            onboardingEnabled: C,
            welcomeScreenEmpty: O,
            guildMetadata: M
        } = this.props;
        if (null == i) return null;
        let m = (0, R.SB)({
                guild: i,
                isGuildAdmin: s,
                canManageGuild: c,
                canViewAuditLog: u,
                canManageRoles: o,
                canManageGuildExpressions: E,
                canManageWebhooks: _,
                canUnlinkChannels: A,
                canManageBans: S,
                canAccessMembersPage: d,
                canViewGuildAnalytics: I,
                isOwner: G,
                isOwnerWithRequiredMfaLevel: T,
                showDirtyGuildTemplateIndicator: g,
                memberCount: h,
                onboardingStep: D,
                onboardingEnabled: C,
                welcomeScreenEmpty: O,
                guildMetadata: M,
                section: t
            }),
            U = m.find(e => e.section === t)?.predicate?.() !== !1,
            L = (0, b.x)();
        return (0, l.jsxs)("div", {
            children: [(0, l.jsx)(r.Ay, {
                theme: e,
                sidebarTheme: n,
                section: U && null != t ? t : L,
                onSetSection: f.A.setSection,
                onClose: a.jH,
                title: "" !== i.name ? i.name : p.intl.string(p.t["154/bL"]),
                sections: m
            }), (0, l.jsx)(N.w, {
                guildId: i.id
            })]
        })
    }
}

function P() {
    let {
        guild: e,
        section: n,
        analyticsLocation: t,
        guildMetadata: a,
        isGuildMetadataLoaded: r
    } = (0, s.cf)([m.A], () => m.A.getProps()), {
        analyticsLocations: u
    } = (0, o.Ay)(c.A.GUILD_SETTINGS), N = (0, s.bG)([g.A], () => g.A.theme), R = (0, T.NC)(), b = (0, s.bG)([C.Ay], () => null != e ? C.Ay.getChannels(e.id).SELECTABLE : null, [e]), p = (0, s.cf)([M.A], () => null != e ? M.A.getGuildPermissionProps(e) : B), w = e?.id, P = (0, s.bG)([M.A], () => null != e && M.A.canAccessGuildSettings(e));
    i.useEffect(() => {
        r || null == w || (0, E.mo)(w)
    }, [r, w]);
    let j = e?.features.has(L.GuildFeatures.COMMUNITY) ?? !1;
    i.useEffect(() => {
        null != w && j && ((0, _.jx)(w), (0, h.Fy)(w))
    }, [w, j]), i.useEffect(() => {
        null != w && (0, S.ag)(w)
    }, [w]);
    let H = (0, s.bG)([I.A], () => e?.id != null && I.A.getForGuild(e.id)?.isDirty === !0, [e]),
        W = (0, s.bG)([O.A], () => O.A.getMemberCount(e?.id), [e]);
    i.useEffect(() => {
        null != w && p.canManageGuild && d.A.loadTemplatesForGuild(w)
    }, [w, p.canManageGuild]), i.useEffect(() => {
        P || f.A.close()
    }, [P]);
    let x = (0, s.bG)([U.A], () => U.A.getCurrentPage()),
        k = (0, s.bG)([A.A], () => null != w && A.A.getEnabled(w)),
        v = (0, s.bG)([D.A], () => null != w && D.A.isEmpty(w)),
        F = (0, G.A)(w).length > 0;
    return (0, l.jsx)(o.f5, {
        value: u,
        children: (0, l.jsx)(y, {
            guild: e,
            section: n,
            theme: N,
            sidebarTheme: R,
            channels: b,
            showDirtyGuildTemplateIndicator: H,
            analyticsLocation: t,
            memberCount: W,
            ...p,
            canUnlinkChannels: F,
            canViewGuildAnalytics: p.canViewGuildAnalytics,
            onboardingStep: x,
            onboardingEnabled: k,
            welcomeScreenEmpty: v,
            guildMetadata: a
        })
    })
}