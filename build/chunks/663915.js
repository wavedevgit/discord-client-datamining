/** chunk id: 663915, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(864466), n(443073), n(321073), n(896048);
var l = n(64700),
    r = n(735438),
    i = n.n(r),
    a = n(665260),
    s = n(311907),
    o = n(73153),
    c = n(234053),
    d = n(543465),
    u = n(403362),
    h = n(669953),
    p = n(591552),
    f = n(355097);

function _(e) {
    o.h.dispatch({
        type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
        guildId: e
    })
}
let m = {};

function g(e) {
    let t = (0, s.bG)([p.A], () => {
        var t;
        return null != (t = p.A.getPendingResponseOptions(e)) ? t : m
    }, [e]);
    return l.useEffect(() => (_(e), () => _(e)), [e]), l.useEffect(() => {
        null != t && 0 !== Object.keys(t).length && h.A.updateOnboardingResponses(e)
    }, [e, t]), {
        handleSelectOption: l.useCallback((t, n, l) => {
            let r = p.A.getOnboardingResponses(e),
                {
                    addedRoleIds: s,
                    removedRoleIds: _
                } = function(e, t, n, l) {
                    var r, a, s, o, c;
                    let d = [],
                        h = [];
                    if (e.singleSelect && n) {
                        let n = e.options.find(e => l.includes(e.id));
                        d = i().difference(null != (r = t.roleIds) ? r : [], null != (a = null == n ? void 0 : n.roleIds) ? a : []), h = i().difference(null != (s = null == n ? void 0 : n.roleIds) ? s : [], null != (o = t.roleIds) ? o : [])
                    } else if (n) d = null != (c = t.roleIds) ? c : [], h = [];
                    else {
                        let n = e.options.filter(e => l.includes(e.id)),
                            r = n.filter(e => t.id !== e.id),
                            a = n.map(e => e.roleIds).flat().filter(u.Vq),
                            s = r.map(e => e.roleIds).flat().filter(u.Vq);
                        d = [], h = i().difference(a, s)
                    }
                    return {
                        addedRoleIds: d,
                        removedRoleIds: h
                    }
                }(t, n, l, r),
                {
                    addedChannelIds: m,
                    removedChannelIds: g
                } = function(e) {
                    var t, n, l, r, a;
                    let {
                        guildId: s,
                        prompt: o,
                        option: d,
                        selected: h,
                        responses: f
                    } = e, _ = [], m = [];
                    if (o.singleSelect && h) {
                        let e = o.options.find(e => f.includes(e.id));
                        _ = i().difference(null != (t = d.channelIds) ? t : [], null != (n = null == e ? void 0 : e.channelIds) ? n : []), m = i().difference(null != (l = null == e ? void 0 : e.channelIds) ? l : [], null != (r = d.channelIds) ? r : [])
                    } else if (h) _ = null != (a = d.channelIds) ? a : [], m = [];
                    else {
                        let e = o.options.filter(e => f.includes(e.id)),
                            t = e.filter(e => d.id !== e.id),
                            n = e.map(e => e.channelIds).flat().filter(u.Vq),
                            l = t.map(e => e.channelIds).flat().filter(u.Vq);
                        _ = [], m = i().difference(n, l)
                    }
                    return (0, c.cE)(s) && _.push(...p.A.getDefaultChannelIds(s)), {
                        addedChannelIds: _,
                        removedChannelIds: m
                    }
                }({
                    guildId: e,
                    prompt: t,
                    option: n,
                    selected: l,
                    responses: r
                }),
                x = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), l.forEach(function(t) {
                            var l;
                            l = n[t], t in e ? Object.defineProperty(e, t, {
                                value: l,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = l
                        })
                    }
                    return e
                }({}, m.reduce((t, n) => {
                    let l = d.Ay.getChannelIdFlags(e, n);
                    return t[n] = {
                        flags: (0, a.lA)(l, f.vv.OPT_IN_ENABLED, !0)
                    }, t
                }, {}), g.reduce((t, n) => {
                    let l = d.Ay.getChannelIdFlags(e, n);
                    return t[n] = {
                        flags: (0, a.lA)(l, f.vv.OPT_IN_ENABLED, !1)
                    }, t
                }, {}));
            h.A.selectOption(e, t.id, n.id, l), o.h.dispatch({
                type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                guildId: e,
                overrides: x
            }), h.A.updateRolesLocal(e, s, _)
        }, [e])
    }
}