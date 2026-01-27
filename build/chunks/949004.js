/** Chunk was on 13146 **/
/** chunk id: 949004, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => g
});
var n = r(627968),
    o = r(64700),
    i = r(397927),
    a = r(444927),
    l = r(379848),
    c = r(612479),
    u = r(954571),
    s = r(34550),
    _ = r(14594),
    b = r(652215),
    d = r(294589),
    f = r(985018);

function g(e) {
    let {
        onClose: t,
        transitionState: g,
        dismissibleContent: p
    } = e;
    (0, l.kn)([p]);
    let m = (0, a.A)((0, _.ay)(p)),
        O = o.useMemo(() => m.map(e => e.value), [m]);
    o.useEffect(() => {
        u.default.track(b.HAw.OPEN_MODAL, {
            type: "Age Verification User Feedback"
        })
    }, []);
    let E = o.useCallback(e => {
        var t;
        let {
            rating: o,
            problem: a,
            feedback: l
        } = e, c = null == o, u = (0, s.JO)(p);
        (0, s.dN)(o, "" !== l ? l : null, null != (t = null == a ? void 0 : a.value) ? t : null, c, u), c || (0, i.mMO)(async () => {
            let {
                default: e
            } = await r.e("37836").then(r.bind(r, 845671));
            return t => (0, n.jsx)(e, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({
                body: f.intl.string(d.default["4djgO/"])
            }, t))
        })
    }, [p]);
    return (0, n.jsx)(c.A, {
        modalType: "age_verification",
        header: f.intl.string(d.default.RqoA4v),
        body: f.intl.string(d.default.RPb8Zk),
        problemTitle: f.intl.string(d.default.KZw6kn),
        problems: m,
        freeformNeededProblems: O,
        onSubmit: E,
        onClose: t,
        transitionState: g,
        otherKey: _.VY.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: e => null == e ? null : e.value === _.VY.SOMETHING_ELSE ? f.intl.string(d.default.Q5cQ46) : f.intl.string(d.default.zApKaR)
    })
}