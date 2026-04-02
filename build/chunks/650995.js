/** chunk id: 650995 params = (module,exports,require) **/
l.d(t, {
    A: () => N
});
var i = l(627968),
    s = l(64700),
    a = l(503698),
    n = l.n(a),
    r = l(417597),
    d = l(990078),
    c = l(397927),
    o = l(442433),
    u = l(429913),
    m = l(769015),
    p = l(780964),
    h = l(858897),
    x = l(532624),
    C = l(350535),
    v = l(792852),
    g = l(652215),
    j = l(985018),
    f = l(444573);
let y = s.memo(function(e) {
        let {
            allClips: t
        } = e, {
            query: a,
            setQuery: n
        } = (0, v.P)(), u = (0, r.bG)([x.Ay], () => x.Ay.getKeybindForAction(g.hCu.SAVE_CLIP)), m = (0, v.P)(e => e.selectedUserIds.size > 0 || null != e.selectedActivity || null != e.selectedGuildId || null != e.selectedYear), y = s.useCallback(() => {
            (0, h.openUserSettings)(p.X.CLIPS_PANEL)
        }, []), A = s.useCallback(e => {
            (0, o.L3)(e, async () => {
                let {
                    default: e
                } = await l.e("8067").then(l.bind(l, 726574));
                return l => (0, i.jsx)(e, {
                    ...l,
                    allClips: t
                })
            })
        }, [t]), N = s.useCallback(() => n(""), [n]), I = null != u ? C.dI(u.shortcut, !0) : null;
        return (0, i.jsxs)("div", {
            className: f.aN,
            children: [(0, i.jsxs)("div", {
                className: f.Nr,
                children: [(0, i.jsxs)("div", {
                    className: f.Pe,
                    children: [(0, i.jsx)(c.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.z2jK6X)
                    }), null != I && (0, i.jsx)(c.e7I, {
                        className: f.P,
                        shortcut: I
                    })]
                }), (0, i.jsxs)("div", {
                    className: f.$s,
                    children: [(0, i.jsx)(d.m, {
                        text: j.intl.string(j.t.X7yRDm),
                        children: (0, i.jsx)(c.K0, {
                            onClick: A,
                            icon: c.RgP,
                            size: "sm",
                            variant: m ? "active" : "icon-only",
                            "aria-label": j.intl.string(j.t.X7yRDm)
                        })
                    }), (0, i.jsx)(d.m, {
                        text: j.intl.string(j.t["3D5yo/"]),
                        children: (0, i.jsx)(c.K0, {
                            onClick: y,
                            icon: c.Zes,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": j.intl.string(j.t["3D5yo/"])
                        })
                    })]
                })]
            }), (0, i.jsx)("div", {
                className: f.MT,
                children: (0, i.jsx)(c.IWV, {
                    placeholder: j.intl.string(j.t["5h0QOP"]),
                    query: a,
                    onChange: n,
                    onClear: N,
                    size: "md"
                })
            })]
        })
    }),
    A = s.memo(function(e) {
        let {
            name: t,
            count: l,
            icon: s,
            isSelected: a,
            onClick: r
        } = e;
        return (0, i.jsxs)(c.DUT, {
            className: n()(f.MV, {
                [f.wH]: a
            }),
            onClick: r,
            children: [(0, i.jsxs)("div", {
                className: f.tk,
                children: [s, (0, i.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "currentColor",
                    className: f.mO,
                    children: t
                })]
            }), (0, i.jsx)("div", {
                className: f.z2,
                children: (0, i.jsx)(c.Text, {
                    variant: "text-xs/semibold",
                    color: "currentColor",
                    children: l
                })
            })]
        })
    });

function N(e) {
    let {
        clipsByGame: t,
        filteredClips: l,
        favoriteClips: a,
        allClips: n
    } = e, r = (0, v.P)(e => e.selectedGameId), d = (0, v.P)(e => e.setSelectedGameId), o = s.useMemo(() => t.map(e => e.applicationId), [t]), p = (0, u.A)(o), h = s.useCallback(() => d(null), [d]), x = s.useCallback(() => d("favorites"), [d]), C = s.useMemo(() => new Map(p.map(e => [e?.id, e])), [p]);
    return (0, i.jsxs)("div", {
        className: f.pz,
        children: [(0, i.jsx)(y, {
            allClips: n
        }), (0, i.jsxs)(c.IpV, {
            className: f.wp,
            fade: !0,
            children: [(0, i.jsx)("div", {
                className: f.om,
                children: (0, i.jsxs)("div", {
                    className: f.CW,
                    children: [(0, i.jsx)(A, {
                        name: j.intl.string(j.t.dPVrEv),
                        count: l.length,
                        icon: (0, i.jsx)(c.xgA, {}),
                        isSelected: null === r,
                        onClick: h
                    }), (0, i.jsx)(A, {
                        name: j.intl.string(j.t["9rlCk1"]),
                        count: a.length,
                        icon: (0, i.jsx)(c.C3E, {}),
                        isSelected: "favorites" === r,
                        onClick: x
                    })]
                })
            }), t.length > 0 && (0, i.jsxs)("div", {
                className: f.om,
                children: [(0, i.jsx)(c.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-muted",
                    className: f.a9,
                    children: j.intl.string(j.t.URyqtP)
                }), (0, i.jsx)("div", {
                    className: f.CW,
                    children: t.map(e => {
                        let {
                            name: t,
                            count: l,
                            applicationId: s
                        } = e;
                        return (0, i.jsx)(A, {
                            name: t,
                            count: l,
                            icon: (0, i.jsx)(m.A, {
                                game: C.get(s),
                                size: m.M.XSMALL
                            }),
                            isSelected: r === s,
                            onClick: () => d(s)
                        }, s)
                    })
                })]
            })]
        })]
    })
}