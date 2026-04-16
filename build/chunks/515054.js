/** chunk id: 515054 params = (module,exports,require) **/
n.d(t, {
    A: () => h,
    K: () => I
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(397927),
    o = n(207803),
    c = n(183555),
    d = n(61881),
    u = n(790417),
    g = n(113763),
    _ = n(583246),
    m = n(463259),
    f = n(133583),
    x = n(518477),
    p = n(464229);

function I(e) {
    let {
        children: t,
        className: n,
        scrollerRef: a,
        ...l
    } = e;
    return (0, i.jsx)(r.HOs, {
        ref: a,
        className: s()(p.gN, n),
        fade: !0,
        ...l,
        children: t
    })
}

function A(e) {
    let {
        user: t,
        currentUser: n,
        section: a,
        displayProfile: l,
        guildId: s,
        channelId: r,
        onClose: o
    } = e;
    return a === x.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: t,
        currentUser: n,
        displayProfile: l,
        guildId: s,
        channelId: r,
        onClose: o
    }) : a === x.RP.MUTUAL_FRIENDS ? (0, i.jsx)(g.A, {
        user: t,
        guildId: s,
        channelId: r,
        onClose: o
    }) : a === x.RP.MUTUAL_GUILDS ? (0, i.jsx)(_.A, {
        user: t,
        onClose: o
    }) : a === x.RP.WIDGETS ? (0, i.jsx)(m.A, {
        user: t,
        guildId: s,
        channelId: r
    }) : a === x.RP.WISHLIST ? (0, i.jsx)(f.A, {
        profileOwner: t
    }) : null
}

function h(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: l,
        guildId: s,
        channelId: u,
        items: g,
        initialSection: _,
        onClose: m
    } = e, {
        trackUserProfileAction: f
    } = (0, c.NJ)(), [{
        section: I,
        text: h
    }, E] = a.useState(g.find(e => {
        let {
            section: t
        } = e;
        return t === _
    }) ?? g[0]);
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [(0, i.jsx)(r.HOs, {
            orientation: "horizontal",
            className: p.gU,
            fade: !0,
            paddingFix: !1,
            children: (0, i.jsx)(r.VQ0, {
                type: "top",
                look: "custom",
                selectedItem: I,
                onItemSelect: e => {
                    d.A.hasUnsavedChanges() && I === x.RP.WIDGETS ? (0, o.VQ)() : (f({
                        action: "PRESS_SECTION",
                        section: e
                    }), E(t => g.find(t => t.section === e) ?? t))
                },
                children: g.map(e => (0, i.jsx)(r.VQ0.Item, {
                    className: p.YU,
                    id: e.section,
                    "aria-label": e.text,
                    children: e.text
                }, e.section))
            })
        }), (0, i.jsx)(r.VQ0.Panel, {
            id: I,
            "aria-label": h,
            className: p.NM,
            children: (0, i.jsx)(r.Fmo, {
                component: (0, i.jsx)(r.AC4, {
                    children: (0, i.jsx)(r.H, {
                        children: h
                    })
                }),
                children: (0, i.jsx)(A, {
                    user: t,
                    currentUser: n,
                    displayProfile: l,
                    guildId: s,
                    channelId: u,
                    section: I,
                    onClose: m
                })
            })
        })]
    })
}