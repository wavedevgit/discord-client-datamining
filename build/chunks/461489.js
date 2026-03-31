/** chunk id: 461489 params = (module,exports,require) **/
n.d(t, {
    A: () => E
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
    g = n(386976),
    _ = n(257433),
    x = n(32523),
    A = n(961350),
    h = n(71393),
    p = n(957565),
    T = n(222735),
    f = n(688151),
    S = n(358335);

function E() {
    let {
        experiments: e,
        overridesInfo: t
    } = (0, g.op)(), {
        experiments: n,
        overridesInfo: l
    } = (0, x.hI)(), a = s.useMemo(() => ({
        ...n,
        ...e
    }), [n, e]), r = s.useMemo(() => ({
        ...l,
        ...t
    }), [l, t]), [d, c] = s.useState(""), u = (0, T.oC)((0, T.R3)((0, T.Fm)(a), r), d);
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
            className: S.p$,
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
        defaultOpen: g
    } = e, [x, h] = s.useState(g), [T, E] = s.useState(!1), b = s.useCallback(() => {
        h(e => !e)
    }, []), C = (0, r.bG)([A.default], () => A.default.getId()), N = (0, _.iN)(t, C), v = (0, _.Fm)(t, C), I = (0, r.yK)([m.A], () => a().sortBy(m.A.getRecentExposures(f.Vh.USER, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return `${new Date(n).toLocaleString()} (${t})`
    })), j = s.useCallback(e => {
        (0, p.C)((0, d.yA)(n), () => {
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
            className: S.DD,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsxs)(o.BJc, {
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    children: [t.title, " ", p.p5 && (0, i.jsx)(o.DUT, {
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
                className: S.km,
                children: "User"
            })]
        })
    });
    if (!x) return (0, i.jsx)("div", {
        className: S.Os,
        children: y
    });
    let O = "";
    return O = t.system === c.l5.LEGACY ? `Currently assigned to bucket ${N??f.RE.NOT_ELIGIBLE}` : null != N ? `Currently assigned to variant ${N}` : "Currently unassigned", (0, i.jsxs)("div", {
        className: S.Os,
        children: [y, (0, i.jsx)("div", {
            children: (0, i.jsx)(u.g, {
                label: t.system === c.l5.LEGACY ? "Bucket Override" : "Variant Override",
                description: O,
                experiment: t,
                experimentId: n,
                overrideInfo: l
            })
        }), (0, i.jsx)("div", {
            className: S.h_,
            children: null == v ? (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), T ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: S.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: S.AS,
                children: null == v ? "None" : JSON.stringify(v, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: S.id,
                children: "Override Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: S.AS,
                children: l?.originalDescriptor == null ? "None" : JSON.stringify(l.originalDescriptor, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: S.id,
                children: "Recent Exposures"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: S.AS,
                children: 0 === I.length ? "None" : I.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: S.id,
            children: (0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => E(!0)
            })
        }), (0, i.jsx)(o.cGx, {
            className: S.yF
        })]
    })
}

function C(e) {
    let {
        experiment: t,
        experimentId: n,
        overrideInfo: l
    } = e, [d, c] = s.useState(null != l), [g, _] = s.useState(!1), x = s.useCallback(() => {
        c(e => !e)
    }, []), A = (0, r.bG)([m.A], () => m.A.getLoadedGuildExperiment(n)), p = (0, r.yK)([m.A], () => a().sortBy(m.A.getRecentExposures(f.Vh.GUILD, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return `${new Date(n).toLocaleString()} (${t})`
    })), [T, E] = (0, r.yK)([h.A, m.A], () => {
        let e = a().sortBy(h.A.getGuildsArray(), e => e.name.toLowerCase()),
            t = {},
            i = [];
        for (let s of e) {
            let e = m.A.getGuildExperimentDescriptor(n, s.id),
                l = e?.bucket ?? f.RE.NOT_ELIGIBLE;
            l in t || (t[l] = 0), t[l]++, i.push(`${s.name}: ${l}`)
        }
        let s = a()(t).keys().map(Number).sort().map(e => `${t[e]} guilds in bucket ${e}`).join(", ");
        return [i.join("\n"), s]
    }), b = (0, i.jsx)(o.DUT, {
        onClick: x,
        children: (0, i.jsxs)(o.Text, {
            variant: "text-md/medium",
            className: S.DD,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)("span", {
                    children: t.title
                }), (0, i.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: n
                })]
            }), (0, i.jsx)("span", {
                className: S.km,
                children: "Guild"
            })]
        })
    });
    return d ? (0, i.jsxs)("div", {
        className: S.Os,
        children: [b, (0, i.jsx)(u.g, {
            label: "Bucket Override",
            description: `Current Assignments: ${E}`,
            experiment: t,
            experimentId: n,
            overrideInfo: l
        }), (0, i.jsx)("div", {
            className: S.h_,
            children: null == A ? (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), g ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: S.id,
                children: "Guild Assignments"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: S.AS,
                children: T
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: S.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: S.AS,
                children: null == A ? "None" : JSON.stringify(A, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: S.id,
                children: "Override Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: S.AS,
                children: l?.originalDescriptor == null ? "None" : JSON.stringify(l.originalDescriptor, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: S.id,
                children: "Recent Exposures"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: S.AS,
                children: 0 === p.length ? "None" : p.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: S.id,
            children: (0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => _(!0)
            })
        }), (0, i.jsx)(o.cGx, {
            className: S.yF
        })]
    }) : (0, i.jsx)("div", {
        className: S.Os,
        children: b
    })
}