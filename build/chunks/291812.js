/** chunk id: 291812 params = (module,exports,require) **/
t.d(a, {
    Ay: () => m,
    _A: () => N,
    sP: () => O
});
var n = t(627968),
    r = t(64700),
    o = t(503698),
    s = t.n(o),
    _ = t(877413),
    c = t.n(_),
    i = t(52133),
    l = t(860227),
    d = t(861986),
    E = t(652215),
    C = t(985018),
    A = t(679740),
    u = t(206314);

function N(e, a) {
    return e.type === E.lAJ.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(E.pr7.SOURCE_MESSAGE_DELETED) ? C.intl.string(C.t.JOtgSw) : a
}

function O(e, a) {
    let {
        message: t
    } = a, {
        message: n
    } = e;
    return (0, i.A)(e, a, ["message"]) && t.content === n.content && t.state === n.state && t.editedTimestamp?.toString() === n.editedTimestamp?.toString()
}
let m = r.memo(function(e) {
    let {
        className: a,
        message: t,
        children: o,
        content: _,
        onUpdate: i,
        contentRef: C,
        compact: O
    } = e, m = t.state === E.cmJ.SEND_FAILED, R = t.state === E.cmJ.SENDING, T = t.isCommandType(), I = t.editedTimestamp?.toString(), p = r.useRef(!1);
    return r.useLayoutEffect(() => {
        p.current ? null != i && i() : p.current = !0
    }, [i, t.content, _, I, o]), (0, n.jsxs)("div", {
        id: (0, l.CJ)(t),
        ref: C,
        className: s()(a, u.PT, {
            [A.BK]: !0,
            [A.Tn]: R && !T,
            [A.nB]: "rtl" === c()(t.content),
            [A.Ix]: m,
            [A.w3]: t.isUnsupported
        }),
        children: [o ?? N(t, _), (0, n.jsx)(d.A, {
            message: t,
            compact: O,
            location: d.O.WITH_CONTENT
        })]
    })
}, O)