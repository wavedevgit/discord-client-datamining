/** Chunk was on 60449 **/
/** chunk id: 809465, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(896048), n(747238), n(812715), n(321073);
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(481613),
    a = n.n(r),
    o = n(397927),
    c = n(77729),
    d = n(521502),
    u = n(915089),
    g = n(206845),
    h = n(837921),
    x = n(985018),
    A = n(355893);

function p(e) {
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

function m(e, t) {
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

function j(e) {
    var t, n, s, r, j;
    let {
        compact: O = !1
    } = e, E = (0, u.GV)(), b = window.GLOBAL_ENV.RELEASE_CHANNEL, S = "490662", v = "f6b531ae9842a6669b83d399c264dfa3cdd3bf14".substring(0, 7), C = null === c.A || void 0 === c.A ? void 0 : c.A.remoteApp.getVersion(), f = null === c.A || void 0 === c.A || null == (t = (n = c.A.remoteApp).getBuildNumber) ? void 0 : t.call(n), T = null === c.A || void 0 === c.A || null == (s = (r = c.A.remoteApp).getAppArch) ? void 0 : s.call(r), N = null == (j = d.A.getCurrentBuildOverride().overrides) ? void 0 : j.discord_web, _ = function() {
        var e;
        let t = null === a() || void 0 === a() || null == (e = a().os) ? void 0 : e.toString();
        if (null == t || null == c.A) return null;
        let n = c.A.os.release,
            [i, s, l] = h.Ay.parsedOSRelease;
        return t.includes("Windows 10") && void 0 !== l && l >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && void 0 !== i && i >= 20 && (t = "macOS ".concat(i >= 25 ? i + 1 : i - 9)), "".concat(t, " (").concat(n, ")")
    }(), I = [b, S, "(".concat(v, ")")];
    return (null != C && (I.push("Host ".concat(C)), null != T && I.push(T.toLowerCase()), null != f && I.push("(".concat(f, ")"))), I.push("Build Override: ".concat(null != N ? N.id : "N/A")), null != _ && I.push(_), O) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(g.A, {
            copyValue: I.join(" "),
            text: x.intl.string(x.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: e => (0, i.jsxs)(o.DUT, m(p({}, e), {
                "aria-describedby": E,
                className: l()(A.vk, A.oE),
                children: [(0, i.jsxs)("div", {
                    className: A.Cr,
                    "data-mtctest-ignore": "true",
                    children: [(0, i.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [b, " ", S, " ", (0, i.jsxs)("span", {
                            className: A.Pc,
                            children: ["(", v, ")"]
                        })]
                    }), null != C && (0, i.jsxs)(o.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [C, null != T && (0, i.jsxs)("span", {
                            className: A.GI,
                            children: [" ", T.toLowerCase()]
                        }), null != f && (0, i.jsxs)("span", {
                            children: [" (", f, ")"]
                        })]
                    })]
                }), null != N && (0, i.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: (0, i.jsxs)("span", {
                        className: A.Pc,
                        children: ["Build Override: ", N.id]
                    })
                })]
            }))
        }), (0, i.jsx)(o.AC4, {
            id: E,
            children: x.intl.string(x.t["9Al4Qd"])
        })]
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(g.A, {
            copyValue: I.join(" "),
            text: x.intl.string(x.t["9Al4Qd"]),
            "aria-label": !1,
            dataMeticulousIgnore: "true",
            children: e => (0, i.jsx)(o.DUT, m(p({}, e), {
                "aria-describedby": E,
                className: l()(A.vk, A.oE),
                children: (0, i.jsxs)("div", {
                    className: A.pq,
                    "data-mtctest-ignore": "true",
                    children: [(0, i.jsxs)(o.Text, {
                        tag: "span",
                        className: A.n8,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [b, " ", S, " ", (0, i.jsxs)("span", {
                            className: A.Pc,
                            children: ["(", v, ")"]
                        })]
                    }), " ", null != N && (0, i.jsx)(o.Text, {
                        tag: "span",
                        className: A.n8,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: (0, i.jsxs)("span", {
                            className: A.Pc,
                            children: ["Build Override: ", N.id]
                        })
                    }), null != C ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(o.Text, {
                            tag: "span",
                            className: A.n8,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: ["Host ", C, " ", null != T ? (0, i.jsxs)("span", {
                                className: A.GI,
                                children: [T.toLowerCase(), " "]
                            }) : null, null != f ? (0, i.jsxs)("span", {
                                children: ["(", f, ")"]
                            }) : null]
                        }), " "]
                    }) : null, null != _ ? (0, i.jsx)(o.Text, {
                        tag: "span",
                        className: l()(A.n8, A.os),
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: _
                    }) : null]
                })
            }))
        }), (0, i.jsx)(o.AC4, {
            id: E,
            children: x.intl.string(x.t["9Al4Qd"])
        })]
    })
}