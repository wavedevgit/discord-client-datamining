/** Chunk was on web.js **/
/** chunk id: 541689, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ab: () => o,
    IR: () => c,
    SE: () => s,
    U$: () => l,
    Xw: () => a,
    rF: () => i
});
var r = n(73153);
let i = (e, t) => {
        r.h.dispatch({
            type: "DCF_HANDLE_DC_SHOWN",
            dismissibleContent: e,
            guildId: t
        })
    },
    a = e => {
        r.h.dispatch({
            type: "DCF_HANDLE_DC_DISMISSED",
            dismissibleContent: e
        })
    },
    o = () => {
        r.h.dispatch({
            type: "DCF_RESET"
        })
    },
    s = e => {
        r.h.dispatch({
            type: "DCF_DAILY_CAP_OVERRIDE",
            value: e
        })
    },
    l = e => {
        r.h.dispatch({
            type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE",
            value: e
        })
    },
    c = e => {
        r.h.dispatch({
            type: "DCF_OVERRIDE_LAST_DC_DISMISSED",
            dismissibleContent: e
        })
    }