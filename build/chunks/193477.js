/** Chunk was on 39048 **/
/** chunk id: 193477, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(417597),
    s = n(582754),
    a = n(397927),
    o = n(544028),
    c = n(71393),
    d = n(555337),
    u = n(199940),
    g = n(132514),
    m = n(399056),
    p = n(914191),
    f = n(803064),
    h = n(435732),
    b = n(429526),
    x = n(758023),
    j = n(985018),
    _ = n(659233),
    O = n(87906),
    v = n(467069),
    y = n(544351),
    A = n(361776);

function E(e) {
    let {
        guild: t,
        saveOnClose: n
    } = e, [c, d] = i.useState("new"), E = i.useMemo(() => [{
        value: "new",
        name: j.intl.string(j.t["4e5u3l"])
    }, {
        value: "existing",
        name: j.intl.string(j.t.cmkOsU)
    }], []), N = (0, l.bG)([o.A], () => o.A.theme);
    i.useEffect(() => () => {
        let e = g.A.getSettings();
        (0, u.W5)(t.id, e)
    }, [n, t.id]);
    let S = i.useMemo(() => (0, s.qB)(N) ? "existing" === c ? v : A : "existing" === c ? O : y, [c, N]);
    return (0, r.jsxs)("div", {
        className: _.MY,
        children: [(0, r.jsxs)("div", {
            className: _.Cd,
            children: [(0, r.jsx)(a.Heading, {
                className: _.wx,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t.tbUZVr)
            }), (0, r.jsx)("div", {
                className: _.eg,
                children: (0, r.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: j.intl.string(j.t.DvHCq5)
                })
            }), (0, r.jsx)("div", {
                className: _.uW,
                children: (0, r.jsx)(x.A, {
                    guildId: t.id
                })
            }), (0, r.jsx)("div", {
                className: _.DY
            }), (0, r.jsx)(a.Heading, {
                className: _.wx,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t["roY/wu"])
            }), (0, r.jsx)("div", {
                className: _.eg,
                children: (0, r.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: j.intl.format(j.t["/lWYYS"], {})
                })
            }), (0, r.jsx)("div", {
                className: _.uW,
                children: (0, r.jsx)(p.A, {})
            }), (0, r.jsx)(m.A, {
                guildId: t.id
            }), (0, r.jsx)("div", {
                className: _.DY
            }), (0, r.jsx)(a.Heading, {
                className: _.wx,
                variant: "heading-lg/extrabold",
                children: j.intl.string(j.t.hEjHyH)
            }), (0, r.jsxs)("div", {
                className: _.eg,
                children: [(0, r.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: j.intl.string(j.t.YnvKVE)
                }), (0, r.jsxs)("ul", {
                    className: _.fF,
                    children: [(0, r.jsx)("li", {
                        children: (0, r.jsx)(a.Text, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.string(j.t["6jEvRU"])
                        })
                    }), (0, r.jsx)("li", {
                        children: (0, r.jsx)(a.Text, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.string(j.t["Fq+UsH"])
                        })
                    }), (0, r.jsx)("li", {
                        children: (0, r.jsx)(a.Text, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.string(j.t.LeEPoH)
                        })
                    })]
                })]
            }), (0, r.jsxs)("div", {
                className: _.uW,
                children: [(0, r.jsx)(b.A, {
                    guildId: t.id
                }), (0, r.jsx)(h.A, {
                    guildId: t.id
                })]
            }), (0, r.jsx)("div", {
                className: _.DY
            }), (0, r.jsx)(f.A, {
                guild: t
            })]
        }), (0, r.jsxs)("div", {
            className: _.DK,
            children: [(0, r.jsx)("div", {
                className: _.YB,
                children: (0, r.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: j.intl.string(j.t.EVV6uZ)
                })
            }), (0, r.jsx)("img", {
                className: _.oz,
                src: S,
                alt: j.intl.string(j.t.ST4UOy)
            }), (0, r.jsx)(a.IzF, {
                options: E,
                value: c,
                onChange: e => d(e.value),
                look: "pill"
            })]
        })]
    })
}

function N(e) {
    let {
        saveOnClose: t
    } = e, n = (0, l.bG)([d.A, c.A], () => {
        let e = d.A.getGuildId();
        return c.A.getGuild(e)
    });
    return null == n ? null : (0, r.jsx)(E, {
        guild: n,
        saveOnClose: t
    })
}