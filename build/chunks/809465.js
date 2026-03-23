/** chunk id: 809465 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => p
}), r(321073);
var n = r(627968);
r(64700);
var a = r(503698),
    i = r.n(a),
    l = r(481613),
    s = r.n(l),
    o = r(397927),
    c = r(77729),
    u = r(521502),
    d = r(915089),
    h = r(206845),
    f = r(837921),
    _ = r(985018),
    m = r(355893);

function p() {
    let e = (0, d.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        r = "514744",
        a = "7e8b53023714e8fe8add9d8803540cb069a26015".substring(0, 7),
        l = c.A?.app.getVersion(),
        p = c.A?.app.getBuildNumber(),
        g = c.A?.app.getAppArch(),
        b = u.A.getCurrentBuildOverride().overrides?.discord_web,
        y = function() {
            let e = s()?.os?.toString();
            if (null == e || null == c.A) return null;
            let t = c.A.os.release,
                [r, n, a] = f.Ay.parsedOSRelease;
            return e.includes("Windows 10") && void 0 !== a && a >= 22e3 && (e = e.replace("Windows 10", "Windows 11")), e.includes("OS X 10.15.7") && void 0 !== r && r >= 20 && (e = `macOS ${r>=25?r+1:r-9}`), `${e} (${t})`
        }(),
        v = [t, r, `(${a})`];
    return null != l && (v.push(`Host ${l}`), null != g && v.push(g.toLowerCase()), null != p && v.push(`(${p})`)), v.push(`Build Override: ${null!=b?b.id:"N/A"}`), null != y && v.push(y), (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(h.A, {
            copyValue: v.join(" "),
            text: _.intl.string(_.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: s => (0, n.jsxs)(o.DUT, {
                ...s,
                "aria-describedby": e,
                className: i()(m.vk, m.oE),
                children: [(0, n.jsxs)("div", {
                    className: m.Cr,
                    "data-mtctest-ignore": "true",
                    children: [(0, n.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [t, " ", r, " ", (0, n.jsxs)("span", {
                            className: m.Pc,
                            children: ["(", a, ")"]
                        })]
                    }), null != l && (0, n.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [l, null != g && (0, n.jsxs)("span", {
                            className: m.GI,
                            children: [" ", g.toLowerCase()]
                        }), null != p && (0, n.jsxs)("span", {
                            children: [" (", p, ")"]
                        })]
                    })]
                }), null != b && (0, n.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: (0, n.jsxs)("span", {
                        className: m.Pc,
                        children: ["Build Override: ", b.id]
                    })
                })]
            })
        }), (0, n.jsx)(o.AC4, {
            id: e,
            children: _.intl.string(_.t["9Al4Qd"])
        })]
    })
}