/** chunk id: 809465, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048), n(747238), n(812715), n(321073);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(481613),
    a = n.n(s),
    o = n(397927),
    c = n(77729),
    u = n(521502),
    d = n(915089),
    p = n(206845),
    h = n(837921),
    g = n(985018),
    f = n(355893);

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function b(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function A(e) {
    var t, n, l, s, A;
    let {
        compact: y = !1
    } = e, O = (0, d.GV)(), j = window.GLOBAL_ENV.RELEASE_CHANNEL, x = "492796", _ = "de692bed5dd48ef64e9421df9836014c809fa218".substring(0, 7), v = null === c.A || void 0 === c.A ? void 0 : c.A.remoteApp.getVersion(), E = null === c.A || void 0 === c.A || null == (t = (n = c.A.remoteApp).getBuildNumber) ? void 0 : t.call(n), C = null === c.A || void 0 === c.A || null == (l = (s = c.A.remoteApp).getAppArch) ? void 0 : l.call(s), S = null == (A = u.A.getCurrentBuildOverride().overrides) ? void 0 : A.discord_web, I = function() {
        var e;
        let t = null === a() || void 0 === a() || null == (e = a().os) ? void 0 : e.toString();
        if (null == t || null == c.A) return null;
        let n = c.A.os.release,
            [r, l, i] = h.Ay.parsedOSRelease;
        return t.includes("Windows 10") && void 0 !== i && i >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && void 0 !== r && r >= 20 && (t = "macOS ".concat(r >= 25 ? r + 1 : r - 9)), "".concat(t, " (").concat(n, ")")
    }(), N = [j, x, "(".concat(_, ")")];
    return (null != v && (N.push("Host ".concat(v)), null != C && N.push(C.toLowerCase()), null != E && N.push("(".concat(E, ")"))), N.push("Build Override: ".concat(null != S ? S.id : "N/A")), null != I && N.push(I), y) ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.A, {
            copyValue: N.join(" "),
            text: g.intl.string(g.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: e => (0, r.jsxs)(o.DUT, b(m({}, e), {
                "aria-describedby": O,
                className: i()(f.vk, f.oE),
                children: [(0, r.jsxs)("div", {
                    className: f.Cr,
                    "data-mtctest-ignore": "true",
                    children: [(0, r.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [j, " ", x, " ", (0, r.jsxs)("span", {
                            className: f.Pc,
                            children: ["(", _, ")"]
                        })]
                    }), null != v && (0, r.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [v, null != C && (0, r.jsxs)("span", {
                            className: f.GI,
                            children: [" ", C.toLowerCase()]
                        }), null != E && (0, r.jsxs)("span", {
                            children: [" (", E, ")"]
                        })]
                    })]
                }), null != S && (0, r.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: (0, r.jsxs)("span", {
                        className: f.Pc,
                        children: ["Build Override: ", S.id]
                    })
                })]
            }))
        }), (0, r.jsx)(o.AC4, {
            id: O,
            children: g.intl.string(g.t["9Al4Qd"])
        })]
    }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.A, {
            copyValue: N.join(" "),
            text: g.intl.string(g.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: e => (0, r.jsx)(o.DUT, b(m({}, e), {
                "aria-describedby": O,
                className: i()(f.vk, f.oE),
                children: (0, r.jsxs)("div", {
                    className: f.pq,
                    "data-mtctest-ignore": "true",
                    children: [(0, r.jsxs)(o.Text, {
                        tag: "span",
                        className: f.n8,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [j, " ", x, " ", (0, r.jsxs)("span", {
                            className: f.Pc,
                            children: ["(", _, ")"]
                        })]
                    }), " ", null != S && (0, r.jsx)(o.Text, {
                        tag: "span",
                        className: f.n8,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: (0, r.jsxs)("span", {
                            className: f.Pc,
                            children: ["Build Override: ", S.id]
                        })
                    }), null != v ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(o.Text, {
                            tag: "span",
                            className: f.n8,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: ["Host ", v, " ", null != C ? (0, r.jsxs)("span", {
                                className: f.GI,
                                children: [C.toLowerCase(), " "]
                            }) : null, null != E ? (0, r.jsxs)("span", {
                                children: ["(", E, ")"]
                            }) : null]
                        }), " "]
                    }) : null, null != I ? (0, r.jsx)(o.Text, {
                        tag: "span",
                        className: i()(f.n8, f.os),
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: I
                    }) : null]
                })
            }))
        }), (0, r.jsx)(o.AC4, {
            id: O,
            children: g.intl.string(g.t["9Al4Qd"])
        })]
    })
}