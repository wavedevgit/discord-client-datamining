/** Chunk was on 13146 **/
/** chunk id: 949004, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => m
});
var o = n(627968),
    r = n(64700),
    c = n(397927),
    a = n(444927),
    l = n(379848),
    i = n(612479),
    _ = n(954571),
    b = n(34550),
    u = n(14594),
    s = n(652215),
    d = n(294589),
    f = n(985018);

function m(e) {
    let {
        onClose: t,
        transitionState: m,
        dismissibleContent: p
    } = e;
    (0, l.kn)([p]);
    let g = (0, a.A)((0, u.ay)(p)),
        h = r.useMemo(() => g.map(e => e.value), [g]);
    r.useEffect(() => {
        _.default.track(s.HAw.OPEN_MODAL, {
            type: "Age Verification User Feedback"
        })
    }, []);
    let j = r.useCallback(e => {
        var t;
        let {
            rating: r,
            problem: a,
            feedback: l
        } = e, i = null == r, _ = (0, b.JO)(p);
        (0, b.dN)(r, "" !== l ? l : null, null != (t = null == a ? void 0 : a.value) ? t : null, i, _), i || (0, c.mMO)(async () => {
            let {
                default: e
            } = await n.e("37836").then(n.bind(n, 845671));
            return t => (0, o.jsx)(e, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), o.forEach(function(t) {
                        var o;
                        o = n[t], t in e ? Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = o
                    })
                }
                return e
            }({
                body: f.intl.string(d.default["4djgO/"])
            }, t))
        })
    }, [p]);
    return (0, o.jsx)(i.A, {
        modalType: "age_verification",
        header: f.intl.string(d.default.RqoA4v),
        body: f.intl.string(d.default.RPb8Zk),
        problemTitle: f.intl.string(d.default.KZw6kn),
        problems: g,
        freeformNeededProblems: h,
        onSubmit: j,
        onClose: t,
        transitionState: m,
        otherKey: u.VY.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: e => null == e ? null : e.value === u.VY.SOMETHING_ELSE ? f.intl.string(d.default.Q5cQ46) : f.intl.string(d.default.zApKaR)
    })
}