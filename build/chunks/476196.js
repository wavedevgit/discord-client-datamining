/** chunk id: 476196 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(735438),
    a = n.n(i),
    r = n(626584),
    l = n(617617),
    s = n(961350),
    o = n(723176),
    d = n(989950);
let c = new r.A("UserSettingsProto");
class u {
    actions = {
        CONNECTION_OPEN: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange()
    };
    async getAll(e) {
        let t = performance.now(),
            n = await o.A.userSettings(e).getMany(),
            i = performance.now();
        c.verbose(`loaded in ${i-t}ms (settings: ${n.length})`);
        let a = {};
        for (let e of n) a[e.id] = e.value;
        return a
    }
    handleUserSettingsProtoChange = () => {
        let e = s.default.getId(),
            t = d.A.database(e);
        t?.transaction(e => {
            let t = l.A.computeState(),
                n = o.A.userSettingsTransaction(e);
            for (let e in t) n.put({
                id: Number(e),
                value: t[e]
            });
            let i = l.A.settings.versions?.dataVersion ?? -1;
            o.A.nonGuildVersionsTransaction(e).put({
                id: "user_settings_version",
                version: i
            })
        }, "handleUserSettingsProtoChange")
    };
    throttledOnChange = a().debounce(this.handleUserSettingsProtoChange, 0);
    resetInMemoryState() {}
}
let A = new u