/** chunk id: 422559, original params: e,n,t (module,exports,require) **/
t.r(n), t.d(n, {
    default: () => B
});
var l = t(627968),
    i = t(64700),
    r = t(311907),
    s = t(398590),
    u = t(83257),
    o = t(793574),
    a = t(58149),
    c = t(688810),
    E = t(460760),
    d = t(817818),
    _ = t(591552),
    A = t(225142),
    I = t(292572),
    S = t(122906),
    O = t(475723),
    N = t(887501),
    g = t(149280),
    G = t(97469),
    T = t(544028),
    f = t(447696),
    h = t(684407),
    b = t(808728),
    D = t(498642),
    M = t(576705),
    m = t(997509),
    C = t(555337),
    p = t(287479),
    R = t(110807),
    U = t(595818),
    w = t(652215),
    y = t(985018);

function L(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    a.Ay.trackWithMetadata(w.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t
    })
}
let v = {
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
        L(this.props.section, null, this.props.analyticsLocation)
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
            canManageBans: u,
            canManageNicknames: o,
            canManageGuildExpressions: a,
            canViewAuditLog: c,
            canManageWebhooks: E,
            canUnlinkChannels: d,
            canAccessMembersPage: _,
            canViewGuildAnalytics: A
        } = this.props;
        t !== n && L(t, n), (l || i || r || u || o || a || c || _ || E || d) && (c || t !== w.BEX.AUDIT_LOG) && (r || t !== w.BEX.ROLES) && (a || t !== w.BEX.EMOJI) && (a || t !== w.BEX.STICKERS) && (a || t !== w.BEX.SOUNDBOARD) && (u || t !== w.BEX.BANS) && (A || t !== w.BEX.ANALYTICS) && (_ || t !== w.BEX.MEMBERS) || (0, s.jH)()
    }
    render() {
        var e, n;
        let {
            theme: t,
            sidebarTheme: i,
            section: r,
            guild: o,
            isGuildAdmin: a,
            canManageGuild: c,
            canViewAuditLog: E,
            canManageRoles: d,
            canManageGuildExpressions: _,
            canManageWebhooks: A,
            canUnlinkChannels: I,
            canManageBans: S,
            canAccessMembersPage: N,
            canViewGuildAnalytics: g,
            isOwner: G,
            isOwnerWithRequiredMfaLevel: T,
            showDirtyGuildTemplateIndicator: f,
            memberCount: h,
            onboardingStep: b,
            onboardingEnabled: D,
            welcomeScreenEmpty: M,
            guildMetadata: C,
            permissionMigrationAvailable: p
        } = this.props;
        if (null == o) return null;
        let w = (0, R.SB)({
                guild: o,
                isGuildAdmin: a,
                canManageGuild: c,
                canViewAuditLog: E,
                canManageRoles: d,
                canManageGuildExpressions: _,
                canManageWebhooks: A,
                canUnlinkChannels: I,
                canManageBans: S,
                canAccessMembersPage: N,
                canViewGuildAnalytics: g,
                isOwner: G,
                isOwnerWithRequiredMfaLevel: T,
                showDirtyGuildTemplateIndicator: f,
                memberCount: h,
                onboardingStep: b,
                onboardingEnabled: D,
                welcomeScreenEmpty: M,
                guildMetadata: C,
                section: r,
                permissionMigrationAvailable: p
            }),
            L = (null == (n = w.find(e => e.section === r)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            v = (0, U.x)();
        return (0, l.jsxs)("div", {
            children: [(0, l.jsx)(u.Ay, {
                theme: t,
                sidebarTheme: i,
                section: L && null != r ? r : v,
                onSetSection: m.A.setSection,
                onClose: s.jH,
                title: "" !== o.name ? o.name : y.intl.string(y.t["154/bL"]),
                sections: w
            }), (0, l.jsx)(O.w, {
                guildId: o.id
            })]
        })
    }
}

function B() {
    var e, n, t;
    let {
        guild: s,
        section: u,
        analyticsLocation: a,
        guildMetadata: O,
        isGuildMetadataLoaded: R
    } = (0, r.cf)([C.A], () => C.A.getProps()), {
        analyticsLocations: U
    } = (0, c.Ay)(o.A.GUILD_SETTINGS), y = (0, r.bG)([T.A], () => T.A.theme), L = (0, G.NC)(), B = (0, r.bG)([b.Ay], () => null != s ? b.Ay.getChannels(s.id).SELECTABLE : null, [s]), j = (0, r.cf)([M.A], () => null != s ? M.A.getGuildPermissionProps(s) : v), H = null == s ? void 0 : s.id, x = (0, r.bG)([M.A], () => null != s && M.A.canAccessGuildSettings(s));
    i.useEffect(() => {
        R || null == H || (0, E.mo)(H)
    }, [R, H]);
    let W = null != (e = null == s ? void 0 : s.features.has(w.GuildFeatures.COMMUNITY)) && e;
    i.useEffect(() => {
        null != H && W && ((0, d.jx)(H), (0, f.Fy)(H))
    }, [H, W]), i.useEffect(() => {
        null != H && (0, A.ag)(H)
    }, [H]);
    let k = (0, r.bG)([S.A], () => {
            var e;
            return (null == s ? void 0 : s.id) != null && (null == (e = S.A.getForGuild(s.id)) ? void 0 : e.isDirty) === !0
        }, [s]),
        F = (0, r.bG)([D.A], () => D.A.getMemberCount(null == s ? void 0 : s.id), [s]);
    i.useEffect(() => {
        null != H && j.canManageGuild && I.A.loadTemplatesForGuild(H)
    }, [H, j.canManageGuild]), i.useEffect(() => {
        x || m.A.close()
    }, [x]);
    let X = (0, r.bG)([p.A], () => p.A.getCurrentPage()),
        V = (0, r.bG)([_.A], () => null != H && _.A.getEnabled(H)),
        q = (0, r.bG)([h.A], () => null != H && h.A.isEmpty(H)),
        J = (0, N.A)(H).length > 0,
        Y = (0, g.A)(s);
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
            section: u,
            theme: y,
            sidebarTheme: L,
            channels: B,
            showDirtyGuildTemplateIndicator: k,
            analyticsLocation: a,
            memberCount: F
        }, j), t = t = {
            canUnlinkChannels: J,
            canViewGuildAnalytics: j.canViewGuildAnalytics,
            onboardingStep: X,
            onboardingEnabled: V,
            welcomeScreenEmpty: q,
            guildMetadata: O,
            permissionMigrationAvailable: Y
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