/** chunk id: 640068, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048), n(228524), n(457529), n(321073), n(638769);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(100392),
    d = n(102609),
    u = n(271478),
    h = n(49463),
    g = n(386976),
    x = n(257433),
    p = n(32523),
    m = n(961350),
    A = n(71393),
    b = n(957565),
    j = n(222735),
    O = n(688151),
    E = n(612422);

function S(e) {
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

function f() {
    let {
        experiments: e,
        overridesInfo: t
    } = (0, g.op)(), {
        experiments: n,
        overridesInfo: s
    } = (0, p.hI)(), r = l.useMemo(() => S({}, n, e), [n, e]), a = l.useMemo(() => S({}, s, t), [s, t]), [c, d] = l.useState(""), u = (0, j.oC)((0, j.R3)((0, j.Fm)(r), a), c);
    return (0, i.jsxs)("div", {
        "data-mtctest-ignore": "true",
        children: [(0, i.jsx)(o.IWV, {
            placeholder: "Search experiments",
            query: c,
            onChange: d,
            onClear: () => d("")
        }), u.length > 0 ? u.map(e => {
            let t = "guild" === e.experiment.kind ? v : C;
            return (0, i.jsx)(t, {
                experiment: e.experiment,
                experimentId: e.id,
                overrideInfo: a[e.id],
                defaultOpen: null != a[e.id]
            }, e.id)
        }) : (0, i.jsx)("div", {
            className: E.p$,
            children: (0, i.jsx)(o.Heading, {
                variant: "heading-md/semibold",
                children: "No Experiments Found"
            })
        })]
    })
}

function C(e) {
    let {
        experiment: t,
        experimentId: n,
        overrideInfo: s,
        defaultOpen: g
    } = e, [p, A] = l.useState(g), [j, S] = l.useState(!1), f = l.useCallback(() => {
        A(e => !e)
    }, []), C = (0, a.bG)([m.default], () => m.default.getId()), v = (0, x.iN)(t, C), y = (0, x.Fm)(t, C), T = (0, a.yK)([h.A], () => r().sortBy(h.A.getRecentExposures(O.Vh.USER, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
    })), _ = l.useCallback(e => {
        (0, b.C)((0, c.yA)(n), () => {
            (0, o.showToast)({
                id: "experiment-link-copied",
                message: "Copied experiment link",
                type: o.ToastType.SUCCESS
            }), e.preventDefault(), e.stopPropagation()
        })
    }, [n]), N = (0, i.jsx)(o.sqX, {
        "aria-label": "Toggle visibility",
        onClick: f,
        children: (0, i.jsxs)(o.Text, {
            variant: "text-md/medium",
            className: E.DD,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsxs)(o.BJc, {
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    children: [t.title, " ", b.p5 && (0, i.jsx)(o.DUT, {
                        onClick: _,
                        children: (0, i.jsx)(o.qYV, {
                            size: "xs"
                        })
                    })]
                }), (0, i.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: n
                })]
            }), (0, i.jsx)("span", {
                className: E.km,
                children: "User"
            })]
        })
    });
    if (!p) return (0, i.jsx)("div", {
        className: E.Os,
        children: N
    });
    let I = "";
    return I = t.system === d.l5.LEGACY ? "Currently assigned to bucket ".concat(null != v ? v : O.RE.NOT_ELIGIBLE) : null != v ? "Currently assigned to variant ".concat(v) : "Currently unassigned", (0, i.jsxs)("div", {
        className: E.Os,
        children: [N, (0, i.jsx)("div", {
            children: (0, i.jsx)(u.g, {
                label: t.system === d.l5.LEGACY ? "Bucket Override" : "Variant Override",
                description: I,
                experiment: t,
                experimentId: n,
                overrideInfo: s
            })
        }), (0, i.jsx)("div", {
            className: E.h_,
            children: null == y ? (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), j ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: null == y ? "None" : JSON.stringify(y, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Override Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: (null == s ? void 0 : s.originalDescriptor) == null ? "None" : JSON.stringify(s.originalDescriptor, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Recent Exposures"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: 0 === T.length ? "None" : T.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: E.id,
            children: (0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => S(!0)
            })
        }), (0, i.jsx)(o.cGx, {
            className: E.yF
        })]
    })
}

function v(e) {
    let {
        experiment: t,
        experimentId: n,
        overrideInfo: s
    } = e, [c, d] = l.useState(null != s), [g, x] = l.useState(!1), p = l.useCallback(() => {
        d(e => !e)
    }, []), m = (0, a.bG)([h.A], () => h.A.getLoadedGuildExperiment(n)), b = (0, a.yK)([h.A], () => r().sortBy(h.A.getRecentExposures(O.Vh.GUILD, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
    })), [j, S] = (0, a.yK)([A.A, h.A], () => {
        let e = r().sortBy(A.A.getGuildsArray(), e => e.name.toLowerCase()),
            t = {},
            i = [];
        for (let s of e) {
            var l;
            let e = h.A.getGuildExperimentDescriptor(n, s.id),
                r = null != (l = null == e ? void 0 : e.bucket) ? l : O.RE.NOT_ELIGIBLE;
            r in t || (t[r] = 0), t[r]++, i.push("".concat(s.name, ": ").concat(r))
        }
        let s = r()(t).keys().map(Number).sort().map(e => "".concat(t[e], " guilds in bucket ").concat(e)).join(", ");
        return [i.join("\n"), s]
    }), f = (0, i.jsx)(o.DUT, {
        onClick: p,
        children: (0, i.jsxs)(o.Text, {
            variant: "text-md/medium",
            className: E.DD,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)("span", {
                    children: t.title
                }), (0, i.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: n
                })]
            }), (0, i.jsx)("span", {
                className: E.km,
                children: "Guild"
            })]
        })
    });
    return c ? (0, i.jsxs)("div", {
        className: E.Os,
        children: [f, (0, i.jsx)(u.g, {
            label: "Bucket Override",
            description: "Current Assignments: ".concat(S),
            experiment: t,
            experimentId: n,
            overrideInfo: s
        }), (0, i.jsx)("div", {
            className: E.h_,
            children: null == m ? (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), g ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Guild Assignments"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: j
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: null == m ? "None" : JSON.stringify(m, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Override Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: (null == s ? void 0 : s.originalDescriptor) == null ? "None" : JSON.stringify(s.originalDescriptor, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Recent Exposures"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: 0 === b.length ? "None" : b.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: E.id,
            children: (0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => x(!0)
            })
        }), (0, i.jsx)(o.cGx, {
            className: E.yF
        })]
    }) : (0, i.jsx)("div", {
        className: E.Os,
        children: f
    })
}