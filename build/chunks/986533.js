/** chunk id: 986533 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
});
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(397927),
    a = n(709066),
    o = n(763754),
    c = n(643204),
    u = n(809115),
    d = n(888675),
    _ = n(652215),
    A = n(705751),
    E = n(985018),
    m = n(393239);

function I(e) {
    let {
        message: t,
        compact: n,
        usernameHook: r
    } = e, I = (0, o.Ay)(t), T = r(I), {
        avatarSrc: g,
        eventHandlers: {
            onMouseEnter: N,
            onMouseLeave: f
        }
    } = (0, u.a)(!0), C = "" !== t.content ? new Date(t.content).toLocaleString(E.intl.currentLocale, {
        hour: "numeric",
        minute: "2-digit",
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    }) : "";
    return (0, i.jsx)("div", {
        onMouseEnter: N,
        onMouseLeave: f,
        children: (0, i.jsx)(d.A, {
            className: l()(m.rs, {
                [m.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(u.l, {
                src: g
            }),
            iconContainerClassName: m.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: l()(m.Qs, {
                    [m.oE]: n
                }),
                children: [(0, i.jsx)(c.ix, {
                    message: t,
                    messageClassname: m.he,
                    className: l()(m.QV, m.he, {
                        [m.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: m.he,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: m.Xh,
                            children: E.intl.string(E.t.hG1StD)
                        }), (0, i.jsx)(a.A, {
                            type: A.nu.SYSTEM_DM,
                            className: m.Al
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: l()(m.__invalid_messageContent, {
                        [m.oE]: n
                    }),
                    children: t.type === _.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED ? E.intl.format(E.t["+m8eD7"], {
                        username: I.nick,
                        usernameHook: T,
                        time: C
                    }) : E.intl.format(E.t["BHeke+"], {
                        username: I.nick,
                        usernameHook: T
                    })
                })]
            })
        })
    })
}