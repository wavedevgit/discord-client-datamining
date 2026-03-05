/** chunk id: 640068 params = (module,exports,require) **/
n.d(t, {
    A: () => C
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
    _ = n(49463),
    g = n(386976),
    m = n(257433),
    A = n(32523),
    h = n(961350),
    p = n(71393),
    x = n(957565),
    E = n(222735),
    T = n(688151),
    S = n(949232);

function C() {
    let {
        experiments: e,
        overridesInfo: t
    } = (0, g.op)(), {
        experiments: n,
        overridesInfo: l
    } = (0, A.hI)(), a = s.useMemo(() => ({
        ...n,
        ...e
    }), [n, e]), r = s.useMemo(() => ({
        ...l,
        ...t
    }), [l, t]), [d, c] = s.useState(""), u = (0, E.oC)((0, E.R3)((0, E.Fm)(a), r), d);
    return (0, i.jsxs)("div", {
        "data-mtctest-ignore": "true",
        children: [(0, i.jsx)(o.IWV, {
            placeholder: "Search experiments",
            query: d,
            onChange: c,
            onClear: () => c("")
        }), u.length > 0 ? u.map(e => {
            let t = "guild" === e.experiment.kind ? I : f;
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

function f(e) {
    let {
        experiment: t,
        experimentId: n,
        overrideInfo: l,
        defaultOpen: g
    } = e, [A, p] = s.useState(g), [E, C] = s.useState(!1), f = s.useCallback(() => {
        p(e => !e)
    }, []), I = (0, r.bG)([h.default], () => h.default.getId()), b = (0, m.iN)(t, I), N = (0, m.Fm)(t, I), v = (0, r.yK)([_.A], () => a().sortBy(_.A.getRecentExposures(T.Vh.USER, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return `${new Date(n).toLocaleString()} (${t})`
    })), j = s.useCallback(e => {
        (0, x.C)((0, d.yA)(n), () => {
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
            className: S.DD,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsxs)(o.BJc, {
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    children: [t.title, " ", x.p5 && (0, i.jsx)(o.DUT, {
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
    if (!A) return (0, i.jsx)("div", {
        className: S.Os,
        children: O
    });
    let R = "";
    return R = t.system === c.l5.LEGACY ? `Currently assigned to bucket ${b??T.RE.NOT_ELIGIBLE}` : null != b ? `Currently assigned to variant ${b}` : "Currently unassigned", (0, i.jsxs)("div", {
        className: S.Os,
        children: [O, (0, i.jsx)("div", {
            children: (0, i.jsx)(u.g, {
                label: t.system === c.l5.LEGACY ? "Bucket Override" : "Variant Override",
                description: R,
                experiment: t,
                experimentId: n,
                overrideInfo: l
            })
        }), (0, i.jsx)("div", {
            className: S.h_,
            children: null == N ? (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), E ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: S.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: S.AS,
                children: null == N ? "None" : JSON.stringify(N, void 0, 2)
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
                children: 0 === v.length ? "None" : v.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: S.id,
            children: (0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => C(!0)
            })
        }), (0, i.jsx)(o.cGx, {
            className: S.yF
        })]
    })
}

function I(e) {
    let {
        experiment: t,
        experimentId: n,
        overrideInfo: l
    } = e, [d, c] = s.useState(null != l), [g, m] = s.useState(!1), A = s.useCallback(() => {
        c(e => !e)
    }, []), h = (0, r.bG)([_.A], () => _.A.getLoadedGuildExperiment(n)), x = (0, r.yK)([_.A], () => a().sortBy(_.A.getRecentExposures(T.Vh.GUILD, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return `${new Date(n).toLocaleString()} (${t})`
    })), [E, C] = (0, r.yK)([p.A, _.A], () => {
        let e = a().sortBy(p.A.getGuildsArray(), e => e.name.toLowerCase()),
            t = {},
            i = [];
        for (let s of e) {
            let e = _.A.getGuildExperimentDescriptor(n, s.id),
                l = e?.bucket ?? T.RE.NOT_ELIGIBLE;
            l in t || (t[l] = 0), t[l]++, i.push(`${s.name}: ${l}`)
        }
        let s = a()(t).keys().map(Number).sort().map(e => `${t[e]} guilds in bucket ${e}`).join(", ");
        return [i.join("\n"), s]
    }), f = (0, i.jsx)(o.DUT, {
        onClick: A,
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
        children: [f, (0, i.jsx)(u.g, {
            label: "Bucket Override",
            description: `Current Assignments: ${C}`,
            experiment: t,
            experimentId: n,
            overrideInfo: l
        }), (0, i.jsx)("div", {
            className: S.h_,
            children: null == h ? (0, i.jsx)(o.Text, {
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
                children: E
            }), (0, i.jsx)(o.Text, {
                variant: "text-lg/medium",
                className: S.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(o.Text, {
                variant: "code",
                className: S.AS,
                children: null == h ? "None" : JSON.stringify(h, void 0, 2)
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
                children: 0 === x.length ? "None" : x.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: S.id,
            children: (0, i.jsx)(o.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => m(!0)
            })
        }), (0, i.jsx)(o.cGx, {
            className: S.yF
        })]
    }) : (0, i.jsx)("div", {
        className: S.Os,
        children: f
    })
}