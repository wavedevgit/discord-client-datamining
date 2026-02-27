/** chunk id: 640068, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(321073);
var i = n(627968),
    s = n(64700),
    a = n(735438),
    l = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(100392),
    d = n(102609),
    u = n(271478),
    _ = n(49463),
    m = n(386976),
    A = n(257433),
    g = n(32523),
    h = n(961350),
    x = n(71393),
    p = n(957565),
    E = n(222735),
    C = n(688151),
    T = n(612422);

function S() {
    let {
        experiments: e,
        overridesInfo: t
    } = (0, m.op)(), {
        experiments: n,
        overridesInfo: a
    } = (0, g.hI)(), l = s.useMemo(() => ({
        ...n,
        ...e
    }), [n, e]), r = s.useMemo(() => ({
        ...a,
        ...t
    }), [a, t]), [c, d] = s.useState(""), u = (0, E.oC)((0, E.R3)((0, E.Fm)(l), r), c);
    return (0, i.jsxs)("div", {
        "data-mtctest-ignore": "true",
        children: [(0, i.jsx)(o.IWV, {
            placeholder: "Search experiments",
            query: c,
            onChange: d,
            onClear: () => d("")
        }), u.length > 0 ? u.map(e => {
            let t = "guild" === e.experiment.kind ? f : I;
            return (0, i.jsx)(t, {
                experiment: e.experiment,
                experimentId: e.id,
                overrideInfo: r[e.id],
                defaultOpen: null != r[e.id]
            }, e.id)
        }) : (0, i.jsx)("div", {
            className: T.p$,
            children: (0, i.jsx)(o.Heading, {
                variant: "heading-md/semibold",
                children: "No Experiments Found"
            })
        })]
    })
}

function I(e) {
    let {
        experiment: t,
        experimentId: n,
        overrideInfo: a,
        defaultOpen: m
    } = e, [g, x] = s.useState(m), [E, S] = s.useState(!1), I = s.useCallback(() => {
        x(e => !e)
    }, []), f = (0, r.bG)([h.default], () => h.default.getId()), N = (0, A.iN)(t, f), b = (0, A.Fm)(t, f), j = (0, r.yK)([_.A], () => l().sortBy(_.A.getRecentExposures(C.Vh.USER, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return `${new Date(n).toLocaleString()} (${t})`
    })), v = s.useCallback(e => {
        (0, p.C)((0, c.yA)(n), () => {
            (0, o.showToast)({
                id: "experiment-link-copied",
                message: "Copied experiment link",
                type: o.ToastType.SUCCESS
            }), e.preventDefault(), e.stopPropagation()
        })
    }, [n]), O = (0, i.jsx)(o.sqX, {
        "aria-label": "Toggle visibility",
        onClick: I,
        children: (0, i.jsxs)(o.Text, {
            variant: "text-md/medium",
            className: T.DD,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsxs)(o.BJc, {
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    children: [t.title, " ", p.p5 && (0, i.jsx)(o.DUT, {
                        onClick: v,
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
                className: T.km,
                children: "User"
            })]
        })
    });
    if (!g) return (0, i.jsx)("div", {
        className: T.Os,
        children: O
    });
    let R = "";
    return R = t.system === d.l5.LEGACY ? `Currently assigned to bucket ${N??C.RE.NOT_ELIGIBLE}` : null != N ? `Currently assigned to variant ${N}` : "Currently unassigned", (0, i.jsxs)("div", {
        className: T.Os,
        children: [O, (0, i.jsx)("div", {
            children: (0, i.jsx)(u.g, {
                label: t.system === d.l5.LEGACY ? "Bucket Override" : "Variant Override",
                description: R,
                experiment: t,
                experimentId: n,
                overrideInfo: a
            })
        }), (0, i.jsx)("div", {
            className: T.h_,
            children: null == b ? (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), E ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: T.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: T.AS,
                children: null == b ? "None" : JSON.stringify(b, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: T.id,
                children: "Override Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: T.AS,
                children: a?.originalDescriptor == null ? "None" : JSON.stringify(a.originalDescriptor, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: T.id,
                children: "Recent Exposures"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: T.AS,
                children: 0 === j.length ? "None" : j.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: T.id,
            children: (0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => S(!0)
            })
        }), (0, i.jsx)(o.cGx, {
            className: T.yF
        })]
    })
}

function f(e) {
    let {
        experiment: t,
        experimentId: n,
        overrideInfo: a
    } = e, [c, d] = s.useState(null != a), [m, A] = s.useState(!1), g = s.useCallback(() => {
        d(e => !e)
    }, []), h = (0, r.bG)([_.A], () => _.A.getLoadedGuildExperiment(n)), p = (0, r.yK)([_.A], () => l().sortBy(_.A.getRecentExposures(C.Vh.GUILD, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return `${new Date(n).toLocaleString()} (${t})`
    })), [E, S] = (0, r.yK)([x.A, _.A], () => {
        let e = l().sortBy(x.A.getGuildsArray(), e => e.name.toLowerCase()),
            t = {},
            i = [];
        for (let s of e) {
            let e = _.A.getGuildExperimentDescriptor(n, s.id),
                a = e?.bucket ?? C.RE.NOT_ELIGIBLE;
            a in t || (t[a] = 0), t[a]++, i.push(`${s.name}: ${a}`)
        }
        let s = l()(t).keys().map(Number).sort().map(e => `${t[e]} guilds in bucket ${e}`).join(", ");
        return [i.join("\n"), s]
    }), I = (0, i.jsx)(o.DUT, {
        onClick: g,
        children: (0, i.jsxs)(o.Text, {
            variant: "text-md/medium",
            className: T.DD,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)("span", {
                    children: t.title
                }), (0, i.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: n
                })]
            }), (0, i.jsx)("span", {
                className: T.km,
                children: "Guild"
            })]
        })
    });
    return c ? (0, i.jsxs)("div", {
        className: T.Os,
        children: [I, (0, i.jsx)(u.g, {
            label: "Bucket Override",
            description: `Current Assignments: ${S}`,
            experiment: t,
            experimentId: n,
            overrideInfo: a
        }), (0, i.jsx)("div", {
            className: T.h_,
            children: null == h ? (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), m ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: T.id,
                children: "Guild Assignments"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: T.AS,
                children: E
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: T.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: T.AS,
                children: null == h ? "None" : JSON.stringify(h, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: T.id,
                children: "Override Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: T.AS,
                children: a?.originalDescriptor == null ? "None" : JSON.stringify(a.originalDescriptor, void 0, 2)
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: T.id,
                children: "Recent Exposures"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: T.AS,
                children: 0 === p.length ? "None" : p.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: T.id,
            children: (0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => A(!0)
            })
        }), (0, i.jsx)(o.cGx, {
            className: T.yF
        })]
    }) : (0, i.jsx)("div", {
        className: T.Os,
        children: I
    })
}