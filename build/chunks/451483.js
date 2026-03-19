/** chunk id: 451483 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(517905),
    s = n(763754),
    o = n(888675),
    c = n(985018);

function d(e) {
    let {
        children: t,
        messageReference: n,
        guildName: s
    } = e, o = a.useRef(null);
    if (null == n) return (0, i.jsx)(l.MzZ, {
        children: t
    });
    let {
        guild_id: c
    } = n;
    return null == c ? (0, i.jsx)(l.MzZ, {
        children: t
    }) : (0, i.jsx)(r.A, {
        guildId: c,
        name: s,
        targetElementRef: o,
        children: e => {
            let {
                "aria-controls": n,
                "aria-expanded": a,
                ...r
            } = e;
            return (0, i.jsx)(l.MzZ, {
                ...r,
                ref: o,
                children: t
            })
        }
    })
}

function u(e) {
    let {
        usernameHook: t,
        message: a,
        compact: l
    } = e, {
        content: r,
        timestamp: u,
        messageReference: _
    } = a, m = (0, s.Ay)(a), A = t(m), E = (r ?? "").split(" ").slice(0, -1).join(" "), I = c.intl.format(c.t["47CZc2"], {
        username: m.nick,
        usernameHook: A,
        webhookName: r,
        webhookNameHook: (e, t) => (0, i.jsx)(d, {
            messageReference: _,
            guildName: E,
            children: e
        }, t)
    });
    return (0, i.jsx)(o.A, {
        icon: n(617184),
        timestamp: u,
        compact: l,
        children: I
    })
}