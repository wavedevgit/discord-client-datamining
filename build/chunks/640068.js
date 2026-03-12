/** chunk id: 640068 params = (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(100392),
    c = n(102609),
    u = n(271478),
    _ = n(49463),
    m = n(386976),
    g = n(257433),
    A = n(32523),
    h = n(961350),
    x = n(71393),
    p = n(957565),
    T = n(222735),
    E = n(688151),
    C = n(949232);

function S() {
    let {
        experiments: e,
        overridesInfo: t
    } = (0, m.op)(), {
        experiments: n,
        overridesInfo: l
    } = (0, A.hI)(), r = s.useMemo(() => ({
        ...n,
        ...e
    }), [n, e]), a = s.useMemo(() => ({
        ...l,
        ...t
    }), [l, t]), [d, c] = s.useState(""), u = (0, T.oC)((0, T.R3)((0, T.Fm)(r), a), d);
    return (0, i.jsxs)("div", {
        "data-mtctest-ignore": "true",
        children: [(0, i.jsx)(o.IWV, {
            placeholder: "Search experiments",
            query: d,
            onChange: c,
            onClear: () => c("")
        }), u.length > 0 ? u.map(e => {
            let t = "guild" === e.experiment.kind ? N : f;
            return (0, i.jsx)(t, {
                experiment: e.experiment,
                experimentId: e.id,
                overrideInfo: a[e.id],
                defaultOpen: null != a[e.id]
            }, e.id)
        }) : (0, i.jsx)("div", {
            className: C.p$,
            children: (0, i.jsx)(o.Heading, {
                variant: "heading-md/semibold",
                children: "No Experiments Found"
            })
        })]
    })
}

function f(e) {
    let {
        experiment: t,
        experimentId: n,
        overrideInfo: l,
        defaultOpen: m
    } = e, [A, x] = s.useState(m), [T, S] = s.useState(!1), f = s.useCallback(() => {
        x(e => !e)
    }, []), N = (0, a.bG)([h.default], () => h.default.getId()), b = (0, g.iN)(t, N), I = (0, g.Fm)(t, N), v = (0, a.yK)([_.A], () => r().sortBy(_.A.getRecentExposures(E.Vh.USER, n), e => {
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
    }, [n]), O = (0, i.jsx)(o.sqX, {
        "aria-label": "Toggle visibility",
        onClick: f,
        children: (0, i.jsxs)(o.Text, {
            variant: "text-md/medium",
            className: C.DD,
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
                className: C.km,
                children: "User"
            })]
        })
    });
    if (!A) return (0, i.jsx)("div", {
        className: C.Os,
        children: O
    });
    let y = "";
    return y = t.system === c.l5.LEGACY ? `Currently assigned to bucket ${b??E.RE.NOT_ELIGIBLE}` : null != b ? `Currently assigned to variant ${b}` : "Currently unassigned", (0, i.jsxs)("div", {
        className: C.Os,
        children: [O, (0, i.jsx)("div", {
            children: (0, i.jsx)(u.g, {
                label: t.system === c.l5.LEGACY ? "Bucket Override" : "Variant Override",
                description: y,
                experiment: t,
                experimentId: n,
                overrideInfo: l
            })
        }), (0, i.jsx)("div", {
            className: C.h_,
            children: null == I ? (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), T ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: C.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: C.AS,
                children: null == I ? "None" : JSON.stringify(I, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: C.id,
                children: "Override Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: C.AS,
                children: l?.originalDescriptor == null ? "None" : JSON.stringify(l.originalDescriptor, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: C.id,
                children: "Recent Exposures"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: C.AS,
                children: 0 === v.length ? "None" : v.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: C.id,
            children: (0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => S(!0)
            })
        }), (0, i.jsx)(o.cGx, {
            className: C.yF
        })]
    })
}

function N(e) {
    let {
        experiment: t,
        experimentId: n,
        overrideInfo: l
    } = e, [d, c] = s.useState(null != l), [m, g] = s.useState(!1), A = s.useCallback(() => {
        c(e => !e)
    }, []), h = (0, a.bG)([_.A], () => _.A.getLoadedGuildExperiment(n)), p = (0, a.yK)([_.A], () => r().sortBy(_.A.getRecentExposures(E.Vh.GUILD, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return `${new Date(n).toLocaleString()} (${t})`
    })), [T, S] = (0, a.yK)([x.A, _.A], () => {
        let e = r().sortBy(x.A.getGuildsArray(), e => e.name.toLowerCase()),
            t = {},
            i = [];
        for (let s of e) {
            let e = _.A.getGuildExperimentDescriptor(n, s.id),
                l = e?.bucket ?? E.RE.NOT_ELIGIBLE;
            l in t || (t[l] = 0), t[l]++, i.push(`${s.name}: ${l}`)
        }
        let s = r()(t).keys().map(Number).sort().map(e => `${t[e]} guilds in bucket ${e}`).join(", ");
        return [i.join("\n"), s]
    }), f = (0, i.jsx)(o.DUT, {
        onClick: A,
        children: (0, i.jsxs)(o.Text, {
            variant: "text-md/medium",
            className: C.DD,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)("span", {
                    children: t.title
                }), (0, i.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: n
                })]
            }), (0, i.jsx)("span", {
                className: C.km,
                children: "Guild"
            })]
        })
    });
    return d ? (0, i.jsxs)("div", {
        className: C.Os,
        children: [f, (0, i.jsx)(u.g, {
            label: "Bucket Override",
            description: `Current Assignments: ${S}`,
            experiment: t,
            experimentId: n,
            overrideInfo: l
        }), (0, i.jsx)("div", {
            className: C.h_,
            children: null == h ? (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), m ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: C.id,
                children: "Guild Assignments"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: C.AS,
                children: T
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: C.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: C.AS,
                children: null == h ? "None" : JSON.stringify(h, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: C.id,
                children: "Override Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: C.AS,
                children: l?.originalDescriptor == null ? "None" : JSON.stringify(l.originalDescriptor, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: C.id,
                children: "Recent Exposures"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: C.AS,
                children: 0 === p.length ? "None" : p.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: C.id,
            children: (0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => g(!0)
            })
        }), (0, i.jsx)(o.cGx, {
            className: C.yF
        })]
    }) : (0, i.jsx)("div", {
        className: C.Os,
        children: f
    })
}