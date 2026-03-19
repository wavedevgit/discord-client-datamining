/** chunk id: 291812 params = (module,exports,require) **/
t.d(a, {
    Ay: () => O,
    _A: () => N,
    sP: () => m
});
var n = t(627968),
    r = t(64700),
    s = t(503698),
    o = t.n(s),
    c = t(877413),
    _ = t.n(c),
    i = t(52133),
    l = t(860227),
    d = t(861986),
    C = t(652215),
    E = t(985018),
    A = t(222590),
    u = t(830412);

function N(e, a) {
    return e.type === C.lAJ.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(C.pr7.SOURCE_MESSAGE_DELETED) ? E.intl.string(E.t.JOtgSw) : a
}

function m(e, a) {
    let {
        message: t
    } = a, {
        message: n
    } = e;
    return (0, i.A)(e, a, ["message"]) && t.content === n.content && t.state === n.state && t.editedTimestamp?.toString() === n.editedTimestamp?.toString()
}
let O = r.memo(function(e) {
    let {
        className: a,
        message: t,
        children: s,
        content: c,
        onUpdate: i,
        contentRef: E,
        compact: m
    } = e, O = t.state === C.cmJ.SEND_FAILED, T = t.state === C.cmJ.SENDING, I = t.isCommandType(), R = t.editedTimestamp?.toString(), p = r.useRef(!1);
    return r.useLayoutEffect(() => {
        p.current ? null != i && i() : p.current = !0
    }, [i, t.content, c, R, s]), (0, n.jsxs)("div", {
        id: (0, l.CJ)(t),
        ref: E,
        className: o()(a, u.PT, {
            [A.BK]: !0,
            [A.Tn]: T && !I,
            [A.nB]: "rtl" === _()(t.content),
            [A.Ix]: O,
            [A.w3]: t.isUnsupported
        }),
        children: [s ?? N(t, c), (0, n.jsx)(d.A, {
            message: t,
            compact: m,
            location: d.O.WITH_CONTENT
        })]
    })
}, m)