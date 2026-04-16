/** chunk id: 240783 params = (module,exports,require) **/
t.d(n, {
    A: () => I
});
var i = t(627968),
    a = t(64700),
    l = t(311907),
    r = t(397927),
    d = t(351906),
    s = t(183555),
    o = t(382120),
    c = t(128490),
    u = t(539548),
    _ = t(412775),
    p = t(86404),
    A = t(738759),
    g = t(518477),
    f = t(985018),
    h = t(643146),
    m = t(843796);

function x(e) {
    let {
        section: n,
        user: t,
        currentUser: a,
        displayProfile: l,
        guildId: r,
        channelId: d,
        onClose: s
    } = e;
    return n === g.RP.ACTIVITY ? (0, i.jsx)(u.A, {
        user: t,
        currentUser: a,
        guildId: r,
        onClose: s
    }) : n === g.RP.MUTUAL_FRIENDS ? (0, i.jsx)(p.A, {
        user: t,
        guildId: r,
        channelId: d,
        onClose: s
    }) : n === g.RP.MUTUAL_GUILDS ? (0, i.jsx)(A.A, {
        user: t,
        onClose: s
    }) : n === g.RP.BOT_DATA_ACCESS ? (0, i.jsx)(o.A, {
        user: t
    }) : n === g.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: t,
        displayProfile: l,
        guildId: r,
        onClose: s
    }) : (0, i.jsx)(_.A, {
        user: t,
        displayProfile: l,
        onClose: s
    })
}

function I(e) {
    let {
        user: n,
        currentUser: t,
        displayProfile: o,
        guildId: c,
        items: u,
        initialSection: _ = g.RP.USER_INFO,
        onClose: p
    } = e, {
        trackUserProfileAction: A
    } = (0, s.NJ)(), I = (0, l.bG)([d.A], () => d.A.hidePersonalInformation), [b, v] = a.useState(() => u.find(e => {
        let {
            section: n
        } = e;
        return n === _
    })?.section ?? u[0]?.section);
    a.useEffect(() => {
        null == u.find(e => e.section === b) && v(u[0].section)
    }, [u, b]);
    let E = a.useCallback(e => {
        A({
            action: "PRESS_SECTION",
            section: e
        }), v(e)
    }, [A]);
    return I ? (0, i.jsx)("div", {
        className: m.kL,
        children: (0, i.jsxs)("div", {
            className: h.Ie,
            children: [(0, i.jsx)("div", {
                className: h.hB
            }), (0, i.jsx)("div", {
                className: h.BI,
                children: f.intl.string(f.t.Br1ls3)
            })]
        })
    }) : (0, i.jsxs)("div", {
        className: m.kL,
        children: [(0, i.jsx)(r.VQ0, {
            className: m.$H,
            type: "top",
            selectedItem: b,
            onItemSelect: E,
            children: u.map(e => {
                let {
                    section: n,
                    text: t
                } = e;
                return (0, i.jsx)(r.VQ0.Item, {
                    className: m.YU,
                    id: n,
                    "aria-label": t,
                    children: (0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: t
                    })
                }, n)
            })
        }), (0, i.jsx)(x, {
            items: u,
            section: b,
            user: n,
            currentUser: t,
            displayProfile: o,
            guildId: c,
            onClose: p
        })]
    })
}