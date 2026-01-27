/** Chunk was on web.js **/
/** chunk id: 146901, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    _: () => a
});
var r = n(985018);

function i(e, t) {
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
}

function a(e) {
    let t = new Date(Number(e)),
        n = i(t, new Date),
        a = new Date;
    a.setDate(a.getDate() + 1);
    let o = i(t, a),
        s = r.intl.data.formatTime(t, {
            format: "short"
        });
    return n ? {
        kind: "today",
        dateString: r.intl.data.formatRelativeTime(0, "day", {
            numeric: "auto"
        }),
        timeString: s
    } : o ? {
        kind: "tomorrow",
        dateString: r.intl.data.formatRelativeTime(1, "day", {
            numeric: "auto"
        }),
        timeString: s
    } : {
        kind: "date",
        dateString: r.intl.data.formatDate(t, {
            dateStyle: "short"
        }),
        timeString: s
    }
}