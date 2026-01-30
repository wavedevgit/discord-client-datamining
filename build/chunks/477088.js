/** chunk id: 477088, original params: e,t,i (module,exports,require) **/
i.d(t, {
    default: () => p
}), i(896048);
var s = i(627968),
    a = i(64700),
    r = i(397927),
    l = i(793574),
    n = i(688810),
    C = i(954571),
    d = i(326084),
    o = i(484217),
    c = i(353174),
    x = i(652215);
let p = e => {
    let t, {
            transitionState: i,
            onClose: p,
            sourceAnalyticsLocations: h
        } = e,
        [f, u] = a.useState(1),
        [_, j] = a.useState(new Set),
        [m, g] = a.useState(new Map),
        {
            analyticsLocations: L
        } = (0, n.Ay)([...h, l.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (f) {
        case 1:
            t = (0, s.jsx)(o.Ay, {
                onShare: async e => {
                    try {
                        C.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
                            location_stack: L
                        });
                        let t = await (0, d.xm)(e.map(e => e.id));
                        u(2), j(new Set(e)), g(t)
                    } catch (e) {}
                },
                onClose: p
            });
            break;
        case 2:
            t = (0, s.jsx)(c.A, {
                selectedUsers: _,
                trialCreationResult: m,
                onClose: p
            });
            break;
        default:
            p()
    }
    return (0, s.jsx)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: i,
        parentComponent: "ReferralProgramShareModal",
        children: t
    })
}