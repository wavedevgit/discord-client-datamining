/** chunk id: 986533 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(397927),
    s = n(709066),
    o = n(763754),
    c = n(643204),
    d = n(809115),
    u = n(888675),
    _ = n(652215),
    A = n(705751),
    m = n(985018),
    E = n(240775);

function T(e) {
    let {
        message: t,
        compact: n,
        usernameHook: l
    } = e, T = (0, o.Ay)(t), I = l(T), {
        avatarSrc: g,
        eventHandlers: {
            onMouseEnter: N,
            onMouseLeave: f
        }
    } = (0, d.a)(!0), C = "" !== t.content ? new Date(t.content).toLocaleString(m.intl.currentLocale, {
        hour: "numeric",
        minute: "2-digit",
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    }) : "";
    return (0, i.jsx)("div", {
        onMouseEnter: N,
        onMouseLeave: f,
        children: (0, i.jsx)(u.A, {
            className: a()(E.rs, {
                [E.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(d.l, {
                src: g
            }),
            iconContainerClassName: E.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(E.Qs, {
                    [E.oE]: n
                }),
                children: [(0, i.jsx)(c.ix, {
                    message: t,
                    messageClassname: E.he,
                    className: a()(E.QV, E.he, {
                        [E.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: E.he,
                        children: [(0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: E.Xh,
                            children: m.intl.string(m.t.hG1StD)
                        }), (0, i.jsx)(s.A, {
                            type: A.nu.SYSTEM_DM,
                            className: E.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: a()(E.__invalid_messageContent, {
                        [E.oE]: n
                    }),
                    children: t.type === _.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED ? m.intl.format(m.t["+m8eD7"], {
                        username: T.nick,
                        usernameHook: I,
                        time: C
                    }) : m.intl.format(m.t["BHeke+"], {
                        username: T.nick,
                        usernameHook: I
                    })
                })]
            })
        })
    })
}