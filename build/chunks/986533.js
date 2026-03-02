/** chunk id: 986533, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
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
    m = n(652215),
    _ = n(705751),
    A = n(985018),
    f = n(234054);

function E(e) {
    let {
        message: t,
        compact: n,
        usernameHook: l
    } = e, E = (0, o.Ay)(t), h = l(E), {
        avatarSrc: g,
        eventHandlers: {
            onMouseEnter: p,
            onMouseLeave: x
        }
    } = (0, d.a)(!0), C = "" !== t.content ? new Date(t.content).toLocaleString(A.intl.currentLocale, {
        hour: "numeric",
        minute: "2-digit",
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    }) : "";
    return (0, i.jsx)("div", {
        onMouseEnter: p,
        onMouseLeave: x,
        children: (0, i.jsx)(u.A, {
            className: a()(f.rs, {
                [f.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(d.l, {
                src: g
            }),
            iconContainerClassName: f.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(f.Qs, {
                    [f.oE]: n
                }),
                children: [(0, i.jsx)(c.ix, {
                    message: t,
                    messageClassname: f.he,
                    className: a()(f.QV, f.he, {
                        [f.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: f.he,
                        children: [(0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: f.Xh,
                            children: A.intl.string(A.t.hG1StD)
                        }), (0, i.jsx)(s.A, {
                            type: _.nu.SYSTEM_DM,
                            className: f.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: a()(f.__invalid_messageContent, {
                        [f.oE]: n
                    }),
                    children: t.type === m.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED ? A.intl.format(A.t["+m8eD7"], {
                        username: E.nick,
                        usernameHook: h,
                        time: C
                    }) : A.intl.format(A.t["BHeke+"], {
                        username: E.nick,
                        usernameHook: h
                    })
                })]
            })
        })
    })
}