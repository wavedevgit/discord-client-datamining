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
    _ = n(206845),
    h = n(837921),
    f = n(985018),
    m = n(239444);

function p() {
    let e = (0, d.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "519872",
        i = "d366166aa6ef4a77d490892038be38f8ac1b7433".substring(0, 7),
        l = c.A?.app.getVersion(),
        p = c.A?.app.getBuildNumber(),
        v = c.A?.app.getAppArch(),
        y = u.A.getCurrentBuildOverride().overrides?.discord_web,
        b = function() {
            let e = s()?.os?.toString();
            if (null == e || null == c.A) return null;
            let t = c.A.os.release,
                [n, r, i] = h.Ay.parsedOSRelease;
            return e.includes("Windows 10") && void 0 !== i && i >= 22e3 && (e = e.replace("Windows 10", "Windows 11")), e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n>=25?n+1:n-9}`), `${e} (${t})`
        }(),
        g = [t, n, `(${i})`];
    return null != l && (g.push(`Host ${l}`), null != v && g.push(v.toLowerCase()), null != p && g.push(`(${p})`)), g.push(`Build Override: ${null!=y?y.id:"N/A"}`), null != b && g.push(b), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.A, {
            copyValue: g.join(" "),
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
                        children: [l, null != v && (0, r.jsxs)("span", {
                            className: m.GI,
                            children: [" ", v.toLowerCase()]
                        }), null != p && (0, r.jsxs)("span", {
                            children: [" (", p, ")"]
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
            children: f.intl.string(f.t["9Al4Qd"])
        })]
    })
}