/** chunk id: 240783 params = (module,exports,require) **/
t.d(n, {
    A: () => x
});
var i = t(627968),
    a = t(64700),
    l = t(311907),
    r = t(397927),
    o = t(351906),
    s = t(183555),
    d = t(382120),
    c = t(128490),
    _ = t(539548),
    u = t(412775),
    p = t(86404),
    A = t(738759),
    g = t(518477),
    h = t(985018),
    m = t(643146),
    f = t(843796);

function I(e) {
    let {
        section: n,
        user: t,
        currentUser: a,
        displayProfile: l,
        guildId: r,
        channelId: o,
        onClose: s
    } = e;
    return n === g.RP.ACTIVITY ? (0, i.jsx)(_.A, {
        user: t,
        currentUser: a,
        guildId: r,
        onClose: s
    }) : n === g.RP.MUTUAL_FRIENDS ? (0, i.jsx)(p.A, {
        user: t,
        guildId: r,
        channelId: o,
        onClose: s
    }) : n === g.RP.MUTUAL_GUILDS ? (0, i.jsx)(A.A, {
        user: t,
        onClose: s
    }) : n === g.RP.BOT_DATA_ACCESS ? (0, i.jsx)(d.A, {
        user: t
    }) : n === g.RP.BOT_INFO ? (0, i.jsx)(c.A, {
        user: t,
        displayProfile: l,
        guildId: r,
        onClose: s
    }) : (0, i.jsx)(u.A, {
        user: t,
        displayProfile: l,
        onClose: s
    })
}

function x(e) {
    let {
        user: n,
        currentUser: t,
        displayProfile: d,
        guildId: c,
        items: _,
        initialSection: u = g.RP.USER_INFO,
        onClose: p
    } = e, {
        trackUserProfileAction: A
    } = (0, s.NJ)(), x = (0, l.bG)([o.A], () => o.A.hidePersonalInformation), [b, v] = a.useState(() => _.find(e => {
        let {
            section: n
        } = e;
        return n === u
    })?.section ?? _[0]?.section);
    a.useEffect(() => {
        null == _.find(e => e.section === b) && v(_[0].section)
    }, [_, b]);
    let E = a.useCallback(e => {
        A({
            action: "PRESS_SECTION",
            section: e
        }), v(e)
    }, [A]);
    return x ? (0, i.jsx)("div", {
        className: f.kL,
        children: (0, i.jsxs)("div", {
            className: m.Ie,
            children: [(0, i.jsx)("div", {
                className: m.hB
            }), (0, i.jsx)("div", {
                className: m.BI,
                children: h.intl.string(h.t.Br1ls3)
            })]
        })
    }) : (0, i.jsxs)("div", {
        className: f.kL,
        children: [(0, i.jsx)(r.VQ0, {
            className: f.$H,
            type: "top",
            selectedItem: b,
            onItemSelect: E,
            children: _.map(e => {
                let {
                    section: n,
                    text: t
                } = e;
                return (0, i.jsx)(r.VQ0.Item, {
                    className: f.YU,
                    id: n,
                    "aria-label": t,
                    children: (0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: t
                    })
                }, n)
            })
        }), (0, i.jsx)(I, {
            items: _,
            section: b,
            user: n,
            currentUser: t,
            displayProfile: d,
            guildId: c,
            onClose: p
        })]
    })
}