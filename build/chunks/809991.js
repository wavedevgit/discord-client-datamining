/** chunk id: 809991 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968);
n(64700);
var i = n(554146),
    l = n(354486),
    s = n(379848),
    r = n(441811),
    o = n(587084),
    d = n(693240),
    c = n(844526),
    u = n(201805),
    m = n(49999),
    h = n(654487);

function p(e) {
    let {
        isQuestBarEmpty: t,
        hasLoadedQuestBar: n
    } = (0, u.c9)({
        location: h.rE.CONFLICT_CHECKS
    }), p = null != e.targetElementRef.current && t && n, [x, g] = (0, o.r)(e.guildId, {
        shouldShow: p
    }), [_, f] = (0, o.L)(e.currentUser, {
        shouldShow: p
    }), [v, b] = (0, l.l)({
        shouldShow: p
    });
    return p ? x === i.M.GUILD_TAG_AVAILABLE_COACHMARK_V2 ? (0, a.jsx)(d.w, {
        guildId: e.guildId,
        onDismiss: g,
        targetElementRef: e.targetElementRef,
        children: e.children
    }) : _ === i.M.GUILD_TAG_UPDATED_COACHMARK ? (0, a.jsx)(d.o, {
        guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
        onDismiss: f,
        targetElementRef: e.targetElementRef,
        children: e.children
    }) : v === i.M.DO_NOT_DISTURB_REMINDER_POPOVER ? (0, a.jsx)(l.A, {
        targetElementRef: e.targetElementRef,
        onDismiss: b,
        children: e.children
    }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.A, {
            groupName: m.m.ACCOUNT_NAME_ZONE,
            targetElementRef: e.targetElementRef
        }), (0, a.jsx)(s.Ay, {
            contentTypes: p ? e.additionalDCs ?? [] : [],
            groupName: m.m.ACCOUNT_NAME_ZONE,
            children: t => {
                let {
                    visibleContent: n,
                    markAsDismissed: l
                } = t;
                return n === i.M.DISPLAY_NAME_STYLES_COACHMARK ? (0, a.jsx)(r.l, {
                    markAsDismissed: l,
                    targetElementRef: e.targetElementRef,
                    children: e.children
                }) : e.children
            }
        })]
    }) : e.children
}