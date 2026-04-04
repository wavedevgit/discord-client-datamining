/** chunk id: 558393 params = (module,exports,require) **/
e.d(i, {
    A: () => D
});
var n = e(936555),
    r = e(853742),
    E = e(979816),
    s = e(997509),
    S = e(472282),
    l = e(225419),
    o = e(864145),
    A = e(96566),
    a = e(284738),
    _ = e(406704),
    g = e(780964),
    B = e(95701),
    N = e(71393),
    x = e(975571),
    T = e(652215),
    d = e(737045),
    M = e(985018);

function p(t) {
    let i = (0, a.Y)(t),
        r = N.A.getGuild(t),
        E = null != r && (0, n.w)(r),
        s = (0, o.K)({
            location: "getPermissionOptions"
        });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: M.intl.format(M.t.j66HgY, {
            keybind: M.intl.string(M.t.DkSwJ2),
            onClick: () => {
                {
                    let {
                        openUserSettings: t
                    } = e(858897);
                    t(g.X.KEYBINDS_PANEL)
                }
            }
        }),
        SOUNDBOARD_DESCRIPTION: M.intl.format(M.t.fVE8y8, {
            helpCenterArticle: x.A.getArticleURL(T.MVz.SOUNDBOARD)
        }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: E,
        inSoundmojiExperiment: s
    }
}

function I(t, i) {
    return 0 === i.size ? t : t.map(t => ({
        ...t,
        permissions: t.permissions.filter(t => !i.has(t.flag.toString()))
    }))
}
let D = {
    generateChannelPermissionSpec: function(t, i, e, n) {
        var o, a, g, x;
        let D, c = (0, d.mW)(i, e, n),
            O = p(t),
            R = _.io.getCurrentConfig({
                guildId: t,
                location: "3ad37d_1"
            }).enabled && B.p6.has(i.type),
            u = (0, A.Bw)(t),
            h = (0, E.i_)(t),
            f = i.isMediaChannel(),
            C = new Set,
            L = N.A.getGuild(t);
        L?.features.has(T.GuildFeatures.VERIFIED) && S.A.getCurrentConfig({
            guildId: t,
            location: "generateChannelPermissionSpec"
        }).enabled || C.add(T.xBc.MANAGE_OFFICIAL_MESSAGES.toString());
        let {
            inSoundmojiExperiment: G
        } = O;
        switch (i.type) {
            case T.rbe.GUILD_CATEGORY:
                D = [l.mL(c, M.intl.string(M.t["AkPxc+"])), l.m6(c, M.intl.string(M.t.Ny49TN)), l.BK(c, M.intl.string(M.t.cKobO5), {
                    showPrivateThreads: !0,
                    showCreateThreads: !0,
                    inSoundmojiExperiment: G
                }), l.iG(c, M.intl.string(M.t["46Ra1b"])), l.Si(c, M.intl.string(M.t["rrh/W6"])), ...(o = O.showStageChannelPermissions, a = () => l.qI(c, M.intl.string(M.t.yniauk)), o ? [a()] : []), l.xd(c, M.intl.string(M.t.b8lplT))];
                break;
            case T.rbe.GUILD_VOICE:
                D = [l.mL(c, M.intl.string(M.t.ouHggI), {
                    showManageWebhooks: !0
                }), l.m6(c, M.intl.string(M.t.Ny49TN)), l.iG(c, M.intl.string(M.t["46Ra1b"])), l.k6(c, M.intl.string(M.t.iqlsnD), {
                    sectionDescription: h ? M.intl.format(M.t["4Z9Fbb"], {
                        setUpAutomod: () => {
                            s.A.open(t, T.BEX.GUILD_AUTOMOD)
                        }
                    }) : void 0,
                    inSoundmojiExperiment: G
                }), l.xd(c, M.intl.string(M.t.b8lplT)), l.Si(c, M.intl.string(M.t["rrh/W6"]))];
                break;
            case T.rbe.GUILD_STAGE_VOICE:
                D = [l.mL(c, M.intl.string(M.t.ouHggI), {
                    showManageWebhooks: !1
                }), l.m6(c, M.intl.string(M.t.Ny49TN)), l.od(c, M.intl.string(M.t["46Ra1b"]), u), l.qI(c, M.intl.string(M.t.yniauk)), l.xd(c, M.intl.string(M.t.b8lplT)), l.k6(c, M.intl.string(M.t.iqlsnD), {
                    sectionDescription: h ? M.intl.format(M.t["4Z9Fbb"], {
                        setUpAutomod: () => {
                            s.A.open(t, T.BEX.GUILD_AUTOMOD)
                        }
                    }) : void 0,
                    inSoundmojiExperiment: G
                }), l.Si(c, M.intl.string(M.t["rrh/W6"]), {
                    showActivities: !1
                })];
                break;
            case T.rbe.GUILD_FORUM:
            case T.rbe.GUILD_MEDIA: {
                let i = f ? M.intl.string(M.t.aSjPgw) : M.intl.string(M.t.TS7Cnb),
                    e = f ? M.t.YjJTtH : M.t["1MTnqY"];
                D = [l.mL(c, M.intl.string(M.t.ouHggI)), l.m6(c, M.intl.string(M.t.Ny49TN)), l.BK(c, i, {
                    showPrivateThreads: !1,
                    showCreateThreads: !1,
                    sectionDescription: h ? M.intl.format(e, {
                        setUpAutomod: () => {
                            f || (0, r.El)(), s.A.open(t, T.BEX.GUILD_AUTOMOD)
                        }
                    }) : void 0,
                    inSoundmojiExperiment: G
                }), l.Si(c, M.intl.string(M.t["rrh/W6"])), ...(g = () => l.iG(c, M.intl.string(M.t["46Ra1b"])), R ? [g()] : [])];
                break
            }
            default:
                D = [l.mL(c, M.intl.string(M.t.ouHggI)), l.m6(c, M.intl.string(M.t.Ny49TN)), l.BK(c, M.intl.string(M.t.cKobO5), {
                    showPrivateThreads: i.type !== T.rbe.GUILD_ANNOUNCEMENT,
                    showCreateThreads: !0,
                    inSoundmojiExperiment: G
                }), l.Si(c, M.intl.string(M.t["rrh/W6"])), ...(x = () => l.iG(c, M.intl.string(M.t["46Ra1b"])), R ? [x()] : [])]
        }
        return I(D, C)
    },
    generateGuildPermissionSpec: function(t) {
        let i = new Set;
        return t.features.has(T.GuildFeatures.COMMUNITY) || i.add(T.xBc.VIEW_GUILD_ANALYTICS.toString()), t.features.has(T.GuildFeatures.VERIFIED) && S.A.getCurrentConfig({
            guildId: t.id,
            location: "generateGuildPermissionSpec"
        }).enabled || i.add(T.xBc.MANAGE_OFFICIAL_MESSAGES.toString()), I(l.LZ(p(t.id)), i)
    },
    getGuildPermissionSpecMap: function(t) {
        return l.eD(p(t.id))
    }
}