/** Chunk was on 98700 **/
/** chunk id: 422559, original params: e,n,t (module,exports,require) **/
t.r(n), t.d(n, {
    default: () => j
});
var l = t(627968),
    i = t(64700),
    r = t(311907),
    s = t(398590),
    o = t(83257),
    u = t(793574),
    a = t(58149),
    c = t(688810),
    E = t(460760),
    d = t(817818),
    I = t(591552),
    _ = t(225142),
    A = t(292572),
    S = t(122906),
    O = t(475723),
    N = t(887501),
    g = t(149280),
    G = t(97469),
    f = t(544028),
    T = t(447696),
    h = t(684407),
    b = t(808728),
    D = t(498642),
    M = t(576705),
    m = t(997509),
    C = t(555337),
    p = t(287479),
    R = t(110807),
    U = t(595818),
    v = t(652215),
    L = t(985018);

function y(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    a.Ay.trackWithMetadata(v.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t
    })
}
let w = {
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
class P extends i.PureComponent {
    componentDidMount() {
        y(this.props.section, null, this.props.analyticsLocation)
    }
    componentWillUnmount() {
        m.A.close()
    }
    componentDidUpdate(e) {
        let {
            section: n
        } = e, {
            section: t,
            isGuildAdmin: l,
            canManageGuild: i,
            canManageRoles: r,
            canManageBans: o,
            canManageNicknames: u,
            canManageGuildExpressions: a,
            canViewAuditLog: c,
            canManageWebhooks: E,
            canUnlinkChannels: d,
            canAccessMembersPage: I,
            canViewGuildAnalytics: _
        } = this.props;
        t !== n && y(t, n), (l || i || r || o || u || a || c || I || E || d) && (c || t !== v.BEX.AUDIT_LOG) && (r || t !== v.BEX.ROLES) && (a || t !== v.BEX.EMOJI) && (a || t !== v.BEX.STICKERS) && (a || t !== v.BEX.SOUNDBOARD) && (o || t !== v.BEX.BANS) && (_ || t !== v.BEX.ANALYTICS) && (I || t !== v.BEX.MEMBERS) || (0, s.jH)()
    }
    render() {
        var e, n;
        let {
            theme: t,
            sidebarTheme: i,
            section: r,
            guild: u,
            isGuildAdmin: a,
            canManageGuild: c,
            canViewAuditLog: E,
            canManageRoles: d,
            canManageGuildExpressions: I,
            canManageWebhooks: _,
            canUnlinkChannels: A,
            canManageBans: S,
            canAccessMembersPage: N,
            canViewGuildAnalytics: g,
            isOwner: G,
            isOwnerWithRequiredMfaLevel: f,
            showDirtyGuildTemplateIndicator: T,
            memberCount: h,
            onboardingStep: b,
            onboardingEnabled: D,
            welcomeScreenEmpty: M,
            guildMetadata: C,
            permissionMigrationAvailable: p
        } = this.props;
        if (null == u) return null;
        let v = (0, R.SB)({
                guild: u,
                isGuildAdmin: a,
                canManageGuild: c,
                canViewAuditLog: E,
                canManageRoles: d,
                canManageGuildExpressions: I,
                canManageWebhooks: _,
                canUnlinkChannels: A,
                canManageBans: S,
                canAccessMembersPage: N,
                canViewGuildAnalytics: g,
                isOwner: G,
                isOwnerWithRequiredMfaLevel: f,
                showDirtyGuildTemplateIndicator: T,
                memberCount: h,
                onboardingStep: b,
                onboardingEnabled: D,
                welcomeScreenEmpty: M,
                guildMetadata: C,
                section: r,
                permissionMigrationAvailable: p
            }),
            y = (null == (n = v.find(e => e.section === r)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            w = (0, U.x)();
        return (0, l.jsxs)("div", {
            children: [(0, l.jsx)(o.Ay, {
                theme: t,
                sidebarTheme: i,
                section: y && null != r ? r : w,
                onSetSection: m.A.setSection,
                onClose: s.jH,
                title: "" !== u.name ? u.name : L.intl.string(L.t["154/bL"]),
                sections: v
            }), (0, l.jsx)(O.w, {
                guildId: u.id
            })]
        })
    }
}

function j() {
    var e, n, t;
    let {
        guild: s,
        section: o,
        analyticsLocation: a,
        guildMetadata: O,
        isGuildMetadataLoaded: R
    } = (0, r.cf)([C.A], () => C.A.getProps()), {
        analyticsLocations: U
    } = (0, c.Ay)(u.A.GUILD_SETTINGS), L = (0, r.bG)([f.A], () => f.A.theme), y = (0, G.NC)(), j = (0, r.bG)([b.Ay], () => null != s ? b.Ay.getChannels(s.id).SELECTABLE : null, [s]), B = (0, r.cf)([M.A], () => null != s ? M.A.getGuildPermissionProps(s) : w), x = null == s ? void 0 : s.id, H = (0, r.bG)([M.A], () => null != s && M.A.canAccessGuildSettings(s));
    i.useEffect(() => {
        R || null == x || (0, E.mo)(x)
    }, [R, x]);
    let W = null != (e = null == s ? void 0 : s.features.has(v.GuildFeatures.COMMUNITY)) && e;
    i.useEffect(() => {
        null != x && W && ((0, d.jx)(x), (0, T.Fy)(x))
    }, [x, W]), i.useEffect(() => {
        null != x && (0, _.ag)(x)
    }, [x]);
    let F = (0, r.bG)([S.A], () => {
            var e;
            return (null == s ? void 0 : s.id) != null && (null == (e = S.A.getForGuild(s.id)) ? void 0 : e.isDirty) === !0
        }, [s]),
        k = (0, r.bG)([D.A], () => D.A.getMemberCount(null == s ? void 0 : s.id), [s]);
    i.useEffect(() => {
        null != x && B.canManageGuild && A.A.loadTemplatesForGuild(x)
    }, [x, B.canManageGuild]), i.useEffect(() => {
        H || m.A.close()
    }, [H]);
    let X = (0, r.bG)([p.A], () => p.A.getCurrentPage()),
        V = (0, r.bG)([I.A], () => null != x && I.A.getEnabled(x)),
        q = (0, r.bG)([h.A], () => null != x && h.A.isEmpty(x)),
        J = (0, N.A)(x).length > 0,
        K = (0, g.A)(s);
    return (0, l.jsx)(c.f5, {
        value: U,
        children: (0, l.jsx)(P, (n = function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    l = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), l.forEach(function(n) {
                    var l;
                    l = t[n], n in e ? Object.defineProperty(e, n, {
                        value: l,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = l
                })
            }
            return e
        }({
            guild: s,
            section: o,
            theme: L,
            sidebarTheme: y,
            channels: j,
            showDirtyGuildTemplateIndicator: F,
            analyticsLocation: a,
            memberCount: k
        }, B), t = t = {
            canUnlinkChannels: J,
            canViewGuildAnalytics: B.canViewGuildAnalytics,
            onboardingStep: X,
            onboardingEnabled: V,
            welcomeScreenEmpty: q,
            guildMetadata: O,
            permissionMigrationAvailable: K
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                t.push.apply(t, l)
            }
            return t
        })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
        }), n))
    })
}