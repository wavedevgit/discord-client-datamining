/** Chunk was on 40433 **/
/** chunk id: 976627, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => m
});
var r = n(627968),
    o = n(64700),
    c = n(397927),
    _ = n(444927),
    i = n(612479),
    l = n(954571),
    a = n(34550),
    b = n(14594),
    s = n(652215),
    u = n(985018);

function m(e) {
    let {
        onClose: t,
        transitionState: m
    } = e, d = (0, _.A)(b.jZ), p = o.useMemo(() => d.map(e => e.value), [d]);
    o.useEffect(() => {
        l.default.track(s.HAw.OPEN_MODAL, {
            type: "Ignore User Feedback"
        })
    }, []);
    let f = o.useCallback(e => {
        var t;
        let {
            rating: o,
            problem: _,
            feedback: i
        } = e, l = null == o;
        (0, a.mf)(o, i, null != (t = null == _ ? void 0 : _.value) ? t : null, l), l || (0, c.mMO)(async () => {
            let {
                default: e
            } = await n.e("37836").then(n.bind(n, 845671));
            return t => (0, r.jsx)(e, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({
                body: u.intl.string(u.t["d9+vQ8"])
            }, t))
        })
    }, []);
    return (0, r.jsx)(i.A, {
        modalType: "ignore_user",
        header: u.intl.string(u.t.Ib6bic),
        body: u.intl.string(u.t["uW0/nV"]),
        problemTitle: u.intl.string(u.t.avs5Vg),
        problems: d,
        freeformNeededProblems: p,
        onSubmit: f,
        onClose: t,
        transitionState: m,
        otherKey: b.w$.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0,
        freeformDescription: e => null == e ? null : e.value === b.w$.SOMETHING_ELSE ? u.intl.string(u.t.h95hcn) : u.intl.string(u.t.wRGel3)
    })
}