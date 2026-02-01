/** chunk id: 318937, original params: e,t,n (module,exports,require) **/
n.d(t, {
    MH: () => h,
    Nm: () => m,
    Ol: () => g,
    RB: () => p,
    Rl: () => f,
    W9: () => d,
    ZW: () => c,
    bI: () => A,
    d4: () => u,
    dk: () => o
});
var l = n(158390),
    r = n(562465),
    i = n(73153),
    a = n(134753),
    s = n(652215);

function o(e, t, n, l, r) {
    i.h.dispatch({
        type: "SHARED_CANVAS_DRAW_LINE_POINT",
        channelId: e,
        userId: n,
        lineId: t,
        streamerId: l,
        point: r
    })
}

function c(e, t, n, l) {
    return r.Bo.post({
        url: s.Rsh.SHARED_CANVAS_LINES(e, n),
        body: {
            line_id: t,
            points: l
        },
        rejectWithError: !1
    })
}

function u(e, t, n, l) {
    i.h.dispatch({
        type: "SHARED_CANVAS_UPDATE_LINE_POINTS",
        userId: t,
        lineId: e,
        newPoints: l,
        streamerId: n
    })
}

function d(e, t, n) {
    return r.Bo.post({
        url: s.Rsh.SHARED_CANVAS_EMOJI_HOSES(e, t),
        body: {
            emoji_hose: n
        },
        rejectWithError: !1
    })
}

function h(e, t, n) {
    r.Bo.del({
        url: s.Rsh.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
        backoff: new l.A,
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

function f(e, t, n) {
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

function g(e) {
    i.h.dispatch({
        type: "SHARED_CANVAS_SET_DRAW_MODE",
        drawMode: e
    })
}

function A() {
    i.h.dispatch({
        type: "TOGGLE_OVERLAY_CANVAS"
    })
}