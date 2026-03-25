/** chunk id: 551851 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    s = n(73153);
let r = {};

function l(e) {
    let {
        guildId: t,
        expand: n
    } = e;
    n ? r[t] = !0 : delete r[t]
}
class a extends i.Ay.PersistedStore {
    static displayName = "ChannelListVoiceCategoryStore";
    static persistKey = "ChannelListVoiceCategoryStore";
    initialize(e) {
        r = e ?? {}
    }
    isVoiceCategoryExpanded(e) {
        return (null != e && r[e]) ?? !1
    }
    isVoiceCategoryCollapsed(e) {
        return !this.isVoiceCategoryExpanded(e)
    }
    getState() {
        return r
    }
}
let d = new a(s.h, {
    VOICE_CATEGORY_COLLAPSE: l,
    VOICE_CATEGORY_EXPAND: l
})