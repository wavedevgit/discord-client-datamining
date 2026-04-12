/** chunk id: 228093 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(321073);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(481613),
    l = n.n(s),
    o = n(397927),
    u = n(77729),
    c = n(521502),
    d = n(915089),
    h = n(206845),
    p = n(837921),
    _ = n(985018),
    m = n(738532);

function f() {
    let e = (0, d.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "527381",
        i = "1ddc89c10990a38fc9be7981a3f4c01c7c3720bc".substring(0, 7),
        s = u.A?.app.getVersion(),
        f = u.A?.app.getBuildNumber(),
        g = u.A?.app.getAppArch(),
        y = c.A.getCurrentBuildOverride().overrides?.discord_web,
        v = function() {
            let e = l()?.os?.toString();
            if (null == e || null == u.A) return null;
            let t = u.A.os.release,
                [n, r, i] = p.Ay.parsedOSRelease;
            return e.includes("Windows 10") && void 0 !== i && i >= 22e3 && (e = e.replace("Windows 10", "Windows 11")), e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n>=25?n+1:n-9}`), `${e} (${t})`
        }(),
        S = [t, n, `(${i})`];
    return null != s && (S.push(`Host ${s}`), null != g && S.push(g.toLowerCase()), null != f && S.push(`(${f})`)), S.push(`Build Override: ${null!=y?y.id:"N/A"}`), null != v && S.push(v), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.A, {
            copyValue: S.join(" "),
            text: _.intl.string(_.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: l => (0, r.jsxs)(o.DUT, {
                ...l,
                "aria-describedby": e,
                className: a()(m.vk, m.oE),
                children: [(0, r.jsxs)("div", {
                    className: m.Cr,
                    "data-mtctest-ignore": "true",
                    children: [(0, r.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [t, " ", n, " ", (0, r.jsxs)("span", {
                            className: m.Pc,
                            children: ["(", i, ")"]
                        })]
                    }), null != s && (0, r.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [s, null != g && (0, r.jsxs)("span", {
                            className: m.GI,
                            children: [" ", g.toLowerCase()]
                        }), null != f && (0, r.jsxs)("span", {
                            children: [" (", f, ")"]
                        })]
                    })]
                }), null != y && (0, r.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: (0, r.jsxs)("span", {
                        className: m.Pc,
                        children: ["Build Override: ", y.id]
                    })
                })]
            })
        }), (0, r.jsx)(o.AC4, {
            id: e,
            children: _.intl.string(_.t["9Al4Qd"])
        })]
    })
}