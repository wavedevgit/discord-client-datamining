/** chunk id: 558393 params = (module,exports,require) **/
e.d(i, {
    A: () => p
});
var n = e(936555),
    E = e(853742),
    r = e(979816),
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
    M = e(737045),
    d = e(985018);

function I(t) {
    let i = (0, a.Y)(t),
        E = N.A.getGuild(t),
        r = null != E && (0, n.w)(E),
        s = (0, o.K)({
            location: "getPermissionOptions"
        });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: d.intl.format(d.t.j66HgY, {
            keybind: d.intl.string(d.t.DkSwJ2),
            onClick: () => {
                {
                    let {
                        openUserSettings: t
                    } = e(858897);
                    t(g.X.KEYBINDS_PANEL)
                }
            }
        }),
        SOUNDBOARD_DESCRIPTION: d.intl.format(d.t.fVE8y8, {
            helpCenterArticle: x.A.getArticleURL(T.MVz.SOUNDBOARD)
        }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: r,
        inSoundmojiExperiment: s
    }
}

function D(t, i) {
    return 0 === i.size ? t : t.map(t => ({
        ...t,
        permissions: t.permissions.filter(t => !i.has(t.flag.toString()))
    }))
}
let p = {
    generateChannelPermissionSpec: function(t, i, e, n) {
        var o, a, g, x;
        let p, O = (0, M.mW)(i, e, n),
            c = I(t),
            R = _.io.getCurrentConfig({
                guildId: t,
                location: "3ad37d_1"
            }).enabled && B.p6.has(i.type),
            C = (0, A.Bw)(t),
            u = (0, r.i_)(t),
            h = i.isMediaChannel(),
            f = new Set,
            L = N.A.getGuild(t);
        L?.features.has(T.GuildFeatures.VERIFIED) && S.A.getCurrentConfig({
            guildId: t,
            location: "generateChannelPermissionSpec"
        }).enabled || f.add(T.xBc.MANAGE_OFFICIAL_MESSAGES.toString());
        let {
            inSoundmojiExperiment: G
        } = c;
        switch (i.type) {
            case T.rbe.GUILD_CATEGORY:
                p = [l.mL(O, d.intl.string(d.t["AkPxc+"])), l.m6(O, d.intl.string(d.t.Ny49TN)), l.BK(O, d.intl.string(d.t.cKobO5), {
                    showPrivateThreads: !0,
                    showCreateThreads: !0,
                    inSoundmojiExperiment: G
                }), l.iG(O, d.intl.string(d.t["46Ra1b"])), l.Si(O, d.intl.string(d.t["rrh/W6"])), ...(o = c.showStageChannelPermissions, a = () => l.qI(O, d.intl.string(d.t.yniauk)), o ? [a()] : []), l.xd(O, d.intl.string(d.t.b8lplT))];
                break;
            case T.rbe.GUILD_VOICE:
                p = [l.mL(O, d.intl.string(d.t.ouHggI), {
                    showManageWebhooks: !0
                }), l.m6(O, d.intl.string(d.t.Ny49TN)), l.iG(O, d.intl.string(d.t["46Ra1b"])), l.k6(O, d.intl.string(d.t.iqlsnD), {
                    sectionDescription: u ? d.intl.format(d.t["4Z9Fbb"], {
                        setUpAutomod: () => {
                            s.A.open(t, T.BEX.GUILD_AUTOMOD)
                        }
                    }) : void 0,
                    inSoundmojiExperiment: G
                }), l.xd(O, d.intl.string(d.t.b8lplT)), l.Si(O, d.intl.string(d.t["rrh/W6"]))];
                break;
            case T.rbe.GUILD_STAGE_VOICE:
                p = [l.mL(O, d.intl.string(d.t.ouHggI), {
                    showManageWebhooks: !1
                }), l.m6(O, d.intl.string(d.t.Ny49TN)), l.od(O, d.intl.string(d.t["46Ra1b"]), C), l.qI(O, d.intl.string(d.t.yniauk)), l.xd(O, d.intl.string(d.t.b8lplT)), l.k6(O, d.intl.string(d.t.iqlsnD), {
                    sectionDescription: u ? d.intl.format(d.t["4Z9Fbb"], {
                        setUpAutomod: () => {
                            s.A.open(t, T.BEX.GUILD_AUTOMOD)
                        }
                    }) : void 0,
                    inSoundmojiExperiment: G
                }), l.Si(O, d.intl.string(d.t["rrh/W6"]), {
                    showActivities: !1
                })];
                break;
            case T.rbe.GUILD_FORUM:
            case T.rbe.GUILD_MEDIA: {
                let i = h ? d.intl.string(d.t.aSjPgw) : d.intl.string(d.t.TS7Cnb),
                    e = h ? d.t.YjJTtH : d.t["1MTnqY"];
                p = [l.mL(O, d.intl.string(d.t.ouHggI)), l.m6(O, d.intl.string(d.t.Ny49TN)), l.BK(O, i, {
                    showPrivateThreads: !1,
                    showCreateThreads: !1,
                    sectionDescription: u ? d.intl.format(e, {
                        setUpAutomod: () => {
                            h || (0, E.El)(), s.A.open(t, T.BEX.GUILD_AUTOMOD)
                        }
                    }) : void 0,
                    inSoundmojiExperiment: G
                }), l.Si(O, d.intl.string(d.t["rrh/W6"])), ...(g = () => l.iG(O, d.intl.string(d.t["46Ra1b"])), R ? [g()] : [])];
                break
            }
            default:
                p = [l.mL(O, d.intl.string(d.t.ouHggI)), l.m6(O, d.intl.string(d.t.Ny49TN)), l.BK(O, d.intl.string(d.t.cKobO5), {
                    showPrivateThreads: i.type !== T.rbe.GUILD_ANNOUNCEMENT,
                    showCreateThreads: !0,
                    inSoundmojiExperiment: G
                }), l.Si(O, d.intl.string(d.t["rrh/W6"])), ...(x = () => l.iG(O, d.intl.string(d.t["46Ra1b"])), R ? [x()] : [])]
        }
        return D(p, f)
    },
    generateGuildPermissionSpec: function(t) {
        let i = new Set;
        return t.features.has(T.GuildFeatures.COMMUNITY) || i.add(T.xBc.VIEW_GUILD_ANALYTICS.toString()), t.features.has(T.GuildFeatures.VERIFIED) && S.A.getCurrentConfig({
            guildId: t.id,
            location: "generateGuildPermissionSpec"
        }).enabled || i.add(T.xBc.MANAGE_OFFICIAL_MESSAGES.toString()), D(l.LZ(I(t.id)), i)
    },
    getGuildPermissionSpecMap: function(t) {
        return l.eD(I(t.id))
    }
}