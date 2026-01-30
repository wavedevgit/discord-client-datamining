/** chunk id: 307750, original params: e,t,o (module,exports,require) **/
o.d(t, {
    default: () => m
});
var c = o(627968),
    r = o(64700),
    _ = o(397927),
    n = o(444927),
    a = o(612479),
    i = o(954571),
    l = o(34550),
    b = o(14594),
    s = o(652215),
    u = o(985018);
let d = [b.tF.SOMETHING_ELSE];

function m(e) {
    let {
        onClose: t,
        transitionState: m
    } = e, p = (0, n.A)(b.A4);
    r.useEffect(() => {
        i.default.track(s.HAw.OPEN_MODAL, {
            type: "Block User Feedback"
        })
    }, []);
    let f = r.useCallback(e => {
        var t;
        let {
            rating: r,
            problem: n,
            feedback: a
        } = e, i = null == r;
        (0, l.$b)(r, a, null != (t = null == n ? void 0 : n.value) ? t : null, i), i || (0, _.mMO)(async () => {
            let {
                default: e
            } = await o.e("37836").then(o.bind(o, 845671));
            return t => (0, c.jsx)(e, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {},
                        c = Object.keys(o);
                    "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(o, e).enumerable
                    }))), c.forEach(function(t) {
                        var c;
                        c = o[t], t in e ? Object.defineProperty(e, t, {
                            value: c,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = c
                    })
                }
                return e
            }({
                body: u.intl.string(u.t["d9+vQ8"])
            }, t))
        })
    }, []);
    return (0, c.jsx)(a.A, {
        modalType: "block_user",
        header: u.intl.string(u.t["+2qQAX"]),
        body: u.intl.string(u.t["+0RsvT"]),
        problemTitle: u.intl.string(u.t.TXomWW),
        problems: p,
        freeformNeededProblems: d,
        onSubmit: f,
        onClose: t,
        transitionState: m,
        otherKey: b.tF.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0
    })
}