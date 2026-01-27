/** Chunk was on web.js **/
/** chunk id: 752063, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => D
}), n(747238), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(156828),
    l = n(389723),
    c = n(990078),
    u = n(397927),
    d = n(718468),
    f = n(417964),
    p = n(639169),
    _ = n(147925),
    h = n(255438),
    m = n(985018),
    g = n(772543),
    E = n(829681);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            y(e, t, n[t])
        })
    }
    return e
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function v(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function A(e) {
    var t;
    let n = "utf-8",
        r = null != (t = null == e ? void 0 : e.split("charset=").slice(-1)[0]) ? t : n;
    try {
        return new TextDecoder(r)
    } catch (t) {
        if ((null == e ? void 0 : e.startsWith("text")) || r.toLowerCase().includes("utf")) return new TextDecoder(n);
        throw t
    }
}

function I(e, t) {
    let [n, r] = i.useState(!1), [a, o] = i.useState(null), [s, l] = i.useState(1);
    return i.useEffect(() => {
        let n = 5e4;
        !async function() {
            try {
                var i, a;
                let s = await fetch(e, {
                        headers: {
                            Range: "bytes=0-".concat(n),
                            Accept: "text/plain"
                        }
                    }),
                    c = A(t).decode(await s.arrayBuffer()),
                    u = null != (i = s.headers.get("content-range")) ? i : "0",
                    d = null != (a = s.headers.get("content-length")) ? a : "1",
                    f = parseInt(u.split("/")[1]) - parseInt(d);
                o(0 === f ? c : c.slice(0, -1)), l(f), r(!1)
            } catch (e) {
                l(0), r(!0)
            }
        }()
    }, [e, t]), {
        fileContents: a,
        bytesLeft: s,
        hadError: n
    }
}

function S(e) {
    let {
        text: t,
        language: i
    } = e, a = () => (0, r.jsx)("pre", {
        children: (0, r.jsx)("code", {
            className: o()(E.kw, g.Xb, "hljs"),
            children: t
        })
    });
    return (0, r.jsx)(s.c2, {
        createPromise: () => Promise.resolve().then(n.bind(n, 752238)),
        webpackId: 752238,
        render: e => {
            if (!e.hasLanguage(i)) return a();
            let n = e.highlight(i, t, !0);
            return null == n ? a() : (0, r.jsx)("pre", {
                children: (0, r.jsx)("code", {
                    className: o()(E.kw, g.Xb, "hljs", n.language),
                    dangerouslySetInnerHTML: {
                        __html: n.value
                    }
                })
            })
        },
        renderFallback: () => a()
    })
}

function T(e) {
    let {
        expanded: t,
        setExpanded: n,
        isWholeFile: i,
        numLines: a
    } = e, o = m.intl.formatToPlainString(i ? m.t.Go5Vvs : m.t.yJcYan, {
        lines: a
    });
    return (0, r.jsx)(c.m, {
        asContainer: !0,
        text: "".concat(t ? m.intl.string(m.t.iTcuma) : m.intl.string(m.t.dcl9MQ), " (").concat(o, ")"),
        children: (0, r.jsxs)(u.DUT, {
            className: g.uk,
            onClick: () => {
                n(!t)
            },
            children: [(0, r.jsx)(_.A, {
                direction: t ? _.A.Directions.UP : _.A.Directions.DOWN
            }), t ? m.intl.string(m.t.iTcuma) : m.intl.string(m.t.dcl9MQ)]
        })
    })
}

function C(e) {
    let {
        url: t,
        fileName: n,
        fileSize: i
    } = e, a = "".concat(n, " (").concat((0, h.up)(i), ")");
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.m, {
            text: a,
            children: (0, r.jsx)("span", {
                className: o()(g.WS, g.Rr),
                children: n
            })
        }), (0, r.jsx)(c.m, {
            text: a,
            children: (0, r.jsx)("span", {
                className: o()(g.WS, g.Wz),
                children: (0, h.up)(i)
            })
        }), (0, r.jsx)(c.m, {
            text: "".concat(m.intl.string(m.t["1WjMbC"]), " ").concat(a),
            children: (0, r.jsx)(u.MzZ, {
                className: g.WS,
                href: t,
                target: "_blank",
                rel: "noreferrer noopener",
                children: (0, r.jsx)(u.s3U, {
                    size: "md",
                    color: "currentColor",
                    className: g.l6
                })
            })
        })]
    })
}

function N(e) {
    let {
        language: t,
        setLanguage: n,
        align: a
    } = e, o = i.useRef(null);
    return (0, r.jsx)(u.YNO, {
        targetElementRef: o,
        position: "left",
        align: a,
        renderPopout: e => {
            let {
                closePopout: i
            } = e;
            return (0, r.jsx)(u.lGe, {
                "aria-label": m.intl.string(m.t.utm4qs),
                children: (0, r.jsx)("div", {
                    className: g.md,
                    children: (0, r.jsxs)(l.iS, {
                        selectionMode: "single",
                        onSelectionChange: e => {
                            n(e), i()
                        },
                        options: Array.from(p.Q).map(e => ({
                            value: e,
                            label: e,
                            id: e
                        })),
                        value: t,
                        children: [(0, r.jsx)(l.a3, {
                            placeholder: m.intl.string(m.t.GofftW)
                        }), (0, r.jsx)(l.X2, {})]
                    })
                })
            })
        },
        children: e => (0, r.jsx)(c.m, {
            text: m.intl.string(m.t.utm4qs),
            children: (0, r.jsx)(u.GaO, v(b({}, e), {
                size: "md",
                color: "currentColor",
                className: g.N0,
                ref: o
            }))
        })
    })
}

function w(e) {
    return (0, r.jsx)(c.m, {
        asContainer: !0,
        text: m.intl.string(m.t["0PQYk3"]),
        children: (0, r.jsx)(u.DUT, {
            className: g.R1,
            onClick: () => {
                (0, u.qfG)(t => (0, r.jsx)(P, b({}, e, t)))
            },
            children: (0, r.jsx)(u._Xm, {
                size: "xs",
                color: "currentColor"
            })
        })
    })
}

function R(e) {
    var t;
    let {
        url: n,
        fileName: i,
        fileSize: a,
        fileContents: s,
        expanded: l,
        setExpanded: c,
        language: d,
        setLanguage: p,
        bytesLeft: _,
        className: E
    } = e, y = null == s ? void 0 : s.split("\n"), b = null != (t = null == y ? void 0 : y.length) ? t : 0, O = l ? 100 : 6, v = 0 === _, A = "";
    v && l && b > O ? A = "\n..." : v || (A = "..."), "" !== A && (v ? A += " " + m.intl.formatToPlainString(m.t.DQnFp2, {
        lines: b - O
    }) : A += " " + m.intl.formatToPlainString(m.t["1+gGcK"], {
        formattedBytes: (0, h.up)(_)
    }));
    let I = (null == y ? void 0 : y.slice(0, O).join("\n")) + A,
        R = (0, f.sJ)(I),
        P = l || O < b;
    return (0, r.jsxs)("div", {
        className: o()(E, g.kL),
        children: [(0, r.jsx)("div", {
            className: o()(g.FS, {
                [g.sz]: l
            }),
            children: null == s ? (0, r.jsx)(u.y$y, {
                className: g.u1
            }) : (0, r.jsx)(S, {
                text: R,
                language: d
            })
        }), (0, r.jsxs)(u.Text, {
            color: "text-default",
            className: g.qr,
            variant: "text-sm/normal",
            children: [P ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(T, {
                    expanded: l,
                    setExpanded: c,
                    isWholeFile: v,
                    numLines: b
                }), (0, r.jsx)(w, {
                    url: n,
                    fileName: i,
                    fileSize: a,
                    language: d,
                    fileContents: s,
                    bytesLeft: _
                })]
            }) : null, (0, r.jsx)("div", {
                className: g.Kb
            }), (0, r.jsx)(C, {
                url: n,
                fileName: i,
                fileSize: a
            }), (0, r.jsx)(N, {
                language: d,
                setLanguage: p,
                align: "top"
            })]
        })]
    })
}

function P(e) {
    let {
        url: t,
        fileName: n,
        fileSize: a,
        transitionState: o,
        language: s,
        fileContents: l,
        bytesLeft: c,
        onClose: d
    } = e, [f, p] = i.useState(s), _ = null != l ? l : "";
    return 0 !== c && (_ += "... ".concat(m.intl.formatToPlainString(m.t["1+gGcK"], {
        formattedBytes: (0, h.up)(c)
    }))), (0, r.jsx)(u.dWK, {
        transitionState: o,
        "aria-label": m.intl.string(m.t["qxQjc+"]),
        size: "xxl",
        onClose: d,
        children: (0, r.jsxs)("div", {
            className: g.jE,
            children: [(0, r.jsx)(u.IpV, {
                className: g.ot,
                children: null == l ? (0, r.jsx)(u.y$y, {
                    className: g.u1
                }) : (0, r.jsx)(S, {
                    text: _,
                    language: f
                })
            }), (0, r.jsxs)(u.Text, {
                color: "text-default",
                className: g.Hx,
                variant: "text-sm/normal",
                children: [(0, r.jsx)("div", {
                    className: g.Kb
                }), (0, r.jsx)(C, {
                    url: t,
                    fileName: n,
                    fileSize: a
                }), (0, r.jsx)(N, {
                    language: f,
                    setLanguage: p,
                    align: "bottom"
                })]
            })]
        })
    })
}
let D = i.memo(function(e) {
    let {
        url: t,
        fileName: n,
        fileSize: a,
        contentType: s,
        className: l,
        onClick: c,
        onContextMenu: u
    } = e, [f, p] = i.useState(!1), [_, h] = i.useState(n.split(".").slice(-1)[0]), {
        fileContents: m,
        bytesLeft: E,
        hadError: y
    } = I(t, s);
    return y ? (0, r.jsx)(d.A, {
        url: t,
        fileName: n,
        fileSize: a,
        onClick: c,
        onContextMenu: u,
        className: l
    }) : (0, r.jsx)(R, {
        url: t,
        fileName: n,
        fileSize: a,
        fileContents: m,
        bytesLeft: E,
        expanded: f,
        setExpanded: p,
        language: _,
        setLanguage: h,
        className: o()(g.mr, l)
    })
}, (e, t) => e.url === t.url && e.className === t.className)