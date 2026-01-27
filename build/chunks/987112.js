/** Chunk was on web.js **/
/** chunk id: 987112, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    a = n(155718),
    o = n(58149),
    s = n(842209),
    l = n(990474),
    c = n(954571),
    u = n(183555),
    d = n(900179),
    f = n(652215),
    p = n(985018),
    _ = n(624082);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g(e) {
    let {
        applicationId: t,
        commandIds: n,
        guildId: h,
        channel: g,
        onClick: E
    } = e, {
        trackUserProfileAction: y
    } = (0, u.NJ)(), b = i.useMemo(() => ({
        channel: g,
        type: "channel"
    }), [g]), {
        commands: O
    } = s.DP(b, t, n), v = i.useMemo(() => null == O ? void 0 : O.filter(e => {
        let {
            nsfw: t,
            options: n
        } = e;
        return !0 !== t && (null == n ? void 0 : n.find(e => {
            let {
                type: t
            } = e;
            return t === a.n4.SUB_COMMAND || t === a.n4.SUB_COMMAND_GROUP
        })) == null
    }), [O]);
    if (null == v || 0 === v.length) return null;
    let A = e => {
        null == E || E(), y({
            action: "PRESS_APP_COMMAND"
        }), c.default.track(f.HAw.POPULAR_APPLICATION_COMMAND_CLICKED, m({
            application_id: t,
            command_id: e,
            guild_id: h
        }, (0, o.Ou)(g.id)))
    };
    return (0, r.jsx)(d.A, {
        heading: p.intl.string(p.t["0hKkS+"]),
        children: (0, r.jsx)("ul", {
            className: _.p,
            children: v.map(e => (0, r.jsx)("li", {
                children: (0, r.jsx)(l.Oh, {
                    commandId: e.id,
                    commandName: e.displayName,
                    commandDescription: e.displayDescription,
                    onClick: A,
                    guildId: h,
                    channelId: g.id,
                    applicationId: e.applicationId
                })
            }, e.id))
        })
    })
}