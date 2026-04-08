/** chunk id: 707985 params = (module,exports,require) **/
i.d(t, {
    A: () => n
});

function n(e) {
    let {
        channel: t,
        canChat: i,
        renderReactions: n,
        canAddNewReactions: a,
        isLurking: l,
        communicationDisabled: o,
        isActiveChannelOrUnarchivableThread: r,
        isAutomodQuarantined: s
    } = e, c = t.isPrivate(), d = t.isSystemDM(), u = (i || c) && r;
    return {
        disableReactionReads: !n,
        disableReactionCreates: l || !u || !((!0 === a || c) && !d && r),
        disableReactionUpdates: l || !u || !0 === o || !0 === s
    }
}