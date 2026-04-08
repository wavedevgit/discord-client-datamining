/** chunk id: 467073 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(311907),
    i = n(229527),
    l = n(870136),
    s = n(857071),
    r = n(406704),
    o = n(696451),
    c = n(834942),
    d = n(576705),
    u = n(707985),
    m = n(652215);

function p(e) {
    let t = e?.guild_id,
        n = (0, a.bG)([c.A], () => null == t || c.A.canChatInGuild(t), [t]),
        p = (0, a.bG)([s.A], () => null != t && s.A.isLurking(t), [t]),
        _ = (0, a.bG)([o.Ay], () => null != t && o.Ay.isCurrentUserGuest(t), [t]),
        h = (0, a.bG)([d.A], () => n && d.A.can(m.xBc.ADD_REACTIONS, e), [n, e]),
        A = (0, i.ix)(t),
        [, g] = (0, l.c)(t),
        f = (0, r.Id)(e);
    return null == e ? {
        disableReactionReads: !0,
        disableReactionCreates: !0,
        disableReactionUpdates: !0,
        isLurking: !1,
        isGuest: !1,
        isPendingMember: !1
    } : {
        ...(0, u.A)({
            channel: e,
            canChat: n,
            renderReactions: !0,
            canAddNewReactions: h,
            isLurking: p,
            communicationDisabled: g,
            isActiveChannelOrUnarchivableThread: f,
            isAutomodQuarantined: A
        }),
        isLurking: p,
        isGuest: _,
        isPendingMember: !1
    }
}