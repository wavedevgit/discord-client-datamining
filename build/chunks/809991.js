/** Chunk was on 36054 **/
/** chunk id: 809991, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var a = n(627968);
n(64700);
var l = n(554146),
    r = n(354486),
    i = n(379848),
    s = n(441811),
    o = n(587084),
    c = n(693240),
    d = n(987237),
    u = n(844526),
    m = n(201805),
    p = n(523620),
    h = n(49999),
    x = n(654487);

function g(e) {
    var t, n, g;
    let {
        isQuestBarEmpty: f,
        hasLoadedQuestBar: b
    } = (0, m.c9)({
        location: x.rE.CONFLICT_CHECKS
    }), v = null != e.targetElementRef.current && f && b, [j, _] = (0, o.r)(e.guildId, {
        shouldShow: v
    }), [y, A] = (0, o.L)(e.currentUser, {
        shouldShow: v
    }), [C, S] = (0, r.l)({
        shouldShow: v
    });
    return v ? j === l.M.GUILD_TAG_AVAILABLE_COACHMARK_V2 ? (0, a.jsx)(c.w, {
        guildId: e.guildId,
        onDismiss: _,
        targetElementRef: e.targetElementRef,
        children: e.children
    }) : y === l.M.GUILD_TAG_UPDATED_COACHMARK ? (0, a.jsx)(c.o, {
        guildId: null != (n = null == (g = e.currentUser.primaryGuild) ? void 0 : g.identityGuildId) ? n : null,
        onDismiss: A,
        targetElementRef: e.targetElementRef,
        children: e.children
    }) : C === l.M.DO_NOT_DISTURB_REMINDER_POPOVER ? (0, a.jsx)(r.A, {
        targetElementRef: e.targetElementRef,
        onDismiss: S,
        children: e.children
    }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.A, {
            groupName: h.m.ACCOUNT_NAME_ZONE,
            targetElementRef: e.targetElementRef
        }), (0, a.jsx)(i.Ay, {
            contentTypes: v && null != (t = e.additionalDCs) ? t : [],
            groupName: h.m.ACCOUNT_NAME_ZONE,
            children: t => {
                let {
                    visibleContent: n,
                    markAsDismissed: r
                } = t;
                switch (n) {
                    case l.M.WIDGETS_RTC_UPSELL_COACHMARK:
                        return (0, a.jsx)(p.A, {
                            markAsDismissed: r,
                            targetElementRef: e.targetElementRef,
                            children: e.children
                        });
                    case l.M.DISPLAY_NAME_STYLES_COACHMARK:
                        return (0, a.jsx)(s.l, {
                            markAsDismissed: r,
                            targetElementRef: e.targetElementRef,
                            children: e.children
                        });
                    case l.M.TENURE_BADGE_CHURN_REMINDER:
                        return (0, a.jsx)(d.A, {
                            markAsDismissed: r,
                            mode: "popover",
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