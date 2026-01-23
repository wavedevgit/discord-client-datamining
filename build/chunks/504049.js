/** Chunk was on 94390 **/
/** chunk id: 504049, original params: t,e,n (module,exports,require) **/
n.d(e, {
    $9: () => D,
    KW: () => g,
    Ks: () => d,
    Nj: () => T,
    Tj: () => m,
    Zp: () => E,
    hs: () => A
});
var l, a, i = n(64700),
    o = n(793574),
    r = n(58149),
    u = n(961350),
    s = n(954571),
    c = n(652215);

function _(t, e, n) {
    var l;
    let a = function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), l.forEach(function(e) {
                var l;
                l = n[e], e in t ? Object.defineProperty(t, e, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = l
            })
        }
        return t
    }({}, e, (0, r.H$)(null != (l = e.guild_id) ? l : n));
    s.default.track(t, a)
}

function d(t) {
    return i.useCallback(e => {
        let n;
        n = {
            guild_id: t,
            location: o.A.MEMBER_SAFETY_PAGE
        }, _(c.HAw.MOD_DASH_SEARCH_MEMBERS, n)
    }, [t])
}

function A(t) {
    return i.useCallback(e => {
        let n;
        n = {
            selected_role_count: e.size,
            guild_id: t,
            location: o.A.MEMBER_SAFETY_PAGE
        }, _(c.HAw.MOD_DASH_FILTER_ROLES, n)
    }, [t])
}
var E = ((l = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", l.COMMUNICATION_DISABLED = "communication_disabled", l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", l.USERNAME_QUARANTINED = "username_quarantined", l);

function m(t) {
    return i.useCallback(e => {
        let n;
        n = {
            flag_type: e,
            guild_id: t,
            location: o.A.MEMBER_SAFETY_PAGE
        }, _(c.HAw.MOD_DASH_FILTER_SAFETY_FLAGS, n)
    }, [t])
}
var T = ((a = {}).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname", a);

function D(t, e) {
    let {
        location: n,
        targetUserId: l,
        targets: a,
        locations: o
    } = e;
    return i.useCallback(e => {
        let i = {
            action_type: e,
            mod_user_id: u.default.getId(),
            guild_id: t,
            location: n,
            locations: o,
            target_user_id: null != l ? l : void 0,
            targets: null != a ? a : void 0
        };
        _(c.HAw.MODERATION_ACTION, i)
    }, [t, n, l, a, o])
}

function g(t, e) {
    _(c.HAw.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: t,
        location: e
    })
}