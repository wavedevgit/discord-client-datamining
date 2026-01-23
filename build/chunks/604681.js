/** Chunk was on web.js **/
/** chunk id: 604681, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var r = n(73153);
let i = {
    toggleMembersSection() {
        r.h.dispatch({
            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
        })
    },
    toggleUserProfileSidebarSection() {
        r.h.dispatch({
            type: "USER_PROFILE_SIDEBAR_TOGGLE_SECTION"
        })
    },
    toggleSummariesSection() {
        r.h.dispatch({
            type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
        })
    }
}