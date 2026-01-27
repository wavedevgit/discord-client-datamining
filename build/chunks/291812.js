/** Chunk was on web.js **/
/** chunk id: 291812, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => b,
    _A: () => g,
    sP: () => y
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(877413),
    l = n.n(s),
    c = n(52133),
    u = n(693198),
    d = n(860227),
    f = n(861986),
    p = n(652215),
    _ = n(985018),
    h = n(679740),
    m = n(206314);

function g(e, t) {
    return e.type === p.lAJ.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(p.pr7.SOURCE_MESSAGE_DELETED) ? _.intl.string(_.t.JOtgSw) : t
}

function E(e) {
    var t;
    let {
        className: n,
        message: a,
        children: s,
        content: c,
        onUpdate: _,
        contentRef: E,
        compact: y
    } = e, b = a.state === p.cmJ.SEND_FAILED, O = a.state === p.cmJ.SENDING, v = a.isCommandType(), A = null == (t = a.editedTimestamp) ? void 0 : t.toString(), I = i.useRef(!1);
    i.useLayoutEffect(() => {
        I.current ? null != _ && _() : I.current = !0
    }, [_, a.content, c, A, s]);
    let S = u._.useConfig({
        location: "MessageContent"
    }).alignMessagesStart;
    return (0, r.jsxs)("div", {
        id: (0, d.CJ)(a),
        ref: E,
        className: o()(n, m.PT, {
            [h.BK]: !0,
            [h.Tn]: O && !v,
            [h.Dk]: S,
            [h.nB]: !S && "rtl" === l()(a.content),
            [h.Ix]: b,
            [h.w3]: a.isUnsupported
        }),
        children: [null != s ? s : g(a, c), (0, r.jsx)(f.A, {
            message: a,
            compact: y,
            location: f.O.WITH_CONTENT
        })]
    })
}

function y(e, t) {
    var n, r;
    let {
        message: i
    } = t, {
        message: a
    } = e;
    return (0, c.A)(e, t, ["message"]) && i.content === a.content && i.state === a.state && (null == (n = i.editedTimestamp) ? void 0 : n.toString()) === (null == (r = a.editedTimestamp) ? void 0 : r.toString())
}
let b = i.memo(E, y)