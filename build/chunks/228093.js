/** chunk id: 228093 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
}), n(321073);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(481613),
    s = n.n(a),
    o = n(397927),
    u = n(77729),
    c = n(521502),
    d = n(915089),
    h = n(206845),
    m = n(837921),
    f = n(985018),
    p = n(417891);

function v() {
    let e = (0, d.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "526174",
        l = "c78595d235b1553c388a1414f0c82c4c3aa2d4af".substring(0, 7),
        a = u.A?.app.getVersion(),
        v = u.A?.app.getBuildNumber(),
        y = u.A?.app.getAppArch(),
        g = c.A.getCurrentBuildOverride().overrides?.discord_web,
        _ = function() {
            let e = s()?.os?.toString();
            if (null == e || null == u.A) return null;
            let t = u.A.os.release,
                [n, r, l] = m.Ay.parsedOSRelease;
            return e.includes("Windows 10") && void 0 !== l && l >= 22e3 && (e = e.replace("Windows 10", "Windows 11")), e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n>=25?n+1:n-9}`), `${e} (${t})`
        }(),
        x = [t, n, `(${l})`];
    return null != a && (x.push(`Host ${a}`), null != y && x.push(y.toLowerCase()), null != v && x.push(`(${v})`)), x.push(`Build Override: ${null!=g?g.id:"N/A"}`), null != _ && x.push(_), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.A, {
            copyValue: x.join(" "),
            text: f.intl.string(f.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: s => (0, r.jsxs)(o.DUT, {
                ...s,
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
                            children: ["(", l, ")"]
                        })]
                    }), null != a && (0, r.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [a, null != y && (0, r.jsxs)("span", {
                            className: p.GI,
                            children: [" ", y.toLowerCase()]
                        }), null != v && (0, r.jsxs)("span", {
                            children: [" (", v, ")"]
                        })]
                    })]
                }), null != g && (0, r.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: (0, r.jsxs)("span", {
                        className: p.Pc,
                        children: ["Build Override: ", g.id]
                    })
                })]
            })
        }), (0, r.jsx)(o.AC4, {
            id: e,
            children: f.intl.string(f.t["9Al4Qd"])
        })]
    })
}