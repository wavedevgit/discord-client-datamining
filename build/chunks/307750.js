/** chunk id: 307750 params = (module,exports,require) **/
_.d(t, {
    default: () => u
});
var c = _(627968),
    o = _(64700),
    r = _(397927),
    a = _(444927),
    i = _(612479),
    n = _(954571),
    b = _(34550),
    l = _(14594),
    s = _(652215),
    d = _(985018);
let m = [l.tF.SOMETHING_ELSE];

function u(e) {
    let {
        onClose: t,
        transitionState: u
    } = e, p = (0, a.A)(l.A4);
    o.useEffect(() => {
        n.default.track(s.HAw.OPEN_MODAL, {
            type: "Block User Feedback"
        })
    }, []);
    let h = o.useCallback(e => {
        let {
            rating: t,
            problem: o,
            feedback: a
        } = e, i = null == t;
        (0, b.$b)(t, a, o?.value ?? null, i), i || (0, r.mMO)(async () => {
            let {
                default: e
            } = await _.e("37836").then(_.bind(_, 845671));
            return t => (0, c.jsx)(e, {
                body: d.intl.string(d.t["d9+vQ8"]),
                ...t
            })
        })
    }, []);
    return (0, c.jsx)(i.A, {
        modalType: "block_user",
        header: d.intl.string(d.t["+2qQAX"]),
        body: d.intl.string(d.t["+0RsvT"]),
        problemTitle: d.intl.string(d.t.TXomWW),
        problems: p,
        freeformNeededProblems: m,
        onSubmit: h,
        onClose: t,
        transitionState: u,
        otherKey: l.tF.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowAgainCheckbox: !0
    })
}