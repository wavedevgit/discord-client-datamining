/** Chunk was on web.js **/
/** chunk id: 894010, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => s,
    b: () => o
});
var r = n(562465),
    i = n(73153),
    a = n(652215);

function o(e, t) {
    r.Bo.patch({
        url: a.Rsh.GAME_NOTIFICATION_SETTING_UPDATE(e),
        body: {
            muted: t
        },
        rejectWithError: !0
    }).then(e => {
        let {
            body: t
        } = e;
        i.h.dispatch({
            type: "REPLACE_GAME_MENTION_SETTINGS",
            settings: t
        })
    })
}
async function s() {
    await r.Bo.get({
        url: a.Rsh.GAME_NOTIFICATION_SETTINGS,
        rejectWithError: !0
    }).then(e => {
        let {
            body: t
        } = e;
        i.h.dispatch({
            type: "REPLACE_GAME_MENTION_SETTINGS",
            settings: t
        })
    })
}