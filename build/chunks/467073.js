/** chunk id: 467073 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(311907),
    l = n(229527),
    a = n(870136),
    r = n(857071),
    s = n(406704),
    o = n(696451),
    c = n(834942),
    d = n(576705),
    u = n(707985),
    _ = n(652215);

function A(e) {
    let t = e?.guild_id,
        n = (0, i.bG)([c.A], () => null == t || c.A.canChatInGuild(t), [t]),
        A = (0, i.bG)([r.A], () => null != t && r.A.isLurking(t), [t]),
        m = (0, i.bG)([o.Ay], () => null != t && o.Ay.isCurrentUserGuest(t), [t]),
        E = (0, i.bG)([d.A], () => n && d.A.can(_.xBc.ADD_REACTIONS, e), [n, e]),
        T = (0, l.ix)(t),
        [, I] = (0, a.c)(t),
        g = (0, s.Id)(e);
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
            canAddNewReactions: E,
            isLurking: A,
            communicationDisabled: I,
            isActiveChannelOrUnarchivableThread: g,
            isAutomodQuarantined: T
        }),
        isLurking: A,
        isGuest: m,
        isPendingMember: !1
    }
}