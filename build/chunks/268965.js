/** Chunk was on 78528 **/
/** chunk id: 268965, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(765671),
    c = n(226694),
    u = n(946116),
    d = n(818348),
    p = n(985018),
    h = n(10544),
    f = n(255753),
    g = n(296753),
    m = n(663093);
let b = e => {
        let {
            searchQuery: t,
            setSearchQuery: n,
            handleClearSearch: l,
            handleSearchKeyPress: i
        } = e, {
            ref: c,
            width: u
        } = (0, o.Ay)(), h = null != u && u <= 800;
        return (0, r.jsxs)("div", {
            ref: c,
            className: f.wx,
            children: [(0, r.jsx)("img", {
                alt: "",
                className: f.F0,
                src: h ? m : g
            }), (0, r.jsx)("div", {
                className: f.AZ,
                children: (0, r.jsxs)("div", {
                    className: s()(f.VW, {
                        [f.eO]: h
                    }),
                    children: [(0, r.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        className: f.dc,
                        children: p.intl.string(p.t.IT7qoC)
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: f.R_,
                        children: p.intl.string(p.t["5PoYts"])
                    }), (0, r.jsx)(a.NPJ, {
                        theme: d.NJ.LIGHT,
                        children: e => (0, r.jsx)("div", {
                            className: s()(f.MT, e),
                            children: (0, r.jsx)(a.IWV, {
                                query: t,
                                "aria-label": p.intl.string(p.t.nL2wKD),
                                placeholder: p.intl.string(p.t.nL2wKD),
                                onChange: n,
                                onClear: l,
                                onKeyDown: i
                            })
                        })
                    })]
                })
            })]
        })
    },
    A = e => {
        let {
            channel: t,
            directoryEntries: n,
            handleCreateOrAddGuild: i,
            searchQuery: s,
            setSearchQuery: o,
            handleClearSearch: d,
            handleSearchKeyPress: g,
            currentCategoryId: m,
            handleSelectCategory: A,
            categoryCounts: y,
            allEntriesCount: _,
            isLoading: O
        } = e;
        return (0, r.jsx)("div", {
            className: h.$$,
            children: (0, r.jsxs)(a.GtU, {
                className: h.XG,
                children: [(0, r.jsx)(b, {
                    searchQuery: s,
                    setSearchQuery: o,
                    handleClearSearch: d,
                    handleSearchKeyPress: g
                }), (0, r.jsx)(a.ChK, {
                    orientation: "horizontal",
                    children: (0, r.jsxs)(a.VQ0, {
                        className: f.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: m,
                        onItemSelect: e => {
                            A(e)
                        },
                        children: [(0, r.jsx)(a.VQ0.Item, {
                            className: f.YU,
                            id: u.mU.ALL,
                            children: "".concat(p.intl.string(p.t.hEAa2a), " (").concat(_, ")")
                        }, u.mU.ALL), (0, u.g2)(t.id).map(e => {
                            let {
                                value: t,
                                label: n
                            } = e;
                            return (0, r.jsx)(a.VQ0.Item, {
                                className: f.YU,
                                id: t,
                                children: "".concat(n, " ").concat(null != y[t] ? "(".concat(y[t], ")") : "")
                            }, t)
                        })]
                    })
                }), O && null == n ? (0, r.jsx)(a.y$y, {
                    className: h.u1
                }) : null == n ? void 0 : n.map((e, t) => (0, r.jsxs)(l.Fragment, {
                    children: [void 0 !== e.header ? (0, r.jsx)(a.Text, {
                        variant: "text-md/semibold",
                        className: f.bV,
                        children: e.header
                    }) : null, (0, r.jsxs)("div", {
                        className: h.vY,
                        children: [e.entries.map(e => (0, r.jsx)(c.A, {
                            entry: e
                        }, e.guildId)), e.appendEndCard && null != i ? (0, r.jsx)(c.s, {
                            onClick: i
                        }) : null]
                    })]
                }, t))]
            })
        })
    }