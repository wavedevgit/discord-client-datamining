/** chunk id: 256331 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(311907),
    l = n(73153);
let r = !0;
class a extends i.Ay.DeviceSettingsStore {
    static displayName = "ConversationVisibilityStore";
    static persistKey = "ConversationVisibilityStore";
    initialize(e) {
        r = e?.highlightingEnabled ?? !0
    }
    isHighlightingEnabled() {
        return r
    }
    getState() {
        return {
            highlightingEnabled: r
        }
    }
    getUserAgnosticState() {
        return {
            highlightingEnabled: r
        }
    }
}
let s = new a(l.h, {
    CONVERSATIONS_TOGGLE_HIGHLIGHTING: function() {
        r = !r
    }
})