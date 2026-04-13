/** chunk id: 461489 params = (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(80703),
    o = n(311907),
    d = n(397927),
    c = n(100392),
    u = n(102609),
    m = n(271478),
    g = n(49463),
    _ = n(386976),
    x = n(257433),
    h = n(32523),
    A = n(961350),
    p = n(71393),
    T = n(957565),
    f = n(222735),
    S = n(688151),
    E = n(385818);

function b() {
    let {
        experiments: e,
        overridesInfo: t
    } = (0, _.op)(), {
        experiments: n,
        overridesInfo: l
    } = (0, h.hI)(), r = s.useMemo(() => ({
        ...n,
        ...e
    }), [n, e]), c = s.useMemo(() => ({
        ...l,
        ...t
    }), [l, t]), u = (0, o.bG)([A.default], () => {
        let e = A.default.getInstallationForTracking();
        return null == e ? null : (0, a.v)(e)
    }), [m, g] = s.useState(""), x = (0, f.oC)((0, f.R3)((0, f.Fm)(r), c), m);
    return (0, i.jsxs)("div", {
        "data-mtctest-ignore": "true",
        children: [null != u && (0, i.jsxs)(d.BJc, {
            style: {
                gap: 8,
                marginBottom: 16
            },
            children: [(0, i.jsxs)(d.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: ["Installation ID: ", u]
            }), T.p5 && (0, i.jsx)(d.QWc, {
                size: "sm",
                onClick: () => {
                    (0, T.C)(u, () => {
                        (0, d.showToast)((0, d.createToast)("Installation ID copied!", d.ToastType.SUCCESS))
                    })
                },
                text: "Copy"
            })]
        }), (0, i.jsx)(d.IWV, {
            placeholder: "Search experiments",
            query: m,
            onChange: g,
            onClear: () => g("")
        }), x.length > 0 ? x.map(e => {
            let t = "guild" === e.experiment.kind ? v : C;
            return (0, i.jsx)(t, {
                experiment: e.experiment,
                experimentId: e.id,
                overrideInfo: c[e.id],
                defaultOpen: null != c[e.id]
            }, e.id)
        }) : (0, i.jsx)("div", {
            className: E.p$,
            children: (0, i.jsx)(d.Heading, {
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
        overrideInfo: l,
        defaultOpen: a
    } = e, [_, h] = s.useState(a), [p, f] = s.useState(!1), b = s.useCallback(() => {
        h(e => !e)
    }, []), C = (0, o.bG)([A.default], () => A.default.getId()), v = (0, x.iN)(t, C), N = (0, x.Fm)(t, C), I = (0, o.yK)([g.A], () => r().sortBy(g.A.getRecentExposures(S.Vh.USER, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return `${new Date(n).toLocaleString()} (${t})`
    })), j = s.useCallback(e => {
        (0, T.C)((0, c.yA)(n), () => {
            (0, d.showToast)({
                id: "experiment-link-copied",
                message: "Copied experiment link",
                type: d.ToastType.SUCCESS
            }), e.preventDefault(), e.stopPropagation()
        })
    }, [n]), y = (0, i.jsx)(d.sqX, {
        "aria-label": "Toggle visibility",
        onClick: b,
        children: (0, i.jsxs)(d.Text, {
            variant: "text-md/medium",
            className: E.DD,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsxs)(d.BJc, {
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    children: [t.title, " ", T.p5 && (0, i.jsx)(d.DUT, {
                        onClick: j,
                        children: (0, i.jsx)(d.qYV, {
                            size: "xs"
                        })
                    })]
                }), (0, i.jsx)(d.Text, {
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
    if (!_) return (0, i.jsx)("div", {
        className: E.Os,
        children: y
    });
    let O = "";
    return O = t.system === u.l5.LEGACY ? `Currently assigned to bucket ${v??S.RE.NOT_ELIGIBLE}` : null != v ? `Currently assigned to variant ${v}` : "Currently unassigned", (0, i.jsxs)("div", {
        className: E.Os,
        children: [y, (0, i.jsx)("div", {
            children: (0, i.jsx)(m.g, {
                label: t.system === u.l5.LEGACY ? "Bucket Override" : "Variant Override",
                description: O,
                experiment: t,
                experimentId: n,
                overrideInfo: l
            })
        }), (0, i.jsx)("div", {
            className: E.h_,
            children: null == N ? (0, i.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), p ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(d.Text, {
                variant: "code",
                className: E.AS,
                children: null == N ? "None" : JSON.stringify(N, void 0, 2)
            }), (0, i.jsx)(d.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Override Descriptor"
            }), (0, i.jsx)(d.Text, {
                variant: "code",
                className: E.AS,
                children: l?.originalDescriptor == null ? "None" : JSON.stringify(l.originalDescriptor, void 0, 2)
            }), (0, i.jsx)(d.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Recent Exposures"
            }), (0, i.jsx)(d.Text, {
                variant: "code",
                className: E.AS,
                children: 0 === I.length ? "None" : I.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: E.id,
            children: (0, i.jsx)(d.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => f(!0)
            })
        }), (0, i.jsx)(d.cGx, {
            className: E.yF
        })]
    })
}

function v(e) {
    let {
        experiment: t,
        experimentId: n,
        overrideInfo: l
    } = e, [a, c] = s.useState(null != l), [u, _] = s.useState(!1), x = s.useCallback(() => {
        c(e => !e)
    }, []), h = (0, o.bG)([g.A], () => g.A.getLoadedGuildExperiment(n)), A = (0, o.yK)([g.A], () => r().sortBy(g.A.getRecentExposures(S.Vh.GUILD, n), e => {
        let [t, n] = e;
        return -n
    }).map(e => {
        let [t, n] = e;
        return `${new Date(n).toLocaleString()} (${t})`
    })), [T, f] = (0, o.yK)([p.A, g.A], () => {
        let e = r().sortBy(p.A.getGuildsArray(), e => e.name.toLowerCase()),
            t = {},
            i = [];
        for (let s of e) {
            let e = g.A.getGuildExperimentDescriptor(n, s.id),
                l = e?.bucket ?? S.RE.NOT_ELIGIBLE;
            l in t || (t[l] = 0), t[l]++, i.push(`${s.name}: ${l}`)
        }
        let s = r()(t).keys().map(Number).sort().map(e => `${t[e]} guilds in bucket ${e}`).join(", ");
        return [i.join("\n"), s]
    }), b = (0, i.jsx)(d.DUT, {
        onClick: x,
        children: (0, i.jsxs)(d.Text, {
            variant: "text-md/medium",
            className: E.DD,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)("span", {
                    children: t.title
                }), (0, i.jsx)(d.Text, {
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
    return a ? (0, i.jsxs)("div", {
        className: E.Os,
        children: [b, (0, i.jsx)(m.g, {
            label: "Bucket Override",
            description: `Current Assignments: ${f}`,
            experiment: t,
            experimentId: n,
            overrideInfo: l
        }), (0, i.jsx)("div", {
            className: E.h_,
            children: null == h ? (0, i.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
            }) : null
        }), u ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Guild Assignments"
            }), (0, i.jsx)(d.Text, {
                variant: "code",
                className: E.AS,
                children: T
            }), (0, i.jsx)(d.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Server Descriptor"
            }), (0, i.jsx)(d.Text, {
                variant: "code",
                className: E.AS,
                children: null == h ? "None" : JSON.stringify(h, void 0, 2)
            }), (0, i.jsx)(d.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Override Descriptor"
            }), (0, i.jsx)(d.Text, {
                variant: "code",
                className: E.AS,
                children: l?.originalDescriptor == null ? "None" : JSON.stringify(l.originalDescriptor, void 0, 2)
            }), (0, i.jsx)(d.Text, {
                variant: "text-lg/medium",
                className: E.id,
                children: "Recent Exposures"
            }), (0, i.jsx)(d.Text, {
                variant: "code",
                className: E.AS,
                children: 0 === A.length ? "None" : A.join("\n")
            })]
        }) : (0, i.jsx)("div", {
            className: E.id,
            children: (0, i.jsx)(d.QWc, {
                variant: "secondary",
                text: "More Details \xbb",
                onClick: () => _(!0)
            })
        }), (0, i.jsx)(d.cGx, {
            className: E.yF
        })]
    }) : (0, i.jsx)("div", {
        className: E.Os,
        children: b
    })
}