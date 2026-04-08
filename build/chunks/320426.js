/** chunk id: 320426 params = (module,exports,require) **/
r.d(t, {
    A: () => A
});
var i = r(64700),
    a = r(417597),
    s = r(562465),
    n = r(73153),
    l = r(58149),
    o = r(71393),
    c = r(576705),
    d = r(954571),
    _ = r(927813),
    h = r(381616),
    p = r(652215);
let D = +_.A.Millis.DAY,
    E = new Map,
    A = {
        useShouldShowChannelNotice(e) {
            let t = (0, a.bG)([o.A, c.A], () => {
                let t = o.A.getGuild(e);
                return null != t && c.A.can(p.xBc.ADMINISTRATOR, t)
            });
            i.useEffect(() => {
                let r, i;
                t && (r = Date.now(), r < (i = E.get(e) ?? 0) + D || (E.set(e, r), s.Bo.post({
                    url: p.Rsh.GUILD_MIGRATE_COMMAND_SCOPE(e),
                    rejectWithError: !0
                }).then(t => {
                    n.h.dispatch({
                        type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
                        guildId: e,
                        integrationIdsWithAppCommands: t.body?.integration_ids_with_app_commands ?? []
                    })
                }, () => {
                    E.set(e, i)
                })))
            }, [e, t]);
            let r = (0, a.bG)([h.A], () => h.A.shouldShowChannelNotice(e));
            return t && r
        },
        dismissNotice(e) {
            n.h.dispatch({
                type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
                guildId: e
            })
        },
        dismissOverviewTooltip(e, t) {
            n.h.dispatch({
                type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
                guildId: e,
                integrationId: t.id
            }), d.default.track(p.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                ...(0, l.H$)(e),
                application_id: t.application?.id,
                location: "overview"
            })
        },
        dismissToggleTooltip(e, t) {
            void 0 !== t && (n.h.dispatch({
                type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
                integrationId: t.id
            }), d.default.track(p.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                ...(0, l.H$)(e),
                application_id: t.application?.id,
                location: "toggle"
            }))
        }
    }