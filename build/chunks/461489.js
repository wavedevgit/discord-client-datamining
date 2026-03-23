/** chunk id: 461489 params = (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(100392),
    c = n(102609),
    u = n(271478),
    m = n(49463),
    _ = n(386976),
    g = n(257433),
    A = n(32523),
    x = n(961350),
    p = n(71393),
    h = n(957565),
    f = n(222735),
    T = n(688151),
    E = n(775105);

function S() {
    let {
        experiments: e,
        overridesInfo: t
    } = (0, _.op)(), {
        experiments: n,
        overridesInfo: l
    } = (0, A.hI)(), a = s.useMemo(() => ({
        ...n,
        ...e
    }), [n, e]), r = s.useMemo(() => ({
        ...l,
        ...t
    }), [l, t]), [d, c] = s.useState(""), u = (0, f.oC)((0, f.R3)((0, f.Fm)(a), r), d);
    return (0, i.jsxs)("div", {
        "data-mtctest-ignore": "true",
        children: [(0, i.jsx)(o.IWV, {
            placeholder: "Search experiments",
            query: d,
            onChange: c,
            onClear: () => c("")
        }), u.length > 0 ? u.map(e => {
            let t = "guild" === e.experiment.kind ? C : b;
            return (0, i.jsx)(t, {
                experiment: e.experiment,
                experimentId: e.id,
                overrideInfo: r[e.id],
                defaultOpen: null != r[e.id]
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

function b(e) {
    let {
        experiment: t,
        experimentId: n,
        overrideInfo: l,
        defaultOpen: _
    } = e, [A, p] = s.useState(_), [f, S] = s.useState(!1), b = s.useCallback(() => {
        p(e => !e)
    }, []), C = (0, r.bG)([x.default], () => x.default.getId()), N = (0, g.iN)(t, C), v = (0, g.Fm)(t, C), I = (0, r.yK)([m.A], () => a().sortBy(m.A.getRecentExposures(T.Vh.USER, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return `${new Date(n).toLocaleString()} (${t})`
    })), j = s.useCallback(e => {
        (0, h.C)((0, d.yA)(n), () => {
            (0, o.showToast)({
                id: "experiment-link-copied",
                message: "Copied experiment link",
                type: o.ToastType.SUCCESS
            }), e.preventDefault(), e.stopPropagation()
        })
    }, [n]), y = (0, i.jsx)(o.sqX, {
        "aria-label": "Toggle visibility",
        onClick: b,
        children: (0, i.jsxs)(o.Text, {
            variant: "text-md/medium",
            className: E.DD,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsxs)(o.BJc, {
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    children: [t.title, " ", h.p5 && (0, i.jsx)(o.DUT, {
                        onClick: j,
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
    if (!A) return (0, i.jsx)("div", {
        className: E.Os,
        children: y
    });
    let O = "";
    return O = t.system === c.l5.LEGACY ? `Currently assigned to bucket ${N??T.RE.NOT_ELIGIBLE}` : null != N ? `Currently assigned to variant ${N}` : "Currently unassigned", (0, i.jsxs)("div", {
        className: E.Os,
        children: [y, (0, i.jsx)("div", {
            children: (0, i.jsx)(u.g, {
                label: t.system === c.l5.LEGACY ? "Bucket Override" : "Variant Override",
                description: O,
                experiment: t,
                experimentId: n,
                overrideInfo: l
            })
        }), (0, i.jsx)("div", {
            className: E.h_,
            children: null == v ? (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), f ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: null == v ? "None" : JSON.stringify(v, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Override Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: l?.originalDescriptor == null ? "None" : JSON.stringify(l.originalDescriptor, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Recent Exposures"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: 0 === I.length ? "None" : I.join("\n")
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

function C(e) {
    let {
        experiment: t,
        experimentId: n,
        overrideInfo: l
    } = e, [d, c] = s.useState(null != l), [_, g] = s.useState(!1), A = s.useCallback(() => {
        c(e => !e)
    }, []), x = (0, r.bG)([m.A], () => m.A.getLoadedGuildExperiment(n)), h = (0, r.yK)([m.A], () => a().sortBy(m.A.getRecentExposures(T.Vh.GUILD, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return `${new Date(n).toLocaleString()} (${t})`
    })), [f, S] = (0, r.yK)([p.A, m.A], () => {
        let e = a().sortBy(p.A.getGuildsArray(), e => e.name.toLowerCase()),
            t = {},
            i = [];
        for (let s of e) {
            let e = m.A.getGuildExperimentDescriptor(n, s.id),
                l = e?.bucket ?? T.RE.NOT_ELIGIBLE;
            l in t || (t[l] = 0), t[l]++, i.push(`${s.name}: ${l}`)
        }
        let s = a()(t).keys().map(Number).sort().map(e => `${t[e]} guilds in bucket ${e}`).join(", ");
        return [i.join("\n"), s]
    }), b = (0, i.jsx)(o.DUT, {
        onClick: A,
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
    return d ? (0, i.jsxs)("div", {
        className: E.Os,
        children: [b, (0, i.jsx)(u.g, {
            label: "Bucket Override",
            description: `Current Assignments: ${S}`,
            experiment: t,
            experimentId: n,
            overrideInfo: l
        }), (0, i.jsx)("div", {
            className: E.h_,
            children: null == x ? (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), _ ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Guild Assignments"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: f
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: null == x ? "None" : JSON.stringify(x, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Override Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: l?.originalDescriptor == null ? "None" : JSON.stringify(l.originalDescriptor, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Recent Exposures"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: E.AS,
                children: 0 === h.length ? "None" : h.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: E.id,
            children: (0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => g(!0)
            })
        }), (0, i.jsx)(o.cGx, {
            className: E.yF
        })]
    }) : (0, i.jsx)("div", {
        className: E.Os,
        children: b
    })
}