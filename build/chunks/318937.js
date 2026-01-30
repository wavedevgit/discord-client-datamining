/** chunk id: 318937, original params: e,t,n (module,exports,require) **/
n.d(t, {
    MH: () => f,
    Nm: () => m,
    Ol: () => _,
    RB: () => p,
    Rl: () => g,
    W9: () => d,
    ZW: () => c,
    bI: () => h,
    d4: () => u,
    dk: () => s
});
var r = n(158390),
    l = n(562465),
    i = n(73153),
    a = n(134753),
    o = n(652215);

function s(e, t, n, r, l) {
    i.h.dispatch({
        type: "SHARED_CANVAS_DRAW_LINE_POINT",
        channelId: e,
        userId: n,
        lineId: t,
        streamerId: r,
        point: l
    })
}

function c(e, t, n, r) {
    return l.Bo.post({
        url: o.Rsh.SHARED_CANVAS_LINES(e, n),
        body: {
            line_id: t,
            points: r
        },
        rejectWithError: !1
    })
}

function u(e, t, n, r) {
    i.h.dispatch({
        type: "SHARED_CANVAS_UPDATE_LINE_POINTS",
        userId: t,
        lineId: e,
        newPoints: r,
        streamerId: n
    })
}

function d(e, t, n) {
    return l.Bo.post({
        url: o.Rsh.SHARED_CANVAS_EMOJI_HOSES(e, t),
        body: {
            emoji_hose: n
        },
        rejectWithError: !1
    })
}

function f(e, t, n) {
    l.Bo.del({
        url: o.Rsh.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
        backoff: new r.A,
        rejectWithError: !0
    })
}

function p(e, t) {
    t.state = a.B.STOP, i.h.dispatch({
        type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
        emojiHose: t,
        userId: t.userId,
        streamerId: e
    })
}

function g(e, t, n) {
    i.h.dispatch({
        type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
        emojiHose: e,
        userId: t,
        streamerId: n
    })
}

function m(e, t) {
    i.h.dispatch({
        type: "SHARED_CANVAS_CLEAR_DRAWABLES",
        drawables: e,
        streamerId: t
    })
}

function _(e) {
    i.h.dispatch({
        type: "SHARED_CANVAS_SET_DRAW_MODE",
        drawMode: e
    })
}

function h() {
    i.h.dispatch({
        type: "TOGGLE_OVERLAY_CANVAS"
    })
}