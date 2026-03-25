/** chunk id: 141850 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Eg: () => r,
    UA: () => a,
    WF: () => function e(t) {
        let {
            channelId: n,
            limit: r = 5,
            before: a,
            after: o,
            around: u
        } = t;
        if (i.h.isDispatching()) return void Promise.resolve().then(() => e({
            channelId: n,
            limit: r,
            before: a,
            after: o,
            around: u
        }));
        let c = null != u ? "around" : null != o ? "after" : "before";
        i.h.dispatch({
            type: "CONVERSATIONS_FETCH_START",
            channelId: n,
            direction: c
        });
        let d = {
            limit: r
        };
        null != a && (d.before = a), null != o && (d.after = o), null != u && (d.around = u), l.Bo.get({
            url: s.Rsh.CHANNEL_CONVERSATIONS(n),
            query: d,
            oldFormErrors: !0,
            rejectWithError: !0
        }).then(e => {
            let t = e.body;
            i.h.dispatch({
                type: "CONVERSATIONS_FETCH_SUCCESS",
                channelId: n,
                conversations: t.conversations,
                direction: c,
                beforeShortCircuited: t.before_short_circuited,
                afterShortCircuited: t.after_short_circuited,
                anchor: u ?? a ?? o
            })
        }, () => {
            i.h.dispatch({
                type: "CONVERSATIONS_FETCH_FAILURE",
                channelId: n
            })
        })
    },
    s4: () => function e(t, n) {
        i.h.isDispatching() ? Promise.resolve().then(() => e(t, n)) : i.h.dispatch({
            type: "CONVERSATIONS_SCROLL_TO",
            channelId: t,
            conversationId: n
        })
    }
});
var l = n(562465),
    i = n(73153),
    s = n(652215);

function r() {
    i.h.dispatch({
        type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING"
    })
}

function a(e, t) {
    i.h.dispatch({
        type: "CONVERSATIONS_HOVER_CONVERSATION",
        channelId: e,
        conversationId: t
    })
}