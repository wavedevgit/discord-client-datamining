/** Chunk was on web.js **/
/** chunk id: 551816, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Tu: () => g,
    z8: () => v
}), n(321073), n(638769), n(896048);
var r = n(33851),
    i = n.n(r),
    a = n(713402),
    o = n(694318),
    s = n(287809),
    l = n(157347),
    c = n(70738),
    u = n(166233),
    d = n(230959);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            f(e, t, n[t])
        })
    }
    return e
}

function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function h(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let m = Date.now();
var g = function(e) {
    return e.NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", e.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", e.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS", e
}({});

function E(e) {
    let t = [e.isCurrentGuildMemberByTimestamp ? "CURRENT_GUILD_MEMBER" : "NEW_GUILD_MEMBER"];
    return e.isIncludedInSearchResults && t.push("INCLUDED_IN_SEARCH_RESULTS"), t
}

function y(e) {
    return e.sort
}

function b() {
    return new a.J(E, y)
}

function O(e) {
    return null != e && new Date(e).getTime() >= m - c.tX
}
class v {
    reset() {
        this._membersMap.clear(), this._membersMap = b(), this.resetNewMemberTimestamp()
    }
    resetNewMemberTimestamp() {
        this.newMemberTimestamp = Date.now()
    }
    enhanceNewMember(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = (0, l.vn)(e.joinedAt),
            {
                hasUnusualDmActivity: a,
                hasUnusualAccountActivity: o,
                sourceInviteCode: u,
                joinSourceType: f,
                inviterId: _,
                integrationType: m,
                joinSourceApplicationId: g,
                joinSourceChannelId: E
            } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
            y = s.default.getUser(e.userId);
        return p(h(p({
            hasUnusualDmActivity: a,
            hasUnusualAccountActivity: o,
            sourceInviteCode: u,
            joinSourceType: f,
            inviterId: _,
            integrationType: m,
            joinSourceApplicationId: g,
            joinSourceChannelId: E
        }, e), {
            isCurrentGuildMemberByTimestamp: i <= this.newMemberTimestamp,
            isIncludedInSearchResults: !1,
            user: y,
            sort: (0, d.R)(e, null != (n = t.selectedSort) ? n : c.mF.ORDER_BY_UNSPECIFIED),
            joinedAtTimestamp: i
        }), r)
    }
    _computeMemberSupplementals(e, t) {
        var n;
        let {
            sourceInviteCode: r,
            joinSourceType: i,
            inviterId: a,
            integrationType: s,
            joinSourceApplicationId: l,
            joinSourceChannelId: c
        } = null != (n = (0, u.Oe)(this.guildId)[e]) ? n : {};
        return {
            sourceInviteCode: null != r ? r : null,
            joinSourceType: null != i ? i : null,
            inviterId: null != a ? a : null,
            integrationType: null != s ? s : null,
            joinSourceApplicationId: null != l ? l : null,
            joinSourceChannelId: null != c ? c : null,
            hasUnusualDmActivity: O(t),
            hasUnusualAccountActivity: (0, o.cx)(e)
        }
    }
    createMember(e) {
        return this._membersMap.set(e.userId, e)
    }
    updateMember(e, t) {
        var n;
        if (null == t) return this._membersMap.set(e.userId, e);
        let r = p({}, e),
            a = p({}, t),
            o = !1,
            {
                sourceInviteCode: s,
                hasUnusualDmActivity: l,
                hasUnusualAccountActivity: c,
                joinSourceType: u,
                inviterId: d,
                integrationType: f,
                joinSourceApplicationId: _,
                joinSourceChannelId: h
            } = this._computeMemberSupplementals(r.userId, null != (n = a.unusualDMActivityUntil) ? n : r.unusualDMActivityUntil);
        for (let e in r.sourceInviteCode !== s && (a.sourceInviteCode = s), r.hasUnusualDmActivity !== l && (a.hasUnusualDmActivity = l), r.hasUnusualAccountActivity !== c && (a.hasUnusualAccountActivity = c), r.joinSourceType !== u && (a.joinSourceType = u), r.joinSourceApplicationId !== _ && (a.joinSourceApplicationId = _), r.joinSourceChannelId !== h && (a.joinSourceChannelId = h), r.inviterId !== d && (a.inviterId = d), r.integrationType !== f && (a.integrationType = f), a) {
            let t = e,
                n = a[t],
                s = r[t];
            i()(n, s) || (r[t] = n, o = !0)
        }
        return this._membersMap.set(r.userId, r) || o
    }
    removeMember(e) {
        return this._membersMap.delete(e)
    }
    getMemberByUserId(e) {
        return this._membersMap.get(e)
    }
    values(e) {
        return this._membersMap.values(e, !0)
    }
    count(e) {
        return this._membersMap.size(e)
    }
    get version() {
        return this._membersMap.version
    }
    constructor(e) {
        f(this, "guildId", void 0), f(this, "_membersMap", void 0), f(this, "newMemberTimestamp", Date.now()), this.guildId = e, this._membersMap = b()
    }
}