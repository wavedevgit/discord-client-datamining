/** chunk id: 466336 params = (module,exports,require) **/
n.d(t, {
    V: () => g
});
var i = n(627968);
n(64700);
var a = n(311907),
    l = n(554146),
    r = n(342494),
    s = n(397927),
    o = n(793574),
    d = n(617617),
    c = n(954571),
    u = n(851746),
    A = n(727949),
    h = n(652215),
    _ = n(985018),
    m = n(954457);
let g = e => {
    let {
        targetElementRef: t
    } = e, g = (0, A.Tp)(), p = (0, a.bG)([u.A], () => u.A.getReminderStateId()), E = (0, a.bG)([u.A], () => u.A.getReferralsRemaining()), I = (0, a.bG)([d.A], () => {
        let e = d.A.settings.userContent?.recurringDismissibleContentStates[l.M.REFERRAL_PROGRAM_POPOVER_V2];
        return e?.numTimesDismissed ?? 0
    }), f = () => {
        (0, A.ne)(p)
    };
    return (0, i.jsx)(r.AM, {
        targetElementRef: t,
        title: _.intl.string(_.t.K2DyeS),
        body: _.intl.string(_.t["JICo+3"]),
        graphic: {
            type: "image",
            src: m.A
        },
        size: "md",
        shouldShow: g,
        align: "top",
        position: "right",
        gradientColor: "nitro-pink",
        caretConfig: {
            align: "start"
        },
        actions: [{
            text: _.intl.string(_.t.t2N81y),
            onClick: () => {
                c.default.track(h.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                    location_stack: [o.A.HOME_PAGE_PREMIUM_TAB],
                    times_dismissed: null != p ? I + 1 : null,
                    referrals_remaining: E
                }), f(), (0, s.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.resolve().then(n.bind(n, 303682));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                })
            }
        }],
        onRequestClose: f
    })
}