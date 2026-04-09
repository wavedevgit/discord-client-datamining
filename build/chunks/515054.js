/** chunk id: 515054 params = (module,exports,require) **/
n.d(t, {
    A: () => A,
    K: () => I
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(397927),
    o = n(183555),
    c = n(958805),
    d = n(61881),
    u = n(790417),
    m = n(113763),
    g = n(583246),
    f = n(463259),
    x = n(133583),
    p = n(518477),
    _ = n(828622);

function I(e) {
    let {
        children: t,
        className: n,
        scrollerRef: l,
        ...a
    } = e;
    return (0, i.jsx)(r.HOs, {
        ref: l,
        className: s()(_.gN, n),
        fade: !0,
        ...a,
        children: t
    })
}

function h(e) {
    let {
        user: t,
        currentUser: n,
        section: l,
        displayProfile: a,
        guildId: s,
        channelId: r,
        onClose: o
    } = e;
    return l === p.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: t,
        currentUser: n,
        displayProfile: a,
        guildId: s,
        channelId: r,
        onClose: o
    }) : l === p.RP.MUTUAL_FRIENDS ? (0, i.jsx)(m.A, {
        user: t,
        guildId: s,
        channelId: r,
        onClose: o
    }) : l === p.RP.MUTUAL_GUILDS ? (0, i.jsx)(g.A, {
        user: t,
        onClose: o
    }) : l === p.RP.WIDGETS ? (0, i.jsx)(f.A, {
        user: t,
        guildId: s,
        channelId: r
    }) : l === p.RP.WISHLIST ? (0, i.jsx)(x.A, {
        profileOwner: t
    }) : null
}

function A(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: a,
        guildId: s,
        channelId: u,
        items: m,
        initialSection: g,
        onClose: f
    } = e, {
        trackUserProfileAction: x
    } = (0, o.NJ)(), [{
        section: I,
        text: A
    }, E] = l.useState(m.find(e => {
        let {
            section: t
        } = e;
        return t === g
    }) ?? m[0]);
    return (0, i.jsxs)("div", {
        className: _.kL,
        children: [(0, i.jsx)(r.HOs, {
            orientation: "horizontal",
            className: _.gU,
            fade: !0,
            paddingFix: !1,
            children: (0, i.jsx)(r.VQ0, {
                type: "top",
                look: "custom",
                selectedItem: I,
                onItemSelect: e => {
                    d.A.hasUnsavedChanges() && I === p.RP.WIDGETS ? c.A.notifyUnsavedWidgets() : (x({
                        action: "PRESS_SECTION",
                        section: e
                    }), E(t => m.find(t => t.section === e) ?? t))
                },
                children: m.map(e => (0, i.jsx)(r.VQ0.Item, {
                    className: _.YU,
                    id: e.section,
                    "aria-label": e.text,
                    children: e.text
                }, e.section))
            })
        }), (0, i.jsx)(r.VQ0.Panel, {
            id: I,
            "aria-label": A,
            className: _.NM,
            children: (0, i.jsx)(r.Fmo, {
                component: (0, i.jsx)(r.AC4, {
                    children: (0, i.jsx)(r.H, {
                        children: A
                    })
                }),
                children: (0, i.jsx)(h, {
                    user: t,
                    currentUser: n,
                    displayProfile: a,
                    guildId: s,
                    channelId: u,
                    section: I,
                    onClose: f
                })
            })
        })]
    })
}