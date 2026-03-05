/** chunk id: 145963, original params: t,e,r (module,exports,require) **/
r.d(e, {
    UV: () => E,
    rZ: () => u,
    uC: () => T
});
var n = r(627968),
    i = r(64700),
    o = r(505779),
    a = r(397927),
    l = r(880405),
    s = r(305080),
    c = r(985018),
    I = r(435740);

function E() {
    return i.useMemo(() => ({
        [o.V.STEAM]: {
            icon: a.NXQ,
            text: c.intl.string(c.t.FsANs4),
            "aria-label": c.intl.string(c.t["P+ePTG"])
        },
        [o.V.ROBLOX]: {
            icon: a.H0M,
            text: c.intl.string(c.t["pJ+P+h"]),
            "aria-label": c.intl.string(c.t.tYxpdf)
        },
        [o.V.BATTLENET]: {
            icon: a.aG0,
            text: c.intl.string(c.t["A7grp+"]),
            "aria-label": c.intl.string(c.t.x9at20)
        },
        [o.V.RIOT]: {
            icon: a.ALT,
            text: c.intl.string(c.t.h6MapL),
            "aria-label": c.intl.string(c.t["528nvc"])
        },
        [o.V.MINECRAFT]: {
            text: c.intl.string(c.t["HZbmO+"]),
            "aria-label": c.intl.string(c.t.WWTqYn)
        },
        [o.V.EPICGAMES]: {
            icon: a.r_I,
            text: c.intl.string(c.t.ZbBMHa),
            "aria-label": c.intl.string(c.t.BwX0UW)
        }
    }), [])
}

function T(t) {
    let {
        website: e
    } = t, r = E()[e.category];
    return null == r ? null : (0, n.jsx)(u, {
        ...r,
        onClick: () => window.open((0, l.L)(e.url), "_blank", "noreferrer noopener")
    })
}

function u(t) {
    let {
        ...e
    } = t, {
        isTwoColumn: r
    } = (0, s.c)();
    return (0, n.jsx)("div", {
        className: I.U,
        children: (0, n.jsx)(a.Button, {
            ...e,
            variant: r ? "overlay-secondary" : "secondary",
            fullWidth: !0,
            role: "link"
        })
    })
}