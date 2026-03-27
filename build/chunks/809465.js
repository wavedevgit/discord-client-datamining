/** chunk id: 809465 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
}), n(321073);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(481613),
    s = n.n(l),
    o = n(397927),
    c = n(77729),
    u = n(521502),
    d = n(915089),
    h = n(206845),
    _ = n(837921),
    f = n(985018),
    m = n(239444);

function p() {
    let e = (0, d.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "518202",
        i = "87435abadf8d566d03cc30ce755f8b02d7a0a304".substring(0, 7),
        l = c.A?.app.getVersion(),
        p = c.A?.app.getBuildNumber(),
        y = c.A?.app.getAppArch(),
        v = u.A.getCurrentBuildOverride().overrides?.discord_web,
        g = function() {
            let e = s()?.os?.toString();
            if (null == e || null == c.A) return null;
            let t = c.A.os.release,
                [n, r, i] = _.Ay.parsedOSRelease;
            return e.includes("Windows 10") && void 0 !== i && i >= 22e3 && (e = e.replace("Windows 10", "Windows 11")), e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n>=25?n+1:n-9}`), `${e} (${t})`
        }(),
        b = [t, n, `(${i})`];
    return null != l && (b.push(`Host ${l}`), null != y && b.push(y.toLowerCase()), null != p && b.push(`(${p})`)), b.push(`Build Override: ${null!=v?v.id:"N/A"}`), null != g && b.push(g), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.A, {
            copyValue: b.join(" "),
            text: f.intl.string(f.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: s => (0, r.jsxs)(o.DUT, {
                ...s,
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
                    }), null != l && (0, r.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [l, null != y && (0, r.jsxs)("span", {
                            className: m.GI,
                            children: [" ", y.toLowerCase()]
                        }), null != p && (0, r.jsxs)("span", {
                            children: [" (", p, ")"]
                        })]
                    })]
                }), null != v && (0, r.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: (0, r.jsxs)("span", {
                        className: m.Pc,
                        children: ["Build Override: ", v.id]
                    })
                })]
            })
        }), (0, r.jsx)(o.AC4, {
            id: e,
            children: f.intl.string(f.t["9Al4Qd"])
        })]
    })
}