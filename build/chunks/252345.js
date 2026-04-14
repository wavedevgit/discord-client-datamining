/** chunk id: 252345 params = (module,exports,require) **/
n.d(t, {
    default: () => C
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    c = n.n(i),
    o = n(158954),
    s = n(397927),
    d = n(954571),
    l = n(203982),
    p = n(231003),
    h = n(929488),
    u = n(652215),
    f = n(985018),
    y = n(822170),
    m = n(894101);
let v = new Set([s.ip4.ENTERING, s.ip4.ENTERED]);

function C(e) {
    let {
        onClose: t,
        onCaptchaVerify: n,
        onReject: i,
        transitionState: C,
        headerText: E,
        bodyText: b,
        rqtoken: A,
        serveInvisible: w,
        ...g
    } = e, R = (0, p.A)({
        onReject: i
    });
    if (a.useEffect(() => {
            l._.subscribe(u.jej.LAYER_POP_ESCAPE_KEY, t)
        }, [t]), a.useEffect(() => {
            d.default.track(u.HAw.OPEN_MODAL, {
                type: "Captcha Modal"
            })
        }, []), null == C || !v.has(C)) return null;
    let _ = (0, r.jsxs)("div", {
        className: c()(y.GC, y.P),
        children: [w && (0, r.jsx)(s.y$y, {
            type: s.y$y.Type.SPINNING_CIRCLE
        }), (0, r.jsx)(h.A, {
            size: w ? "invisible" : void 0,
            onVerify: e => {
                R(), n(e, A), t()
            },
            onClose: w ? t : void 0,
            ...g
        })]
    });
    return (0, r.jsx)(o.ExpressiveModal, {
        transitionState: C,
        onClose: t,
        size: "sm",
        gradientColor: "blue",
        graphic: {
            type: "image",
            src: m
        },
        title: E ?? f.intl.string(f.t.FpoiHe),
        subtitle: b ?? f.intl.string(f.t["/CidxO"]),
        children: _
    })
}