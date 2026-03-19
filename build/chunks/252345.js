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
    p = n(954571),
    d = n(203982),
    l = n(231003),
    h = n(929488),
    u = n(652215),
    f = n(985018),
    y = n(141351),
    v = n(894101);
let m = new Set([s.ip4.ENTERING, s.ip4.ENTERED]);

function C(e) {
    let {
        onClose: t,
        onCaptchaVerify: n,
        onReject: i,
        transitionState: C,
        headerText: A,
        bodyText: E,
        rqtoken: b,
        serveInvisible: R,
        ..._
    } = e, g = (0, l.A)({
        onReject: i
    });
    if (a.useEffect(() => {
            d._.subscribe(u.jej.LAYER_POP_ESCAPE_KEY, t)
        }, [t]), a.useEffect(() => {
            p.default.track(u.HAw.OPEN_MODAL, {
                type: "Captcha Modal"
            })
        }, []), null == C || !m.has(C)) return null;
    let w = (0, r.jsxs)("div", {
        className: c()(y.GC, y.P),
        children: [R && (0, r.jsx)(s.y$y, {
            type: s.y$y.Type.SPINNING_CIRCLE
        }), (0, r.jsx)(h.A, {
            size: R ? "invisible" : void 0,
            onVerify: e => {
                g(), n(e, b), t()
            },
            onClose: R ? t : void 0,
            ..._
        })]
    });
    return (0, r.jsx)(o.ExpressiveModal, {
        transitionState: C,
        onClose: t,
        size: "sm",
        gradientColor: "blue",
        graphic: {
            type: "image",
            src: v
        },
        title: A ?? f.intl.string(f.t.FpoiHe),
        subtitle: E ?? f.intl.string(f.t["/CidxO"]),
        children: w
    })
}