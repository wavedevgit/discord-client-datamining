/** chunk id: 451483 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(517905),
    s = n(763754),
    o = n(888675),
    c = n(985018);

function u(e) {
    let {
        children: t,
        messageReference: n,
        guildName: s
    } = e, o = l.useRef(null);
    if (null == n) return (0, i.jsx)(a.MzZ, {
        children: t
    });
    let {
        guild_id: c
    } = n;
    return null == c ? (0, i.jsx)(a.MzZ, {
        children: t
    }) : (0, i.jsx)(r.A, {
        guildId: c,
        name: s,
        targetElementRef: o,
        children: e => {
            let {
                "aria-controls": n,
                "aria-expanded": l,
                ...r
            } = e;
            return (0, i.jsx)(a.MzZ, {
                ...r,
                ref: o,
                children: t
            })
        }
    })
}

function d(e) {
    let {
        usernameHook: t,
        message: l,
        compact: a
    } = e, {
        content: r,
        timestamp: d,
        messageReference: _
    } = l, A = (0, s.Ay)(l), m = t(A), E = (r ?? "").split(" ").slice(0, -1).join(" "), T = c.intl.format(c.t["47CZc2"], {
        username: A.nick,
        usernameHook: m,
        webhookName: r,
        webhookNameHook: (e, t) => (0, i.jsx)(u, {
            messageReference: _,
            guildName: E,
            children: e
        }, t)
    });
    return (0, i.jsx)(o.A, {
        icon: n(617184),
        timestamp: d,
        compact: a,
        children: T
    })
}