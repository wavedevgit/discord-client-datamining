/** chunk id: 980001, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(735438),
    s = n.n(i),
    a = n(626584),
    l = n(543465),
    r = n(723176);
let o = new a.A("ReadStates"),
    c = new class {
        async getAll(e) {
            let t = performance.now(),
                n = await r.A.userGuildSettings(e).getMany(),
                i = performance.now();
            return o.log(`asynchronously loaded in ${i-t}ms (userGuildSettings: ${n.length})`), n
        }
        actions = {
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t)
        };
        resetInMemoryState() {}
        handleConnectionOpen(e, t) {
            e.userGuildSettings.partial || r.A.userGuildSettingsTransaction(t).delete(), this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t)
        }
        handleUserGuildSettingsUpdate(e, t) {
            let n = s().max(e.userGuildSettings.map(e => e.version ?? -1));
            null != n && this.write(e.userGuildSettings, n, t)
        }
        write(e, t, n) {
            let i = r.A.userGuildSettingsTransaction(n);
            for (let t of e) {
                let e = {
                    ...(0, l.wn)(t.guild_id),
                    ...t,
                    channel_overrides: (0, l.b5)(t.channel_overrides)
                };
                i.put(t.guild_id ?? "dm-sentinel", e)
            }
            r.A.nonGuildVersionsTransaction(n).put({
                id: "user_guild_settings_version",
                version: t
            })
        }
    }