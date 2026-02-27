/** chunk id: 809465, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(321073);
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(481613),
    r = n.n(l),
    o = n(397927),
    c = n(77729),
    d = n(521502),
    u = n(915089),
    _ = n(206845),
    m = n(837921),
    A = n(985018),
    g = n(355893);

function h(e) {
    let {
        compact: t = !1
    } = e, n = (0, u.GV)(), s = window.GLOBAL_ENV.RELEASE_CHANNEL, l = "503170", h = "4695260f26b1b384c28a6230975a2c0439555479".substring(0, 7), x = c.A?.remoteApp.getVersion(), p = c.A?.remoteApp.getBuildNumber?.(), E = c.A?.remoteApp.getAppArch?.(), C = d.A.getCurrentBuildOverride().overrides?.discord_web, T = function() {
        let e = r()?.os?.toString();
        if (null == e || null == c.A) return null;
        let t = c.A.os.release,
            [n, i, s] = m.Ay.parsedOSRelease;
        return e.includes("Windows 10") && void 0 !== s && s >= 22e3 && (e = e.replace("Windows 10", "Windows 11")), e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n>=25?n+1:n-9}`), `${e} (${t})`
    }(), S = [s, l, `(${h})`];
    return (null != x && (S.push(`Host ${x}`), null != E && S.push(E.toLowerCase()), null != p && S.push(`(${p})`)), S.push(`Build Override: ${null!=C?C.id:"N/A"}`), null != T && S.push(T), t) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.A, {
            copyValue: S.join(" "),
            text: A.intl.string(A.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: e => (0, i.jsxs)(o.DUT, {
                ...e,
                "aria-describedby": n,
                className: a()(g.vk, g.oE),
                children: [(0, i.jsxs)("div", {
                    className: g.Cr,
                    "data-mtctest-ignore": "true",
                    children: [(0, i.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [s, " ", l, " ", (0, i.jsxs)("span", {
                            className: g.Pc,
                            children: ["(", h, ")"]
                        })]
                    }), null != x && (0, i.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [x, null != E && (0, i.jsxs)("span", {
                            className: g.GI,
                            children: [" ", E.toLowerCase()]
                        }), null != p && (0, i.jsxs)("span", {
                            children: [" (", p, ")"]
                        })]
                    })]
                }), null != C && (0, i.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: (0, i.jsxs)("span", {
                        className: g.Pc,
                        children: ["Build Override: ", C.id]
                    })
                })]
            })
        }), (0, i.jsx)(o.AC4, {
            id: n,
            children: A.intl.string(A.t["9Al4Qd"])
        })]
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.A, {
            copyValue: S.join(" "),
            text: A.intl.string(A.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: e => (0, i.jsx)(o.DUT, {
                ...e,
                "aria-describedby": n,
                className: a()(g.vk, g.oE),
                children: (0, i.jsxs)("div", {
                    className: g.pq,
                    "data-mtctest-ignore": "true",
                    children: [(0, i.jsxs)(o.Text, {
                        tag: "span",
                        className: g.n8,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [s, " ", l, " ", (0, i.jsxs)("span", {
                            className: g.Pc,
                            children: ["(", h, ")"]
                        })]
                    }), " ", null != C && (0, i.jsx)(o.Text, {
                        tag: "span",
                        className: g.n8,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: (0, i.jsxs)("span", {
                            className: g.Pc,
                            children: ["Build Override: ", C.id]
                        })
                    }), null != x ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(o.Text, {
                            tag: "span",
                            className: g.n8,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: ["Host ", x, " ", null != E ? (0, i.jsxs)("span", {
                                className: g.GI,
                                children: [E.toLowerCase(), " "]
                            }) : null, null != p ? (0, i.jsxs)("span", {
                                children: ["(", p, ")"]
                            }) : null]
                        }), " "]
                    }) : null, null != T ? (0, i.jsx)(o.Text, {
                        tag: "span",
                        className: a()(g.n8, g.os),
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: T
                    }) : null]
                })
            })
        }), (0, i.jsx)(o.AC4, {
            id: n,
            children: A.intl.string(A.t["9Al4Qd"])
        })]
    })
}