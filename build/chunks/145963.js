/** chunk id: 145963 params = (module,exports,require) **/
n.d(e, {
    UV: () => I,
    rZ: () => T,
    uC: () => E
});
var r = n(627968),
    i = n(64700),
    o = n(505779),
    l = n(397927),
    a = n(59544),
    s = n(305080),
    c = n(985018),
    u = n(937418);

function I() {
    return i.useMemo(() => ({
        [o.V.STEAM]: {
            icon: l.NXQ,
            text: c.intl.string(c.t.FsANs4),
            "aria-label": c.intl.string(c.t["P+ePTG"])
        },
        [o.V.ROBLOX]: {
            icon: l.H0M,
            text: c.intl.string(c.t["pJ+P+h"]),
            "aria-label": c.intl.string(c.t.tYxpdf)
        },
        [o.V.BATTLENET]: {
            icon: l.aG0,
            text: c.intl.string(c.t["A7grp+"]),
            "aria-label": c.intl.string(c.t.x9at20)
        },
        [o.V.RIOT]: {
            icon: l.ALT,
            text: c.intl.string(c.t.h6MapL),
            "aria-label": c.intl.string(c.t["528nvc"])
        },
        [o.V.MINECRAFT]: {
            text: c.intl.string(c.t["HZbmO+"]),
            "aria-label": c.intl.string(c.t.WWTqYn)
        },
        [o.V.EPICGAMES]: {
            icon: l.r_I,
            text: c.intl.string(c.t.ZbBMHa),
            "aria-label": c.intl.string(c.t.BwX0UW)
        }
    }), [])
}

function E(t) {
    let {
        website: e
    } = t, n = (0, a.A)(e.url), i = I()[e.category];
    return null == i || null == n ? null : (0, r.jsx)(T, {
        ...i,
        onClick: () => window.open(n, "_blank", "noreferrer noopener")
    })
}

function T(t) {
    let {
        ...e
    } = t, {
        isTwoColumn: n
    } = (0, s.c)();
    return (0, r.jsx)("div", {
        className: u.U,
        children: (0, r.jsx)(l.Button, {
            ...e,
            variant: n ? "overlay-secondary" : "secondary",
            fullWidth: !0,
            role: "link"
        })
    })
}