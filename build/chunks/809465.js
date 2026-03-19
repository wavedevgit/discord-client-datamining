/** chunk id: 809465 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
}), n(321073);
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(481613),
    l = n.n(s),
    o = n(397927),
    c = n(77729),
    u = n(521502),
    d = n(915089),
    m = n(206845),
    f = n(837921),
    h = n(985018),
    p = n(536087);

function g() {
    let e = (0, d.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "513724",
        a = "cb9ce355eab0f8a851b410e17d5f9371aa404041".substring(0, 7),
        s = c.A?.app.getVersion(),
        g = c.A?.app.getBuildNumber(),
        x = c.A?.app.getAppArch(),
        _ = u.A.getCurrentBuildOverride().overrides?.discord_web,
        y = function() {
            let e = l()?.os?.toString();
            if (null == e || null == c.A) return null;
            let t = c.A.os.release,
                [n, r, a] = f.Ay.parsedOSRelease;
            return e.includes("Windows 10") && void 0 !== a && a >= 22e3 && (e = e.replace("Windows 10", "Windows 11")), e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n>=25?n+1:n-9}`), `${e} (${t})`
        }(),
        b = [t, n, `(${a})`];
    return null != s && (b.push(`Host ${s}`), null != x && b.push(x.toLowerCase()), null != g && b.push(`(${g})`)), b.push(`Build Override: ${null!=_?_.id:"N/A"}`), null != y && b.push(y), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.A, {
            copyValue: b.join(" "),
            text: h.intl.string(h.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: l => (0, r.jsxs)(o.DUT, {
                ...l,
                "aria-describedby": e,
                className: i()(p.vk, p.oE),
                children: [(0, r.jsxs)("div", {
                    className: p.Cr,
                    "data-mtctest-ignore": "true",
                    children: [(0, r.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [t, " ", n, " ", (0, r.jsxs)("span", {
                            className: p.Pc,
                            children: ["(", a, ")"]
                        })]
                    }), null != s && (0, r.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [s, null != x && (0, r.jsxs)("span", {
                            className: p.GI,
                            children: [" ", x.toLowerCase()]
                        }), null != g && (0, r.jsxs)("span", {
                            children: [" (", g, ")"]
                        })]
                    })]
                }), null != _ && (0, r.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: (0, r.jsxs)("span", {
                        className: p.Pc,
                        children: ["Build Override: ", _.id]
                    })
                })]
            })
        }), (0, r.jsx)(o.AC4, {
            id: e,
            children: h.intl.string(h.t["9Al4Qd"])
        })]
    })
}