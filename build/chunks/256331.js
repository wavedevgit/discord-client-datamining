/** chunk id: 256331 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
});
var l = n(311907),
    i = n(73153);
let s = !0;
class a extends l.Ay.DeviceSettingsStore {
    static displayName = "ConversationVisibilityStore";
    static persistKey = "ConversationVisibilityStore";
    initialize(e) {
        s = e?.highlightingEnabled ?? !0
    }
    isHighlightingEnabled() {
        return s
    }
    getState() {
        return {
            highlightingEnabled: s
        }
    }
    getUserAgnosticState() {
        return {
            highlightingEnabled: s
        }
    }
}
let r = new a(i.h, {
    CONVERSATIONS_TOGGLE_HIGHLIGHTING: function() {
        s = !s
    }
})