/** chunk id: 809991, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var a = n(627968);
n(64700);
var i = n(554146),
    s = n(354486),
    l = n(379848),
    r = n(441811),
    o = n(587084),
    d = n(693240),
    c = n(844526),
    u = n(201805),
    m = n(523620),
    h = n(49999),
    p = n(654487);

function x(e) {
    let {
        isQuestBarEmpty: t,
        hasLoadedQuestBar: n
    } = (0, u.c9)({
        location: p.rE.CONFLICT_CHECKS
    }), x = null != e.targetElementRef.current && t && n, [g, _] = (0, o.r)(e.guildId, {
        shouldShow: x
    }), [f, b] = (0, o.L)(e.currentUser, {
        shouldShow: x
    }), [v, j] = (0, s.l)({
        shouldShow: x
    });
    return x ? g === i.M.GUILD_TAG_AVAILABLE_COACHMARK_V2 ? (0, a.jsx)(d.w, {
        guildId: e.guildId,
        onDismiss: _,
        targetElementRef: e.targetElementRef,
        children: e.children
    }) : f === i.M.GUILD_TAG_UPDATED_COACHMARK ? (0, a.jsx)(d.o, {
        guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
        onDismiss: b,
        targetElementRef: e.targetElementRef,
        children: e.children
    }) : v === i.M.DO_NOT_DISTURB_REMINDER_POPOVER ? (0, a.jsx)(s.A, {
        targetElementRef: e.targetElementRef,
        onDismiss: j,
        children: e.children
    }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.A, {
            groupName: h.m.ACCOUNT_NAME_ZONE,
            targetElementRef: e.targetElementRef
        }), (0, a.jsx)(l.Ay, {
            contentTypes: x ? e.additionalDCs ?? [] : [],
            groupName: h.m.ACCOUNT_NAME_ZONE,
            children: t => {
                let {
                    visibleContent: n,
                    markAsDismissed: s
                } = t;
                switch (n) {
                    case i.M.WIDGETS_RTC_UPSELL_COACHMARK:
                        return (0, a.jsx)(m.A, {
                            markAsDismissed: s,
                            targetElementRef: e.targetElementRef,
                            children: e.children
                        });
                    case i.M.DISPLAY_NAME_STYLES_COACHMARK:
                        return (0, a.jsx)(r.l, {
                            markAsDismissed: s,
                            targetElementRef: e.targetElementRef,
                            children: e.children
                        });
                    default:
                        return e.children
                }
            }
        })]
    }) : e.children
}