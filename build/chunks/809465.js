/** chunk id: 809465 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
}), n(321073);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(481613),
    l = n.n(s),
    o = n(397927),
    c = n(77729),
    u = n(521502),
    d = n(915089),
    m = n(206845),
    f = n(837921),
    h = n(985018),
    g = n(536087);

function p() {
    let e = (0, d.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "513918",
        i = "a4904571fa7e8ee322425b986b19d85462986902".substring(0, 7),
        s = c.A?.app.getVersion(),
        p = c.A?.app.getBuildNumber(),
        x = c.A?.app.getAppArch(),
        _ = u.A.getCurrentBuildOverride().overrides?.discord_web,
        b = function() {
            let e = l()?.os?.toString();
            if (null == e || null == c.A) return null;
            let t = c.A.os.release,
                [n, r, i] = f.Ay.parsedOSRelease;
            return e.includes("Windows 10") && void 0 !== i && i >= 22e3 && (e = e.replace("Windows 10", "Windows 11")), e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n>=25?n+1:n-9}`), `${e} (${t})`
        }(),
        y = [t, n, `(${i})`];
    return null != s && (y.push(`Host ${s}`), null != x && y.push(x.toLowerCase()), null != p && y.push(`(${p})`)), y.push(`Build Override: ${null!=_?_.id:"N/A"}`), null != b && y.push(b), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.A, {
            copyValue: y.join(" "),
            text: h.intl.string(h.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: l => (0, r.jsxs)(o.DUT, {
                ...l,
                "aria-describedby": e,
                className: a()(g.vk, g.oE),
                children: [(0, r.jsxs)("div", {
                    className: g.Cr,
                    "data-mtctest-ignore": "true",
                    children: [(0, r.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [t, " ", n, " ", (0, r.jsxs)("span", {
                            className: g.Pc,
                            children: ["(", i, ")"]
                        })]
                    }), null != s && (0, r.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [s, null != x && (0, r.jsxs)("span", {
                            className: g.GI,
                            children: [" ", x.toLowerCase()]
                        }), null != p && (0, r.jsxs)("span", {
                            children: [" (", p, ")"]
                        })]
                    })]
                }), null != _ && (0, r.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: (0, r.jsxs)("span", {
                        className: g.Pc,
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