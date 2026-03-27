/** chunk id: 986533 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    r = n(397927),
    s = n(709066),
    o = n(763754),
    c = n(643204),
    d = n(809115),
    u = n(888675),
    _ = n(652215),
    m = n(705751),
    A = n(985018),
    E = n(964516);

function I(e) {
    let {
        message: t,
        compact: n,
        usernameHook: a
    } = e, I = (0, o.Ay)(t), T = a(I), {
        avatarSrc: f,
        eventHandlers: {
            onMouseEnter: N,
            onMouseLeave: g
        }
    } = (0, d.a)(!0), C = "" !== t.content ? new Date(t.content).toLocaleString(A.intl.currentLocale, {
        hour: "numeric",
        minute: "2-digit",
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    }) : "";
    return (0, i.jsx)("div", {
        onMouseEnter: N,
        onMouseLeave: g,
        children: (0, i.jsx)(u.A, {
            className: l()(E.rs, {
                [E.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(d.l, {
                src: f
            }),
            iconContainerClassName: E.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: l()(E.Qs, {
                    [E.oE]: n
                }),
                children: [(0, i.jsx)(c.ix, {
                    message: t,
                    messageClassname: E.he,
                    className: l()(E.QV, E.he, {
                        [E.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: E.he,
                        children: [(0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: E.Xh,
                            children: A.intl.string(A.t.hG1StD)
                        }), (0, i.jsx)(s.A, {
                            type: m.nu.SYSTEM_DM,
                            className: E.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: l()(E.__invalid_messageContent, {
                        [E.oE]: n
                    }),
                    children: t.type === _.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED ? A.intl.format(A.t["+m8eD7"], {
                        username: I.nick,
                        usernameHook: T,
                        time: C
                    }) : A.intl.format(A.t["BHeke+"], {
                        username: I.nick,
                        usernameHook: T
                    })
                })]
            })
        })
    })
}