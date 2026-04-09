/** chunk id: 228093 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
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
    m = n(837921),
    p = n(985018),
    f = n(738532);

function _() {
    let e = (0, d.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "526455",
        i = "996dc1b4c84abb1a32498fc75460fe825d36e4c5".substring(0, 7),
        s = u.A?.app.getVersion(),
        _ = u.A?.app.getBuildNumber(),
        g = u.A?.app.getAppArch(),
        y = c.A.getCurrentBuildOverride().overrides?.discord_web,
        v = function() {
            let e = l()?.os?.toString();
            if (null == e || null == u.A) return null;
            let t = u.A.os.release,
                [n, r, i] = m.Ay.parsedOSRelease;
            return e.includes("Windows 10") && void 0 !== i && i >= 22e3 && (e = e.replace("Windows 10", "Windows 11")), e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n>=25?n+1:n-9}`), `${e} (${t})`
        }(),
        x = [t, n, `(${i})`];
    return null != s && (x.push(`Host ${s}`), null != g && x.push(g.toLowerCase()), null != _ && x.push(`(${_})`)), x.push(`Build Override: ${null!=y?y.id:"N/A"}`), null != v && x.push(v), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.A, {
            copyValue: x.join(" "),
            text: p.intl.string(p.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: l => (0, r.jsxs)(o.DUT, {
                ...l,
                "aria-describedby": e,
                className: a()(f.vk, f.oE),
                children: [(0, r.jsxs)("div", {
                    className: f.Cr,
                    "data-mtctest-ignore": "true",
                    children: [(0, r.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [t, " ", n, " ", (0, r.jsxs)("span", {
                            className: f.Pc,
                            children: ["(", i, ")"]
                        })]
                    }), null != s && (0, r.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [s, null != g && (0, r.jsxs)("span", {
                            className: f.GI,
                            children: [" ", g.toLowerCase()]
                        }), null != _ && (0, r.jsxs)("span", {
                            children: [" (", _, ")"]
                        })]
                    })]
                }), null != y && (0, r.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: (0, r.jsxs)("span", {
                        className: f.Pc,
                        children: ["Build Override: ", y.id]
                    })
                })]
            })
        }), (0, r.jsx)(o.AC4, {
            id: e,
            children: p.intl.string(p.t["9Al4Qd"])
        })]
    })
}