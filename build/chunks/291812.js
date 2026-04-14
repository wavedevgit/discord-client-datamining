/** chunk id: 291812 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => x,
    _A: () => f,
    sP: () => p
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(877413),
    o = n.n(r),
    u = n(52133),
    c = n(860227),
    d = n(861986),
    m = n(652215),
    g = n(985018),
    h = n(767283),
    A = n(782691);

function f(e, t) {
    return e.type === m.lAJ.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(m.pr7.SOURCE_MESSAGE_DELETED) ? g.intl.string(g.t.JOtgSw) : t
}

function p(e, t) {
    let {
        message: n
    } = t, {
        message: l
    } = e;
    return (0, u.A)(e, t, ["message"]) && n.content === l.content && n.state === l.state && n.editedTimestamp?.toString() === l.editedTimestamp?.toString()
}
let x = i.memo(function(e) {
    let {
        className: t,
        message: n,
        children: s,
        content: r,
        onUpdate: u,
        contentRef: g,
        compact: p
    } = e, x = n.state === m.cmJ.SEND_FAILED, v = n.state === m.cmJ.SENDING, C = n.isCommandType(), N = n.editedTimestamp?.toString(), E = i.useRef(!1);
    return i.useLayoutEffect(() => {
        E.current ? null != u && u() : E.current = !0
    }, [u, n.content, r, N, s]), (0, l.jsxs)("div", {
        id: (0, c.CJ)(n),
        ref: g,
        className: a()(t, A.PT, {
            [h.BK]: !0,
            [h.Tn]: v && !C,
            [h.nB]: "rtl" === o()(n.content),
            [h.Ix]: x,
            [h.w3]: n.isUnsupported
        }),
        children: [s ?? f(n, r), (0, l.jsx)(d.A, {
            message: n,
            compact: p,
            location: d.O.WITH_CONTENT
        })]
    })
}, p)