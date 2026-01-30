/** Chunk was on 32502 **/
/** chunk id: 809465, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048), n(747238), n(812715), n(321073);
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(481613),
    a = n.n(r),
    o = n(397927),
    c = n(77729),
    d = n(521502),
    u = n(915089),
    h = n(206845),
    g = n(837921),
    x = n(985018),
    p = n(355893);

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function A(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function b(e) {
    var t, n, l, r, b;
    let {
        compact: j = !1
    } = e, O = (0, u.GV)(), E = window.GLOBAL_ENV.RELEASE_CHANNEL, S = "491643", f = "fc7879e5a74138964017813162726bdcc6a5ff9d".substring(0, 7), C = null === c.A || void 0 === c.A ? void 0 : c.A.remoteApp.getVersion(), v = null === c.A || void 0 === c.A || null == (t = (n = c.A.remoteApp).getBuildNumber) ? void 0 : t.call(n), y = null === c.A || void 0 === c.A || null == (l = (r = c.A.remoteApp).getAppArch) ? void 0 : l.call(r), T = null == (b = d.A.getCurrentBuildOverride().overrides) ? void 0 : b.discord_web, _ = function() {
        var e;
        let t = null === a() || void 0 === a() || null == (e = a().os) ? void 0 : e.toString();
        if (null == t || null == c.A) return null;
        let n = c.A.os.release,
            [i, l, s] = g.Ay.parsedOSRelease;
        return t.includes("Windows 10") && void 0 !== s && s >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && void 0 !== i && i >= 20 && (t = "macOS ".concat(i >= 25 ? i + 1 : i - 9)), "".concat(t, " (").concat(n, ")")
    }(), N = [E, S, "(".concat(f, ")")];
    return (null != C && (N.push("Host ".concat(C)), null != y && N.push(y.toLowerCase()), null != v && N.push("(".concat(v, ")"))), N.push("Build Override: ".concat(null != T ? T.id : "N/A")), null != _ && N.push(_), j) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(h.A, {
            copyValue: N.join(" "),
            text: x.intl.string(x.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: e => (0, i.jsxs)(o.DUT, A(m({}, e), {
                "aria-describedby": O,
                className: s()(p.vk, p.oE),
                children: [(0, i.jsxs)("div", {
                    className: p.Cr,
                    "data-mtctest-ignore": "true",
                    children: [(0, i.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [E, " ", S, " ", (0, i.jsxs)("span", {
                            className: p.Pc,
                            children: ["(", f, ")"]
                        })]
                    }), null != C && (0, i.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [C, null != y && (0, i.jsxs)("span", {
                            className: p.GI,
                            children: [" ", y.toLowerCase()]
                        }), null != v && (0, i.jsxs)("span", {
                            children: [" (", v, ")"]
                        })]
                    })]
                }), null != T && (0, i.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: (0, i.jsxs)("span", {
                        className: p.Pc,
                        children: ["Build Override: ", T.id]
                    })
                })]
            }))
        }), (0, i.jsx)(o.AC4, {
            id: O,
            children: x.intl.string(x.t["9Al4Qd"])
        })]
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(h.A, {
            copyValue: N.join(" "),
            text: x.intl.string(x.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: e => (0, i.jsx)(o.DUT, A(m({}, e), {
                "aria-describedby": O,
                className: s()(p.vk, p.oE),
                children: (0, i.jsxs)("div", {
                    className: p.pq,
                    "data-mtctest-ignore": "true",
                    children: [(0, i.jsxs)(o.Text, {
                        tag: "span",
                        className: p.n8,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [E, " ", S, " ", (0, i.jsxs)("span", {
                            className: p.Pc,
                            children: ["(", f, ")"]
                        })]
                    }), " ", null != T && (0, i.jsx)(o.Text, {
                        tag: "span",
                        className: p.n8,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: (0, i.jsxs)("span", {
                            className: p.Pc,
                            children: ["Build Override: ", T.id]
                        })
                    }), null != C ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(o.Text, {
                            tag: "span",
                            className: p.n8,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: ["Host ", C, " ", null != y ? (0, i.jsxs)("span", {
                                className: p.GI,
                                children: [y.toLowerCase(), " "]
                            }) : null, null != v ? (0, i.jsxs)("span", {
                                children: ["(", v, ")"]
                            }) : null]
                        }), " "]
                    }) : null, null != _ ? (0, i.jsx)(o.Text, {
                        tag: "span",
                        className: s()(p.n8, p.os),
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: _
                    }) : null]
                })
            }))
        }), (0, i.jsx)(o.AC4, {
            id: O,
            children: x.intl.string(x.t["9Al4Qd"])
        })]
    })
}