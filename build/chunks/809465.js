/** chunk id: 809465 params = (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(321073);
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(481613),
    a = n.n(r),
    o = n(397927),
    d = n(77729),
    c = n(521502),
    u = n(915089),
    _ = n(206845),
    m = n(837921),
    g = n(985018),
    A = n(536087);

function h(e) {
    let {
        compact: t = !1
    } = e, n = (0, u.GV)(), s = window.GLOBAL_ENV.RELEASE_CHANNEL, r = "511049", h = "c5cf92385f447a1c586635d929094a3fff25278d".substring(0, 7), x = d.A?.app.getVersion(), p = d.A?.app.getBuildNumber(), T = d.A?.app.getAppArch(), E = c.A.getCurrentBuildOverride().overrides?.discord_web, C = function() {
        let e = a()?.os?.toString();
        if (null == e || null == d.A) return null;
        let t = d.A.os.release,
            [n, i, s] = m.Ay.parsedOSRelease;
        return e.includes("Windows 10") && void 0 !== s && s >= 22e3 && (e = e.replace("Windows 10", "Windows 11")), e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n>=25?n+1:n-9}`), `${e} (${t})`
    }(), S = [s, r, `(${h})`];
    return (null != x && (S.push(`Host ${x}`), null != T && S.push(T.toLowerCase()), null != p && S.push(`(${p})`)), S.push(`Build Override: ${null!=E?E.id:"N/A"}`), null != C && S.push(C), t) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.A, {
            copyValue: S.join(" "),
            text: g.intl.string(g.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: e => (0, i.jsxs)(o.DUT, {
                ...e,
                "aria-describedby": n,
                className: l()(A.vk, A.oE),
                children: [(0, i.jsxs)("div", {
                    className: A.Cr,
                    "data-mtctest-ignore": "true",
                    children: [(0, i.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [s, " ", r, " ", (0, i.jsxs)("span", {
                            className: A.Pc,
                            children: ["(", h, ")"]
                        })]
                    }), null != x && (0, i.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [x, null != T && (0, i.jsxs)("span", {
                            className: A.GI,
                            children: [" ", T.toLowerCase()]
                        }), null != p && (0, i.jsxs)("span", {
                            children: [" (", p, ")"]
                        })]
                    })]
                }), null != E && (0, i.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: (0, i.jsxs)("span", {
                        className: A.Pc,
                        children: ["Build Override: ", E.id]
                    })
                })]
            })
        }), (0, i.jsx)(o.AC4, {
            id: n,
            children: g.intl.string(g.t["9Al4Qd"])
        })]
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.A, {
            copyValue: S.join(" "),
            text: g.intl.string(g.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: e => (0, i.jsx)(o.DUT, {
                ...e,
                "aria-describedby": n,
                className: l()(A.vk, A.oE),
                children: (0, i.jsxs)("div", {
                    className: A.pq,
                    "data-mtctest-ignore": "true",
                    children: [(0, i.jsxs)(o.Text, {
                        tag: "span",
                        className: A.n8,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [s, " ", r, " ", (0, i.jsxs)("span", {
                            className: A.Pc,
                            children: ["(", h, ")"]
                        })]
                    }), " ", null != E && (0, i.jsx)(o.Text, {
                        tag: "span",
                        className: A.n8,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: (0, i.jsxs)("span", {
                            className: A.Pc,
                            children: ["Build Override: ", E.id]
                        })
                    }), null != x ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(o.Text, {
                            tag: "span",
                            className: A.n8,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: ["Host ", x, " ", null != T ? (0, i.jsxs)("span", {
                                className: A.GI,
                                children: [T.toLowerCase(), " "]
                            }) : null, null != p ? (0, i.jsxs)("span", {
                                children: ["(", p, ")"]
                            }) : null]
                        }), " "]
                    }) : null, null != C ? (0, i.jsx)(o.Text, {
                        tag: "span",
                        className: l()(A.n8, A.os),
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: C
                    }) : null]
                })
            })
        }), (0, i.jsx)(o.AC4, {
            id: n,
            children: g.intl.string(g.t["9Al4Qd"])
        })]
    })
}