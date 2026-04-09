/** chunk id: 291812 params = (module,exports,require) **/
n.d(t, {
    Ay: () => f,
    _A: () => A,
    sP: () => g
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(877413),
    o = n.n(r),
    c = n(52133),
    d = n(860227),
    u = n(861986),
    m = n(652215),
    p = n(985018),
    _ = n(767283),
    h = n(782691);

function A(e, t) {
    return e.type === m.lAJ.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(m.pr7.SOURCE_MESSAGE_DELETED) ? p.intl.string(p.t.JOtgSw) : t
}

function g(e, t) {
    let {
        message: n
    } = t, {
        message: a
    } = e;
    return (0, c.A)(e, t, ["message"]) && n.content === a.content && n.state === a.state && n.editedTimestamp?.toString() === a.editedTimestamp?.toString()
}
let f = i.memo(function(e) {
    let {
        className: t,
        message: n,
        children: l,
        content: r,
        onUpdate: c,
        contentRef: p,
        compact: g
    } = e, f = n.state === m.cmJ.SEND_FAILED, b = n.state === m.cmJ.SENDING, T = n.isCommandType(), x = n.editedTimestamp?.toString(), I = i.useRef(!1);
    return i.useLayoutEffect(() => {
        I.current ? null != c && c() : I.current = !0
    }, [c, n.content, r, x, l]), (0, a.jsxs)("div", {
        id: (0, d.CJ)(n),
        ref: p,
        className: s()(t, h.PT, {
            [_.BK]: !0,
            [_.Tn]: b && !T,
            [_.nB]: "rtl" === o()(n.content),
            [_.Ix]: f,
            [_.w3]: n.isUnsupported
        }),
        children: [l ?? A(n, r), (0, a.jsx)(u.A, {
            message: n,
            compact: g,
            location: u.O.WITH_CONTENT
        })]
    })
}, g)