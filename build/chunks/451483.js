/** chunk id: 451483 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var i = n(627968),
    r = n(64700),
    s = n(397927),
    a = n(517905),
    l = n(763754),
    o = n(888675),
    c = n(985018);

function u(e) {
    let {
        children: t,
        messageReference: n,
        guildName: l
    } = e, o = r.useRef(null);
    if (null == n) return (0, i.jsx)(s.MzZ, {
        children: t
    });
    let {
        guild_id: c
    } = n;
    return null == c ? (0, i.jsx)(s.MzZ, {
        children: t
    }) : (0, i.jsx)(a.A, {
        guildId: c,
        name: l,
        targetElementRef: o,
        children: e => {
            let {
                "aria-controls": n,
                "aria-expanded": r,
                ...a
            } = e;
            return (0, i.jsx)(s.MzZ, {
                ...a,
                ref: o,
                children: t
            })
        }
    })
}

function d(e) {
    let {
        usernameHook: t,
        message: r,
        compact: s
    } = e, {
        content: a,
        timestamp: d,
        messageReference: _
    } = r, E = (0, l.Ay)(r), A = t(E), m = (a ?? "").split(" ").slice(0, -1).join(" "), I = c.intl.format(c.t["47CZc2"], {
        username: E.nick,
        usernameHook: A,
        webhookName: a,
        webhookNameHook: (e, t) => (0, i.jsx)(u, {
            messageReference: _,
            guildName: m,
            children: e
        }, t)
    });
    return (0, i.jsx)(o.A, {
        icon: n(617184),
        timestamp: d,
        compact: s,
        children: I
    })
}