/** chunk id: 476196 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(735438),
    s = n.n(i),
    l = n(626584),
    a = n(617617),
    r = n(961350),
    o = n(723176),
    d = n(989950);
let c = new l.A("UserSettingsProto");
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
        let s = {};
        for (let e of n) s[e.id] = e.value;
        return s
    }
    handleUserSettingsProtoChange = () => {
        let e = r.default.getId(),
            t = d.A.database(e);
        t?.transaction(e => {
            let t = a.A.computeState(),
                n = o.A.userSettingsTransaction(e);
            for (let e in t) n.put({
                id: Number(e),
                value: t[e]
            });
            let i = a.A.settings.versions?.dataVersion ?? -1;
            o.A.nonGuildVersionsTransaction(e).put({
                id: "user_settings_version",
                version: i
            })
        }, "handleUserSettingsProtoChange")
    };
    throttledOnChange = s().debounce(this.handleUserSettingsProtoChange, 0);
    resetInMemoryState() {}
}
let _ = new u