/** chunk id: 467073, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var i = n(311907),
    r = n(229527),
    l = n(870136),
    o = n(857071),
    s = n(406704),
    a = n(696451),
    c = n(834942),
    u = n(576705),
    d = n(707985),
    p = n(652215);

function f(e) {
    var t, n;
    let f = null == e ? void 0 : e.guild_id,
        b = (0, i.bG)([c.A], () => null == f || c.A.canChatInGuild(f), [f]),
        O = (0, i.bG)([o.A], () => null != f && o.A.isLurking(f), [f]),
        h = (0, i.bG)([a.Ay], () => null != f && a.Ay.isCurrentUserGuest(f), [f]),
        m = (0, i.bG)([u.A], () => b && u.A.can(p.xBc.ADD_REACTIONS, e), [b, e]),
        g = (0, r.ix)(f),
        [, y] = (0, l.c)(f),
        A = (0, s.Id)(e);
    return null == e ? {
        disableReactionReads: !0,
        disableReactionCreates: !0,
        disableReactionUpdates: !0,
        isLurking: !1,
        isGuest: !1,
        isPendingMember: !1
    } : (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i
            })
        }
        return e
    }({}, (0, d.A)({
        channel: e,
        canChat: b,
        renderReactions: !0,
        canAddNewReactions: m,
        isLurking: O,
        communicationDisabled: y,
        isActiveChannelOrUnarchivableThread: A,
        isAutomodQuarantined: g
    })), n = n = {
        isLurking: O,
        isGuest: h,
        isPendingMember: !1
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)
}