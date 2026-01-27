/** Chunk was on 92917 **/
/** chunk id: 986533, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(397927),
    s = n(709066),
    o = n(763754),
    c = n(643204),
    u = n(809115),
    d = n(888675),
    p = n(652215),
    m = n(705751),
    f = n(985018),
    g = n(234054);

function h(e) {
    let {
        message: t,
        compact: n,
        usernameHook: i
    } = e, h = (0, o.Ay)(t), _ = i(h), {
        avatarSrc: b,
        eventHandlers: {
            onMouseEnter: A,
            onMouseLeave: y
        }
    } = (0, u.a)(!0), v = "" !== t.content ? new Date(t.content).toLocaleString(f.intl.currentLocale, {
        hour: "numeric",
        minute: "2-digit",
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    }) : "";
    return (0, r.jsx)("div", {
        onMouseEnter: A,
        onMouseLeave: y,
        children: (0, r.jsx)(d.A, {
            className: l()(g.rs, {
                [g.oE]: n
            }),
            iconNode: n ? null : (0, r.jsx)(u.l, {
                src: b
            }),
            iconContainerClassName: g.zc,
            compact: n,
            children: (0, r.jsxs)("div", {
                className: l()(g.Qs, {
                    [g.oE]: n
                }),
                children: [(0, r.jsx)(c.ix, {
                    message: t,
                    messageClassname: g.he,
                    className: l()(g.QV, g.he, {
                        [g.oE]: n
                    }),
                    username: (0, r.jsxs)("div", {
                        className: g.he,
                        children: [(0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: g.Xh,
                            children: f.intl.string(f.t.hG1StD)
                        }), (0, r.jsx)(s.A, {
                            type: m.nu.SYSTEM_DM,
                            className: g.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, r.jsx)("div", {
                    className: l()(g.__invalid_messageContent, {
                        [g.oE]: n
                    }),
                    children: t.type === p.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED ? f.intl.format(f.t["+m8eD7"], {
                        username: h.nick,
                        usernameHook: _,
                        time: v
                    }) : f.intl.format(f.t["BHeke+"], {
                        username: h.nick,
                        usernameHook: _
                    })
                })]
            })
        })
    })
}