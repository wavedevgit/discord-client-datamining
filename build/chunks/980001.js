/** chunk id: 980001 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(735438),
    l = n.n(i),
    r = n(626584),
    a = n(543465),
    s = n(723176);
let o = new r.A("ReadStates"),
    d = new class {
        async getAll(e) {
            let t = performance.now(),
                n = await s.A.userGuildSettings(e).getMany(),
                i = performance.now();
            return o.log(`asynchronously loaded in ${i-t}ms (userGuildSettings: ${n.length})`), n
        }
        actions = {
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t)
        };
        resetInMemoryState() {}
        handleConnectionOpen(e, t) {
            e.userGuildSettings.partial || s.A.userGuildSettingsTransaction(t).delete(), this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t)
        }
        handleUserGuildSettingsUpdate(e, t) {
            let n = l().max(e.userGuildSettings.map(e => e.version ?? -1));
            null != n && this.write(e.userGuildSettings, n, t)
        }
        write(e, t, n) {
            let i = s.A.userGuildSettingsTransaction(n);
            for (let t of e) {
                let e = {
                    ...(0, a.wn)(t.guild_id),
                    ...t,
                    channel_overrides: (0, a.b5)(t.channel_overrides)
                };
                i.put(t.guild_id ?? "dm-sentinel", e)
            }
            s.A.nonGuildVersionsTransaction(n).put({
                id: "user_guild_settings_version",
                version: t
            })
        }
    }